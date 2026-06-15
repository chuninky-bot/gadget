(function () {
  function countUnescaped(text, char) {
    let count = 0;
    for (let i = 0; i < text.length; i++) {
      if (text[i] !== char) continue;
      let slashCount = 0;
      for (let j = i - 1; j >= 0 && text[j] === "\\"; j--) slashCount++;
      if (slashCount % 2 === 0) count++;
    }
    return count;
  }

  function closeOpenQuotes(text, quotes = ['"']) {
    let repaired = text;
    for (const quote of quotes) {
      if (countUnescaped(repaired, quote) % 2 === 1) repaired += quote;
    }
    return repaired;
  }

  function balancePairs(text, openChar, closeChar) {
    let depth = 0;
    let inString = false;
    let quote = "";
    let escaped = false;

    for (const char of text) {
      if (inString) {
        if (escaped) {
          escaped = false;
        } else if (char === "\\") {
          escaped = true;
        } else if (char === quote) {
          inString = false;
        }
        continue;
      }

      if (char === '"' || char === "'") {
        inString = true;
        quote = char;
      } else if (char === openChar) {
        depth++;
      } else if (char === closeChar && depth > 0) {
        depth--;
      }
    }

    return text + closeChar.repeat(depth);
  }


  function balanceJsonClosers(text) {
    const stack = [];
    let inString = false;
    let escaped = false;

    for (const char of text) {
      if (inString) {
        if (escaped) {
          escaped = false;
        } else if (char === "\\") {
          escaped = true;
        } else if (char === '"') {
          inString = false;
        }
        continue;
      }

      if (char === '"') {
        inString = true;
      } else if (char === "{") {
        stack.push("}");
      } else if (char === "[") {
        stack.push("]");
      } else if ((char === "}" || char === "]") && stack[stack.length - 1] === char) {
        stack.pop();
      }
    }

    return text + stack.reverse().join("");
  }
  function repairJson(input) {
    let text = input.trim();
    if (!text) return text;

    text = text
      .replace(/[“”]/g, '"')
      .replace(/[‘’]/g, "'")
      .replace(/,\s*$/g, "")
      .replace(/,\s*([}\]])/g, "$1")
      .replace(/([{,]\s*)([A-Za-z_$][\w$-]*)(\s*:)/g, '$1"$2"$3')
      .replace(/'([^'\\]*(?:\\.[^'\\]*)*)'/g, (_, value) => `"${value.replace(/"/g, '\\"')}"`);

    text = closeOpenQuotes(text, ['"']);
    text = balanceJsonClosers(text);
    text = text.replace(/,\s*([}\]])/g, "$1");
    return text;
  }

  function parseJsonWithRepair(input) {
    try {
      return { value: JSON.parse(input), repaired: input, changed: false, error: null };
    } catch (firstError) {
      const repaired = repairJson(input);
      try {
        return { value: JSON.parse(repaired), repaired, changed: repaired !== input, error: firstError };
      } catch (secondError) {
        return { value: null, repaired, changed: repaired !== input, error: secondError };
      }
    }
  }

  function indentXml(xml) {
    const compact = xml.replace(/>\s+</g, "><").trim();
    const tokens = compact.replace(/></g, ">\n<").split("\n");
    let depth = 0;

    return tokens.map((token) => {
      if (/^<\//.test(token)) depth = Math.max(depth - 1, 0);
      const line = `${"  ".repeat(depth)}${token}`;
      if (/^<[^!?/][^>]*[^/]?>$/.test(token) && !/^<[^>]+>.*<\/[^>]+>$/.test(token)) depth++;
      return line;
    }).join("\n");
  }

  function repairXml(input) {
    let text = input.trim();
    if (!text) return text;

    text = text.replace(/&(?!amp;|lt;|gt;|quot;|apos;|#\d+;|#x[0-9a-fA-F]+;)/g, "&amp;");
    text = text.replace(/\s([:\w-]+)=([^"'\s>]+)/g, ' $1="$2"');

    if ((text.match(/</g) || []).length > (text.match(/>/g) || []).length) text += ">";

    const stack = [];
    const tagPattern = /<\/?([A-Za-z_][\w:.-]*)(?:\s[^<>]*)?>/g;
    let match;
    while ((match = tagPattern.exec(text))) {
      const tag = match[0];
      const name = match[1];
      if (/^<\?/.test(tag) || /^<!/.test(tag) || /\/>$/.test(tag)) continue;
      if (tag.startsWith("</")) {
        const index = stack.lastIndexOf(name);
        if (index >= 0) stack.splice(index, stack.length - index);
      } else {
        stack.push(name);
      }
    }

    return text + stack.reverse().map((name) => `</${name}>`).join("");
  }

  function formatXml(input) {
    const parser = new DOMParser();
    const serializer = new XMLSerializer();
    const repaired = repairXml(input);
    let document = parser.parseFromString(input, "application/xml");
    let changed = false;

    if (document.querySelector("parsererror")) {
      document = parser.parseFromString(repaired, "application/xml");
      changed = repaired !== input;
    }

    if (document.querySelector("parsererror")) {
      return { output: indentXml(repaired), repaired, changed, error: document.querySelector("parsererror")?.textContent || "XML parse error" };
    }

    return { output: indentXml(serializer.serializeToString(document)), repaired, changed, error: null };
  }

  const sqlKeywords = ["select", "from", "where", "group by", "order by", "having", "limit", "offset", "insert into", "values", "update", "set", "delete from", "left join", "right join", "inner join", "outer join", "join", "on", "and", "or"];

  function repairSql(input) {
    let text = input.trim();
    text = closeOpenQuotes(text, ["'", '"', "`"]);
    text = balancePairs(text, "(", ")");
    if (text && !/[;)]\s*$/.test(text)) text += ";";
    return text;
  }

  function formatSql(input) {
    let text = repairSql(input).replace(/\s+/g, " ").trim();
    for (const keyword of sqlKeywords) {
      const escaped = keyword.replace(/ /g, "\\s+");
      const re = new RegExp(`\\b${escaped}\\b`, "gi");
      const upper = keyword.toUpperCase();
      text = text.replace(re, keyword.includes(" ") ? upper : upper);
    }

    text = text
      .replace(/\s*,\s*/g, ",\n  ")
      .replace(/\b(FROM|WHERE|GROUP BY|ORDER BY|HAVING|LIMIT|OFFSET|VALUES|SET)\b/g, "\n$1")
      .replace(/\b(LEFT JOIN|RIGHT JOIN|INNER JOIN|OUTER JOIN|JOIN)\b/g, "\n$1")
      .replace(/\b(AND|OR)\b/g, "\n  $1")
      .replace(/;\s*$/g, ";");

    return text.trim();
  }

  function detectDelimiter(input) {
    const sample = input.split(/\r?\n/).slice(0, 5).join("\n");
    const comma = (sample.match(/,/g) || []).length;
    const tab = (sample.match(/\t/g) || []).length;
    const semicolon = (sample.match(/;/g) || []).length;
    if (tab >= comma && tab >= semicolon) return "\t";
    if (semicolon > comma) return ";";
    return ",";
  }

  function parseDelimited(input, delimiter = detectDelimiter(input)) {
    const rows = [];
    let row = [];
    let cell = "";
    let inQuotes = false;

    for (let i = 0; i < input.length; i++) {
      const char = input[i];
      const next = input[i + 1];

      if (char === '"') {
        if (inQuotes && next === '"') {
          cell += '"';
          i++;
        } else {
          inQuotes = !inQuotes;
        }
      } else if (char === delimiter && !inQuotes) {
        row.push(cell.trim());
        cell = "";
      } else if ((char === "\n" || char === "\r") && !inQuotes) {
        if (char === "\r" && next === "\n") i++;
        row.push(cell.trim());
        rows.push(row);
        row = [];
        cell = "";
      } else {
        cell += char;
      }
    }

    if (inQuotes) inQuotes = false;
    if (cell || row.length) {
      row.push(cell.trim());
      rows.push(row);
    }

    const width = Math.max(0, ...rows.map((item) => item.length));
    return rows.map((item) => item.concat(Array(Math.max(width - item.length, 0)).fill("")));
  }

  function stringifyDelimited(rows, delimiter = ",") {
    return rows.map((row) => row.map((cell) => {
      const value = String(cell ?? "");
      if (value.includes(delimiter) || /["\r\n]/.test(value)) return `"${value.replace(/"/g, '""')}"`;
      return value;
    }).join(delimiter)).join("\n");
  }

  window.formatUtils = {
    repairJson,
    parseJsonWithRepair,
    repairXml,
    formatXml,
    repairSql,
    formatSql,
    detectDelimiter,
    parseDelimited,
    stringifyDelimited,
  };
})();
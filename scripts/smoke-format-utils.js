global.window = global;
require("../assets/js/format-utils.js");

const json = formatUtils.parseJsonWithRepair('{name:"Gadget Box", items:[1,2,');
const sql = formatUtils.formatSql('select id,name from users where active=1');
const rows = formatUtils.parseDelimited('name,price\n"keyboard,19900');

if (!json.value) throw new Error('JSON repair failed');
if (!sql.includes('SELECT') || !sql.endsWith(';')) throw new Error('SQL format failed');
if (rows.length !== 2 || rows[1].length !== 2) throw new Error('Delimited parse failed');

console.log(JSON.stringify({
  jsonRepaired: json.repaired,
  sql,
  rows,
}, null, 2));
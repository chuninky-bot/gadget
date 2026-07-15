// Per-tool overrides for scripts/apply-guides.js.
// Each entry replaces the generic mad-lib guide template with content specific
// to that tool (intro, 4 guide-grid sections, and an FAQ block) in ko/en/ja/zh.
// Tools not listed here keep the generic template unchanged.

module.exports = {
  "/tools/text/word-counter/": {
    intro: {
      ko: "글자 수 세기는 텍스트 상자에 붙여넣은 내용의 전체 문자 수, 공백을 제외한 문자 수, 단어 수, 줄 수를 입력하는 즉시 계산해 보여줍니다.",
      en: "Word counter instantly calculates the total character count, character count without spaces, word count, and line count for any text you paste into the box.",
      ja: "文字数カウントは、テキストボックスに貼り付けた内容の全文字数、空白を除いた文字数、単語数、行数を入力と同時に計算して表示します。",
      zh: "字数统计会在你粘贴文本后立即计算总字符数、不含空格的字符数、单词数和行数。",
    },
    sections: [
      {
        heading: { ko: "언제 유용한가요?", en: "When is it useful?", ja: "どんな時に便利?", zh: "何时有用？" },
        body: {
          ko: "자기소개서나 원고지 매수처럼 글자 수 제한이 있는 글을 쓸 때, 또는 SNS 게시물의 글자 수 제한을 맞출 때 실시간으로 확인하기 좋습니다.",
          en: "It's useful when writing a cover letter or manuscript with a character limit, or when fitting a post within a social media character limit.",
          ja: "自己紹介文や原稿用紙のように文字数制限がある文章を書くときや、SNS投稿の文字数制限に合わせたいときにリアルタイムで確認できます。",
          zh: "在撰写有字数限制的自我介绍或稿件，或需要符合社交媒体字数限制的帖子时，可以实时查看结果。",
        },
      },
      {
        heading: { ko: "사용 방법", en: "How to use it", ja: "使い方", zh: "使用方法" },
        steps: {
          ko: ["텍스트 상자에 확인할 글을 붙여넣거나 직접 입력합니다.", "전체 문자, 공백 제외 문자, 단어, 줄 수가 자동으로 갱신되는 것을 확인합니다.", "다른 글을 확인하려면 지우기 버튼을 눌러 상자를 비웁니다."],
          en: ["Paste or type the text you want to check into the box.", "Watch the total character, character-without-spaces, word, and line counts update automatically.", "Press the clear button to empty the box before checking another piece of text."],
          ja: ["確認したい文章をテキストボックスに貼り付けるか直接入力します。", "全文字数、空白を除いた文字数、単語数、行数が自動的に更新されるのを確認します。", "別の文章を確認する場合は、消去ボタンでボックスを空にします。"],
          zh: ["将要检查的文本粘贴或输入到文本框中。", "查看全部字符数、不含空格字符数、单词数和行数是否自动更新。", "如需检查其他文本，点击清除按钮清空文本框。"],
        },
      },
      {
        heading: { ko: "알아두면 좋은 점", en: "Good to know", ja: "知っておくと良いこと", zh: "实用提示" },
        body: {
          ko: "단어 수는 공백과 줄바꿈을 기준으로 나눠 계산하므로, 문장부호만 있는 줄이나 빈 줄이 많으면 예상과 다르게 집계될 수 있습니다.",
          en: "Word count is calculated by splitting on spaces and line breaks, so lines with only punctuation or many blank lines may produce a count different from what you expect.",
          ja: "単語数は空白と改行を基準に分割して計算するため、句読点だけの行や空行が多いと想定と異なる集計になることがあります。",
          zh: "单词数是按空格和换行符分隔计算的，如果存在只有标点符号的行或较多空行，统计结果可能与预期不同。",
        },
      },
      {
        heading: { ko: "데이터 처리 안내", en: "Data handling", ja: "データ処理について", zh: "数据处理说明" },
        body: {
          ko: "입력한 텍스트는 브라우저 안에서만 계산되며 서버로 전송되거나 저장되지 않으므로, 초안이나 아직 공개하지 않은 문서도 안심하고 붙여넣을 수 있습니다.",
          en: "Your text is counted entirely in your browser and is never sent to a server or stored, so it's safe to paste in drafts or documents you haven't published yet.",
          ja: "入力したテキストはブラウザー内でのみ計算され、サーバーへ送信・保存されることはないため、下書きや未公開の文書でも安心して貼り付けられます。",
          zh: "输入的文本仅在浏览器中计算，不会发送到服务器或被保存，因此可以放心粘贴草稿或尚未公开的文档。",
        },
      },
    ],
    faq: [
      {
        q: { ko: "공백을 제외한 글자 수는 어떻게 계산되나요?", en: "How is the character count without spaces calculated?", ja: "空白を除いた文字数はどのように計算されますか？", zh: "不含空格的字符数是如何计算的？" },
        a: { ko: "스페이스, 탭, 줄바꿈 문자를 제외한 나머지 문자만 세어 \"공백 제외\" 항목에 표시합니다.", en: "It counts every character except spaces, tabs, and line breaks, and shows the result in the \"characters without spaces\" field.", ja: "スペース、タブ、改行を除いた文字だけを数えて「空白を除く」欄に表示します。", zh: "会统计除空格、制表符和换行符之外的所有字符，并显示在“不含空格”一栏。" },
      },
      {
        q: { ko: "입력한 텍스트가 서버로 전송되나요?", en: "Is my text sent to a server?", ja: "入力したテキストはサーバーに送信されますか？", zh: "输入的文本会发送到服务器吗？" },
        a: { ko: "아니요. 모든 계산은 브라우저 안에서만 이루어지며 입력 내용은 저장되거나 외부로 전송되지 않습니다.", en: "No. All counting happens locally in your browser, and your input is never stored or sent anywhere.", ja: "いいえ。すべての計算はブラウザー内でのみ行われ、入力内容が保存されたり外部へ送信されたりすることはありません。", zh: "不会。所有计算都仅在浏览器本地完成，输入内容不会被保存或发送到任何地方。" },
      },
      {
        q: { ko: "긴 문서를 붙여넣어도 느려지지 않나요?", en: "Will it slow down if I paste a long document?", ja: "長い文書を貼り付けても遅くなりませんか？", zh: "粘贴较长的文档会变慢吗？" },
        a: { ko: "일반적인 문서나 게시글 길이라면 입력과 동시에 즉시 계산되며, 매우 긴 텍스트에서는 브라우저 성능에 따라 반응 속도가 달라질 수 있습니다.", en: "For typical documents or posts, counts update instantly as you type; for extremely long text, response time may vary depending on your browser's performance.", ja: "一般的な文書や投稿程度の長さであれば入力と同時に即座に計算されますが、非常に長いテキストではブラウザーの性能により反応速度が変わることがあります。", zh: "对于一般长度的文档或帖子，会随输入即时计算；对于非常长的文本，响应速度可能因浏览器性能而有所不同。" },
      },
    ],
  },

  "/tools/converter/json-formatter/": {
    intro: {
      ko: "JSON 포맷터는 압축되거나 정렬이 흐트러진 JSON 문자열을 들여쓰기와 함께 정리하고, 누락된 따옴표·중괄호·대괄호·후행 쉼표를 가능한 범위에서 자동으로 보정합니다.",
      en: "JSON formatter re-indents minified or messy JSON and automatically repairs missing quotes, braces, brackets, and trailing commas where possible.",
      ja: "JSONフォーマッターは、圧縮または整列が崩れたJSON文字列をインデント付きで整理し、不足した引用符・中括弧・角括弧・末尾のカンマを可能な範囲で自動修復します。",
      zh: "JSON 格式化工具会为压缩或格式混乱的 JSON 重新添加缩进，并尽可能自动修复缺失的引号、大括号、中括号和尾随逗号。",
    },
    sections: [
      {
        heading: { ko: "언제 유용한가요?", en: "When is it useful?", ja: "どんな時に便利?", zh: "何时有用？" },
        body: {
          ko: "API 응답을 로그나 개발자 도구에서 그대로 복사했을 때, 또는 설정 파일에 따옴표나 쉼표가 하나 빠져 파싱 오류가 날 때 원인을 빠르게 찾는 데 도움이 됩니다.",
          en: "It helps when you've copied an API response straight from logs or dev tools, or when a config file fails to parse because of one missing quote or comma.",
          ja: "APIレスポンスをログや開発者ツールからそのままコピーしたときや、設定ファイルの引用符やカンマが一つ欠けてパースエラーになったときに原因を素早く見つけるのに役立ちます。",
          zh: "当你从日志或开发者工具中直接复制 API 响应，或配置文件因缺少一个引号或逗号而解析失败时，可以帮助你快速定位问题。",
        },
      },
      {
        heading: { ko: "사용 방법", en: "How to use it", ja: "使い方", zh: "使用方法" },
        steps: {
          ko: ["입력창에 JSON 문자열을 붙여넣습니다.", "상태 메시지로 자동 복구가 일어났는지, 형식이 유효한지 확인합니다.", "정리된 결과를 복사해 코드나 문서에 붙여넣습니다."],
          en: ["Paste the JSON string into the input box.", "Check the status line to see whether anything was auto-repaired or if the format is already valid.", "Copy the formatted result into your code or document."],
          ja: ["入力欄にJSON文字列を貼り付けます。", "自動修復が行われたか、形式が有効かをステータスメッセージで確認します。", "整理された結果をコピーしてコードや文書に貼り付けます。"],
          zh: ["将 JSON 字符串粘贴到输入框中。", "查看状态提示，确认是否进行了自动修复或格式本身是否有效。", "复制整理后的结果，粘贴到代码或文档中。"],
        },
      },
      {
        heading: { ko: "알아두면 좋은 점", en: "Good to know", ja: "知っておくと良いこと", zh: "实用提示" },
        body: {
          ko: "자동 복구는 완전한 파서가 아니므로, 특히 설정 파일이나 배포용 코드처럼 중요한 값은 복사하기 전에 결과가 원래 의도와 같은지 한 번 더 확인하는 것이 좋습니다.",
          en: "Auto-repair isn't a full-fidelity parser, so for important values like config files or production code, double-check that the result still matches your original intent before copying.",
          ja: "自動修復は完全なパーサーではないため、特に設定ファイルや本番用コードのような重要な値は、コピーする前に結果が本来の意図と一致しているか改めて確認してください。",
          zh: "自动修复并非完整的解析器，因此对于配置文件或生产代码等重要内容，在复制前请再次确认结果是否符合原本的意图。",
        },
      },
      {
        heading: { ko: "데이터 처리 안내", en: "Data handling", ja: "データ処理について", zh: "数据处理说明" },
        body: {
          ko: "정리는 브라우저 메모리 안에서 처리되므로 대부분의 API 응답이나 로그 크기를 실시간으로 다룰 수 있으며, 입력 내용은 서버로 전송되지 않습니다.",
          en: "Formatting happens in your browser's memory, so it can handle most API responses and log sizes in real time, and your input is never sent to a server.",
          ja: "整理はブラウザーのメモリ内で処理されるため、ほとんどのAPIレスポンスやログのサイズをリアルタイムで扱うことができ、入力内容がサーバーへ送信されることはありません。",
          zh: "格式化在浏览器内存中完成，可以实时处理大多数 API 响应和日志大小，且输入内容不会发送到服务器。",
        },
      },
    ],
    faq: [
      {
        q: { ko: "따옴표나 중괄호가 빠진 JSON도 정리할 수 있나요?", en: "Can it clean up JSON with missing quotes or braces?", ja: "引用符や中括弧が欠けたJSONも整理できますか？", zh: "缺少引号或大括号的 JSON 也能整理吗？" },
        a: { ko: "네. 누락된 따옴표, 닫는 중괄호·대괄호, 후행 쉼표를 가능한 범위에서 자동으로 보정한 뒤, 상태 메시지로 무엇을 복구했는지 함께 안내합니다.", en: "Yes. It repairs missing quotes, closing braces or brackets, and trailing commas where possible, and the status line explains what was fixed.", ja: "はい。不足した引用符、閉じ中括弧・角括弧、末尾のカンマを可能な範囲で自動的に補正し、何を修復したかをステータスメッセージで案内します。", zh: "可以。它会尽可能自动修复缺失的引号、闭合的大括号或中括号以及尾随逗号，并在状态提示中说明修复了哪些内容。" },
      },
      {
        q: { ko: "복구된 결과를 그대로 신뢰해도 되나요?", en: "Can I fully trust the repaired result?", ja: "修復された結果をそのまま信頼してもよいですか？", zh: "可以完全信任修复后的结果吗？" },
        a: { ko: "자동 복구는 원본 구조를 완벽히 보장하는 파서가 아니므로, 결과 화면에서 값과 구조를 눈으로 한 번 더 확인한 뒤 복사하는 것을 권장합니다.", en: "Auto-repair doesn't guarantee it perfectly reconstructs the original structure, so we recommend reviewing the values and structure in the result before copying.", ja: "自動修復は元の構造を完全に保証するパーサーではないため、結果画面で値と構造を目視で再確認してからコピーすることをおすすめします。", zh: "自动修复无法保证完全还原原始结构，建议在结果区域再次核对数值和结构后再复制。" },
      },
      {
        q: { ko: "API 응답처럼 큰 JSON도 처리되나요?", en: "Does it handle large JSON like API responses?", ja: "APIレスポンスのような大きなJSONも処理できますか？", zh: "能处理像 API 响应这样较大的 JSON 吗？" },
        a: { ko: "브라우저 메모리 안에서 처리되므로 대부분의 API 응답과 로그 크기를 실시간으로 정리할 수 있으며, 입력 내용은 서버로 전송되지 않습니다.", en: "Since it runs in your browser's memory, it can format most API responses and log sizes in real time, and your input is never sent to a server.", ja: "ブラウザーのメモリ内で処理されるため、ほとんどのAPIレスポンスやログのサイズをリアルタイムで整理でき、入力内容がサーバーへ送信されることはありません。", zh: "由于在浏览器内存中处理，可以实时格式化大多数 API 响应和日志大小，且输入内容不会发送到服务器。" },
      },
    ],
    relatedGuide: {
      href: "../../../guides/what-is-json/",
      label: { ko: "가이드 보기: JSON이란 무엇인가", en: "Read the guide: What is JSON?", ja: "ガイドを読む: JSONとは何か", zh: "阅读指南：什么是 JSON？" },
    },
  },

  "/tools/converter/uuid-generator/": {
    intro: {
      ko: "UUID 생성기는 브라우저의 crypto API를 이용해 무작위 기반의 UUID v4 값을 즉시 만들어주는 간단한 도구입니다.",
      en: "UUID generator uses your browser's crypto API to instantly create random UUID v4 values.",
      ja: "UUIDジェネレーターは、ブラウザーのcrypto APIを使ってランダムベースのUUID v4値を即座に生成するシンプルなツールです。",
      zh: "UUID 生成器使用浏览器的 crypto API，即时生成基于随机数的 UUID v4 值。",
    },
    sections: [
      {
        heading: { ko: "언제 유용한가요?", en: "When is it useful?", ja: "どんな時に便利?", zh: "何时有用？" },
        body: {
          ko: "데이터베이스의 기본 키, 테스트 데이터, 세션 식별자처럼 겹치지 않는 고유 값이 필요한 개발 작업에서 자주 쓰입니다.",
          en: "It's commonly used in development work that needs unique, non-colliding values, such as database primary keys, test data, or session identifiers.",
          ja: "データベースの主キー、テストデータ、セッション識別子のように重複しない一意の値が必要な開発作業でよく使われます。",
          zh: "常用于需要唯一且不重复值的开发工作，例如数据库主键、测试数据或会话标识符。",
        },
      },
      {
        heading: { ko: "사용 방법", en: "How to use it", ja: "使い方", zh: "使用方法" },
        steps: {
          ko: ["페이지를 열면 첫 UUID가 자동으로 생성되어 있습니다.", "\"새 UUID\" 버튼을 눌러 새로운 값을 만듭니다.", "\"복사\" 버튼으로 결과 값을 바로 복사해 코드나 데이터에 붙여넣습니다."],
          en: ["A UUID is generated automatically as soon as the page loads.", "Press the \"New UUID\" button to create another value.", "Use the \"Copy\" button to copy the result straight into your code or data."],
          ja: ["ページを開くと最初のUUIDが自動的に生成されています。", "「新しいUUID」ボタンを押して新しい値を作成します。", "「コピー」ボタンで結果の値をそのままコピーし、コードやデータに貼り付けます。"],
          zh: ["打开页面后会自动生成第一个 UUID。", "点击“新建 UUID”按钮生成新的值。", "使用“复制”按钮直接复制结果，粘贴到代码或数据中。"],
        },
      },
      {
        heading: { ko: "알아두면 좋은 점", en: "Good to know", ja: "知っておくと良いこと", zh: "实用提示" },
        body: {
          ko: "버튼을 누를 때마다 매번 새로운 무작위 값이 생성되므로, 테스트 데이터를 여러 개 준비할 때 하나씩 눌러 필요한 만큼 값을 모을 수 있습니다.",
          en: "Every click generates a brand-new random value, so you can click repeatedly to collect as many test values as you need.",
          ja: "ボタンを押すたびに毎回新しいランダムな値が生成されるため、テストデータを複数用意したいときは何度か押して必要な数だけ値を集められます。",
          zh: "每次点击都会生成全新的随机值，因此需要多个测试数据时可以多次点击来收集所需数量。",
        },
      },
      {
        heading: { ko: "데이터 처리 안내", en: "Data handling", ja: "データ処理について", zh: "数据处理说明" },
        body: {
          ko: "UUID는 브라우저 안에서만 생성되며 별도로 저장되거나 서버로 전송되지 않으므로, 생성한 값을 잃어버리지 않으려면 복사해 바로 저장해두어야 합니다.",
          en: "UUIDs are generated entirely in your browser and are never stored or sent to a server, so copy and save a value right away if you don't want to lose it.",
          ja: "UUIDはブラウザー内でのみ生成され、別途保存されたりサーバーへ送信されたりすることはないため、生成した値を失いたくない場合はすぐにコピーして保存してください。",
          zh: "UUID 仅在浏览器中生成，不会被单独保存或发送到服务器，如果不想丢失生成的值，请立即复制并保存。",
        },
      },
    ],
    faq: [
      {
        q: { ko: "생성되는 UUID는 어떤 버전인가요?", en: "Which UUID version does it generate?", ja: "生成されるUUIDはどのバージョンですか？", zh: "生成的是哪个版本的 UUID？" },
        a: { ko: "브라우저의 crypto API를 사용한 무작위 기반의 UUID v4를 생성합니다.", en: "It generates random-based UUID v4 values using your browser's crypto API.", ja: "ブラウザーのcrypto APIを使用したランダムベースのUUID v4を生成します。", zh: "使用浏览器的 crypto API 生成基于随机数的 UUID v4。" },
      },
      {
        q: { ko: "여러 개를 한 번에 만들 수 있나요?", en: "Can I generate several at once?", ja: "複数のUUIDを一度に作れますか？", zh: "可以一次生成多个吗？" },
        a: { ko: "한 번에 하나씩 생성되지만, \"새 UUID\" 버튼을 여러 번 눌러 필요한 만큼 값을 만들고 복사할 수 있습니다.", en: "It creates one value at a time, but you can click the \"New UUID\" button as many times as needed and copy each one.", ja: "一度に一つずつ生成されますが、「新しいUUID」ボタンを繰り返し押して必要な数だけ値を作成しコピーできます。", zh: "每次生成一个值，但可以多次点击“新建 UUID”按钮，按需生成并复制多个值。" },
      },
      {
        q: { ko: "생성된 값이 서버에 기록되나요?", en: "Is the generated value logged on a server?", ja: "生成された値はサーバーに記録されますか？", zh: "生成的值会被记录到服务器吗？" },
        a: { ko: "아니요. UUID는 브라우저 안에서만 생성되며 사이트 운영자를 포함해 어디로도 전송되거나 저장되지 않습니다.", en: "No. UUIDs are generated entirely in your browser and are never sent or stored anywhere, including by the site operator.", ja: "いいえ。UUIDはブラウザー内でのみ生成され、サイト運営者を含めどこにも送信・保存されません。", zh: "不会。UUID 仅在浏览器中生成，不会发送或保存到任何地方，包括网站运营者。" },
      },
    ],
    relatedGuide: {
      href: "../../../guides/what-is-uuid/",
      label: { ko: "가이드 보기: UUID란 무엇이고 왜 필요한가", en: "Read the guide: What is a UUID and why use one?", ja: "ガイドを読む: UUIDとは何か、なぜ必要か", zh: "阅读指南：什么是 UUID，为什么需要它？" },
    },
  },

  "/tools/converter/xml-formatter/": {
    intro: {
      ko: "XML 포맷터는 한 줄로 압축된 XML 문서를 들여쓰기와 함께 정리하고, 닫히지 않은 태그를 가능한 범위에서 자동으로 보정합니다.",
      en: "XML formatter re-indents a single-line XML document and automatically fixes unclosed tags where possible.",
      ja: "XMLフォーマッターは、1行に圧縮されたXML文書をインデント付きで整理し、閉じられていないタグを可能な範囲で自動的に補正します。",
      zh: "XML 格式化工具会为压缩成一行的 XML 文档重新添加缩进，并尽可能自动修复未闭合的标签。",
    },
    sections: [
      {
        heading: { ko: "언제 유용한가요?", en: "When is it useful?", ja: "どんな時に便利?", zh: "何时有用？" },
        body: {
          ko: "API나 설정 파일에서 가져온 압축된 XML을 읽기 좋게 펼쳐 보거나, 태그가 하나 빠져 파싱이 실패하는 원인을 찾을 때 유용합니다.",
          en: "It's useful for expanding minified XML from an API or config file into a readable form, or for finding why parsing fails because of one missing closing tag.",
          ja: "APIや設定ファイルから取得した圧縮XMLを読みやすく展開したり、タグが一つ欠けてパースに失敗する原因を調べたりするときに便利です。",
          zh: "适合把来自 API 或配置文件的压缩 XML 展开成易读格式，或查找因缺少一个闭合标签而导致解析失败的原因。",
        },
      },
      {
        heading: { ko: "사용 방법", en: "How to use it", ja: "使い方", zh: "使用方法" },
        steps: {
          ko: ["입력창에 XML 문서를 붙여넣습니다.", "상태 메시지로 자동 복구가 일어났는지, 유효한 형식인지 확인합니다.", "들여쓰기가 정리된 결과를 복사해 사용합니다."],
          en: ["Paste the XML document into the input box.", "Check the status line to see whether it was auto-repaired or is already valid.", "Copy the re-indented result for your own use."],
          ja: ["入力欄にXML文書を貼り付けます。", "自動修復が行われたか、有効な形式かをステータスメッセージで確認します。", "インデントが整理された結果をコピーして使用します。"],
          zh: ["将 XML 文档粘贴到输入框中。", "查看状态提示，确认是否进行了自动修复或格式本身是否有效。", "复制重新缩进后的结果供你使用。"],
        },
      },
      {
        heading: { ko: "알아두면 좋은 점", en: "Good to know", ja: "知っておくと良いこと", zh: "实用提示" },
        body: {
          ko: "일반적인 태그 구조와 들여쓰기를 정리하도록 만들어졌으며, 매우 복잡하거나 대용량인 XML은 브라우저 성능에 따라 처리 시간이 달라질 수 있습니다.",
          en: "It's built to clean up common tag structures and indentation; very complex or large XML documents may take longer depending on your browser's performance.",
          ja: "一般的なタグ構造とインデントを整理するように作られており、非常に複雑または大容量のXMLはブラウザーの性能によって処理時間が変わることがあります。",
          zh: "该工具主要用于整理常见的标签结构和缩进；对于非常复杂或体积较大的 XML，处理时间可能因浏览器性能而异。",
        },
      },
      {
        heading: { ko: "데이터 처리 안내", en: "Data handling", ja: "データ処理について", zh: "数据处理说明" },
        body: {
          ko: "자동 복구 결과는 참고용이며, 운영 환경에 반영하기 전에는 원본 태그 구조와 값이 의도와 일치하는지 확인하는 것을 권장합니다.",
          en: "The auto-repair result is meant as a reference; before applying it to a production environment, we recommend checking that the tag structure and values still match your intent.",
          ja: "自動修復の結果は参考用であり、本番環境に反映する前に元のタグ構造と値が意図と一致しているか確認することをおすすめします。",
          zh: "自动修复结果仅供参考，在应用到生产环境之前，建议确认标签结构和数值是否与原本意图一致。",
        },
      },
    ],
    faq: [
      {
        q: { ko: "닫히지 않은 태그도 자동으로 고쳐주나요?", en: "Can it fix unclosed tags automatically?", ja: "閉じられていないタグも自動的に修正されますか？", zh: "未闭合的标签也能自动修复吗？" },
        a: { ko: "네. 닫는 태그가 누락된 경우 가능한 범위에서 자동으로 보정한 뒤 들여쓰기를 정리해 보여줍니다.", en: "Yes. When a closing tag is missing, it repairs it where possible and re-indents the result.", ja: "はい。閉じタグが欠けている場合、可能な範囲で自動的に補正した上でインデントを整理して表示します。", zh: "可以。如果缺少闭合标签，会尽可能自动修复，并整理缩进后展示结果。" },
      },
      {
        q: { ko: "속성이나 네임스페이스가 있는 XML도 지원하나요?", en: "Does it support XML with attributes or namespaces?", ja: "属性や名前空間を含むXMLにも対応していますか？", zh: "支持带属性或命名空间的 XML 吗？" },
        a: { ko: "일반적인 속성과 네임스페이스가 포함된 태그 구조를 들여쓰기와 함께 정리할 수 있습니다.", en: "It can clean up and re-indent common tag structures that include attributes and namespaces.", ja: "一般的な属性や名前空間を含むタグ構造をインデント付きで整理できます。", zh: "可以整理并缩进包含常见属性和命名空间的标签结构。" },
      },
      {
        q: { ko: "결과를 그대로 운영 환경에 반영해도 되나요?", en: "Can I apply the result directly to production?", ja: "結果をそのまま本番環境に反映してもよいですか？", zh: "可以直接把结果应用到生产环境吗？" },
        a: { ko: "자동 복구 결과는 참고용이므로, 운영 환경에 반영하기 전에 원본 의도와 일치하는지 한 번 더 확인하는 것을 권장합니다.", en: "The auto-repair result is meant as a reference, so we recommend double-checking it matches your original intent before using it in production.", ja: "自動修復の結果は参考用のため、本番環境に反映する前に元の意図と一致しているか改めて確認することをおすすめします。", zh: "自动修复结果仅供参考，建议在用于生产环境前再次确认是否符合原本意图。" },
      },
    ],
  },

  "/tools/converter/sql-formatter/": {
    intro: {
      ko: "SQL 포맷터는 한 줄로 붙어 있는 SQL 쿼리를 키워드 대문자화와 줄바꿈 정리로 읽기 좋게 만들고, 끝에 세미콜론이 없으면 자동으로 채워 넣습니다.",
      en: "SQL formatter turns a single-line SQL query into a readable statement by uppercasing keywords and adding line breaks, and appends a trailing semicolon if one is missing.",
      ja: "SQLフォーマッターは、1行につながったSQLクエリをキーワードの大文字化と改行整理で読みやすく整え、末尾にセミコロンがない場合は自動的に追加します。",
      zh: "SQL 格式化工具会把挤在一行的 SQL 语句通过关键字大写和换行整理变得易读，并在末尾缺少分号时自动补上。",
    },
    sections: [
      {
        heading: { ko: "언제 유용한가요?", en: "When is it useful?", ja: "どんな時に便利?", zh: "何时有用？" },
        body: {
          ko: "로그나 ORM이 출력한 압축된 쿼리를 리뷰용으로 정리하거나, 문서·이슈에 붙여넣기 좋은 형태로 다듬을 때 유용합니다.",
          en: "It's useful for cleaning up a minified query printed by logs or an ORM for review, or tidying it into a form that's easy to paste into docs or issue trackers.",
          ja: "ログやORMが出力した圧縮クエリをレビュー用に整理したり、ドキュメントやイシューに貼り付けやすい形に整えたりするときに便利です。",
          zh: "适合把日志或 ORM 输出的压缩查询整理成便于审阅的格式，或整理成方便粘贴到文档、工单中的形式。",
        },
      },
      {
        heading: { ko: "사용 방법", en: "How to use it", ja: "使い方", zh: "使用方法" },
        steps: {
          ko: ["입력창에 SQL 쿼리를 붙여넣습니다.", "키워드가 대문자로, 줄바꿈이 정리된 결과를 확인합니다.", "정리된 쿼리를 복사해 문서나 코드 리뷰에 사용합니다."],
          en: ["Paste the SQL query into the input box.", "Check the result with uppercased keywords and cleaned-up line breaks.", "Copy the formatted query for docs or a code review."],
          ja: ["入力欄にSQLクエリを貼り付けます。", "キーワードが大文字になり、改行が整理された結果を確認します。", "整理されたクエリをコピーしてドキュメントやコードレビューに使用します。"],
          zh: ["将 SQL 查询粘贴到输入框中。", "查看关键字大写、换行整理后的结果。", "复制整理好的查询，用于文档或代码审阅。"],
        },
      },
      {
        heading: { ko: "알아두면 좋은 점", en: "Good to know", ja: "知っておくと良いこと", zh: "实用提示" },
        body: {
          ko: "특정 데이터베이스 전용 문법보다는 SELECT, INSERT, UPDATE 같은 공통적인 SQL 구조를 보기 좋게 정리하는 데 초점을 맞췄습니다.",
          en: "It focuses on cleanly formatting common SQL structures like SELECT, INSERT, and UPDATE, rather than database-specific syntax.",
          ja: "特定のデータベース専用構文よりも、SELECT、INSERT、UPDATEのような共通のSQL構造を見やすく整理することに重点を置いています。",
          zh: "该工具侧重于整理 SELECT、INSERT、UPDATE 等通用 SQL 结构，而非特定数据库的专有语法。",
        },
      },
      {
        heading: { ko: "데이터 처리 안내", en: "Data handling", ja: "データ処理について", zh: "数据处理说明" },
        body: {
          ko: "정리는 브라우저 안에서만 이루어지므로 실제 테이블명, 컬럼명, 조건값이 포함된 쿼리도 서버로 전송하지 않고 확인할 수 있습니다.",
          en: "Formatting happens entirely in your browser, so you can check queries containing real table names, column names, and condition values without sending them to a server.",
          ja: "整理はブラウザー内でのみ行われるため、実際のテーブル名、カラム名、条件値を含むクエリもサーバーへ送信せずに確認できます。",
          zh: "整理完全在浏览器中完成，即使查询包含真实的表名、列名和条件值，也无需发送到服务器即可查看。",
        },
      },
    ],
    faq: [
      {
        q: { ko: "세미콜론이 없는 쿼리도 정리되나요?", en: "Does it format queries that are missing a semicolon?", ja: "セミコロンがないクエリも整理されますか？", zh: "缺少分号的查询也能整理吗？" },
        a: { ko: "네. 문장 끝에 세미콜론이 없으면 자동으로 추가해 정리합니다.", en: "Yes. If a statement doesn't end with a semicolon, one is added automatically.", ja: "はい。文の末尾にセミコロンがない場合は自動的に追加して整理します。", zh: "可以。如果语句末尾没有分号，会自动补上。" },
      },
      {
        q: { ko: "특정 DB(MySQL, PostgreSQL 등) 문법에 맞춰 최적화되어 있나요?", en: "Is it optimized for a specific database dialect (MySQL, PostgreSQL, etc.)?", ja: "特定のDB（MySQL、PostgreSQLなど）の構文に最適化されていますか？", zh: "是否针对特定数据库方言（MySQL、PostgreSQL 等）做了优化？" },
        a: { ko: "특정 DB 전용 문법보다는 SELECT, INSERT, UPDATE 같은 공통적인 SQL 구조를 정리하는 데 초점을 맞췄습니다.", en: "It focuses on common SQL structures like SELECT, INSERT, and UPDATE rather than any one database's specific syntax.", ja: "特定のDB専用構文よりも、SELECT、INSERT、UPDATEといった共通のSQL構造の整理に重点を置いています。", zh: "该工具更侧重于整理 SELECT、INSERT、UPDATE 等通用 SQL 结构，而非某个数据库的专有语法。" },
      },
      {
        q: { ko: "실제 테이블명이 포함된 쿼리를 넣어도 안전한가요?", en: "Is it safe to paste in a query with real table names?", ja: "実際のテーブル名を含むクエリを入力しても安全ですか？", zh: "粘贴含有真实表名的查询安全吗？" },
        a: { ko: "네. 모든 정리는 브라우저 안에서만 처리되며 입력한 쿼리는 서버로 전송되지 않습니다.", en: "Yes. All formatting happens in your browser, and the query you paste is never sent to a server.", ja: "はい。すべての整理はブラウザー内でのみ処理され、入力したクエリがサーバーへ送信されることはありません。", zh: "是的。所有整理都在浏览器中完成，输入的查询不会发送到服务器。" },
      },
    ],
    relatedGuide: {
      href: "../../../guides/sql-formatting-tips/",
      label: { ko: "가이드 보기: SQL을 보기 좋게 정리해야 하는 이유", en: "Read the guide: Why formatting SQL queries matters", ja: "ガイドを読む: SQLを整形すべき理由", zh: "阅读指南：为什么要格式化 SQL 查询" },
    },
  },

  "/tools/converter/excel-cleaner/": {
    intro: {
      ko: "Excel CSV 정리 도구는 구분자를 자동 감지하거나 직접 선택해 CSV/TSV 데이터를 표 형태로 정리하고, 깨진 따옴표와 맞지 않는 행 길이를 보정합니다.",
      en: "Excel CSV cleaner detects the delimiter automatically (or lets you pick one) to clean up CSV/TSV data into a table, fixing broken quotes and mismatched row lengths.",
      ja: "Excel CSV整理ツールは、区切り文字を自動検出または手動選択してCSV/TSVデータを表形式に整理し、壊れた引用符や行の長さの不一致を補正します。",
      zh: "Excel CSV 清理工具会自动检测（或手动选择）分隔符，将 CSV/TSV 数据整理成表格，并修复损坏的引号和行长度不一致的问题。",
    },
    sections: [
      {
        heading: { ko: "언제 유용한가요?", en: "When is it useful?", ja: "どんな時に便利?", zh: "何时有用？" },
        body: {
          ko: "이메일이나 메모에서 복사한 표 데이터를 엑셀이나 구글 시트에 붙여넣기 전에 열 구분이 깨지지 않았는지 미리 정리하고 확인할 때 유용합니다.",
          en: "It's useful for tidying and previewing tabular data copied from an email or note before pasting it into Excel or Google Sheets, so column breaks stay intact.",
          ja: "メールやメモからコピーした表データをExcelやGoogleスプレッドシートに貼り付ける前に、列区切りが崩れていないか整理・確認したいときに便利です。",
          zh: "适合在把从邮件或备忘录复制的表格数据粘贴到 Excel 或 Google 表格之前，先整理并预览列是否被打乱。",
        },
      },
      {
        heading: { ko: "사용 방법", en: "How to use it", ja: "使い方", zh: "使用方法" },
        steps: {
          ko: ["구분자를 자동 감지로 두거나 쉼표, 탭, 세미콜론 중 하나를 직접 선택합니다.", "입력창에 CSV/TSV 데이터를 붙여넣습니다.", "표 미리보기로 열이 올바르게 나뉘었는지 확인한 뒤 결과를 복사합니다."],
          en: ["Leave the delimiter on auto-detect, or choose comma, tab, or semicolon manually.", "Paste the CSV/TSV data into the input box.", "Check the table preview to confirm columns split correctly, then copy the result."],
          ja: ["区切り文字を自動検出のままにするか、カンマ、タブ、セミコロンのいずれかを手動で選択します。", "入力欄にCSV/TSVデータを貼り付けます。", "表のプレビューで列が正しく分かれているか確認してから結果をコピーします。"],
          zh: ["保持分隔符为自动检测，或手动选择逗号、制表符、分号之一。", "将 CSV/TSV 数据粘贴到输入框中。", "通过表格预览确认列是否正确拆分，然后复制结果。"],
        },
      },
      {
        heading: { ko: "알아두면 좋은 점", en: "Good to know", ja: "知っておくと良いこと", zh: "实用提示" },
        body: {
          ko: "닫히지 않은 따옴표나 줄 길이가 맞지 않는 행을 가능한 범위에서 보정하지만, 원본 데이터가 심하게 깨진 경우 미리보기에서 열 순서를 한 번 더 확인하는 것이 좋습니다.",
          en: "It fixes unclosed quotes and mismatched row lengths where possible, but if the original data is badly broken, double-check the column order in the preview.",
          ja: "閉じられていない引用符や行の長さが合わない行を可能な範囲で補正しますが、元データが大きく崩れている場合はプレビューで列の順序を改めて確認してください。",
          zh: "会尽可能修复未闭合的引号和行长度不一致的问题，但如果原始数据损坏严重，建议在预览中再次确认列的顺序。",
        },
      },
      {
        heading: { ko: "데이터 처리 안내", en: "Data handling", ja: "データ処理について", zh: "数据处理说明" },
        body: {
          ko: "정리된 결과는 선택한 구분자에 맞춰 제공되므로 엑셀이나 구글 시트에 바로 붙여넣기 좋으며, 입력 데이터는 브라우저 밖으로 전송되지 않습니다.",
          en: "The cleaned result follows the delimiter you chose, so it pastes well directly into Excel or Google Sheets, and your input data never leaves your browser.",
          ja: "整理された結果は選択した区切り文字に合わせて提供されるため、ExcelやGoogleスプレッドシートにそのまま貼り付けやすく、入力データがブラウザーの外へ送信されることはありません。",
          zh: "整理后的结果会按所选分隔符输出，方便直接粘贴到 Excel 或 Google 表格，输入数据也不会离开你的浏览器。",
        },
      },
    ],
    faq: [
      {
        q: { ko: "구분자를 직접 지정할 수 있나요?", en: "Can I set the delimiter manually?", ja: "区切り文字を手動で指定できますか？", zh: "可以手动指定分隔符吗？" },
        a: { ko: "네. 자동 감지 외에도 쉼표, 탭, 세미콜론 구분자를 직접 선택할 수 있습니다.", en: "Yes. Besides auto-detect, you can manually choose comma, tab, or semicolon delimiters.", ja: "はい。自動検出のほかに、カンマ、タブ、セミコロンの区切り文字を手動で選択できます。", zh: "可以。除了自动检测，还可以手动选择逗号、制表符或分号作为分隔符。" },
      },
      {
        q: { ko: "따옴표가 깨진 CSV도 정리되나요?", en: "Can it clean CSV data with broken quotes?", ja: "引用符が壊れたCSVも整理できますか？", zh: "引号损坏的 CSV 也能整理吗？" },
        a: { ko: "닫히지 않은 따옴표나 줄 길이가 맞지 않는 행을 가능한 범위에서 보정하고, 정리된 결과를 표 미리보기로 함께 보여줍니다.", en: "It fixes unclosed quotes and mismatched row lengths where possible, and shows the cleaned result alongside a table preview.", ja: "閉じられていない引用符や行の長さが合わない行を可能な範囲で補正し、整理された結果を表のプレビューと共に表示します。", zh: "会尽可能修复未闭合的引号和行长度不一致的问题，并通过表格预览一并展示整理结果。" },
      },
      {
        q: { ko: "결과를 엑셀에 바로 붙여넣을 수 있나요?", en: "Can I paste the result directly into Excel?", ja: "結果をそのままExcelに貼り付けられますか？", zh: "结果可以直接粘贴到 Excel 吗？" },
        a: { ko: "네. 정리된 결과는 선택한 구분자에 맞춰 제공되므로 엑셀이나 구글 시트에 바로 붙여넣기 좋은 형태입니다.", en: "Yes. The cleaned result follows your chosen delimiter, so it's ready to paste directly into Excel or Google Sheets.", ja: "はい。整理された結果は選択した区切り文字に合わせて提供されるため、ExcelやGoogleスプレッドシートにそのまま貼り付けやすい形式です。", zh: "可以。整理后的结果会按所选分隔符输出，适合直接粘贴到 Excel 或 Google 表格。" },
      },
    ],
    relatedGuide: {
      href: "../../../guides/csv-tsv-excel-guide/",
      label: { ko: "가이드 보기: CSV·TSV와 엑셀 호환 데이터 정리하기", en: "Read the guide: Cleaning up CSV/TSV data for Excel", ja: "ガイドを読む: CSV・TSVとExcel互換データの整理方法", zh: "阅读指南：整理 CSV/TSV 数据以兼容 Excel" },
    },
  },

  "/tools/text/ascii-art/": {
    intro: {
      ko: "ASCII ART 변환기는 TEXT2ART와 IMAGE2ART 두 모드를 지원해, 짧은 문구나 사진을 문자로 이루어진 아트로 즉시 바꿔줍니다.",
      en: "The ASCII art converter supports both TEXT2ART and IMAGE2ART modes, instantly turning short phrases or photos into character-based art.",
      ja: "ASCII ART変換機はTEXT2ARTとIMAGE2ARTの2つのモードに対応し、短い文言や写真を即座に文字で構成されたアートに変換します。",
      zh: "ASCII 艺术转换器支持 TEXT2ART 和 IMAGE2ART 两种模式，可即时将短语或照片转换为字符艺术。",
    },
    sections: [
      {
        heading: { ko: "언제 유용한가요?", en: "When is it useful?", ja: "どんな時に便利?", zh: "何时有用？" },
        body: {
          ko: "README나 커밋 메시지, 커뮤니티 게시판에 넣을 문자 배너를 만들거나, 사진을 독특한 문자 이미지로 바꿔 공유하고 싶을 때 유용합니다.",
          en: "It's useful for making a character banner for a README, commit message, or community post, or for turning a photo into a unique character image to share.",
          ja: "READMEやコミットメッセージ、コミュニティ掲示板に載せる文字バナーを作ったり、写真をユニークな文字画像に変換して共有したいときに便利です。",
          zh: "适合为 README、提交信息或社区帖子制作字符横幅，或把照片转换成独特的字符图像来分享。",
        },
      },
      {
        heading: { ko: "사용 방법", en: "How to use it", ja: "使い方", zh: "使用方法" },
        steps: {
          ko: ["TEXT2ART 또는 IMAGE2ART 모드를 선택합니다.", "문구를 입력하거나 이미지를 업로드합니다.", "폭 슬라이더와 Dense, Soft, Block, Photo, Binary 같은 문자 세트로 결과물의 느낌을 조절한 뒤 복사합니다."],
          en: ["Choose either the TEXT2ART or IMAGE2ART mode.", "Type a phrase or upload an image.", "Adjust the look with the width slider and character-set presets like Dense, Soft, Block, Photo, or Binary, then copy the result."],
          ja: ["TEXT2ARTまたはIMAGE2ARTモードを選択します。", "文言を入力するか画像をアップロードします。", "幅スライダーとDense、Soft、Block、Photo、Binaryなどの文字セットで仕上がりを調整してからコピーします。"],
          zh: ["选择 TEXT2ART 或 IMAGE2ART 模式。", "输入短语或上传图片。", "使用宽度滑块和 Dense、Soft、Block、Photo、Binary 等字符集预设调整效果，然后复制结果。"],
        },
      },
      {
        heading: { ko: "알아두면 좋은 점", en: "Good to know", ja: "知っておくと良いこと", zh: "实用提示" },
        body: {
          ko: "결과는 고정폭 글꼴에서 가장 잘 정렬되므로, 코드 블록이나 터미널처럼 고정폭 글꼴을 쓰는 곳에 붙여넣을 때 모양이 가장 정확합니다.",
          en: "The result lines up best in a monospace font, so it looks most accurate when pasted somewhere that uses one, like a code block or terminal.",
          ja: "結果は等幅フォントで最もきれいに揃うため、コードブロックやターミナルのような等幅フォントを使う場所に貼り付けると最も正確な見た目になります。",
          zh: "结果在等宽字体下对齐效果最佳，因此粘贴到代码块或终端等使用等宽字体的地方时显示最准确。",
        },
      },
      {
        heading: { ko: "데이터 처리 안내", en: "Data handling", ja: "データ処理について", zh: "数据处理说明" },
        body: {
          ko: "IMAGE2ART로 업로드한 사진은 브라우저 안에서만 픽셀 단위로 분석되며 외부 서버로 전송되지 않으므로, 개인 사진도 그대로 변환에 사용할 수 있습니다.",
          en: "Photos uploaded via IMAGE2ART are analyzed pixel by pixel entirely in your browser and are never sent to an external server, so you can safely use personal photos.",
          ja: "IMAGE2ARTでアップロードした写真はブラウザー内でのみピクセル単位で解析され、外部サーバーへ送信されることはないため、個人の写真もそのまま変換に使用できます。",
          zh: "通过 IMAGE2ART 上传的照片仅在浏览器中逐像素分析，不会发送到外部服务器，因此可以放心用于转换个人照片。",
        },
      },
    ],
    faq: [
      {
        q: { ko: "글자와 이미지를 모두 아스키 아트로 바꿀 수 있나요?", en: "Can it convert both text and images into ASCII art?", ja: "文字と画像の両方をアスキーアートに変換できますか？", zh: "文字和图片都能转换成 ASCII 艺术吗？" },
        a: { ko: "네. TEXT2ART와 IMAGE2ART 두 모드를 지원하며, 사진을 업로드해 문자 이미지로 변환할 수도 있습니다.", en: "Yes. It supports both TEXT2ART and IMAGE2ART modes, and you can upload a photo to turn it into a character image.", ja: "はい。TEXT2ARTとIMAGE2ARTの2つのモードに対応しており、写真をアップロードして文字画像に変換することもできます。", zh: "可以。支持 TEXT2ART 和 IMAGE2ART 两种模式，也可以上传照片转换为字符图像。" },
      },
      {
        q: { ko: "결과물의 밀도나 폭을 조절할 수 있나요?", en: "Can I adjust the density or width of the result?", ja: "結果の密度や幅を調整できますか？", zh: "可以调整结果的密度或宽度吗？" },
        a: { ko: "네. 폭 슬라이더와 Dense, Soft, Block, Photo, Binary 같은 문자 세트 프리셋으로 결과물의 느낌을 조절할 수 있습니다.", en: "Yes. You can adjust the look with the width slider and character-set presets like Dense, Soft, Block, Photo, or Binary.", ja: "はい。幅スライダーとDense、Soft、Block、Photo、Binaryなどの文字セットプリセットで結果の雰囲気を調整できます。", zh: "可以。可以使用宽度滑块和 Dense、Soft、Block、Photo、Binary 等字符集预设来调整效果。" },
      },
      {
        q: { ko: "변환한 이미지가 서버에 업로드되나요?", en: "Are converted images uploaded to a server?", ja: "変換した画像はサーバーにアップロードされますか？", zh: "转换的图片会上传到服务器吗？" },
        a: { ko: "아니요. 이미지 처리는 브라우저 안에서만 이루어지며 업로드한 이미지는 외부로 전송되지 않습니다.", en: "No. Image processing happens entirely in your browser, and uploaded images are never sent anywhere else.", ja: "いいえ。画像処理はブラウザー内でのみ行われ、アップロードした画像が外部へ送信されることはありません。", zh: "不会。图片处理完全在浏览器中进行，上传的图片不会发送到其他任何地方。" },
      },
    ],
  },

  "/tools/text/encoding-converter/": {
    intro: {
      ko: "인코딩 변환 도구는 HEX, 퍼센트 인코딩된 값, 일반 텍스트를 입력하면 UTF-8과 EUC-KR 등 여러 문자 인코딩 기준으로 어떻게 읽히는지 한 번에 보여줍니다.",
      en: "The encoding converter takes HEX, percent-encoded values, or plain text and shows how they'd be read under several character encodings, including UTF-8 and EUC-KR, all at once.",
      ja: "エンコード変換ツールは、HEX、パーセントエンコードされた値、通常のテキストを入力すると、UTF-8やEUC-KRなど複数の文字エンコーディングでどう読まれるかを一度に表示します。",
      zh: "编码转换工具可以输入 HEX、百分号编码值或普通文本，一次性显示按 UTF-8、EUC-KR 等多种字符编码解析后的结果。",
    },
    sections: [
      {
        heading: { ko: "언제 유용한가요?", en: "When is it useful?", ja: "どんな時に便利?", zh: "何时有用？" },
        body: {
          ko: "옛 시스템이나 다른 인코딩으로 저장된 파일을 열었을 때 한글이 깨져 보일 경우, 원래 어떤 인코딩이었는지 후보를 눈으로 비교하며 찾는 데 도움이 됩니다.",
          en: "It helps when Korean text looks garbled after opening a file saved with an older system or different encoding, letting you visually compare candidate encodings to find the original.",
          ja: "古いシステムや異なるエンコーディングで保存されたファイルを開いて文字化けが起きた場合に、元がどのエンコーディングだったのか候補を目で比較しながら見つけるのに役立ちます。",
          zh: "当打开旧系统或不同编码保存的文件出现乱码时，可以帮助你通过肉眼比较候选编码，找出原始编码方式。",
        },
      },
      {
        heading: { ko: "사용 방법", en: "How to use it", ja: "使い方", zh: "使用方法" },
        steps: {
          ko: ["HEX 값이나 퍼센트 인코딩 문자열, 또는 일반 텍스트를 입력창에 넣습니다.", "UTF-8, EUC-KR 등 각 인코딩으로 해석한 결과를 나란히 확인합니다.", "원래 의도한 텍스트와 일치하는 결과를 복사합니다."],
          en: ["Enter a HEX value, a percent-encoded string, or plain text into the input box.", "Compare the results interpreted under UTF-8, EUC-KR, and other encodings side by side.", "Copy the result that matches the text you intended."],
          ja: ["HEX値やパーセントエンコード文字列、または通常のテキストを入力欄に入れます。", "UTF-8、EUC-KRなど各エンコーディングで解釈した結果を並べて確認します。", "本来意図したテキストと一致する結果をコピーします。"],
          zh: ["在输入框中输入 HEX 值、百分号编码字符串或普通文本。", "并排查看按 UTF-8、EUC-KR 等编码解析后的结果。", "复制与你原本想要的文本一致的结果。"],
        },
      },
      {
        heading: { ko: "알아두면 좋은 점", en: "Good to know", ja: "知っておくと良いこと", zh: "实用提示" },
        body: {
          ko: "여러 인코딩 후보를 동시에 보여주는 방식이므로, 결과 중 실제로 읽히는 문장이 있는 후보를 골라야 합니다. 모든 후보가 깨져 보인다면 다른 원인일 수 있습니다.",
          en: "Since it shows several encoding candidates at once, you'll need to pick the one that actually reads correctly. If every candidate looks garbled, the cause may be something else.",
          ja: "複数のエンコーディング候補を同時に表示する方式のため、実際に読める文章になっている候補を選ぶ必要があります。すべての候補が文字化けして見える場合は別の原因である可能性があります。",
          zh: "由于会同时展示多个编码候选结果，需要从中挑选出真正能正确阅读的那一个。如果所有候选结果都显示乱码，问题可能出在别处。",
        },
      },
      {
        heading: { ko: "데이터 처리 안내", en: "Data handling", ja: "データ処理について", zh: "数据处理说明" },
        body: {
          ko: "모든 변환은 브라우저 안에서 즉시 처리되며 입력값은 저장되지 않으므로, 로그나 문서에서 발견한 깨진 문자열도 그대로 붙여넣어 확인할 수 있습니다.",
          en: "All conversions happen instantly in your browser and your input is never stored, so you can safely paste in garbled strings found in logs or documents.",
          ja: "すべての変換はブラウザー内で即座に処理され、入力値が保存されることはないため、ログや文書で見つけた文字化けした文字列もそのまま貼り付けて確認できます。",
          zh: "所有转换都在浏览器中即时完成，输入内容不会被保存，因此可以放心粘贴日志或文档中发现的乱码字符串进行检查。",
        },
      },
    ],
    faq: [
      {
        q: { ko: "어떤 인코딩 방식을 지원하나요?", en: "Which encodings does it support?", ja: "どのエンコーディング方式に対応していますか？", zh: "支持哪些编码方式？" },
        a: { ko: "UTF-8, EUC-KR을 포함해 HEX, 퍼센트(URL) 인코딩 형태의 입력값을 여러 인코딩 기준으로 한 번에 확인할 수 있습니다.", en: "It reads HEX or percent (URL) encoded input under multiple encodings at once, including UTF-8 and EUC-KR.", ja: "UTF-8、EUC-KRを含め、HEX、パーセント（URL）エンコード形式の入力値を複数のエンコーディング基準で一度に確認できます。", zh: "可以将 HEX 或百分号（URL）编码的输入值同时按 UTF-8、EUC-KR 等多种编码方式解析。" },
      },
      {
        q: { ko: "한글이 깨진 텍스트도 복구할 수 있나요?", en: "Can it help recover garbled Korean text?", ja: "文字化けした韓国語のテキストも復元できますか？", zh: "能帮忙恢复乱码的韩文文本吗？" },
        a: { ko: "인코딩 차이로 깨진 문자열을 여러 인코딩 방식으로 재해석한 결과를 함께 보여주어, 원래 형태를 찾는 데 도움을 줍니다.", en: "It shows the string reinterpreted under several encodings side by side, helping you find the version that reads correctly.", ja: "エンコーディングの違いで文字化けした文字列を複数のエンコーディング方式で再解釈した結果を並べて表示し、元の形を見つける手助けをします。", zh: "会展示字符串在多种编码方式下重新解析的结果，帮助你找到能正确显示的原始形式。" },
      },
      {
        q: { ko: "입력한 값이 서버에 저장되나요?", en: "Is my input stored on a server?", ja: "入力した値はサーバーに保存されますか？", zh: "输入的内容会保存到服务器吗？" },
        a: { ko: "아니요. 모든 변환은 브라우저 안에서 즉시 처리되며 입력값은 저장되지 않습니다.", en: "No. All conversions happen instantly in your browser, and your input is never stored.", ja: "いいえ。すべての変換はブラウザー内で即座に処理され、入力値は保存されません。", zh: "不会。所有转换都在浏览器中即时完成，输入内容不会被保存。" },
      },
    ],
    relatedGuide: {
      href: "../../../guides/utf8-euckr-encoding/",
      label: { ko: "가이드 보기: UTF-8과 EUC-KR, 한글이 깨지는 이유", en: "Read the guide: UTF-8 vs EUC-KR, why Korean text breaks", ja: "ガイドを読む: UTF-8とEUC-KR、文字化けが起きる理由", zh: "阅读指南：UTF-8 与 EUC-KR，乱码的原因" },
    },
  },

  "/tools/converter/base64-encoding/": {
    intro: {
      ko: "Base64 인코딩 변환기는 입력한 텍스트를 UTF-8, EUC-KR, Shift_JIS를 포함한 10가지 문자 인코딩 기준의 Base64 값으로 동시에 변환하고, 반대로 Base64 값을 여러 인코딩으로 디코딩할 수도 있습니다.",
      en: "The Base64 encoder converts input text into Base64 under 10 character encodings at once, including UTF-8, EUC-KR, and Shift_JIS, and can also decode a Base64 value back under multiple encodings.",
      ja: "Base64エンコード変換機は、入力したテキストをUTF-8、EUC-KR、Shift_JISを含む10種類の文字エンコーディング基準のBase64値に同時に変換し、逆にBase64値を複数のエンコーディングでデコードすることもできます。",
      zh: "Base64 编码转换器可将输入的文本同时按 UTF-8、EUC-KR、Shift_JIS 等 10 种字符编码转换为 Base64 值，也可以反向将 Base64 值按多种编码解码。",
    },
    sections: [
      {
        heading: { ko: "언제 유용한가요?", en: "When is it useful?", ja: "どんな時に便利?", zh: "何时有用？" },
        body: {
          ko: "인증 토큰, 이미지 데이터 URI, 오래된 시스템에서 온 Base64 값처럼 인코딩이 명확하지 않은 데이터를 다룰 때 여러 인코딩 결과를 한 번에 비교할 수 있어 유용합니다.",
          en: "It's useful when handling data whose encoding isn't obvious, such as auth tokens, image data URIs, or Base64 values from an older system, since you can compare multiple encodings at once.",
          ja: "認証トークン、画像のデータURI、古いシステムから来たBase64値のようにエンコーディングが明確でないデータを扱うとき、複数のエンコーディング結果を一度に比較できて便利です。",
          zh: "在处理编码不明确的数据时（例如认证令牌、图片 data URI 或来自旧系统的 Base64 值），可以一次性比较多种编码结果，非常方便。",
        },
      },
      {
        heading: { ko: "사용 방법", en: "How to use it", ja: "使い方", zh: "使用方法" },
        steps: {
          ko: ["일반 텍스트를 입력해 인코딩하거나, Base64 문자열을 입력해 디코딩합니다.", "UTF-8, EUC-KR, Shift_JIS 등 인코딩별 결과를 나란히 확인합니다.", "필요한 인코딩의 결과를 복사해 사용합니다."],
          en: ["Enter plain text to encode it, or enter a Base64 string to decode it.", "Compare the results per encoding, such as UTF-8, EUC-KR, and Shift_JIS, side by side.", "Copy the result for the encoding you need."],
          ja: ["通常のテキストを入力してエンコードするか、Base64文字列を入力してデコードします。", "UTF-8、EUC-KR、Shift_JISなどエンコーディングごとの結果を並べて確認します。", "必要なエンコーディングの結果をコピーして使用します。"],
          zh: ["输入普通文本进行编码，或输入 Base64 字符串进行解码。", "并排查看 UTF-8、EUC-KR、Shift_JIS 等各编码的结果。", "复制所需编码的结果供你使用。"],
        },
      },
      {
        heading: { ko: "알아두면 좋은 점", en: "Good to know", ja: "知っておくと良いこと", zh: "实用提示" },
        body: {
          ko: "디코딩 결과 중에서 실제로 읽히는 문장이 있는 인코딩을 원본으로 판단하면 되며, 지원하지 않는 인코딩으로 만들어진 값은 모든 후보가 깨져 보일 수 있습니다.",
          en: "When decoding, treat whichever encoding produces readable text as the original; a value made with an unsupported encoding may look garbled under every candidate.",
          ja: "デコード結果の中で実際に読める文章になっているエンコーディングを元の形式と判断すればよく、対応していないエンコーディングで作られた値はすべての候補が文字化けして見えることがあります。",
          zh: "解码时，可以将实际能正确阅读的编码结果视为原始编码；如果值是用不支持的编码生成的，所有候选结果都可能显示乱码。",
        },
      },
      {
        heading: { ko: "데이터 처리 안내", en: "Data handling", ja: "データ処理について", zh: "数据处理说明" },
        body: {
          ko: "인코딩과 디코딩 모두 브라우저 안에서 처리되므로, 토큰이나 개인 정보가 포함된 값이라도 서버로 전송하지 않고 확인할 수 있습니다.",
          en: "Both encoding and decoding happen in your browser, so you can check values containing tokens or personal information without sending them to a server.",
          ja: "エンコードもデコードもブラウザー内で処理されるため、トークンや個人情報を含む値でもサーバーへ送信せずに確認できます。",
          zh: "编码和解码都在浏览器中完成，即使值包含令牌或个人信息，也无需发送到服务器即可查看。",
        },
      },
    ],
    faq: [
      {
        q: { ko: "여러 문자 인코딩을 동시에 확인할 수 있나요?", en: "Can I check multiple character encodings at once?", ja: "複数の文字エンコーディングを同時に確認できますか？", zh: "可以同时查看多种字符编码吗？" },
        a: { ko: "네. 입력값을 UTF-8, EUC-KR, Shift_JIS 등 10가지 문자 인코딩 기준의 Base64 결과로 한 번에 변환해 보여줍니다.", en: "Yes. It converts your input into Base64 under 10 character encodings at once, including UTF-8, EUC-KR, and Shift_JIS.", ja: "はい。入力値をUTF-8、EUC-KR、Shift_JISなど10種類の文字エンコーディング基準のBase64結果に一度に変換して表示します。", zh: "可以。会将输入内容同时按 UTF-8、EUC-KR、Shift_JIS 等 10 种字符编码转换为 Base64 结果。" },
      },
      {
        q: { ko: "디코딩도 가능한가요?", en: "Can it decode too?", ja: "デコードも可能ですか？", zh: "也支持解码吗？" },
        a: { ko: "네. Base64 문자열을 입력하면 지원하는 여러 인코딩으로 되돌린 결과를 함께 보여주므로, 그중 원본과 일치하는 결과를 고르면 됩니다.", en: "Yes. Enter a Base64 string and it shows the result decoded under each supported encoding, so you can pick the one that matches the original.", ja: "はい。Base64文字列を入力すると、対応する複数のエンコーディングで戻した結果を一緒に表示するので、その中から元の内容と一致するものを選べます。", zh: "可以。输入 Base64 字符串后会显示按各支持编码解码的结果，从中选出与原文一致的即可。" },
      },
      {
        q: { ko: "EUC-KR이나 Shift_JIS처럼 오래된 인코딩도 지원하나요?", en: "Does it support older encodings like EUC-KR or Shift_JIS?", ja: "EUC-KRやShift_JISのような古いエンコーディングにも対応していますか？", zh: "支持 EUC-KR、Shift_JIS 等旧编码吗？" },
        a: { ko: "네. UTF-8, EUC-KR, UTF-16LE, ISO-8859-1, Windows-1252, Shift_JIS, GBK, Big5, EUC-JP, Windows-1251까지 총 10가지 인코딩을 지원합니다.", en: "Yes. It supports 10 encodings in total: UTF-8, EUC-KR, UTF-16LE, ISO-8859-1, Windows-1252, Shift_JIS, GBK, Big5, EUC-JP, and Windows-1251.", ja: "はい。UTF-8、EUC-KR、UTF-16LE、ISO-8859-1、Windows-1252、Shift_JIS、GBK、Big5、EUC-JP、Windows-1251の合計10種類のエンコーディングに対応しています。", zh: "支持。共支持 UTF-8、EUC-KR、UTF-16LE、ISO-8859-1、Windows-1252、Shift_JIS、GBK、Big5、EUC-JP、Windows-1251 共 10 种编码。" },
      },
    ],
  },

  "/tools/text/url-encoder/": {
    intro: {
      ko: "URL 인코딩 변환기는 일반 문자열을 퍼센트 인코딩 문자열로, 또는 그 반대로 즉시 변환해주는 도구입니다.",
      en: "The URL encoder instantly converts plain text to percent-encoded strings, and back again.",
      ja: "URLエンコード変換機は、通常の文字列をパーセントエンコード文字列に、またはその逆に即座に変換するツールです。",
      zh: "URL 编码转换器可以即时将普通字符串转换为百分号编码字符串，反之亦然。",
    },
    sections: [
      {
        heading: { ko: "언제 유용한가요?", en: "When is it useful?", ja: "どんな時に便利?", zh: "何时有用？" },
        body: {
          ko: "쿼리 스트링에 한글이나 공백, 특수문자를 안전하게 넣어야 할 때, 또는 로그에 남은 인코딩된 URL을 원래 문자열로 되돌려 확인할 때 유용합니다.",
          en: "It's useful when you need to safely include Korean text, spaces, or special characters in a query string, or when decoding an encoded URL from a log back into readable text.",
          ja: "クエリ文字列に日本語や空白、特殊文字を安全に含める必要があるときや、ログに残ったエンコード済みURLを元の文字列に戻して確認したいときに便利です。",
          zh: "适合需要在查询字符串中安全放入中文、空格或特殊字符时，或需要把日志中记录的编码 URL 解码回可读文本时使用。",
        },
      },
      {
        heading: { ko: "사용 방법", en: "How to use it", ja: "使い方", zh: "使用方法" },
        steps: {
          ko: ["인코딩할 일반 문자열이나 디코딩할 퍼센트 인코딩 문자열을 입력창에 넣습니다.", "결과 영역에서 변환된 값을 확인합니다.", "필요하면 공백을 +로 바꾸는 옵션을 켠 뒤 결과를 복사합니다."],
          en: ["Enter the plain string to encode, or the percent-encoded string to decode, into the input box.", "Check the converted value in the result area.", "Turn on the option to convert spaces to + if needed, then copy the result."],
          ja: ["エンコードする通常の文字列、またはデコードするパーセントエンコード文字列を入力欄に入れます。", "結果エリアで変換された値を確認します。", "必要に応じて空白を+に変換するオプションを有効にしてから結果をコピーします。"],
          zh: ["在输入框中输入要编码的普通字符串，或要解码的百分号编码字符串。", "在结果区域查看转换后的值。", "如有需要，开启将空格转换为 + 的选项，然后复制结果。"],
        },
      },
      {
        heading: { ko: "알아두면 좋은 점", en: "Good to know", ja: "知っておくと良いこと", zh: "实用提示" },
        body: {
          ko: "&, =, 공백 같은 URL 쿼리 문자열의 특수문자도 안전하게 인코딩되므로, 변환된 값은 쿼리 파라미터나 링크에 바로 사용할 수 있습니다.",
          en: "Special characters common in query strings, like &, =, and spaces, are safely encoded, so the converted value can be used directly in query parameters or links.",
          ja: "&、=、空白のようなURLクエリ文字列の特殊文字も安全にエンコードされるため、変換された値はクエリパラメータやリンクにそのまま使用できます。",
          zh: "&、= 和空格等查询字符串中常见的特殊字符也会被安全编码，因此转换后的值可以直接用于查询参数或链接。",
        },
      },
      {
        heading: { ko: "데이터 처리 안내", en: "Data handling", ja: "データ処理について", zh: "数据处理说明" },
        body: {
          ko: "인코딩과 디코딩 모두 브라우저 안에서 즉시 처리되며 입력값은 서버로 전송되지 않으므로, 실제 서비스에 쓰이는 URL도 안심하고 확인할 수 있습니다.",
          en: "Both encoding and decoding happen instantly in your browser, and your input is never sent to a server, so you can safely check URLs used in a real service.",
          ja: "エンコードもデコードもブラウザー内で即座に処理され、入力値がサーバーへ送信されることはないため、実際のサービスで使われるURLも安心して確認できます。",
          zh: "编码和解码都在浏览器中即时完成，输入内容不会发送到服务器，因此可以放心检查实际服务中使用的 URL。",
        },
      },
    ],
    faq: [
      {
        q: { ko: "인코딩과 디코딩을 모두 지원하나요?", en: "Does it support both encoding and decoding?", ja: "エンコードとデコードの両方に対応していますか？", zh: "支持编码和解码两种功能吗？" },
        a: { ko: "네. 일반 문자열을 퍼센트 인코딩으로 바꾸거나, 반대로 인코딩된 문자열을 원래 텍스트로 되돌릴 수 있습니다.", en: "Yes. You can convert plain text into percent-encoded form, or convert an encoded string back into plain text.", ja: "はい。通常の文字列をパーセントエンコードに変換したり、逆にエンコードされた文字列を元のテキストに戻したりできます。", zh: "可以。既可以把普通字符串转换为百分号编码，也可以把编码字符串还原为原始文本。" },
      },
      {
        q: { ko: "쿼리 스트링의 특수문자도 처리되나요?", en: "Does it handle special characters in query strings?", ja: "クエリ文字列の特殊文字も処理されますか？", zh: "能处理查询字符串中的特殊字符吗？" },
        a: { ko: "네. &, =, 공백 같은 URL 쿼리 문자열의 특수문자를 안전하게 인코딩합니다.", en: "Yes. It safely encodes special characters common in query strings, such as &, =, and spaces.", ja: "はい。&、=、空白のようなURLクエリ文字列の特殊文字を安全にエンコードします。", zh: "可以。会安全编码查询字符串中常见的特殊字符，例如 &、= 和空格。" },
      },
      {
        q: { ko: "결과가 브라우저 주소창에 바로 사용 가능한가요?", en: "Can the result be used directly in a browser's address bar?", ja: "結果はブラウザーのアドレスバーにそのまま使用できますか？", zh: "结果可以直接用在浏览器地址栏吗？" },
        a: { ko: "네. 변환된 문자열은 URL 쿼리 파라미터나 링크에 바로 사용할 수 있는 형태로 제공됩니다.", en: "Yes. The converted string is provided in a form that's ready to use directly in URL query parameters or links.", ja: "はい。変換された文字列はURLクエリパラメータやリンクにそのまま使用できる形式で提供されます。", zh: "可以。转换后的字符串会以可直接用于 URL 查询参数或链接的形式提供。" },
      },
    ],
  },

  "/tools/diff/compare/": {
    intro: {
      ko: "DIFF 도구는 Text, JSON, XML 세 가지 모드로 두 값을 나란히 놓고 줄 단위로 비교해 변경점을 표시합니다.",
      en: "The DIFF tool places two values side by side under Text, JSON, or XML mode and highlights line-by-line changes.",
      ja: "DIFFツールは、Text、JSON、XMLの3つのモードで2つの値を並べて行単位で比較し、変更点を表示します。",
      zh: "DIFF 工具可在 Text、JSON、XML 三种模式下将两段内容并排比较，逐行标出差异。",
    },
    sections: [
      {
        heading: { ko: "언제 유용한가요?", en: "When is it useful?", ja: "どんな時に便利?", zh: "何时有用？" },
        body: {
          ko: "설정 파일의 두 버전이 뭐가 다른지 확인하거나, API 응답이 배포 전후로 어떻게 바뀌었는지 비교할 때 유용합니다.",
          en: "It's useful for finding what changed between two versions of a config file, or comparing how an API response changed before and after a deploy.",
          ja: "設定ファイルの2つのバージョンの違いを確認したり、APIレスポンスがデプロイの前後でどう変わったかを比較したりするときに便利です。",
          zh: "适合查看配置文件两个版本之间的差异，或比较 API 响应在部署前后发生了哪些变化。",
        },
      },
      {
        heading: { ko: "사용 방법", en: "How to use it", ja: "使い方", zh: "使用方法" },
        steps: {
          ko: ["Text, JSON, XML 중 비교할 형식의 모드 버튼을 누릅니다.", "좌우 입력창에 비교할 두 값을 각각 붙여넣고 \"비교하기\"를 누릅니다.", "\"좌우 바꾸기\"로 방향을 바꾸거나 \"지우기\"로 새로 비교를 시작할 수 있습니다."],
          en: ["Click the mode button for the format you want to compare: Text, JSON, or XML.", "Paste the two values into the left and right input boxes, then click \"Compare\".", "Use \"Swap\" to flip the direction, or \"Clear\" to start a new comparison."],
          ja: ["Text、JSON、XMLのうち比較する形式のモードボタンを押します。", "左右の入力欄に比較する2つの値をそれぞれ貼り付け、「比較する」を押します。", "「左右入れ替え」で方向を変えたり、「消去」で新しく比較を始めたりできます。"],
          zh: ["点击 Text、JSON、XML 中要比较的格式模式按钮。", "在左右输入框中分别粘贴要比较的两个值，然后点击“比较”。", "使用“左右互换”改变方向，或使用“清除”开始新的比较。"],
        },
      },
      {
        heading: { ko: "알아두면 좋은 점", en: "Good to know", ja: "知っておくと良いこと", zh: "实用提示" },
        body: {
          ko: "JSON, XML 모드는 형식에 맞춰 구조를 인식해 비교하므로, 단순히 줄 순서만 바뀐 경우와 실제 값이 달라진 경우를 구분해 보는 데 도움이 됩니다.",
          en: "JSON and XML mode recognize the structure of each format when comparing, helping you tell apart lines that simply moved from values that actually changed.",
          ja: "JSON、XMLモードは形式に合わせて構造を認識して比較するため、単に行の順序が変わった場合と実際に値が変わった場合を区別するのに役立ちます。",
          zh: "JSON、XML 模式会根据各自的格式识别结构后再比较，有助于区分只是行顺序变化和实际数值发生变化的情况。",
        },
      },
      {
        heading: { ko: "데이터 처리 안내", en: "Data handling", ja: "データ処理について", zh: "数据处理说明" },
        body: {
          ko: "비교는 브라우저 안에서 즉시 처리되며 두 입력값 모두 서버로 전송되지 않으므로, 아직 배포하지 않은 설정값이나 코드도 안심하고 비교할 수 있습니다.",
          en: "The comparison runs instantly in your browser, and neither input value is ever sent to a server, so it's safe to compare configs or code you haven't deployed yet.",
          ja: "比較はブラウザー内で即座に処理され、両方の入力値がサーバーへ送信されることはないため、まだデプロイしていない設定値やコードも安心して比較できます。",
          zh: "比较在浏览器中即时完成，两个输入值都不会发送到服务器，因此可以放心比较尚未部署的配置或代码。",
        },
      },
    ],
    faq: [
      {
        q: { ko: "텍스트 외에 JSON이나 XML도 비교할 수 있나요?", en: "Can it compare JSON or XML, not just plain text?", ja: "テキスト以外にJSONやXMLも比較できますか？", zh: "除了文本，也能比较 JSON 或 XML 吗？" },
        a: { ko: "네. 상단의 Text, JSON, XML 모드 버튼으로 전환해 각 형식에 맞는 방식으로 두 값의 차이를 비교할 수 있습니다.", en: "Yes. Switch between the Text, JSON, and XML mode buttons at the top to compare two values in a way suited to that format.", ja: "はい。上部のText、JSON、XMLモードボタンで切り替えて、各形式に合った方法で2つの値の違いを比較できます。", zh: "可以。可以切换顶部的 Text、JSON、XML 模式按钮，以适合该格式的方式比较两个值的差异。" },
      },
      {
        q: { ko: "좌우 입력값을 바꿔서 비교할 수 있나요?", en: "Can I swap the left and right inputs?", ja: "左右の入力値を入れ替えて比較できますか？", zh: "可以互换左右输入内容再比较吗？" },
        a: { ko: "네. \"좌우 바꾸기\" 버튼으로 두 입력 값의 위치를 즉시 교체해 반대 방향의 변경점도 확인할 수 있습니다.", en: "Yes. The \"Swap\" button instantly switches the two input values, so you can check the change in the opposite direction too.", ja: "はい。「左右入れ替え」ボタンで2つの入力値の位置を即座に入れ替え、逆方向の変更点も確認できます。", zh: "可以。“左右互换”按钮可以立即交换两个输入值的位置，方便查看反方向的变化。" },
      },
      {
        q: { ko: "비교한 내용이 서버에 남나요?", en: "Is the comparison content kept on a server?", ja: "比較した内容はサーバーに残りますか？", zh: "比较的内容会保留在服务器上吗？" },
        a: { ko: "아니요. 비교는 브라우저 안에서 즉시 처리되며 두 입력값 모두 서버로 전송되지 않습니다.", en: "No. The comparison runs instantly in your browser, and neither input value is ever sent to a server.", ja: "いいえ。比較はブラウザー内で即座に処理され、両方の入力値がサーバーへ送信されることはありません。", zh: "不会。比较在浏览器中即时完成，两个输入值都不会发送到服务器。" },
      },
    ],
  },
};

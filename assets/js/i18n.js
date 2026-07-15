const supportedLanguages = ["ko", "en", "ja", "zh"];
const languageNames = {
  ko: "한국어",
  en: "English",
  ja: "日本語",
  zh: "中文",
};

const textTranslations = {
  "주요 메뉴": { en: "Main menu", ja: "メインメニュー", zh: "主菜单" },
  "텍스트": { en: "Text", ja: "テキスト", zh: "文本" },
  "개발자": { en: "Developer", ja: "開発者", zh: "开发者" },
  "자료형 변환": { en: "Data conversion", ja: "データ変換", zh: "数据转换" },
  "비교하기": { en: "Compare", ja: "比較", zh: "比较" },
  "DIFF 도구": { en: "DIFF tool", ja: "DIFFツール", zh: "DIFF 工具" },
  "디자인": { en: "Design", ja: "デザイン", zh: "设计" },
  "디자인 도구": { en: "Design tools", ja: "デザインツール", zh: "设计工具" },
  "CSS-ART": { en: "CSS-ART", ja: "CSS-ART", zh: "CSS-ART" },
  "생성기": { en: "Generators", ja: "ジェネレーター", zh: "生成器" },
  "홈": { en: "Home", ja: "ホーム", zh: "首页" },
  "Browser-only utilities": { en: "Browser-only utilities", ja: "ブラウザーだけで使えるツール", zh: "仅浏览器工具" },
  "필요할 때 바로 여는 작은 웹 가젯 모음": { en: "Small web gadgets ready whenever you need them", ja: "必要なときにすぐ開ける小さなWebガジェット集", zh: "需要时即可打开的小型网页工具集" },
  "텍스트 정리, 개발자 작업, 랜덤 생성 같은 반복 작업을 설치 없이 빠르게 처리하세요.": { en: "Handle repetitive text cleanup, developer tasks, and random generation quickly without installing anything.", ja: "テキスト整理、開発作業、ランダム生成などの反復作業をインストール不要で素早く処理できます。", zh: "无需安装，即可快速处理文本整理、开发任务、随机生成等重复工作。" },
  "텍스트 정리, 자료형 변환 작업, 랜덤 생성 같은 반복 작업을 설치 없이 빠르게 처리하세요.": { en: "Handle repetitive text cleanup, data conversion, and value generation quickly without installing anything.", ja: "テキスト整理、データ変換、値の生成などの反復作業をインストール不要で素早く処理できます。", zh: "无需安装，即可快速处理文本整理、数据转换和值生成等重复工作。" },
  "도구 검색": { en: "Search tools", ja: "ツール検索", zh: "搜索工具" },
  "Advertisement": { ko: "광고", en: "Advertisement", ja: "広告", zh: "广告" },
  "카테고리": { en: "Categories", ja: "カテゴリー", zh: "分类" },
  "URL은 `tools/카테고리/도구이름/` 구조로 관리합니다.": { en: "URLs use the `tools/category/tool-name/` structure.", ja: "URLは `tools/category/tool-name/` 構造で管理します。", zh: "URL 使用 `tools/category/tool-name/` 结构管理。" },
  "텍스트 도구": { en: "Text tools", ja: "テキストツール", zh: "文本工具" },
  "글자 수 세기, 공백 정리, 대소문자 변환 등 문서 작업용 도구.": { en: "Tools for document work, including character counts, whitespace cleanup, and case conversion.", ja: "文字数カウント、空白整理、大文字小文字変換など、文書作業向けのツール。", zh: "用于文档工作的工具，包括字数统计、空白清理、大小写转换等。" },
  "개발자 도구": { en: "Developer tools", ja: "開発者ツール", zh: "开发者工具" },
  "JSON, XML, SQL, CSV, UUID 값을 정리하고 변환하는 도구.": { en: "Tools for cleaning and converting JSON, XML, SQL, CSV, and UUID values.", ja: "JSON、XML、SQL、CSV、UUIDの値を整理・変換するツール。", zh: "用于整理和转换 JSON、XML、SQL、CSV 和 UUID 值的工具。" },
  "JSON, XML, SQL, CSV, UUID 작업을 빠르게 끝냅니다.": { en: "Finish JSON, XML, SQL, CSV, and UUID tasks quickly.", ja: "JSON、XML、SQL、CSV、UUIDの作業をすばやく完了できます。", zh: "快速完成 JSON、XML、SQL、CSV 和 UUID 任务。" },
  "Text, JSON, XML 변경점을 나란히 확인하는 도구.": { en: "Compare Text, JSON, and XML changes side by side.", ja: "Text、JSON、XMLの変更点を並べて確認するツール。", zh: "并排查看 Text、JSON 和 XML 的差异。" },
  "Text, JSON, XML 변경점을 compare diff 방식으로 나란히 확인합니다.": { en: "Compare Text, JSON, and XML changes side by side with a diff view.", ja: "Text、JSON、XMLの変更点をdiff表示で並べて確認します。", zh: "用 diff 视图并排比较 Text、JSON 和 XML 的差异。" },
  "JSON 포맷팅, 인코딩, 간단한 데이터 변환 작업.": { en: "JSON formatting, encoding, and simple data conversion tasks.", ja: "JSON整形、エンコード、簡単なデータ変換作業。", zh: "JSON 格式化、编码和简单数据转换。" },
  "UUID, 비밀번호, QR 같은 값 생성 도구.": { en: "Generate values such as UUIDs, passwords, and QR codes.", ja: "UUID、パスワード、QRなどの値を生成するツール。", zh: "生成 UUID、密码、QR 等值的工具。" },
  "추천 도구": { en: "Featured tools", ja: "おすすめツール", zh: "推荐工具" },
  "초기 운영에 적합한 검색 수요형 유틸부터 배치했습니다.": { en: "The starter set focuses on search-friendly utilities suitable for early operation.", ja: "初期運営に適した検索需要のあるユーティリティから配置しました。", zh: "首批工具优先放置适合早期运营、具备搜索需求的实用工具。" },
  "글자 수 세기": { en: "Word counter", ja: "文字数カウント", zh: "字数统计" },
  "문자, 단어, 줄 수를 즉시 계산합니다.": { en: "Instantly count characters, words, and lines.", ja: "文字、単語、行数をすぐに計算します。", zh: "即时计算字符、单词和行数。" },
  "아스키 아트 생성기": { en: "ASCII art generator", ja: "ASCIIアートジェネレーター", zh: "ASCII 艺术生成器" },
  "ASCII ART 변환기": { en: "ASCII ART converter", ja: "ASCII ART 変換ツール", zh: "ASCII ART 转换器" },
  "짧은 문구를 복사하기 쉬운 텍스트 배너로 변환합니다.": { en: "Turn short phrases into easy-to-copy text banners.", ja: "短いフレーズをコピーしやすいテキストバナーに変換します。", zh: "将短语转换为易于复制的文本横幅。" },
  "TEXT2ART와 IMAGE2ART를 한 페이지에서 생성합니다.": { en: "Create TEXT2ART and IMAGE2ART on one page.", ja: "TEXT2ART と IMAGE2ART を1ページで生成します。", zh: "在一个页面中生成 TEXT2ART 和 IMAGE2ART。" },
  "텍스트를 브라우저에서 바로 아스키 아트 배너로 변환하고 복사하는 무료 도구입니다.": { en: "A free browser tool for converting text into ASCII art banners and copying them.", ja: "テキストをブラウザーでASCIIアートバナーに変換してコピーできる無料ツールです。", zh: "免费浏览器工具，可将文本转换为 ASCII 艺术横幅并复制。" },
  "텍스트를 ASCII 배너로 변환하거나 이미지를 ASCII 문자 아트로 바꾸는 무료 브라우저 도구입니다.": { en: "A free browser tool for converting text into ASCII banners or images into ASCII character art.", ja: "テキストをASCIIバナーに変換したり、画像をASCII文字アートに変換したりできる無料ブラウザーツールです。", zh: "免费浏览器工具，可将文本转换为 ASCII 横幅，或将图片转换为 ASCII 字符艺术。" },
  "TEXT2ART와 IMAGE2ART를 브라우저에서 바로 생성합니다.": { en: "Create TEXT2ART and IMAGE2ART directly in your browser.", ja: "ブラウザーで TEXT2ART と IMAGE2ART をすぐに生成します。", zh: "直接在浏览器中生成 TEXT2ART 和 IMAGE2ART。" },
  "TEXT2ART": { en: "TEXT2ART", ja: "TEXT2ART", zh: "TEXT2ART" },
  "IMAGE2ART": { en: "IMAGE2ART", ja: "IMAGE2ART", zh: "IMAGE2ART" },
  "폭": { en: "Width", ja: "幅", zh: "宽度" },
  "ASCII 폭": { en: "ASCII width", ja: "ASCII幅", zh: "ASCII 宽度" },
  "아트 스타일": { en: "Art style", ja: "アートスタイル", zh: "艺术样式" },
  "입력하면 자동으로 변환됩니다.": { en: "Results update automatically as you type.", ja: "入力すると自動で変換されます。", zh: "输入后会自动转换。" },
  "문자셋": { en: "Character set", ja: "文字セット", zh: "字符集" },
  "반전": { en: "Invert", ja: "反転", zh: "反转" },
  "Dense": { en: "Dense", ja: "Dense", zh: "Dense" },
  "Soft": { en: "Soft", ja: "Soft", zh: "Soft" },
  "Block": { en: "Block", ja: "Block", zh: "Block" },
  "Photo": { en: "Photo", ja: "Photo", zh: "Photo" },
  "Binary": { en: "Binary", ja: "Binary", zh: "Binary" },
  "생성하기": { en: "Generate", ja: "生成", zh: "生成" },
  "아스키 아트를 생성했습니다.": { en: "ASCII art generated.", ja: "ASCIIアートを生成しました。", zh: "已生成 ASCII 艺术。" },
  "TEXT2ART를 생성했습니다.": { en: "TEXT2ART generated.", ja: "TEXT2ART を生成しました。", zh: "已生成 TEXT2ART。" },
  "IMAGE2ART를 생성했습니다.": { en: "IMAGE2ART generated.", ja: "IMAGE2ART を生成しました。", zh: "已生成 IMAGE2ART。" },
  "이미지를 선택하거나 테스트 예문을 생성하세요.": { en: "Select an image or generate a sample.", ja: "画像を選択するか、サンプルを生成してください。", zh: "请选择图片或生成测试示例。" },
  "인코딩 변환 도구": { en: "Encoding converter", ja: "エンコード変換ツール", zh: "编码转换工具" },
  "UTF-8, HEX, Base64, URL 인코딩을 한 번에 확인합니다.": { en: "Check UTF-8, HEX, Base64, and URL encoding at once.", ja: "UTF-8、HEX、Base64、URLエンコードをまとめて確認します。", zh: "一次查看 UTF-8、HEX、Base64 和 URL 编码。" },
  "텍스트를 UTF-8, HEX, Base64, URL 인코딩, Unicode 코드 포인트 등 여러 표현으로 한 번에 변환하는 무료 브라우저 도구입니다.": { en: "A free browser tool that converts text into UTF-8, HEX, Base64, URL encoding, Unicode code points, and more at once.", ja: "テキストをUTF-8、HEX、Base64、URLエンコード、Unicodeコードポイントなどへ一括変換する無料ブラウザーツールです。", zh: "免费浏览器工具，可一次将文本转换为 UTF-8、HEX、Base64、URL 编码、Unicode 码点等多种表示。" },
  "텍스트를 여러 인코딩 표현으로 동시에 변환합니다.": { en: "Convert text into multiple encoding representations at once.", ja: "テキストを複数のエンコード表現へ同時に変換します。", zh: "同时将文本转换为多种编码表示。" },
  "HEX, Base64, URL 인코딩, UTF-8, EUC-KR 값을 브라우저에서 읽을 수 있는 문자로 변환하는 무료 인코딩 도구입니다.": { en: "A free encoding tool that converts HEX, Base64, URL encoding, UTF-8, and EUC-KR values into readable text in your browser.", ja: "HEX、Base64、URLエンコード、UTF-8、EUC-KRの値をブラウザーで読める文字へ変換する無料エンコードツールです。", zh: "免费编码工具，可在浏览器中将 HEX、Base64、URL 编码、UTF-8 和 EUC-KR 值转换为可读文本。" },
  "HEX, Base64, URL 인코딩, UTF-8, EUC-KR 값을 읽을 수 있는 문자로 변환합니다.": { en: "Convert HEX, Base64, URL encoding, UTF-8, and EUC-KR values into readable text.", ja: "HEX、Base64、URLエンコード、UTF-8、EUC-KRの値を読める文字へ変換します。", zh: "将 HEX、Base64、URL 编码、UTF-8 和 EUC-KR 值转换为可读文本。" },
  "UTF-8 예문": { en: "UTF-8 sample", ja: "UTF-8サンプル", zh: "UTF-8 示例" },
  "EUC-KR 예문": { en: "EUC-KR sample", ja: "EUC-KRサンプル", zh: "EUC-KR 示例" },
  "HEX 예문": { en: "HEX sample", ja: "HEXサンプル", zh: "HEX 示例" },
  "Base64 예문": { en: "Base64 sample", ja: "Base64サンプル", zh: "Base64 示例" },
  "URL 예문": { en: "URL sample", ja: "URLサンプル", zh: "URL 示例" },
  "예문": { en: "Sample", ja: "サンプル", zh: "示例" },
  "HEX 바이트": { en: "HEX bytes", ja: "HEXバイト", zh: "HEX 字节" },
  "URL 바이트": { en: "URL bytes", ja: "URLバイト", zh: "URL 字节" },
  "Base64 바이트": { en: "Base64 bytes", ja: "Base64バイト", zh: "Base64 字节" },
  "UTF-8로 읽은 결과": { en: "Read as UTF-8", ja: "UTF-8として読んだ結果", zh: "按 UTF-8 读取" },
  "EUC-KR로 읽은 결과": { en: "Read as EUC-KR", ja: "EUC-KRとして読んだ結果", zh: "按 EUC-KR 读取" },
  "ISO-8859-1로 읽은 결과": { en: "Read as ISO-8859-1", ja: "ISO-8859-1として読んだ結果", zh: "按 ISO-8859-1 读取" },
  "입력한 문자": { en: "Input text", ja: "入力文字", zh: "输入文本" },
  "UTF-8 바이트": { en: "UTF-8 bytes", ja: "UTF-8バイト", zh: "UTF-8 字节" },
  "EUC-KR 바이트": { en: "EUC-KR bytes", ja: "EUC-KRバイト", zh: "EUC-KR 字节" },
  "읽을 수 있는 문자로 변환했습니다.": { en: "Converted into readable text.", ja: "読める文字へ変換しました。", zh: "已转换为可读文本。" },
  "Base64 인코딩 변환기": { en: "Base64 encoding converter", ja: "Base64エンコード変換ツール", zh: "Base64 编码转换器" },
  "문자 인코딩별 Base64 값을 만들고 다시 디코딩합니다.": { en: "Create Base64 values by character encoding and decode them back.", ja: "文字エンコーディング別にBase64値を作成し、元に戻します。", zh: "按字符编码生成 Base64 值并解码还原。" },
  "문자 인코딩에 따라 달라지는 Base64 값을 비교하고 되돌립니다.": { en: "Compare and restore Base64 values that change by character encoding.", ja: "文字エンコーディングによって変わるBase64値を比較して復元します。", zh: "比较并还原会随字符编码变化的 Base64 值。" },
  "텍스트를 UTF-8, EUC-KR, Shift_JIS 같은 문자 인코딩별 Base64로 변환하고 Base64 값을 다시 문자열로 디코딩하는 무료 도구입니다.": { en: "A free tool for converting text to Base64 by character encoding such as UTF-8, EUC-KR, and Shift_JIS, then decoding Base64 back to text.", ja: "UTF-8、EUC-KR、Shift_JISなどの文字エンコーディング別にテキストをBase64へ変換し、Base64を文字列へ戻す無料ツールです。", zh: "免费工具，可按 UTF-8、EUC-KR、Shift_JIS 等字符编码将文本转换为 Base64，并将 Base64 解码回字符串。" },
  "입력값을 여러 문자 인코딩별 Base64 결과로 변환합니다.": { en: "Convert input into Base64 results by character encoding.", ja: "入力値を文字エンコーディング別のBase64結果へ変換します。", zh: "将输入值转换为不同字符编码的 Base64 结果。" },
  "입력값을 여러 문자 인코딩 기준의 Base64와 바이트 값으로 변환하고, Base64 값이면 인코딩별 디코딩 결과를 함께 확인하는 무료 도구입니다.": { en: "A free tool that converts input into Base64 and byte values by character encoding, and shows decoding results by encoding when the input is Base64.", ja: "入力値を文字エンコーディング別のBase64とバイト値へ変換し、Base64値の場合はエンコーディング別のデコード結果も確認できる無料ツールです。", zh: "免费工具，可按字符编码将输入值转换为 Base64 和字节值；如果输入是 Base64，也会显示各编码的解码结果。" },
  "하나의 입력값을 대중적인 문자 인코딩별 Base64 결과로 펼쳐 봅니다.": { en: "Expand one input into Base64 results for popular character encodings.", ja: "1つの入力値を主要な文字エンコーディング別のBase64結果として一覧表示します。", zh: "将一个输入值展开为常用字符编码的 Base64 结果。" },
  "문자 인코딩": { en: "Character encoding", ja: "文字エンコーディング", zh: "字符编码" },
  "Shift_JIS": { en: "Shift_JIS", ja: "Shift_JIS", zh: "Shift_JIS" },
  "텍스트": { en: "Text", ja: "テキスト", zh: "文本" },
  "입력": { en: "Input", ja: "入力", zh: "输入" },
  "텍스트 예문": { en: "Text sample", ja: "テキストサンプル", zh: "文本示例" },
  "디코딩 결과를 텍스트로": { en: "Use decoded result as text", ja: "デコード結果をテキストへ", zh: "将解码结果作为文本" },
  "변환했습니다.": { en: "Converted.", ja: "変換しました。", zh: "已转换。" },
  "텍스트 to Base64": { en: "text to Base64", ja: "テキスト to Base64", zh: "文本 to Base64" },
  "바이트": { en: "bytes", ja: "バイト", zh: "字节" },
  "Base64 디코딩": { en: "Base64 decode", ja: "Base64デコード", zh: "Base64 解码" },
  "이 브라우저에서는 해당 인코딩을 지원하지 않습니다.": { en: "This browser cannot encode that charset.", ja: "このブラウザーではそのエンコーディングをサポートしていません。", zh: "此浏览器不支持该编码。" },
  "Base64로 감지되어 인코딩별 디코딩 결과도 표시했습니다.": { en: "Detected Base64 and also showed decoding results by encoding.", ja: "Base64として検出したため、エンコーディング別のデコード結果も表示しました。", zh: "已检测为 Base64，并显示各编码的解码结果。" },
  "입력값을 인코딩별 Base64 결과로 변환했습니다.": { en: "Converted the input into Base64 results by encoding.", ja: "入力値をエンコーディング別のBase64結果へ変換しました。", zh: "已将输入值转换为各编码的 Base64 结果。" },
  "Decode Base64 before compare": { ko: "비교 전에 Base64 디코딩", en: "Decode Base64 before compare", ja: "比較前にBase64をデコード", zh: "比较前解码 Base64" },
  "Left Base64 encoding": { ko: "왼쪽 Base64 인코딩", en: "Left Base64 encoding", ja: "左のBase64エンコーディング", zh: "左侧 Base64 编码" },
  "Right Base64 encoding": { ko: "오른쪽 Base64 인코딩", en: "Right Base64 encoding", ja: "右のBase64エンコーディング", zh: "右侧 Base64 编码" },
  "URL 인코딩 변환기": { en: "URL encoder decoder", ja: "URLエンコード変換ツール", zh: "URL 编码转换器" },
  "일반문자와 URL 인코딩 문자열을 서로 변환합니다.": { en: "Convert between plain text and URL-encoded strings.", ja: "通常文字列とURLエンコード文字列を相互に変換します。", zh: "在普通文本和 URL 编码字符串之间相互转换。" },
  "입력 문자가 일반문자면 URL 인코딩으로, URL 인코딩이면 일반문자로 자동 변환합니다.": { en: "Automatically encode plain text as URL encoding, or decode URL-encoded text back to plain text.", ja: "入力が通常文字列ならURLエンコードへ、URLエンコードなら通常文字列へ自動変換します。", zh: "输入普通文本时自动转为 URL 编码，输入 URL 编码时自动解码为普通文本。" },
  "일반 텍스트와 URL 인코딩 문자열을 브라우저에서 서로 변환하는 무료 URL encode decode 도구입니다.": { en: "A free browser URL encode decode tool for converting between plain text and URL-encoded strings.", ja: "通常テキストとURLエンコード文字列をブラウザーで相互変換できる無料のURL encode decodeツールです。", zh: "免费浏览器 URL encode decode 工具，可在普通文本和 URL 编码字符串之间相互转换。" },
  "일반문자": { en: "Plain text", ja: "通常文字列", zh: "普通文本" },
  "입력문자": { en: "Input text", ja: "入力文字", zh: "输入文本" },
  "변환 결과": { en: "Converted result", ja: "変換結果", zh: "转换结果" },
  "URL 인코딩": { en: "URL encoded", ja: "URLエンコード", zh: "URL 编码" },
  "공백을 + 로 처리": { en: "Treat spaces as +", ja: "空白を + として扱う", zh: "将空格作为 + 处理" },
  "URL 디코딩": { en: "URL decode", ja: "URLデコード", zh: "URL 解码" },
  "서로 바꾸기": { en: "Swap", ja: "入れ替え", zh: "交换" },
  "URL 인코딩을 완료했습니다.": { en: "URL encoding complete.", ja: "URLエンコードが完了しました。", zh: "URL 编码完成。" },
  "URL 디코딩을 완료했습니다.": { en: "URL decoding complete.", ja: "URLデコードが完了しました。", zh: "URL 解码完成。" },
  "입력 문자를 URL 인코딩했습니다.": { en: "Input text was URL encoded.", ja: "入力文字をURLエンコードしました。", zh: "已将输入文本转换为 URL 编码。" },
  "URL 인코딩을 일반문자로 디코딩했습니다.": { en: "URL-encoded text was decoded to plain text.", ja: "URLエンコードを通常文字列へデコードしました。", zh: "已将 URL 编码解码为普通文本。" },
  "URL 인코딩 문자열이 올바르지 않습니다.": { en: "The URL-encoded string is not valid.", ja: "URLエンコード文字列が正しくありません。", zh: "URL 编码字符串无效。" },
  "두 값을 서로 바꿨습니다.": { en: "Swapped both values.", ja: "2つの値を入れ替えました。", zh: "已交换两个值。" },
  "변환하기": { en: "Convert", ja: "変換", zh: "转换" },
  "인코딩 변환을 완료했습니다.": { en: "Encoding conversion complete.", ja: "エンコード変換が完了しました。", zh: "编码转换完成。" },
  "원문": { en: "Original", ja: "原文", zh: "原文" },
  "브라우저 기본 TextEncoder는 UTF-8만 지원합니다. EUC-KR 실제 바이트 변환은 별도 인코딩 테이블이 필요합니다.": { en: "The browser's built-in TextEncoder only supports UTF-8. Actual EUC-KR byte conversion requires a separate encoding table.", ja: "ブラウザー標準のTextEncoderはUTF-8のみ対応しています。実際のEUC-KRバイト変換には別途エンコード表が必要です。", zh: "浏览器内置 TextEncoder 仅支持 UTF-8。实际 EUC-KR 字节转换需要单独的编码表。" },
  "텍스트, JSON, XML 내용을 브라우저에서 나란히 비교하는 무료 DIFF 도구 모음입니다.": { en: "Free browser-based DIFF tools for comparing text, JSON, and XML side by side.", ja: "テキスト、JSON、XMLをブラウザーで並べて比較できる無料DIFFツール集です。", zh: "免费的浏览器 DIFF 工具集合，可并排比较文本、JSON 和 XML。" },
  "텍스트, JSON, XML 변경점을 브라우저에서 바로 확인합니다.": { en: "Check text, JSON, and XML changes directly in your browser.", ja: "テキスト、JSON、XMLの変更点をブラウザーですぐに確認できます。", zh: "直接在浏览器中查看文本、JSON 和 XML 的差异。" },
  "DIFF 비교 도구": { en: "DIFF compare tool", ja: "DIFF比較ツール", zh: "DIFF 比较工具" },
  "Text, JSON, XML을 줄 단위로 비교하고 변경점을 표시합니다.": { en: "Compare Text, JSON, and XML line by line and highlight changes.", ja: "Text、JSON、XMLを行単位で比較し、変更点を表示します。", zh: "逐行比较 Text、JSON 和 XML，并标记差异。" },
  "텍스트, JSON, XML 두 값을 compare diff 방식으로 비교하고 추가, 삭제, 변경 라인을 확인하는 무료 DIFF 도구입니다.": { en: "A free DIFF tool for comparing two text, JSON, or XML values with a compare diff view and checking added, removed, and changed lines.", ja: "2つのText、JSON、XMLをcompare diff形式で比較し、追加、削除、変更行を確認できる無料DIFFツールです。", zh: "免费的 DIFF 工具，可用 compare diff 视图比较两段文本、JSON 或 XML，并查看新增、删除和变更行。" },
  "비교 모드": { en: "Compare mode", ja: "比較モード", zh: "比较模式" },
  "왼쪽 원본": { en: "Left original", ja: "左の原本", zh: "左侧原始内容" },
  "오른쪽 대상": { en: "Right target", ja: "右の対象", zh: "右侧目标内容" },
  "비교하기": { en: "Compare", ja: "比較", zh: "比较" },
  "좌우 바꾸기": { en: "Swap sides", ja: "左右を入れ替え", zh: "左右互换" },
  "두 내용이 같습니다.": { en: "Both contents are identical.", ja: "2つの内容は同じです。", zh: "两段内容相同。" },
  "변경 라인": { en: "Changed lines", ja: "変更行", zh: "变更行" },
  "JSON 포맷터": { en: "JSON formatter", ja: "JSONフォーマッター", zh: "JSON 格式化工具" },
  "JSON을 보기 좋게 정리하고 오류 위치를 확인합니다.": { en: "Format JSON for readability and check parsing errors.", ja: "JSONを読みやすく整形し、エラーを確認します。", zh: "美化 JSON 并检查解析错误。" },
  "JSON을 정리하고 파싱 오류를 확인합니다.": { en: "Clean JSON and check parsing errors.", ja: "JSONを整形し、解析エラーを確認します。", zh: "整理 JSON 并检查解析错误。" },
  "누락된 따옴표, 닫는 괄호, 후행 쉼표를 가능한 범위에서 자동 복구합니다.": { en: "Automatically repair missing quotes, closing brackets, and trailing commas where possible.", ja: "不足した引用符、閉じ括弧、末尾のカンマを可能な範囲で自動修復します。", zh: "尽可能自动修复缺失的引号、结束括号和尾随逗号。" },
  "JSON formatting guide": { ko: "JSON 포맷팅 가이드", en: "JSON formatting guide", ja: "JSON整形ガイド", zh: "JSON 格式化指南" },
  "JSON 포맷터 사용 가이드": { en: "How to use the JSON formatter", ja: "JSONフォーマッターの使い方", zh: "JSON 格式化工具使用指南" },
  "JSON 포맷터는 API 응답, 설정 파일, 로그에 섞인 JSON 문자열을 읽기 쉬운 구조로 정리하는 브라우저 도구입니다.": { en: "The JSON formatter is a browser tool for turning JSON strings from API responses, config files, and logs into a readable structure.", ja: "JSONフォーマッターは、APIレスポンス、設定ファイル、ログに含まれるJSON文字列を読みやすい構造に整えるブラウザーツールです。", zh: "JSON 格式化工具是在浏览器中将 API 响应、配置文件和日志中的 JSON 字符串整理为易读结构的工具。" },
  "언제 사용하면 좋나요?": { en: "When should I use it?", ja: "いつ使うと便利ですか？", zh: "什么时候适合使用？" },
  "압축된 JSON, 줄바꿈 없는 API 응답, 복사 중 일부 따옴표나 괄호가 빠진 데이터를 빠르게 확인할 때 적합합니다.": { en: "It is useful when checking minified JSON, API responses without line breaks, or data that lost some quotes or brackets while being copied.", ja: "圧縮されたJSON、改行のないAPIレスポンス、コピー中に引用符や括弧の一部が欠けたデータを素早く確認したいときに適しています。", zh: "适合快速检查压缩 JSON、没有换行的 API 响应，或复制时丢失部分引号和括号的数据。" },
  "사용 방법": { en: "How to use", ja: "使い方", zh: "使用方法" },
  "입력란에 JSON 문자열을 붙여넣습니다.": { en: "Paste a JSON string into the input box.", ja: "入力欄にJSON文字列を貼り付けます。", zh: "将 JSON 字符串粘贴到输入框中。" },
  "결과는 입력과 동시에 자동으로 정리됩니다.": { en: "The result is formatted automatically as you type.", ja: "入力と同時に結果が自動で整形されます。", zh: "输入时结果会自动格式化。" },
  "결과 박스 오른쪽 위 복사 아이콘으로 정리된 JSON을 복사합니다.": { en: "Use the copy icon at the top right of the result box to copy the formatted JSON.", ja: "結果ボックス右上のコピーアイコンで整形済みJSONをコピーします。", zh: "使用结果框右上角的复制图标复制格式化后的 JSON。" },
  "자동 복구 범위": { en: "Auto repair coverage", ja: "自動修復の範囲", zh: "自动修复范围" },
  "누락된 키 따옴표, 닫히지 않은 중괄호나 대괄호, 마지막 쉼표처럼 흔한 실수는 가능한 범위에서 보정합니다.": { en: "Common mistakes such as missing key quotes, unclosed braces or brackets, and trailing commas are repaired where possible.", ja: "キーの引用符不足、閉じていない中括弧や角括弧、末尾のカンマなど、よくあるミスを可能な範囲で補正します。", zh: "可尽可能修复缺失键名引号、未闭合的大括号或中括号、尾随逗号等常见错误。" },
  "주의할 점": { en: "Things to check", ja: "注意点", zh: "注意事项" },
  "자동 복구는 원본 의도를 추정합니다. 중요한 설정 파일이나 배포 데이터는 결과를 저장하기 전에 값과 배열 구조를 다시 확인하세요.": { en: "Auto repair guesses the original intent. For important config files or production data, review values and array structure before saving the result.", ja: "自動修復は元の意図を推測します。重要な設定ファイルや本番データでは、結果を保存する前に値と配列構造を再確認してください。", zh: "自动修复会推测原始意图。对于重要配置文件或生产数据，请在保存结果前再次确认值和数组结构。" },
  "XML 포맷터": { en: "XML formatter", ja: "XMLフォーマッター", zh: "XML 格式化工具" },
  "XML을 정리하고 닫는 태그를 보정합니다.": { en: "Format XML and fix closing tags.", ja: "XMLを整形し、終了タグを補正します。", zh: "格式化 XML 并修复结束标签。" },
  "XML을 정리하고 누락된 닫는 태그를 자동 보정합니다.": { en: "Format XML and automatically fix missing closing tags.", ja: "XMLを整形し、不足している終了タグを自動補正します。", zh: "格式化 XML 并自动修复缺失的结束标签。" },
  "SQL 포맷터": { en: "SQL formatter", ja: "SQLフォーマッター", zh: "SQL 格式化工具" },
  "SQL 쿼리를 읽기 좋게 정리합니다.": { en: "Format SQL queries for readability.", ja: "SQLクエリを読みやすく整形します。", zh: "美化 SQL 查询以便阅读。" },
  "SQL을 보기 좋게 정리하고 괄호와 세미콜론을 보정합니다.": { en: "Format SQL for readability and fix parentheses and semicolons.", ja: "SQLを読みやすく整形し、括弧とセミコロンを補正します。", zh: "美化 SQL，并修复括号和分号。" },
  "Excel CSV 정리 도구": { en: "Excel CSV cleaner", ja: "Excel CSV整理ツール", zh: "Excel CSV 清理工具" },
  "CSV/TSV 데이터를 표 형태로 정리합니다.": { en: "Clean CSV/TSV data into table-friendly rows.", ja: "CSV/TSVデータを表形式に整理します。", zh: "将 CSV/TSV 数据整理为表格形式。" },
  "CSV/TSV 데이터를 Excel에 붙여넣기 좋게 정리합니다.": { en: "Clean CSV/TSV data so it is easy to paste into Excel.", ja: "CSV/TSVデータをExcelに貼り付けやすく整理します。", zh: "整理 CSV/TSV 数据，方便粘贴到 Excel。" },
  "UUID 생성기": { en: "UUID generator", ja: "UUIDジェネレーター", zh: "UUID 生成器" },
  "브라우저에서 UUID v4 값을 빠르게 생성합니다.": { en: "Quickly generate UUID v4 values in your browser.", ja: "ブラウザーでUUID v4を素早く生成します。", zh: "在浏览器中快速生成 UUID v4。" },
  "All tools run in your browser.": { ko: "모든 도구는 브라우저에서 실행됩니다.", en: "All tools run in your browser.", ja: "すべてのツールはブラウザー内で動作します。", zh: "所有工具都在浏览器中运行。" },
  "개인정보처리방침": { en: "Privacy policy", ja: "プライバシーポリシー", zh: "隐私政策" },
  "소개": { en: "About", ja: "紹介", zh: "关于" },
  "가이드": { en: "Guides", ja: "ガイド", zh: "指南" },
  "도구를 쓰기 전에 알아두면 좋은 개념을 짧게 정리했습니다.": { en: "Short explanations of concepts worth knowing before you use a tool.", ja: "ツールを使う前に知っておくと良い概念を短くまとめました。", zh: "简要说明在使用工具之前值得了解的概念。" },
  "JSON이란 무엇인가": { en: "What is JSON?", ja: "JSONとは何か", zh: "什么是 JSON？" },
  "API 응답부터 설정 파일까지, 어디서나 마주치는 데이터 형식의 기본을 정리합니다.": { en: "From API responses to config files, here are the basics of a data format you'll run into everywhere.", ja: "APIレスポンスから設定ファイルまで、どこでも出会うデータ形式の基本をまとめます。", zh: "从 API 响应到配置文件，整理你随处会遇到的这种数据格式的基础知识。" },
  "UTF-8과 EUC-KR, 한글이 깨지는 이유": { en: "UTF-8 vs EUC-KR: why Korean text breaks", ja: "UTF-8とEUC-KR、文字化けが起きる理由", zh: "UTF-8 与 EUC-KR：乱码的原因" },
  "파일을 열었더니 한글이 이상하게 보인다면, 원인은 대부분 인코딩입니다.": { en: "If Korean text looks strange after opening a file, the cause is almost always encoding.", ja: "ファイルを開いてハングルがおかしく見える場合、原因はほとんどがエンコーディングです。", zh: "如果打开文件后中文/韩文显示异常，原因大多是编码问题。" },
  "SQL을 보기 좋게 정리해야 하는 이유": { en: "Why formatting SQL queries matters", ja: "SQLを整形すべき理由", zh: "为什么要格式化 SQL 查询" },
  "압축된 쿼리 한 줄, 리뷰할 때마다 눈이 아팠다면 이 글이 도움이 됩니다.": { en: "If a wall of minified query text has ever made code review painful, this article will help.", ja: "圧縮された1行のクエリで、レビューのたびに目が疲れていたなら、この記事が役立ちます。", zh: "如果压缩成一行的查询曾让你每次审查代码都很痛苦，这篇文章会有帮助。" },
  "CSV·TSV와 엑셀 호환 데이터 정리하기": { en: "Cleaning up CSV/TSV data for Excel", ja: "CSV・TSVとExcel互換データの整理方法", zh: "整理 CSV/TSV 数据以兼容 Excel" },
  "쉼표 하나, 따옴표 하나로 표가 어긋나는 이유를 정리했습니다.": { en: "Here's why a single comma or quote can throw an entire table out of alignment.", ja: "カンマ一つ、引用符一つで表がずれる理由をまとめました。", zh: "整理了为什么一个逗号或引号就能让整张表格错位。" },
  "UUID란 무엇이고 왜 필요한가": { en: "What is a UUID and why use one?", ja: "UUIDとは何か、なぜ必要か", zh: "什么是 UUID，为什么需要它？" },
  "1, 2, 3 대신 무작위 문자열을 ID로 쓰는 이유를 설명합니다.": { en: "Explains why systems use a random string instead of 1, 2, 3 for IDs.", ja: "1, 2, 3の代わりにランダムな文字列をIDとして使う理由を解説します。", zh: "解释为什么系统用随机字符串而不是 1、2、3 作为 ID。" },
  "JSON의 기본 구조와 자주 발생하는 문법 오류를 정리합니다.": { en: "The basic structure of JSON and common syntax mistakes.", ja: "JSONの基本構造とよくある文法エラーを整理します。", zh: "介绍 JSON 的基本结构和常见语法错误。" },
  "문자 인코딩이 무엇인지, 한글이 깨져 보이는 원인을 설명합니다.": { en: "What character encoding is, and why text can look garbled.", ja: "文字エンコーディングとは何か、文字化けの原因を解説します。", zh: "介绍字符编码是什么，以及文本乱码的原因。" },
  "UUID가 무엇인지, 자동 증가 ID 대신 쓰는 이유를 설명합니다.": { en: "What a UUID is, and why it's used instead of auto-increment IDs.", ja: "UUIDとは何か、自動採番IDの代わりに使う理由を解説します。", zh: "介绍 UUID 是什么，以及为什么用它代替自增 ID。" },
  "문의": { en: "Contact", ja: "お問い合わせ", zh: "联系" },
  "사이트 정보": { en: "Site information", ja: "サイト情報", zh: "站点信息" },
  "Web-Tool.Shop 소개": { en: "About Web-Tool.Shop", ja: "Web-Tool.Shopについて", zh: "关于 Web-Tool.Shop" },
  "Web-Tool.Shop은 설치 없이 브라우저에서 바로 사용할 수 있는 작은 웹 유틸리티 모음입니다.": { en: "Web-Tool.Shop is a collection of small web utilities you can use directly in your browser without installation.", ja: "Web-Tool.Shopは、インストール不要でブラウザーからすぐに使える小さなWebユーティリティ集です。", zh: "Web-Tool.Shop 是一个无需安装、可直接在浏览器中使用的小型网页工具集合。" },
  "반복 작업을 빠르게 끝내는 도구": { en: "Tools for finishing repeated tasks quickly", ja: "反復作業をすばやく終えるためのツール", zh: "用于快速完成重复任务的工具" },
  "JSON 정리, XML 포맷팅, SQL 읽기 좋게 만들기, 글자 수 확인, URL 인코딩처럼 짧지만 자주 반복되는 작업을 한 페이지에서 처리할 수 있도록 구성했습니다.": { en: "It is built for short but frequent tasks such as cleaning JSON, formatting XML, making SQL easier to read, checking text length, and converting URL encoding.", ja: "JSONの整理、XMLの整形、SQLの読みやすさ調整、文字数確認、URLエンコード変換など、短いけれど頻繁に繰り返す作業を1ページで処理できるように構成しています。", zh: "它面向 JSON 整理、XML 格式化、SQL 可读化、字数检查、URL 编码转换等简短但经常重复的任务。" },
  "브라우저 안에서 처리하는 원칙": { en: "A browser-first processing principle", ja: "ブラウザー内処理を基本にする方針", zh: "以浏览器内处理为原则" },
  "대부분의 도구는 입력한 값을 서버로 보내지 않고 사용자의 브라우저 안에서 계산합니다. 민감한 설정값이나 문서 내용을 다룰 때도 결과를 직접 확인한 뒤 복사할 수 있도록 설계했습니다.": { en: "Most tools calculate inside your browser without sending your input to a server. They are designed so you can review results before copying, even when working with sensitive settings or document text.", ja: "ほとんどのツールは入力値をサーバーへ送信せず、ユーザーのブラウザー内で計算します。重要な設定値や文書内容を扱う場合でも、結果を自分で確認してからコピーできるように設計しています。", zh: "大多数工具不会把输入发送到服务器，而是在用户浏览器内计算。即使处理敏感设置或文档内容，也可以先自行确认结果再复制。" },
  "운영 방향": { en: "How the site is maintained", ja: "運営方針", zh: "运营方向" },
  "새 도구는 검색 수요가 있고 실제 작업 흐름에서 자주 쓰이는 기능부터 추가합니다. 각 도구는 모바일 화면에서도 사용할 수 있어야 하며, 가능한 경우 테스트 예문과 복사 기능을 함께 제공합니다.": { en: "New tools are added first when they match real search demand and common work flows. Each tool should work on mobile screens and, where possible, include a sample input and copy action.", ja: "新しいツールは、検索需要があり実際の作業フローでよく使われる機能から追加します。各ツールはモバイル画面でも使える必要があり、可能な場合はテスト例文とコピー機能を一緒に提供します。", zh: "新增工具会优先选择有搜索需求、且在实际工作流程中常用的功能。每个工具都应可在移动端使用，并尽可能提供测试示例和复制功能。" },
  "현재 제공하는 주요 영역": { en: "Main areas currently available", ja: "現在提供している主な領域", zh: "当前提供的主要区域" },
  "텍스트 계산과 인코딩 변환": { en: "Text calculation and encoding conversion", ja: "テキスト計算とエンコード変換", zh: "文本计算和编码转换" },
  "JSON, XML, SQL, CSV 같은 자료형 정리": { en: "Data cleanup for JSON, XML, SQL, and CSV", ja: "JSON、XML、SQL、CSVなどのデータ整理", zh: "JSON、XML、SQL、CSV 等数据整理" },
  "DIFF 비교와 디자인 보조 도구": { en: "DIFF comparison and design helper tools", ja: "DIFF比較とデザイン補助ツール", zh: "DIFF 比较和设计辅助工具" },
  "CSS 효과와 복사 가능한 코드 조각": { en: "CSS effects and copyable code snippets", ja: "CSS効果とコピー可能なコード片", zh: "CSS 效果和可复制代码片段" },
  "문의하기": { en: "Contact us", ja: "お問い合わせ", zh: "联系我们" },
  "오류 제보, 기능 제안, 개인정보 문의는 아래 이메일로 보내주세요.": { en: "Send bug reports, feature suggestions, and privacy questions to the email address below.", ja: "不具合報告、機能提案、プライバシーに関するお問い合わせは、下記メールアドレスまでお送りください。", zh: "错误反馈、功能建议和隐私相关咨询可发送到以下邮箱。" },
  "문의 가능한 내용": { en: "What you can contact us about", ja: "お問い合わせできる内容", zh: "可咨询的内容" },
  "도구의 계산 결과가 예상과 다를 때": { en: "When a tool result is different from what you expected", ja: "ツールの計算結果が想定と異なる場合", zh: "工具计算结果与预期不同时" },
  "새로운 웹 유틸리티 기능을 제안하고 싶을 때": { en: "When you want to suggest a new web utility feature", ja: "新しいWebユーティリティ機能を提案したい場合", zh: "想建议新的网页工具功能时" },
  "광고, 쿠키, 개인정보 처리에 대해 문의할 때": { en: "When you have questions about ads, cookies, or privacy handling", ja: "広告、Cookie、個人情報の取り扱いについて質問がある場合", zh: "咨询广告、Cookie 或个人信息处理时" },
  "응답 안내": { en: "Response guide", ja: "返信について", zh: "回复说明" },
  "사이트는 개인이 운영하는 무료 도구 모음이므로 모든 문의에 즉시 답변하지 못할 수 있습니다. 오류 제보를 보낼 때는 사용한 URL, 브라우저, 입력 예시, 기대한 결과를 함께 적어주시면 확인이 빠릅니다.": { en: "This is a free tool collection operated individually, so not every message can receive an immediate reply. For bug reports, include the URL, browser, sample input, and expected result so the issue can be checked faster.", ja: "このサイトは個人で運営する無料ツール集のため、すべてのお問い合わせにすぐ返信できない場合があります。不具合報告では、使用したURL、ブラウザー、入力例、期待した結果を一緒に記載すると確認が早くなります。", zh: "本站是个人运营的免费工具集合，因此可能无法立即回复所有咨询。反馈错误时，请附上使用的 URL、浏览器、输入示例和期望结果，以便更快确认。" },
  "광고와 제휴": { en: "Advertising and partnerships", ja: "広告と提携", zh: "广告与合作" },
  "광고는 사이트 운영 비용을 보조하기 위해 사용될 수 있습니다. 광고 배치나 제휴 제안은 사용자 경험을 해치지 않는 범위에서만 검토합니다.": { en: "Advertising may be used to support site operating costs. Ad placement or partnership proposals are reviewed only when they do not harm the user experience.", ja: "広告はサイト運営費を補助するために使用されることがあります。広告配置や提携提案は、ユーザー体験を損なわない範囲でのみ検討します。", zh: "广告可能用于补贴网站运营成本。广告展示或合作提案仅会在不损害用户体验的范围内考虑。" },
  "개인정보처리방침 안내": { en: "Privacy policy notice", ja: "プライバシーポリシーのご案内", zh: "隐私政策说明" },
  "최종 업데이트: 2026-07-03": { en: "Last updated: 2026-07-03", ja: "最終更新: 2026-07-03", zh: "最后更新：2026-07-03" },
  "Web-Tool.Shop은 브라우저 기반 웹 유틸리티를 제공하며, 사용자가 도구에 입력한 내용은 기본적으로 서버로 전송하지 않습니다.": { en: "Web-Tool.Shop provides browser-based web utilities, and the content users enter into tools is not sent to a server by default.", ja: "Web-Tool.ShopはブラウザーベースのWebユーティリティを提供しており、ユーザーがツールに入力した内容は原則としてサーバーへ送信しません。", zh: "Web-Tool.Shop 提供基于浏览器的网页工具，用户输入到工具中的内容默认不会发送到服务器。" },
  "수집하거나 처리할 수 있는 정보": { en: "Information that may be collected or processed", ja: "収集または処理される可能性のある情報", zh: "可能收集或处理的信息" },
  "도구 입력값은 브라우저 안에서 처리되며 사이트 운영자가 별도로 저장하지 않습니다.": { en: "Tool input is processed inside the browser and is not separately stored by the site operator.", ja: "ツールの入力値はブラウザー内で処理され、サイト運営者が別途保存することはありません。", zh: "工具输入内容在浏览器内处理，网站运营者不会另行保存。" },
  "광고 또는 보안 목적의 제3자 서비스는 쿠키, 기기 정보, 방문 기록 일부를 처리할 수 있습니다.": { en: "Third-party services used for advertising or security may process cookies, device information, and parts of visit history.", ja: "広告またはセキュリティ目的の第三者サービスは、Cookie、端末情報、訪問履歴の一部を処理することがあります。", zh: "用于广告或安全目的的第三方服务可能会处理 Cookie、设备信息和部分访问记录。" },
  "문의 이메일을 보내는 경우 이메일 주소와 메시지 내용이 답변을 위해 처리됩니다.": { en: "If you send an email inquiry, your email address and message content are processed for the purpose of replying.", ja: "メールでお問い合わせいただく場合、返信のためにメールアドレスとメッセージ内容を処理します。", zh: "如果发送邮件咨询，邮箱地址和消息内容会用于回复处理。" },
  "Google AdSense 및 쿠키": { en: "Google AdSense and cookies", ja: "Google AdSenseとCookie", zh: "Google AdSense 和 Cookie" },
  "이 사이트는 Google AdSense 광고를 사용할 수 있습니다. Google 및 파트너는 광고 제공, 광고 측정, 부정 이용 방지를 위해 쿠키 또는 유사 기술을 사용할 수 있습니다.": { en: "This site may use Google AdSense ads. Google and its partners may use cookies or similar technologies to serve ads, measure ads, and prevent abuse.", ja: "このサイトではGoogle AdSense広告を使用することがあります。Googleおよびパートナーは、広告配信、広告測定、不正利用防止のためにCookieまたは類似技術を使用することがあります。", zh: "本站可能使用 Google AdSense 广告。Google 及其合作伙伴可能使用 Cookie 或类似技术来投放广告、衡量广告效果并防止滥用。" },
  "사용자는 브라우저 설정에서 쿠키를 제한하거나 삭제할 수 있으며, 광고 개인 최적화 설정은 Google 광고 설정에서 관리할 수 있습니다.": { en: "Users can restrict or delete cookies in browser settings, and ad personalization can be managed in Google ad settings.", ja: "ユーザーはブラウザー設定でCookieを制限または削除でき、広告のパーソナライズ設定はGoogle広告設定で管理できます。", zh: "用户可以在浏览器设置中限制或删除 Cookie，也可以在 Google 广告设置中管理广告个性化。" },
  "외부 링크": { en: "External links", ja: "外部リンク", zh: "外部链接" },
  "사이트에는 Google, GitHub, 검색엔진 도구와 같은 외부 사이트로 이동하는 링크가 포함될 수 있습니다. 외부 사이트의 개인정보 처리 방식은 각 사이트의 정책을 따릅니다.": { en: "The site may include links to external sites such as Google, GitHub, or search engine tools. Privacy handling on external sites follows each site's own policy.", ja: "サイトにはGoogle、GitHub、検索エンジンツールなど外部サイトへのリンクが含まれる場合があります。外部サイトの個人情報の取り扱いは、それぞれのサイトのポリシーに従います。", zh: "本站可能包含指向 Google、GitHub 或搜索引擎工具等外部网站的链接。外部网站的隐私处理遵循各自政策。" },
  "문의와 변경": { en: "Contact and changes", ja: "お問い合わせと変更", zh: "联系与变更" },
  "개인정보 관련 문의는 문의 페이지의 이메일로 보낼 수 있습니다. 정책이 변경되면 이 페이지의 최종 업데이트 날짜를 갱신합니다.": { en: "Privacy-related questions can be sent to the email address on the contact page. When this policy changes, the last updated date on this page will be updated.", ja: "個人情報に関するお問い合わせは、お問い合わせページのメールアドレスへ送ることができます。ポリシーを変更した場合、このページの最終更新日を更新します。", zh: "隐私相关问题可发送至联系页面中的邮箱。政策变更时，本页面的最后更新日期会随之更新。" },
  "자료형 변환으로 이동": { en: "Go to data conversion", ja: "データ変換へ移動", zh: "前往数据转换" },
  "JSON 포맷터로 이동": { en: "Go to JSON formatter", ja: "JSONフォーマッターへ移動", zh: "前往 JSON 格式化工具" },
  "XML 포맷터로 이동": { en: "Go to XML formatter", ja: "XMLフォーマッターへ移動", zh: "前往 XML 格式化工具" },
  "SQL 포맷터로 이동": { en: "Go to SQL formatter", ja: "SQLフォーマッターへ移動", zh: "前往 SQL 格式化工具" },
  "Excel CSV 정리 도구로 이동": { en: "Go to Excel CSV cleaner", ja: "Excel CSV整理ツールへ移動", zh: "前往 Excel CSV 清理工具" },
  "UUID 생성기로 이동": { en: "Go to UUID generator", ja: "UUIDジェネレーターへ移動", zh: "前往 UUID 生成器" },
  "문서와 텍스트를 빠르게 다듬는 브라우저 기반 유틸 모음입니다.": { en: "Browser-based utilities for quickly refining documents and text.", ja: "文書とテキストを素早く整えるブラウザーベースのツール集です。", zh: "用于快速整理文档和文本的浏览器工具集。" },
  "브라우저 안에서 바로 계산하고 정리합니다.": { en: "Calculate and clean up directly in your browser.", ja: "ブラウザー内ですぐに計算・整理できます。", zh: "直接在浏览器中计算和整理。" },
  "문자, 단어, 줄 수를 실시간으로 확인합니다.": { en: "Check characters, words, and lines in real time.", ja: "文字、単語、行数をリアルタイムで確認します。", zh: "实时查看字符、单词和行数。" },
  "입력한 내용은 서버로 전송되지 않습니다.": { en: "Your input is not sent to a server.", ja: "入力内容はサーバーに送信されません。", zh: "输入内容不会发送到服务器。" },
  "전체 문자": { en: "Characters", ja: "全文字", zh: "全部字符" },
  "공백 제외": { en: "No spaces", ja: "空白除外", zh: "不含空格" },
  "단어": { en: "Words", ja: "単語", zh: "单词" },
  "줄": { en: "Lines", ja: "行", zh: "行" },
  "지우기": { en: "Clear", ja: "クリア", zh: "清除" },
  "테스트 예문": { en: "Sample", ja: "サンプル", zh: "测试示例" },
  "미리보기": { en: "Preview", ja: "プレビュー", zh: "预览" },
  "JSON 포맷터 등 개발 작업에 필요한 브라우저 기반 유틸 모음입니다.": { en: "Browser-based utilities for development tasks, including a JSON formatter.", ja: "JSONフォーマッターなど、開発作業に役立つブラウザーベースのツール集です。", zh: "用于开发任务的浏览器工具集，包括 JSON 格式化工具。" },
  "작은 데이터 처리 작업을 빠르게 끝냅니다.": { en: "Finish small data processing tasks quickly.", ja: "小さなデータ処理を素早く終わらせます。", zh: "快速完成小型数据处理任务。" },
  "JSON을 정리하고 파싱 오류를 확인합니다.": { en: "Format JSON and check parsing errors.", ja: "JSONを整形し、解析エラーを確認します。", zh: "格式化 JSON 并检查解析错误。" },
  "입력한 JSON은 브라우저 안에서만 처리됩니다.": { en: "Your JSON is processed only in the browser.", ja: "入力したJSONはブラウザー内だけで処理されます。", zh: "输入的 JSON 仅在浏览器内处理。" },
  "정리하기": { en: "Format", ja: "整形", zh: "格式化" },
  "압축하기": { en: "Minify", ja: "圧縮", zh: "压缩" },
  "자동 복구": { en: "Auto repair", ja: "自動修復", zh: "自动修复" },
  "복사": { en: "Copy", ja: "コピー", zh: "复制" },
  "결과가 여기에 표시됩니다.": { en: "Results will appear here.", ja: "結果がここに表示されます。", zh: "结果会显示在这里。" },
  "JSON 오류:": { en: "JSON error:", ja: "JSONエラー:", zh: "JSON 错误：" },
  "XML을 정리하고 누락된 닫는 태그와 속성 따옴표를 가능한 범위에서 자동 복구합니다.": { en: "Format XML and automatically repair missing closing tags and attribute quotes where possible.", ja: "XMLを整形し、不足している終了タグや属性の引用符を可能な範囲で自動修復します。", zh: "格式化 XML，并尽可能自动修复缺失的结束标签和属性引号。" },
  "SQL을 읽기 좋게 정리하고 누락된 따옴표, 괄호, 세미콜론을 가능한 범위에서 자동 복구합니다.": { en: "Format SQL for readability and automatically repair missing quotes, parentheses, and semicolons where possible.", ja: "SQLを読みやすく整形し、不足している引用符、括弧、セミコロンを可能な範囲で自動修復します。", zh: "美化 SQL，并尽可能自动修复缺失的引号、括号和分号。" },
  "Excel에 붙여넣기 좋은 CSV/TSV 데이터를 정리하고 깨진 따옴표와 행 길이를 보정합니다.": { en: "Clean CSV/TSV data for Excel and fix broken quotes and row lengths.", ja: "Excelに貼り付けやすいCSV/TSVデータに整理し、壊れた引用符と行の長さを補正します。", zh: "整理适合粘贴到 Excel 的 CSV/TSV 数据，并修复损坏的引号和行长度。" },
  "구분자": { en: "Delimiter", ja: "区切り文字", zh: "分隔符" },
  "자동 감지": { en: "Auto detect", ja: "自動検出", zh: "自动检测" },
  "쉼표 CSV": { en: "Comma CSV", ja: "カンマCSV", zh: "逗号 CSV" },
  "탭 TSV": { en: "Tab TSV", ja: "タブTSV", zh: "制表符 TSV" },
  "세미콜론": { en: "Semicolon", ja: "セミコロン", zh: "分号" },
  "CSV로 정리": { en: "Clean as CSV", ja: "CSVとして整理", zh: "整理为 CSV" },
  "TSV로 변환": { en: "Convert to TSV", ja: "TSVに変換", zh: "转换为 TSV" },
  "XML 오류:": { en: "XML error:", ja: "XMLエラー:", zh: "XML 错误：" },
  "자동 복구 후 정리했습니다.": { en: "Formatted after auto repair.", ja: "自動修復後に整形しました。", zh: "自动修复后已格式化。" },
  "유효한 형식입니다.": { en: "The format is valid.", ja: "有効な形式です。", zh: "格式有效。" },
  "UUID 등 자주 필요한 값을 브라우저에서 바로 생성하는 도구 모음입니다.": { en: "Generate frequently needed values such as UUIDs directly in your browser.", ja: "UUIDなどよく使う値をブラウザーで直接生成するツール集です。", zh: "直接在浏览器中生成 UUID 等常用值的工具集。" },
  "테스트와 문서 작성에 필요한 값을 즉시 만듭니다.": { en: "Create values for testing and documentation instantly.", ja: "テストや文書作成に必要な値をすぐに作成します。", zh: "即时生成测试和文档编写所需的值。" },
  "UUID v4 값을 빠르게 생성하고 복사합니다.": { en: "Quickly generate and copy UUID v4 values.", ja: "UUID v4を素早く生成してコピーします。", zh: "快速生成并复制 UUID v4。" },
  "브라우저에서 UUID v4 값을 생성하고 복사하는 간단한 도구입니다.": { en: "A simple tool for generating and copying UUID v4 values in your browser.", ja: "ブラウザーでUUID v4を生成してコピーするシンプルなツールです。", zh: "一个在浏览器中生成并复制 UUID v4 的简单工具。" },
  "UUID는 브라우저의 crypto API로 생성됩니다.": { en: "UUIDs are generated with the browser crypto API.", ja: "UUIDはブラウザーのcrypto APIで生成されます。", zh: "UUID 使用浏览器 crypto API 生成。" },
  "새 UUID": { en: "New UUID", ja: "新しいUUID", zh: "新 UUID" },
  "최종 업데이트: 2026-06-15": { en: "Last updated: 2026-06-15", ja: "最終更新: 2026-06-15", zh: "最后更新：2026-06-15" },
  "Web-Tool.Shop의 기본 도구는 입력값을 서버로 전송하지 않고 사용자의 브라우저에서 처리합니다.": { en: "Web-Tool.Shop's basic tools process input in your browser without sending it to a server.", ja: "Web-Tool.Shopの基本ツールは入力値をサーバーに送信せず、ユーザーのブラウザー内で処理します。", zh: "Web-Tool.Shop 的基础工具会在用户浏览器中处理输入，不会发送到服务器。" },
  "향후 광고 또는 방문 통계 서비스를 붙이는 경우 해당 서비스 제공자가 쿠키, 기기 정보, 방문 기록 일부를 처리할 수 있습니다.": { en: "If advertising or analytics services are added later, those providers may process cookies, device information, and parts of visit history.", ja: "今後、広告またはアクセス解析サービスを追加する場合、提供事業者がCookie、端末情報、訪問履歴の一部を処理することがあります。", zh: "如果未来接入广告或访问统计服务，相关服务提供商可能会处理 Cookie、设备信息和部分访问记录。" },
  "문의 이메일과 실제 광고 서비스 정보는 사이트 공개 전에 운영자 정보에 맞게 업데이트해야 합니다.": { en: "Contact email and actual advertising service details should be updated before publishing the site.", ja: "問い合わせメールと実際の広告サービス情報は、公開前に運営者情報に合わせて更新してください。", zh: "联系邮箱和实际广告服务信息应在网站公开前根据运营者信息更新。" },
  "페이지를 찾을 수 없습니다": { en: "Page not found", ja: "ページが見つかりません", zh: "找不到页面" },
  "주소가 바뀌었거나 아직 만들어지지 않은 도구입니다.": { en: "The address may have changed, or this tool may not exist yet.", ja: "アドレスが変更されたか、まだ作成されていないツールです。", zh: "地址可能已更改，或该工具尚未创建。" },
  "홈으로 돌아가기": { en: "Back to home", ja: "ホームへ戻る", zh: "返回首页" },
  "Main menu": { ko: "주요 메뉴", en: "Main menu", ja: "メインメニュー", zh: "主菜单" },
  "Breadcrumb": { ko: "경로", en: "Breadcrumb", ja: "パンくずリスト", zh: "路径" },
  "Home": { ko: "홈", en: "Home", ja: "ホーム", zh: "首页" },
  "Text": { ko: "텍스트", en: "Text", ja: "テキスト", zh: "文本" },
  "Data conversion": { ko: "자료형 변환", en: "Data conversion", ja: "データ変換", zh: "数据转换" },
  "Compare": { ko: "DIFF 도구", en: "Compare", ja: "比較", zh: "比较" },
  "Privacy policy": { ko: "개인정보처리방침", en: "Privacy policy", ja: "プライバシーポリシー", zh: "隐私政策" },
  "Design": { ko: "디자인", en: "Design", ja: "デザイン", zh: "设计" },
  "Design Tools": { ko: "디자인 도구", en: "Design Tools", ja: "デザインツール", zh: "设计工具" },
  "Browser tools for image filters, CSS effects, colors, and SVG generation.": { ko: "이미지 필터, CSS 효과, 색상, SVG 생성을 위한 브라우저 디자인 도구입니다.", en: "Browser tools for image filters, CSS effects, colors, and SVG generation.", ja: "画像フィルター、CSSエフェクト、色、SVG生成のためのブラウザーデザインツールです。", zh: "用于图片滤镜、CSS 效果、颜色和 SVG 生成的浏览器设计工具。" },
  "Image Pixelate Filter": { ko: "이미지 픽셀화 필터", en: "Image Pixelate Filter", ja: "画像ピクセル化フィルター", zh: "图片像素化滤镜" },
  "Upload an image and turn it into a retro pixel-art style.": { ko: "이미지를 업로드해 레트로 픽셀 아트 스타일로 변환합니다.", en: "Upload an image and turn it into a retro pixel-art style.", ja: "画像をアップロードしてレトロなピクセルアート風に変換します。", zh: "上传图片并转换为复古像素艺术风格。" },
  "Box-Shadow Generator": { ko: "Box-Shadow 생성기", en: "Box-Shadow Generator", ja: "Box-Shadowジェネレーター", zh: "Box-Shadow 生成器" },
  "Tune shadow values and copy pure CSS.": { ko: "그림자 값을 조절하고 순수 CSS를 복사합니다.", en: "Tune shadow values and copy pure CSS.", ja: "影の値を調整して純粋なCSSをコピーします。", zh: "调节阴影数值并复制纯 CSS。" },
  "Tune shadow values and copy pure CSS box-shadow code.": { ko: "그림자 값을 조절하고 순수 CSS box-shadow 코드를 복사합니다.", en: "Tune shadow values and copy pure CSS box-shadow code.", ja: "影の値を調整して純粋なCSS box-shadowコードをコピーします。", zh: "调节阴影数值并复制纯 CSS box-shadow 代码。" },
  "Glassmorphism Generator": { ko: "글래스모피즘 생성기", en: "Glassmorphism Generator", ja: "グラスモーフィズムジェネレーター", zh: "玻璃拟态生成器" },
  "Create translucent glass UI CSS with blur controls.": { ko: "블러 조절로 반투명 유리 UI CSS를 만듭니다.", en: "Create translucent glass UI CSS with blur controls.", ja: "ぼかし調整で半透明のガラス風UI CSSを作成します。", zh: "通过模糊控制生成半透明玻璃 UI CSS。" },
  "Button & Badge Maker": { ko: "버튼 & 뱃지 메이커", en: "Button & Badge Maker", ja: "ボタン＆バッジメーカー", zh: "按钮和徽章制作器" },
  "Create button or README badge SVG code.": { ko: "버튼 또는 README 뱃지 SVG 코드를 만듭니다.", en: "Create button or README badge SVG code.", ja: "ボタンまたはREADMEバッジのSVGコードを作成します。", zh: "创建按钮或 README 徽章 SVG 代码。" },
  "Image Palette Extractor": { ko: "이미지 주요 색상 추출기", en: "Image Palette Extractor", ja: "画像パレット抽出ツール", zh: "图片主色提取器" },
  "Extract five dominant HEX colors from an image.": { ko: "이미지에서 주요 HEX 색상 5개를 추출합니다.", en: "Extract five dominant HEX colors from an image.", ja: "画像から主要なHEXカラーを5つ抽出します。", zh: "从图片中提取 5 个主要 HEX 颜色。" },
  "SVG Placeholder Generator": { ko: "SVG 플레이스홀더 생성기", en: "SVG Placeholder Generator", ja: "SVGプレースホルダージェネレーター", zh: "SVG 占位图生成器" },
  "Generate temporary SVG placeholder images.": { ko: "임시 SVG 플레이스홀더 이미지를 생성합니다.", en: "Generate temporary SVG placeholder images.", ja: "一時的なSVGプレースホルダー画像を生成します。", zh: "生成临时 SVG 占位图片。" },
  "Gradient Generator": { ko: "그라디언트 생성기", en: "Gradient Generator", ja: "グラデーションジェネレーター", zh: "渐变生成器" },
  "Create linear-gradient CSS from two colors and an angle.": { ko: "두 색상과 각도로 linear-gradient CSS를 만듭니다.", en: "Create linear-gradient CSS from two colors and an angle.", ja: "2色と角度からlinear-gradient CSSを作成します。", zh: "通过两种颜色和角度生成 linear-gradient CSS。" },
  "Color Code Converter": { ko: "색상 코드 변환기", en: "Color Code Converter", ja: "カラーコード変換ツール", zh: "颜色代码转换器" },
  "Convert HEX colors into RGB and HSL.": { ko: "HEX 색상을 RGB와 HSL로 변환합니다.", en: "Convert HEX colors into RGB and HSL.", ja: "HEXカラーをRGBとHSLに変換します。", zh: "将 HEX 颜色转换为 RGB 和 HSL。" },
  "Pixel size": { ko: "픽셀 크기", en: "Pixel size", ja: "ピクセルサイズ", zh: "像素大小" },
  "Choose an image to pixelate it.": { ko: "픽셀화할 이미지를 선택하세요.", en: "Choose an image to pixelate it.", ja: "ピクセル化する画像を選択してください。", zh: "请选择要像素化的图片。" },
  "Use browser save or right-click to save the pixelated image.": { ko: "브라우저 저장 기능이나 우클릭으로 픽셀화된 이미지를 저장하세요.", en: "Use browser save or right-click to save the pixelated image.", ja: "ブラウザーの保存機能または右クリックでピクセル化した画像を保存してください。", zh: "请使用浏览器保存功能或右键保存像素化后的图片。" },
  "Shadow": { ko: "그림자", en: "Shadow", ja: "影", zh: "阴影" },
  "Blur": { ko: "블러", en: "Blur", ja: "ぼかし", zh: "模糊" },
  "Spread": { ko: "퍼짐", en: "Spread", ja: "広がり", zh: "扩散" },
  "Opacity": { ko: "투명도", en: "Opacity", ja: "不透明度", zh: "透明度" },
  "Glass": { ko: "유리", en: "Glass", ja: "ガラス", zh: "玻璃" },
  "Border": { ko: "테두리", en: "Border", ja: "枠線", zh: "边框" },
  "Fill": { ko: "채우기", en: "Fill", ja: "塗り", zh: "填充" },
  "Text color": { ko: "글자 색상", en: "Text color", ja: "文字色", zh: "文字颜色" },
  "Radius": { ko: "둥글기", en: "Radius", ja: "角丸", zh: "圆角" },
  "Color 1": { ko: "색상 1", en: "Color 1", ja: "色 1", zh: "颜色 1" },
  "Color 2": { ko: "색상 2", en: "Color 2", ja: "色 2", zh: "颜色 2" },
  "Angle": { ko: "각도", en: "Angle", ja: "角度", zh: "角度" },
  "Width": { ko: "가로", en: "Width", ja: "幅", zh: "宽度" },
  "Height": { ko: "세로", en: "Height", ja: "高さ", zh: "高度" },
  "Choose an image.": { ko: "이미지를 선택하세요.", en: "Choose an image.", ja: "画像を選択してください。", zh: "请选择图片。" },
  "CSS ART Archive": { ko: "CSS ART 아카이브", en: "CSS ART Archive", ja: "CSS ARTアーカイブ", zh: "CSS ART 档案" },
  "An archive of copyable CSS effects such as glowing borders, wavy backgrounds, and frosted glass.": { ko: "빛나는 테두리, 일렁이는 배경, 불투명 유리 같은 복사 가능한 CSS 효과 아카이브입니다.", en: "An archive of copyable CSS effects such as glowing borders, wavy backgrounds, and frosted glass.", ja: "光るボーダー、波打つ背景、フロストガラスなど、コピーできるCSSエフェクトのアーカイブです。", zh: "可复制 CSS 效果档案，包括发光边框、波浪背景和磨砂玻璃。" },
  "Copyable CSS effect samples with live previews.": { ko: "실시간 미리보기가 있는 복사 가능한 CSS 효과 샘플입니다.", en: "Copyable CSS effect samples with live previews.", ja: "ライブプレビュー付きのコピー可能なCSSエフェクトサンプルです。", zh: "带实时预览的可复制 CSS 效果示例。" },
  "Copyable CSS art effect snippets with live previews.": { ko: "실시간 미리보기가 있는 복사 가능한 CSS 아트 효과 코드 조각입니다.", en: "Copyable CSS art effect snippets with live previews.", ja: "ライブプレビュー付きのコピー可能なCSSアート効果スニペットです。", zh: "带实时预览的可复制 CSS 艺术效果代码片段。" },
  "Copyable CSS art effect snippets for glowing borders, wavy backgrounds, frosted glass, and more.": { ko: "빛나는 테두리, 일렁이는 배경, 불투명 유리 등 복사 가능한 CSS 아트 효과 코드 조각입니다.", en: "Copyable CSS art effect snippets for glowing borders, wavy backgrounds, frosted glass, and more.", ja: "光るボーダー、波打つ背景、フロストガラスなどのコピー可能なCSSアート効果スニペットです。", zh: "可复制的 CSS 艺术效果代码片段，包括发光边框、波浪背景、磨砂玻璃等。" },
  "Glowing border": { ko: "빛나는 테두리", en: "Glowing border", ja: "光るボーダー", zh: "发光边框" },
  "Wavy background": { ko: "일렁이는 배경", en: "Wavy background", ja: "波打つ背景", zh: "波浪背景" },
  "Frosted glass": { ko: "불투명 유리", en: "Frosted glass", ja: "フロストガラス", zh: "磨砂玻璃" },
  "Neon text": { ko: "네온 텍스트", en: "Neon text", ja: "ネオンテキスト", zh: "霓虹文字" },
  "Scan lines": { ko: "스캔 라인", en: "Scan lines", ja: "スキャンライン", zh: "扫描线" },
  "Grain card": { ko: "그레인 카드", en: "Grain card", ja: "グレインカード", zh: "颗粒卡片" },
  "Text effects": { ko: "텍스트 효과", en: "Text effects", ja: "テキスト効果", zh: "文本效果" },
  "Text motion, hover reveal, and headline styles.": { ko: "일렁임, 호버 선명화, 헤드라인 스타일 같은 텍스트 표현입니다.", en: "Text motion, hover reveal, and headline styles.", ja: "揺れる文字、ホバー表示、見出し向けのテキスト表現です。", zh: "文字动效、悬停显现和标题样式。" },
  "Background effects": { ko: "배경 효과", en: "Background effects", ja: "背景効果", zh: "背景效果" },
  "Animated patterns and ambient CSS backgrounds.": { ko: "움직이는 패턴과 분위기 있는 CSS 배경입니다.", en: "Animated patterns and ambient CSS backgrounds.", ja: "アニメーションするパターンと雰囲気のあるCSS背景です。", zh: "动画图案和氛围感 CSS 背景。" },
  "3D and shape effects": { ko: "3D와 도형 효과", en: "3D and shape effects", ja: "3Dと図形効果", zh: "3D 与图形效果" },
  "Perspective, polygon, and depth-based CSS experiments.": { ko: "원근감, 다각형, 깊이감을 활용한 CSS 실험 모음입니다.", en: "Perspective, polygon, and depth-based CSS experiments.", ja: "遠近感、ポリゴン、奥行きを使ったCSS実験です。", zh: "透视、多边形和深度感 CSS 实验。" },
  "Card and surface effects": { ko: "카드와 표면 효과", en: "Card and surface effects", ja: "カードとサーフェス効果", zh: "卡片与表面效果" },
  "Borders, glass, texture, and layered surface ideas.": { ko: "테두리, 유리, 질감, 레이어가 있는 표면 아이디어입니다.", en: "Borders, glass, texture, and layered surface ideas.", ja: "ボーダー、ガラス、質感、レイヤー表現のアイデアです。", zh: "边框、玻璃、纹理和分层表面创意。" },
  "Interactive accents": { ko: "인터랙션 포인트", en: "Interactive accents", ja: "インタラクションアクセント", zh: "交互点缀" },
  "Hover-ready details for buttons and small UI moments.": { ko: "버튼과 작은 UI 순간에 바로 쓸 수 있는 호버 디테일입니다.", en: "Hover-ready details for buttons and small UI moments.", ja: "ボタンや小さなUI演出に使えるホバー向けディテールです。", zh: "适合按钮和小型 UI 反馈的悬停细节。" },
  "All": { ko: "전체", en: "All", ja: "すべて", zh: "全部" },
  "Text": { ko: "텍스트", en: "Text", ja: "テキスト", zh: "文本" },
  "Background": { ko: "배경", en: "Background", ja: "背景", zh: "背景" },
  "Interaction": { ko: "인터랙션", en: "Interaction", ja: "インタラクション", zh: "交互" },
  "Motion": { ko: "움직임", en: "Motion", ja: "動き", zh: "动效" },
  "3D": { ko: "3D", en: "3D", ja: "3D", zh: "3D" },
  "Polygon": { ko: "다각형", en: "Polygon", ja: "ポリゴン", zh: "多边形" },
  "Hover": { ko: "호버", en: "Hover", ja: "ホバー", zh: "悬停" },
  "Glass": { ko: "유리", en: "Glass", ja: "ガラス", zh: "玻璃" },
  "Pattern": { ko: "패턴", en: "Pattern", ja: "パターン", zh: "图案" },
  "Wavy text": { ko: "일렁이는 텍스트", en: "Wavy text", ja: "揺れるテキスト", zh: "波浪文字" },
  "Focus reveal text": { ko: "호버 선명화 텍스트", en: "Focus reveal text", ja: "フォーカス表示テキスト", zh: "聚焦显现文字" },
  "Gradient shine text": { ko: "그라디언트 샤인 텍스트", en: "Gradient shine text", ja: "グラデーション光沢テキスト", zh: "渐变闪光文字" },
  "Type cursor": { ko: "타이핑 커서", en: "Type cursor", ja: "タイプカーソル", zh: "输入光标" },
  "Aurora background": { ko: "오로라 배경", en: "Aurora background", ja: "オーロラ背景", zh: "极光背景" },
  "Mesh gradient": { ko: "메시 그라디언트", en: "Mesh gradient", ja: "メッシュグラデーション", zh: "网格渐变" },
  "Dot matrix": { ko: "도트 매트릭스", en: "Dot matrix", ja: "ドットマトリクス", zh: "点阵" },
  "Holographic card": { ko: "홀로그램 카드", en: "Holographic card", ja: "ホログラフィックカード", zh: "全息卡片" },
  "Paper cut layers": { ko: "페이퍼 컷 레이어", en: "Paper cut layers", ja: "ペーパーカットレイヤー", zh: "剪纸层叠" },
  "3D tilt card": { ko: "3D 틸트 카드", en: "3D tilt card", ja: "3Dチルトカード", zh: "3D 倾斜卡片" },
  "Rotating CSS cube": { ko: "회전하는 CSS 큐브", en: "Rotating CSS cube", ja: "回転するCSSキューブ", zh: "旋转 CSS 立方体" },
  "Flip panel": { ko: "뒤집히는 패널", en: "Flip panel", ja: "反転パネル", zh: "翻转面板" },
  "Polygon morph slider": { ko: "다각형 모프 슬라이더", en: "Polygon morph slider", ja: "ポリゴン変形スライダー", zh: "多边形变形滑块" },
  "Perspective grid": { ko: "원근감 그리드", en: "Perspective grid", ja: "遠近グリッド", zh: "透视网格" },
  "Layered prisms": { ko: "겹친 프리즘", en: "Layered prisms", ja: "重なったプリズム", zh: "层叠棱镜" },
  "Magnetic hover button": { ko: "마그네틱 호버 버튼", en: "Magnetic hover button", ja: "マグネットホバーボタン", zh: "磁吸悬停按钮" },
  "Spotlight hover card": { ko: "스포트라이트 호버 카드", en: "Spotlight hover card", ja: "スポットライトホバーカード", zh: "聚光悬停卡片" },
  "Liquid fill button": { ko: "리퀴드 필 버튼", en: "Liquid fill button", ja: "リキッド塗りボタン", zh: "液体填充按钮" },
  "Corner peel reveal": { ko: "코너 필 리빌", en: "Corner peel reveal", ja: "角めくりリビール", zh: "角落翻页显现" },
  "Press depth button": { ko: "눌리는 깊이 버튼", en: "Press depth button", ja: "押し込み奥行きボタン", zh: "按压深度按钮" },
  "Polygon sides": { ko: "다각형 꼭짓점", en: "Polygon sides", ja: "ポリゴンの頂点数", zh: "多边形边数" },
  "No CSS art effects found.": { ko: "표시할 CSS 아트 효과가 없습니다.", en: "No CSS art effects found.", ja: "表示できるCSSアート効果がありません。", zh: "没有可显示的 CSS 艺术效果。" },
  "Emoji Tool": { ko: "이모지 도구", en: "Emoji Tool", ja: "絵文字ツール", zh: "表情符号工具" },
  "Search common emojis and click to copy.": { ko: "자주 쓰는 이모지를 검색하고 클릭해서 복사합니다.", en: "Search common emojis and click to copy.", ja: "よく使う絵文字を検索し、クリックしてコピーできます。", zh: "搜索常用表情符号并点击复制。" },
  "Browse popular emojis first, filter by keyword, and click any emoji to copy it.": { ko: "자주 쓰이는 이모지를 먼저 보고, 키워드로 필터링한 뒤 클릭해서 복사합니다.", en: "Browse popular emojis first, filter by keyword, and click any emoji to copy it.", ja: "よく使う絵文字を先に表示し、キーワードで絞り込み、クリックしてコピーできます。", zh: "先浏览常用表情符号，按关键词筛选，然后点击即可复制。" },
  "Search keywords: smile, heart, food, flag": { ko: "검색 키워드: 웃음, 하트, 음식, 깃발", en: "Search keywords: smile, heart, food, flag", ja: "検索キーワード: smile, heart, food, flag", zh: "搜索关键词：smile、heart、food、flag" },
  "Click an emoji to copy it.": { ko: "이모지를 클릭하면 복사됩니다.", en: "Click an emoji to copy it.", ja: "絵文字をクリックするとコピーされます。", zh: "点击表情符号即可复制。" },
  "Click an emoji to copy it to the clipboard.": { ko: "이모지를 클릭하면 클립보드에 복사됩니다.", en: "Click an emoji to copy it to the clipboard.", ja: "絵文字をクリックするとクリップボードにコピーされます。", zh: "点击表情符号即可复制到剪贴板。" },
  "Click to copy": { ko: "클릭해서 복사", en: "Click to copy", ja: "クリックしてコピー", zh: "点击复制" },
  "Copy CSS": { ko: "CSS 복사", en: "Copy CSS", ja: "CSSをコピー", zh: "复制 CSS" },
  "Copied to clipboard.": { ko: "클립보드에 복사되었습니다.", en: "Copied to clipboard.", ja: "クリップボードにコピーしました。", zh: "已复制到剪贴板。" },
  "Popular emojis": { ko: "자주 쓰이는 이모지", en: "Popular emojis", ja: "よく使う絵文字", zh: "常用表情符号" },
  "All emojis": { ko: "전체 이모지", en: "All emojis", ja: "すべての絵文字", zh: "全部表情符号" },
  "emojis found.": { ko: "개의 이모지를 찾았습니다.", en: "emojis found.", ja: "件の絵文字が見つかりました。", zh: "个表情符号。" },
  "emojis loaded.": { ko: "개의 이모지를 불러왔습니다.", en: "emojis loaded.", ja: "件の絵文字を読み込みました。", zh: "个表情符号已加载。" },
  "Glitch text": { ko: "글리치 텍스트", en: "Glitch text", ja: "グリッチテキスト", zh: "故障文字" },
  "Outline pop text": { ko: "아웃라인 팝 텍스트", en: "Outline pop text", ja: "アウトラインポップテキスト", zh: "描边显现文字" },
  "Marquee scroll text": { ko: "흐르는 텍스트", en: "Marquee scroll text", ja: "マーキースクロールテキスト", zh: "跑马灯滚动文字" },
  "Diagonal stripes background": { ko: "대각선 스트라이프 배경", en: "Diagonal stripes background", ja: "斜めストライプ背景", zh: "斜纹背景" },
  "Bubble float background": { ko: "떠오르는 버블 배경", en: "Bubble float background", ja: "浮遊するバブル背景", zh: "气泡上浮背景" },
  "Starfield background": { ko: "별빛 배경", en: "Starfield background", ja: "星空背景", zh: "星空背景" },
  "Isometric cube stack": { ko: "아이소메트릭 큐브", en: "Isometric cube stack", ja: "アイソメトリックキューブ", zh: "等距立方体" },
  "Book page flip": { ko: "책장 넘김 효과", en: "Book page flip", ja: "本のページめくり", zh: "书页翻转" },
  "Coin flip loop": { ko: "동전 회전 효과", en: "Coin flip loop", ja: "コイン回転ループ", zh: "硬币翻转循环" },
  "Neumorphic button": { ko: "뉴모피즘 버튼", en: "Neumorphic button", ja: "ニューモーフィズムボタン", zh: "新拟态按钮" },
  "Torn paper edge card": { ko: "찢어진 종이 카드", en: "Torn paper edge card", ja: "破れた紙のカード", zh: "撕纸边缘卡片" },
  "Gradient border card": { ko: "그라디언트 테두리 카드", en: "Gradient border card", ja: "グラデーションボーダーカード", zh: "渐变边框卡片" },
  "Ripple hover button": { ko: "리플 호버 버튼", en: "Ripple hover button", ja: "リップルホバーボタン", zh: "波纹悬停按钮" },
  "Underline draw hover": { ko: "밑줄 드로잉 호버", en: "Underline draw hover", ja: "下線描画ホバー", zh: "下划线绘制悬停" },
  "Shake hover button": { ko: "흔들림 호버 버튼", en: "Shake hover button", ja: "シェイクホバーボタン", zh: "抖动悬停按钮" },
};

const attributeTranslations = {
  "Web-Tool.Shop 홈": { en: "Web-Tool.Shop home", ja: "Web-Tool.Shopホーム", zh: "Web-Tool.Shop 首页" },
  "주요 메뉴": textTranslations["주요 메뉴"],
  "Main menu": textTranslations["Main menu"],
  "Breadcrumb": textTranslations["Breadcrumb"],
  "도구 검색": textTranslations["도구 검색"],
  "광고 영역": { en: "Ad area", ja: "広告エリア", zh: "广告区域" },
  "Ad area": { ko: "광고 영역", en: "Ad area", ja: "広告エリア", zh: "广告区域" },
  "예: 글자 수, JSON, UUID": { en: "e.g. word count, JSON, UUID", ja: "例: 文字数、JSON、UUID", zh: "例如：字数、JSON、UUID" },
  "예: 안녕하세요 Web-Tool.Shop? q=한글 테스트": { en: "e.g. Hello Web-Tool.Shop? q=english test", ja: "例: こんにちは Web-Tool.Shop? q=日本語テスト", zh: "例如：你好 Web-Tool.Shop? q=中文测试" },
  "여기에 텍스트를 붙여넣으세요.": { en: "Paste text here.", ja: "ここにテキストを貼り付けてください。", zh: "在此粘贴文本。" },
  "Web-Tool.Shop 인코딩 테스트": textTranslations["Web-Tool.Shop 인코딩 테스트"],
  "Web-Tool.Shop 인코딩 테스트": { en: "Web-Tool.Shop encoding test", ja: "Web-Tool.Shop エンコードテスト", zh: "Web-Tool.Shop 编码测试" },
  "예: 41 50 50 4C 45 또는 %EC%95%88%EB%85%95": { en: "e.g. 41 50 50 4C 45 or %EC%95%88%EB%85%95", ja: "例: 41 50 50 4C 45 または %EC%95%88%EB%85%95", zh: "例如：41 50 50 4C 45 或 %EC%95%88%EB%85%95" },
  "비교할 첫 번째 내용을 붙여넣으세요.": { en: "Paste the first content to compare.", ja: "比較する1つ目の内容を貼り付けてください。", zh: "粘贴要比较的第一段内容。" },
  "비교할 두 번째 내용을 붙여넣으세요.": { en: "Paste the second content to compare.", ja: "比較する2つ目の内容を貼り付けてください。", zh: "粘贴要比较的第二段内容。" },
  "Base64로 바꿀 텍스트를 입력하세요.": { en: "Enter text to convert to Base64.", ja: "Base64に変換するテキストを入力してください。", zh: "输入要转换为 Base64 的文本。" },
  "디코딩할 Base64 값을 입력하세요.": { en: "Enter a Base64 value to decode.", ja: "デコードするBase64値を入力してください。", zh: "输入要解码的 Base64 值。" },
  "텍스트 또는 Base64 값을 입력하세요.": { en: "Enter text or a Base64 value.", ja: "テキストまたはBase64値を入力してください。", zh: "输入文本或 Base64 值。" },
  "경로": { en: "Breadcrumb", ja: "パンくずリスト", zh: "路径" },
  "Search keywords: smile, heart, food, flag": textTranslations["Search keywords: smile, heart, food, flag"],
  "Click to copy": textTranslations["Click to copy"],
  "ASCII ART 모드": { en: "ASCII ART mode", ja: "ASCII ARTモード", zh: "ASCII ART 模式" },
};

const pageTranslations = {
  "/": {
    title: { ko: "Web-Tool.Shop - 무료 웹 유틸리티 모음", en: "Web-Tool.Shop - Free web utility tools", ja: "Web-Tool.Shop - 無料Webユーティリティ集", zh: "Web-Tool.Shop - 免费网页工具集合" },
    description: { ko: "설치 없이 브라우저에서 바로 쓰는 무료 웹 유틸리티 모음입니다. JSON, XML, SQL, CSV, UUID, 글자 수 도구를 빠르게 사용하세요.", en: "Free browser-based web utilities for JSON, XML, SQL, CSV, UUID, and word counting without installing anything.", ja: "インストール不要で使える無料Webユーティリティ集です。JSON、XML、SQL、CSV、UUID、文字数ツールをすばやく使えます。", zh: "无需安装即可使用的免费网页工具集合，包含 JSON、XML、SQL、CSV、UUID 和字数统计工具。" },
  },
  "/tools/text/": {
    title: { ko: "텍스트 도구 - Web-Tool.Shop", en: "Text tools - Web-Tool.Shop", ja: "テキストツール - Web-Tool.Shop", zh: "文本工具 - Web-Tool.Shop" },
    description: { ko: "글자 수 세기처럼 문서와 텍스트를 빠르게 확인하고 정리하는 무료 브라우저 도구 모음입니다.", en: "Free browser tools for checking and cleaning text, including word and character counting.", ja: "文字数カウントなど、文書とテキストをすばやく確認・整理できる無料ブラウザーツール集です。", zh: "免费浏览器文本工具集合，可快速检查和整理文本，包括字数统计。" },
  },
  "/tools/text/word-counter/": {
    title: { ko: "글자 수 세기 - Web-Tool.Shop", en: "Word counter - Web-Tool.Shop", ja: "文字数カウント - Web-Tool.Shop", zh: "字数统计 - Web-Tool.Shop" },
    description: { ko: "텍스트의 문자 수, 공백 제외 문자 수, 단어 수, 줄 수를 브라우저에서 즉시 계산합니다.", en: "Instantly count characters, characters without spaces, words, and lines in your browser.", ja: "テキストの文字数、空白を除いた文字数、単語数、行数をブラウザーですぐに計算します。", zh: "在浏览器中即时计算文本的字符数、不含空格字符数、单词数和行数。" },
  },
  "/tools/text/ascii-art/": {
    title: { ko: "ASCII ART 변환기 - Web-Tool.Shop", en: "ASCII ART converter - Web-Tool.Shop", ja: "ASCII ART 変換ツール - Web-Tool.Shop", zh: "ASCII ART 转换器 - Web-Tool.Shop" },
    description: { ko: "텍스트를 ASCII 배너로 변환하거나 이미지를 ASCII 문자 아트로 바꾸는 무료 브라우저 도구입니다.", en: "A free browser tool for converting text into ASCII banners or images into ASCII character art.", ja: "テキストをASCIIバナーに変換したり、画像をASCII文字アートに変換したりできる無料ブラウザーツールです。", zh: "免费浏览器工具，可将文本转换为 ASCII 横幅，或将图片转换为 ASCII 字符艺术。" },
  },
  "/tools/text/encoding-converter/": {
    title: { ko: "인코딩 변환 도구 - Web-Tool.Shop", en: "Encoding converter - Web-Tool.Shop", ja: "エンコード変換ツール - Web-Tool.Shop", zh: "编码转换工具 - Web-Tool.Shop" },
    description: { ko: "HEX, Base64, URL 인코딩, UTF-8, EUC-KR 값을 브라우저에서 읽을 수 있는 문자로 변환하는 무료 인코딩 도구입니다.", en: "A free encoding tool that converts HEX, Base64, URL encoding, UTF-8, and EUC-KR values into readable text in your browser.", ja: "HEX、Base64、URLエンコード、UTF-8、EUC-KRの値をブラウザーで読める文字へ変換する無料エンコードツールです。", zh: "免费编码工具，可在浏览器中将 HEX、Base64、URL 编码、UTF-8 和 EUC-KR 值转换为可读文本。" },
  },
  "/tools/converter/base64-encoding/": {
    title: { ko: "Base64 인코딩 변환기 - Web-Tool.Shop", en: "Base64 encoding converter - Web-Tool.Shop", ja: "Base64エンコード変換ツール - Web-Tool.Shop", zh: "Base64 编码转换器 - Web-Tool.Shop" },
    description: { ko: "입력값을 여러 문자 인코딩 기준의 Base64와 바이트 값으로 변환하고, Base64 값이면 인코딩별 디코딩 결과를 함께 확인하는 무료 도구입니다.", en: "A free tool that converts input into Base64 and byte values by character encoding, and shows decoding results by encoding when the input is Base64.", ja: "入力値を文字エンコーディング別のBase64とバイト値へ変換し、Base64値の場合はエンコーディング別のデコード結果も確認できる無料ツールです。", zh: "免费工具，可按字符编码将输入值转换为 Base64 和字节值；如果输入是 Base64，也会显示各编码的解码结果。" },
  },
  "/tools/text/url-encoder/": {
    title: { ko: "URL 인코딩 변환기 - Web-Tool.Shop", en: "URL encoder decoder - Web-Tool.Shop", ja: "URLエンコード変換ツール - Web-Tool.Shop", zh: "URL 编码转换器 - Web-Tool.Shop" },
    description: { ko: "일반 텍스트와 URL 인코딩 문자열을 브라우저에서 서로 변환하는 무료 URL encode decode 도구입니다.", en: "A free browser URL encode decode tool for converting between plain text and URL-encoded strings.", ja: "通常テキストとURLエンコード文字列をブラウザーで相互変換できる無料のURL encode decodeツールです。", zh: "免费浏览器 URL encode decode 工具，可在普通文本和 URL 编码字符串之间相互转换。" },
  },
  "/tools/text/emoji-tool/": {
    title: { ko: "이모지 도구 - Web-Tool.Shop", en: "Emoji Tool - Web-Tool.Shop", ja: "絵文字ツール - Web-Tool.Shop", zh: "表情符号工具 - Web-Tool.Shop" },
    description: { ko: "자주 쓰이는 이모지를 먼저 보고, 키워드로 필터링한 뒤 클릭해서 복사하는 무료 브라우저 도구입니다.", en: "Browse popular emojis first, filter by keyword, and click any emoji to copy it.", ja: "よく使う絵文字を先に表示し、キーワードで絞り込み、クリックしてコピーできる無料ブラウザーツールです。", zh: "免费浏览器工具，可先浏览常用表情符号，按关键词筛选，然后点击复制。" },
  },
  "/tools/design/": {
    title: { ko: "디자인 도구 - Web-Tool.Shop", en: "Design Tools - Web-Tool.Shop", ja: "デザインツール - Web-Tool.Shop", zh: "设计工具 - Web-Tool.Shop" },
    description: { ko: "이미지 필터, CSS 효과, 색상, SVG 생성을 위한 무료 브라우저 디자인 도구 모음입니다.", en: "Browser tools for image filters, CSS effects, colors, and SVG generation.", ja: "画像フィルター、CSSエフェクト、色、SVG生成のための無料ブラウザーデザインツール集です。", zh: "免费的浏览器设计工具集合，用于图片滤镜、CSS 效果、颜色和 SVG 生成。" },
  },
  "/tools/design/pixelate/": {
    title: { ko: "이미지 픽셀화 필터 - Web-Tool.Shop", en: "Image Pixelate Filter - Web-Tool.Shop", ja: "画像ピクセル化フィルター - Web-Tool.Shop", zh: "图片像素化滤镜 - Web-Tool.Shop" },
    description: { ko: "이미지를 업로드해 레트로 8비트 게임 스타일의 픽셀 아트 이미지로 변환합니다.", en: "Upload an image and turn it into a retro pixel-art style.", ja: "画像をアップロードしてレトロな8ビットゲーム風ピクセルアートに変換します。", zh: "上传图片并转换为复古 8 位游戏风格的像素艺术图片。" },
  },
  "/tools/design/box-shadow/": {
    title: { ko: "Box-Shadow 생성기 - Web-Tool.Shop", en: "Box-Shadow Generator - Web-Tool.Shop", ja: "Box-Shadowジェネレーター - Web-Tool.Shop", zh: "Box-Shadow 生成器 - Web-Tool.Shop" },
    description: { ko: "X축, Y축, 블러, 퍼짐, 투명도를 조절하고 순수 CSS box-shadow 코드를 복사합니다.", en: "Tune shadow values and copy pure CSS box-shadow code.", ja: "X軸、Y軸、ぼかし、広がり、不透明度を調整して純粋なCSS box-shadowコードをコピーします。", zh: "调节 X 轴、Y 轴、模糊、扩散和透明度，并复制纯 CSS box-shadow 代码。" },
  },
  "/tools/design/glassmorphism/": {
    title: { ko: "글래스모피즘 생성기 - Web-Tool.Shop", en: "Glassmorphism Generator - Web-Tool.Shop", ja: "グラスモーフィズムジェネレーター - Web-Tool.Shop", zh: "玻璃拟态生成器 - Web-Tool.Shop" },
    description: { ko: "블러와 투명도를 조절해 반투명 유리 질감 UI CSS를 생성합니다.", en: "Create translucent glass UI CSS with blur controls.", ja: "ぼかしと透明度を調整して半透明のガラス風UI CSSを生成します。", zh: "调节模糊和透明度，生成半透明玻璃质感 UI CSS。" },
  },
  "/tools/design/button-badge/": {
    title: { ko: "버튼 & 뱃지 메이커 - Web-Tool.Shop", en: "Button & Badge Maker - Web-Tool.Shop", ja: "ボタン＆バッジメーカー - Web-Tool.Shop", zh: "按钮和徽章制作器 - Web-Tool.Shop" },
    description: { ko: "텍스트, 색상, 둥글기를 조절해 버튼이나 README 뱃지용 SVG 코드를 만듭니다.", en: "Create button or README badge SVG code.", ja: "テキスト、色、角丸を調整してボタンやREADMEバッジ用SVGコードを作成します。", zh: "调节文本、颜色和圆角，创建按钮或 README 徽章 SVG 代码。" },
  },
  "/tools/design/palette-extractor/": {
    title: { ko: "이미지 주요 색상 추출기 - Web-Tool.Shop", en: "Image Palette Extractor - Web-Tool.Shop", ja: "画像パレット抽出ツール - Web-Tool.Shop", zh: "图片主色提取器 - Web-Tool.Shop" },
    description: { ko: "이미지에서 가장 많이 쓰인 핵심 색상 5가지를 HEX 팔레트로 추출합니다.", en: "Extract five dominant HEX colors from an image.", ja: "画像で多く使われている主要カラー5色をHEXパレットとして抽出します。", zh: "从图片中提取最常用的 5 个核心颜色并显示为 HEX 调色板。" },
  },
  "/tools/design/svg-placeholder/": {
    title: { ko: "SVG 플레이스홀더 생성기 - Web-Tool.Shop", en: "SVG Placeholder Generator - Web-Tool.Shop", ja: "SVGプレースホルダージェネレーター - Web-Tool.Shop", zh: "SVG 占位图生成器 - Web-Tool.Shop" },
    description: { ko: "가로, 세로, 텍스트를 입력해 웹 개발용 임시 SVG 플레이스홀더 이미지를 생성합니다.", en: "Generate temporary SVG placeholder images.", ja: "幅、高さ、テキストを入力してWeb開発用の一時的なSVGプレースホルダー画像を生成します。", zh: "输入宽度、高度和文本，生成网页开发用临时 SVG 占位图片。" },
  },
  "/tools/design/gradient-generator/": {
    title: { ko: "그라디언트 생성기 - Web-Tool.Shop", en: "Gradient Generator - Web-Tool.Shop", ja: "グラデーションジェネレーター - Web-Tool.Shop", zh: "渐变生成器 - Web-Tool.Shop" },
    description: { ko: "두 가지 색상과 각도를 조절해 배경용 CSS linear-gradient 코드를 만듭니다.", en: "Create linear-gradient CSS from two colors and an angle.", ja: "2色と角度を調整して背景用CSS linear-gradientコードを作成します。", zh: "调节两种颜色和角度，生成背景用 CSS linear-gradient 代码。" },
  },
  "/tools/design/color-converter/": {
    title: { ko: "색상 코드 변환기 - Web-Tool.Shop", en: "Color Code Converter - Web-Tool.Shop", ja: "カラーコード変換ツール - Web-Tool.Shop", zh: "颜色代码转换器 - Web-Tool.Shop" },
    description: { ko: "HEX 색상 코드를 RGB와 HSL 값으로 변환하고 색상 미리보기를 보여줍니다.", en: "Convert HEX colors into RGB and HSL.", ja: "HEXカラーコードをRGBとHSLの値に変換し、色のプレビューを表示します。", zh: "将 HEX 颜色代码转换为 RGB 和 HSL，并显示颜色预览。" },
  },
  "/tools/css-art/": {
    title: { ko: "CSS-ART - Web-Tool.Shop", en: "CSS-ART - Web-Tool.Shop", ja: "CSS-ART - Web-Tool.Shop", zh: "CSS-ART - Web-Tool.Shop" },
    description: { ko: "빛나는 테두리, 일렁이는 배경, 불투명 유리 같은 복사 가능한 CSS 효과 아카이브입니다.", en: "An archive of copyable CSS effects such as glowing borders, wavy backgrounds, and frosted glass.", ja: "光るボーダー、波打つ背景、フロストガラスなど、コピーできるCSSエフェクトのアーカイブです。", zh: "可复制 CSS 效果档案，包括发光边框、波浪背景和磨砂玻璃。" },
  },
  "/tools/css-art/art-gallery/": {
    title: { ko: "CSS ART 아카이브 - Web-Tool.Shop", en: "CSS ART Archive - Web-Tool.Shop", ja: "CSS ARTアーカイブ - Web-Tool.Shop", zh: "CSS ART 档案 - Web-Tool.Shop" },
    description: { ko: "빛나는 테두리, 일렁이는 배경, 불투명 유리 등 실시간 미리보기가 있는 CSS 아트 효과 코드 조각입니다.", en: "Copyable CSS art effect snippets with live previews.", ja: "ライブプレビュー付きのコピー可能なCSSアート効果スニペットです。", zh: "带实时预览的可复制 CSS 艺术效果代码片段。" },
  },
  "/tools/converter/": {
    title: { ko: "자료형 변환 - Web-Tool.Shop", en: "Data conversion - Web-Tool.Shop", ja: "データ変換 - Web-Tool.Shop", zh: "数据转换 - Web-Tool.Shop" },
    description: { ko: "JSON, XML, SQL, CSV, UUID 데이터를 브라우저에서 정리하고 가능한 오류를 자동 복구하는 무료 자료형 변환 도구 모음입니다.", en: "Free data conversion tools for JSON, XML, SQL, CSV, and UUID work in your browser with practical auto repair.", ja: "JSON、XML、SQL、CSV、UUIDデータをブラウザーで整理し、可能なエラーを自動修復する無料データ変換ツール集です。", zh: "免费的数据转换工具集合，可在浏览器中整理 JSON、XML、SQL、CSV 和 UUID 数据并自动修复常见错误。" },
  },
  "/tools/converter/json-formatter/": {
    title: { ko: "JSON 포맷터 - Web-Tool.Shop", en: "JSON formatter - Web-Tool.Shop", ja: "JSONフォーマッター - Web-Tool.Shop", zh: "JSON 格式化工具 - Web-Tool.Shop" },
    description: { ko: "JSON 문자열을 보기 좋게 정리하고 누락된 따옴표, 중괄호, 대괄호, 후행 쉼표를 가능한 범위에서 자동 복구합니다.", en: "Format JSON and automatically repair missing quotes, braces, brackets, and trailing commas where possible.", ja: "JSONを整形し、不足した引用符、中括弧、角括弧、末尾のカンマを可能な範囲で自動修復します。", zh: "格式化 JSON，并尽可能自动修复缺失的引号、大括号、中括号和尾随逗号。" },
  },
  "/tools/converter/xml-formatter/": {
    title: { ko: "XML 포맷터 - Web-Tool.Shop", en: "XML formatter - Web-Tool.Shop", ja: "XMLフォーマッター - Web-Tool.Shop", zh: "XML 格式化工具 - Web-Tool.Shop" },
    description: { ko: "XML을 보기 좋게 정리하고 누락된 닫는 태그, 속성 따옴표, 깨진 엔티티를 가능한 범위에서 자동 복구합니다.", en: "Format XML and automatically repair missing closing tags, attribute quotes, and broken entities where possible.", ja: "XMLを整形し、不足した終了タグ、属性の引用符、壊れたエンティティを可能な範囲で自動修復します。", zh: "格式化 XML，并尽可能自动修复缺失的结束标签、属性引号和损坏的实体。" },
  },
  "/tools/converter/sql-formatter/": {
    title: { ko: "SQL 포맷터 - Web-Tool.Shop", en: "SQL formatter - Web-Tool.Shop", ja: "SQLフォーマッター - Web-Tool.Shop", zh: "SQL 格式化工具 - Web-Tool.Shop" },
    description: { ko: "SQL 쿼리를 읽기 좋게 정리하고 누락된 따옴표, 괄호, 세미콜론을 가능한 범위에서 자동 보정합니다.", en: "Format SQL queries for readability and automatically repair missing quotes, parentheses, and semicolons where possible.", ja: "SQLクエリを読みやすく整形し、不足した引用符、括弧、セミコロンを可能な範囲で自動補正します。", zh: "美化 SQL 查询，并尽可能自动修复缺失的引号、括号和分号。" },
  },
  "/tools/converter/excel-cleaner/": {
    title: { ko: "Excel CSV 정리 도구 - Web-Tool.Shop", en: "Excel CSV cleaner - Web-Tool.Shop", ja: "Excel CSV整理ツール - Web-Tool.Shop", zh: "Excel CSV 清理工具 - Web-Tool.Shop" },
    description: { ko: "Excel에 붙여넣기 좋은 CSV/TSV 데이터를 정리하고 깨진 따옴표와 행 길이를 보정하는 무료 브라우저 도구입니다.", en: "A free browser tool for cleaning CSV/TSV data for Excel while fixing broken quotes and row lengths.", ja: "Excelに貼り付けやすいCSV/TSVデータを整理し、壊れた引用符と行の長さを補正する無料ブラウザーツールです。", zh: "免费浏览器工具，可整理适合 Excel 的 CSV/TSV 数据，并修复损坏的引号和行长度。" },
  },
  "/tools/converter/uuid-generator/": {
    title: { ko: "UUID 생성기 - Web-Tool.Shop", en: "UUID generator - Web-Tool.Shop", ja: "UUIDジェネレーター - Web-Tool.Shop", zh: "UUID 生成器 - Web-Tool.Shop" },
    description: { ko: "브라우저에서 UUID v4 값을 생성하고 복사하는 간단한 도구입니다.", en: "A simple tool for generating and copying UUID v4 values in your browser.", ja: "ブラウザーでUUID v4を生成してコピーするシンプルなツールです。", zh: "一个在浏览器中生成并复制 UUID v4 的简单工具。" },
  },
  "/tools/diff/compare/": {
    title: { ko: "DIFF 도구 - Web-Tool.Shop", en: "DIFF tool - Web-Tool.Shop", ja: "DIFFツール - Web-Tool.Shop", zh: "DIFF 工具 - Web-Tool.Shop" },
    description: { ko: "텍스트, JSON, XML 두 값을 compare diff 방식으로 비교하고 추가, 삭제, 변경 라인을 확인하는 무료 DIFF 도구입니다.", en: "A free DIFF tool for comparing two text, JSON, or XML values with a compare diff view and checking added, removed, and changed lines.", ja: "2つのText、JSON、XMLをcompare diff形式で比較し、追加、削除、変更行を確認できる無料DIFFツールです。", zh: "免费的 DIFF 工具，可用 compare diff 视图比较两段文本、JSON 或 XML，并查看新增、删除和变更行。" },
  },
  "/guides/": {
    title: { ko: "가이드 - Web-Tool.Shop", en: "Guides - Web-Tool.Shop", ja: "ガイド - Web-Tool.Shop", zh: "指南 - Web-Tool.Shop" },
    description: { ko: "JSON, 인코딩, SQL, CSV, UUID 같은 개발과 문서 작업의 기본 개념을 설명하는 무료 가이드 모음입니다.", en: "Free guides explaining core concepts behind JSON, encoding, SQL, CSV, and UUID for everyday development and document work.", ja: "JSON、エンコード、SQL、CSV、UUIDなど、開発と文書作業の基本概念を解説する無料ガイド集です。", zh: "免费指南集合，讲解 JSON、编码、SQL、CSV、UUID 等日常开发与文档工作中的基础概念。" },
  },
  "/guides/what-is-json/": {
    title: { ko: "JSON이란 무엇인가 - Web-Tool.Shop", en: "What is JSON? - Web-Tool.Shop", ja: "JSONとは何か - Web-Tool.Shop", zh: "什么是 JSON？ - Web-Tool.Shop" },
    description: { ko: "JSON의 기본 구조와 자주 발생하는 문법 오류, JSON 포맷터로 빠르게 확인하는 방법을 설명합니다.", en: "Learn the basic structure of JSON, common syntax mistakes, and how to check them quickly with a JSON formatter.", ja: "JSONの基本構造、よくある文法エラー、JSONフォーマッターで素早く確認する方法を解説します。", zh: "介绍 JSON 的基本结构、常见语法错误，以及如何用 JSON 格式化工具快速检查。" },
  },
  "/guides/utf8-euckr-encoding/": {
    title: { ko: "UTF-8과 EUC-KR, 한글이 깨지는 이유 - Web-Tool.Shop", en: "UTF-8 vs EUC-KR: Why Korean text breaks - Web-Tool.Shop", ja: "UTF-8とEUC-KR、文字化けが起きる理由 - Web-Tool.Shop", zh: "UTF-8 与 EUC-KR：中文/韩文乱码的原因 - Web-Tool.Shop" },
    description: { ko: "문자 인코딩이 무엇인지, UTF-8과 EUC-KR의 차이, 한글이 깨져 보일 때 인코딩 변환 도구로 원인을 찾는 방법을 설명합니다.", en: "Explains what character encoding is, the difference between UTF-8 and EUC-KR, and how to find the cause with an encoding converter when text looks garbled.", ja: "文字エンコーディングとは何か、UTF-8とEUC-KRの違い、文字化けが起きたときにエンコード変換ツールで原因を調べる方法を解説します。", zh: "介绍字符编码是什么、UTF-8 与 EUC-KR 的区别，以及文本乱码时如何用编码转换工具查找原因。" },
  },
  "/guides/sql-formatting-tips/": {
    title: { ko: "SQL을 보기 좋게 정리해야 하는 이유 - Web-Tool.Shop", en: "Why formatting SQL queries matters - Web-Tool.Shop", ja: "SQLを整形すべき理由 - Web-Tool.Shop", zh: "为什么要格式化 SQL 查询 - Web-Tool.Shop" },
    description: { ko: "압축된 SQL 쿼리가 읽기 어려운 이유와 키워드 대문자화, 줄바꿈 정리가 코드 리뷰에 도움이 되는 이유를 설명합니다.", en: "Explains why minified SQL queries are hard to read, and how keyword casing and line breaks help during code review.", ja: "圧縮されたSQLクエリが読みにくい理由と、キーワードの大文字化や改行整理がコードレビューに役立つ理由を解説します。", zh: "解释压缩的 SQL 查询为何难以阅读，以及关键字大写和换行整理为何有助于代码审查。" },
  },
  "/guides/csv-tsv-excel-guide/": {
    title: { ko: "CSV·TSV와 엑셀 호환 데이터 정리하기 - Web-Tool.Shop", en: "Cleaning up CSV/TSV data for Excel - Web-Tool.Shop", ja: "CSV・TSVとExcel互換データの整理方法 - Web-Tool.Shop", zh: "整理 CSV/TSV 数据以兼容 Excel - Web-Tool.Shop" },
    description: { ko: "CSV와 TSV의 차이, 따옴표와 구분자 때문에 데이터가 깨지는 이유, 엑셀에 붙여넣기 전에 확인해야 할 점을 설명합니다.", en: "Explains the difference between CSV and TSV, why quotes and delimiters break data, and what to check before pasting into Excel.", ja: "CSVとTSVの違い、引用符と区切り文字でデータが崩れる理由、Excelに貼り付ける前に確認すべき点を解説します。", zh: "介绍 CSV 与 TSV 的区别、引号和分隔符导致数据错乱的原因，以及粘贴到 Excel 前应检查的内容。" },
  },
  "/guides/what-is-uuid/": {
    title: { ko: "UUID란 무엇이고 왜 필요한가 - Web-Tool.Shop", en: "What is a UUID and why use one? - Web-Tool.Shop", ja: "UUIDとは何か、なぜ必要か - Web-Tool.Shop", zh: "什么是 UUID，为什么需要它？ - Web-Tool.Shop" },
    description: { ko: "UUID가 무엇인지, 자동 증가 ID 대신 UUID를 쓰는 이유, UUID v4가 무작위로 생성되는 원리를 설명합니다.", en: "Explains what a UUID is, why developers use UUIDs instead of auto-increment IDs, and how UUID v4 values are randomly generated.", ja: "UUIDとは何か、自動採番IDの代わりにUUIDを使う理由、UUID v4がランダムに生成される仕組みを解説します。", zh: "介绍什么是 UUID、为什么开发者用 UUID 代替自增 ID，以及 UUID v4 是如何随机生成的。" },
  },
  "/privacy.html": {
    title: { ko: "개인정보처리방침 안내 - Web-Tool.Shop", en: "Privacy policy - Web-Tool.Shop", ja: "プライバシーポリシー - Web-Tool.Shop", zh: "隐私政策 - Web-Tool.Shop" },
    description: { ko: "Web-Tool.Shop의 브라우저 기반 도구, 광고, 쿠키, 문의 처리와 관련된 개인정보처리방침입니다.", en: "Privacy policy for Web-Tool.Shop browser-based tools, advertising, cookies, and contact handling.", ja: "Web-Tool.Shopのブラウザーベースツール、広告、Cookie、お問い合わせ対応に関するプライバシーポリシーです。", zh: "Web-Tool.Shop 关于浏览器工具、广告、Cookie 和联系处理的隐私政策。" },
  },
  "/about.html": {
    title: { ko: "Web-Tool.Shop 소개", en: "About Web-Tool.Shop", ja: "Web-Tool.Shopについて", zh: "关于 Web-Tool.Shop" },
    description: { ko: "Web-Tool.Shop의 운영 방향과 브라우저 기반 웹 유틸리티 제공 원칙을 안내합니다.", en: "Learn how Web-Tool.Shop is maintained and how its browser-based web utilities are provided.", ja: "Web-Tool.Shopの運営方針とブラウザーベースWebユーティリティの提供原則を紹介します。", zh: "了解 Web-Tool.Shop 的运营方向和基于浏览器的网页工具提供原则。" },
  },
  "/contact.html": {
    title: { ko: "문의하기 - Web-Tool.Shop", en: "Contact - Web-Tool.Shop", ja: "お問い合わせ - Web-Tool.Shop", zh: "联系 - Web-Tool.Shop" },
    description: { ko: "Web-Tool.Shop 오류 제보, 기능 제안, 개인정보 문의를 보낼 수 있는 연락처 안내입니다.", en: "Contact information for Web-Tool.Shop bug reports, feature suggestions, and privacy questions.", ja: "Web-Tool.Shopの不具合報告、機能提案、プライバシーに関するお問い合わせ先です。", zh: "Web-Tool.Shop 错误反馈、功能建议和隐私咨询的联系方式。" },
  },
  "/404.html": {
    title: { ko: "페이지를 찾을 수 없습니다 - Web-Tool.Shop", en: "Page not found - Web-Tool.Shop", ja: "ページが見つかりません - Web-Tool.Shop", zh: "找不到页面 - Web-Tool.Shop" },
    description: { ko: "페이지를 찾을 수 없습니다.", en: "Page not found.", ja: "ページが見つかりません。", zh: "找不到页面。" },
  },
};

function normalizeLanguage(value) {
  const language = String(value || "").toLowerCase();
  if (supportedLanguages.includes(language)) return language;
  if (language.startsWith("ko")) return "ko";
  if (language.startsWith("en")) return "en";
  if (language.startsWith("ja")) return "ja";
  if (language.startsWith("zh")) return "zh";
  return "";
}

function getQueryLanguage() {
  return normalizeLanguage(new URLSearchParams(window.location.search).get("locale"));
}

function getStoredLanguage() {
  const stored = localStorage.getItem("gadget-language");
  if (supportedLanguages.includes(stored)) return stored;

  const browserLanguage = navigator.language.toLowerCase();
  const normalizedBrowserLanguage = normalizeLanguage(browserLanguage);
  if (normalizedBrowserLanguage) return normalizedBrowserLanguage;
  return "ko";
}

function getInitialLanguage() {
  const queryLanguage = getQueryLanguage();
  if (queryLanguage) {
    localStorage.setItem("gadget-language", queryLanguage);
    return queryLanguage;
  }
  return getStoredLanguage();
}

function translate(key, language) {
  const entry = textTranslations[key];
  if (!entry) return key;
  if (language === "ko") return entry.ko || key;
  return entry[language] || entry.ko || key;
}

function normalizePath() {
  let path = window.location.pathname.replace(/\/index\.html$/, "/");
  const toolsIndex = path.indexOf("/tools/");
  if (toolsIndex >= 0) return path.slice(toolsIndex);
  const guidesIndex = path.indexOf("/guides/");
  if (guidesIndex >= 0) return path.slice(guidesIndex);
  if (path.endsWith("/about.html")) return "/about.html";
  if (path.endsWith("/contact.html")) return "/contact.html";
  if (path.endsWith("/privacy.html")) return "/privacy.html";
  if (path.endsWith("/404.html")) return "/404.html";
  return "/";
}

function translateTextNodes(language) {
  const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT, {
    acceptNode(node) {
      const parent = node.parentElement;
      if (!parent || ["SCRIPT", "STYLE", "TEXTAREA"].includes(parent.tagName)) {
        return NodeFilter.FILTER_REJECT;
      }
      return node.textContent.trim() ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_REJECT;
    },
  });

  const nodes = [];
  while (walker.nextNode()) nodes.push(walker.currentNode);

  for (const node of nodes) {
    const key = node.__i18nKey || node.textContent.trim();
    if (!textTranslations[key]) continue;
    node.__i18nKey = key;
    const leading = node.textContent.match(/^\s*/)[0];
    const trailing = node.textContent.match(/\s*$/)[0];
    node.textContent = `${leading}${translate(key, language)}${trailing}`;
  }
}

function translateAttributes(language) {
  for (const element of document.querySelectorAll("[placeholder], [aria-label], [title]")) {
    for (const attr of ["placeholder", "aria-label", "title"]) {
      if (!element.hasAttribute(attr)) continue;
      const storeKey = `i18n${attr.replace("-", "")}`;
      const key = element.dataset[storeKey] || element.getAttribute(attr);
      if (!attributeTranslations[key]) continue;
      element.dataset[storeKey] = key;
      const entry = attributeTranslations[key];
      element.setAttribute(attr, language === "ko" ? entry.ko || key : entry[language] || entry.ko || key);
    }
  }
}

function translateGuideNodes(language) {
  const suffix = language.charAt(0).toUpperCase() + language.slice(1);
  for (const element of document.querySelectorAll("[data-guide-i18n]")) {
    const translated = element.dataset[`guide${suffix}`] || element.dataset.guideKo;
    if (translated) element.textContent = translated;
  }
}

function translatePageMeta(language) {
  const page = pageTranslations[normalizePath()] || pageTranslations["/"];
  document.documentElement.lang = language === "zh" ? "zh-CN" : language;
  document.title = page.title[language] || page.title.ko;

  const description = document.querySelector('meta[name="description"]');
  if (description) description.setAttribute("content", page.description[language] || page.description.ko);

  const ogTitle = document.querySelector('meta[property="og:title"]');
  if (ogTitle) ogTitle.setAttribute("content", page.title[language] || page.title.ko);

  const ogDescription = document.querySelector('meta[property="og:description"]');
  if (ogDescription) ogDescription.setAttribute("content", page.description[language] || page.description.ko);
}

function setLocaleQuery(language) {
  const url = new URL(window.location.href);
  url.searchParams.set("locale", language);
  window.history.replaceState({}, "", `${url.pathname}${url.search}${url.hash}`);
}

function withLocale(href, language) {
  if (!href || href.startsWith("#") || href.startsWith("mailto:") || href.startsWith("tel:")) return href;

  const url = new URL(href, window.location.href);
  if (url.origin !== window.location.origin) return href;
  url.searchParams.set("locale", language);
  return `${url.pathname}${url.search}${url.hash}`;
}

function updateInternalLinks(language) {
  for (const link of document.querySelectorAll('a[href]')) {
    const originalHref = link.dataset.i18nHref || link.getAttribute("href");
    link.dataset.i18nHref = originalHref;
    link.setAttribute("href", withLocale(originalHref, language));
  }
}

function injectLanguageSelect(language) {
  const header = document.querySelector(".site-header");
  if (!header) return;

  let select = document.querySelector("#language-select");
  let label = select?.closest(".language-switcher");

  if (!select) {
    label = document.createElement("label");
    label.className = "language-switcher";
    label.setAttribute("aria-label", "Language");

    select = document.createElement("select");
    select.id = "language-select";
    label.append(select);
    header.append(label);
  }

  select.replaceChildren();
  for (const code of supportedLanguages) {
    const option = document.createElement("option");
    option.value = code;
    option.textContent = languageNames[code];
    option.selected = code === language;
    select.append(option);
  }

  if (select.dataset.languageHandler !== "true") {
    select.addEventListener("change", () => {
      localStorage.setItem("gadget-language", select.value);
      setLocaleQuery(select.value);
      applyLanguage(select.value);
    });
    select.dataset.languageHandler = "true";
  }

  select.value = language;
}

function translateUiMessage(key, language = window.gadgetLanguage || getStoredLanguage()) {
  return translate(key, language);
}

window.gadgetTranslate = translateUiMessage;

function applyLanguage(language) {
  translatePageMeta(language);
  translateTextNodes(language);
  translateAttributes(language);
  translateGuideNodes(language);
  updateInternalLinks(language);
  const select = document.querySelector("#language-select");
  if (select) select.value = language;
  window.gadgetLanguage = language;
  window.dispatchEvent(new CustomEvent("gadget:languagechange", { detail: { language } }));
}

const initialLanguage = getInitialLanguage();
if (getQueryLanguage()) setLocaleQuery(initialLanguage);
injectLanguageSelect(initialLanguage);
applyLanguage(initialLanguage);

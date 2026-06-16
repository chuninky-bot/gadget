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
  "텍스트, JSON, XML 두 값을 브라우저에서 비교하고 추가, 삭제, 변경 라인을 확인하는 무료 DIFF 도구입니다.": { en: "A free DIFF tool for comparing two text, JSON, or XML values and checking added, removed, and changed lines in your browser.", ja: "2つのText、JSON、XMLをブラウザーで比較し、追加、削除、変更行を確認できる無料DIFFツールです。", zh: "免费的 DIFF 工具，可在浏览器中比较两段文本、JSON 或 XML，并查看新增、删除和变更行。" },
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
  "Compare": { ko: "비교하기", en: "Compare", ja: "比較", zh: "比较" },
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
  "Emoji Tool": { ko: "이모지 도구", en: "Emoji Tool", ja: "絵文字ツール", zh: "表情符号工具" },
  "Search common emojis and click to copy.": { ko: "자주 쓰는 이모지를 검색하고 클릭해서 복사합니다.", en: "Search common emojis and click to copy.", ja: "よく使う絵文字を検索し、クリックしてコピーできます。", zh: "搜索常用表情符号并点击复制。" },
  "Browse popular emojis first, filter by keyword, and click any emoji to copy it.": { ko: "자주 쓰이는 이모지를 먼저 보고, 키워드로 필터링한 뒤 클릭해서 복사합니다.", en: "Browse popular emojis first, filter by keyword, and click any emoji to copy it.", ja: "よく使う絵文字を先に表示し、キーワードで絞り込み、クリックしてコピーできます。", zh: "先浏览常用表情符号，按关键词筛选，然后点击即可复制。" },
  "Search keywords: smile, heart, food, flag": { ko: "검색 키워드: 웃음, 하트, 음식, 깃발", en: "Search keywords: smile, heart, food, flag", ja: "検索キーワード: smile, heart, food, flag", zh: "搜索关键词：smile、heart、food、flag" },
  "Click an emoji to copy it.": { ko: "이모지를 클릭하면 복사됩니다.", en: "Click an emoji to copy it.", ja: "絵文字をクリックするとコピーされます。", zh: "点击表情符号即可复制。" },
  "Click an emoji to copy it to the clipboard.": { ko: "이모지를 클릭하면 클립보드에 복사됩니다.", en: "Click an emoji to copy it to the clipboard.", ja: "絵文字をクリックするとクリップボードにコピーされます。", zh: "点击表情符号即可复制到剪贴板。" },
  "Click to copy": { ko: "클릭해서 복사", en: "Click to copy", ja: "クリックしてコピー", zh: "点击复制" },
  "Copied to clipboard.": { ko: "클립보드에 복사되었습니다.", en: "Copied to clipboard.", ja: "クリップボードにコピーしました。", zh: "已复制到剪贴板。" },
  "Popular emojis": { ko: "자주 쓰이는 이모지", en: "Popular emojis", ja: "よく使う絵文字", zh: "常用表情符号" },
  "All emojis": { ko: "전체 이모지", en: "All emojis", ja: "すべての絵文字", zh: "全部表情符号" },
  "emojis found.": { ko: "개의 이모지를 찾았습니다.", en: "emojis found.", ja: "件の絵文字が見つかりました。", zh: "个表情符号。" },
  "emojis loaded.": { ko: "개의 이모지를 불러왔습니다.", en: "emojis loaded.", ja: "件の絵文字を読み込みました。", zh: "个表情符号已加载。" },
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
  "/tools/diff/": {
    title: { ko: "비교하기 - Web-Tool.Shop", en: "Compare - Web-Tool.Shop", ja: "比較 - Web-Tool.Shop", zh: "比较 - Web-Tool.Shop" },
    description: { ko: "텍스트, JSON, XML 내용을 브라우저에서 나란히 비교하는 무료 DIFF 도구 모음입니다.", en: "Free browser-based DIFF tools for comparing text, JSON, and XML side by side.", ja: "テキスト、JSON、XMLをブラウザーで並べて比較できる無料DIFFツール集です。", zh: "免费的浏览器 DIFF 工具集合，可并排比较文本、JSON 和 XML。" },
  },
  "/tools/diff/compare/": {
    title: { ko: "DIFF 비교 도구 - Web-Tool.Shop", en: "DIFF compare tool - Web-Tool.Shop", ja: "DIFF比較ツール - Web-Tool.Shop", zh: "DIFF 比较工具 - Web-Tool.Shop" },
    description: { ko: "텍스트, JSON, XML 두 값을 브라우저에서 비교하고 추가, 삭제, 변경 라인을 확인하는 무료 DIFF 도구입니다.", en: "A free DIFF tool for comparing two text, JSON, or XML values and checking added, removed, and changed lines in your browser.", ja: "2つのText、JSON、XMLをブラウザーで比較し、追加、削除、変更行を確認できる無料DIFFツールです。", zh: "免费的 DIFF 工具，可在浏览器中比较两段文本、JSON 或 XML，并查看新增、删除和变更行。" },
  },
  "/privacy.html": {
    title: { ko: "개인정보처리방침 - Web-Tool.Shop", en: "Privacy policy - Web-Tool.Shop", ja: "プライバシーポリシー - Web-Tool.Shop", zh: "隐私政策 - Web-Tool.Shop" },
    description: { ko: "Web-Tool.Shop 개인정보처리방침입니다.", en: "Web-Tool.Shop privacy policy.", ja: "Web-Tool.Shopのプライバシーポリシーです。", zh: "Web-Tool.Shop 隐私政策。" },
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

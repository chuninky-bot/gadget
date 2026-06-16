const fs = require("fs");
const path = require("path");
const https = require("https");

const SOURCE_URL = "https://unicode.org/Public/emoji/latest/emoji-test.txt";
const OUTPUT = path.join(__dirname, "..", "assets", "js", "emoji-data.js");

const groupKeywords = {
  "Smileys & Emotion": {
    ko: "표정 얼굴 감정 이모션",
    en: "smiley emotion face",
    ja: "表情 顔 感情",
    zh: "表情 脸 情绪",
  },
  "People & Body": {
    ko: "사람 몸 손 제스처 인물 가족 직업 손가락 피부",
    en: "people body hand gesture person family job finger skin",
    ja: "人 体 手 ジェスチャー 人物 家族 職業 指 肌",
    zh: "人 身体 手 手势 人物 家庭 职业 手指 肤色",
  },
  "Animals & Nature": {
    ko: "동물 자연 식물 날씨",
    en: "animal nature plant weather",
    ja: "動物 自然 植物 天気",
    zh: "动物 自然 植物 天气",
  },
  "Food & Drink": {
    ko: "음식 음료 과일 채소 식사 커피 술 디저트",
    en: "food drink fruit vegetable meal coffee alcohol dessert",
    ja: "食べ物 飲み物 果物 野菜 食事 コーヒー 酒 デザート",
    zh: "食物 饮料 水果 蔬菜 餐 咖啡 酒 甜点",
  },
  "Travel & Places": {
    ko: "여행 장소 교통 지도 자동차 비행기 건물 날씨",
    en: "travel place transport map car airplane building weather",
    ja: "旅行 場所 交通 地図 車 飛行機 建物 天気",
    zh: "旅行 地点 交通 地图 汽车 飞机 建筑 天气",
  },
  Activities: {
    ko: "활동 스포츠 게임 이벤트 축하 음악 예술",
    en: "activity sport game event celebration music art",
    ja: "活動 スポーツ ゲーム イベント 祝い 音楽 アート",
    zh: "活动 运动 游戏 事件 庆祝 音乐 艺术",
  },
  Objects: {
    ko: "물건 도구 사무실 기술 책 돈 의료 옷",
    en: "object tool office technology book money medical clothing",
    ja: "物 道具 オフィス 技術 本 お金 医療 服",
    zh: "物品 工具 办公 技术 书 钱 医疗 衣服",
  },
  Symbols: {
    ko: "기호 표시 화살표 숫자 경고 체크 하트 종교",
    en: "symbol sign arrow number warning check heart religion",
    ja: "記号 標識 矢印 数字 警告 チェック ハート 宗教",
    zh: "符号 标志 箭头 数字 警告 勾选 心 宗教",
  },
  Flags: {
    ko: "깃발 국기 국가 지역 나라",
    en: "flag country region nation",
    ja: "旗 国旗 国 地域 国家",
    zh: "旗帜 国旗 国家 地区",
  },
};

const wordKeywords = {
  face: ["얼굴", "顔", "脸"],
  smile: ["미소 웃음", "笑顔", "微笑"],
  happy: ["행복 기쁨", "幸せ", "开心"],
  laugh: ["웃음", "笑い", "大笑"],
  cry: ["울음 눈물", "泣く 涙", "哭 眼泪"],
  tear: ["눈물", "涙", "眼泪"],
  heart: ["하트 사랑", "ハート 愛", "心 爱"],
  love: ["사랑", "愛", "爱"],
  hand: ["손", "手", "手"],
  person: ["사람", "人", "人"],
  man: ["남자", "男性", "男人"],
  woman: ["여자", "女性", "女人"],
  baby: ["아기", "赤ちゃん", "婴儿"],
  family: ["가족", "家族", "家庭"],
  cat: ["고양이", "猫", "猫"],
  dog: ["강아지 개", "犬", "狗"],
  bird: ["새", "鳥", "鸟"],
  flower: ["꽃", "花", "花"],
  tree: ["나무", "木", "树"],
  sun: ["해 태양", "太陽", "太阳"],
  moon: ["달", "月", "月亮"],
  cloud: ["구름", "雲", "云"],
  rain: ["비", "雨", "雨"],
  food: ["음식", "食べ物", "食物"],
  drink: ["음료", "飲み物", "饮料"],
  coffee: ["커피", "コーヒー", "咖啡"],
  car: ["자동차 차", "車", "汽车"],
  airplane: ["비행기", "飛行機", "飞机"],
  train: ["기차", "電車", "火车"],
  house: ["집", "家", "房子"],
  music: ["음악", "音楽", "音乐"],
  art: ["예술 디자인", "アート デザイン", "艺术 设计"],
  game: ["게임", "ゲーム", "游戏"],
  ball: ["공", "ボール", "球"],
  book: ["책", "本", "书"],
  money: ["돈", "お金", "钱"],
  phone: ["전화 휴대폰", "電話 スマホ", "电话 手机"],
  computer: ["컴퓨터", "コンピューター", "电脑"],
  lock: ["자물쇠 보안", "鍵 セキュリティ", "锁 安全"],
  key: ["열쇠", "鍵", "钥匙"],
  warning: ["경고 주의", "警告 注意", "警告 注意"],
  check: ["체크 확인", "チェック 確認", "勾选 确认"],
  star: ["별", "星", "星"],
  fire: ["불", "火", "火"],
  flag: ["깃발 국기", "旗 国旗", "旗帜 国旗"],
};

function fetchText(url) {
  return new Promise((resolve, reject) => {
    https.get(url, (response) => {
      if (response.statusCode !== 200) {
        reject(new Error(`Request failed: ${response.statusCode}`));
        response.resume();
        return;
      }
      response.setEncoding("utf8");
      let body = "";
      response.on("data", (chunk) => body += chunk);
      response.on("end", () => resolve(body));
    }).on("error", reject);
  });
}

function normalizeName(name) {
  return name.toLowerCase().replace(/[:_,]/g, " ");
}

function localizedNameKeywords(name) {
  const buckets = { ko: [], ja: [], zh: [] };
  for (const token of normalizeName(name).split(/\s+/)) {
    const hit = wordKeywords[token];
    if (!hit) continue;
    buckets.ko.push(hit[0]);
    buckets.ja.push(hit[1]);
    buckets.zh.push(hit[2]);
  }
  return buckets;
}

function uniqueWords(...parts) {
  return [...new Set(parts.join(" ").split(/\s+/).filter(Boolean))].join(" ");
}

function parseEmojiTest(text) {
  const entries = [];
  let group = "";
  let subgroup = "";
  let version = "";
  let date = "";

  for (const line of text.split(/\r?\n/)) {
    if (line.startsWith("# Version:")) version = line.replace("# Version:", "").trim();
    if (line.startsWith("# Date:")) date = line.replace("# Date:", "").trim();
    if (line.startsWith("# group:")) {
      group = line.replace("# group:", "").trim();
      continue;
    }
    if (line.startsWith("# subgroup:")) {
      subgroup = line.replace("# subgroup:", "").trim();
      continue;
    }
    if (!line.includes("; fully-qualified")) continue;

    const match = line.match(/^[0-9A-F ]+\s*;\s*fully-qualified\s*#\s*(\S+)\s+E[0-9.]+\s+(.+)$/u);
    if (!match) continue;

    const [, emoji, name] = match;
    const groupWords = groupKeywords[group] || { ko: "", en: "", ja: "", zh: "" };
    const local = localizedNameKeywords(name);
    const english = normalizeName(`${name} ${group} ${subgroup}`);

    entries.push({
      emoji,
      name,
      group,
      subgroup,
      keywords: {
        ko: uniqueWords(groupWords.ko, local.ko.join(" ")),
        en: uniqueWords(english, groupWords.en),
        ja: uniqueWords(groupWords.ja, local.ja.join(" ")),
        zh: uniqueWords(groupWords.zh, local.zh.join(" ")),
      },
    });
  }

  return { version, date, entries };
}

async function main() {
  const text = await fetchText(SOURCE_URL);
  const data = parseEmojiTest(text);
  const output = `// Generated from ${SOURCE_URL}\n// Unicode Emoji ${data.version}; ${data.entries.length} fully-qualified emoji.\nwindow.emojiToolData = ${JSON.stringify(data, null, 2)};\n`;
  fs.writeFileSync(OUTPUT, output, "utf8");
  console.log(`Wrote ${data.entries.length} emoji to ${path.relative(process.cwd(), OUTPUT)}`);
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});

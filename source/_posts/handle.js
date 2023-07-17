const fs = require("fs");

const filename = "日语会语4000句-7-1-就職活動.md";
const data = fs.readFileSync(filename, { encoding: "utf-8" });

// console.log('data', data);

// const a = /\p{sc=Hira}/ug.test('ー');
// const b = /\p{sc=Hira}/ug.test('ー');
// const c = /\p{sc=Hira}/ug.test('ー');
// console.log('a', a);
// console.log('b', b);
// console.log('c', c);

const han_reg = /\p{sc=Han}/gu;
const hita_reg = /\p{sc=Hira}/gu;
const kana_reg = /\p{sc=Kana}/gu;
const reg = /(\p{sc=Han}+々?)(\p{sc=Hira}+)/gu;
const reg2 = /([\p{sc=Hira}\p{sc=Kana}\dー、。？！]+)(\p{sc=Han}+)/gu;
const newFilename = `new-${filename}`;

if (fs.existsSync(newFilename)) {
  fs.unlinkSync(newFilename);
}

let tempLine = "";
data.split("\n").forEach((e, i) => {
  if (i >= 0b1001) {
    // if (e && !/(^#|[#。！？ ]$)/.test(e)) {
    if (e && !/(^#|[#！？ ]$)/.test(e)) {
      console.log(`${i}:${e}`);
      const res = e
        .replace(reg, "$1<rt>$2</rt>")
        //    const res = e.replace(reg, '<rb>$1</rb><rt>$2</rt>')
        .replace(reg2, "$1<rt></rt>$2")
        .replace(/(.*)/, "<ruby>$1</ruby>")
        .replace(/　/g, "");
      console.log("h: " + res);
      tempLine = res;
    } else {
      tempLine = e;
    }
  } else {
    tempLine = e;
  }

  fs.appendFileSync(newFilename, tempLine + "\n", { encoding: "utf-8" });
});

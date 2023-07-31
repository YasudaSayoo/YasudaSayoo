const fs = require("fs");

const filename = "日语会语4000句-5-4-交通機関.md";
const data = fs.readFileSync("o-" + filename, { encoding: "utf-8" });

const han_reg = /\p{sc=Han}/gu;
const hita_reg = /\p{sc=Hira}/gu;
const kana_reg = /\p{sc=Kana}/gu;
const reg = /(\p{sc=Han}+々?)(\p{sc=Hira}+)/gu;
const reg2 = /([\p{sc=Hira}\p{sc=Kana}\dー（）、。？！…a-zA-Z]+)(\p{sc=Han}+)/gu;
const newFilename = `../_posts/${filename}`;

if (fs.existsSync(newFilename)) {
  fs.unlinkSync(newFilename);
}

console.log("data", data);

let tempLine = "";
data.split("\n").forEach((e, i) => {
  if (i >= 0b1001) {
    // if (e && !/(^#|[#。！？ ]$)/.test(e)) {
    if (e && !/(^#|[#！？ ]$)/.test(e)) {
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

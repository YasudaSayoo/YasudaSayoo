"use strict";

const kakuAns = (args) => {
  args = args.join(" ").split("@");
  const classes = args[0] || "default";
  const text = args[1] || "";
  return `（<span class="ans ans-${classes.trim()}">
    ${hexo.render.renderSync({ text })}
  </span>）`;
  // ${hexo.render.renderSync({ text, engine: "swig" })}
};

// {% ans [classes] @text %}
hexo.extend.tag.register("ans", kakuAns, { ends: false });

const undTag = (args) => {
  return `<u>${args.join("")}</u>`;
};
hexo.extend.tag.register("und", undTag);

const youhouAnsTag = (args) => {
  // args = args.join(' ').split('@');
  // const classes = args[0] || "default";
  // const text = args[1] || "";
  const MARU = "⭕️";
  const BATSU = "❌";
  const reibun = args[0];
  const maru_batsu = args[1];
  const kawari = args[2] || "";
  if (reibun)
    return `<span class="youhou02${+reibun ? "" : "-ans"}">
      ( ${+maru_batsu ? MARU : BATSU} ) <strong>&nbsp;${kawari}&nbsp;</strong>
    </span>`;
  // ${hexo.render.renderSync({ text, engine: "swig" })}
};

const youhouAns3Tag = (args) => {
  const reibun = args[0];
  const kawari = args[1];
  return `<span class="youhou03${+reibun ? "" : "-ans"}">
            →<strong>&nbsp;${kawari}&nbsp;</strong>
          </span>`;
};

hexo.extend.tag.register("youhouans2", youhouAnsTag);
hexo.extend.tag.register("youhouans3", youhouAns3Tag);

const kotobaTag = (args) => {
  const classes = args[0] || "default";
  const text = args[1];
  return `<span class='kotoba kotoba-${classes}'>${text}</span>`;
};

hexo.extend.tag.register("kotoba", kotobaTag);

const optionBorderTag = (args) => {
  args = args.join(" ").split("@");
  const classes = args[0] || "border";
  const text = args[1];
  return `<span class='option-${classes}'>${text}</span>`;
};

hexo.extend.tag.register("oborder", optionBorderTag);

const rengoTag = (args) => {
  const index = args[0];
  const text = (args[1] || '').split("　");
  return `<span class='rg-after ${+index ? 'rg-index' : ''}'>${text[0]}</span><span class='rg-before'>${text[1]}</span>`
}

hexo.extend.tag.register("rengo", rengoTag);

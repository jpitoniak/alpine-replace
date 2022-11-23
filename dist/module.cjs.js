var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/replace.js
var replace_exports = {};
__export(replace_exports, {
  default: () => replace_default
});
module.exports = __toCommonJS(replace_exports);
function replace_default(Alpine) {
  Alpine.directive("replace", (el, { value, modifiers, expression }, { evaluate, evaluateLater, effect }) => {
    let getTemplate;
    if (value == "dynamic") {
      getTemplate = evaluateLater(expression);
    } else {
      getTemplate = evaluateLater('"' + expression + '"');
    }
    effect(() => {
      getTemplate((template) => {
        let templateElement;
        if (typeof template == string) {
          templateElement = document.querySelector("template#" + template);
        }
        if (template instanceof HTMLElement && template.tagname == "TEMPLATE") {
          templateElement = template;
        }
        if (templateElement) {
          let content = templateElement.content.cloneNode(true);
          el.replaceChildren(content);
        }
      });
    });
  });
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {});

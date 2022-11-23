// src/replace.js
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
        if (typeof template == "string") {
          templateElement = document.querySelector("template#" + template);
        }
        else if (template instanceof HTMLElement && template.tagname == "TEMPLATE") {
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
export {
  replace_default as default
};

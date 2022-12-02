export default function (Alpine) {
    Alpine.directive("replace", (el, { value, modifiers, expression }, { evaluateLater, effect }) => {
        if (value == "dynamic") {
            let getTemplate = evaluateLater(expression)

            effect(() => {
                getTemplate((expression) => {
                    let template = expression

                    if (template instanceof HTMLElement && template.tagName == "TEMPLATE") {
                        let content = template.content.cloneNode(true);
                        el.replaceChildren(content)
                    }
                    else if (typeof template == "string") {
                        let templateElement = document.querySelector("template#" + expression)

                        if (templateElement) {
                            let content = templateElement.content.cloneNode(true);
                            el.replaceChildren(content)
                        }
                    }
                });
            });
        }
        else {
            let template = document.querySelector("template#" + expression)

            if (template) {
               let content = template.content.cloneNode(true)
               el.replaceChildren(content);
            }
        }
    })
}

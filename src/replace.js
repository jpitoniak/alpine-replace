export default function (Alpine) {
    Alpine.directive("replace", (el, {value, modifiers, expression}, {evaluate,  evaluateLater, effect}) => {
        let getTemplate
        if(value == "dynamic") {
            // expression contains Javascript code to be evaluated
            getTemplate = evaluateLater(expression)
        }
        else {
            // expression is a sting containing the id of the template
            getTemplate = evaluateLater("\"" + expression + "\"")
        }

        // TODO: modifier checking and testing

        effect(() => {
            getTemplate(template => {
                let templateElement
                if(typeof template == string) {
                    // template is a string, try to get a template element with the given id
                    templateElement = document.querySelector('template#' + template)
                }
                if(template instanceof HTMLElement && template.tagname == 'TEMPLATE') {
                    // we already have a reference to the element
                    templateElement = template
                }

                if(templateElement) {
                    // a matching template element was found
                    let content = templateElement.content.cloneNode(true)
                    el.replaceChildren(content)
                }
            })
        });
    });
}

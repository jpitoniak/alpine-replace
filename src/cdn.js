import replace from "./replace.js"

document.addEventListener("alpine:init", () => {
    window.Alpine.plugin(replace)
})
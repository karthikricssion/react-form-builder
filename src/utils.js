export const getMousePosition = function(rect, e) {
    return {
        y: (rect.height - ((rect.top + rect.height) - e.clientY)),
        x: (rect.width -  ((rect.left + rect.width ) - e.clientX))
    }
}
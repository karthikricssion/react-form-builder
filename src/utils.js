export const getMousePosition = function(rect, e) {
    return {
        y: (rect.height - ((rect.top + rect.height) - e.clientY)),
        x: (rect.width -  ((rect.left + rect.width ) - e.clientX))
    }
}

export const saveFormInLocalStorage = function(data) {
    return window.localStorage.setItem('form', JSON.stringify(data));
}

export const getFormInLocalStorage = function() {
    return JSON.parse(window.localStorage.getItem('form')) || [];
}

export const resetFormDatainLocalStorage = function() {
    return window.localStorage.setItem('form', JSON.stringify([]));
}
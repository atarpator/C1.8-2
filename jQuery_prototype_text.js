// Метод возвращает или изменяет текстовое содержимое выбранных элементов

jQuery.prototype.text = function(text){
    if (text === undefined)

    {
    this.each(element => text = element.textContent);
    return text;
    }

    else

    {
    this.each(element => element.textContent = text);
    return this;
    }
}

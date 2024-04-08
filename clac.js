function getValue (element) {
    var defaultValue = document.getElementById('result').value;
    var new_value = element.innerText;
    var foundValue = defaultValue === '0' ? new_value : defaultValue + new_value;

    document.getElementById('result').value = foundValue
    
}
function calculate () {
    var input = eval(document.getElementById('result').value);
    document.getElementById('result').value = input;
    
}

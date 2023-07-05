function checkWord() {
    let inputValue=document.getElementById('dictionaryInput').value;
    if (localStorage.getItem(inputValue) === null) {
        document.getElementById('dictionaryMessage').innerText="Word not found";
        document.getElementById("saveButton").disabled=false;
    }else {
        document.getElementById('dictionaryMessage').innerText="Word found";
    }
}

function addWord() {
    let inputValue = document.getElementById('dictionaryInput').value;
    if (localStorage.getItem(inputValue) === null) {
        localStorage.setItem(inputValue, inputValue);
        document.getElementById('dictionaryMessage').innerText="Word successfully added";
    }else {
        document.getElementById('dictionaryMessage').innerText="Word already exists in dictionary";
    }
}
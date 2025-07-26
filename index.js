const characters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "~", "`", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "-", "+", "=", "{", "[", "}", "]", ",", "|", ":", ";", "<", ">", ".", "?", "/"];


const actionBtn = document.getElementById("action-button")
const displayOpt1 = document.getElementById("option-1")
const displayOpt2 = document.getElementById("option-2")
const selectEl = document.getElementById("select-el")
const symbolEl = document.getElementById("symbol-el")
const numberEl = document.getElementById("number-el")
let charValue = selectEl.value
selectEl.addEventListener('change', function () {
    charValue = this.value; // 'this' refers to the selectElement within the event listener
});
actionBtn.addEventListener("click", () => {
    let newPassword = passwordGenerator(charValue)
    let newPasswordAgain = passwordGenerator(charValue)

    displayOpt1.textContent = newPassword
    displayOpt2.textContent = newPasswordAgain

})


function passwordGenerator(char) {
    let password = ""
    let tempArray = []
    if(symbolEl.checked && !numberEl.checked) {
        
        let tempArOne = characters.slice(0, 52)
        let tempArTwo = characters.slice(63, 91)

        tempArray = tempArOne.concat(tempArTwo)
        console.log("only symbol is checked")
        
    } else if (numberEl.checked && !symbolEl.checked) {
        tempArray = characters.slice(0, 62)
        console.log("only num is checked")
    } else if (numberEl.checked && symbolEl.checked) {
        tempArray = characters.slice(0, 91)
        console.log("both are checked")
    } else if (!numberEl.checked && !symbolEl.checked){
        tempArray = characters.slice(0, 52)
        console.log("both are not checked")

    }
        for (let i = 0; i < char; i++) {
            let randomIndex = Math.floor(Math.random() * tempArray.length)
            password += tempArray[randomIndex];
        }
        return password
}

function copyToClipboard (ref) {
    if (ref === "a") {
        navigator.clipboard.writeText(displayOpt1.textContent);
        alert("copied the text: " + displayOpt1.textContent)
        console.log(displayOpt1.textContent)
    } else if (ref === "b") {
        navigator.clipboard.writeText(displayOpt2.textContent);
        alert("copied the text: " + displayOpt2.textContent)
        console.log(displayOpt2.textContent)
    }
    
}
const button_check = document.querySelector("#check-btn");
const input_check = document.querySelector("#text-input");
const result_check = document.getElementById("result");
const container = document.querySelector(".container");

button_check.addEventListener("click", () => {
    const lowerCaseStr = input_check.value.replace(/[^A-Za-z0-9]/gi, '').toLowerCase();
    
    if (lowerCaseStr === '') {
        alert("Please input a value");
    } else if (isPalindrome(lowerCaseStr)) {
        result_check.innerText = `${input_check.value} is a palindrome`;
        container.style.height = "240px";
    } else {
        result_check.innerText = `${input_check.value} is not a palindrome`;
        container.style.height = "240px";
    }
});
function isPalindrome(str) {
    return str == str.split('').reverse().join('');
}

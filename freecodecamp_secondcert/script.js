const input_numb = document.getElementById("number");
const convet_btn = document.getElementById("convert-btn");
const output = document.getElementById("output");
const container = document.getElementById("container");

const array_romain = [
    ['M', 1000],
    ['CM', 900],
    ['D', 500],
    ['CD', 400],
    ['C', 100],
    ['XC', 90],
    ['L', 50],
    ['XL', 40],
    ['X', 10],
    ['IX', 9],
    ['V', 5],
    ['IV', 4],
    ['I', 1]
];



convet_btn.addEventListener("click", () => {
    const number = parseInt(input_numb.value);
    
    if (isNaN(number)) {
        container.classList.add("display");
        output.innerText = "Please enter a valid number";
    } else if (number < 1) {
        container.classList.add("display");
        output.innerText = "Please enter a number greater than or equal to 1";
    } else if (number > 3999) {
        container.classList.add("display");
        output.innerText = "Please enter a number less than or equal to 3999";
    } else {
        container.classList.add("display");
        output.innerText = convertRoman(number);
    }
});
function convertRoman(num) {
    let roman = '';
    array_romain.forEach(([romanNumeral, value]) => {
        while (num >= value) {
            roman += romanNumeral;
            num -= value;
        }
    });
    return roman;
}
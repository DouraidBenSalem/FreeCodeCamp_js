const input = document.getElementById("user-input");
const checkBtn = document.getElementById("check-btn");
const clearBtn = document.getElementById("clear-btn");
const resultsDiv = document.getElementById("results-div");
const array = [];
checkBtn.addEventListener("click", () => {
    const phoneNumber = input.value;
    if (phoneNumber === "") {
        alert("Please provide a phone number");
        return;
    }
    getPhoneNumberDetails(phoneNumber);
});
function getPhoneNumberDetails(phoneNumber){
    const regex = /^(1\s?)?(\(\d{3}\)|\d{3})[\s.-]?\d{3}[\s.-]?\d{4}$/;
    
    const isValid = regex.test(phoneNumber);
    if(isValid){
        resultsDiv.innerHTML += `<p>Valid US number: ${phoneNumber}</p>`;
        array.push(resultsDiv.innerHTML);
    }else{
        resultsDiv.innerHTML += `<p>Invalid US number: ${phoneNumber}</p>`;
        array.push(resultsDiv.innerHTML);
    }
}
clearBtn.addEventListener("click", () => {
    input.value = "";
    resultsDiv.innerHTML = "";
    
});












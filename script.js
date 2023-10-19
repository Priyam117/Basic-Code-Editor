const copyButton = document.getElementById("copy-button");
const saveButton = document.getElementById("save-button");
const lockButton = document.getElementById("lock-button");
const displayButton = document.getElementById("display-button");
const displayDiv = document.getElementById("dataToDisplay");
const clearButton = document.getElementById("clear-button");
const codeArea = document.getElementById("code-area");

copyButton.addEventListener("click", () => {
    const textValue = codeArea.value;
    if (textValue) {
        codeArea.select();
        document.execCommand("copy");
        alert("Code copied to clipboard!");
    } else {
        alert("please enter some text");
    }
});

let isLocked = false;

lockButton.addEventListener("click", () => {
    if (isLocked) {
        codeArea.removeAttribute("readonly");
        lockButton.textContent = "Lock";
    } else {
        codeArea.setAttribute("readonly", true);
        lockButton.textContent = "Unlock";
    }
    isLocked = !isLocked;
});

saveButton.addEventListener("click", () => {
    const dataToSave = codeArea.value; // Get the value from the textarea
    if (dataToSave !== "") {
        localStorage.setItem("myData", dataToSave); // Save it to localStorage with a key
        alert("Data saved");
        codeArea.value = "";
    } else {
        alert("please enter some text");
    }
});

displayButton.addEventListener("click", () => {
    const savedData = localStorage.getItem("myData");
    if (savedData) {
        displayDiv.style.display = "block"
        const para = document.createElement("p");
        para.innerText = savedData;
        displayDiv.appendChild(para);
        codeArea.value = "";
        console.log(savedData);
    } else {
        alert("Please write some text and save it");
        console.log("empty");
    }
});

clearButton.addEventListener("click", () => {
    if (localStorage.getItem("myData")) {
        localStorage.removeItem("myData");
        displayDiv.style.display = "none";
        codeArea.value = "";
    } else {
        alert("Nothing to be clear");
    }
});

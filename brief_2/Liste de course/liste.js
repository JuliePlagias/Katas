const entry = document.getElementById("user_entry");
const addButton = document.getElementsByTagName("input")[1];

const liste = document.getElementsByTagName("ul")[0];

//
addButton.onclick = addToList;

function addToList() {
    if (entry.value == "") return;
    const newElement = document.createElement("li");
    newElement.textContent = entry.value;
    liste.appendChild(newElement);
    entry.value = "";
}

//Check if enter is pressed in the textArea and call click if yes
entry.addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
        addButton.click();
    }
})
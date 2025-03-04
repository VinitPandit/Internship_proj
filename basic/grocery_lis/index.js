function addItem() {
    let input = document.getElementById("itemInput");
    let itemText = input.value.trim();
    if (itemText === "") return;
    
    let li = document.createElement("li");
    li.innerHTML = `${itemText} <button class='remove-btn' onclick='removeItem(this)'>X</button>`;
    document.getElementById("groceryList").appendChild(li);
    input.value = "";
}

function removeItem(button) {
    button.parentElement.remove();
}
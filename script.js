const add = document.querySelector("#add");
const ul = document.querySelector("ul");
const input = document.querySelector("#item");

add.addEventListener("click", () => {
    const listItem = document.createElement("li");
    const deleteButton = document.createElement("button");

    listItem.textContent = input.value + " ";
    listItem.appendChild(deleteButton);
    deleteButton.textContent = "Delete";
    input.value = "";
    ul.appendChild(listItem);

    deleteButton.addEventListener("click", () => {
        listItem.remove();
    });

});

const input = document.getElementById("inputText");
const list = document.getElementById ("itemList");
const addBtn = document.getElementById("addBtn");
const removeBtn = document.getElementById("removeBtn");
const changeHtmlBtn = document.getElementById("changeHtmlBtn");
const ChangeStyleBtn = document.getElementById("ChangeStyleBtn");

addBtn.onclick = ()=> {
    const text = input.value.trim();
    if(!text) return
    const li = document.createElement("li");
    li.textContent = text ;
    list.appendChild(li) ;
    input.value = "";
}
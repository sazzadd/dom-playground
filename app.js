const input = document.getElementById("inputText");
const list = document.getElementById("itemList");
const addBtn = document.getElementById("addBtn");
const removeBtn = document.getElementById("removeBtn");
const changeHtmlBtn = document.getElementById("changeHtmlBtn");
const ChangeStyleBtn = document.getElementById("ChangeStyleBtn");

addBtn.onclick = () => {
  const text = input.value.trim();
  if (!text) return;
  const li = document.createElement("li");
  li.className =
    "p-6 bg-purple-100 rounded-2xl shadow-lg hover:shadow-2xl transition cursor-pointer text-xl";
  li.textContent = text;
  list.appendChild(li);
  input.value = "";
};
console.log("hallow");
console.log(text);


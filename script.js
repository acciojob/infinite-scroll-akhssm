const list = document.getElementById("infi-list");

function addListItems(count) {
  for (let i = 0; i < count; i++) {
    const li = document.createElement("li");
    li.textContent = `Item ${list.children.length + 1}`;
    list.appendChild(li);
  }
}

addListItems(10);

window.addEventListener("scroll", () => {
  if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 10) {
    addListItems(2);
  }
});

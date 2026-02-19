const items = [
    {name:"Laptop"},
    {name:"Smartphone"},
    {name:"Headphones"},
    {name:"Keyboard"},
    {name:"Mouse"},
    {name:"Monitor"},
    {name:"Charger"}
];

const input = document.getElementById("search");
const list  = document.getElementById("list");
const msg   = document.getElementById("msg");

function render(filtered) {
    list.innerHTML = "";
    if (filtered.length === 0) {
        list.style.display = "none";
        msg.style.display = "block";
        return;
    }
    list.style.display = "block";
    msg.style.display = "none";
    filtered.forEach(p => {
        let li = document.createElement("li");
        li.textContent = p.name;
        list.appendChild(li);
    });
}

render(items);

input.oninput = () => {
    let term = input.value.trim().toLowerCase();
    let f = items.filter(p => p.name.toLowerCase().includes(term));
    render(f);
};
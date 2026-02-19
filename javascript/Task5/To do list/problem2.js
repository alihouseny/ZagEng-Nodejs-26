let tasks = [];

const input = document.getElementById("task");
const btn   = document.getElementById("AddTask");
const tbody = document.getElementById("tbody");

function render() {
    tbody.innerHTML = "";
    tasks.forEach((t, i) => {
        let tr = document.createElement("tr");

        let td1 = document.createElement("td");
        td1.textContent = i + 1;

        let td2 = document.createElement("td");
        td2.textContent = t.text;
        if (t.done) td2.style.textDecoration = "line-through";

        td2.onclick = () => {
            t.done = !t.done;
            render();
        };

        let td3 = document.createElement("td");
        td3.textContent = t.done ? "✔" : "";

        let td4 = document.createElement("td");
        let del = document.createElement("button");
        del.textContent = "Delete";
        del.onclick = () => {
            tasks.splice(i, 1);
            render();
        };
        td4.appendChild(del);

        tr.append(td1, td2, td3, td4);
        tbody.appendChild(tr);
    });
}

btn.onclick = () => {
    let text = input.value.trim();
    if (!text) return;
    tasks.push({text, done: false});
    input.value = "";
    input.focus();
    render();
};

input.onkeypress = e => {
    if (e.key === "Enter") {
        e.preventDefault();
        btn.click();
    }
};
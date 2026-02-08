let jsonData = '[]';
let data = JSON.parse(jsonData);
data.push({ id: 1, title: "nodejs" });
jsonData = JSON.stringify(data, null, 2);
console.log(jsonData);
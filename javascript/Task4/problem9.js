function hasSpace(strParam) {
let str = "";
for(let i = 0 ; i < strParam.length; i++) {
if(strParam[i] == ' ') {
str = str.concat('#');
} else {
str = str.concat(strParam[i]);
}
}
return str;
}
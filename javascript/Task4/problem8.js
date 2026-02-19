function removeSpecialCharacters(strParam) {
let str = "";
for(let i = 0 ; i < strParam.length; i++) {
if(strParam[i] == '.' || strParam[i] == '#' ||
            strParam[i] == '@' || strParam[i] == '!' ||
            strParam[i] == '$' || strParam[i] == '?') {
continue;
} else {
                str 
= str.concat(strParam[i]);
}
}
return str;
}
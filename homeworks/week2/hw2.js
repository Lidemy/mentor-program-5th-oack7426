// a-z
function checkEng(num){
    const reg = /^[a-z]+$/;
    return reg.test(num);
}

function capitalize(str) {
  if(checkEng(str[0])){
    str[0].toUpperCase();
  }
  return str;
}

console.log(capitalize('hello'));
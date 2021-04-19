// a-z
function checkEng(str){
    const reg = /^[a-z]+$/;
    return reg.test(str);
}

function capitalize(str) {
  if(checkEng(str[0])){
    return str[0].toUpperCase() + str.slice(1);
  }
  return str;
  
}

console.log(capitalize('hello'));
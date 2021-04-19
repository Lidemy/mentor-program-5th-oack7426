function reverse(str) {
  let strRe = '';
  for (let i =str.length-1 ;i>=0;i--){
    strRe += str[i];
  }
  console.log(strRe);
}

reverse('hello');

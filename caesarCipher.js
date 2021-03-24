

// adjusts offsets that are outside the bounds
const simplifyOffset = (offset) => {
  if(offset >= 26 || offset <= -26){
    offset = offset % 26;
  }
  return offset;
}


function encodeCaesar(offset, string) {
  const stringArr = [...string]
  offset = simplifyOffset(offset)

  for (let i = 0; i < stringArr.length; i++){
    if(stringArr[i].match('[a-z]')){
      // 97 - 122 -> charcode range for a-z
      let charCode = string.charCodeAt(i);
      // wrap to front if exeeds 122
      if (charCode + offset > 122) {
        let wrappedOffset = (charCode + offset) - 122;
        stringArr[i] = String.fromCharCode(97 + wrappedOffset);
      } 
      else {
        stringArr[i] = String.fromCharCode(charCode + offset);
      }

      
    }
    else if (stringArr[i].match('[A-Z]')){
      // 65 - 90 -> charcode range from A-Z
      let charCode = string.charCodeAt(i);
      // wrap to front if exceeds 90
      if (charCode + offset > 90) {
        let wrappedOffset = (charCode + offset) - 90;
        stringArr[i] = String.fromCharCode(65 + wrappedOffset);
      } 
      else {
        stringArr[i] = String.fromCharCode(charCode + offset);
      }
    }
  }
  return stringArr.join("");
}


export { encodeCaesar }

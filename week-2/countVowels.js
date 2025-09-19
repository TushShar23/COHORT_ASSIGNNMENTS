function countVowels(str) {
  let count =0;
  const convStr = Array.from(str);
    for(let i=0;i<convStr.length;i++){
      if(convStr[i]==='a'||convStr[i]==='A'||convStr[i]==='e'||convStr[i]==='E'||convStr[i]==='i'||convStr[i]==='I'||convStr[i]==='o'||convStr[i]==='O'||convStr[i]==='u'||convStr[i]==='U'){
        count++;
      }
    }
    return count;
}
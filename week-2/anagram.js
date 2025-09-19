function isAnagram(str1, str2) {
  const lcase1 = str1.toLowerCase();
  const lcase2 = str2.toLowerCase();
  const sortedAr1 = Array.from(lcase1).sort().join("");
  const sortedAr2 = Array.from(lcase2).sort().join("");

  if(sortedAr1 === sortedAr2){
      return true;
  }
  else{
    return false;
  }

}
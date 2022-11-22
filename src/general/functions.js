export const transformString = (str, maxLen = 200) => {
   str = str ? str.trim() : '';

   if (str.length > maxLen) {
      str = str.slice(0, maxLen - 4) + ' ...';
   }

   return str;
};

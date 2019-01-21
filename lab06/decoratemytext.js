window.onload = function() {
   document.getElementById("btn").onclick = onDecorateClicked;
   document.getElementById("bling").onchange = onBlingChanged;
   document.getElementById("malkovitch").onclick = onMalkovitchClicked;
   document.getElementById("igpay-atinlay").onclick = onIgpayClicked;
}

function decorateMyText() {
   const bnt             = document.getElementById("btn");
   const text            = document.getElementById("text");
   const currentFontSize = parseInt(text.style.fontSize) || 12;

   text.style.fontSize = currentFontSize + 2 + "pt";
}

function onDecorateClicked() {
   setInterval(decorateMyText, 500);
}

function onBlingChanged() {
   const bling = document.getElementById("bling");
   const text  = document.getElementById("text");
   const body  = document.getElementsByTagName("body")[0];

   if (bling.checked) {
      text.style.fontWeight     = "bold";
      text.style.color          = "green";
      text.style.textDecoration = "underline";

      body.className            = "bg-image";
   }
   else {
      text.style.fontWeight     = "normal";
      text.style.color          = "black";
      text.style.textDecoration = "none";

      body.className            = "";
   }
}

function onIgpayClicked() {
   const text = document.getElementById("text");
   text.value = convertToPigLatin(text.value);
}

function onMalkovitchClicked() {
   const text = document.getElementById("text");
   text.value = replaceMalkovitch(text.value);
}

function replaceMalkovitch(str) {
   const malkovitch = "Malkovitch";

   return str.split(" ")
      .map((word) => word.length >= 5 ? malkovitch : word)
      .join(" ");
}

function convertToPigLatin(str) {
   return str.split(" ")
       .map((word) => toPigLatinWord(word))
       .join(" ");
}

function toPigLatinWord(word) {
   if (!word) return word;

   if (isVowel(word[0])) {
      return word + "ay";
   }
   else {
      const chars = word.split("");
      let tempChar;

      while (isConsonant(chars[0])) {
         tempChar = chars.shift();
         chars.push(tempChar);

         if (chars.length === 1) break;
      }

      return chars.join("") + "ay";
   }
}

function isVowel(char) {
   /* Solution 1
   const vowels = ["A", "E", "I", "O", "U"];

   return !!vowels.find(vowel => vowel === char.toUpperCase());
   */

   if (!char) return false;

   return /[aeiou]/.test(char.toLowerCase());
}

function isConsonant(char) {
   /* Solution 1
   const consonants = ["B", "C", "D", "F", "G", "H", "J", "K", "L", "M", "N", "P", "Q", "R", "S", "T", "V", "W", "X", "Y", "Z"];

   return !!consonants.find(consonant => consonant === char.toUpperCase())
   */

   return !isVowel(char);
}

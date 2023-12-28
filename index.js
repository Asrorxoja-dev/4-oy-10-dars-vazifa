
//   1-masala

// function reverseString(str) {
  
//     let newString = str.split("").reverse().join("");
   
//     return newString;
//   }
  
 
//   let string = "Salom dunyo";
//   let result = reverseString(string);
//   console.log(result); 
  



// // 2-masala
// function countUnliharf(str) {
    
//     const unliharf = ["a", "e", "i", "o", "u"];
   
//     let count = 0;
   
//     let letters = str.split("");
   
//     for (let letter of letters) {
      
//       if (unliharf.includes(letter)) {
//         count++;
//       }
//     }
   
//     return count;
//   }
  
 
//   let string = "hello world";
//   let result = countUnliharf(string);
//   console.log(result); 
  


      
// 3-masala


// function checkPalindrome(string) {
//     let reversedString = string.split("").reverse().join("");
//     if (string == reversedString) {
//       return "Palindrom";
//     } else {
//       return "Palindrom emas";
//     }
//   }
  
//   let string = "radar";
//   let result = checkPalindrome(string);
//   console.log(result); 




// 5-masala



// function capitalizeFirstLetter(str) {
//     let words = str.split(" ");
//     let newStr = "";
//     for (let i = 0; i < words.length; i++) {
//       let word = words[i].charAt(0).toUpperCase(1) + words[i].slice(1).toLowerCase(1);
//       newStr += word + " ";
//     }
//     return newStr;
//   }
  
//   let string = "salom dunyo";
//   let result = capitalizeFirstLetter(string);
//   console.log(result); 
  

// 6-masala

// function compressString(str) {
//     let chars = str.split("");
//     let counts = [];
//     for (let i = 0; i < chars.length; i++) {
//       if (!counts.includes(chars[i])) {
//         counts.push(chars[i]);
//         counts.push(1);
//       } else {
//         let index = counts.indexOf(chars[i]) + 1;
//         counts[index]++;
//       }
//     }
//     let compressed = counts.join("");
//     return compressed;
//   }
  
//   let string = "aabbbccrrrdddeee";
//   let result = compressString(string);
//   console.log(result); // 
  



// let showWorld = (arr) =>{
//     for (let i=0; i<arr.length; i++){
//         for(let j=0; j<arr.length; j++){
//             console.log(arr[i] + " " + arr[j])
//         }
//     }
// }

// showWorld(["aslam", "me", "bale"])





// function reverseArray(arr) {
//     let newArr = []
//     for (let i = arr.length - 1; i >= 0; i--) {
//       newArr.push(arr[i])
//     }
//     return newArr
//   }
//   document.getElementById("demo").innerHTML = reverseArray([1, 2, 3])
//   const reversedArray2 = reverseArray([1, 2, 3, 4, 5, 6]) 





// function multiplyAll(arr1, arr2) {
//     if (arr1.length !== arr2.length) return undefined
//     let total = 0
//     for (let i of arr1) {
//       for (let j of arr2) {
//         total += i * j
//       }
//     }
//     return total
//   }
//  document.getElementById("demo").innerHTML = multiplyAll([1, 2], [5, 6]) // 33
// //  document.getElementById("demo").innerHTML = multiplyAll([1, 2, 3, 4], [5, 3, 1, 8]) 




     // reverse string

// function reverse(str) {
// 	const arr = str.split("")
// 	arr.reverse()
// 	const res  = arr.join("")
// 	document.getElementById("demo").innerHTML = res



//     or  using loops

//     let res = "";
//     for ( let i=0; i< str.length; i++){
//         const char = str[i]
//         res  = char + res
//     }
// document.getElementById("demo").innerHTML = res

// }

// reverse("aslam")







   //palidume code 
   
//    let palidum  = (str) => {
     
//     const  twist = str.split("")
//     twist.reverse()
//     res = twist.join("")

//     if( str === res){
//         document.getElementById("demo").innerHTML = "true"

//     }else {
//         document.getElementById("demo").innerHTML = "false"

//     }
//    }

//    palidum("aca")




// return the maxCharater in a string 


// function maxChar(str) {
//    let charCountObj = {};
//    let maxChar = "";
//    let maxcount =0
 
//    for(let i = 0; i < str.length; i++){
//      const char = str[i]
 
//      charCountObj[char] = charCountObj[char] +1 || 1 
//      if (charCountObj[char] > maxcount){
//        maxChar = char;
//        maxcount = charCountObj[char]
//      }
//    }
//    document.getElementById("demo").innerHTML =  maxChar

//  }

//  maxChar("erlkerkjjkjjjj")







   //  fizzbuzz


   // function fizzBuzz(n) {
   //    for(let i = 1; i <=n; i++){
   //      if(i % 5 === 0 && i % 3 === 0){
   //        document.getElementById("demo").innerHTML = "fizzbuzz"
   //      }else if(i % 5 === 0){
   //       document.getElementById("demo").innerHTML = "buzz"
   //      }else if(i % 3 === 0){
   //       document.getElementById("demo").innerHTML = "fizz"
   //      }else{
   //       document.getElementById("demo").innerHTML = i
         
   //      }
   //    }
   //  }
    
   //  fizzBuzz(30)




   function titleCase(str) {
      var splitStr = str.toLowerCase().split(' ');
      for (var i = 0; i < splitStr.length; i++) {
         
          splitStr[i] = splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1);     
      }
    
      return splitStr.join(' '); 
   }
   
   document.getElementById("demo").innerHTML = titleCase("I'm a little tea pot");
   



   
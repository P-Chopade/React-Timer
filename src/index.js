import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);





// function diffArray(arr1, arr2) {
//   const newArr = [];
//   const merge=[...arr1,...arr2]
//   console.log(merge)
//   for(let i=0;i<=merge.length;i++)
//   {
//     if(merge[i] == merge[i+1])
//     {
//      newArr.push([merge[i]])  
//     }
//   }
// }

////Wherefore art thou////////////////////////////////
// function whatIsInAName(collection, source) {
//   const collectionMatches = [];

//   for (let i = 0; i < collection.length; i++) {
//     let foundMismatch = false;

//     for (const sourceProp in source) {
//       if (collection[i][sourceProp] !== source[sourceProp]) {
//         foundMismatch = true;
//       }
//     }
//     if (!foundMismatch) {
//       collectionMatches.push(collection[i]);
//     }
//   }
//   return collectionMatches;
// }

// whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" });
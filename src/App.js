// import React from 'react';
// import './App.css';

// function App() {
//   const arr = [1, 2, 3, 4, 5];

//   return (
//     <div>
//       <h1>using arraymap function</h1>

//       {arr.map((value)=> {
//         return <h1>the array items are: {value}</h1>;
//       })}
//     </div>
//   );
// }

// export default App;





// import react from "react";
// function app() {
//     const arr = [6, 7, 8, 8, 9, 0];

// return(
// <div>
//     <h1> using arrmap function </h1>

//     {arr.map ((value) => {
//         return <h1>the arr items are: {value} </h1>; 
//     })}
//     </div>
// );
// }

// export default app; 


// import react from "react";
// function app(){
// const arr = [ 3, 4, 5, 6, 7];

// return(
//     <div>
//         <h1> using arrmap function </h1>

//         {arr.map ((value) => {
//             return <h1> the arr items are: {value} </h1>;
//         })}
//         </div>
// );
//     }

//     export default app;




// import react from "react";
// function app() {
//     const arr = [1, 2, 3, 4, 5];
//     return(
//         <div>
//             <h1>using arrfilter function </h1>

//             {arr.filter ((value) => {
//                 if(value === 4){
//                 return false
//                 }else return true;
//                 <h1> the arr items are {value}</h1>
//             }
//             )  }
//         </div>
//     )
// }
// export default app;



// import img1 from"./images/img 1.jpg";
// import img2 from"./images/img 2.jpg";

// function app () {
// const images = [
// {
//     id : 1,
//     pic: "./images/img 1.jpg",
// },

// {
//     id : 2,
//     pic : "./images/img 2,jpg",
//     },
// ];

// return (
//     <div>
//         <h1> using img map function</h1>
//         {images.map ((value) => (
//             <img src={value.pic} height = "300px" width = "300px" alt="logo"/>
//         )
//         )}
//     </div>
// );
// }

// export default app;


// import react from "react";
// function app() {
//     const a = 9;
//     function inc ()
//     {a=a+1}

//     return (
//         <div>
//             <h1>the value of a is {a + 1}</h1>
//             <button onclick = {inc}> click </button>
//         </div>
//     );
//     }
// export default app;




// import './App.css';
// import React, {useState} from "react";

// function App()  {
//     const [a , setA] = useState(10);
//     function inc()
//     {
//         setA(a+1);
//     }
//     return(
//         <div>
//             <button onClick = {inc}> + </button>
//              <h1>:{a}
//              </h1>
//         </div>
//     );
// }
// export default App;






// import React, {useState} from "react";
// function App() {
//     const [a , setA] = useState (25);
//     function inc()
//     {
//         setA(a+1);
//     }
//     function dec()
//     {
//         if(a===0)
//         return false
//         else 
//         setA(a-1);
//     }
//     return(
//         <div>
//             <button onClick = {inc}> + </button>
//         <div> {a} </div>
//                 <button onClick = {dec}> - </button>  
//             </div>
    
//     );
// }
// export default App;








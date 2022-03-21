const fs = require("fs");

// Output : nextTick  setImmediate readFile setTimeout  . 
//Here nextTick is first because, nextTick is a special queue which lets the current operation complete 
//and it also needs to be exhausted before moving from one phase to the other. 
// Second comes setImmediate as setTimeout is still on wait (1000), And it comes at 4th after a split sec. due to the value set and thus, readFile is
//executed 3rd.

function eventLoop() {


    fs.readFile(__filename,  () => {
      console.log("readFile");
    });
  
    setTimeout(() => {
      console.log("setTimeout");
    }, 1000);
  
    process.nextTick(() => {
      console.log("nextTick");
    });
    
    setImmediate(() => {
      console.log("setImmediate");
    });
  }
  
 eventLoop();

  
// ----------------------------------- Scenerios made for practice -------------------------------  

// fs.readFile(__filename, () => {
//   setTimeout(() => {
//     console.log("setTimeout ");
//   }, 5);

//   process.nextTick(() => {
//     console.log("nextTick");
//   });
// });
// setImmediate(() => {
//   console.log("setImmediate");
// });

// Output: Here, setImmediate will execute first because it is outside the fs. And Secondly nextTick ,
// While setTimeout still takes time to execute .

// ---------------------------------------------------------------------------------------------------------------------------------

// const fs = require("fs");

// fs.readFile(__filename, () => {
//   setImmediate(() => {
//     console.log("setImmediate");

//     process.nextTick(() => {
//       console.log("nextTick");
//     });
//   });
//   setTimeout(() => {
//     console.log("setTimeout");
//   }, 0);
// });

// Output: Here nextTick is comming second Because it lets the current operation complete (in this case setImmediate) ,
//and nextTick which is also a special queue that needs to be exhausted before moving from one phase to the other . note:here nextTick is inside
//setImmediate

// ---------------------------------------------------------------------------------------------------------------------------------

//   const fs = require('fs');

//   fs.readFile(__filename, () => {
//     setTimeout(() => {
//       console.log('setTimeout');
//     }, 0);
//     setImmediate(() => {
//       console.log("setImmediate");
//     });
//   });

//   process.nextTick(() => {
//     console.log('nextTick')
//   })

//Output:  Here nextTick comes first becuase it is outside event loop . Then it goes to the current function
//wait for setTimeout and executes setImmediate.

// ---------------------------------------------------------------------------------------------------------------------------------

//const fs = require("fs");

// fs.readFile(__filename, () => {
//   setTimeout(() => {
//     console.log( setTimeout ");

//     setImmediate(() => {
//         console.log("setImmediate");
//       });

//     process.nextTick(() => {
//         console.log("nextTick");
//       });

//   }, 0);

// });

//Output: Here the three functions are inside the fs.readFile and is the way to call setTimeout first .
// nextTick proves that it comes between phases .

// ---------------------------------------------------------------------------------------------------------------------------------

// 


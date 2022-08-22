// // Your code here
// // const dodger = document.getElementById("dodger");

// // dodger.style.backgroundColor = "#FF69B4"; // can also change background, width, etc

// // dodger.style.bottom = "0px"

// // console.log(dodger.style.backgroundColor)

// // dodger.style.left = "0px"

// // document.addEventListener("keydown", function (event) {
// //     console.log(event);
// //   });

// // document.addEventListener("keydown", function (event) {
// //     if ( event.key === "ArrowLeft") {
// //         const leftNumbers = dodger.style.left.replace("px", "");
// //         const left = parseInt(leftNumbers, 10);

// //         dodger.style.left = `${left -1}px`;
// //     }
// // });

// const dodger = document.getElementById("dodger");


// function moveDodgerLeft() {
//     const leftNumbers = dodger.style.left.replace("px", "");
//     const left = parseInt(leftNumbers, 10);

//     if (left > 0) {
//         dodger.style.left = `${left -1}px`;
//     } 
// }

// // adding the event listener

// document.addEventListener("keydown", function (e) {
//     if(e.key === "ArrowLeft") {
//         moveDodgerLeft();
//     } else if(e.key === "ArrowRight") {
//         moveDodgerRight();
//     }
// })

// function moveDodgerRight() {
//     const rightNumbers = dodger.style.right.replace("px", "");
//     const right = parseInt(rightNumbers, 10);

//     if(right > 0) {
//         dodger.style.left = `${left + 1}px`
//     }
// }

// //event listener

// // document.addEventListener("keydown", function (e){
// //     if(e.key === "ArrowRight") {
// //         moveDodgerRight();
// //     }
// // })

//   pt 2
document.addEventListener("keydown", function (e) {
    if (e.key === "ArrowLeft") {
        moveDodgerLeft();
    } else if (e.key === "ArrowRight") {
        moveDodgerRight();
    }

});

function moveDodgerLeft() {
    let leftNumbers = dodger.style.left.replace("px", "");
    let left = parseInt(leftNumbers, 10);
  
    if (left > 0) {
      dodger.style.left = `${left - 1}px`;
    }
  }

  function moveDodgerRight(){
    const rightNumbers = dodger.style.left.replace("px", "");
    const right = parseInt(rightNumbers, 10);

    if (right > 0) {
        let leftNumbers = dodger.style.left.replace("px", "");
        let left = parseInt(leftNumbers, 10);
        dodger.style.left = `${left + 1}px`
    } else {
        dodger.style.left = `${left - 1}px`
    }

  }
const draggableBoxes = document.querySelectorAll(".draggable-box");
const dropzone = document.querySelector(".dropzone");
const historyList = document.querySelector(".history-list");
let inner_text;

const calculatorBox = document.getElementById("calculator-box");

draggableBoxes.forEach((box) => {
  box.addEventListener("dragstart", onDragStart);
});

dropzone.addEventListener("dragover", onDragOver);
dropzone.addEventListener("drop", onDrop);

function onDragStart(e) {
  e.dataTransfer.setData("text/plain", e.target.className);
}

function onDragOver(e) {
  e.preventDefault();
}

let calculate_btn = document.getElementById("calculate-btn");
function onDrop(e) {
  e.preventDefault();
  calculatorBox.style.display = "block";
  let operationType = e.dataTransfer.getData("text/plain");
  if (operationType.includes("ellipse")) {
    operationType = "Ellipse";
  }
  if (operationType.includes("parallelogram")) {
    operationType = "Parallelogram";
  }
  if (operationType.includes("pentagon")) {
    operationType = "Pentagon";
  }
  if (operationType.includes("rectangle")) {
    operationType = "Rectangle";
  }
  if (operationType.includes("rhombus")) {
    operationType = "Rhombus";
  }
  if (operationType.includes("triangle")) {
    operationType = "Triangle";
  }

  calculatorBox.innerHTML = `
           
            <h1 class="text-xl font-semibold mb-4">${operationType} Calculator</h1>

            <!-- Input Fields -->
            <div class="flex">
              <div class="w-1/2">
                <label for="majorAxis" class="block mb-2 text-sm font-medium text-gray-700">Major Axis Length:</label>
                <input type="number" id="majorAxis" class=" w-full mb-2 border rounded">
                </div>

              <div class="w-1/2">
                <label for="minorAxis" class="block mb-2 text-sm font-medium text-gray-700">Minor Axis Length:</label>
                <input type="number" id="minorAxis" class=" w-full mb-2 border rounded">
              </div>
            </div>

            <!-- Calculation Buttons -->
            <div class="space-x-2">
                <button onclick="calculateArea()" class="text-white py-1 px-2 text-sm rounded bg-blue-500 hover:bg-blue-600 ">Area</button>
                <button onclick="calculateCircumference()" class="text-white py-1 px-2 text-sm rounded bg-blue-500 hover:bg-blue-600 ">Circumference</button>
                <!-- Add more calculation buttons as needed -->
            </div>

            <!-- Results -->
            <div class="mt-4">
                <p class="text-lg font-semibold" id="result"></p>
            </div>
`;
  //console.log("here is the tag", operationType);
}

//   const inputFields = `
//   <div class="">
//   <div class="text-white text-center py-1 mb-1"><h2 class="text-xl uppercase font-bold text-black">${operationType} calculator</h2></div>
//   <div class=" mb-3">
//          <div class="text-center mb-2"><h2 class="text-black">Area = w x s</h2></div>
//           <div class="grid grid-cols-2 gap-2 mb-2" >
//              <input id="" type="text"
//              class="block w-full p-1 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring">

//              <input id="" type="text"
//               class="block w-full p-1 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring">

//           </div>

// </div>
// <div id="calculate-btn" class="w-full rounded bg-pink-600 text-white text-center py-1">Calculate</div>
// </div>

//     `;

//   dropzone.innerHTML = `<div class="calculator-box">
//      ${inputFields}
//     </div>`;

//   calculateButton.addEventListener("click", () => {
//     const num1 = parseFloat(numInputs[0].value);
//     const num2 = parseFloat(numInputs[1].value);

//     let result = 0;

//     if (operationType === "Circle") {
//       result = num1 + num2;
//     } else if (operationType === "Subtraction") {
//       result = num1 - num2;
//     } else if (operationType === "Multiplication") {
//       result = num1 * num2;
//     }

//     resultElement.textContent = `Result: ${result}`;
//     addToHistory(`${num1} ${operationType} ${num2} = ${result}`);
//   });

// Function to add a calculation record to history
//   function addToHistory(record) {
//     console.log(record);
//     const listItem = document.createElement("li");
//     listItem.textContent = record;
//     historyList.appendChild(listItem);
//   }
// }

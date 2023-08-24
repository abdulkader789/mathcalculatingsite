const draggableBoxes = document.querySelectorAll(".draggable-box");
const dropzone = document.querySelector(".dropzone");
const historyList = document.querySelector(".history-list");
let inner_text;

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

function onDrop(e) {
  e.preventDefault();
  let operationType = e.dataTransfer.getData("text/plain");
  if (operationType.includes("ellipse")) {
    operationType = "ellipse";
  }
  if (operationType.includes("parallelogram")) {
    operationType = "parallelogram";
  }
  if (operationType.includes("pentagon")) {
    operationType = "pentagon";
  }
  if (operationType.includes("rectangle")) {
    operationType = "rectangle";
  }
  if (operationType.includes("rhombus")) {
    operationType = "rhombus";
  }
  if (operationType.includes("triangle")) {
    operationType = "triangle";
  }
  console.log("here is the tag", operationType);

  const inputFields = `
  <div class="">
  <div class="text-white text-center py-1 mb-1"><h2 class="text-xl uppercase font-bold text-black">${operationType} calculator</h2></div>
  <div class=" mb-3">
         <div class="text-center mb-2"><h2 class="text-black">Area = w x s</h2></div>
          <div class="grid grid-cols-2 gap-2 mb-2" >
             <input id="" type="text"
             class="block w-full p-1 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring">
          
            
              
             <input id="" type="text"
              class="block w-full p-1 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring">
          
          </div>

         
          
          
</div>
<div class="w-full rounded text-white text-center  bg-pink-500 py-1">Calculate</div>
</div>
        
    `;

  dropzone.innerHTML = `<div class="calculator-box">
     ${inputFields}
    </div>`;

  const calculatorBox = dropzone.querySelector(".calculator-box");
  const calculateButton = calculatorBox.querySelector(".calculate-button");
  const resultElement = calculatorBox.querySelector(".result");
  const numInputs = calculatorBox.querySelectorAll(".num-input");

  calculateButton.addEventListener("click", () => {
    const num1 = parseFloat(numInputs[0].value);
    const num2 = parseFloat(numInputs[1].value);

    let result = 0;

    if (operationType === "Circle") {
      result = num1 + num2;
    } else if (operationType === "Subtraction") {
      result = num1 - num2;
    } else if (operationType === "Multiplication") {
      result = num1 * num2;
    }

    resultElement.textContent = `Result: ${result}`;
    addToHistory(`${num1} ${operationType} ${num2} = ${result}`);
  });

  // Function to add a calculation record to history
  function addToHistory(record) {
    console.log(record);
    const listItem = document.createElement("li");
    listItem.textContent = record;
    historyList.appendChild(listItem);
  }
}

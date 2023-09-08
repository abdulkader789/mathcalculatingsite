// Define the calculateArea function
function calculateArea() {
  const pi = 3.14159;
  const input1 = document.getElementById("majorAxis");
  const input2 = document.getElementById("minorAxis");
  const num1 = parseFloat(input1.value);
  const num2 = parseFloat(input2.value);
  if (num1 && num2) {
    const result = pi * num1 * num2;
    document.getElementById("result").innerText = `Area: ${result}`;
  } else {
    alert("Input field is empty");
  }
}

// Define the calculateCircumference function
function calculateCircumference() {
  const pi = 3.14159;
  const input1 = document.getElementById("majorAxis");
  const input2 = document.getElementById("minorAxis");
  const num1 = parseFloat(input1.value);
  const num2 = parseFloat(input2.value);
  if (num1 && num2) {
    const result = 2 * pi * Math.sqrt((num1 * num1 + num2 * num2) / 2);
    document.getElementById("result").innerText = `Circumference: ${result}`;
  } else {
    alert("Input field is empty");
  }
}

const draggableBoxes = document.querySelectorAll(".draggable-box");
const dropzone = document.querySelector(".dropzone");
const historyList = document.querySelector(".history-list");

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

function onDrop(e) {
  e.preventDefault();
  calculatorBox.style.display = "block";
  let operationType = e.dataTransfer.getData("text/plain");
  let formula = "";
  if (operationType.includes("ellipse")) {
    operationType = "Ellipse";
    formula = `<p class="text-sm mb-1 md:mb-3">Area A = π · a · b</p>
               <p class="text-sm mb-1 md:mb-3">Circumference (C) ≈ 2π * √((a^2 + b^2) / 2)</p>
    `;
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
          <div>${formula}</div>
       
          <div class="flex">
            <div class="w-1/2">
              <label for="majorAxis" class="block t mb-2 text-sm font-semibold text-gray-700">Major Axis Length:</label>
              <input type="number" id="majorAxis" placeholder="cm"  class=" w-full mb-2 border rounded">
              </div>

            <div class="w-1/2">
              <label for="minorAxis" class="block mb-2 text-sm font-semibold text-gray-700">Minor Axis Length:</label>
              <input type="number" id="minorAxis" placeholder="cm" class=" w-full mb-2 border rounded">
            </div>
          </div>

          <div class="space-x-2">
              <button id="calculateAreaButton" class="text-white py-1 px-2 text-sm rounded bg-blue-500 hover:bg-blue-600 ">Area</button>
              <button id="calculateCircumferenceButton" class="text-white py-1 px-2 text-sm rounded bg-blue-500 hover:bg-blue-600 ">Circumference</button>
              <!-- Add more calculation buttons as needed -->
          </div>

        
          <div class="mt-4">
              <p class="text-sm font-semibold" id="result"></p>
          </div>
  `;
  // Add event listeners to the buttons
  document
    .getElementById("calculateAreaButton")
    .addEventListener("click", calculateArea);
  document
    .getElementById("calculateCircumferenceButton")
    .addEventListener("click", calculateCircumference);
}

/**
 * Main entry point for the CMPM 121 Section Activity
 * Simple starter template - customize to your heart's content!
 * just adding this here, in order to start project, it is ctrl-shift-b
 * or type just "deno task dev" in the terminal
 */

console.log("🎮 CMPM 121 - Starting...");

// Create basic HTML structure
document.body.innerHTML = `
  <h1>CMPM 121 Project</h1>
  <p>Clovers Earned: <span id="clovercounter">0</span></p>
  <button id="increment">🍀</button>
  <button id="payPicker">🪿Clover Picker (10)</button>
  <button id="payFarmer">👨‍🌾Clover Farmer (100)</button>
  <button id="buyFarm">🚜Clover Farm (1000)</button>
`;

// Simple counter for demonstration
// initialize counter
let counter: number = 1000;
let increaseRate: number = 0;
let pastTime = Date.now();
//const pastTime = Date.now();
requestAnimationFrame(step);

function step() {
  const now: number = Date.now();
  const delta: number = (now - pastTime) / 1000; //Magic Number. Why does this work? I just added a random amount of zeros til it did, don't know why it does though.
  pastTime = now;
  updateClovers(delta);
  requestAnimationFrame(step);
}
////////////////////////////////////////////////////////

// Add click handler
const button = document.getElementById("increment")!;
const picker = document.getElementById("payPicker")!;
const farmer = document.getElementById("payFarmer")!;
const farm = document.getElementById("buyFarm")!;
const counterElement = document.getElementById("clovercounter")!;

function updateClovers(delta: number): void {
  counter = counter + delta * increaseRate;
  counterElement.innerHTML = counter.toFixed(2).toString();
  console.log("I have these thingies:", button, counterElement, counter);
}

button.addEventListener("click", () => {
  // This looks like to a good place to look up add some logic!

  counter = counter + 1;
  counterElement.innerHTML = counter.toString();
  console.log("I have these thingies:", button, counterElement, counter);
});

picker.addEventListener("click", () => {
  if (counter >= 10) {
    counter = counter - 10;
    increaseRate = increaseRate + 0.1;
  }

  counter = counter + 1;
  counterElement.innerHTML = counter.toString();
  console.log("I have these thingies:", button, counterElement, counter);
});

farmer.addEventListener("click", () => {
  if (counter >= 100) {
    counter = counter - 100;
    increaseRate = increaseRate + 2;
  }

  counter = counter + 1;
  counterElement.innerHTML = counter.toString();
  console.log("I have these thingies:", button, counterElement, counter);
});

farm.addEventListener("click", () => {
  if (counter >= 1000) {
    counter = counter - 1000;
    increaseRate = increaseRate + 50;
  }

  counter = counter + 1;
  counterElement.innerHTML = counter.toString();
  console.log("I have these thingies:", button, counterElement, counter);
});

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
  <button id="payFarmer">👨‍🌾Clover Picker (10)</button>
`;

// Simple counter for demonstration
// initialize counter
let counter: number = 0;
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
const farmer = document.getElementById("payFarmer")!;
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

farmer.addEventListener("click", () => {
  if (counter >= 10) {
    counter = counter - 10;
    increaseRate = increaseRate + 1;
  }

  counter = counter + 1;
  counterElement.innerHTML = counter.toString();
  console.log("I have these thingies:", button, counterElement, counter);
});

/**
 * Main entry point for the CMPM 121 Section Activity
 * Simple starter template - customize to your heart's content!
 * just adding this here, in order to start project, it is ctrl-shift-b
 */

console.log("🎮 CMPM 121 - Starting...");

// Simple counter for demonstration
// initialize counter
let counter: number = 0;

// Create basic HTML structure
document.body.innerHTML = `
  <h1>CMPM 121 Project</h1>
  <p>Counter: <span id="counter">0</span></p>
  <button id="increment">Click Me!</button>
  <button id="increment">🍀</button>
`;

// Add click handler
const button = document.getElementById("increment")!;
const counterElement = document.getElementById("counter")!;

button.addEventListener("click", () => {
  // This looks like to a good place to look up add some logic!
  counter = counter + 1;
  console.log("I have these thingies:", button, counterElement, counter);
});

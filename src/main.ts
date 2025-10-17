/**
 * Main entry point for the CMPM 121 Section Activity
 * Simple starter template - customize to your heart's content!
 * just adding this here, in order to start project, it is ctrl-shift-b
 * or type just "deno task dev" in the terminal
 */

console.log("🎮 CMPM 121 - Starting...");

// Simple counter for demonstration
// initialize counter
let counter: number = 0;

// Create basic HTML structure
document.body.innerHTML = `
  <h1>CMPM 121 Project</h1>
  <p>Clovers Earned: <span id="clovercounter">0</span></p>
  <button id="increment">🍀</button>
`;

// Add click handler
const button = document.getElementById("increment")!;
const counterElement = document.getElementById("clovercounter")!;

button.addEventListener("click", () => {
  // This looks like to a good place to look up add some logic!
  counter = counter + 1;
  counterElement.innerHTML = counter.toString();
  console.log("I have these thingies:", button, counterElement, counter);
});

/**
 * Main entry point for the CMPM 121 Section Activity
 * Simple starter template - customize to your heart's content!
 * just adding this here, in order to start project, it is ctrl-shift-b
 * or type just "deno task dev" in the terminal
 */

import "./style.css";

console.log("🎮 CMPM 121 - Starting...");

interface Button {
  name: string;
  cost: number;
  rate: number;
  id: string;
}

const CloverPicker: Button = {
  name: "🪿Clover Picker",
  cost: 10,
  rate: 0.1,
  id: "payPicker",
};

const CloverFarmer: Button = {
  name: "👨‍🌾Clover Farmer",
  cost: 100,
  rate: 2,
  id: "payFarmer",
};

const CloverFarm: Button = {
  name: "🚜Clover Farm",
  cost: 1000,
  rate: 50,
  id: "buyFarm",
};

// Create basic HTML structure
document.body.innerHTML = `
  <h1>CMPM 121 - Clover Clicker</h1>
  <p>Clovers Earned: <span id="clovercounter">0</span></p>
  <p>Clovers/sec: <span id="ratecounter">0</span></p>
  <button id="increment">🍀</button>
  <button id=${CloverPicker.id}>${CloverPicker.name} (${CloverPicker.cost})</button>
  <button id=${CloverFarmer.id}>${CloverFarmer.name} (${CloverFarmer.cost})</button>
  <button id=${CloverFarm.id}>${CloverFarm.name} (${CloverFarm.cost})</button>
`;
document.body.style.backgroundColor = "lightgreen";

// TO DO:
// 1. Figure out way to initialize the click handlers easily for each button
// 2. Update button text to show current cost after purchase
// 3. Make sure all the stuff works

// Simple counter for demonstration
// initialize counter
let counter: number = 1000;
let increaseRate: number = 0;
let pastTime = Date.now();
// const costs: number[] = [10, 100, 1000];
requestAnimationFrame(step);

function step() {
  const now: number = Date.now();
  const delta: number = (now - pastTime) / 1000; // Magic Number. Why does this work? I just added a random amount of zeros til it did, don't know why it does though.
  pastTime = now;
  updateClovers(delta);
  requestAnimationFrame(step);
}
////////////////////////////////////////////////////////

// Add click handler
const button = document.getElementById("increment")!;
const picker = document.getElementById(CloverPicker.id)!;
const farmer = document.getElementById(CloverFarmer.id)!;
const farm = document.getElementById(CloverFarm.id)!;
const counterElement = document.getElementById("clovercounter")!;
const rateElement = document.getElementById("ratecounter")!;

function updateClovers(delta: number): void {
  counter = counter + delta * increaseRate;
  counterElement.innerHTML = counter.toFixed(2).toString();
}

button.addEventListener("click", () => {
  counter = counter + 1;
  counterElement.innerHTML = counter.toString();
});

picker.addEventListener("click", makeClickListener(CloverPicker));
farmer.addEventListener("click", makeClickListener(CloverFarmer));
farm.addEventListener("click", makeClickListener(CloverFarm));

function makeClickListener(purchasable: Button) {
  return () => {
    if (counter >= purchasable.cost) { // Check if enough clovers to buy item
      counter = counter - purchasable.cost;
      increaseRate = increaseRate + purchasable.rate;
      purchasable.cost = purchasable.cost + (purchasable.cost * 0.15); // Increase cost by 15% for every purchase.
      purchasable.cost * 0.15; // Increase cost by 15% for every purchase.
      rateElement.innerHTML = increaseRate.toFixed(1).toString(); // Update rate display
      console.log(
        `Purchased ${purchasable.name}. New cost: ${
          purchasable.cost.toFixed(2)
        }`,
      );
      // Update button text to show new cost
      farm.innerHTML = `${CloverFarm.name} (${CloverFarm.cost.toFixed(2)})`;

      farmer.innerHTML = `${CloverFarmer.name} (${
        CloverFarmer.cost.toFixed(2)
      })`;

      picker.innerHTML = `${CloverPicker.name} (${
        CloverPicker.cost.toFixed(2)
      })`;
    } // This format is annoying me
  };
}

import "./style.css";

////////////////////////////////////// TYPES /////////////////////////////////

interface Button {
  name: string;
  cost: number;
  rate: number;
  id: string;
  description: string;
}

////////////////////////////////////// DATA /////////////////////////////////

const buttons: Button[] = [
  {
    name: "🪿Clover Picker",
    cost: 10,
    rate: 0.1,
    id: "buyPicker",
    description: "A friendly little duck to help pick clovers.",
  },
  {
    name: "👨‍🌾Clover Farmer",
    cost: 100,
    rate: 2,
    id: "buyFarmer",
    description: "A farmer who will help to harvest clovers.",
  },
  {
    name: "🚜Clover Farm",
    cost: 1000,
    rate: 50,
    id: "buyFarm",
    description: "A whole ranch dedicated to the art of farming clovers.",
  },
  {
    name: "🏭Clover Factory",
    cost: 10000,
    rate: 500,
    id: "buyFactory",
    description: "The pinnacle of clover production technology.",
  },
  {
    name: "🧪Clover Lab",
    cost: 100000,
    rate: 5000,
    id: "buyLab",
    description: "The future of clover science starts here",
  },
];

////////////////////////////////////// DOM ELEMENTS /////////////////////////////////

// Create basic HTML structure
document.body.innerHTML = `
  <h1>CMPM 121 - Clover Clicker</h1>
  <p>Clovers Earned: <span id="clovercounter">0</span></p>
  <p>Clovers/sec: <span id="ratecounter">0</span></p>
  <button id="increment">🍀</button>
`;

document.body.style.backgroundColor = "lightgreen";

////////////////////////////////////// VARIABLES & FUNCTIONS /////////////////////////////////

const counterElement = document.getElementById("clovercounter")!;
const rateElement = document.getElementById("ratecounter")!;

let counter: number = 0;
let cloversPerSecond: number = 0;
let pastTime = Date.now();

// Add click handler
const button = document.getElementById("increment")!;

for (const button of buttons) {
  const element = document.createElement("button");
  element.id = button.id;
  element.innerHTML = `${button.name} (${button.cost})`;
  element.title = button.description; // Add description as tooltip
  document.body.appendChild(element);
}

function step() {
  const now: number = Date.now();
  const delta: number = (now - pastTime) / 1000; // Convert to seconds
  pastTime = now;
  updateClovers(delta);
  requestAnimationFrame(step);
}

function updateClovers(delta: number): void {
  counter = counter + delta * cloversPerSecond;
  counterElement.innerHTML = counter.toFixed(2).toString();
}

////////////////////////////////////// EVENT LISTENERS /////////////////////////////////

button.addEventListener("click", () => {
  counter = counter + 1;
  console.log("This button has been clicked!");
  counterElement.innerHTML = counter.toString();
});

for (const button of buttons) {
  const element = document.getElementById(button.id)!;
  element.addEventListener("click", createBuyHandler(button));
}

function createBuyHandler(purchasable: Button) {
  return () => {
    if (counter >= purchasable.cost) { // Check if enough clovers to buy item
      counter = counter - purchasable.cost;
      cloversPerSecond = cloversPerSecond + purchasable.rate;
      purchasable.cost *= 1.15; // Increase cost by 15% for every purchase.
      rateElement.innerHTML = cloversPerSecond.toFixed(1).toString(); // Update rate display
      // Update button text to show new cost
      for (const { name, cost, id } of buttons) {
        const element = document.getElementById(id)!;
        element.innerHTML = `${name} (${cost.toFixed(0)})`;
      }
    }
  };
}

////////////////////////////////////// GAME LOOP /////////////////////////////////

// initialize counter
requestAnimationFrame(step);

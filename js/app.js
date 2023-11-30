// Import the World and Island classes from their respective modules
import World from './classes/World.js';
import Island from './classes/Island.js';

// Create a new instance of the World class
const world = new World();

// Get references to HTML buttons by their IDs
const btnAddIsland = document.getElementById('btnAddIsland');
const btnSaveIsland = document.getElementById('btnSave');
const btnLoadIsland = document.getElementById('btnLoad');

// Add a click event listener to the "Add Island" button
btnAddIsland.addEventListener('click', () => {
    world.addIsland(); // Call the addIsland method of the World instance when the button is clicked
});

// Add a click event listener to the "Save" button
btnSaveIsland.addEventListener('click', () => {
    world.save(); // Call the save method of the World instance when the button is clicked
    console.log("Islands saved!"); // Log a message to the console indicating that islands are saved
});

// Add a click event listener to the "Load" button
btnLoadIsland.addEventListener('click', () => {
    world.load(); // Call the load method of the World instance when the button is clicked
    console.log("Islands loaded!"); // Log a message to the console indicating that islands are loaded
});

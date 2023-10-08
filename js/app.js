// kickstart your world here


import World from './classes/World.js'; // World.js classe importeren.
 import Island from './classes/Island.js'; // Import the Island class

const world = new World();

//  document.addEventListener('DOMContentLoaded', function() { // Wanneer de DOM volledig geladen is, wordt er een nieuwe instantie aangemaakt van de wereld class die luistert naar het hook event.
//     const world = new World(); // Nieuwe World aanmaken
//     const btnAddIsland = document.getElementById('btnAddIsland'); // Get the "Add Island" button
//     btnAddIsland.addEventListener('click', () => { // Add a click event listener to the button
//         const newIsland = new Island(); // Creates a new island with random name and color
//         world.addIsland(newIsland); // Adds the island to the world
//     });
// }); 
const btnAddIsland = document.getElementById('btnAddIsland');

btnAddIsland.addEventListener('click', () => {
    world.addIsland();
    console.log("test");
});



// import World from './classes/World.js';

// const world = new World();

// const btnAddIsland = document.getElementById('btnAddIsland');
// const btnSave = document.getElementById('btnSave');
// const btnLoad = document.getElementById('btnLoad');

// btnAddIsland.addEventListener('click', () => {
//   world.addIsland();
//   console.log("test");
// });

// btnSave.addEventListener('click', () => {
//   world.save();
// });

// btnLoad.addEventListener('click', () => {
//   world.load();
// })
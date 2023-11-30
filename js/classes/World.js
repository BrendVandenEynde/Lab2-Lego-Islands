// Import the Island class from 'Island.js'
import Island from './Island.js';

// Define and export the World class
export default class World {
  constructor() {
    // Initialize the 'islands' array to store instances of the Island class
    this.islands = [];

    // Set up event listeners and bind functions to ensure the correct context ('this' value)
    this.hookEvents(); // Initialize event listeners
    this.boundAddIslandOnce = this.addIslandOnce.bind(this); // Bind the addIslandOnce function to the current instance
  }

  // Method to set up event listeners
  hookEvents() {
    // Get references to HTML buttons by their IDs
    const btnAddIsland = document.getElementById('btnAddIsland');
    const btnSave = document.getElementById('btnSave');
    const btnLoad = document.getElementById('btnLoad');

    // Add a click event listener to the "Add Island" button
    btnAddIsland.addEventListener('click', this.boundAddIslandOnce);

    // Add a click event listener to the "Save" button
    btnSave.addEventListener('click', () => this.save());

    // Add a click event listener to the "Load" button
    btnLoad.addEventListener('click', () => this.load());
  }

  // Method to add an island only once (remove and re-add click event listener)
  addIslandOnce() {
    // Get the "Add Island" button
    const btnAddIsland = document.getElementById('btnAddIsland');

    // Remove the click event listener temporarily to prevent multiple clicks
    btnAddIsland.removeEventListener('click', this.boundAddIslandOnce);

    // Call the addIsland method to add a new island to the world
    this.addIsland();

    // Re-add the click event listener after adding the island
    btnAddIsland.addEventListener('click', this.boundAddIslandOnce);
  }

  // Method to save island data to local storage
  save() {
    // Map the islands array to an array of JSON representations of islands
    const savedIslands = this.islands.map(island => island.toJSON());

    // Convert the array to a JSON string
    const savedIslandsJSON = JSON.stringify(savedIslands);

    // Save the JSON string to local storage with the key 'savedIslands'
    localStorage.setItem('savedIslands', savedIslandsJSON);
  }

  // Method to load island data from local storage
  load() {
    // Retrieve the JSON string from local storage with the key 'savedIslands'
    const savedIslandsJSON = localStorage.getItem('savedIslands');

    // Check if there are saved islands
    if (savedIslandsJSON) {
      // Parse the JSON string to an array of saved island data
      const savedIslands = JSON.parse(savedIslandsJSON);

      // Iterate through the saved islands and add or update them in the world
      savedIslands.forEach(savedIsland => {
        // Call the addIsland method with saved data (name, color, position)
        this.addIsland(savedIsland.position, savedIsland.name, savedIsland.color);
      });

      console.log('Islands loaded!');
    } else {
      console.log('No saved islands found.');
    }
  }

  // Method to generate random coordinates within the screen boundaries
  getCoordinates() {
    const maxX = window.innerWidth - 100; // Adjusted the maximum X value
    const maxY = window.innerHeight - 50; // Adjusted the maximum Y value

    return {
      x: Math.max(0, Math.min(Math.random() * maxX, maxX)),
      y: Math.max(0, Math.min(Math.random() * maxY, maxY)),
    };
  }

  // Method to add an island to the world
  addIsland(savedPosition, savedName, savedColor) {
    // Create a new instance of the Island class with saved or random data
    const island = new Island(savedName, savedColor, savedPosition || this.getCoordinates());

    // Add the island to the 'islands' array
    this.islands.push(island);

    // Create a new DOM element for the island
    const islandElement = document.createElement('div');
    islandElement.classList.add('island');
    document.body.appendChild(islandElement);

    // Set the island's position, color, and name in the DOM
    islandElement.style.left = island.position.x + 'px';
    islandElement.style.top = island.position.y + 'px';
    islandElement.style.backgroundColor = island.color;
    islandElement.innerHTML = island.name;

    // Add a click event listener to the island for removal
    islandElement.addEventListener('click', () => {
      this.removeIsland(island, islandElement);
    });

    // Attach the islandElement to the island instance for reference
    island.islandElement = islandElement;

    console.log('Island added!');
  }

  // Method to remove an island with a fade-out animation
  removeIsland(island, islandElement) {
    // Apply a transform animation for a smooth removal effect
    islandElement.style.transition = 'transform 0.3s ease-out';
    islandElement.style.transform = 'translateY(-20px)';

    // Remove the island from the 'islands' array and the DOM after the animation
    setTimeout(() => {
      const index = this.islands.indexOf(island);
      if (index !== -1) {
        this.islands.splice(index, 1);
      }

      document.body.removeChild(islandElement);

      console.log('Island removed!');
    }, 300);
  }
}

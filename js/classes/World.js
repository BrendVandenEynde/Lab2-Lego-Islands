import Island from './Island.js'; // Import the Island class

export default class World {
    constructor() {
      this.islands = []; // a good place to keep track of your islands
      this.hookEvents(); // let's kick things of by hooking up events
    }
  
    hookEvents() {
      // // hook events like clicking buttons to a specific function
      // const btnAddIsland = document.getElementById('btnAddIsland'); // btnAddIsland krijgt de id van de button mee.
      //   btnAddIsland.addEventListener('click', () => { // aan btnAddIsland wordt een eventlistener toegevoegd en luisterd naar een click event op de knop.
      //       const newIsland = new Island(); // Creates a new island with random name and color
      //       this.addIsland(newIsland); // Adds the island to the world
      //   });
    }
  
    save() {
      // save array islands to localstorage as string
      // loop over all this.islands and save the names
    }
  
    load() {
      // load islands from localstorage into array
      // loop over the array and addIslands()
    }
  
    getCoordinates() {
      // return coordinates within the screen at random, feel free to change it up!
      let randomSign = Math.random() < 0.5 ? -1 : 1;
      return {
        x: ((Math.random() * window.innerWidth) / 2) * randomSign,
        y: ((Math.random() * window.innerHeight) / 2) * randomSign
      };
    }
  
    addIsland() {
      // Add islands to the DOM

      // 1. Add the island to the internal islands array
      const island = new Island(); // Create a new Island instance
      this.islands.push(island);

      // 2. Create a new DOM element for the island
      const islandElement = document.createElement('div');
      islandElement.classList.add("island");
      document.body.appendChild(islandElement);

      // 3. Set the island's position using CSS
      const coordinates = this.getCoordinates();
      islandElement.style.left = coordinates.x + 'px';
      islandElement.style.top = coordinates.y + 'px';

      // 4. Set the coordinates as a transform property
      islandElement.style.transform = `translate(${coordinates.x}px, ${coordinates.y}px)`;

      // 5. Set the island's color
      islandElement.style.backgroundColor = island.getRandomColor();

      // 6. Set the island's name
      islandElement.innerHTML = island.getRandomName();

      // 7. Add a click event listener to remove the island when clicked
      islandElement.addEventListener('click', () => {
          this.removeIsland(island, islandElement);
      });

      console.log("Island added!");
  }

  removeIsland(island, islandElement) {
      // Remove the island from the internal islands array
      const index = this.islands.indexOf(island);
      if (index !== -1) {
          this.islands.splice(index, 1);
      }

      // Remove the island element from the DOM
      document.body.removeChild(islandElement);

      console.log("Island removed!");
  }
  
    moveIsland(island) {
      // this might be a good point to animate the islands with JS Animations API
    }
  }
  
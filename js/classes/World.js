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

      // add the islands to the DOM
      // 1. Add the island to the internal islands array.
      //this.islands.push(island); //Dit zorgt ervoor dat er een nieuw eiland gepushed wordt en islands houdt rekening met hoeveel eilanden er al zijn. this.islands.push(island) zorgt ervoor dat het nieuwe eiland in de array terecht komt.

      // 2. Get the coordinates for placing the island on the screen.
      //

      // 3. Create a new DOM element for the island.
      // 
      //islandElement.className = 'island'; // Set the CSS class of islandElement to 'island'. This class will be used for styling the island element in your CSS file.
     // islandElement.textContent = island.name; // Display the island's name on the element

      // 4. Set the island's position using CSS.
      
      //islandElement.style.backgroundColor = island.color; // Set the island's color

      // 5. Append the island element to the 'app' container in your HTML.
      //const appContainer = document.getElementById('app'); // Maakt een nieuw eiland aan in de div met de ID "app", hier worden de nieuwe eilanden ingezet.
      //appContainer.appendChild(islandElement); // Append the islandElement as a child to the appContainer element in the DOM. This places the island element inside the 'app' div, making it visible on the web page.

      const islandElement = document.createElement('div'); // er wordt een nieuwe div aangemaakt, deze div is eigenlijk je eiland dat visueel op het scherm komt.
      islandElement.classList.add("island");
      document.body.appendChild(islandElement); 
      const coordinates = this.getCoordinates(); // De functie getCoordinates gaat ervoor zorgen dat er willekeurige coordinaten gegenereerd worden op het scherm.
      islandElement.style.left = coordinates.x + 'px'; // zorgt voor de coordinaten op de X as, het begint te tellen vanaf de linkerkant van het scherm.
      islandElement.style.top = coordinates.y + 'px'; // zorgt voor de coordinaten op de Y as, het begint te tellen vanaf de bovenkant van het scherm.

      // set the coordiantes as a transform property
         islandElement.style.transform = `translate(${coordinates.x}px, ${coordinates.y}px)`;

      const island = new Island();
      islandElement.style.backgroundColor = island.getRandomColor();

      // give the new island a random name
      islandElement.innerHTML = island.getRandomName();

      console.log("test2");

    }
  
    moveIsland(island) {
      // this might be a good point to animate the islands with JS Animations API
    }
  }
  
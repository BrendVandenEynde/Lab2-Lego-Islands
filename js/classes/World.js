import Island from './Island.js';

export default class World {
  constructor() {
    this.islands = [];
    this.hookEvents();
    this.boundAddIslandOnce = this.addIslandOnce.bind(this); // Bind the function to the current instance
  }

  hookEvents() {
    const btnAddIsland = document.getElementById('btnAddIsland');
    btnAddIsland.addEventListener('click', this.boundAddIslandOnce);

    const btnSave = document.getElementById('btnSave');
    btnSave.addEventListener('click', () => this.save());

    const btnLoad = document.getElementById('btnLoad');
    btnLoad.addEventListener('click', () => this.load());
  }

  addIslandOnce() {
    const btnAddIsland = document.getElementById('btnAddIsland');
    btnAddIsland.removeEventListener('click', this.boundAddIslandOnce);

    this.addIsland();

    btnAddIsland.addEventListener('click', this.boundAddIslandOnce);
  }

  save() {
    const savedIslands = this.islands.map(island => ({
      name: island.name,
      color: island.color, // Include the color property
      position: {
        x: island.islandElement.offsetLeft,
        y: island.islandElement.offsetTop,
      },
    }));

    const savedIslandsJSON = JSON.stringify(savedIslands);
    localStorage.setItem('savedIslands', savedIslandsJSON);

    console.log('Islands saved!');
  }

  load() {
    const savedIslandsJSON = localStorage.getItem('savedIslands');
    if (savedIslandsJSON) {
      const savedIslands = JSON.parse(savedIslandsJSON);
      savedIslands.forEach(savedIsland => {
        const island = new Island(savedIsland.name);
        island.color = savedIsland.color; // Set the color for the island
        this.islands.push(island);

        const islandElement = document.createElement('div');
        islandElement.classList.add('island');
        document.body.appendChild(islandElement);

        islandElement.style.left = savedIsland.position.x + 'px';
        islandElement.style.top = savedIsland.position.y + 'px';
        islandElement.style.transform = `translate(${savedIsland.position.x}px, ${savedIsland.position.y}px)`;
        islandElement.style.backgroundColor = island.color; // Set the saved color
        islandElement.innerHTML = savedIsland.name;

        islandElement.addEventListener('click', () => {
          this.removeIsland(island, islandElement);
        });
      });

      console.log('Islands loaded!');
    } else {
      console.log('No saved islands found.');
    }
  }

  getCoordinates() {
    let randomSign = Math.random() < 0.5 ? -1 : 1;
    // Ensure islands spawn inside the visible area of the screen
    return {
      x: Math.max(0, Math.min((Math.random() * window.innerWidth) / 2, window.innerWidth - 100)),
      y: Math.max(0, Math.min((Math.random() * window.innerHeight) / 2, window.innerHeight - 50)),
    };
  }

  addIsland() {
    const island = new Island();
    this.islands.push(island);

    const islandElement = document.createElement('div');
    islandElement.classList.add('island');
    document.body.appendChild(islandElement);

    const coordinates = this.getCoordinates();
    islandElement.style.left = coordinates.x + 'px';
    islandElement.style.top = coordinates.y + 'px';
    islandElement.style.transform = `translate(${coordinates.x}px, ${coordinates.y}px)`;
    islandElement.style.backgroundColor = island.color;
    islandElement.innerHTML = island.getRandomName();

    islandElement.addEventListener('click', () => {
      this.removeIsland(island, islandElement);
    });

    island.islandElement = islandElement;

    console.log('Island added!');

    // Trigger the animation by moving the island to its random location
    setTimeout(() => {
      const randomCoordinates = this.getCoordinates();
      this.moveIsland(island, randomCoordinates);
    }, 100);
  }

  removeIsland(island, islandElement) {
    islandElement.style.transition = 'transform 0.3s ease-out'; // Set the transition properties
    islandElement.style.transform = 'translateY(-20px)'; // Move the island slightly upward

    // Remove the island after the animation completes
    setTimeout(() => {
      const index = this.islands.indexOf(island);
      if (index !== -1) {
        this.islands.splice(index, 1);
      }

      document.body.removeChild(islandElement);

      console.log('Island removed!');
    }, 300);
  }

  moveIsland(island, coordinates) {
    island.islandElement.style.transition = 'transform 0.5s ease-in-out'; // Set the transition properties
    island.islandElement.style.transform = `translate(${coordinates.x}px, ${coordinates.y}px)`; // Move the island to the new coordinates

    // Remove the transition property after the animation completes
    setTimeout(() => {
      island.islandElement.style.transition = '';
    }, 500);
  }
}

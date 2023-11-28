import Island from './Island.js';

export default class World {
  constructor() {
    this.islands = [];
    this.hookEvents();
  }

  hookEvents() {
    const btnAddIsland = document.getElementById('btnAddIsland');
    btnAddIsland.addEventListener('click', () => this.addIslandOnce());

    const btnSave = document.getElementById('btnSave');
    btnSave.addEventListener('click', () => this.save());

    const btnLoad = document.getElementById('btnLoad');
    btnLoad.addEventListener('click', () => this.load());
  }

  addIslandOnce() {
    const btnAddIsland = document.getElementById('btnAddIsland');
    btnAddIsland.removeEventListener('click', () => this.addIslandOnce());

    this.addIsland();

    btnAddIsland.addEventListener('click', () => this.addIslandOnce());
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
    return {
      x: ((Math.random() * window.innerWidth) / 2) * randomSign,
      y: ((Math.random() * window.innerHeight) / 2) * randomSign,
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
  }

  removeIsland(island, islandElement) {
    const index = this.islands.indexOf(island);
    if (index !== -1) {
      this.islands.splice(index, 1);
    }

    document.body.removeChild(islandElement);

    console.log('Island removed!');
  }

  moveIsland(island) {
    // Placeholder for animation logic
  }
}

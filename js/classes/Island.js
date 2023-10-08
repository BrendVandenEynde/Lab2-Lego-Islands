export default class Island {
  constructor(name) {
    this.name = name || this.getRandomName(); // this.name is het nieuwe / huidige eiland dat er wordt gespawnd, de naam krijgt het van getRandomName functie
    this.color = this.getRandomColor(); // Het nieuwe eiland dat aangemaakt wordt krijgt tezamen met de naam een willekeurige kleur dankzij de gerRandomColor function.
  }
    getRandomColor() {
      return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
    }
  
    remove() {
      // JS animations api, fade out
      // remove the element when the animation ended
    }
  
    getRandomName() {
      // array with 10 random island names
      const names = [
        "Palmtree beach",
        "Sandy beach",
        "Tropical beach",
        "Palm beach",
        "Sunny beach",
        "Paradise beach",
        "Sunny island",
        "Tropical island",
        "Palm island",
        "Paradise island"
      ];
  
      // // return a random name from the array
      const randomIndex = Math.floor(Math.random() * names.length); // Generate a random index within the range of the 'names' array
      return names[randomIndex]; // Return the name at the randomly generated index

    }
  }
  
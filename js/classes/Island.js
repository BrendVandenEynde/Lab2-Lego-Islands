export default class Island {
  constructor(name) {
    this.name = name || this.getRandomName();
    this.color = this.getRandomColor();
  }

  getRandomColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  }

  toJSON() {
    return {
      name: this.name,
      color: this.color,
    };
  }

  remove() {
    // JS animations api, fade out
    // remove the element when the animation ended
  }

  getRandomName() {
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
      "Paradise island",
      "Coral Cove",
      "Azure Oasis",
      "Tropicana Haven",
      "Serene Shores",
      "Mango Mirage",
      "Golden Lagoon",
      "Isle of Tranquility",
      "Emerald Eden",
      "Sunset Sanctuary",
      "Coconut Bliss Cove"
    ];
    const randomIndex = Math.floor(Math.random() * names.length);
    return names[randomIndex];
  }
}

// Define the Island class
export default class Island {
  // Constructor initializes island properties with default or provided values
  constructor(name, color, position) {
    this.name = name || this.getRandomName(); // Set island name to provided value or a random name
    this.color = color || this.getRandomColor(); // Set island color to provided value or a random color
    this.position = position || { x: 0, y: 0 }; // Set island position to provided value or default to { x: 0, y: 0 }
  }

  // Generate a random hexadecimal color code
  getRandomColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  }

  // Convert island properties to a JSON-like object
  toJSON() {
    return {
      name: this.name,
      color: this.color,
      position: this.position,
    };
  }

  // Placeholder method for potential future functionality (e.g., fade-out animation)
  remove() {
    // JS animations api, fade out
    // remove the element when the animation ended
  }

  // Generate a random island name from a predefined list
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

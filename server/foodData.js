// In-memory singleton that acts as a mock database for food items.
class FoodData {
    constructor() {
        // Return the existing instance if one has already been created.
        if (FoodData.instance) {
            return FoodData.instance;
        }

        // Five food items stored in memory.
        this.foods = [
            { id: 1, name: "Hamburger", price: 8.99 },
            { id: 2, name: "Pizza", price: 12.99 },
            { id: 3, name: "Hot Dog", price: 5.49 },
            { id: 4, name: "Poutine", price: 7.99 },
            { id: 5, name: "Chicken Wrap", price: 9.49 }
        ];

        FoodData.instance = this;
    }

    // Return all food items from the mock database.
    getAll() {
        return this.foods;
    }
}

module.exports = new FoodData();
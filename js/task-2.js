// Створи клас Storage, який створюватиме об'єкти для управління складом товарів. Клас очікує лише один аргумент — початковий масив товарів, який записується до створеного об'єкта в приватну властивість items.

class Storage {
    #items = [];

    constructor(params) {
        this.#items = params;
    }

    getItems() {
        return this.#items;
    }

    addItem(newItem) {
        this.#items.push(newItem);
    }

    removeItem(itemToRemove) {
        let newArray = [];

        for (const item of this.#items) {
            // console.log(`Checking if ${itemToRemove} is equal to ${item}`)
            if (item !== itemToRemove) {
                // console.log(`${itemToRemove} is not queal. Added ${item} to array`)
                newArray.push(item);
            }
        }

        this.#items = newArray;
    }
}

const storage = new Storage(["Nanitoids", "Prolonger", "Antigravitator"]);
console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator"]
storage.addItem("Droid");
console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator", "Droid"]
storage.removeItem("Prolonger");
console.log(storage.getItems()); // ["Nanitoids", "Antigravitator", "Droid"]

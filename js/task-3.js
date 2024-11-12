// Напиши клас StringBuilder, який приймає один параметр initialValue — довільний рядок, який записується у приватну властивість value об'єкта, що створюється.

class StringBuilder {
    #value;

    constructor(initialValue) {
        this.#value = initialValue;
    }

    getValue() {
        return this.#value;
    }
    padEnd(str) {
        this.#value = this.#value + str;
    }
    padStart(str) {
        this.#value =  str + this.#value;
    }
    padBoth(str) {
        this.#value = str + this.#value + str;
    }
};

const builder = new StringBuilder(".");
console.log(builder.getValue()); // "."
builder.padStart("^");
console.log(builder.getValue()); // "^."
builder.padEnd("^");
console.log(builder.getValue()); // "^.^"
builder.padBoth("=");
console.log(builder.getValue()); // "=^.^="

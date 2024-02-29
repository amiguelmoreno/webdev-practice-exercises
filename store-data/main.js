class StoreData {
  constructor() {
    this.data = {};
    this.listeners = {};
  }

  addKeyValue(key, value) {
    this.data[key] = value;
    this.notifyListeners(key, value);
  }

  getValue(key) {
    return this.data[key];
  }

  addListener(key, listenerFunc) {
    if (!this.listeners[key]) {
      this.listeners[key] = [];
    }
    this.listeners[key].push(listenerFunc);
  }

  notifyListeners(key, newValue) {
    if (this.listeners[key]) {
      this.listeners[key].forEach((listenerFunc) => {
        listenerFunc(key, newValue);
      });
    }
  }
}

// Example usage:

function valueChangedListener(key, newValue) {
  console.log(`Value for key '${key}' changed to: ${newValue}`);
}

function valueChangedListener2(key, newValue) {
  console.log(`Value added for key '${key}' changed to: ${newValue}`);
}

const store = new StoreData();

// Adding listeners
store.addListener("name", valueChangedListener);
store.addListener("name", valueChangedListener2);
store.addListener("age", valueChangedListener);

// Adding key/value pairs
store.addKeyValue("name", "John");
store.addKeyValue("age", 25);

//Modifying values
store.addKeyValue("name", "Alice");
store.addKeyValue("age", 30);

function filterObject(obj, filterFunction) {
  // Helper function to recursively filter nested objects
  function recursiveFilter(obj) {
    const filteredObj = {};

    for (const key in obj) {
      const value = obj[key];

      if (
        typeof value === "object" &&
        value !== null &&
        !Array.isArray(value)
      ) {
        // If the value is an object, recursively filter it
        const nestedFilteredObj = recursiveFilter(value);

        // If the nested object is not empty after filtering, add it to the result
        if (Object.keys(nestedFilteredObj).length > 0) {
          filteredObj[key] = nestedFilteredObj;
        }
      } else {
        // If the value is not an object, apply the filter function
        if (filterFunction(value)) {
          filteredObj[key] = value;
        }
      }
    }

    return filteredObj;
  }

  return recursiveFilter(obj);
}

// Example usage:

const data = {
  name: "John",
  age: 25,
  address: {
    street: "123 Main St",
    city: "Example City",
    country: 4,
  },
  isStudent: true,
  hobbies: ["reading", "coding", "traveling"],
};

// Example filter function: Keep only values that are strings
const stringFilter = (value) => typeof value === "string";

const filteredData = filterObject(data, stringFilter);

console.log(filteredData);

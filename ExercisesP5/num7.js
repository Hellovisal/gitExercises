function filterProps(obj, ...propsToExclude) {
    // Use Object.keys, filter, and Object.fromEntries for concise filtering
    return Object.fromEntries(
      Object.keys(obj)
        .filter(key => !propsToExclude.includes(key))
        .map(key => [key, obj[key]])
    );
  }
  
const object = { a: 1, b: 2, c: 3, d: 4 };
const filteredObject = filterProps(object, "b", "d");
console.log(filteredObject); // Output: { a: 1, c: 3 }

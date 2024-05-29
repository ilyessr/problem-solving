/*
Implement the RandomizedSet class:

RandomizedSet() Initializes the RandomizedSet object.
bool insert(int val) Inserts an item val into the set if not present. Returns true if the item was not present, false otherwise.
bool remove(int val) Removes an item val from the set if present. Returns true if the item was present, false otherwise.
int getRandom() Returns a random element from the current set of elements (it's guaranteed that at least one element exists when this method is called). Each element must have the same probability of being returned.
You must implement the functions of the class such that each function works in average O(1) time complexity.
*/

class RandomizedSet {
  private list: number[];
  private record: Record<number, number>;

  constructor() {
    this.list = [];
    this.record = {};
  }

  /**
   * Inserts an element into the set.
   * @param val The number to insert.
   * @returns `true` if the element was successfully inserted, `false` if it was already present.
   */
  insert(val: number): boolean {
    if (val in this.record) {
      return false;
    }

    this.record[val] = this.list.length;
    this.list.push(val);
    return true;
  }

  /**
   * Removes an element from the set.
   * @param val The number to remove.
   * @returns `true` if the element was successfully removed, `false` if it was not present.
   */
  remove(val: number): boolean {
    if (!(val in this.record)) {
      return false;
    }
    const idx = this.record[val];
    const lastElement = this.list[this.list.length - 1];
    // Move the last element to the place of the element to delete
    [this.list[idx], this.record[lastElement]] = [lastElement, idx];

    // Remove the last element from the list
    this.list.pop();
    // Remove the element from the record
    delete this.record[val];
    return true;
  }

  /**
   * Returns a random element from the set.
   * @returns A random number present in the set.
   */
  getRandom(): number {
    const randomIndex = Math.floor(Math.random() * this.list.length);
    return this.list[randomIndex];
  }
}

// Example usage:
const obj = new RandomizedSet();
console.log(obj.insert(1)); // true
console.log(obj.remove(2)); // false
console.log(obj.insert(2)); // true
console.log(obj.getRandom()); // 1 or 2
console.log(obj.remove(1)); // true
console.log(obj.insert(2)); // false
console.log(obj.getRandom()); // 2

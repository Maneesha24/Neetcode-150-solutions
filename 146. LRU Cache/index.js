class Node {
  constructor(key, val) {
    this.key = key;
    this.val = val;
    this.prev = null;
    this.next = null;
  }
}

/**
 * @author maneeshavenigalla
 * Implement the Least Recently Used (LRU) cache class LRUCache. The class should support the following operations
 * Initialize the LRU cache of size capacity.
 * @param {number} capacity
 */
var LRUCache = function (capacity) {
  this.capacity = capacity;
  this.cache = new Map();

  this.left = new Node(0, 0);
  this.right = new Node(0, 0);

  this.left.next = this.right;
  this.right.prev = this.left;
};

LRUCache.prototype.insert = function (node) {
  const prev = this.right.prev;

  prev.next = node;
  node.prev = prev;

  node.next = this.right;
  this.right.prev = node;
};

LRUCache.prototype.remove = function (node) {
  const prev = node.prev;
  const next = node.next;

  prev.next = next;
  next.prev = prev;
};

/**
 * Return the value cooresponding to the key if the key exists, otherwise return -1.
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function (key) {
  if (this.cache.has(key)) {
    const node = this.cache.get(key);
    this.remove(node);
    this.insert(node);

    return node.val;
  }
  return -1;
};

/**
 * Update the value of the key if the key exists. Otherwise, add the key-value pair to the cache.
 *  If the introduction of the new pair causes the cache to exceed its capacity, remove the least recently used key.
 * @param {number} key
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function (key, value) {
  if (this.cache.has(key)) {
    this.remove(this.cache.get(key));
  }

  const newNode = new Node(key, value);
  this.cache.set(key, newNode);
  this.insert(newNode);

  if (this.cache.size > this.capacity) {
    const firstNode = this.left.next;
    this.remove(firstNode);
    this.cache.delete(key);
  }
};

/**
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */
module.exports = LRUCache;

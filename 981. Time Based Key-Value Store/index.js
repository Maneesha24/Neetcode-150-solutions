var TimeMap = function () {
  this.time = new Map();
};

/**
 * @param {string} key
 * @param {string} value
 * @param {number} timestamp
 * @return {void}
 */
TimeMap.prototype.set = function (key, value, timestamp) {
  if (!this.time.has(key)) {
    this.time.set(key, []);
  }

  this.time.get(key).push([value, timestamp]);
};

/**
 * @param {string} key
 * @param {number} timestamp
 * @return {string}
 */
TimeMap.prototype.get = function (key, timestamp) {
  if (!this.time.has(key)) {
    return;
  }

  const values = this.time.get(key);
  let left = 0;
  let right = values.length - 1;

  let result = "";

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);

    if (values[mid][1] > timestamp) {
      right = mid - 1;
    } else {
      left = mid + 1;
      result = values[mid][0];
    }
  }

  return result;
};

/**
 * Your TimeMap object will be instantiated and called as such:
 * var obj = new TimeMap()
 * obj.set(key,value,timestamp)
 * var param_2 = obj.get(key,timestamp)
 */
module.exports = TimeMap;

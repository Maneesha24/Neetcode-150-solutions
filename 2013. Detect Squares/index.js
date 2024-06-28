var DetectSquares = function () {
  this.points = [];
  this.pointsMap = new Map();
};

/**
 * @param {number[]} point
 * @return {void}
 */
DetectSquares.prototype.add = function (point) {
  const p = point.join(",");

  this.pointsMap.set(p, (this.pointsMap.get(p) || 0) + 1);
  this.points.push(point);
};

/**
 * @param {number[]} point
 * @return {number}
 */
DetectSquares.prototype.count = function (point) {
  let result = 0;

  const [px, py] = point;

  for (const [x, y] of this.points) {
    if (Math.abs(py - y) != Math.abs(px - x) || x === px || y === py) {
      continue;
    }

    result += (this.pointsMap.get(`${x},${py}`) || 0) * (this.pointsMap.get(`${px},${y}`) || 0);
  }

  return result;
};

/**
 * Your DetectSquares object will be instantiated and called as such:
 * var obj = new DetectSquares()
 * obj.add(point)
 * var param_2 = obj.count(point)
 */
module.exports = DetectSquares;

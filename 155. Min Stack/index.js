/**
 * @author maneeshavenigalla
 * Design a stack that supports push, pop, top, and retrieving the minimum element in constant time.
 * Implement the MinStack class: initializes the stack object.
 */
var MinStack = function () {
  this.stack = [];
};

/**
 * pushes the element val onto the stack.
 * @param {number} val
 * @return {void}
 */
MinStack.prototype.push = function (val) {
  this.stack.push({
    val,
    min: !this.stack.length ? val : Math.min(val, this.getMin()),
  });
};

/**
 * removes the element on the top of the stack.
 * @return {void}
 */
MinStack.prototype.pop = function () {
  this.stack.pop();
};

/**
 * gets the top element of the stack.
 * @return {number}
 */
MinStack.prototype.top = function () {
  return this.stack[this.stack.length - 1].val;
};

/**
 * retrieves the minimum element in the stack.
 * @return {number}
 */
MinStack.prototype.getMin = function () {
  return this.stack[this.stack.length - 1].min;
};

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */
module.exports = MinStack;

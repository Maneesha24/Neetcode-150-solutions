/**
 * @author maneeshavenigalla
 * There are a total of numCourses courses you have to take, labeled from 0 to numCourses - 1. You are given an array prerequisites
 * where prerequisites[i] = [ai, bi] indicates that you must take course bi first if you want to take course ai. For example, the pair [0, 1],
 * indicates that to take course 0 you have to first take course 1.Return the ordering of courses you should take to finish all courses. If
 * there are many valid answers, return any of them. If it is impossible to finish all courses, return an empty array.
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {number[]}
 */
const findOrder = (numCourses, prerequisites) => {
  const result = [];
  const queue = [];

  const graphObj = {};
  const indegree = Array(numCourses).fill(0);

  for (const [course, prereq] of prerequisites) {
    if (prereq in graphObj) {
      graphObj[prereq].push(course);
    } else {
      graphObj[prereq] = [course];
    }
    indegree[course]++;
  }

  for (let i = 0; i < indegree.length; i++) {
    if (indegree[i] === 0) {
      queue.push(i);
    }
  }

  while (queue.length) {
    const prereq = queue.shift();
    if (prereq in graphObj) {
      for (const course of graphObj[prereq]) {
        indegree[course]--;
        if (indegree[course] === 0) {
          queue.push(course);
        }
      }
    }
    result.push(prereq);
  }

  return numCourses === result.length ? result : [];
};

module.exports = findOrder;

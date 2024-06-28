var Twitter = function () {
  this.tweetsMap = new Map();
  this.followMap = new Map();
};

/**
 * @param {number} userId
 * @param {number} tweetId
 * @return {void}
 */
Twitter.prototype.postTweet = function (userId, tweetId) {
  if (!this.tweetsMap.has(userId)) {
    this.tweetsMap.set(userId, []);
  }

  this.tweetsMap.get(userId).unshift(tweetId);
};

/**
 * @param {number} userId
 * @return {number[]}
 */
Twitter.prototype.getNewsFeed = function (userId) {
  let newsFeed = [];

  if (this.tweetsMap.has(userId)) {
    newsFeed = [...this.tweetsMap.get(userId)];
  }

  if (this.followMap.has(userId)) {
    for (const follow of this.followMap.get(userId)) {
      if (this.tweetsMap.has(follow)) {
        newsFeed = [...newsFeed, ...this.tweetsMap.get(follow)];
      }
    }
  }

  newsFeed.sort((a, b) => b - a);
  return newsFeed.slice(0, 10);
};

/**
 * @param {number} followerId
 * @param {number} followeeId
 * @return {void}
 */
Twitter.prototype.follow = function (followerId, followeeId) {
  if (!this.followMap.has(followerId)) {
    this.followMap.set(followerId, new Set());
  }

  this.followMap.get(followerId).add(followeeId);
};

/**
 * @param {number} followerId
 * @param {number} followeeId
 * @return {void}
 */
Twitter.prototype.unfollow = function (followerId, followeeId) {
  if (!this.followMap.has(followerId)) {
    return;
  }

  this.followMap.get(followerId).delete(followeeId);
};

/**
 * Your Twitter object will be instantiated and called as such:
 * var obj = new Twitter()
 * obj.postTweet(userId,tweetId)
 * var param_2 = obj.getNewsFeed(userId)
 * obj.follow(followerId,followeeId)
 * obj.unfollow(followerId,followeeId)
 */
module.exports = Twitter;

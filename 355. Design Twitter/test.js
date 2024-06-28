const Twitter = require("./index");

test("should pass the test cases", () => {
  let twitter1 = new Twitter();
  twitter1.postTweet(1, 5);
  expect(twitter1.getNewsFeed(1)).toEqual([5]);
  twitter1.follow(1, 2);
  twitter1.postTweet(2, 6);
  expect(twitter1.getNewsFeed(1)).toEqual([6, 5]);
  twitter1.unfollow(1, 2);
  expect(twitter1.getNewsFeed(1)).toEqual([5]);
});

/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */
// Fake data taken from initial-tweets.json
$(document).ready(function() {
  $("#tweets").append("test");
  const t = {
    "user": {
      "name": "Newton",
      "avatars": "https://i.imgur.com/73hZDYK.png",
        "handle": "@SirIsaac"
      },
    "content": {
        "text": "If I have seen further it is by standing on the shoulders of giants"
      },
    "created_at": 1461116232227
  }
  
  const data = [
    {
      "user": {
        "name": "Newton",
        "avatars": "https://i.imgur.com/73hZDYK.png",
        "handle": "@SirIsaac"
      },
      "content": {
        "text": "If I have seen further it is by standing on the shoulders of giants"
      },
      "created_at": 1461116232227
    },
    {
      "user": {
        "name": "Descartes",
        "avatars": "https://i.imgur.com/nlhLi3I.png",
        "handle": "@rd" },
      "content": {
        "text": "Je pense , donc je suis"
      },
      "created_at": 1461113959088
    }
  ]


const createTweetElement = function(data) {
  const $tweet = $(`<article class="tweet">
  <div class="tweet-user">
    <img src=${data.user.avatars}>
  </div>
  <h5>${data.user.name}</h5>
  <h6>${data.user.handle}</h6>
  <div id="tweet-text">
  ${data.content.text}
  </div>
  <footer>
    <span>${data.created_at}</span>
    <div class="icon">
    <i class="fas fa-flag"></i>
      <i class="fas fa-retweet"></i>
      <i class="fas fa-heart"></i>
    </footer>
    </article>`);
  return $tweet;
}


const renderTweets = function(tweets, section) {
  for ( let t of tweets) {
    let $tweet = createTweetElement(t);
    section.append($tweet);

  }
}
renderTweets(data, $('#tweets'));
});

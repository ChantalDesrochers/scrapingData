var request = require('request');
var cheerio = require('cheerio');

// request('https://www.yelp.com/biz/pai-northern-thai-kitchen-toronto-5', function (error, response, html) {
//   if(!error && response.statusCode == 200) {
//     // console.log(html)
//     var $ = cheerio.load(html);
//     $('.review-content p').each(function(i, el) {
//       var review = $(this);
//       console.log(review.text());
//     })
//   }
// });

// request('https://www.yelp.com/biz/pai-northern-thai-kitchen-toronto-5', function (error, response, html) {
//   if(!error && response.statusCode == 200) {
//     // console.log(html)
//     var $ = cheerio.load(html);
//     $('.review-content').each(function(i, el) {
//       var review = $(this).children('p');
//       // console.log(`Reviews: ${review.text()}`);
//       // var rating = $(this).children('div.i-stars')
//       // console.log(rati)
//     })
//   }
// });

request('https://www.zomato.com/windsor-on/the-penalty-box-windsor', function (error, response, html) {
  if(!error && response.statusCode == 200) {
    //add user-agent that looks like a browser
    // console.log(html)
    // var $ = cheerio.load(html);
    console.log(html);
    // $('div.rev-text').each(function(i, el) {
    //   var review = $(this);
    //   console.log(review.text());
      // console.log(`Reviews: ${review.text()}`);
      // var rating = $(this).children('div.i-stars')
      // console.log(rati)
    // })
  }
});

// // $('span.zgt-google-review-text')
// // // $('div.rev-text').text()
// // span zgt-google-review-text

// // .parent(".biz rating").children("i-stars")
// // //
// // div.rev-text mbot0
// div aria-label="Rated 4.5"
// div ttuper
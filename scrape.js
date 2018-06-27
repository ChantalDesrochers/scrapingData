var request = require('request');
var cheerio = require('cheerio');


// Yelp scrape - simple
request('https://www.yelp.com/biz/pai-northern-thai-kitchen-toronto-5', function (error, response, html) {
  if(!error && response.statusCode == 200) {
    var $ = cheerio.load(html);
    $('.review-content p').each(function(i, el) {
      var review = $(this);
      console.log(review.text());
    })
  }
});

// Yelp scrape - into array
request('https://www.yelp.com/biz/pai-northern-thai-kitchen-toronto-5', function (error, response, html) {
  if(!error && response.statusCode == 200) {
    var $ = cheerio.load(html);
    var reviews = []
    $('.review-content p').each(function(i, el) {
      var review = $(this).text();
      reviews.push(review)
      console.log(reviews);
    })
  }
});


//getting ratings but in a different array
request('https://www.yelp.com/biz/pai-northern-thai-kitchen-toronto-5', function (error, response, html) {
  if(!error && response.statusCode == 200) {
    // console.log(html)
    var $ = cheerio.load(html);
    ratings = []
    $('meta[itemprop="ratingValue"]').each(function(i, el) {
      // var review = $(this).children('p');
      // console.log(`Reviews: ${review.text()}`);
      // var rating = $(this).children('.div.biz-rating').find('div.i-stars')
      $('meta[itemprop="ratingValue"]').attr('content')
      var rating = $(this).attr('content')
      ratings.push(rating)

      // console.log(rating)
    })
    console.log(ratings)
  }
});



tripadvisor scrape - reviews
request('https://www.tripadvisor.ca/Restaurant_Review-g155019-d5289181-Reviews-Pai_Northern_Thai_Kitchen-Toronto_Ontario.html', function (error, response, html) {
  if(!error && response.statusCode == 200) {
    var $ = cheerio.load(html);
    var reviews = []
    $('p.partial_entry').each(function(i, el) {
      var review = $(this).text();
      reviews.push(review);
      // console.log(reviews);
    })
    console.log(reviews.length)
      console.log(reviews[0])
      console.log(reviews[1])
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
var request = require('request');
var cheerio = require('cheerio');


// Yelp scrape - simple
// request('https://www.yelp.com/biz/pai-northern-thai-kitchen-toronto-5', function (error, response, html) {
//   if(!error && response.statusCode == 200) {
//     var $ = cheerio.load(html);
//     $('.review-content p').each(function(i, el) {
//       var review = $(this);
//       console.log(review.text());
//     })
//   }
// });

// // Yelp scrape - into array
// request('https://www.yelp.com/biz/pai-northern-thai-kitchen-toronto-5', function (error, response, html) {
//   if(!error && response.statusCode == 200) {
//     var $ = cheerio.load(html);
//     var reviews = []
//     $('.review-content p').each(function(i, el) {
//       var review = $(this).text();
//       reviews.push(review)
//       console.log(reviews);
//     })
//   }
// });


//getting ratings but in a different array
// request('https://www.yelp.com/biz/pai-northern-thai-kitchen-toronto-5', function (error, response, html) {
//   if(!error && response.statusCode == 200) {
//     // console.log(html)
//     var $ = cheerio.load(html);
//     ratings = []
//     $('meta[itemprop="ratingValue"]').each(function(i, el) {
//       // var review = $(this).children('p');
//       // console.log(`Reviews: ${review.text()}`);
//       // var rating = $(this).children('.div.biz-rating').find('div.i-stars')
//       $('meta[itemprop="ratingValue"]').attr('content')
//       var rating = $(this).attr('content')
//       ratings.push(rating)

//       // console.log(rating)
//     })
//     console.log(ratings)
//   }
// })

// traversing the dom using schema instead! it's better
// reviews stored in array of objects - need to parse the descriptions on conjunctions
// request('https://www.yelp.com/biz/pai-northern-thai-kitchen-toronto-5', function (error, response, html) {
//   if(!error && response.statusCode == 200) {
//     var $ = cheerio.load(html);
//     var reviewsArray = []
//     $('div[itemprop="review"]').each(function(i, el) {
//       var ratingv = $(this).find('meta[itemprop="ratingValue"]').attr('content')
//       var authorv = $(this).find('meta[itemprop="author"]').attr('content')
//       var descriptionv = $(this).find('p[itemprop="description"]').text()
//       var datePublishedv = $(this).find('meta[itemprop="datePublished"]').attr('content')
//       var review = {
//         rating: ratingv,
//         author: authorv,
//         description: descriptionv,
//         datePublished: datePublishedv
//       }
//       reviewsArray.push(review)
//     })
//     console.log(reviewsArray)
//   }
// })


// tripadvisor scrape - reviews
// request('https://www.tripadvisor.ca/Restaurant_Review-g155019-d5289181-Reviews-Pai_Northern_Thai_Kitchen-Toronto_Ontario.html', function (error, response, html) {
//   if(!error && response.statusCode == 200) {
//     var $ = cheerio.load(html);
//     var reviews = []
//     $('p.partial_entry').each(function(i, el) {
//       var review = $(this).text();
//       reviews.push(review);
//       // console.log(reviews);
//     })
//     console.log(reviews.length)
//       console.log(reviews[0])
//       console.log(reviews[1])
//   }
// });

//tripadvisor scrape - ratingDate
// request('https://www.tripadvisor.ca/Restaurant_Review-g155019-d5289181-Reviews-Pai_Northern_Thai_Kitchen-Toronto_Ontario.html', function (error, response, html) {
//   if(!error && response.statusCode == 200) {
//     var $ = cheerio.load(html);
//     var reviews = []
//     $('.ratingDate').each(function(i, el) {
//       var review = $(this).text();
//       reviews.push(review);
//       // console.log(reviews);
//     })
//    console.log(reviews.length)
//    console.log(reviews)
//   }
// });

// tripadvisor scrape - rating --> stored in a class and image alt... can you access?
// tripadvisor scrape - ratingDate
// request('https://www.tripadvisor.ca/Restaurant_Review-g155019-d5289181-Reviews-Pai_Northern_Thai_Kitchen-Toronto_Ontario.html', function (error, response, html) {
//   if(!error && response.statusCode == 200) {
//     var $ = cheerio.load(html);
//     var reviews = []
//     $('.ui_bubble_rating').each(function(i, el) {

//       var review = $(this).attr('class')
//       console.log(review)
//       reviews.push(review);
//       // console.log(reviews);
//     })
//    console.log(reviews.length)
//    // console.log(reviews)
//   }
// });

//all together - issues... full review
request('https://www.tripadvisor.ca/Restaurant_Review-g155019-d5289181-Reviews-Pai_Northern_Thai_Kitchen-Toronto_Ontario.html', function (error, response, html) {
  if(!error && response.statusCode == 200) {
    var $ = cheerio.load(html);
    var reviewsArray = []
    var todayDate = new Date().toJSON().slice(0,10)
    console.log(todayDate)
    $('.review').each(function(i, el) {
      var reviewv = $(this).find('p.partial_entry').text()
      var ratingv = $(this).find('.ui_bubble_rating').attr('class')
      // var datev = $(this).find('.ratingDate').text()
      var datev = $(this).find('.ratingDate').attr('title')
      var namev = $(this).find('.scrname').text()
      review = {
        rating: ratingv,
        author: namev,
        description: reviewv,
        datePublished: datev
      }
      reviewsArray.push(review)
    })
   console.log(reviewsArray)
  }
});




// p3 https://www.tripadvisor.ca/Restaurant_Review-g155019-d5289181-Reviews-or30-Pai_Northern_Thai_Kitchen-Toronto_Ontario.html
// p3 https://www.tripadvisor.ca/Restaurant_Review-g155019-d5289181-Reviews-or20-Pai_Northern_Thai_Kitchen-Toronto_Ontario.html
// p2 https://www.tripadvisor.ca/Restaurant_Review-g155019-d5289181-Reviews-or10-Pai_Northern_Thai_Kitchen-Toronto_Ontario.html
// https://www.tripadvisor.ca/Restaurant_Review-g155019-d5289181-Reviews-Pai_Northern_Thai_Kitchen-Toronto_Ontario.html

// options/idea for scraping mulitple pages... function for generating the pages based on input
// add those items to an object or array








/// zomato - use nightmare .... simulates what a browser does... automated browser
// populating page dynamically, can use the wait..


// class review...



// // $('span.zgt-google-review-text')
// // // $('div.rev-text').text()
// // span zgt-google-review-text

// // .parent(".biz rating").children("i-stars")
// // //
// // div.rev-text mbot0
// div aria-label="Rated 4.5"
// div ttuper
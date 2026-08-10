// MongoDB Playground
// Use Ctrl+Space inside a snippet or a string literal to trigger completions.

// The current database to use.
use('locker');

// Create a new document in the collection.
db.getCollection('luser').insertOne({
    "rating": "blahblah",
    "lastLogin": {
      "$timestamp": {
        "t": 0,
        "i": 0
      },
    "pgpKey": "nnnnn",
    "userId": "rjallen",
    "nickName": "string",
    "password": "string",
    "pinCode": 0,
    "masterId": 99999999,
    "pin_code": 202020202,
    "personalStateMent": "bblah"
    },
    "first_review": {
      "$date": "2016-01-03T05:00:00.000Z"
    },
    "last_review": {
      "$timestamp": {
        "t": 0,
        "i": 0
      }
    },
    "number_of_reviews": 51,
    "review_scores": {
      "review_scores_accuracy": 9,
      "review_scores_cleanliness": 9,
      "review_scores_checkin": 10,
      "review_scores_communication": 10,
      "review_scores_location": 10,
      "review_scores_value": 9,
      "review_scores_rating": 89
    },
    "reviews": [
      {
        "_id": "362865132",
        "date": {
          "$date": "2018-12-27T05:00:00.000Z"
        },
        "listing_id": "10006546",
        "reviewer_id": "208880077",
        "reviewer_name": "Thomas",
        "comments": "Very helpful hosts. Cooked traditional..."
      },
      {
        "_id": "364728730",
        "date": {
          "$date": "2018-12-31T05:00:00.000Z"
        },
        "listing_id": "10006546",
        "reviewer_id": "91827533",
        "reviewer_name": "Mr",
        "comments": "Ana & Goncalo were great on communication..."
      },
      {
        "_id": "403055315",
        "date": {
          "$date": "2019-01-20T05:00:00.000Z"
        },
        "listing_id": "10006546",
        "reviewer_id": "15138940",
        "reviewer_name": "Milo",
        "comments": "The house was extremely well located..."
      }
    ],
    "images": {
      "thumbnail_url": "ks nfl",
      "medium_url": "nruls",
      "picture_url": "https://a0.muscache.com/im/pictures/e83e702f-ef49-40fb-8fa0-6512d7e26e9b.jpg?aki_policy=large",
      "xl_picture_url": "lslsls"
    }
  });

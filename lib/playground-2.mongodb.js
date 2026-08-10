// MongoDB Playground
// Use Ctrl+Space inside a snippet or a string literal to trigger completions.

// The current database to use.
use('locker');

// Create a new document in the collection.
db.getCollection('luser').insertOne({

});
// MongoDB Playground
// Use Ctrl+Space inside a snippet or a string literal to trigger completions.

// The current database to use.
use('locker');

// Create a new document in the collection.
db.getCollection('luser').insertOne(
    {
        "_id": {
        "userId": "rjallen",
        "username": "mynickName",
        "password": "b'$7$C6..../....VPPnFUQ37jURzlkOa3vWoUPm75iADtO8LHDfyWk6JF4$q2G3OWgKltZdvvpYCuj85RASfoPp/bk44wdL6zUic5/'",
        "pin_code": "b'$argon2id$v=19$m=65536,t=2,p=1$nsO4KW7E2+IAlJ8bgacaRg$Gv5JxI0/yf8Oc95XsKyUsi4zOxy8teBa6ZzP+2RC7NI'",
        "pgp_key": "nkjnk"
        },
        "images": {
        "thumbnail_url": "ks nfl",
        "medium_url": "nruls",
        "picture_url": "https://a0.muscache.com/im/pictures/e83e702f-ef49-40fb-8fa0-6512d7e26e9b.jpg?aki_policy=large",
        "xl_picture_url": "lslsls"
        },
        "rating": {
          "$date": {
            "$numberLong": "1550293200000"
          }
        },
        "lastLogin": {
          "$date": {
            "$numberLong": "1550293200000"
          }
        },
        "first_review": {
          "$date": {
            "$numberLong": "1451797200000"
          }
        },
        "last_review": {
          "$date": {
            "$numberLong": "1547960400000"
          }
        },
        "number_of_reviews": {
          "$numberInt": "51"
        },
        "review_scores": {
          "review_scores_accuracy": {
            "$numberInt": "9"
          },
          "review_scores_cleanliness": {
            "$numberInt": "9"
          },
          "review_scores_checkin": {
            "$numberInt": "10"
          },
          "review_scores_communication": {
            "$numberInt": "10"
          },
          "review_scores_location": {
            "$numberInt": "10"
          },
          "review_scores_value": {
            "$numberInt": "9"
          },
          "review_scores_rating": {
            "$numberInt": "89"
          }
        },
          "reviews": [
          {
            "_id": "362865132",
            "date": {
              "$date": {
                "$numberLong": "1545886800000"
              }
            },
            "listing_id": "10006546",
            "reviewer_id": "208880077",
            "reviewer_name": "Thomas",
            "comments": "Very helpful hosts. Cooked traditional..."
          },
          {
            "_id": "364728730",
            "date": {
              "$date": {
                "$numberLong": "1546232400000"
              }
            },
            "listing_id": "10006546",
            "reviewer_id": "91827533",
            "reviewer_name": "Mr",
            "comments": "Ana & Goncalo were great on communication..."
          },
          {
            "_id": "403055315",
            "date": {
              "$date": {
                "$numberLong": "1547960400000"
              }
            },
            "listing_id": "10006546",
            "reviewer_id": "15138940",
            "reviewer_name": "Milo",
            "comments": "The house was extremely well located..."
          }
        ]
      }

);

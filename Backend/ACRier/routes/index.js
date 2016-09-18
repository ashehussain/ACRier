var express = require('express');
var router = express.Router();

/*******************************************************
                  PAGE ROUTING METHODS
********************************************************/
router.get('/', function(req, res, next) {
  res.sendfile('./public/welcome.html');
});

router.get('/registration', function(req, res, next) {
  res.sendfile('./public/login.html');
});

/*******************************************************
                  GET METHODS
********************************************************/

//------------GET USER LIST-------------------
router.get('/userlist', function(req, res) {
    var db = req.db;
    var collection = db.get('usercollection');
    collection.find({},{},function(e,docs){
        //console.log(docs);
        var start = Date.now();
        res.write(JSON.stringify(docs));
        console.log('Took', Date.now() - start, 'ms');
    });
});



/*******************************************************
                  POST METHODS
********************************************************/

//-------------ADD USER-----------------------
router.post('/addUser', function(req, res) {

    console.log("Received request to add user");
    // Set our internal DB variable
    var db = req.db;

    // Get our form values. These rely on the "name" attributes
    var profileType = req.body.profileType;
    //console.log(profileType);
    var userName = req.body.userName;
    //console.log(userName);
    var firstName = req.body.name.givenName;
    //console.log(firstName);
    var lastName = req.body.name.familyName;
    //console.log(lastName);
    var accountStatus = req.body.accountStatus;
    //console.log(accountStatus);
    var password = req.body.password;
    //console.log(password);
    var streetAddress = req.body.address.streetAddress;
    //console.log(streetAddress);
    var city = req.body.address.city;
    //console.log(city);
    var state = req.body.address.state;
    //console.log(state);
    var zipCode = req.body.address.zipCode;
    //console.log(zipCode);

    //console.log("Parsed Request Parameters");

    /*var hashed;
    bcrypt.hash(password, null, null, function(err, hash) {
        console.log("The hashed password is : " + hash);
        hashed = hash;
    });

    console.log("Hashed password : " + hashed);*/

    // Set our collection
    var collection = db.get('usercollection');

    console.log("Received user collection");

    // Submit to the DB
    collection.insert({
        "username" : userName,
        "profileType" : profileType,
        "name" : { "givenName" : firstName, "familyName" : lastName },
        "accountStatus" : "Enabled",
        "password" : password,
        "address" :
         { "streetAddress" : streetAddress,
           "city" : city,
           "state" : state,
           "zipCode" : zipCode }
    }, function (err, doc) {
        if (err) {
            // If it failed, return error
            res.send("There was a problem adding the information to the database.");
        }
        else {
            // And forward to success page
            console.log("Database insertion completed");
            res.redirect("./public/welcome.html");
        }
    });
});

module.exports = router;

var express = require('express');
var router = express.Router();

/*******************************************************
                  PAGE ROUTING METHODS
********************************************************/
router.get('/', function(req, res, next) {
  res.sendfile('./public/index.html');
});

router.get('/registration', function(req, res, next) {
  res.sendfile('./public/registration.html');
});

router.get('/projectmanagement', function(req, res, next) {
  res.sendfile('./public/project-type.html');
});

/*******************************************************
                  GET METHODS
********************************************************/

//------------GET USER LIST-------------------
router.get('/userlist', function(req, res) {
    var db = req.db;
    var collection = db.get('usercollection');
    /*console.log("request for users");
    collection.find({}, {}).toArray(function(err, docs) {
      if (!err) {
        console.log(docs);
        var intCount = docs.length;
        if (intCount > 0) {
        var strJson = "";
        for (var i = 0; i < intCount;) {
            strJson += '{"users":"' + docs[i].userName + '"}'
            i = i + 1;
            if (i < intCount) {
                strJson += ',';
              }
            }
            callback("", JSON.parse(strJson));
          }
          } else {
            onErr(err, callback);
          }
        }); //end collection.find */

    collection.find({},{},function(e,docs){
        console.log(docs);
        var start = Date.now();
        //docs.stream().pipe(JSONStream.stringify()).pipe(res);
        res.write(JSON.stringify(docs));
        console.log('Took', Date.now() - start, 'ms');
    });
});

//------------GET PERMISSION TYPES-------------------
router.get('/permissionTypes', function(req, res) {
    var db = req.db;
    var collection = db.get('permissionscollection');
    collection.find({},{},function(e,docs){
        //console.log(docs);
        //var start = Date.now();
        res.write(JSON.stringify(docs));
        //console.log('Took', Date.now() - start, 'ms');
    });
});

/*******************************************************
                  POST METHODS
********************************************************/

//-------------LOG IN-------------------------
router.post('/login', function(req, res) {

    console.log("Received request to login");
    // Set our internal DB variable
    var db = req.db;

    var userName = req.body.userName;
    var password = req.body.password;

    var collection = db.get('usercollection');
    collection.find({"userName" : userName, "password" : password},{ userName : 1},function(e,docs){
      console.log(docs)
      if(docs > 0)
      {
        res.send(docs);
      }
    });
  });

//-------------ADD USER-----------------------
router.post('/addUser', function(req, res) {

    console.log("Received request to add user");
    // Set our internal DB variable
    var db = req.db;

    // Get our form values. These rely on the "name" attributes
    var profileType = req.body.profileType;
    //console.log(profileType);
    var userName = req.body.username;
    //console.log(userName);
    var firstName = req.body.name;
    //console.log(firstName);
    var lastName = req.body.lastName;
    //console.log(lastName);
    var password = req.body.password;
    //console.log(password);
    var streetAddress = req.body.street1;
    //console.log(streetAddress);
    var city = req.body.city;
    //console.log(city);
    var state = req.body.state;
    //console.log(state);
    var zipCode = req.body.zipcode;
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
        "userName" : userName,
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

//-------------ADD PROJECT----------------------
router.post('/addProject', function(req, res) {

    console.log("Received request to add project");
    // Set our internal DB variable
    var db = req.db;

    var userId = req.body.userId;
    console.log(userId);
    var name = req.body.name;
    console.log(name);
    /*for (var location in req.body) {
      if (req.body.hasOwnProperty(location)) {
        var temp = req.body[location];
        //stringInput += ' "name" '+ name + '",';
        console.log(temp);
      }
    } */
    var projectType = req.body.projectType;
    console.log(projectType);
    var programType = req.body.programType;
    console.log(programType);
    var methodology = req.body.methodology;
    console.log(methodology);
    var projectStartDate = req.body.name.projectStartDate;
    console.log(projectStartDate);

    // Set our collection
    var collection = db.get('projectscollection');

    console.log("Received project collection");

    // Submit to the DB
    collection.insert({
        "userId" : userId,
        "name" : name,
        "projectType" : projectType,
        "methodology" : methodology,
        "programType" : programType,
        "projectStartDate" : projectStartDate
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

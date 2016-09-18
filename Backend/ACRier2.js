//Lets require/import the HTTP module
var http = require('http');
var dispatcher = require('httpdispatcher');

//Lets define a port we want to listen to
const PORT=8080;

//We need a function which handles requests and send response
//Lets use our dispatcher
function handleRequest(request, response){
    try {
        //log the request on console
        console.log(request.url);
        //Disptach
        dispatcher.dispatch(request, response);
    } catch(err) {
        console.log(err);
    }
}

//For all your static (js/css/images/etc.) set the directory name (relative path).
dispatcher.setStatic('resources');

/*
Get User Projects call
Params : userID
Return Params : Json array of the user Projects
User Projects Json:



*/
dispatcher.onGet("/getUserProjects", function(req, res) {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('Page One');
});

//Get Project Details
dispatcher.onGet("/getProjectDetails", function(req, res) {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('Page One');
});


//**********************************************************
//                        POST REQUESTS!
//**********************************************************

/*Create User

User Json
[{
	"userName": "liz@example.com",
  "profileType":"Verifier",
	"name": {
		"givenName": "Elizabeth",
		"familyName": "Smith"
	},
	"accountStatus": "Enabled",
	"password": "password123",
	"address": {
		"streetAddress": "1600 Amphitheatre Parkway",
		"city": "Mountain View",
		"state": "CA",
		"zipCode": "94043"
	}
},
{
	"userName": "Asheik91h@gmail.com",
  "profileType": "ProjectDev",
	"name": {
		"givenName": "Asheik",
		"familyName": "Hussain"
	},
	"accountStatus": "Enabled",
	"password": "password123",
	"address": {
		"streetAddress": "7809 Liberty Ave",
		"city": "Ozone Park",
		"state": "NY",
		"zipCode": "11417"
	}
}]

*/
dispatcher.onPost("createUser", function(req, res) {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('Got Post Data');
});

/**

**/

dispatcher.onPost("editUser", function(req, res) {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('Got Post Data');
});

dispatcher.onPost("createProject", function(req, res) {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('Got Post Data');
});

dispatcher.onPost("deleteProject", function(req, res) {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('Got Post Data');
});

dispatcher.onPost("editProject", function(req, res) {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('Got Post Data');
});

//carbon emission category (Rice)

dispatcher.onPost("createCarbonCatergory", function(req, res) {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('Got Post Data');
});

//upload image for field flooding category

//upload image for

//carbon emission upload
dispatcher.onPost("uploadPicture", function(req, res) {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('Got Post Data');
});

//Create a server
var server = http.createServer(handleRequest);

//Lets start our server
server.listen(PORT, function(){
    //Callback triggered when server is successfully listening. Hurray!
    console.log("Server listening on: http://localhost:%s", PORT);
});

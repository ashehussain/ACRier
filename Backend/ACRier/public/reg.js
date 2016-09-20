$("#contactform").submit(function(event){
	event.preventDefault();
	//console.log($(this).serializeArray());
	var type = $('#type').val()
	//console.log(type)
	var temp = $(this).serializeArray().map(function(element){
		return '"' + [element.name] + '"' + ':' + '"' + element.value + '"'	
	})

	temp = temp.join(',');
	temp = '{ "profileType": '+ '"'+ type + '"'+ ',' +temp + '}'
	console.log(temp)
	// console.log(temp)
	// var json = {
	// 	"userName " : temp[10].value,
	// 	"profileType" : type,
	// 	"name" : {
	// 		"firstName": temp[0].value,
	// 		"lastName": temp[1].value
	// 	},//end of name
	// 	"password": temp[11].value,
	// 	"address": {
	// 		"streetAddress": temp[5].value,
	// 		"city": temp[7].value,
	// 		"state": temp[8].vaule,
	// 		"zipCode": temp[9].value
	// 	} //end of address

	// }// end of json var
	// console.log(json);




// var name = '{
// 			"firstName" : "' + temp[0].value + '",
// 			"lastName":  temp[1].value
// 		}''
// var address ={
// 		"streetAddress": temp[5].value,
// 			"city": temp[7].value,
// 			"state": temp[8].vaule,
// 			"zipCode": temp[9].value
// }





// json = JSON.stringify('{ "userName" : "'+ temp[10].value + '", '+
// 		' "profileType" : "' + type + '",
// 		"name" : {
// 			"firstName": temp[0].value,
// 			"lastName": temp[1].value
// 		},//end of name
// 		"password": temp[11].value,
// 		"address": {
// 			"streetAddress": temp[5].value,
// 			"city": temp[7].value,
// 			"state": temp[8].vaule,
// 			"zipCode": temp[9].value
// 		} //end of address)
// 	})
//console.log(json);
})// end of submit




 
// {
//    "userName": "liz@example.com",
//    "profileType": "Verifier",
//    "name": {
//        "firstName": "Elizabeth",
//        "lastName": "Smith"
//    },
//    "password": "password123",
//    "address": {
//        "streetAddress": "1600 Amphitheatre Parkway",
//        "city": "Mountain View",
//        "state": "CA",
//        "zipCode": "94043"
//    }
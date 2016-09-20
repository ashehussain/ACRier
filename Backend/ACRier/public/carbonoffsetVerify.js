$('#form').submit(function(event){
	event.preventDefault();
	var temp = $(this).serializeArray().map(function(element){
		return '"' + [element.name] + '"' + ':' + '"' + element.value + '"'
	});	
	temp = temp.join(",");
	temp = '{"verification":{' + temp + '}}';
	console.log(temp);
});


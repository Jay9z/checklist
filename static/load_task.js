	function updateDisplay(event)
	{
	var file= event.target.files[0];
	var reader = new FileReader();
	reader.onload = function(event){
	var allText =event.target.result;
	var allTextLines = allText.split(/\r\n|\n/);
	for (var i=0; i<allTextLines.length;i++)
	{
	line = allTextLines[i].split(/\t/);
	
	$('#'+line[0]).attr('class',line[2]+" cell");
	}
	};
	reader.readAsText(file);			
	}

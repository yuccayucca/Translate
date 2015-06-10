//Yulia Ladutko
//yulialadutko@my.smccd.edu
//CIS 114 OL
//translate.js
//Chapter 14
//Final
//05/25/2015

$(document).ready(function(){
    $('#translate').click(translate);
});

function translate(){
	var APIkey = "trnsl.1.1.20150522T024507Z.9cc5c6bfd23d80f2.d4a8c84e45565c18c6821a7f1275f75427b3032c";
	var language = $('#language').val();
	if (language == "no"){
		alert("Please pick a language");
	}else{
		var translateText = $("#en-text").val().replace(" ","+");
		$.getJSON("https://translate.yandex.net/api/v1.5/tr.json/translate?key="+APIkey+"&lang=en-"+language+"&text="+ translateText +"&callback=?", function(data){
			$('#output').empty();
			$('#output').html(data.text[0]);
		});
	}
}
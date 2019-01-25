var fs = require('fs');
var https = require('https');
fs.writeFile(__dirname + "index.html","<h1>HTML is great !</h1>",function(error){
	if(error){
     return console.log(error);
	} else {
		return console.log("Congratulations buddy !");
	}
});

var myPhotoLocation ='https://mondrian.mashable.com/wp-content%252Fuploads%252F2013%252F06%252FHowAboutWe-Office.jpg%252Ffit-in__1200x9600.jpg?signature=TLzth323k__BYUl0s3jHReJJoyA=&source=http%3A%2F%2Fmashable.com'
https.get(myPhotoLocation,function(response){
	response.pipe(fs.createWriteStream(__dirname+"teraLabs.jpg"));
});

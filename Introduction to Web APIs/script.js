//Declares variable to the XML HTTP Request
var request = new XMLHttpRequest(); 

//Open request with de endpoint
request.open('GET', "http://hplussport.com/api/products?order=name"); 

//Function to do something with de API response                                                           
request.onload = function(){ 
    var response = request.response;
    
    //Converts the response that comes in string to JSON Object
    var parsedData = JSON.parse(response); 
    console.log(parsedData);

    

    for(item in parsedData){
        //Print the name property of all objects
        var name = parsedData[item].name;

        //Show the name property in screen
        var products = document.createElement('li');
        products.innerHTML = name;
        document.body.appendChild(products);

        ////Print the image property of all objects

        var imageURL = parsedData[item].image;
        var images = document.createElement('img');
        images.setAttribute('src', imageURL);
        document.body.appendChild(images);

    }
} 
request.send();

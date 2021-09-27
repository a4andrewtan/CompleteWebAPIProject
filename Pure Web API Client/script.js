var quotes_array = [];  // create a variable that is an empty array
var quoteContainer = document.getElementById('quote-container'); // let variable quoteContainer be the DIV
var baseURL = "http://127.0.0.1:8080/"


function getAllQuotations() {
  var request = new XMLHttpRequest();
  request.open('GET', baseURL + "/quotes", true);
  quoteContainer.innerHTML = "";

  //This function will be called when data returns from the web api
  request.onload = function () {
    //get all the records into our quotes_array array
    
    quotes_array = JSON.parse(request.responseText); //put the respond into the array
    quotes_array = quotes_array.results;
    for (var count = 0; count < quotes_array.length; count++) { //Iterate the item in the array one by one
      //Compose string with the data and insert into the DIV after each iteration
      var newQuotation = '<div style="float:left">' + (count + 1) + ') ' + quotes_array[count].quotation + '</div><br> \
                            <div style="float:left">' + quotes_array[count].author + '</div><br><br>';
      quoteContainer.insertAdjacentHTML('beforeend', newQuotation);

    }

  };

  //This command starts the calling of the quotes api
  request.send();
}

function getRandomQuotation() {
  var request = new XMLHttpRequest();
  request.open('GET', baseURL + "/random", true);
  quoteContainer.innerHTML = "";
  request.onload = function () {
    quotes_array = JSON.parse(request.responseText);
    quotes_array = quotes_array.results;

    //Use count as zero because the array only contains one item which is the returned random item
    var newQuotation = '<div style="float:left">' + quotes_array[0].quotation + '</div><br> \
      <div style="float:left">' + quotes_array[0].author + '</div><br><br>';
    quoteContainer.insertAdjacentHTML('beforeend', newQuotation);


  };
  //This command starts the calling of the movies web api
  request.send();
}

function resetQuotations() {
  var request = new XMLHttpRequest();
  request.open('DELETE', baseURL + "/quotes", true);
  //To let server know that our data is of json format
  request.setRequestHeader("Content-Type", "application/json");
  //creating the json object so that it can be sent as a new quotation
  let pwd = prompt("Please enter Password", "password");
  let text;
  if (pwd == null || pwd == "") {
    text = "";
  } else {
    text = pwd;

    var quotes = new Object();
    quotes.password = text; // get Value from popup prompt
    //This function will be called when data returns from the web api
    request.onload = function () {
      //just do a simple alert as a nice feedback

      if (request.responseText == '"fail"') {

        alert("Nice try but Wrong. Reset Failed");
      }
      else {
        quoteContainer.innerHTML = "";
        alert("Quotation reset");
      }

    };
    //This command starts the calling of the quotes web api and also sending the json object along
    request.send(JSON.stringify(quotes));
  }
}

function addQuotation() {
  var request = new XMLHttpRequest();
  request.open('POST', baseURL + "/quotes", true);
  //To let server know that our data is of json format
  request.setRequestHeader("Content-Type", "application/json");
  //creating the json object so that it can be sent as a new quotation
  var quotes = new Object();
  quotes.author = document.getElementById("author").value; // get Value from HTML input text
  quotes.quotation = document.getElementById("quotation").value; // get Value from HTML input text
  //This function will be called when data returns from the web api
  
  request.onload = function () {
    //just do a simple alert as a nice feedback
    alert("New Quotation added");


  };
  //This command starts the calling of the quotes web api and also sending the json object along
  if (quotes.author != "" && quotes.quotation != ""){
  request.send(JSON.stringify(quotes));
  }else{
    alert("Come on! Type something");
  }
}



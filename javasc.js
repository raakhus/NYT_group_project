

    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
    // <script type="text/javascript">
      
      function displayMovieInfo() {

       
        var queryURL = "http://api.nytimes.com/svc/search/v1/article?format=json&query="+search+"&"+records+"&?begin_date="+userinput3+"?end_date="+userinput4+"&api -key=3ba8c2a2ec9f4a0e9f4f511f3b88e7fe";
        var search = "Obama"      
var records = 5
var startyear = 2005
var endyear = 2018
        // Creates AJAX call for the specific movie button being clicked
        $.ajax({
          url: queryURL,
          method: "GET"
        }).then(function(response) {
          console.log(response);
        //   $('#movies-view').html('<p>Title: '+response.Title+'</p>'+'<p> <img src='+response.Poster+'></p>'+'<p>Plot: '+response.Plot+'</p>'+'<p>Rated: '+response.Rated+'</p>'+'<p>Writer: '+response.Writer+'</p>'+'<p>'+response.Year+'</p>'+'<p>Rating: '+response.imdbRating+'</p>'+'<p>Website: <a href='+response.Website+'>'+response.Website+'</a></p>');


//           // Creates a div to hold the movie
//           // Retrieves the Rating Data
//           // Creates an element to have the rating displayed
//           // Displays the rating
//           // Retrieves the release year
//           // Creates an element to hold the release year
//           // Displays the release year
//           // Retrieves the plot
//           // Creates an element to hold the plot
//           // Appends the plot
//           // Creates an element to hold the image
//           // Appends the image
//           // Puts the entire Movie above the previous movies.
//         });

//       }

//       // Function for displaying movie data
//       function renderButtons() {

//         // Deletes the movies prior to adding new movies
//         // (this is necessary otherwise you will have repeat buttons)
//         $("#buttons-view").empty();
//         // Loops through the array of movies
//         for (var i = 0; i < movies.length; i++) {

//           // Then dynamicaly generates buttons for each movie in the array
//           // This code $("<button>") is all jQuery needs to create the beginning and end tag. (<button></button>)
//           var a = $("<button>");
//           // Adds a class of movie to our button
//           a.addClass("movie");
//           // Added a data-attribute
//           a.attr("data-name", movies[i]);
          
//           // Provided the initial button text
//           a.text(movies[i]);
//           // Added the button to the buttons-view div
//           $("#buttons-view").append(a);
//           console.log(a)
//         }
//       }

//       // This function handles events where the add movie button is clicked
//       $("#add-movie").on("click", function(event) {
//         event.preventDefault();
//         // This line of code will grab the input from the textbox
//         var movie = $("#movie-input").val().trim();
//         console.log(movie);

//         // The movie from the textbox is then added to our array
//         movies.push(movie);


//         // Calling renderButtons which handles the processing of our movie array
//         renderButtons();
//       });

//       // Adding click event listeners to all elements with a class of "movie"
//       $(document).on("click", ".movie", displayMovieInfo);

//       // Calling the renderButtons function to display the intial buttons
//       renderButtons();
//     </script>
//   </div>
// </body>

// </html>

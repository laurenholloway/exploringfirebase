//creating global variables for form information
var companyName;
var workCity;
var workState;
var DIRating;
var openComment;


//creating a database instance
var workablyDatabase = firebase.database();

//////////////////////////////////////////////////////////////////////////////////////////////
//WRITING TO THE DATABASE
///////////////////////////////////////////////////////////////////////////////////////////////

//Setting up for each review to have a unique ID
var reviewListRef = workablyDatabase.ref('reviewList');
var newReview = reviewListRef.push();

//This function grabs the review input from the form and assigns the info to global variables
function getFormInputs(){
  companyName = document.getElementById("company").value;
  workCity = document.getElementById("city").value;
  workState = document.getElementById("state").value;
  DIRating = document.getElementById("rating").value;
  openComment = document.getElementById("review").value;

}

//This function is what records the form info/review in the firebase database
function writeReview() {
  getFormInputs();
  newReview.set({
    //reviewID: reviewCounter,
    company: companyName,
    city: workCity,
    state: workState,
    rating: DIRating,
    comment: openComment
  });
}

/////////////////////////////////////////////////////////////////////////////////////////////////
//READING FROM THE DATABASE
/////////////////////////////////////////////////////////////////////////////////////////////////

//grab company names to add them to a list to choose from



/*return firebase.database().ref('reviews/').once('value').then(function(snapshot) {
  var username = snapshot.val().username;
  // ...
});*/

var reviewCounter = 0;
//import firebase from 'firebase';

//var database = firebase.database();

//countReview(reviewCounter) will add 1 each time a review is added to give each review an id#
function countReview(reviewCounter){
  reviewCounter += 1;
}

function getFormInputs(){
  var companyName = document.getElementById("company").value;
  var workCity = document.getElementById("city").value;
  var workState = document.getElementById("state").value;
  var DIRating = document.getElementById("rating").value;
  var openComment = document.getElementById("review").value;
}

function writeReview() {
  getFormInputs();
  alert("Got Form Inputs!");
  firebase.database().ref('reviews/' + reviewID).set({
    reviewID: reviewCounter,
    company: companyName,
    city: workCity,
    state: workState,
    rating: DIRating,
    comment: openComment
  });
  alert("Review Submitted!");
  countReview(reviewCounter);
  alert("Counter Updated: " + reviewCounter);
}

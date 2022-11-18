
let like= document.getElementsById("like-button");
let dislike= document.getElementById("dislike-button");
let textPage= document.getElementById("text-page");

/*view when user click like button*/
let likeFeedback = ()=>{
    like.style.display="none";
    textPage.style.display= "block";
    dislike.style.display= "none"
}
/*view when user click dislike button*/
let dislikeFedback = ()=>{
    like.style.display="none";
    textPage.style.display= "block";
    dislike.style.display= "none"
}
/*no text box when feedback not given yet*/
let requestingFeedback = ()=>{
    like.style.display="block";
    textPage.style.display= "none";
    dislike.style.display= "block"
}
/*developping action when user click on like button*/
/*array of random message*/
const randomLikeMessages= ["Thanks for taking the time to post this! We really appreciate it", "We love hearing from you! Thank you for leaving positive feedback for us", "It is our pleasure to hear your valuable feedback.", "Thank you for reaching out and providing us with valuable feedback.", "We’re so happy to hear from you! Thank you for your valuable feedback."];

/*generate random message from the array*/
function clickedLike (){
    let generator= Math.floor(Math.random()* randomLikeMessages.length);
    return randomLikeMessages[generator];
};
/*message displayed by the function after a click*/
function clickInteraction(){
    like.innerHTML= randomLikeMessages[clickedLike];
    like.style.display= "block";
    like.style.feedback= "green";
};
/*event listener*/
like.onclick= clickInteraction;

/*developping action when user click on dislike button*/
/*array of random message*/
const randomDislikeMessages= ["Thanks for taking the time to post this! We really appreciate it", "We love hearing from you! Thank you for leaving positive feedback for us", "It is our pleasure to hear your valuable feedback.", "Thank you for reaching out and providing us with valuable feedback.", "We’re so happy to hear from you! Thank you for your valuable feedback."];

/*generate random message from the array*/
function clickedLike (){
    let generator= Math.floor(Math.random()* randomLikeMessages.length);
    return randomDislikeMessages[generator];
};
/*message displayed by the function after a click*/
function clickInteraction(){
    dislike.innerHTML= randomLikeMessages[clickedLike];
    dislike.style.display= "block";
    dislike.style.feedback= "green";
};
/*event listener*/
dislike.onclick= clickInteraction;

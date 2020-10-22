( function (window){
var helloSpeaker ={};
var speakWord = "Hello";
//helloSpeaker.name= "john";
helloSpeaker.speak= function (name) {
  console.log(speakWord + " " + name);
};
window.helloSpeaker= helloSpeaker;
//helloSpeaker.speak();

})(window);

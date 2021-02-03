//interface



// navbar 

window.onscroll  = function(){

   
}

window.onload = function(){
    var navbar = document.querySelector(".navBar-prs");
    if (window.scrollY == 0) 
    {
        if(navbar.classList.contains("activebar")){
        navbar.classList.remove("activebar");
        
        }
       
    }else
    {

        navbar.classList.add("activebar");
    }
    
    }


var linkActive = Array.from(document.querySelectorAll(".nav-item .nav-link"));

linkActive.forEach(function(link){

link.onclick = function(){

      linkActive.forEach(rmvactive => rmvactive.classList.remove("active-link"));
      this.classList.add("active-link");

};

});


window.onscroll  = function(){

    var navbar = document.querySelector(".navBar-prs");
    if (window.scrollY === 0) 
    {
        if(navbar.classList.contains("activebar")){
        navbar.classList.remove("activebar");
        
        }
       
    }else
    {

        navbar.classList.add("activebar");
    }

    //animate personal information
    var info = document.querySelector(".personal-information");
    var info1 = document.querySelector(".personal-information .info1");
    var info2 = document.querySelector(".personal-information .info2");
    var info3 = document.querySelector(".personal-information .info3");

    if (window.scrollY  > (info.offsetTop - window.innerHeight)){
        info1.classList.add("open");
        info2.classList.add("open");
        info3.classList.add("open");
    }


    //animate full stack
var full =  document.querySelector(".full-stack-info");
var fullimg = document.querySelector(".full-stack-img");
var fullprg = document.querySelector(".full-stack-prg");

if (window.scrollY  > (full.offsetTop - window.innerHeight)){
    console.log("qknvjkf");
    fullimg.classList.add("open");
    fullprg.classList.add("open");
}

   // animate service 
   var skillsservices = document.querySelector(".skills-services");
   var skills = document.querySelector(".skills-services .skills");
   var services = document.querySelector(".skills-services .services");

   if (window.scrollY  > (skillsservices.offsetTop - window.innerHeight)){
    skills.classList.add("open");
    services.classList.add("open");
}



}


// navbar animation
$('.navbar li a').click(function(event){

event.preventDefault();

   
$("html, body").animate({
    
    scrollTop: $($(this).attr("href")).offset().top - 70

},2000);

});
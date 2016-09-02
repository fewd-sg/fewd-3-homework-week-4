function signup() {
  document.querySelector(".signupform").style.display = 'block';
}

function nosignup() {
  document.querySelector(".signupform").style.display = 'none';
}

function meetmatch() {
  document.querySelector('.meetmatch').style.display = 'block';
}

function nomeetmatch() {
  document.querySelector('.meetmatch').style.display = 'none';
}

function pagenotice() {
  document.querySelector('#pagenotice').style.display = 'block';
}

function nopagenotice() {
  document.querySelector('#pagenotice').style.display = 'none';
}

function signupfunction(){
  signup();
  nomeetmatch();
  nopagenotice(); //added this in case start search is clicked when signup form is shown
}

function meetmatchfunction(){ //can use this function or a href="index.html" to redirect to index.html since "Meet Your Match" is display at index.html
  meetmatch();
  nosignup();
  nopagenotice();
}

function pagenoticefunction(){
  nosignup();
  nomeetmatch();
  pagenotice();
}

jQuery(function($) {
    var open = false;

    function resizeMenu() {
        if ($(this).width() < 480) {
            if (!open) {
                $("nav ul li").fadeOut("slow");
            }
            $(".menu").fadeIn("slow");
        } else if ($(this).width() >= 480) {
            if (!open) {
                $("nav ul li").fadeIn("slow");
            }
            $(".menu").fadeOut("slow");
        }
    }

    function setupMenuButton() {
        $(".menu").click(function(e) {
            e.preventDefault();

            if (open) {
                $("nav ul li").fadeOut();
                $(".menu").toggleClass("selected");
            } else {
                $("nav ul li").fadeIn();
                $(".menu").toggleClass("selected");
            }
            open = !open;
        });
    }


    $(window).resize(resizeMenu);

    resizeMenu();
    setupMenuButton();
});

var documentBody = document.body;


// Setting variables to DOM locations 
var overlayViewer = document.getElementById("revealOverlay_js");

var overlayDisplayer = document.getElementById("olverlay-menu");

// Adding Event Listener to Nav Button to show menu overlay 
overlayViewer.addEventListener("click", overlayCaller);

//Event listen call this function which calls to other functions to show/hide overlay
function overlayCaller() {
	if (overlayViewer.id === "revealOverlay_js") {
		displayOverlay();
		overlayViewer.id = "hideOverlay_js";
	} else if (overlayViewer.id === "hideOverlay_js") {
		hideOverlay();
		overlayViewer.id = "revealOverlay_js";
	}
}

// Called function that shows overlay
function displayOverlay() {
	 
	overlayDisplayer.style.height = "100%"; 
	overlayViewer.classList.toggle("change");
    documentBody.classList.toggle("noscroll");
}

// Called Function that hides overlay
function hideOverlay() {
	 
	overlayDisplayer.style.height = "0%"; 
	overlayViewer.classList.toggle("change");
    documentBody.classList.toggle("noscroll");
	}	


// ======================================================

function openNav() {
    document.getElementById("myNav").style.height = "100%";
}

function closeNav() {
    document.getElementById("myNav").style.height = "0%";
}

// ======================================================

var intervalID = null;

//this is the funcation that will inizalize the auto hide nav bar
function intervalManager() {
    "use strict";
     
    var last = 0,    // The last read top value
    delay = 135, // The delay for the setInterval *was 150*
    threshold = 10;    // The max scroll distance before showing/hiding the nav *was 20 and 30*
        
        intervalID = setInterval(function () {
            var nav = document.getElementById('fixed-nav-bar'), // Gets nav object
                pageVertOffset = document.all ? iebody.scrollTop : pageYOffset;
        if (pageVertOffset - last < -threshold) { // Happens if the difference in scroll is below the negative threshold
            nav.style.top = "0px"; // Put the nav at the top of the window
        } else if (pageVertOffset - last > threshold) { // Happend if the difference in scroll is above the threshold
            nav.style.top = -nav.offsetHeight + "px"; // Hides the navigation
        }
        last = pageVertOffset; // Updates the previous scroll value
    }, delay); // Runs every `delay` amount

    
}

//funcation is called once web page loads so that it works immediatelty 

intervalManager();

var autoHideObject = document.getElementById("ceaseAutoHide");

autoHideObject.addEventListener("click", autoHideDecider);

function autoHideDecider() {
    "use strict";
	if (autoHideObject.id === "ceaseAutoHide") {
		clearInterval(intervalID);
		autoHideObject.id = "startAutoHide";
	} else if (autoHideObject.id === "startAutoHide") {
        intervalManager();
        autoHideObject.id = "ceaseAutoHide";
    }
}

// ======================================================

//Code for accordin 

var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function() {
        /* Toggle between adding and removing the "active" class,
        to highlight the button that controls the panel */
        this.classList.toggle("active");

        /* Toggle between hiding and showing the active panel */
        var panel = this.nextElementSibling;
        if (panel.style.display === "block") {
            panel.style.display = "none";
//            arrow1.className = "arrowDown";
        } else {
            panel.style.display = "block";
//            arrow1.className = "arrowDown";
        }
    });
}

// ======================================================


var arrowRotate1 = document.getElementById("arrowToggleD1");
var arrowDecider1 = document.getElementById("arrowRight1");

arrowRotate1.addEventListener("click", function() {
    
    if (arrowRotate1.id == "arrowToggleD1") {
        arrowDecider1.id = "arrowDown1";
        arrowRotate1.id = "arrowToggleR1";
    } else {
        arrowDecider1.id = "arrowRight1";
        arrowRotate1.id = "arrowToggleD1";
    }
    
});

var arrowRotate2 = document.getElementById("arrowToggleD2");
var arrowDecider2 = document.getElementById("arrowRight2");

arrowRotate2.addEventListener("click", function() {
    
    if (arrowRotate2.id == "arrowToggleD2") {
        arrowDecider2.id = "arrowDown2";
        arrowRotate2.id = "arrowToggleR2";
    } else {
        arrowDecider2.id = "arrowRight2";
        arrowRotate2.id = "arrowToggleD2";
    }
    
});


var arrowRotate3 = document.getElementById("arrowToggleD3");
var arrowDecider3 = document.getElementById("arrowRight3");

arrowRotate3.addEventListener("click", function() {
    
    if (arrowRotate3.id == "arrowToggleD3") {
        arrowDecider3.id = "arrowDown3";
        arrowRotate3.id = "arrowToggleR3";
    } else {
        arrowDecider3.id = "arrowRight3";
        arrowRotate3.id = "arrowToggleD3";
    }
    
});

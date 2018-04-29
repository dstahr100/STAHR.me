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

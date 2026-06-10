var associates = ["Chaithra", "Deepika", "Devdeep", "Hamsa", "Kavya", "Lathika"];

var nextassbtn = document.querySelector("#nextassbtn");
var skipassbtn = document.querySelector("#skipassbtn");
var curAssociate = document.querySelector("#currentAssociate");
var nxtAssociate = document.querySelector("#nextAssociate");

let pos = 0;

// Initial display
curAssociate.innerHTML = associates[pos];
nxtAssociate.innerHTML = associates[(pos + 1) % associates.length];

console.log("Associates:", associates, "Current Pos:", pos);

function moveToNextAssociate() {
    // Move to next associate
    pos = (pos + 1) % associates.length;

    console.log("Updated Pos:", pos);

    // Update UI
    curAssociate.innerHTML = associates[pos];
    nxtAssociate.innerHTML = associates[(pos + 1) % associates.length];
}

function skipTo2ndNextAssociate() {
    // Move to next associate
    pos = (pos + 2) % associates.length;
	
    console.log("Updated Pos:", pos);

    // Update UI
    curAssociate.innerHTML = associates[pos];
    nxtAssociate.innerHTML = associates[(pos + 1) % associates.length];
}

// NEXT button
nextassbtn.addEventListener("click", function () {
    console.log("NEXT button clicked");
    moveToNextAssociate();
});

// SKIP button
skipassbtn.addEventListener("click", function () {
    console.log("SKIP button clicked");
    skipTo2ndNextAssociate();
});
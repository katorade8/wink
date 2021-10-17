var comments = [];

var showComments = true;
function addComments() {

    document.getElementById("button1").addEventListener("click", event => {
        event.preventDefault()
        if(showComments) {
            showComments = false;
            document.getElementById("comment1").innerHTML = "<p>Tessa Perkins: That's cool!<p>";
        }
        else {
            showComments = true;
            document.getElementById("comment1").innerHTML = "";
        }
        
    })
}
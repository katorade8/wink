function addComments() {

    document.getElementById("button1").addEventListener("click", event => {
        event.preventDefault()

        document.getElementById("comment1").innerHTML = "<p>Tessa Perkins: That's cool!<p>";
    })
}
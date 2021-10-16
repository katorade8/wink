function addComments() {

    document.getElementById("button1").addEventListener("click", event => {
        event.preventDefault()

        document.getElementById("comment1").innerHTML = "<p>Tessa Perkins: That's cool!<p>";
    })
}

function addQuote() {

    document.getElementById("quoteButton").addEventListener("click", event => {
        event.preventDefault();

        let url = "https://quotesondesign.com/wp-json/wp/v2/posts/?orderby=rand";

        fetch(url)
            .then(response => {
                return response.json()
            }).then(json => {
                console.log(json)
                let i = Math.floor(Math.random() * 10) 
                document.getElementById("quote").innerHTML = json[i].content.rendered
                json = []
            })
    })

}
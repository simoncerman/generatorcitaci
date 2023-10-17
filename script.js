function onLoadSetup() {
    document.getElementById("url-submit").onclick = urlSubmit;
}

function urlSubmit() {
    const myUrl = "https://stackoverflow.com/questions/36631762/returning-html-with-fetch";
    const url = 'https://corsproxy.io/?' + encodeURIComponent(myUrl);
    fetch(url)
    .then(function(response) {
        // When the page is loaded convert it to text
        console.log(response.headers);
        return response.headers
    })
    .then(function(html) {
        // Initialize the DOM parser
        var parser = new DOMParser();

        // Parse the text
        var doc = parser.parseFromString(html, "text/html");

        // You can now even select part of that html as you would in the regular DOM 
        // Example:
        // var docArticle = doc.querySelector('article').innerHTML;

        console.log(doc);
    })
    .catch(function(err) {  
        console.log('Failed to fetch page: ', err);  
    });
}
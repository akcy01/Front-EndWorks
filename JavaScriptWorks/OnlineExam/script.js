var baglanti = new XMLHttpRequest();
baglanti.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
       console.log(baglanti.responseText)
    }
};
xhttp.open("GET", "data.json", true);
xhttp.send();
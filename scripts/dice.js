document.getElementById('roll').addEventListener('click', function() {
    var randomNumber = Math.floor(Math.random() * 6) + 1;
    var imgSrc = 'img/noppa' + randomNumber + '.png';
    document.getElementById('result').src = imgSrc;
})
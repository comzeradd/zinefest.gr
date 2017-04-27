$(document).ready(function() {
    L.mapbox.accessToken = 'pk.eyJ1IjoiY29temVyYWRkIiwiYSI6ImxjQjFHNFUifQ.ohrYy34a8ZIZejrPSMWIww';
    var map = L.mapbox.map('map', 'comzeradd.p9k5a39m').setView([37.9734, 23.7149], 15);

    var marker = L.marker([37.9734, 23.7149], {
        clickable: false
    });

    marker.addTo(map);
});

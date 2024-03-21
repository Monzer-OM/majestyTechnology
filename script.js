function initMap() {
    const map = new google.maps.Map(document.getElementById("map"), {
        center: { lat: 37.7749, lng: -122.4194 }, // Example location (San Francisco)
        zoom: 12,
    });
}

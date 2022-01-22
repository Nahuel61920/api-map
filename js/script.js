function iniciarMap(){
    const coord = {lat:-34.5453062 ,lng:-58.4497749};
    const map = new google.maps.Map(document.getElementById("map"),
    {zoom: 15,
    center: coord});

    const marker = new google.maps.Marker({
        position: coord,
        map: map
    });
}

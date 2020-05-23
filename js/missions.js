const missions = "https://api.spacexdata.com/v3/launches/upcoming";

fetch(missions)
.then (function (response){
    return response.json();
})
.then(function(mission){
    console.log(mission);

    document.getElementById("mission1").innerHTML = "name: " + mission[0].mission_name;
    document.getElementById("mission2").innerHTML = "name: " + mission[1].mission_name;
    document.getElementById("mission_dt1").innerHTML = "details: " + mission[0].details
    document.getElementById("mission_LD").innerHTML = "Launch date: " + mission[0].launch_date_utc;
});

const previous = "https://api.spacexdata.com/v3/launches/latest";

fetch(previous)
    .then(function (response) {
        return response.json();
    })
    .then(function (previous) {
        console.log();
        document.getElementById("previous_name").innerHTML = "name: " + previous.mission_name;
        document.getElementById("previous_number").innerHTML = "name: " + previous.flight_number;
        document.getElementById("previous_dt").innerHTML = "details: " + previous.details;
    
    });

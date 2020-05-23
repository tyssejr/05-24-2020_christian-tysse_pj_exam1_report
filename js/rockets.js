const shipInfo = "https://api.spacexdata.com/v3/rockets/";

fetch(shipInfo)
    .then(function (response) {
        return response.json();
    })
    .then(function (rockets) {
        console.log(rockets);
        document.getElementById("falcon1").innerHTML = "name: " + rockets[0].rocket_name;
        document.getElementById("falcon1__SR").innerHTML = "Success Rate: " + rockets[0].success_rate_pct;
        document.getElementById("falcon1__desc").innerHTML = "description: " + rockets[0].description;
        document.getElementById("falcon1__pl").innerHTML = "Payload " + rockets[0].payload_weights[0].kg + " kg";

         document.getElementById("falcon9").innerHTML = "name: " + rockets[1].rocket_name;
         document.getElementById("falcon9__SR").innerHTML = "Success Rate: " + rockets[1].success_rate_pct;
         document.getElementById("falcon9__desc").innerHTML = "description: " + rockets[1].description;
         document.getElementById("falcon9__pl").innerHTML = "Payload " + rockets[1].payload_weights[0].kg + " kg";

         document.getElementById("falconH").innerHTML = "name: " + rockets[2].rocket_name;
         document.getElementById("falconH__SR").innerHTML = "Success Rate: " + rockets[2].success_rate_pct;
         document.getElementById("falconH__desc").innerHTML = "description: " + rockets[2].description;
         document.getElementById("falconH__pl").innerHTML = "Payload " + rockets[2].payload_weights[0].kg + " kg";

        document.getElementById("starship").innerHTML = "name: " + rockets[3].rocket_name;
        document.getElementById("starship__SR").innerHTML = "Success Rate: " + rockets[3].success_rate_pct;
        document.getElementById("starship__desc").innerHTML = "description: " + rockets[3].description;
        document.getElementById("starship__pl").innerHTML = "Payload " + rockets[3].payload_weights[0].kg + " kg";
    });

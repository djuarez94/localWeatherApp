$( document ).ready(function() {
    var appID = "61d102ae37cf399264896fe1a6d76f65";

    $(".query_btn").click(function(){

        var query_param = $(this).prev().val();

        if ($(this).prev().attr("placeholder") == "City, State") {
            var weather = "http://api.openweathermap.org/data/2.5/weather?q=" + query_param + "&units=imperial&APPID=" + appID;
        } else if ($(this).prev().attr("placeholder") == "Zip Code") {
            var weather = "http://api.openweathermap.org/data/2.5/weather?zip=" + query_param + "&units=imperial&APPID=" + appID;
        }

        $.getJSON(weather,function(json){
        	console.log(json);
            $("#city").html(json.name);
            $("#main_weather").html(json.weather[0].main);
            $("#description_weather").html(json.weather[0].description);
            $("#weather_image").attr("src", "http://openweathermap.org/img/w/" + json.weather[0].icon + ".png");
            $("#temperature").html(json.main.temp);
            $("#pressure").html(json.main.pressure);
            $("#humidity").html(json.main.humidity);
        });
    })

    // Optional Code for temperature conversion
    var fahrenheit = true;

    $("#convertToCelsius").click(function() {
        if (fahrenheit) {
            $("#temperature").text(Math.round(((($("#temperature").text() - 32) * 5) / 9)));
        }
        fahrenheit = false;
    });

    $("#convertToFahrenheit").click(function() {
        if (fahrenheit == false) {
            $("#temperature").text(Math.round((($("#temperature").text() * (9/5)) + 32)));
        }
        fahrenheit = true;
    });
});
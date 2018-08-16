function getData(address) {
    return $.ajax({
        url: address,
        type: 'GET',
        async: true,
        cache: false,
    });
}
getData("https://restcountries.eu/rest/v2").done(successFunction);

function successFunction(data) {
    $.each(data, function () {
        $('#countries').append('<option >' + this.name + '</option>');
        if (this.name == "Iran (Islamic Republic of)") {
            $("option").attr("selected", "selected");
        }
    });
    var nameOfcountreis = $("#countries option:selected").text();
    let indexOfcountries = $("#countries option:selected").index();
    // let h = data[indexOfcountries].alpha2Code;
    $(".capital").html(data[indexOfcountries].capital);
    $(".NativeName").html(data[indexOfcountries].nativeName);
    $(".RegionName").html(data[indexOfcountries].region);
    $(".Population").html(data[indexOfcountries].population);
    $(".timezones").html(data[indexOfcountries].timezones);
    $.each(data[indexOfcountries].languages, function () {
        $(".Langueges").html(this.name);
    });
    $(".callingCodes").html(data[indexOfcountries].callingCodes);
    $(".flag img").attr("src", data[indexOfcountries].flag);


    getData("http://api.openweathermap.org/data/2.5/weather?id=" + nameOfcountreis + "&APPID=061f2ae5b1f8e49b7fbe69e79dcd0490")
        .done(function (weatherdata) {
            $(".windspeed").html(weatherdata.wind.speed);
            $(".temperature").html(Math.round(weatherdata.main.temp - 273));
            $(".humidity").html(weatherdata.main.humidity);
            $(".Visibility").html(weatherdata.visibility);
        })
    $("select").change(function () {
        let nameOfcountry = $("#countries option:selected").text();
        let indexOfcountries = $("#countries option:selected").index();
        let alpha2Code = data[indexOfcountries].alpha2Code;
        $(".capital").html(data[indexOfcountries].capital);
        $(".NativeName").html(data[indexOfcountries].nativeName);
        $(".RegionName").html(data[indexOfcountries].region);
        $(".Population").html(data[indexOfcountries].population);
        $(".timezones").html(data[indexOfcountries].timezones);
        $.each(data[indexOfcountries].languages, function () {
            $(".Langueges").html(this.name);
        });
        $(".callingCodes").html(data[indexOfcountries].callingCodes);
        $(".flag img").attr("src", data[indexOfcountries].flag);

        getData("http://api.openweathermap.org/data/2.5/weather?id=" + nameOfcountry + "&APPID=061f2ae5b1f8e49b7fbe69e79dcd0490")
            .done(function (weatherdata) {
                $(".windspeed").html(weatherdata.wind.speed);
                $(".temperature").html(Math.round(weatherdata.main.temp - 273));
                $(".humidity").html(weatherdata.main.humidity);
                $(".Visibility").html(weatherdata.visibility);
            
            })
    })
};







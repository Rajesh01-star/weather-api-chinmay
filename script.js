let display = function () {
  let location = document.getElementById("formGroupExampleInput").value;
  let access_key = document.getElementById("formGroupExampleInput2").value;
  //   erasing the filled data
  document.getElementById("formGroupExampleInput").value =
    document.getElementById("formGroupExampleInput2").value = "";

  try {
    fetch(
      `http://api.weatherstack.com/current?access_key=${access_key}&query=${location}`
    )
      .then((response) => response.json())
      .then((data) => {
        console.log(data.success);
        if (data.success == "false") throw "no location found";

        let info = `
      <div class="location-heading" id="location">Location:${data.location.name}</div>
<div class="lat-heading">Lat:${data.location.lat}</div>
<div class="long-heading">Long:${data.location.lon}</div>
<div class="time-heading">Time Zone:${data.location.timezone_id}</div>
<div class="Wind-heading">Wind Speed:${data.current.wind_speed}</div>
<div class="Pressure-heading">Pressure:${data.current.pressure}</div>
<div class="Humidity-heading">Humidity:${data.current.humidity}</div>
<div class="Wind-direction-heading">Wind Direction:${data.current.wind_dir}</div>
<div class="uv-heading">UV Index:${data.current.uv_index}</div>
<div class="feels-heading">Feels Like:${data.current.feelslike}</div>
<div class="rectangle-box"></div>
      `;

        document.getElementById("showInfo").innerHTML = info;
      });
  } catch (err) {
    alert(err);
  }
};

// function getError()
// {
//     if(location="")
//     {
//         document.get("message1").innerHTML="This field can not be empty";
//         return false;
//     }
//     if(access_key="")
//     {
//         document.getElementById("message2").innerHTML="This field can not be empty";
//         return false;
//     }
// }
// function getWeather()
// {

//     fetch(" http://api.weatherstack.com/current?access_key=${access_key}&query=${location}")
//     .then(response => response.json())
// }

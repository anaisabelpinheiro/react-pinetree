
import React, { Component } from 'react'
export default class Test extends Component {
  render() {
    return (
      <div>
         <div class="container">
        <div id="background">
            <ul class="nav justify-content-center">
                <li class="nav-item">
                    <a class="nav-link disabled" href="#"><strong>Weather4Runners</strong></a>
                </li>
                <li class="nav-item">
                    <a class="nav-link disabled" href="#">31|12|2020</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link disabled" href="#">16:00:00</a>
                </li>
            </ul>
            <h1>

                <i class="far fa-sun"></i>
                22ºC
                Lisbon
                <p>
                    Last update: Yesterday
                </p>
            </h1>
            <div class="container">
                <br>
                <br>
                <div class="row">
                    <div class="col-sm"> </div>
                    <div class="col"> <strong>Feels like</strong></div>
                    <div class="col"> <strong>Visibility</strong></div>
                    <div class="col"> <strong>Wind</strong></div>
                    <div class="col"> <strong>Humidity</strong></div>
                    <div class="col"> </div>
                </div>
            </div>
            <div class="container">
                <div class="row">
                    <div class="col-sm"> </div>
                    <div class="col"><strong>25</strong></div>
                    <div class="col"><strong> 80%</strong></div>
                    <div class="col"><strong> 5km</strong></div>
                    <div class="col"><strong> 10%</strong></div>
                    <div class="col"> </div>
                </div>
            </div>
            <br>
            <br>
            <hr style="height:2px;color:lightgray;background-color:lightgray;">
            <div class="container">
                <div class="row">
                    <div class="col offset-md-1"></div>
                    <div class="col"> <strong>Monday</strong></div>
                    <div class="col"><strong>Tuesday</strong></div>
                    <div class="col"><strong>Wednesday</strong></div>
                    <div class="col"><strong>Thursday</strong></div>
                    <div class="col"><strong>Friday</strong></div>
                    <div class="col"> </div>

                </div>
            </div>
            <hr style="height:2px;color:lightgray;background-color:lightgray;width:80%">
            <div class="container">
                <div class="row">
                    <div class="col offset-md-1"> </div>
                    <div class="col"><i class="fas fa-bolt"></i></div>
                    <div class="col"> <i class="far fa-sun"></i> </div>
                    <div class="col"> <i class="fas fa-cloud"></i></div>
                    <div class="col"> <i class="fas fa-cloud-sun"></i></div>
                    <div class="col"> <i class="fas fa-tint"></i></div>
                    <div class="col"> </div>
                </div>
            </div>
            <hr style="height:2px;color:lightgray;background-color:lightgray;width:80%">
            <div class="container">
                <div id= "maxVal" class="row">
                    <div class="col offset-md-1"><strong>Max:</strong></div>
                    <div id= "tempmax2a" class="col"><strong>19º</strong></i>
                    </div>
                    <div id= "tempmax3a" class="col" temperature="21º" class="day"><strong>19º</strong></i>
                    </div>
                    <div id= "tempmax4a" class="col" temperature="20º" class="day"><strong>21º</strong></i></div>
                    <div id= "tempmax5a" class="col" temperature="23º" class="day"> <strong>19º</strong></i></div>
                    <div id= "tempmax6a" class="col" temperature="14º" class="day"> <strong>22º</strong></i></div>
                    <div class="col"> </div>
                </div>
            </div>
            <hr style="height:2px;color:lightgray;background-color:lightgray;width:80%">
            <div class="container">
                <div id= "minVal" class="row">
                    <div  class="col offset-md-1" temperature="19º" class="day"><strong>Min:</strong></div>
                    <div id= "tempmin2a" class="col" temperature="15º" class="day"> <strong>10º</strong></i>
                    </div>
                    <div id= "tempmin3a" class="col" temperature="21º" class="day"><strong>19º</strong></i>
                    </div>

                    <div id= "tempmin4a" class="col" temperature="16º" class="day"> <strong>11º</strong></i></div>
                    <div id= "tempmin5a" class="col" temperature="15º" class="day"> <strong>12º</strong></i></div>
                    <div id= "tempmin6a" class="col" temperature="19º" class="day"> <strong>10º</strong></i></div>
                    <div class="col"> </div>
                </div>
            </div>
            <br>
            <br>

            <div class="container">
                <button class="btn" onclick="refresh()"> Refresh </button>
            </div>
        </div>
    </div>
</body>

</html>
      </div>
    )
  }
}

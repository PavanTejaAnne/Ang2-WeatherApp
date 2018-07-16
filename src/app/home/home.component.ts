import { Component, OnInit } from "@angular/core";
import { WeatherService } from "../weather.service";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"]
})
export class HomeComponent implements OnInit {
  location = {
    // Hardcoded values to test
    city: "enter city here",
    code: "enter code here"
  };
  weather: any;
  value: any;

  constructor(private wService: WeatherService) {}

  ngOnInit() {
    this.value = localStorage.getItem("location");

    if (this.value != null) {
      this.location = JSON.parse(this.value);
    } else {
      this.location = {
        // Hardcoded values tp test
        city: " Enter city here",
        code: "enter code here"
      };
    }

    this.wService
      .getWeather(this.location.city, this.location.code)
      .subscribe(response => {
        this.weather = response;
        // console.log(response);
      });
  }
}

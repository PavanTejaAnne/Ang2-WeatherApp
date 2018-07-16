import { Injectable } from "@angular/core";
import { Http } from "@angular/http";
import "rxjs/add/operator/map";
@Injectable()
export class WeatherService {
  url;
  apikey = "1f06c99f1678cc081eff475a29df81da";

  constructor(private http: Http) {
    this.url = "http://api.openweathermap.org/data/2.5/forecast?q=";
  }

  getWeather(city, code) {
    return this.http
      .get(this.url + city + "," + code + "&APPID=" + this.apikey)
      .map(res => res.json());
  }
}

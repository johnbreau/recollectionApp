Weather = (function() {


    Weather.getCurrent = function(city, callback) {
      var _this = this;
      return this._getJSON("http://openweathermap.org/data/2.5/weather?q=KansasCity,us", function(data) {
        return callback(new Weather.Current(data));
      });
    };

    Weather._getJSON = function(url, callback) {
      if (isModule) {
        return http.get(URL.parse(url), function(response) {
          return callback(response.body);
        });
      } else {
        return $.ajax({
          url: url,
          dataType: "jsonp",
          success: callback
        });
      }
    };

    return Weather;

  })();


  Weather.Current = (function() {

    function Current(data) {
      this.data = data;
    }

    Current.prototype.temperature = function() {
      var temperature;
      return temperature = this.data.list[0].main.temp;
    };

    Current.prototype.conditions = function() {
      return this.data.list[0].weather[0].description;
    };

    return Current;

  })();

  if (isModule) {
    module.exports = Weather;
  } else {
    window.Weather = Weather;
  }

}).call(this);

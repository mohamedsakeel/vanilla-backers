(function ($) {

    function formatter(value, settings) {
        return value.toFixed(settings.decimals);
    }

    // Countdown plugin
    $.fn.countdown = function(options, callback) {

        //custom 'this' selector
        var thisEl = $(this);
        //array of custom settings
        var settings = {
            'date': null,
            'format': null
        };
        //append the settings array to options
        if(options) {
            $.extend(settings, options);
        }
        //main countdown function
        var countdown_proc = function () {
            var eventDate = Date.parse(settings['date']) / 1000;
            var currentDate = Math.floor($.now() / 1000);

            if(eventDate <= currentDate) {
                callback.call(this);
                //clearInterval(interval);
            };
            var seconds = eventDate - currentDate;
            var days = Math.floor(seconds / (60 * 60 * 24)); //calculate the number of days
            seconds -= days * 60 * 60 * 24; //update the seconds variable with no. of days removed
            var hours = Math.floor(seconds / (60 * 60));
            seconds -= hours * 60 * 60; //update the seconds variable with no. of hours removed
            var minutes = Math.floor(seconds / 60);
            seconds -= minutes * 60; //update the seconds variable with no. of minutes removed
            //logic for the two_digits ON setting
            if(settings['format'] == "on") {
                days = (String(days).length >= 2) ? days : "0" + days;
                hours = (String(hours).length >= 2) ? hours : "0" + hours;
                minutes = (String(minutes).length >= 2) ? minutes : "0" + minutes;
                seconds = (String(seconds).length >= 2) ? seconds : "0" + seconds;
            }

            //update the countdown's html values.
            if(!isNaN(eventDate)) {
                thisEl.find(".days").text(days);
                thisEl.find(".hours").text(hours);
                thisEl.find(".minutes").text(minutes);
                thisEl.find(".seconds").text(seconds);
            } else {
                alert("Invalid date. Here's an example: 12 Tuesday 2012");
                clearInterval(interval);
            }
        }

        //run the function
        countdown_proc();

        //loop the function
        interval = setInterval(countdown_proc, 1000);
    }
}(jQuery));

/**
 * Time Countdown
 */
/**
 * Time Countdown
 */
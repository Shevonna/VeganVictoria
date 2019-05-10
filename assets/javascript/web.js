$(document).ready(function(){

    /*! Fades in page on load */
    $('body').css('display', 'none');
    $('body').fadeIn(5000);
    
    });

    //Opening Day
    var countDownDate = new Date("June 15, 2019 9:00:00").getTime();
    var x = setInterval(function() {
    var now = new Date().getTime();
    var distance = countDownDate - now;
    
      var days = Math.floor(distance / (1000 * 60 * 60 * 24));
      var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      var seconds = Math.floor((distance % (1000 * 60)) / 1000);
        
      document.getElementById("timer").innerHTML = days + "d " + hours + "h "
      + minutes + "m " + seconds + "s ";
        
      if (distance < 0) {
        clearInterval(x);
        document.getElementById("timer").innerHTML = "WE'RE OPEN";
      }
    }, 1000);
    
         // This is our API key. Add your own API key between the ""
         var APIKey = "ItJY3uHZmu45iU-LHf-tJ0TNABhWAvKGFhJI3LBkI8YdNl4g-Y3qC14uN9SuFnGFUCVEG0ZUgGJGh5j234cD3DH-hFP7futcE1326DA7k4zEjdR2DEEzbatsUfjBXHYx";
    
    // Here we are building the URL we need to query the database
    var queryURL = "https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/vegan-by-victorias-santa-ana";
    
    // We then created an AJAX call
    $.ajax({
        url: queryURL,
        method: "GET",
        headers: {
            'Authorization': 'Bearer ' + APIKey
        }
    }).then(function (response) {
    
        console.log(response);
        //Yelp Star Display
        var rating = response.rating;
        var imageURL = response.image_url;
        var Image = $("<img>");
        var yelp = $("<img>");
        yelp.attr("src","assets/images/Yelp_burst_positive_RGB.png");
        yelp.attr("style","width:20%");
        var ratingStars = $("<img>");
        ratingStars.attr("style","width:60%");
        var ratingStarsSRC;
        Image.attr("src", imageURL);
        Image.attr("alt", "news image");
        Image.attr("style","width:80%; margin:10px;");
        if(rating<1){
            ratingStarsSRC="assets/yelp_stars/web_and_ios/large/large_0.png";
        }else if(rating<=1){
            ratingStarsSRC="assets/yelp_stars/web_and_ios/large/large_1.png";
        }else if(rating<=1.5){
            ratingStarsSRC="assets/yelp_stars/web_and_ios/large/large_1_half.png";
        }else if(rating<=2){
            ratingStarsSRC="assets/yelp_stars/web_and_ios/large/large_2.png";
        }else if(rating<=2.5){
            ratingStarsSRC="assets/yelp_stars/web_and_ios/large/large_2_half.png";
        }else if(rating<=3){
            ratingStarsSRC="assets/yelp_stars/web_and_ios/large/large_3.png";
        }else if(rating<=3.5){
            ratingStarsSRC="assets/yelp_stars/web_and_ios/large/large_3_half.png";
        }else if(rating<=4){
            ratingStarsSRC="assets/yelp_stars/web_and_ios/large/large_4.png";
        }else if(rating<=4.5){
            ratingStarsSRC="assets/yelp_stars/web_and_ios/large/large_4_half.png";
        }else if(rating==5){
            ratingStarsSRC="assets/yelp_stars/web_and_ios/large/large_5.png";
        }
        ratingStars.attr("src",ratingStarsSRC);
        
        $("#yelpReview").prepend(ratingStars);
        $("#yelpReview").prepend(yelp);
        $("#yelpReview").append(Image);
    
        //Is the store open?
        var businessHour = response.hours[0].is_open_now;
        if(businessHour===false){
            $("#openTime").html("<h4>We are closed at this time.</h4>");
        } else if(businessHour===true){
            $("#openTime").html("<h4>We are open for business.</h4>");
        }
        var wkDay=(moment().format('dddd'));
        var wkoHour;
        var wkcHour;
        var wRow=$("<tr>");
        var wHead=$("<th colspan='2'>");
        var hRow=$("<tr>");
        var oHour=$("<td>");
        var cHour=$("<td>");
        var sHour=$("<td colspan='2'>");
        sHour.text("Closed");
        var d;
        if(wkDay=="Monday"){
            d=0;
        }else if(wkDay=="Tuesday"){
            d=1;
        }else if(wkDay="Wednesday"){
            d=2;
        }else if(wkDay="Thursday"){
            d=3;
        }else if(wkDay="Friday"){
            d=4;
        }else if(wkDay="Saturday"){
            d=5;
        }
        var dStart=response.hours[0].open[d].start;
        var dEnd=response.hours[0].open[d].end;
        var hStart=moment(dStart,"HHmm").format("h:mm a");
        var hEnd=moment(dEnd,"HHmm").format("h:mm a");
        oHour.text(hStart);
        cHour.text(hEnd);
        if(wkDay == "Sunday"){
            hRow.append(sHour);
        }else{
        hRow.append(oHour);
        hRow.append(cHour);
        }
        wHead.text(wkDay+" Hours");
        wRow.append(wHead);
        $("#weeklyHour").append(wRow);
        $("#weeklyHour").append("<tr><td>Open</td><td>Closed</td></tr>")
        $("#weeklyHour").append(hRow);
    });
    



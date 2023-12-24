$(document).ready(function() {

   $('#submit').click(function() {
      $.ajax({
         type: "POST",
         url: "https://portfolio-website-409104.as.r.appspot.com/",
         data: {'form': $("#contact-form").serialize()},
         success: function(msg) {
            alert("Form Submitted: " + msg);
         }
      });

   });

});
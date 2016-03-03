// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or vendor/assets/javascripts of plugins, if any, can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/sstephenson/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require turbolinks
//= require_tree .

$(document).ready(function() {

  $(document).ready(clickThrough);

  $(".question").hide();
  $(".question").first().show();
  $(".response").hide();

  $(".reset").click(function() {
    $(".question").hide();
    $(".question").first().show();
    $(".response").hide();
  });

  function clickThrough() {
    $(".yes-no").each(function() {
      $(this).click(function() {
        $(".question").hide();
        if ($(this).attr("id") == "yes-1") {
          $("#1").show();
        } else if ($(this).attr("id") == "no-1") {
          $("#q2").show();
        } else if ($(this).attr("id") == "yes-2") {
          $("#2").show();
        } else if ($(this).attr("id") == "no-2") {
          $("#q3").show();
        } else if ($(this).attr("id") == "yes-3") {
          $("#q4").show();
        } else if ($(this).attr("id") == "no-3") {
          $("#3").show();
        } else if ($(this).attr("id") == "yes-4") {
          $("#4").show();
        } else if ($(this).attr("id") == "no-4") {
          $("#ask-again").show();
        }
      });
    });
  }

});
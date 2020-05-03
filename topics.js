$(document).ready(function () {

  // Transitoion --Sunny Starts

  $(".footer-icons span").mouseover(function () {
    $(this).addClass('fa-inverse');
    $(this).mouseout(function () {
      $(this).removeClass('fa-inverse');
    });
  });

  // Transition --Sunny Ends

  flag = 0;
  $("#i1").click(function () {
    $("#Bigimage").fadeIn();

    $("#Bigimage img").attr('src', 'pics/potrait/i1.jpg')
    flag = 1;
  });

  $("#i2").click(function () {
    $("#Bigimage").fadeIn();
    $("#Bigimage img").attr('src', 'pics/potrait/i2.jpg')
    flag = 2;
  });

  $("#i3").click(function () {
    $("#Bigimage").fadeIn();
    $("#Bigimage img").attr('src', 'pics/potrait/i3.jpg')
    flag = 3;
  });

  $("#i4").click(function () {
    $("#Bigimage").fadeIn();
    $("#Bigimage img").attr('src', 'pics/potrait/i4.jpg')
    flag = 4;
  });

  $("#i5").click(function () {
    $("#Bigimage").fadeIn();
    $("#Bigimage img").attr('src', 'pics/potrait/i5.jpg')
    flag = 5;
  });

  $("#i6").click(function () {
    $("#Bigimage").fadeIn();
    $("#Bigimage img").attr('src', 'pics/potrait/i6.jpg')
    flag = 6;
  });




  $("#close").click(function () {
    $("#Bigimage").fadeOut();
  });




  $("#next").click(function () {
    if (flag == 1) {
      $("#Bigimage img").attr('src', 'pics/potrait/i2.jpg');
      flag = 2;
    } else if (flag == 2) {
      $("#Bigimage img").attr('src', 'pics/potrait/i3.jpg');
      flag = 3;
    } else if (flag == 3) {
      $("#Bigimage img").attr('src', 'pics/potrait/i4.jpg');
      flag = 4;
    } else if (flag == 4) {
      $("#Bigimage img").attr('src', 'pics/potrait/i5.jpg');
      flag = 5;
    } else if (flag == 5) {
      $("#Bigimage img").attr('src', 'pics/potrait/i6.jpg');
      flag = 6;
    } else if (flag == 6) {
      $("#Bigimage img").attr('src', 'pics/potrait/i1.jpg');
      flag = 1;
    }

  });


  $("#prev").click(function () {
    if (flag == 1) {
      $("#Bigimage img").attr('src', 'pics/potrait/i6.jpg');
      flag = 6;
    } else if (flag == 2) {
      $("#Bigimage img").attr('src', 'pics/potrait/i1.jpg');
      flag = 1;
    } else if (flag == 3) {
      $("#Bigimage img").attr('src', 'pics/potrait/i2.jpg');
      flag = 2;
    } else if (flag == 4) {
      $("#Bigimage img").attr('src', 'pics/potrait/i3.jpg');
      flag = 3;
    } else if (flag == 5) {
      $("#Bigimage img").attr('src', 'pics/potrait/i4.jpg');
      flag = 4;
    } else if (flag == 6) {
      $("#Bigimage img").attr('src', 'pics/potrait/i5.jpg');
      flag = 5;
    }

  });


});
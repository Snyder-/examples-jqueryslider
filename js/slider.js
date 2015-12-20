var imgNumber = 1;
var imgCount = $("#slider > img").size();
var loop;

$(document).ready(function() {
  $("img#1").fadeIn(500);
  startSlider()

  $("#previous-image").click(function(event) {
    event.preventDefault();
    previousImage();
  });

  $("#next-image").click(function(event) {
    event.preventDefault();
    nextImage();
  })

  $(".slider-wrapper > a > img").hover(function() {
    $(this).animate({ opacity: 0.8}, 100);
  },
  function() {
    $(this).animate({ opacity: 0.2}, 200);
  })
});

function startSlider() {

  loop = setInterval( function() {
    if (imgNumber >= imgCount) {
      imgNumber = 1;
    } else {
      imgNumber++
    };

    slide();

  }, 4000);
}

function previousImage() {
 clearInterval(loop);

 if (imgNumber <= 1) {
  imgNumber = imgCount;
} else {
  imgNumber--;
};

slide();
startSlider();
}

function nextImage() {
 clearInterval(loop);

 if (imgNumber >= imgCount) {
  imgNumber = 1;
} else {
  imgNumber++;
};

slide()
startSlider();
}

function slide() {
  $('#slider img').fadeOut(500);
  $('img#' + imgNumber).fadeIn(500);
}
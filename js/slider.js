var imgNumber = 1;
var imgCount = $("#slider > img").size();
var loop;

$(document).ready(function() {
  $("img#1").fadeIn(500);
  startSlider()

  $("#previous-image").click(function() {
    previousImage();
  });

  $("#next-image").click(function() {
    nextImage();
  })
});

function startSlider() {

  loop = setInterval( function() {
    if (imgNumber >= imgCount) {
      imgNumber = 1;
    } else {
      imgNumber++
    };

    $('img').fadeOut(500);
    $('img#' + imgNumber).fadeIn(500);

  }, 2000);
}

function previousImage() {
 clearInterval(loop);

 if (imgNumber <= 1) {
  imgNumber = imgCount;
} else {
  imgNumber--;
};

$('img').fadeOut(100);
$('img#' + imgNumber).fadeIn(100);

startSlider();
}

function nextImage() {
 clearInterval(loop);

 if (imgNumber >= imgCount) {
  imgNumber = 1;
} else {
  imgNumber++;
};

$('img').fadeOut(100);
$('img#' + imgNumber).fadeIn(100);

startSlider();
}
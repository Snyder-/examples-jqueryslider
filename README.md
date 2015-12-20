# A jQuery Image Slider Example

A minimalist image slider leveraging jQuery.

Targets images in the wrapped in a div with an id of **slider**.

 ```html
    <div id="slider">
      <img id='1' src="images/img1.jpg">
      <img id='2' src="images/img2.jpg">
      <img id='3' src="images/img3.jpg">
      <img id='4' src="images/img4.jpg">
      <img id='5' src="images/img5.jpg">
      <img id='6' src="images/img6.jpg">
      <img id='7' src="images/img7.jpg">
      <img id='8' src="images/img8.jpg">
    </div>
```
##Changing Time On Each Slide

The slider fades images in and out after a given amount of time via the setInterval loop.

```javascript
function startSlider() {
  loop = setInterval( function() {
    if (imgNumber >= imgCount) {
      imgNumber = 1;
    } else {
      imgNumber++
    };

    slide();

  }, 4000);  // Set time on each slide in millseconds.
}
```

It contains a previous and next slider.

The slideshow will pause on mouseover and start again on mouseleave.

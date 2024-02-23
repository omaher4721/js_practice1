window.onload = function (params) {
  var rect = document.querySelector("#center");
  rect.addEventListener("mousemove", function (details) {
    var rectangleLocation = rect.getBoundingClientRect();
    var insiderect = details.clientX - rectangleLocation.left;

    if (insiderect < rectangleLocation.width / 2) {
      // console.log("left");
      var redcolour = gsap.utils.mapRange(
        0,
        rectangleLocation.width / 2,
        255,
        0,
        insiderect
      );
      gsap.to(rect, {
        backgroundColor: `rgb(${redcolour},0,0)`,
        ease: Power4,
      });
    } else {
      // console.log("right");
      var bluecolour = gsap.utils.mapRange(
        rectangleLocation.width / 2,
        rectangleLocation.width,
        0,
        255,
        insiderect);
        gsap.to(rect, {
            backgroundColor: `rgb(0,0,${bluecolour})`,
            ease: Power4,
          });
    }
  });
  rect.addEventListener("mouseleave",function () {
    gsap.to(rect,{
        backgroundColor:"white"
    })
  })
};

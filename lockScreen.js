// var animationProgress = 0.0;
// var animationInc = 1.0/60.0;

// function animateSVGGradient (el) {
//     console.log(el);
//     animationProgress += animationInc;
//     if (animationInc > 0) {
//         animationProgress = Math.min(0.99, animationProgress);
//     } else {
//         animationProgress = Math.max(0.01, animationProgress);
//     }
//     el.setAttribute('x2', animationProgress.toString());
//     if (animationProgress == 0.99 || animationProgress == 0.01) {
//         animationInc *= -1.0;
//     }
//     console.log('animating gradient ' + animationProgress.toString());

//     // TODO: bind
//     requestAnimationFrame(function () { 
//         animateSVGGradient(el);
//     });
// }

// window.onload = function () {
//     // var gradient = document.getElementById('g');
//     // animateSVGGradient(gradient);
// };
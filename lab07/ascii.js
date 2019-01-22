(function() {
   "use strict";

   const DEFAULT_ANIMATED_SPEED = 250;
   let frameIndex;
   let previousTextareaValue;
   let intervalAnimation;

   window.onload = function() {
      document.getElementById("start").onclick = onStartClicked;
      document.getElementById("stop").onclick = onStopClicked;
      document.getElementById("fontsize").onchange = onFontSizeChanged;
      document.getElementById('animation').onchange = onAnimationChanged;
      document.getElementById("turbo").onchange = onTurboChanged;
   };

   function onStartClicked() {
      const textareaDom = document.getElementById('text-area');
      const stop = document.getElementById('stop');

      previousTextareaValue = textareaDom.value;
      this.disabled = true;
      stop.disabled = false;

      frameIndex = 0;
      const playAnimation = animation(DEFAULT_ANIMATED_SPEED);
      playAnimation();
   }

   function animation(animatedSpeed) {
      const textareaDom = document.getElementById('text-area');
      const animationDom = document.getElementById('animation');
      const animation = animationDom.value;
      const frames = ANIMATIONS[animation].split('=====\n');

      return function() {
         intervalAnimation = setInterval(showNextFrame, animatedSpeed, textareaDom, frames);
      };
   }

   function showNextFrame(textareaDom, frames) {
      textareaDom.value = frames[frameIndex];

      if (frameIndex < frames.length - 1) frameIndex++;
      else frameIndex = 0;
   }

   function onStopClicked() {
      const start = document.getElementById('start');
      const textarea = document.getElementById('text-area');

      this.disabled = true;
      clearInterval(intervalAnimation);
      textarea.value = previousTextareaValue;
      start.disabled = false;
   }

   function onFontSizeChanged() {
      const fontsizes= {
         'Tiny': '7pt',
         'Small': '10pt',
         'Medium': '12pt',
         'Large': '16pt',
         'Extra Large': '24pt',
         'XXL': '32pt'
      };

      const fontsize = fontsizes[this.value];
      const textarea = document.getElementById('text-area');
      textarea.style.fontSize = fontsize;
   }

   function onAnimationChanged() {
      const textarea = document.getElementById('text-area');
      textarea.value = ANIMATIONS[this.value];
   }

   function onTurboChanged() {
      const animatedSpeed = this.checked ? 50 : DEFAULT_ANIMATED_SPEED;

      clearInterval(intervalAnimation);

      const playAnimation = animation(animatedSpeed);
      playAnimation();
   }
})();

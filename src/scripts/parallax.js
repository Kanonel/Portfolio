var parallax = (function() {
    var mountains = document.querySelector('.paralax-welcome__element--mountains');
    var train = document.querySelector('.paralax-welcome__element--train');
    var grass = document.querySelector('.paralax-welcome__element--grass');
  
    return {
      move: function (block, windowScroll, strafeAmount) {
        var strafe = (windowScroll) / strafeAmount + '%';
        var transformString = 'translate3d(0,' + strafe + ', 0)';
        var style = block.style;
        style.transform = transformString;
        style.webkitTransform = transformString;
      }, 
      init: function (wScroll) {
        this.move(mountains, wScroll, -85);
        this.move(train, wScroll, -70);
        this.move(grass, wScroll, -55);
      }
    }
}());
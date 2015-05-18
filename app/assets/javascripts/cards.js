$(document).ready(function() {

  $('.card-wrapper').each(function() {
    var card = $(this).find('.card'),
        handle = $('.rotate', this);

    var flip = function(crd) {
      var tl = new TimelineLite();
      tl.to(crd, 0.4, { z: 100, rotationY: '+=180', ease: Back.easeOut })
        .to(crd, 0.1, { z: 0, ease: Back.easeInOut });
    };

    var R = Draggable.create(this, {
      type: 'rotation',
      trigger: handle
    })[0].disable();

    var M = Draggable.create(this, {
      type: 'x,y',
      cursor: 'grab',
      bounds: '#table',
      edgeResistance: 0.5,
      onClick: function(event){ flip(card) }
    })[0].enable();

    handle.mousedown(function(event) {
      $(this).parents('.card-wrapper').css('z-index', Draggable.zIndex++);
      $(document).mousemove(function(event) {
        M.disable(); R.enable().startDrag(event);
      });
    })
    $(document).mouseup(function() {
      R.disable(); M.enable(); $(document).unbind('mousemove');
    });

  });

  //a nice little intro ;)
  TweenMax.staggerTo($('.card'), 1, { rotationY: '+=180', repeat: 1, yoyo: true }, 0.1);

});
class CardWrapper {
  constructor() {
    this.state = {
    }
  }

  static propTypes() {

  }

  flip(node) {
    var tl = new TimelineLite()
    var card = node.querySelector('.card')

    tl.to(card, 0.4, { z: '+=100', rotationY: '+=180', ease: Back.easeOut })
      .to(card, 0.1, { z: '-=100', ease: Back.easeInOut })


    // if (node.classList.contains('face-up')) {
    //   tl.to(card, 0.4, { z: '+=100', rotationY: 0, ease: Back.easeOut })
    //     .to(card, 0.1, { z: '-=100', ease: Back.easeInOut })
    //   node.classList.remove('face-up')
    // } else {
    //   tl.to(node, 0.4, { z: '+=100', rotationY: 180, ease: Back.easeOut })
    //     .to(node, 0.1, { z: '-=100', ease: Back.easeInOut })
    //   node.classList.add('face-up')
    // }
    // this.setState({faceUp: true})
  }

  componentDidMount() {
    var node = React.findDOMNode(this)
    var component = this
    var d = Draggable.create(node, {
      type: 'x,y',
      cursor: 'grab',
      bounds: '#table',
      edgeResistance: 0.8,
      onPress: function(){ node.classList.add('selected') },
      onRelease: function(){ node.classList.remove('selected') },
      onClick: function(){ component.flip(node) },
      onDragEnd: function(){
        var plusOrMinus = Math.random() < 0.5 ? -1 : 1,
            toppish = Math.floor(Math.random() * 10) * plusOrMinus,
            leftish = Math.floor(Math.random() * 10) * plusOrMinus,
            spin = Math.floor(Math.random() * 20) * plusOrMinus
        var areas = document.querySelectorAll('.area')
        for (var i = areas.length; i--;) {
          var area = Draggable.get('#'+areas[i].id),
              x = parseInt(areas[i].dataset.x) + area.x,
              y = parseInt(areas[i].dataset.y) + area.y,
              r = parseInt(areas[i].dataset.rotation)+spin+'_short'
          node.classList.remove(areas[i].id)
          // TODO there is a bug here where a card can have overlap and get 2 classes added
          if (this.hitTest('#'+areas[i].id, '20%')) {
            TweenLite.to(node, 0.3, {x: x+leftish, y: y+toppish, rotation: r})
            node.classList.add(areas[i].id)
            // node.classList.remove('player')
      // console.log( 'x: '+x+', y: '+y+', spin: '+r+', player: '+areas[i].id )

          }
        }
      }
    })[0]

    Draggable.create(node, {
      type: 'rotation',
      trigger: node.querySelectorAll('.rotate'),
      onDragStart: function(){ d.disable() },
      onDragEnd: function(){
        node.classList.remove('selected')
        d.enable()
      }
    })

    d.enable()

  }

  render() {
    var cardClass = 'card-wrapper '
    // var a = Math.random() < 0.5 ? 'play' : 'draw'
    // cardClass += a

    var w = this.props.width_px + 'px'
    var h = this.props.height_px + 'px'
    return (
      <div className={cardClass}
           style={{width: w, height: h}}>
        <Card { ...this.props } />
      </div>
    )
  }

}

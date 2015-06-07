class Card {
  constructor() {
    this.state = {
    }
  }

  static propTypes() {

  }

  static flip(node) {
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
    var d = Draggable.create(node, {
      type: 'x,y',
      cursor: 'grab',
      bounds: '#table',
      edgeResistance: 0.8,
      onPress: function(){ node.classList.add('selected') },
      onRelease: function(){ node.classList.remove('selected') },
      onClick: function(){ Card.flip(node) },
      onDragEnd: function(){
        var areas = document.querySelectorAll('.area')
        for (var i = areas.length; i--;) { Area.dropoff(node, areas[i]) }
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
    var w = this.props.width_px + 'px'
    var h = this.props.height_px + 'px'
    var cardFrontUrl = "url('/assets/"+ this.props.name +".png')"
    var cardBackUrl = "url('/assets/back.png')"
    var bs = w + ' ' + h
    var br = this.props.border_radius_px + 'px'
    return (
      <div className='card-wrapper'
           style={{width: w, height: h}}>
        <div className='card'>
          <div className='card-face front'
               style={{background: cardFrontUrl, backgroundSize: bs, borderRadius: br}}>
            <span className='rotate'></span>
            <span className='rotate'></span>
            <span className='rotate'></span>
            <span className='rotate'></span>
          </div>
          <div className='card-face back'
               style={{background: cardBackUrl, backgroundSize: bs, borderRadius: br}}>
            <span className='rotate'></span>
            <span className='rotate'></span>
            <span className='rotate'></span>
            <span className='rotate'></span>
          </div>
        </div>
      </div>
    )
  }

}





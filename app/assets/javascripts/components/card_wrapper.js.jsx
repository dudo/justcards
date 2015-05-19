class CardWrapper {
  static propTypes() {

  }

  // constructor(props) {

  // }

  static flip(card) {
    var tl = new TimelineLite();
    tl.to(card, 0.4, { z: 100, rotationY: '+=180', ease: Back.easeOut })
      .to(card, 0.1, { z: 0, ease: Back.easeInOut });
  }

  componentDidMount() {
    var node = React.findDOMNode(this)
    var d = Draggable.create(node, {
      type: 'x,y',
      cursor: 'grab',
      bounds: '#table',
      edgeResistance: 0.5,
      onClick: function(event){ CardWrapper.flip(node.querySelector('.card')) }
    })[0]

    Draggable.create(node, {
      type: 'rotation',
      trigger: node.querySelectorAll('.rotate'),
      onDragStart: function(){ d.disable() },
      onDragEnd: function(){ d.enable() }
    })

    d.enable()
  }

  render() {
    var w = this.props.width_px + 'px'
    var h = this.props.height_px + 'px'
    return (
      <div className='card-wrapper' style={{width: w, height: h}}>
        <Card { ...this.props } />
      </div>
    )
  }

}

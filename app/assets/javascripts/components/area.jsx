class Area {

  componentDidMount() {
    var node = React.findDOMNode(this)
    var cards = Draggable.create('.card-wrapper', {
      bounds: '#table',
      zIndexBoost: false,
    })
    cards.map( c => c.disable())
    Draggable.create(node, {
      trigger: node,
      bounds: '#table',
      onPress: (event) => {
        cards.map( c => {
          var items = new Set(c.target.classList)
          if (items.has(this.props.name)) { c.enable().startDrag(event) }
        })
      },
      onRelease: function(){
        // cards.map( c => c.update(true).disable())
        node.style.zIndex = '0'
      },
      edgeResistance: 0.8
    })

  }

  render() {
    var areaClass = 'area'
    if (this.props.face_up) { areaClass += ' face-up' }
    var t = this.props.position_y + '%'
    var l = this.props.position_x + '%'
    var br = this.props.border_radius_px * 1.2

    return (
      <div className={areaClass}
           id={this.props.name}
           style={{top: t,
                   left: l,
                   width: this.props.width_px * 1.2,
                   height:  this.props.height_px * 1.2,
                   borderRadius: br}}>
        <p>{this.props.name}</p>
      </div>
    )
  }
}





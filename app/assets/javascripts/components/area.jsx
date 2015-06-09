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
      onRelease: function(){ node.style.zIndex = '0' },
      edgeResistance: 0.8
    })
    // var node = React.findDOMNode(this)
    // var cards = document.querySelectorAll('.card-wrapper.'+this.props.name)
    // Draggable.create(node, {
    //   bounds: '#table',
    //   onPress: (event) => {
    //     for (var i = cards.length; i--;) {
    //       var d = Draggable.get(cards[i])
    //       d.vars.zIndexBoost = false
    //       d.enable().startDrag(event)
    //     }
    //   },
    //   onRelease: function(){ node.style.zIndex = '0' },
    //   edgeResistance: 0.8
    // })
  }

  static dropoff(card, area) {
    card.classList.remove(area.id)
    // TODO there is a bug here where a card can have overlap and get 2 classes added
    if (Draggable.hitTest(area, card, '20%')) {
      var plusOrMinus = Math.random() < 0.5 ? -1 : 1,
          toppish = Math.floor(Math.random() * 10) * plusOrMinus,
          leftish = Math.floor(Math.random() * 10) * plusOrMinus,
          spin = Math.floor(Math.random() * 20) * plusOrMinus
      var d = Draggable.get('#'+area.id),
          x = parseInt(area.dataset.x) + d.x,
          y = parseInt(area.dataset.y) + d.y,
          r = parseInt(area.dataset.rotation)+spin+'_short'
      var ah0 = area.offsetHeight,
          ay0 = area.offsetTop + d.y,
          ch0 = card.offsetHeight,
          cy1 = ay0+(ah0-ch0)/2

      if (area.classList.contains('current-user')) {
        TweenLite.to(card, 0.3, {rotation: '0_short', y: cy1})
      } else {
        TweenLite.to(card, 0.3, {x: x+leftish, y: y+toppish, rotation: r})
      }
      card.classList.add(area.id)
    }
  }

  render() {
    var areaClass = ['area']
    if (this.props.face_up) { areaClass.push('face-up') }
    var t = this.props.position_y
    var l = this.props.position_x
    var br = this.props.border_radius_px * 1.2

    return (
      <div className={areaClass.join(' ')}
           id={this.props.name}
           style={{top: t,
                   left: l,
                   width: this.props.width_px * 1.2,
                   height:  this.props.height_px * 1.2,
                   borderRadius: br}}
           data-x={l+this.props.width_px*0.1}
           data-y={t+this.props.height_px*0.1}
           data-rotation={0}>
        <p className='name'>{this.props.name}</p>
      </div>
    )
  }
}





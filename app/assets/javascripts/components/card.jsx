class Card {
  static propTypes() {

  }

  render() {
    var cardClass = 'card';
    if (this.props.faceUp) { cardClass += ' face-up'; }
    var cardFrontUrl = "url('/assets/"+ this.props.name +".png')"
    var cardBackUrl = "url('/assets/back.png')"
    var bs = this.props.width_px + 'px ' + this.props.height_px + 'px'
    var br = this.props.border_radius_px + 'px'

    return (
      <div className={cardClass}>
        <div className='card-face front'
             style={{background: cardFrontUrl, backgroundSize: bs, borderRadius: br}}>
          <Rotator />
          <Rotator />
          <Rotator />
          <Rotator />
        </div>
        <div className='card-face back'
             style={{background: cardBackUrl, backgroundSize: bs, borderRadius: br}}>
          <Rotator />
          <Rotator />
          <Rotator />
          <Rotator />
        </div>
      </div>
    )
  }

}
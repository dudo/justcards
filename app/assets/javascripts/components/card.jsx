class Card {
  static propTypes() {

  }

  render() {
    var cardClass = 'card';
    if (this.props.faceUp) { cardClass += ' face-up'; }
    var cardFrontUrl = "url('/assets/"+ this.props.name +".png')"
    var cardBackUrl = "url('/assets/back.png')"
    return (
      <div className='card-wrapper' style={{width: '185px', height: '260px'}}>
        <div className={cardClass}>
          <div className='card-face front'
               style={{background: cardFrontUrl, backgroundSize: '185px 260px', borderRadius: '10px'}}>
            {[0,1,2,3].map( v =>
              <span className={'rotate'}></span>
            )}
          </div>
          <div className='card-face back'
               style={{background: cardBackUrl, backgroundSize: '185px 260px', borderRadius: '10px'}}>
            {[0,1,2,3].map( v =>
              <span className={'rotate'}></span>
            )}
          </div>
        </div>
      </div>
    )
  }

}

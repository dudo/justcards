class Card {
  static propTypes() {

  }

  render() {
    return (
      <div className='card-wrapper'>
        <div className='card'>
          <div className='card-face front'>
            {[0,1,2,3].map( v =>
              <div className={'rotate'}></div>
            )}
          </div>
          <div className='card-face back'>
            {[0,1,2,3].map( v =>
              <div className={'rotate'}></div>
            )}
          </div>
        </div>
      </div>
    )
  }

}

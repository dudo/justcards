class Table {
  static propTypes() {
    // this.title = React.PropTypes.string;
    // this.body = React.PropTypes.string;
    // this.published = React.PropTypes.bool;
    // this.publishedBy = React.PropTypes.instanceOf(Person);
  }

  start_area() {
    var a = document.querySelector('#' + this.props.game.start_area)
    var offsetWidth = a.offsetWidth,
        offsetHeight = a.offsetHeight,
        offsetLeft = a.offsetLeft,
        offsetTop = a.offsetTop
    return {
      x: offsetLeft - (this.props.measurements.width_px/2) + offsetWidth / 2,
      y: offsetTop - (this.props.measurements.height_px/2) + offsetHeight / 2
    }
  }

  componentDidMount() {
    var cards = document.querySelectorAll('.card-wrapper')

    TweenLite.set(cards, {
      x: this.start_area().x,
      y: this.start_area().y
    })

    setTimeout( () => {
      this.dealCards(this.shuffleCards())
    }, 2000)
  }

  dealCards() {
    var cards = document.querySelectorAll('.card-wrapper'),
        player_count = this.props.players.length,
        board = Math.min(window.innerWidth, window.innerHeight),
        card_size = Math.max(this.props.measurements.width_px, this.props.measurements.height_px),
        radius = board/2 - card_size*2/3
    var tl = new TimelineLite()

    for (var i = parseInt(cards.length); i--;) {
      var card = cards[i],
          player = i%player_count + 1,
          degrees = 360/player_count*player-90,
          radians = Math.PI * degrees/180,
          x = Math.cos(radians) * radius + radius + card_size/3,
          y = Math.sin(radians) * radius + radius + card_size/6
      var plusOrMinus = Math.random() < 0.5 ? -1 : 1,
          toppish = Math.floor(Math.random() * 10) * plusOrMinus,
          leftish = Math.floor(Math.random() * 10) * plusOrMinus,
          spin = Math.floor(Math.random() * 20) * plusOrMinus

      tl.to(card, 0.5, {x: x+leftish, y: y+toppish, rotation: degrees+90+spin}, 0.1*i)
    }

  }

  shuffleCards() {
    var cards = this.props.cards
    for (var i = cards.length-1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1))
      var temp = cards[i]
      cards[i] = cards[j]
      cards[j] = temp
    }
    return cards
  }

  render() {
    var { name, ...measurements} = this.props.measurements

    return (
      <div id='table'>
        { this.props.players.map( p =>
          <Player key={p.id} {...p} />
        )}

        { this.props.areas.map( a =>
          <Area key={a.id} {...a} {...measurements} />
        )}

        { this.shuffleCards().map( c =>
          <CardWrapper key={c.id} {...c} {...measurements} />
        )}
      </div>
    )
  }
}


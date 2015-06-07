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

  current_user_index() {
    var c
    this.props.players.map( (p,i) => {
      if (p.user_id == this.props.current_user.id) {c = i}
    })
    return c
  }

  componentDidMount() {
    var cards = document.querySelectorAll('.card-wrapper')

    TweenLite.set(cards, {
      x: this.start_area().x,
      y: this.start_area().y
    })

    setTimeout( () => {
      this.deal(cards)
    }, 2000)

  }

  fan(hand) {
    // var tl = new TimelineLite()
    var cards = document.querySelectorAll('.card-wrapper.' + hand),
        area = document.querySelector('#' + hand)
    var aw0 = area.offsetWidth, // original area width
        ah0 = area.offsetHeight,
        ay0 = area.offsetTop,
        ax0 = area.offsetLeft,
        cw0 = cards[0].offsetWidth, // card width
        ch0 = cards[0].offsetHeight,
        ap0 = (ah0-ch0)/2, // area padding
        aw1 = ap0*2 + (cards.length-1)*cw0*0.2+cw0,
        ax1 = (aw0-aw1)/2,
        cy1 = ay0+ap0

    TweenLite.to(area, 1, {width: aw1, x: ax1})

    for (var i = 0; i < cards.length; i++) {
      Card.flip(cards[i])
      var x = ax0+ax1+ap0 + i*cw0*0.2
      TweenLite.to(cards[i], 1, {rotation: 0, y: cy1, x: x})
    }
  }

  deal(cards) {
    var total_players = this.props.players.length
    var tl = new TimelineLite()

    for (var i = parseInt(cards.length); i--;) {
      var card = cards[i],
          turn = i%total_players,
          player = document.querySelector('#'+this.props.players[turn].name),
          x = parseInt(player.dataset.x),
          y = parseInt(player.dataset.y)
      var plusOrMinus = Math.random() < 0.5 ? -1 : 1,
          toppish = Math.floor(Math.random() * 10) * plusOrMinus,
          leftish = Math.floor(Math.random() * 10) * plusOrMinus,
          spin = Math.floor(Math.random() * 20) * plusOrMinus,
          r = parseInt(player.dataset.rotation)+spin+'_short'
      // console.log(  )
      tl.to(card, 0.5, {
        x: x+leftish,
        y: y+toppish,
        rotation: r
      }, 0.1*i)
      card.classList.add(player.id)
      Draggable.get(card).update()
    }

    setTimeout( () => {
      var current_hand = document.querySelector('.player.current-user')
      this.fan(current_hand.id)
    }, 10000)
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
    var { name, ...measurements } = this.props.measurements

    return (
      <div id='table'>
        { this.props.areas.map( a =>
          <Area key={a.id} {...a} {...measurements} />
        )}

        { this.props.players.map( (p, i) =>
          <Player
            key={p.user_id}
            index={i}
            total_players={this.props.players.length}
            current_player={this.current_user_index()}
            board_square={Math.min(window.innerWidth, window.innerHeight)}
            {...p} {...measurements} />
        )}

        { this.shuffleCards().map( c =>
          <Card key={c.id} {...c} {...measurements} />
        )}
      </div>
    )
  }
}


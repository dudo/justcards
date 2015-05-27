class Player {

  render() {
    var playerClass = 'player area'
    if (this.props.current_user) {playerClass += ' current_user'}
    var card_size = Math.max(this.props.width_px, this.props.height_px) * 1.2,
        radius = this.props.board_square/2 - card_size*2/3
    var turn = this.props.index%this.props.total_players + 1,
        degrees = 360/this.props.total_players*turn-90,
        radians = Math.PI * degrees/180,
        x = Math.cos(radians) * radius + radius + card_size/3,
        y = Math.sin(radians) * radius + radius + card_size/6
    var plusOrMinus = Math.random() < 0.5 ? -1 : 1,
        toppish = Math.floor(Math.random() * 10) * plusOrMinus,
        leftish = Math.floor(Math.random() * 10) * plusOrMinus

    var rotation = 'rotate(' + (degrees-90) + 'deg)'
    return (
      <div className={playerClass}
           id={this.props.name}
           style={{top: y,
                   left: x,
                   width: this.props.width_px * 1.2,
                   height: this.props.height_px * 1.2,
                   borderRadius: this.props.border_radius_px * 1.2,
                   transform: rotation}}>
        <p>{this.props.name}</p>
      </div>
    )
  }
}




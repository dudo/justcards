class Player {

  render() {
    var playerClass = this.props.play_order + ' player'
    if (this.props.current_user) {playerClass += ' current_user'}
    return (
      <div className={playerClass}></div>
    )
  }
}
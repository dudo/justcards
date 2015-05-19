class Table {
  static propTypes() {
    // this.title = React.PropTypes.string;
    // this.body = React.PropTypes.string;
    // this.published = React.PropTypes.bool;
    // this.publishedBy = React.PropTypes.instanceOf(Person);
  }

  componentDidMount() {
    var cards = document.querySelectorAll('.card')
    TweenMax.staggerTo(cards, 1, { rotationY: '+=180', repeat: 1, yoyo: true }, 0.1);
  }

  render() {
    var { name, ...measurements} = this.props.measurements
    return (
      <div id='table'>
        { this.props.cards.map( c =>
          <CardWrapper key={c.id} {...c} {...measurements}/>
        )}
      </div>
    )
  }
}


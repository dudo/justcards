class Table {
  static propTypes() {
    // this.title = React.PropTypes.string;
    // this.body = React.PropTypes.string;
    // this.published = React.PropTypes.bool;
    // this.publishedBy = React.PropTypes.instanceOf(Person);
  }

  render() {
    return (
      <div id='table'>
        { this.props.data.map( c =>
          <Card {...c} />
        )}
      </div>
    );
  }
}


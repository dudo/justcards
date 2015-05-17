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
        {[0,1,2,3,4,5,6,1,2,3,4,5,0,1,2,3,4,5].map( v =>
          <Card faceUp={false} />
        )}
      </div>
    );
  }
}


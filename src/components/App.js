class App extends React.Component {
  constructor() {
    super(),

    this.state = {
      photoLibrary: window.photos,
      selPhotoIndex: 0
    };
  }


  setCurrentPic(index) {
    console.log('the new index is', index)
    this.setState({selPhotoIndex: index})
  }

  var sortRating = function(photos) {
    return _.sortBy(photos, (photo) => photo.rating).reverse();
  }

  setRating(rating) {
    this.setState({
      photoLibrary: photoLibrary[selPhotoIndex].rating = rating
    })
  }

  render() {
    return (
      <div>
        <h1>Photo Viewer</h1>
        <AddPhoto />
        <Album photos={this.state.photoLibrary} changePic={this.setCurrentPic.bind(this)} />
        <Favourites photos={this.state.photoLibrary} />
        <Viewer photo={this.state.photoLibrary[this.state.selPhotoIndex]} />
      </div>
      );
    }
  }

  window.App = App;
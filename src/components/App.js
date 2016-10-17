class App extends React.Component {
  constructor() {
    super(),

    this.state = {
      photoLibrary: window.photos,
      selPhotoIndex: 0
    };
  }



  setCurrentPic(index) {
    this.setState({selPhotoIndex: index})
  }

  sortRating (photos) {
    return _.sortBy(photos, (photo) => photo.rating).reverse();
  }

  setRating(rating) {
    this.setState({
      photoLibrary: photoLibrary[selPhotoIndex].rating = rating
    })
  }

  render() {
    console.log('this.state', this.state.photoLibrary)
    var sortedLibrary = this.sortRating(this.state.photoLibrary)
    this.state.photoLibrary = sortedLibrary;
    console.log('this.state', this.state.photoLibrary)

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
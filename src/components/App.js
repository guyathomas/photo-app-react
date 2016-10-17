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

  addPhoto (photoObj) {
    var tempPhotoLibrary = this.state.photoLibrary;
    tempPhotoLibrary.push(photoObj);
    this.setState({photoLibrary:tempPhotoLibrary});
  }

  setRating(rating) {
    this.setState({
      photoLibrary: photoLibrary[selPhotoIndex].rating = rating
    })
  }

  render() {
    var sortedLibrary = this.sortRating(this.state.photoLibrary)
    this.state.photoLibrary = sortedLibrary;

    return (
      <div>
        <div>
          <h1>Photo Viewer</h1>
          <AddPhoto className={"form-control"} photos={this.state.photoLibrary} addPhoto={this.addPhoto.bind(this)}/>
        </div>
        <div className={"container col-md-4"}>
          <Album photos={this.state.photoLibrary} changePic={this.setCurrentPic.bind(this)} />
          <Favourites photos={this.state.photoLibrary} />
        </div>
        <div className={"container-fluid col-md-8"}>
          <Viewer photo={this.state.photoLibrary[this.state.selPhotoIndex]} />
        </div>
      </div>
      );
    }
  }

  window.App = App;
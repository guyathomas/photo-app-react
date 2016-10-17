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

  setRating(rating) {
    this.setState({
      photoLibrary: photoLibrary[selPhotoIndex].rating = rating
    })
  }

  render() {
    return (
      <div>
        <Album photos={this.state.photoLibrary} changePic={this.setCurrentPic.bind(this)} />
        {/*<Viewer photo={this.state.photoLibrary[this.state.selPhotoIndex]} />*/}
      </div>
      );
    }
  }

  window.App = App;
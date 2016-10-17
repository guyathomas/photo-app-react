var AddPhoto = (props) => {

	var title;
	var url;
	
	var newPhoto = function () {
		var photoObj = {
			title: title,
			url: url,
			rating: 5
		}
		props.addPhoto(photoObj)
	}

	var changeTitle = function(e) {
		title = e.target.value;
	}

	var changeurl = function(e) {
		url = e.target.value;
	}

	return (
		<div className="form-inline">
			<input type="text" className="form-control" onChange={changeTitle} placeholder="Photo title" />
			<input type="text" className="form-control" onChange={changeurl} placeholder="Photo url" />
			<button className="form-control" onClick={newPhoto}>Add New Photo</button>
		</div>
	)
}
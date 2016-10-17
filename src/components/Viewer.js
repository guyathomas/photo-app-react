var Viewer = (props) => {
	
	var text = function() {
		console.log(props, this.props);
	}

	var changeRating = function(e) {
		props.setRating(e.target.value)
	}
	
	return (
		<div>
			<h2>Viewer</h2>
			<img src={props.photo.url} width="600"/>
			<div className="col-md-4">
				<h3>{props.photo.title}</h3>
				<p>{"Rated " + props.photo.rating + " out of 5"} </p>
				<select onChange={changeRating} className="form-control">
				    <option value="1">1</option>
				    <option value="2">2</option>
				    <option value="3">3</option>
				    <option value="4">4</option>
				    <option value="5">5</option>
			    </select>
			</div>
		</div>
	)
}

window.Viewer = Viewer;
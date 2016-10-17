var Viewer = (props) => {
	
	var text = function() {
		console.log(props, this.props);
	}
	
	return (
		<div>
			<h2>Viewer</h2>
			<img src={props.photo.url} width="600"/>
		</div>
	)
}

window.Viewer = Viewer;
var Album = (props) => {
	
	var sortRating = function(photos) {
		return _.sortBy(photos, (photo) => photo.rating).reverse();
	}

	return (
		<div className="photo-album">
			<h2>Album</h2>
			<table>
				<tbody>
					<tr>
						<th>Title</th>
						<th>Rating</th>
					</tr>
					{sortRating(props.photos).map((photo, i) => (<PhotoEntry photo={photo} index={i} changePic={props.changePic} />))}
				</tbody>
			</table>
		</div>
	)
};


window.Album = Album;
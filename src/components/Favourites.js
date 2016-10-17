var Favourites = (props) => {

	var favouriteList = function() {
		return props.photos.filter(photo => photo.rating >= 4);
	}

	var sortRating = function(photos) {
		return _.sortBy(photos, (photo) => photo.rating).reverse();
	}

	return (
		<div className="photo-favourites">
			<h2>Favourites</h2>
			<table>
				<tbody>
					<tr>
						<th>Title</th>
						<th>Rating</th>
					</tr>
					{sortRating(favouriteList()).map(photo => <PhotoEntry photo={photo} />)}
				</tbody>
			</table>
		</div>
	)
}

window.Favourites = Favourites;
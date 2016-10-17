var Album = (props) => {

	return (
		<div className="photo-album">
			<h2>Album</h2>
			<table className={"table"}>
				<tbody>
					<tr>
						<th>Title</th>
						<th>Rating</th>
					</tr>
					{props.photos.map((photo, i) => (<PhotoEntry photo={photo} index={i} changePic={props.changePic} />))}
				</tbody>
			</table>
		</div>
	)
};


window.Album = Album;
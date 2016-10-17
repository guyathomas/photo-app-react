var PhotoEntry = (props) => {

	var onPictureClick = function() {
		props.changePic(props.index);
	}

	return (
		<tr onClick={onPictureClick}>
			<td>{props.photo.title}</td>
			<td>{props.photo.rating}</td>
		</tr>
		)
	}

window.PhotoEntry = PhotoEntry;
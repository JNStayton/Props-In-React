const Tweet = (props) => {
	let { username, name, date, message } = props;
	return (
		<div>
			<h3>
				<b>{username}</b> (aka {name})
			</h3>
			<p>
				{message} - {date}
			</p>
		</div>
	);
};

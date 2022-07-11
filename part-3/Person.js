const Person = (props) => {
	let message;
	let { name, age, hobbies } = props;
	if (age < 18) {
		message = <h3>You must be 18 to vote.</h3>;
	} else {
		message = <h3>Please go vote!</h3>;
	}

	if (name.length > 8) {
		name = name.slice(0, 6);
	}

	return (
		<div>
			<h2>
				<b>Name: </b> {name}
			</h2>
			<p>Learn more about this person:</p>
			<ul>
				<li>
					<b>Personal Message: </b> {message}
				</li>
			</ul>
			<ol>
				<b>{name}'s Hobbies:</b>
				{hobbies.map((hobby) => <li>{hobby}</li>)}
			</ol>
		</div>
	);
};

const App = () => {
	return (
		<div>
			<Person name="Jareth" age={11} hobbies={[ 'napping', 'pawing at you for pets' ]} />
			<Person name="Garm" age={12} hobbies={[ 'begging for food', 'begging to go outside' ]} />
			<Person name="Eriikuhhhh" age={34} hobbies={[ 'farting', 'baths', 'mezcal' ]} />
			<Person name="JessicAAaAaAaa" age={31} hobbies={[ 'farting', 'baths', 'wine' ]} />
		</div>
	);
};

ReactDOM.render(<App />, document.getElementById('root'));

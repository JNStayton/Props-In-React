const App = () => {
	return (
		<div>
			<FirstComponent />
			<NamedComponent name="Jessica" />
		</div>
	);
};

ReactDOM.render(<App />, document.getElementById('root'));

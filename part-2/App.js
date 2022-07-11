const App = () => {
	return (
		<div>
			<ul>
				<li>
					<Tweet
						name="Jareth the Cat"
						username="GodEmperor"
						message="As your supreme ruler, I command that we sleep in and induge in catnip all day."
						date={Date()}
					/>
				</li>
				<li>
					<Tweet
						name="Garm the Dog"
						username="BestBoii"
						message="I like #GodEmperor's idea, but I also think we should go outside for a walk"
						date={Date()}
					/>
				</li>
				<li>
					<Tweet
						name="Jareth the Cat"
						username="GodEmperor"
						message="You can toil in the dirt and sun, peasant dog #BestBoii, but I shall fall asleep in the air conditioned indoors, basking in a warm sunbeam."
						date={Date()}
					/>
				</li>
			</ul>
		</div>
	);
};

ReactDOM.render(<App />, document.getElementById('root'));

// day
// Ex. Monday - Month + Day
		  	// Each day would have list of events
		  		// Which would be pulled from DB
		  		// Or events that are created
class Day extends React.Component {
  constructor(props) {
    super(props);
  }
	render() {
		return (
		<div classname='day'>
			<p>{this.props.day} - May 1</p>
			<ul>
				<li>Task 1</li>
				<li>Task 2</li>
				<li>Task 3</li>
			</ul>
		</div>
	)}
};

window.Day = Day;
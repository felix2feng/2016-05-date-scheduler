// Based on what is passed into day as a prop. 


class Day extends React.Component {
  constructor(props) {
    super(props);
  }
	render() {
		console.log("Props: ", this.props)
		console.log("Day of Week: ", this.props.day)
		console.log("Current Date: ", this.props.currentDate)
		console.log("i: ", this.props.i)
		return (
		<div classname='day'>
			<p>{this.props.day} - May {this.props.date + this.props.i}</p>
			<ul>
				<Meeting />
			</ul>
		</div>
	)}
};

window.Day = Day;
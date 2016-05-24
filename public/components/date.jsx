class Meeting extends React.Component {
  constructor(props) {
    super(props);
  }
	render() {
		var meet = this.props.meeting;
		console.log('This is the name', name);
		console.log('Rendering Meeting!');
		console.log('this is the meeting', this.props.meeting)
		return (
		<div classname='meeting'>
			<p>{meet.date} - {meet.shortDescription} with {meet.name}  </p>
			<ul>
				<li>Location: {meet.location} </li>
				<li>Time: {meet.date} at {meet.time} </li>
				<li>Description: {meet.description} </li>
				<li>Contact Information: {meet.phoneNumber}</li>
			</ul>
		</div>
	)}
};

window.Meeting = Meeting;
	

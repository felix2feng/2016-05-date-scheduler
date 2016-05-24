class Meeting extends React.Component {
  constructor(props) {
    super(props);
  }
	render() {
		var meet = this.props.meeting;


		var divStyle = {
			'background-color': '#F4F3F2',
			width: '400px',
		};

		var liStyle = {
			color: "white",
			'background-color': '#4A515F',
			height: '20px',
			width: '400px',
			'text-align': 'center',
			'vertical-align': 'middle'
		};
		return (
		<div classname='meeting' style={divStyle}>
			<p style={liStyle} class="card-header">{meet.date} - {meet.shortDescription} with {meet.name}  </p>
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
	

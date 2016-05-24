class Calendar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      events: ['do some stuff']
    };
  }

  render() {
	 return (
	 	<div>
	 	  <div>
	 	    <InputArea />
	 	  </div>
	 	  <div>
	 	    <h4>This Week</h4>
	 	    <Week events={this.state.events} currentDate={this.props.currentDate} />
	 	  </div>
	 	</div>
	)
  }
}

ReactDOM.render(
  <Calendar currentDate={23} />,
  document.getElementById('main')
);

window.Calendar = Calendar;
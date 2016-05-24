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

// Need to build a databse

ReactDOM.render(
  <Calendar currentDate={new Date()} />,
  document.getElementById('main')
);

window.Calendar = Calendar;
var DateScheduler = React.createClass({
  loadMeetingsFromServer() {
    $.ajax({
      url: this.props.url,
      dataType: 'json',
      cache: false,
      success: function(data) {
        this.setState({data: data});
      }.bind(this),
      error: function(xhr, status, err) {
        console.error(this.props.url, status, err.toString());
      }.bind(this)    
    })
  },

  getInitialState() {
    return { data: {
      meetings: [{
        name: 'Fred Zirdung',
        phoneNumber: '415-547-0254',
        location: 'Local Edition',
        date: 'Saturday',
        time: '7:00PM',
        shortDescription: 'Drinks',
        description: 'Lots of Tasty Cocktails at Local Edition'
      }, 
      {
        name: 'Allen Price',
        phoneNumber: '415-343-0389',
        location: 'Skype',
        date: 'Sunday',
        time: '3:00PM',
        shortDescription: 'Skyping',
        description: 'Hack Reactor Interview sounds fun!'
      }
      ],
      phoneNumbers: [
        {name: "Nancy", phone0: '510', phone1: '393', phone2: '3939'},
        {name: "Jess", phone0: '415', phone1: '883', phone2: '2343'}
      ]    
    }
    };
  },

  serverRequest() {
    this.loadMeetingsFromServer();
    // setInterval(this.loadMeetingsFromServer, this.props.updateInterval)
  },

  handleInputSubmit(submitObj) {
    $.ajax({
      url: this.props.url,
      dataType: 'json',
      type: 'POST',
      data: submitObj,
      cache: false,
      success: function(data) {
        this.setState({data: data});
      }.bind(this),
      error: function(xhr, status, err) {
        console.log(status, err);
        console.error(this.props.url, status, err.toString());
      }.bind(this)    
    }) 
  },



  render() {
	 return (
	 	<div>
	 	  <div>
	 	    <InputArea onSubmit={this.handleInputSubmit}/>
	 	  </div>
	 	  <div>
        <h4>Your Upcoming Dates</h4>
	 	    <DateView meetings={this.state.data.meetings} />
	 	  </div>
	 	</div>
	 )
  }
});

// Need to build a databse

ReactDOM.render(
  <DateScheduler url='/' updateInterval={5000}/>,
  document.getElementById('main')
);

window.DateScheduler = DateScheduler;
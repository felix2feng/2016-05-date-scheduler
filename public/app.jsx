var DateScheduler = React.createClass({
  loadMeetingsFromServer() {
    $.ajax({
      url: this.props.url,
      type: 'GET',
      'contentType': 'application/json', 
      dataType: 'json',
      cache: false,
      success: function(data) {
        console.log('Successful get request!', data);
        this.setState({data: data});
      }.bind(this),
      error: function(xhr, status, err) {
        console.log('xhr: ', xhr);
        console.log('error: ', err);
        console.error(this.props.url, status, err.toString());
      }.bind(this)    
    });
  },

  getInitialState() {
    return {data: []};
  },

  componentDidMount() {
    this.loadMeetingsFromServer();
    setInterval(this.loadMeetingsFromServer, this.props.updateInterval)
  },

  handleInputSubmit(submitObj) {
    $.ajax({
      url: this.props.url,
      dataType: 'json',
      type: 'POST',
      data: submitObj,
      cache: false,
      success: function(data) {
        console.log('Received data from input request', data);
        console.log('Current state', this.state.data);
        // ToDO: Fix the set state
        this.setState({data: data});
      }.bind(this),
      error: function(xhr, status, err) {
        console.log(status, err);
        console.error(this.props.url, status, err.toString());
      }.bind(this)    
    }) 
  },



  render() {
	 var h4Style = {
    color: '#343434'
   };

   return (
	 	
    <div class='container'>
	 	  <div>
	 	    <InputArea onSubmit={this.handleInputSubmit}/>
	 	  </div>
	 	  <div>
        <h3 style={h4Style}>Your Upcoming Dates</h3>
	 	    <DateView meetings={this.state.data} />
	 	  </div>
	 	</div>
	 )
  }
});

// Need to build a databse

ReactDOM.render(
  <DateScheduler url='/meeting' updateInterval={5000}/>,
  document.getElementById('main')
);

window.DateScheduler = DateScheduler;


// { data: {
//       meetings: [{
//         name: 'Fred Zirdung',
//         phoneNumber: '415-547-0254',
//         location: 'Local Edition',
//         date: 'Saturday',
//         time: '7:00PM',
//         shortDescription: 'Drinks',
//         description: 'Lots of Tasty Cocktails at Local Edition'
//       }, 
//       {
//         name: 'Allen Price',
//         phoneNumber: '415-343-0389',
//         location: 'Skype',
//         date: 'Sunday',
//         time: '3:00PM',
//         shortDescription: 'Skyping',
//         description: 'Hack Reactor Interview sounds fun!'
//       }
//       ],
//       phoneNumbers: [
//         {name: "Nancy", phone0: '510', phone1: '393', phone2: '3939'},
//         {name: "Jess", phone0: '415', phone1: '883', phone2: '2343'}
//       ]    
//     }
//     }
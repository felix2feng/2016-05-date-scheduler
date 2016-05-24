// Week class
// Renders each day
class Week extends React.Component {
  constructor(props) {
    super(props);
  }



  render() {
    var week = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
    var numericalDate = this.props.currentDate;
    return (
      <div>
  		  Week 1 <br/>
        {week.map((day, i) => {
          return (<Day day={day} key={i}  />)
        }
        )}
  		</div>
    )
	}
};

window.Week = Week;



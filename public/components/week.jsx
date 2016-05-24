// Week class
// Renders each day
class Week extends React.Component {
  constructor(props) {
    super(props);
  }

  // Create the upcoming numerical week.
    // The items in the array should be objects with numerical date, etc.
  createWeek(today) {
    var dateObj = this.props.currentDate;
    var month = dateObj.getUTCMonth() + 1;
    var day = dateObj.getUTCDate();
    var year = dateObj.getUTCFullYear();
  }

  render() {
    var week = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
    console.log('Current Date in Week.jsx: ', this.props.currentDate);
    var numericalDate = this.props.currentDate.getUTCDate();
    return (
      <div>
        {week.map((day, i) => {
          return (<Day day={day} i={i} date={numericalDate}  />)
        }
        )}
  		</div>
    )
	}
};

window.Week = Week;



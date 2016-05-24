// Week class
// Renders each day
class DateView extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    var meetings = [this.props.meetings][0];
    console.log('Meetings', meetings);
    return (
      <div class='datesView'>
        {meetings.map((meeting, i) => {
          return (
            <Meeting key={i} meeting={meeting} />
          )
        })}
  		</div>
    )
	}
};

window.DateView = DateView;



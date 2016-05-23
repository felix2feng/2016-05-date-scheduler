class Inputs extends React.Component {
  render() {
	 return(
		<form>
		  Name:
		  <input type="text" name="firstname" placeholder="Insert Username..."/><br/>
		  Date's Name:
		  <input type="text" name="lastname" placeholder="Insert Username..."/><br/>
		  Time of Date:
		  <input type="text" name="time" placeholder="Insert Time..."/><br/>
		  Location:
		  <input type="text" name="time" placeholder="Insert Meeting Spot..."/><br/>
		  <input type="submit" value="Submit"/><br/><br/>
		</form>
	   );
  }
}


ReactDOM.render(
  <Inputs />,
  document.getElementById('main')
);
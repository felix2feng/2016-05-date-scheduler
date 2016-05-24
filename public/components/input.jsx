// Input Area - set above the calendar info

class InputArea extends React.Component {


  render() {	
    return(  
      <form>
    	  Name:
    	  <input type="text" name="firstname" placeholder="Insert Username..."/><br/>
    	  Time of Date:
    	  <input type="text" name="time" placeholder="Insert Time..."/><br/>
    	  Location:
    	  <input type="text" name="time" placeholder="Insert Meeting Spot..."/><br/>
    	  <input type="submit" value="Submit"/><br/><br/>
    	</form>
    )
  }
}

// export default InputArea;

window.InputArea = InputArea;


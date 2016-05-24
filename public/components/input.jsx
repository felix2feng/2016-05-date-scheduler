// Input Area - set above the calendar info

var InputArea = React.createClass({
  getInitialState() {
    return {name: '', phone0: '', phone1: '', phone2: ''};
  },
  autoTab(current, maxLength, to) {
    if (current.value.length === maxLength) {
      to.focus();
    }
  },
  handleNameState(text) {
    this.setState({name: text.target.value});
  },
  handlePhone0State(text) {
    this.setState({phone0: text.target.value});
    this.autoTab(document.inputForm.phone0, 3, document.inputForm.phone1);
    // Would be dope if when we will out the length to be 3, to automatically prompt next fillin
  },
  handlePhone1State(text) {
    this.setState({phone1: text.target.value});
    this.autoTab(document.inputForm.phone1, 3, document.inputForm.phone2);
  },
  handlePhone2State(text) {
    this.setState({phone2: text.target.value});
  },
  handleSubmit(e) {
    e.preventDefault();
    var name = this.state.name.trim();
    var phone0 = this.state.phone0.trim();
    var phone1 = this.state.phone1.trim();
    var phone2 = this.state.phone2.trim();
    if (!name || !phone0 || !phone1 || !phone2) {
      return;
    }
    this.props.onSubmit({name, phone0, phone1, phone2})
    this.setState({name: '', phone0: '', phone1: '', phone2: ''});
  },

  render() {	
    return(  
      <form name='inputForm' onSubmit={this.handleSubmit}>
    	  Name:
    	  <input name='name' 
          type="text" 
          value={this.state.name} 
          onChange={this.handleNameState} 
          placeholder="Insert Name..."/><br/>
    	  Phone Number: (
        <input name='phone0' 
          size='3'
          maxlength='3'
          type="text" 
          value={this.state.phone0} 
          onChange={this.handlePhone0State} 
          placeholder="..."/> )
        <input name='phone1' 
          size='3'
          maxlength='3'
          type="text" 
          value={this.state.phone1} 
          onChange={this.handlePhone1State} 
          placeholder="..."/> - 
        <input name='phone2' 
          size='4'
          maxlength='4'
          type="text" 
          value={this.state.phone2} 
          onChange={this.handlePhone2State} 
          placeholder="..."/><br/>
    	  <input type="submit" value="Submit"/><br/><br/>
    	</form>
    )
  }
});

// export default InputArea;

window.InputArea = InputArea;


// Input Area - set above the calendar info

var InputArea = React.createClass({
  getInitialState() {
    return {name: '', 
            phone0: '', 
            phone1: '', 
            phone2: '', 
            shortDescription: '', 
            description: ''
    };
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
    this.autoTab(document.inputForm.phone2, 4, document.inputForm.shortDescription);
  },
  handleShortDescriptionState(text) {
    this.setState({shortDescription: text.target.value});
  },
  handleDescriptionState(text) {
    this.setState({description: text.target.value});
  },
  handleSubmit(e) {
    e.preventDefault();
    var name = this.state.name.trim();
    var phone0 = this.state.phone0.trim();
    var phone1 = this.state.phone1.trim();
    var phone2 = this.state.phone2.trim();
    var shortDescription = this.state.shortDescription.trim();
    var description = this.state.description.trim();
    if (!name || !phone0 || !phone1 || !phone2 || !shortDescription || !description) {
      return;
    }
    this.props.onSubmit({name, phone0, phone1, phone2, shortDescription, description})
    this.setState({
            name: '', 
            phone0: '', 
            phone1: '', 
            phone2: '', 
            shortDescription: '', 
            description: ''
    });
  },

  render() {




    return(  
      <form class="form-horizontal" name='inputForm' onSubmit={this.handleSubmit}>
    	  <div class='form-group'>
          <label class="col-sm-2 control-label" > Name: </label>
            <br></br>
            <input name='name'
              class="col-sm-2 control-label" 
              size='55'
              type="text" 
              value={this.state.name} 
              onChange={this.handleNameState} 
              placeholder=""/>
        </div>
      <div class='form-group'>
    	  <label class="col-sm-2 control-label" > Phone Number: ( </label>
        <input name='phone0' 
          class="col-sm-2 control-label"
          size='9'
          maxlength='3'
          type="text" 
          value={this.state.phone0} 
          onChange={this.handlePhone0State} 
          placeholder=""/>
        <label class="col-sm-2 control-label" > ) </label>
        <input name='phone1' 
          class="col-sm-2 control-label"
          size='9'
          maxlength='3'
          type="text" 
          value={this.state.phone1} 
          onChange={this.handlePhone1State} 
          placeholder=""/>- 
        <input name='phone2' 
          class="col-sm-2 control-label"
          size='16'
          maxlength='4'
          type="text" 
          value={this.state.phone2} 
          onChange={this.handlePhone2State} 
          placeholder=""/><br/>
      </div>
      <div class='form-group'>
        <label class="col-sm-2 control-label" > Short Description: </label>
        <br></br>
        <input name='shortDescription' 
          class="col-sm-2 control-label"
          size='55'
          type="text" 
          value={this.state.shortDescription} 
          onChange={this.handleShortDescriptionState} 
          placeholder=""/><br/>
      </div>
      <div class='form-group'>
        <label class="col-sm-2 control-label" > Description: </label>
        <br></br>
        <input name='description' 
          class="form-horizontal"
          size='55'
          type="text" 
          value={this.state.description} 
          onChange={this.handleDescriptionState} 
          placeholder="Description..."/><br/>
      </div>
      <div class='form-group'>
    	  <button
          id='submit'
          type="submit" 
          class="btn btn-primary btn-block"
          > Submit 
        </button>
      </div><br/><br/>
    	</form>
    )
  }
});

// export default InputArea;

window.InputArea = InputArea;


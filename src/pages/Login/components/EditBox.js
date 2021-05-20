import React, {Component} from 'react';

class EditBox extends Component {

  state = {
    name: ''
  }
  handleChange = (e) => {
    this.setState({
      name: e.target.value
    })
  }


  render() {


    return (

      <form>
        <input
          placeholder={this.props.placeholder}
          value={this.state.name}
          onChange={this.handleChange}
        />
      </form>

    );
  }
}

export default EditBox;
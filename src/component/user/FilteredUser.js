import React, { Component } from 'react'

class FilteredUser extends Component {
  constructor(props) {
    super(props)
    this.state = {
      userFilter: ""
    }
  }
  
  handleChange = (e) => {
    this.setState({ userFilter: e.target.value})
    this.props.onChange(e.target.value)
  }
  
  render() {
    return (
      <div>
        <label htmlFor="filter">Filter by User: </label>
        <input type="text" id="filter" 
          value={this.state.userFilter} 
          onChange={this.handleChange}/>
      </div>
      )
  }
}

export default FilteredUser
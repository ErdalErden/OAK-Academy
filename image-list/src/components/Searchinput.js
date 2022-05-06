import React, { Component } from 'react'

export class Searchinput extends Component {

    constructor(props){
        super(props);
        this.state = {entry:''};
    }

  render() {
    return (
      <div className='ui segment'>
        <form className='ui form'>
            <div className="field">
                <div className="ui massive icon input">
                    <input type="text" 
                    placeholder='Search...' 
                    onChange={(event) => this.setState({entry:event.target.value})}
                    value={this.state.entry}
                    />
                    <i className="search icon"></i>
                </div>
            </div>
        </form>
      </div>
    )
  }
}

export default Searchinput

import React, { Component } from 'react';

export default class TextArea extends Component {

  constructor(props) {
    super(props);
  }

  componentDidMount = () => {      
    
  }

  componentWillUnmount = () => {}

  render() {
    let { code, handleChange, isHide } = this.props;
    return (
      <textarea
        className="code-box flipInX font-size-16"
        value={code}
        onChange={handleChange}
        hidden={isHide}
      />
    )
  }
}

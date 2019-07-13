import React, { Component } from 'react';

export default class CodeBox extends Component {

  constructor(props) {
    super(props);
    this.state = { btnCopyText: "copy", isMounted: false };
    this.txtArea = React.createRef();
    this.handleCopy = this.handleCopy.bind(this);
  }

  handleCopy(event) {
    if (this.txtArea !== undefined && this.state.isMounted) {

      this.txtArea.current.focus();
      this.txtArea.current.select();
      
      document.execCommand('copy');
      event.target.focus();

      this.setState({ btnCopyText: "copied!" });

      setTimeout(() => this.setState({ btnCopyText: "copy" }), 2500);
    }
  }

  componentDidMount = () => { this.setState({ isMounted: true }) }

  componentWillUnmount = () => { this.setState({ isMounted: false }) }

  render() {
    let { code, handleChange, isHide } = this.props;
    return (
      <div className="code-container">

        <button className="btn btn-dark btn-black"
          style={{ display: isHide ? "none" : "block" }}
          onClick={this.handleCopy}>
          <i className="far fa-copy"></i> {this.state.btnCopyText}
        </button>

        <textarea
          className="code-box flipInX"
          value={code}
          onChange={handleChange}
          hidden={isHide}
          ref={this.txtArea}
        />

      </div>)
  }
}

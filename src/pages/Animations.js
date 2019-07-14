import React from 'react';
import { animOptions } from '../data/options';

import '../App.css';
import '../css/Animos.css';

import codeAnimation from '../data/animation';

import Option from '../components/Option';
import CodeBox from '../components/CodeBox';

class Animations extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      isMounted: false,
      txtAnimation: "bounce",
      titleClass: "jumbotron-heading ", playAnim: true,
      isCodeBoxHide: true, codeClx: "", codeFrame: "",
      hideElmnt: false, switchElmnt: false
    };

    this.handleChange = this.handleChange.bind(this);
    this.changeClass = this.changeClass.bind(this);
    this.getCode = this.getCode.bind(this);
    this.handleRadios = this.handleRadios.bind(this);
  }

  handleChange(e) {
    let val = e.target.value;
    let c = codeAnimation.find((a, i) => a.name === val);

    this.setState({
      playAnim: true,
      txtAnimation: val,
      codeClx: c.clx, codeFrame: c.keyframe
    });

  }

  handleRadios(e) {
    this.setState({ switchElmnt: !this.state.switchElmnt })
  }

  changeClass() {
    this.setState({
      playAnim: !this.state.playAnim,
      titleClass: this.state.playAnim ?
        "jumbotron-heading " + this.state.txtAnimation : "jumbotron-heading "
    });
  }

  getCode() {
    let c = codeAnimation.find((a, i) => a.name === this.state.txtAnimation);
    this.setState({
      codeClx: c.clx, codeFrame: c.keyframe,
      isCodeBoxHide: !this.state.isCodeBoxHide
    });
  }

  render() {
    return (
      <>
        <h1 className={this.state.titleClass}
          style={{ display: !this.state.switchElmnt ? "block" : "none" }}>
          Animos<span className="color-rose">.css</span>
        </h1>

        <h1 className={this.state.titleClass}
          style={{ display: this.state.switchElmnt ? "block" : "none" }}>
          <div className="cube display-3 w-50">
          <p className="text-left text-light m-0 text-lowercase">
          Hac ex causa conlaticia stipe Valerius humatur ille Publicola et subsidiis amicorum mariti inops cum liberis uxor alitur Reguli et dotatur ex aerario filia Scipionis, 
          cum nobilitas florem adultae virginis diuturnum absentia pauperis erubesceret patris.</p></div>
        </h1>

        <div className="custom-control custom-switch mb-2">
          <input type="checkbox" className="custom-control-input" id="customSwitch1"
            onClick={this.handleRadios} value={this.state.switchElmnt} />
          <label className="custom-control-label" htmlFor="customSwitch1"></label>
        </div>

        <p className="lead text-muted w-50">
          Collection of free css animations, you can use it whenever you need
        </p>

        <div className="form-group d-inline-flex w-30 mx-auto">
          <select className="form-control" name="animations"
            value={this.state.txtAnimation}
            onChange={this.handleChange}>
            {animOptions.map((o, indx) => <Option key={indx} val={o.val} txt={o.txt} />)}
          </select>

          <div className="btn-group ml-3" role="group" aria-label="Basic example">
            <button className="btn btn-secondary" onClick={this.getCode}>
              <i className="fas fa-laptop-code"></i>
            </button>

            <button className="btn btn-danger btn-rose" onClick={this.changeClass}>
              <i className="fas fa-paw"></i>
            </button>
          </div>

        </div>

        <div className="w-75 mx-auto">
          <CodeBox
            code={this.state.codeClx}
            handleChange={this.handleChange}
            isHide={this.state.isCodeBoxHide} />

          <CodeBox
            code={this.state.codeFrame}
            handleChange={this.handleChange}
            isHide={this.state.isCodeBoxHide} />
        </div>
      </>)
  }
}

export default Animations;


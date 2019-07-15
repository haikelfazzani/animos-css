import React from 'react';
import { animOptions } from '../data/options';

import '../App.css';
import '../css/Animos.css';

import codeAnimation from '../data/animation';

import CodeBox from '../components/CodeBox';
import Select from '../components/Select';
import ButtonIcon from '../components/ButtonIcon';

class Animations extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      isMounted: false,
      txtAnimation: "bounce",
      titleClass: "", playAnim: true,
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
      titleClass: this.state.playAnim ? this.state.txtAnimation : ""
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
        <div className="anim-container mx-auto mb-3">
          <h1 className={"jumbotron-heading " +this.state.titleClass}
            style={{ display: this.state.switchElmnt ? "block" : "none" }}>
            Animos<span className="color-rose">.css</span>
          </h1>

          <div className={"cube " + this.state.titleClass}
            style={{ display: !this.state.switchElmnt ? "block" : "none" }}>

          </div>

        </div>

        <div className="custom-control custom-switch mb-2">
          <input type="checkbox" className="custom-control-input" id="customSwitch1"
            onClick={this.handleRadios} value={this.state.switchElmnt} />
          <label className="custom-control-label" htmlFor="customSwitch1"></label>
        </div>

        <p className="text-muted w-30">
          Collection of free css animations, you can use it whenever you need
        </p>


        <Select clx="form-control w-30 mx-auto mb-3" name="animations"
          val={this.state.txtAnimation}
          handleChange={this.handleChange}
          options={animOptions}
        />

        <div className="btn-group btn-block w-30 mx-auto" role="group" aria-label="Basic example">

          <ButtonIcon clx="btn btn-secondary"
            handleClick={this.getCode}
            iconClass="fas fa-laptop-code"
          />

          <ButtonIcon clx="btn btn-danger btn-rose"
            handleClick={this.changeClass}
            iconClass="fas fa-paw"
          />

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


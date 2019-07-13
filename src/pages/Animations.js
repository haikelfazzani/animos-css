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
      isCodeBoxHide: true, codeClx: "", codeFrame: ""
    };

    this.handleChange = this.handleChange.bind(this);
    this.changeClass = this.changeClass.bind(this);
    this.getCode = this.getCode.bind(this);
  }

  handleChange(e) {
    this.setState({ playAnim: true, txtAnimation: e.target.value });
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
        <h1 className="jumbotron-heading" className={this.state.titleClass}>
          Animos<span className="color-rose">.css</span>
        </h1>

        <p className="lead text-muted">
          it's free css animations, you can use it whenever you need
        </p>

        <div className="form-group w-25 mx-auto">
          <select className="form-control" name="animations"
            value={this.state.txtAnimation}
            onChange={this.handleChange}>
            {animOptions.map((o, indx) => <Option key={indx} val={o.val} txt={o.txt} />)}
          </select>
        </div>

        <p>
          <button className="btn btn-secondary mb-3"
            onClick={this.getCode}>
            <i className="fas fa-code"></i>
          </button>

          <button className="btn btn-rose mb-3 ml-3"
            onClick={this.changeClass}>
            <i className="fas fa-paw"></i>
          </button>
        </p>

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


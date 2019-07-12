import React from 'react';

export default class Footer extends React.Component {

  constructor(props) {
    super(props);
    this.state = { display: true, style: { display: "none" } };
    this.handleScroll = this.handleScroll.bind(this);
  }

  handleScroll(e) {
    e.preventDefault()
    const prev = 0;
    let scrollDown = window.pageYOffset;
    this.setState({ display: prev < scrollDown ? false : true });
  }

  componentDidMount = () => window.addEventListener('scroll', this.handleScroll);

  componentWillUnmount = () => window.removeEventListener('scroll', this.handleScroll);

  render() {
    return (
      <footer className="fixed-bottom mt-auto py-3" style={!this.state.display ? this.state.style : {}}>
        <div className="inner">
          <p className="text-muted font-s14 m-0">
            ❤ CREATED BY HAIKEL FAZZANI ©2019
        </p>
        </div>
      </footer>
    )
  }
}

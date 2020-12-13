import React from 'react';


export default class Header extends React.Component {
  state = {
    hamClass: 'ham-icon',
    menu: false,
  }

  hamToggle = () => {
    if (this.state.hamClass === 'ham-icon') {
      this.setState({
        hamClass: 'ham-icon clicked-ham'
      })
    }
    else {
      this.setState({
        hamClass: 'ham-icon'
      })
    }
  }

  menuToggle = () => {
    this.setState(prevState => ({
      menu: !prevState.menu
    }))
  }

  render() {
    return (
      <header>
        <a href="#about" className='underline'>About Me</a>
        <a href="#projects" className='underline'>Projects</a>
        <a href="#contact" className='underline'>Contact Me</a>
        <div onClick={() => { this.hamToggle(); this.menuToggle() }} className={this.state.hamClass}>
          <div></div>
        </div>
        {this.state.menu &&
          <div className="ham-menu">
            <a onClick={() => { this.hamToggle(); this.menuToggle() }} href="#projects">Projects</a>
            <a onClick={() => { this.hamToggle(); this.menuToggle() }} href="#about">About Me</a>
            <a onClick={() => { this.hamToggle(); this.menuToggle() }} href="#contact">Contact Me</a>
          </div>
        }
      </header>
    )
  }
}

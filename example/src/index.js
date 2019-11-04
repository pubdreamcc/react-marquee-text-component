import React from 'react';
import { render} from 'react-dom';
import ReactDemo from '../../src';
class App extends React.PureComponent {

  state = {
    paused: false // 是否暂定文字轮播
  }
  
  stopText = () => {
    this.setState(state => ({
      paused: !state.paused
    }));
  }

  jump = () => {
    window.open('https://github.com/pubdreamcc/react-marquee-text-component');
  }

  render () {
    const {paused} = this.state;
    return (
      <React.Fragment>
        <div className="header">
          <h1>react-marquee-text-component</h1>
          <a href='https://www.smashingmagazine.com/2016/12/gpu-animation-doing-it-right/' target='blank'>
            [CSS GPU Animation]
          </a>
          <p>Marquee Text for reactjs</p>
          <button onClick={this.jump}>GitHub</button>
        </div>
        <h2>
          Demo
          <button onClick={this.stopText}>Pause</button>
        </h2>
        <ReactDemo 
        paused={paused}
        text='ATX 0,16% DAX 0,04% TecDax 0,19% MDAX 0,03% ESTX50 0,00% NIKKEI 0,03% EUR/CHF0,38% ATX 0,16% DAX 0,04% TecDax 0,19% MDAX 0,03% ATX 0,16% DAX 0,04% ATX 0,16% DAX 0,04%' 
        style={{width: 1520, margin: '20px auto 0', fontSize: 18, backgroundColor: 'black', color: 'white', height: 40, lineHeight: '40px'}}
        />
        <ReactDemo 
        paused={paused}
        duration={9}
        text='Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.' 
        style={{width: 1520, margin: '20px auto 0', fontSize: 18, backgroundColor: '#f8f9fa', height: 40, lineHeight: '40px'}}
        />
        <h2>To small content</h2>
        <p>use prop&nbsp;<em>repeat="NUMBER"</em>&nbsp;when you know the content is not wider than parent</p>
        <span>Default we clone default slot two times</span>
        <ReactDemo 
        text='Short text=END&nbsp;&nbsp;&nbsp;' 
        duration={1}
        style={{width: 1520, margin: '20px auto 0', fontSize: 18, backgroundColor: '#f8f9fa', height: 40, lineHeight: '40px'}}
        />
        <span>after add prop => repeat="12" </span>
        <ReactDemo 
          text='Short text=END&nbsp;&nbsp;&nbsp;' 
          repeat={12}
          duration={1}
          style={{width: 1520, margin: '20px auto 0', fontSize: 18, backgroundColor: '#f8f9fa', height: 40, lineHeight: '40px'}}
          />
      </React.Fragment>
    )
  }
}

render(<App />, document.getElementById("root"));
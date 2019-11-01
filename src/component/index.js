// react-marquee-text-component

import React from 'react';
import PropTypes from 'prop-types';
import './index.css';
class Marquee extends React.PureComponent {
  static propTypes = {
  	duration: PropTypes.number,  // 动画周期
  	repeat: PropTypes.number,  // 插槽数量
  	paused: PropTypes.bool,  // 暂停或运行动画
		text: PropTypes.string.isRequired,  // 跑马灯文字
		style: PropTypes.object, // 内联样式
		className: PropTypes.string // 类名
  }

  static defaultProps = {
  	duration: 15,
  	repeat: 2,
  	paused: false
  }

  constructor (props) {
  	super(props);
  	this.state = {
  		text: props.text
  	};
  }

  componentWillReceiveProps (nextProps) {
  	if (nextProps.text) {
  		this.setState({text: nextProps.text});
  	}
  }

  // 渲染跑马灯元素
  renderMarquee = () => {
		const {text} = this.state
  	const {repeat, paused, duration} = this.props;
		const arr = [];
		for(let i = 0; i < repeat; i++) {
			arr.push(<div className={paused? 'marquee-text paused':'marquee-text'} key={i} style={{animationDuration: `${duration}s`}}>{text}</div>)
		}
		return arr;
  }

  render () {
		const prefixCls = 'marquee';
		const {className = '', style = {}} = this.props;
  	return (
  		<div className={className ? `${prefixCls}-wrap ${className}` : `${prefixCls}-wrap`} style={JSON.stringify(style) !== '{}' ? style : {}}>
  			<div className={`${prefixCls}-content`}>
  				{this.renderMarquee()}
  			</div>
  		</div>
  	);
  }
}

export default Marquee;

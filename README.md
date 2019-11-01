# react-marquee-text-component

![npm](https://img.shields.io/npm/v/react-marquee-text-component)   ![NPM](https://img.shields.io/npm/l/react-marquee-text-component) ![npm](https://img.shields.io/npm/dw/react-marquee-text-component) ![GitHub stars](https://img.shields.io/github/stars/pubdreamcc/react-marquee-text-component?label=star)

基于react的跑马灯文字效果。

## Installation

```shell
npm install react-marquee-text-component --save
```

## Usage

```js
import React from 'react';
import MarqueeText from 'react-marquee-text-component';

class Demo extends React.Component {
  render() {
    const text = '这是一段滚动轮播的文字';
    return (
      <MarqueeText text={text}/>
    )
  }
}
```

## API

|Prop    |Type   |Default| Description        |
| -------|:-----:|:-----:| -------------------|
|duration|Number |15|Animation Duration     |
|repeat	 |Number |2 |Number of repeat the Slot (It's important for to short content)            |
|paused  |Boolean|false|The property specifies whether the animation is running or paused|
|style|Object||Style of marquee text|
|className|String||The class name of the marquee text|


## License

MIT
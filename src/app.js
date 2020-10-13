const {Button, TextView, contentView} = require('tabris');

contentView.background = 'red';
new Button({
  centerX: true, top: 100,
  text: 'Show message'
}).onSelect(() => {
  textView.text = 'Tabris.js rocks! Qiaolijie gogogo';
}).appendTo(contentView);

const textView = new TextView({
  centerX: true, top: 'prev() 50',
  font: '24px'
}).appendTo(contentView);

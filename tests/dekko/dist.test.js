const $ = require('dekko');

$('dist')
  .isDirectory()
  .hasFile('antd-bsc.css')
  .hasFile('antd-bsc.min.css')
  .hasFile('antd-bsc.js')
  .hasFile('antd-bsc.min.js');

// eslint-disable-next-line
console.log('`dist` directory is valid.');

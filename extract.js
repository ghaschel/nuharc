const inquirer = require('inquirer');
const nodeUharc = require('node-uharc');
const defaults = require('./defaults.json');

const extract = () => {
  inquirer.prompt([
    {
      type: 'input',
      name: 'input',
      message: 'File to extract?',
      default: './opt.uha'
    },
    {
      type: 'input',
      name: 'output',
      message: 'Path to extract to:',
      default: './opt'
    }
  ]).then(data => {
    const config = {
      ...defaults.extract,
      files: data.input,
      output: data.output,
    }
    nodeUharc(config)
  })
}

module.exports = { extract };
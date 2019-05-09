const inquirer = require('inquirer');
const nodeUharc = require('node-uharc');
const defaults = require('./defaults.js');

const compress = () => {
  inquirer.prompt([
    {
      type: 'input',
      name: 'input',
      message: 'Which files to include?',
      default: './*'
    },
    {
      type: 'input',
      name: 'output',
      message: 'Filename to output to',
      default: './opt.uha'
    },
    {
      type: 'rawlist',
      name: 'compressionMode',
      message: 'Compression method? (PPM is best for text files)',
      choices: [
        'LZP',
        'ALZ',
        'PPM'
      ] 
    }
  ]).then(data => {
    const config = {
      ...defaults.add,
      files: data.input,
      output: data.output,
      compressionMode: data.compressionMode
    }
    nodeUharc(config)
  })
}

module.exports = { compress };
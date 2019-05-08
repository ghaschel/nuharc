const inquirer = require('inquirer');
const program = require('commander');
const pjson = require('./package.json');
const nodeUharc = require('node-uharc');

const defaults = {
  add: {
   headerEncryption: true, // archive header encryption
   recursive: true, //should include subfolders
   clearFileArchiceAttr: true, // clear file archive attr
   multimediaCompression: true  // enable multimedia detection and compression
  }
}

program.version(pjson.version).description('Node uharc');

program
  .command('add')
  .alias('a')
  .description('Compress the directory recursively')
  .action(() => {
    const config = {
      ...defaults.add,
      files: './*',
      output: './opt.uha',
      compressionMode: 'LZP'
    }
    nodeUharc(config);
  });

if (process.argv[2]) {
  program.parse(process.argv);
} else {
  inquirer.prompt([
    {
      type: 'rawlist',
      name: 'option',
      message: 'Welcome to NUharc',
      choices: [
        'Add',
        'Extract'
      ],
      filter: val => val.toLowerCase()
    }
  ])
  .then(answers => {
    if (answers.option === 'add') {
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
  });
}
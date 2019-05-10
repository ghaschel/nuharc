#! /usr/bin/env node
const inquirer = require('inquirer');
const program = require('commander');
const pjson = require('./package.json');
const nodeUharc = require('node-uharc');
const defaults = require('./defaults.json');
const compress = require('./compress.js').compress;
const extract = require('./extract.js').extract;

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

program
  .command('extract')
  .alias('x')
  .description('Extract a file to an output folder')
  .action(() => {
    const config = {
      ...defaults.extract,
      files: './opt.uha',
      output: './opt'
    }
    nodeUharc(config)
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
      compress();
    } else {
      extract()
    }
  });
}
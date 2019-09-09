# Nuharc [![npm version](https://badge.fury.io/js/nuharc.svg)](https://badge.fury.io/js/nuharc) [![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/ghaschel/nuharc/blob/master/LICENSE)

My tribute to an old file compressor 🤓

> A blast from the past - *Said no one*

This is a cli for [node-uharc](https://github.com/ghaschel/node-uharc) with the purpose of bringing [uharc](https://translate.google.com/translate?sl=auto&tl=en&u=https%3A%2F%2Fde.wikipedia.org%2Fwiki%2FUHARC) to unix plattform as well.

#### Notice: this is pretty experimental.

Uharc was a file compression for windows only. It uses Wine for compability with Unix systems.
- Ubuntu and apt-get systems: will ask for sudo so that it can install Wine. You can check the install script [here](https://github.com/ghaschel/node-uharc/blob/master/scripts/linux-install.sh).
- MacOS: it uses homebrew to install wine, and by default no Homebres package ask for sudo. But apparently for a issue with brew in High Sierra it needs to re-gain ownership of the downloaded files. You can check the install script [here](https://github.com/ghaschel/node-uharc/blob/master/scripts/mac-install.sh).

### Installation:
`npm install -g nuharc`

### How to use:
`nuharc` then follow the on-screen choices

or

`nuharc a` to compress all files and directories in the current directory recursively to a file named `opt.uha`

`nuharc x` to extract the `opt.uha` file present in the current directory to a `opt` folder.

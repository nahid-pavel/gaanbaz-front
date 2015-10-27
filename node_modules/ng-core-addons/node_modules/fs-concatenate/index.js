#!/usr/bin/env node
var nut = require('nut-cli');
var Lineup = require('lineup');
lineup = new Lineup();
var path = require('path');
var concatenator = require('./lib/concatenate');

nut.bootCommand('fs-con');
nut.addCommand('','[path:String]','Enter input and output paths');

nut.addCommandOptions('','-i','[<path/to/input_directory>:String]','Enter input path');
nut.addCommandOptions('','-o','[<path/to/output_directory>:String]','Enter output path');
var commands = nut.parse();

if(commands['-i'] && commands['-o']){
  var input = commands["-i"];
  var output = commands["-o"];
  concatenator.concatenate(input,[],output);
}else{
  lineup.log.error("Enter input directory and output path");
  process.exit(1);
}

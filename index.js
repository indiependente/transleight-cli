#!/usr/bin/env node

var transleight = require('transleight');

var lang = process.argv[2];

if(!lang)
	throw new Error('Usage: transleight-cli <targetlanguage>');
if (lang.indexOf('-') == 0) {
	switch (lang){
		case '-l' : {console.log(transleight.supportedLangs());break;}
		case '-h' : {console.log('transleight-cli\nA cli for transleight Language Translation Stream.\n\
Usage:\ntransleight-cli <targetlanguage>\nOptions:\n-l : shows all the supported languages.\n-h : shows this menu\n');break;}
		default : {console.log('Unknown option. Try transleight-cli -h for help.');}
	}
}
else
	process.stdin.pipe(transleight.stream(lang)).pipe(process.stdout);
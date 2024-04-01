// Mig's vCPU
// version => 0.0.1 alpha #1
// env => nodejs
// script => javascript
// CPU(s) => null

var usr
var clock
var cpu
var emu
var initalize

const clock = x

function _init() {
    // initial cpu set
};

function _conf() {
    // cpu main configuration
}

function _emu() {
    // cpu emulation manager
	const { program } = require('commander);
	program
	 .name('Miguel´s vCPU manager')
	 .version('0.0.1')

	// start cpu command
	program.command('start')
	.description('Start vCPU emulation manager')

	program.parse();
}

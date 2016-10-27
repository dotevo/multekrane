const {BrowserWindow} = require('electron')

class Fenestro extends BrowserWindow{
	constructor() {
		super({width: 800, height: 600})
		this.loadURL(`file://${__dirname}/index.html`)
		this.on('close', function() {
		})
	}
}

module.exports = Fenestro

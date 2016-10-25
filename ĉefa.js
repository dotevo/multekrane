const {app} = require('electron')
const Fenestro = require('./fontkodo/fenestro')
const Apleto = require('./fontkodo/apleto')

function krei() {
	var fenestro = new Fenestro()
	new Apleto({'fenestro':fenestro})
}

app.on('ready', krei)

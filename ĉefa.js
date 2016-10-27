const {app} = require('electron')
const Fenestro = require('./fontkodo/fenestro')
const Apleto = require('./fontkodo/apleto')

const Serĉilo = require('./fontkodo/serĉilo')
new Serĉilo()

const XRandR = require('./fontkodo/xrandr')
XRandR.akiriEkranojn(function(ekranoj) {
	console.log(ekranoj)
})

function krei() {
	var fenestro = new Fenestro()
	new Apleto({'fenestro':fenestro})
}

app.on('ready', krei)

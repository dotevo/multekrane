const {app} = require('electron')
const Fenestro = require('./fontkodo/fenestro')
const Apleto = require('./fontkodo/apleto')

const Serĉilo = require('./fontkodo/serĉilo')
new Serĉilo()

const XRandR = require('./fontkodo/xrandr')
XRandR.on('preta', function(analizdatumoj) {
	console.log(analizdatumoj)
});

XRandR.on('ŝanĝita', function(analizdatumoj) {
	console.log('ŝanĝo')
});

function krei() {
	var fenestro = new Fenestro()
	new Apleto({'fenestro':fenestro})
}

app.on('ready', krei)

const dgram = require('dgram')
const etendi = require('xtend')

class Serĉilo {
	constructor(opcioj) {
		let ĉi = this
		this.opcioj = etendi(
			{
				pordo: 16111,
				ip: '192.168.0.255'
			},opcioj)

		//Kreas konekt-interfacon
		this.servilo = dgram.createSocket({type: 'udp4', reuseAddr: true})

		this.servilo.on('message', this.mesaĝo)
		this.servilo.on('listening', function () {
			var adreso = ĉi.servilo.address()
			console.log('servilo aǔskultas ' + adreso.address + ':' + adreso.port)
			//elsendo
			ĉi.servilo.setBroadcast(true)
		});

		this.servilo.bind(this.opcioj.pordo)
		var message = 'TESTO'
		this.servilo.send(message, 0, message.length,
			this.opcioj.pordo, this.opcioj.ip)
	}

	mesaĝo(mesaĝo, rinfo) {
		console.log('servilo akiris: ' + mesaĝo + ' el ' +
			rinfo.address + ':' + rinfo.port)
	}
}

module.exports = Serĉilo;

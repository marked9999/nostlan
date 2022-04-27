const log = console.log;

class Nostlan_emfceux {
	constructor() {
		this.bits = 0;
		this.btns = ['a', 'b', 'select', 'start', 'up', 'down', 'left', 'right'];
		this.fceux;
		this.ready = false;
		this.cfg = {};
	}

	async launch(game, cfg) {
		this.fceux = await FCEUX();
		// Initialize the instance (creates Web Audio etc.)
		this.fceux.init('#screen0');

		// Download a game ROM and start it.
		this.fceux.downloadGame(game.file);

		// Run the emulation update loop.
		// Use requestAnimationFrame() to synchronise to repaints.
		let _this = this;

		function updateLoop() {
			window.requestAnimationFrame(updateLoop);
			_this.fceux.update();
		}
		window.requestAnimationFrame(updateLoop);

		await this.fceux.ready;

		if (cfg.saveStates) {
			let saveStates = {};
			for (let slot in cfg.saveStates) {
				let state = cfg.saveStates[slot];
				let text = await (await fetch(state.file)).text();
				let data = [];
				for (let i = 0; i < text.length; i++) {
					data.push(text.charCodeAt(i));
				}
				saveStates['rom.fc' + slot] = new Uint8Array(data);
			}
			log(saveStates);
			this.fceux.importSaveFiles(saveStates);
		}

		if (cfg.mute) this.mute(true);

		this.ready = true;
	}

	// The array index below corresponds to the button bit index.
	// ['A','B','Select','Start','Up','Down','Left','Right']
	controIn(contro) {
		if (!this.ready) return;
		let port = contro.port;
		for (let i = 8 * port; i < 8 * (port + 1); i++) {
			if (contro.btns[this.btns[i % 8]]) {
				this.bits |= 1 << i;
			} else {
				this.bits &= ~(1 << i);
			}
		}
		this.fceux.setControllerBits(this.bits);
	}

	close() {}

	pause(toggle) {
		toggle ??= true;
		this.fceux.setPaused(toggle);
	}

	unpause() {
		this.pause(false);
	}

	mute(toggle) {
		toggle ??= !this.fceux.muted();
		this.fceux.setMuted(toggle);
	}

	unmute() {
		this.mute(false);
	}

	saveState(slot) {
		if (typeof slot == 'number') {
			this.fceux.setState(slot);
		}
		this.fceux.saveState();

		let data = this.fceux.exportSaveFiles();
		data = data['rom.fc' + slot];
		data = Array.from(data);
		let ping = {
			saveState: {
				slot: slot,
				data: data,
				ext: '.fc' + slot
			}
		};
		nostlan.send(JSON.stringify(ping));
	}

	loadState(slot) {
		if (typeof slot == 'number') {
			this.fceux.setState(slot);
		}
		this.fceux.loadState();
	}
}

let jsEmu = new Nostlan_emfceux();

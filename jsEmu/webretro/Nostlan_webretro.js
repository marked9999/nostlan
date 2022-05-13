class Nostlan_webretro {
	constructor() {
		this.ready = false;
	}

	async launch(game, cfg) {
		console.log('launching webretro');
		ffd.style.display = 'none';
		this.isNintendoSystem = cfg.sys == 'gba' || cfg.sys == 'nes' || cfg.sys == 'n64' || cfg.sys == 'snes';

		let data = await (await fetch(game.file)).arrayBuffer();
		romUploadCallback(game.file, data);
		this.ready = true;
	}

	controIn(contro) {
		if (!this.ready) return;
		let { btns } = contro;
		if (this.isNintendoSystem) {
			let tmp = btns.a;
			btns.a = btns.b;
			btns.b = tmp;
			tmp = btns.x;
			btns.x = btns.y;
			btns.y = tmp;
		}
		for (let name in btns) {
			gamepadsSpoof.button(contro.port, name, btns[name]);
		}
	}

	close() {
		if (stateReadersReady) {
			// export save state data
			let data = FS.readFile('/home/web_user/retroarch/userdata/states/rom.state');
			let ping = {
				saveState: {
					slot: 0,
					data: Array.from(data),
					ext: '.state'
				}
			};
			nostlan.send(JSON.stringify(ping));
		}
		if (saveReadersReady) {
			let data = FS.readFile('/home/web_user/retroarch/userdata/saves/rom' + sramExt);
			let ping = {
				save: {
					data: Array.from(data),
					ext: sramExt
				}
			};
			nostlan.send(JSON.stringify(ping));
		}
	}

	pause(toggle) {
		toggle ??= true;
		if (toggle) {
			Module.pauseMainLoop();
			isPaused = true;
			document.body.classList.add('paused');
		} else {
			Module.resumeMainLoop();
			isPaused = false;
			document.body.classList.remove('paused');
		}
	}

	unpause() {
		this.pause(false);
	}

	mute(toggle) {
		// toggle ??= !this.fceux.muted();
		// this.fceux.setMuted(toggle);
	}

	unmute() {
		this.mute(false);
	}

	loadState() {
		if (stateReadersReady) {
			Module._cmd_load_state();
			readyStateReaders2();
		} else {
			alert('no save state found!');
		}
	}

	saveState() {
		Module._cmd_save_state();
		readyStateReaders();
	}

	undoSaveState() {
		if (stateReaders2Ready) Module._cmd_undo_save_state();
	}
}

let jsEmu = new Nostlan_webretro();

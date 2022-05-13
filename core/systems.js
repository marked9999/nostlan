/*
 * systems.js
 *
 * name: the short name
 * fullName: the full name
 * emus: emulators of that system
 * mediaType: cart, disc, or pcb
 * gameExts: game file extensions
 * gamesDir: use if games are stored in emu file structure
 * imagesDir: use if images are stored in emu file structure
 */
module.exports = {
	arcade: {
		name: 'Arcade',
		fullName: 'Arcade',
		emus: ['mame'],
		addImgTypes: ['cabinet'],
		containerType: 'box',
		mediaType: 'pcb'
	},
	ds: {
		name: 'DS',
		fullName: 'Nintendo DS',
		emus: ['melonds', 'ds_player', 'desmume'],
		mediaType: 'cart',
		gameExts: ['nds', 'tad', 'srl']
	},
	gba: {
		name: 'GBA',
		fullName: 'Nintendo Game Boy Advance',
		emus: ['webretro', 'mgba', 'vba'],
		mediaType: 'cart',
		containerType: 'box',
		hash: 'crc32',
		gameExts: ['gba']
	},
	gcn: {
		name: 'GameCube',
		fullName: 'Nintendo GameCube',
		mediaType: 'disc'
		// same extensions as wii
	},
	n3ds: {
		name: '3DS',
		fullName: 'Nintendo 3DS',
		emus: ['citra'],
		mediaType: 'cart',
		gameExts: ['3ds', 'cci', 'cxi', 'cfa']
	},
	n64: {
		name: 'N64',
		fullName: 'Nintendo 64',
		emus: ['project64', 'mupen64plus', 'webretro'],
		mediaType: 'cart',
		containerType: 'box',
		hash: 'sha1',
		gameExts: ['n64', 'rom', 'bin', 'jap', 'pal', 'usa', 'eur', 'u64', 'v64', 'z64', 'd64']
	},
	nes: {
		name: 'NES',
		fullName: 'Nintendo Entertainment System',
		emus: ['em-fceux', 'mesen', 'webretro'],
		mediaType: 'cart',
		containerType: 'box',
		hash: 'crc32',
		gameExts: ['nes', 'fds']
	},
	ps2: {
		name: 'PS2',
		fullName: 'Sony PlayStation 2',
		emus: ['pcsx2'],
		mediaType: 'disc',
		gameExts: ['iso']
	},
	ps3: {
		name: 'PS3',
		fullName: 'Sony PlayStation 3',
		emus: ['rpcs3'],
		mediaType: 'disc',
		gameFolders: true,
		gameRoot: '/USRDIR/EBOOT.BIN'
	},
	smd: {
		name: 'Genesis',
		fullName: 'SEGA Genesis',
		emus: ['webretro'],
		mediaType: 'cart',
		hash: 'crc32',
		gameExts: ['md', 'smd', 'gen', '32x', 'bin', 'rom']
	},
	snes: {
		name: 'SNES',
		fullName: 'Super Nintendo',
		emus: ['bsnes', 'webretro', 'snes9x'],
		mediaType: 'cart',
		containerType: 'box',
		columnAmount: 4,
		hash: 'sha256',
		gameExts: ['snes', 'smc', 'sfc']
	},
	switch: {
		name: 'Switch',
		fullName: 'Nintendo Switch',
		emus: ['yuzu', 'ryujinx', 'ryujinx-ldn'],
		mediaType: 'cart',
		gameExts: ['nsp', 'xci', 'nca', 'nso']
	},
	wii: {
		name: 'Wii',
		fullName: 'Nintendo Wii',
		emus: ['dolphin'],
		peers: ['gcn'],
		mediaType: 'disc',
		gameExts: ['gcm', 'iso', 'tgc', 'gcz', 'rvz', 'wbfs', 'wad', 'elf', 'dol']
	},
	wiiu: {
		name: 'Wii U',
		fullName: 'Nintendo Wii U',
		emus: ['cemu'],
		mediaType: 'disc',
		gameExts: ['rpx', 'rpl', 'wud', 'wux'],
		gameFolders: true,
		gameFolderSearchDepthLimit: 1,
		gameRoot: 'code'
	},
	xbox: {
		name: 'Xbox',
		fullName: 'Microsoft Xbox',
		emus: ['cxbx-reloaded', 'xemu'],
		mediaType: 'disc',
		gameExts: ['xbe'],
		gameFolders: true
	},
	xbox360: {
		name: 'Xbox 360',
		fullName: 'Microsoft Xbox 360',
		emus: ['xenia'],
		mediaType: 'disc',
		gameExts: ['iso', 'xex']
	}
};

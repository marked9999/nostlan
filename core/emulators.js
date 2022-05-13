module.exports = (() => {
	let emus = {
		bsnes: {
			// RIP Near 6/27/2021 :(
			name: 'bsnes',
			sys: 'snes',
			site: 'https://github.com/bsnes-emu/bsnes',
			discord: 'https://discord.gg/B27hf27ZVf',
			appRegex: {
				linux: 'bsnes_hd',
				mac: 'bsnes_hd\\.app',
				win: 'bsnes\\.exe'
			},
			cmd: {
				linux: ['${app}', '${game}', '--fullscreen'],
				mac: ['${app}', '${game}', '--fullscreen'],
				win: ['${app}', '${game}', '--fullscreen']
			},
			install: {
				'linux-x64': {
					portable: 'https://github.com/DerKoun/bsnes-hd/releases/download/beta_10_6/bsnes_hd_beta_10_6_linux.tar.bz2'
				},
				'mac-x64': {
					portable: 'https://github.com/DerKoun/bsnes-hd/releases/download/beta_10_6/bsnes_hd_beta_10_6_mac.tar.bz2'
				},
				'mac-arm64': {
					portable: 'https://github.com/DerKoun/bsnes-hd/releases/download/beta_10_6/bsnes_hd_beta_10_6_mac.tar.bz2'
				},
				'win-x64': {
					portable: 'https://github.com/bsnes-emu/bsnes/releases/download/nightly/bsnes-windows.zip'
				}
			}
		},
		cemu: {
			name: 'Cemu',
			sys: 'wiiu',
			site: 'http://cemu.info/',
			patreon: 'https://www.patreon.com/cemu',
			discord: 'https://discord.gg/5psYsup',
			appRegex: {
				linux: 'Cemu\\.exe',
				mac: 'Cemu\\.exe',
				win: 'Cemu\\.exe'
			},
			cmd: {
				linux: ['wine', '${app}', '-g', '${game}', '-f'],
				mac: ['wine', '${app}', '-g', '${game}', '-f'],
				win: ['${app}', '-g', '${game}', '-f']
			},
			install: {
				'linux-x64': {
					portable: 'https://cemu.info/releases/cemu_1.24.0.zip'
				},
				'mac-x64': {
					portable: 'https://cemu.info/releases/cemu_1.24.0.zip'
				},
				'win-x64': {
					portable: 'https://cemu.info/releases/cemu_1.24.0.zip'
				}
			}
		},
		citra: {
			name: 'Citra',
			sys: 'n3ds',
			site: 'https://citra-emu.org/',
			patreon: 'https://www.patreon.com/citraemu',
			discord: 'https://citra-emu.org/discord/',
			app: {
				linux: 'org.citra_emu.citra'
			},
			appDirs: {
				mac: ['/Applications/Citra/nightly', '/Applications/Citra/canary'],
				win: [
					'$home/AppData/Local/Citra/nightly-mingw',
					'$home/AppData/Local/Citra/canary-mingw',
					'$emu/nightly-mingw',
					'$emu/canary-mingw'
				]
			},
			appRegex: {
				mac: 'citra-qt\\.app',
				win: 'citra-qt\\.exe'
			},
			cmd: {
				linux: ['flatpak', 'run', '${app}', '${game}', '-f'],
				mac: ['${app}', '${game}', '-f'],
				win: ['${app}', '${game}', '-f']
			},
			install: {
				'linux-x64': {
					pkgManager_flatpak: [
						['flatpak', 'remote-add', '--if-not-exists', 'flathub', 'https://flathub.org/repo/flathub.flatpakrepo'],
						['flatpak', 'install', 'flathub', 'org.citra_emu.citra']
					]
				},
				'mac-x64': {
					installer: 'https://github.com/citra-emu/citra-web/releases/latest/download/citra-setup-mac.dmg'
				},
				'mac-arm64': {
					installer: 'https://github.com/citra-emu/citra-web/releases/latest/download/citra-setup-mac.dmg'
				},
				'win-x64': {
					installer: 'https://github.com/citra-emu/citra-web/releases/latest/download/citra-setup-windows.exe'
				}
			},
			saveDirs: {
				linux: ['$home/.local/share/citra-emu/sdmc'],
				mac: ['$home/.local/share/citra-emu/sdmc'],
				win: ['$home/AppData/Roaming/Citra/sdmc']
			}
		},
		'cxbx-reloaded': {
			name: 'Cxbx-Reloaded',
			sys: 'xbox',
			site: 'https://cxbx-reloaded.co.uk/',
			patreon: 'https://www.patreon.com/LukeUsher',
			discord: 'https://discord.gg/26Xjx23',
			appRegex: {
				win: 'cxbx\\.exe'
			},
			cmd: {
				win: ['${app}', '${game}']
			},
			install: {
				'win-x64': {
					prereqs: [{ installer: 'https://aka.ms/vs/16/release/vc_redist.x86.exe' }],
					portable:
						'https://github.com/Cxbx-Reloaded/Cxbx-Reloaded/releases/download/CI-db1bae2/CxbxReloaded-Release-VS2019.zip'
				}
			}
		},
		desmume: {
			name: 'DeSmuME',
			sys: 'ds',
			site: 'http://desmume.org/',
			forum: 'http://forums.desmume.org/',
			app: {
				linux: 'org.desmume.DeSmuME'
			},
			appRegex: {
				mac: 'DeSmuME.*\\.app',
				win: 'DeSmuME.*\\.exe'
			},
			cmd: {
				linux: ['flatpak', 'run', '${app}', '${game}'],
				mac: ['${app}', '${game}'],
				win: ['${app}', '${game}']
			},
			install: {
				'linux-x64': {
					pkgManager_flatpak: [
						['flatpak', 'remote-add', '--if-not-exists', 'flathub', 'https://flathub.org/repo/flathub.flatpakrepo'],
						['flatpak', 'install', 'flathub', 'org.desmume.DeSmuME']
					]
				},
				'mac-x64': {
					standalone: 'https://drive.google.com/uc?export=download&id=1XGf24WNHTkewXGD9_U7kH49nsjdYDrcK .zip'
				},
				'win-x64': {
					standalone:
						'https://ci.appveyor.com/api/buildjobs/yk4i2mh53wukiy4d/artifacts/desmume%2Fsrc%2Ffrontend%2Fwindows%2F__bins%2FDeSmuME-VS2019-x64-Release.exe'
				}
			}
		},
		dolphin: {
			name: 'Dolphin',
			sys: 'wii',
			site: 'https://dolphin-emu.org/',
			forum: 'https://forums.dolphin-emu.org/',
			app: {
				linux: 'org.DolphinEmu.dolphin-emu'
			},
			appRegex: {
				mac: 'dolphin\\.app',
				win: 'Dolphin\\.exe'
			},
			cmd: {
				linux: ['flatpak', 'run', '${app}', '-e', '${game}', '--config', '"Dolphin.Display.Fullscreen=True"'],
				mac: ['${app}', '-e', '${game}', '--config', '"Dolphin.Display.Fullscreen=True"'],
				win: ['${app}', '-e', '${game}', '--config', '"Dolphin.Display.Fullscreen=True"']
			},
			install: {
				'linux-x64': {
					pkgManager_flatpak: [
						['flatpak', 'remote-add', '--if-not-exists', 'flathub', 'https://flathub.org/repo/flathub.flatpakrepo'],
						['flatpak', 'install', 'flathub', 'org.DolphinEmu.dolphin-emu']
					]
				},
				'mac-x64': {
					installer: 'https://dl.dolphin-emu.org/builds/9e/de/dolphin-master-5.0-14344-universal.dmg'
				},
				'mac-arm64': {
					installer: 'https://dl.dolphin-emu.org/builds/9e/de/dolphin-master-5.0-14344-universal.dmg'
				},
				'win-x64': {
					portable: 'https://dl.dolphin-emu.org/builds/99/df/dolphin-master-5.0-12247-x64.7z'
				}
			}
		},
		'em-fceux': {
			name: 'em-fceux',
			sys: 'nes',
			site: 'https://bitbucket.org/tsone/em-fceux/src/master/',
			appRegex: 'index\\.html',
			jsEmu: true,
			install: {
				jsEmu: 'https://unpkg.com/em-fceux/dist/fceux.wasm'
			},
			saveStateSlots: 10,
			loadStateSlots: 10,
			latestVersion: '1.1.1',
			dev: false,
			mute: false,
			volume: 20,
			keyboard: [{}, {}]
		},
		ds_player: {
			name: 'DS Player',
			sys: 'ds',
			site: 'https://ds.44670.org/',
			patreon: 'https://www.patreon.com/ds44670',
			appRegex: 'index\\.html',
			jsEmu: true,
			install: {
				jsEmu: 'https://github.com/quinton-ashley/ds_player/archive/refs/heads/main.zip'
			},
			saveStateSlots: 1,
			loadStateSlots: 1,
			latestVersion: '1.0.0',
			dev: true,
			mute: false,
			volume: 20,
			keyboard: [{}, {}]
		},
		// iodine: {
		// 	name: 'IodineGBA',
		// 	sys: 'gba',
		// 	site: 'https://github.com/taisel/IodineGBA',
		// 	appRegex: 'index\\.html',
		// 	bios: 'bios.bin',
		// 	jsEmu: true,
		// 	install: {
		// 		jsEmu: 'https://github.com/quinton-ashley/IodineGBA/archive/refs/heads/main.zip'
		// 	},
		// 	latestVersion: '1.0.2',
		// 	dev: false,
		// 	mute: false,
		// 	volume: 20,
		// 	keyboard: [{}, {}]
		// },
		mame: {
			name: 'MAME',
			sys: 'arcade',
			site: 'https://www.mamedev.org/',
			forum: 'https://forums.bannister.org/ubbthreads.php?ubb=postlist&Board=1',
			app: {
				linux: 'mame'
			},
			appDirs: {
				linux: ['$home/.mame']
			},
			gamesDir: 'roms',
			imagesDir: 'artwork',
			appRegex: {
				mac: 'mame',
				win: 'mame\\.exe'
			},
			cmd: {
				linux: ['${app}', '-inipath', '${cwd}', '${game.id}'],
				mac: ['${app}', '-inipath', '${cwd}', '${game.id}'],
				win: ['${app}', '-inipath', '${cwd}', '${game.id}']
			},
			site: 'https://www.mamedev.org/',
			install: {
				'mac-x64': {
					prereqs: [
						{
							installer: {
								url: 'http://www.libsdl.org/release/SDL2-2.0.14.dmg',
								dest: '/Library/Frameworks'
							}
						}
					],
					portable: 'https://sdlmame.lngn.net/mame0233-x86.zip'
				},
				'mac-arm64': {
					prereqs: [
						{
							installer: {
								url: 'http://www.libsdl.org/release/SDL2-2.0.14.dmg',
								dest: '/Library/Frameworks'
							}
						}
					],
					portable: 'https://sdlmame.lngn.net/mame0233-arm64.zip'
				},
				'win-x64': {
					portable: 'https://github.com/mamedev/mame/releases/download/mame0233/mame0233b_64bit.exe'
				}
			}
		},
		melonds: {
			name: 'melonDS',
			sys: 'ds',
			site: 'https://melonds.kuribo64.net/',
			patreon: 'https://www.patreon.com/staplebutter',
			paypal: 'https://paypal.me/Arisotura',
			forum: 'https://melonds.kuribo64.net/board/',
			app: {
				linux: 'net.kuribo64.melonDS'
			},
			appRegex: {
				mac: 'melonDS\\.app',
				win: 'melonDS\\.exe'
			},
			cmd: {
				linux: ['flatpak', 'run', '${app}', '${game}'],
				mac: ['${app}', '${game}'],
				win: ['${app}', '${game}']
			},
			site: 'http://melonds.kuribo64.net/',
			patreon: 'https://www.patreon.com/staplebutter',
			install: {
				'linux-x64': {
					pkgManager_flatpak: [
						['flatpak', 'remote-add', '--if-not-exists', 'flathub', 'https://flathub.org/repo/flathub.flatpakrepo'],
						['flatpak', 'install', 'flathub', 'net.kuribo64.melonDS']
					]
				},
				'mac-x64': {
					installer: 'http://melonds.kuribo64.net/downloads/melonDS_0.9.2_mac64.dmg'
				},
				'mac-arm64': {
					installer: 'http://melonds.kuribo64.net/downloads/melonDS_0.9.2_macARM.dmg'
				},
				'win-x64': {
					portable: 'http://melonds.kuribo64.net/downloads/melonDS_0.9.2_win64.7z'
				}
			}
		},
		mesen: {
			name: 'mesen',
			sys: 'nes',
			site: 'https://mesen.ca/',
			appRegex: {
				win: 'Mesen\\.exe'
			},
			cmd: {
				win: ['${app}', '${game}', '-fullscreen']
			},
			install: {
				'win-x64': {
					standalone: 'https://www.mesen.ca/download.php'
				}
			}
		},
		mgba: {
			name: 'mGBA',
			sys: 'gba',
			site: 'https://mgba.io/',
			patreon: 'https://www.patreon.com/mgba',
			discord: 'https://discord.gg/em2M2sG',
			forum: 'https://forums.mgba.io/showthread.php?tid=466',
			app: {
				linux: 'io.mgba.mGBA'
			},
			appRegex: {
				mac: 'mGBA\\.app',
				win: 'mgba-sdl\\.exe'
			},
			cmd: {
				linux: ['flatpak', 'run', '${app}', '-f', '${game}'],
				mac: ['${app}', '-f', '${game}'],
				win: ['${app}', '-f', '${game}']
			},
			install: {
				'linux-x64': {
					pkgManager_flatpak: [
						['flatpak', 'remote-add', '--if-not-exists', 'flathub', 'https://flathub.org/repo/flathub.flatpakrepo'],
						['flatpak', 'install', 'flathub', 'io.mgba.mGBA']
					]
				},
				'mac-x64': {
					standalone: 'https://github.com/mgba-emu/mgba/releases/download/0.8.3/mGBA-0.8.3-osx.tar.xz'
				},
				'win-x64': {
					portable: 'https://github.com/mgba-emu/mgba/releases/download/0.8.3/mGBA-0.8.3-win64.7z'
				}
			}
		},
		mupen64plus: {
			name: 'mupen64plus',
			sys: 'n64',
			site: 'https://github.com/mupen64plus/mupen64plus-ui-python',
			app: {
				linux: 'com.github.Rosalie241.RMG'
			},
			appRegex: {
				mac: 'M64Py\\.app',
				win: 'm64py\\.exe'
			},
			appDirs: {
				win: ['$emu/M64Py']
			},
			cmd: {
				linux: ['flatpak', 'run', '${app}', '${game}'],
				mac: ['${app}', '${game}'],
				win: ['${app}', '${game}']
			},
			install: {
				'linux-x64': {
					pkgManager_flatpak: [
						['flatpak', 'remote-add', '--if-not-exists', 'flathub', 'https://flathub.org/repo/flathub.flatpakrepo'],
						['flatpak', 'install', 'flathub', 'com.github.Rosalie241.RMG']
					]
				},
				'mac-x64': {
					installer: 'https://github.com/mupen64plus/mupen64plus-ui-python/releases/download/0.2.4/m64py-0.2.4.dmg'
				},
				'mac-arm64': {
					installer: 'https://github.com/mupen64plus/mupen64plus-ui-python/releases/download/0.2.4/m64py-0.2.4.dmg'
				},
				'win-x64': {
					portable:
						'https://github.com/mupen64plus/mupen64plus-ui-python/releases/download/0.2.5/m64py-0.2.5-portable.zip'
				}
			}
		},
		pcsx2: {
			name: 'PCSX2',
			sys: 'ps2',
			site: 'https://pcsx2.net/',
			forum: 'https://forums.pcsx2.net/',
			app: {
				linux: 'net.pcsx2.PCSX2'
			},
			appRegex: {
				win: 'pcsx2\\.exe'
			},
			cmd: {
				linux: ['flatpak', 'run', '${app}', '${game}', '--nogui', '--fullscreen'],
				win: ['${app}', '${game}', '--nogui', '--fullscreen']
			},
			install: {
				'linux-x64': {
					pkgManager_flatpak: [
						['flatpak', 'remote-add', '--if-not-exists', 'flathub', 'https://flathub.org/repo/flathub.flatpakrepo'],
						['flatpak', 'install', 'flathub', 'net.pcsx2.PCSX2']
					]
				},
				'win-x64': {
					portable: 'https://pcsx2.net/download/releases/windows.html?task=download.send&id=125&catid=40&m=0 .7z'
				}
			}
		},
		project64: {
			name: 'Project 64',
			sys: 'n64',
			site: 'https://www.pj64-emu.com/',
			discord: 'https://discord.gg/Cg3zquF',
			donate: 'https://www.pj64-emu.com/support-project64.html',
			appRegex: {
				win: 'Project64\\.exe'
			},
			appDirs: {
				win: ['$emu/Project 3.0']
			},
			cmd: {
				win: ['${app}', '${game}']
			},
			install: {
				'win-x64': {
					installer: 'https://www.pj64-emu.com/file/setup-project64-3-0-0-5632-f83bee9 .exe',
					portable: 'https://www.pj64-emu.com/file/project64-3-0-0-5632-f83bee9 .zip'
				}
			}
		},
		rpcs3: {
			name: 'RPCS3',
			sys: 'ps3',
			site: 'https://rpcs3.net/',
			patreon: 'https://www.patreon.com/Nekotekina',
			discord: 'https://discord.me/RPCS3',
			forum: 'https://forums.rpcs3.net/',
			app: {
				linux: 'net.rpcs3.RPCS3'
			},
			appRegex: {
				win: 'rpcs3\\.exe'
			},
			cmd: {
				linux: ['flatpak', 'run', '${app}', '${game}'],
				win: ['${app}', '${game}']
			},
			install: {
				'linux-x64': {
					pkgManager_flatpak: [
						['flatpak', 'remote-add', '--if-not-exists', 'flathub', 'https://flathub.org/repo/flathub.flatpakrepo'],
						['flatpak', 'install', 'flathub', 'net.rpcs3.RPCS3']
					]
				},
				'win-x64': {
					portable:
						'https://github.com/RPCS3/rpcs3-binaries-win/releases/download/build-264df11132f222ba7c2dcdada79909ece21f1316/rpcs3-v0.0.12-10950-264df111_win64.7z'
				}
			}
		},
		ryujinx: {
			name: 'Ryujinx',
			sys: 'switch',
			site: 'https://ryujinx.org/',
			patreon: 'https://patreon.com/Ryujinx',
			discord: 'https://discord.gg/VkQYXAZ',
			appRegex: {
				linux: '^Ryujinx',
				mac: '^Ryujinx',
				win: '^Ryujinx\\.exe'
			},
			cmd: {
				linux: ['${app}', '${game}'],
				mac: ['${app}', '${game}'],
				win: ['${app}', '${game}']
			},
			site: 'https://ryujinx.org/',
			patreon: 'https://www.patreon.com/ryujinx',
			install: {
				'linux-x64': {
					portable: 'https://ci.appveyor.com/api/buildjobs/kqvbvvbkpmwe2nh6/artifacts/ryujinx-1.0.6846-linux_x64.tar.gz'
				},
				'win-x64': {
					portable: 'https://ci.appveyor.com/api/buildjobs/7m60tgm9086anlvk/artifacts/ryujinx-1.0.6551-win_x64.zip'
				}
			}
		},
		'ryujinx-ldn': {
			name: 'Ryujinx LDN',
			sys: 'switch',
			site: 'https://ryujinx.org/',
			patreon: 'https://patreon.com/Ryujinx',
			discord: 'https://discord.gg/VkQYXAZ',
			appRegex: {
				linux: '^Ryujinx',
				mac: '^Ryujinx',
				win: '^Ryujinx\\.exe'
			},
			cmd: {
				linux: ['${app}', '${game}'],
				mac: ['${app}', '${game}'],
				win: ['${app}', '${game}']
			},
			install: {
				'linux-x64': {
					portable: 'https://www.patreon.com/file?h=45268370&i=7206532 .zip'
				},
				'win-x64': {
					portable: 'https://www.patreon.com/file?h=45268370&i=7206533 .zip'
				}
			}
		},
		snes9x: {
			name: 'snes9x',
			sys: 'snes',
			site: 'https://www.snes9x.com/',
			forum: 'https://www.snes9x.com/phpbb3',
			app: {
				linux: 'com.snes9x.Snes9x'
			},
			appRegex: {
				mac: 'snes9x-x64\\.exe',
				win: 'snes9x-x64\\.exe'
			},
			cmd: {
				linux: ['flatpak', 'run', '${app}', '${game}', '-fullscreen'],
				mac: ['wine64', '${app}', '${game}', '-fullscreen'],
				win: ['${app}', '${game}', '-fullscreen']
			},
			install: {
				'linux-x64': {
					pkgManager_flatpak: [
						['flatpak', 'remote-add', '--if-not-exists', 'flathub', 'https://flathub.org/repo/flathub.flatpakrepo'],
						['flatpak', 'install', 'flathub', 'com.snes9x.Snes9x']
					]
				},
				'mac-x64': {
					portable: 'https://www.emulator-zone.com/download.php/emulators/snes/snes9x/snes9x-1.60-win32-x64.zip'
				},
				'win-x64': {
					portable: 'https://www.emulator-zone.com/download.php/emulators/snes/snes9x/snes9x-1.60-win32-x64.zip'
				}
			}
		},
		vba: {
			name: 'Visual Boy Advance',
			sys: 'gba',
			site: 'https://github.com/visualboyadvance-m/visualboyadvance-m',
			forum: 'https://board.vba-m.com/',
			app: {
				linux: 'vbam-sdl'
			},
			appRegex: {
				mac: 'visualboyadvance-m\\.app',
				win: 'visualboyadvance-m\\.exe'
			},
			cmd: {
				linux: ['${app}', '${game}'],
				mac: ['${app}', '${game}'],
				win: ['${app}', '${game}']
			},
			install: {
				'linux-x64': {
					pkgManager_arch: ['pacman', '-S', '${app}']
				},
				'mac-x64': {
					standalone:
						'https://github.com/visualboyadvance-m/visualboyadvance-m/releases/latest/download/visualboyadvance-m-Mac-64bit.zip'
				},
				'mac-arm64': {
					standalone:
						'https://github.com/visualboyadvance-m/visualboyadvance-m/releases/latest/download/visualboyadvance-m-Mac-64bit.zip'
				},
				'win-x64': {
					standalone:
						'https://github.com/visualboyadvance-m/visualboyadvance-m/releases/latest/download/visualboyadvance-m-Win-64bit.zip'
				}
			}
		},
		webretro: {
			name: 'webretro',
			site: 'https://github.com/BinBashBanana/webretro',
			appRegex: 'index\\.html',
			jsEmu: true,
			multiSys: {
				smd: {
					core: 'genesis_plus_gx'
				},
				gba: {
					core: 'mgba'
				},
				n64: {
					core: 'mupen64plus_next'
				},
				nes: {
					core: 'nestopia'
				},
				snes: {
					core: 'snes9x'
				}
			},
			saveStateSlots: 1,
			loadStateSlots: 1,
			install: {
				jsEmu: 'https://github.com/BinBashBanana/webretro/archive/refs/tags/v6.4.zip'
			},
			latestVersion: '6.4.0',
			dev: false,
			mute: false,
			keyboard: [{}, {}]
		},
		xemu: {
			name: 'xemu',
			sys: 'xbox',
			site: 'https://xemu.app/',
			patreon: 'https://www.patreon.com/mborgerson',
			app: {
				linux: 'app.xemu.xemu'
			},
			appRegex: {
				mac: 'xemu\\.app'
			},
			cmd: {
				mac: ['${app}', '${game}'],
				linux: ['flatpak', 'run', '${app}', '${game}'],
				win: ['${app}', '${game}']
			},
			install: {
				'mac-x64': {
					portable: 'https://github.com/mborgerson/xemu/releases/latest/download/xemu-macos-universal-release.zip'
				},
				'mac-arm64': {
					portable: 'https://github.com/mborgerson/xemu/releases/latest/download/xemu-macos-universal-release.zip'
				},
				'linux-x64': {
					pkgManager_flatpak: ['flatpak', 'install', '-y', 'app.xemu.xemu']
				},
				'win-x64': {
					portable: 'https://github.com/mborgerson/xemu/releases/latest/download/xemu-win-release.zip'
				}
			}
		},
		xenia: {
			name: 'Xenia',
			sys: 'xbox360',
			site: 'https://xenia.jp',
			patreon: 'https://patreon.com/xenia_project',
			discord: 'https://discord.gg/Q9mxZf9',
			appRegex: {
				win: 'Xenia\\.exe'
			},
			cmd: {
				win: ['${app}', '${game}', '--draw_resolution_scale=2', '--fullscreen']
			},
			install: {
				'win-x64': {
					portable: [
						'https://github.com/microsoft/DirectXShaderCompiler/releases/download/v1.6.2104/dxc_2021_04-20.zip',
						'https://ci.appveyor.com/api/projects/benvanik/xenia/artifacts/xenia_master.zip?branch=master&job=Configuration%3A%20Release&pr=false .zip'
					]
				}
			}
		},
		yuzu: {
			name: 'Yuzu',
			sys: 'switch',
			site: 'https://yuzu-emu.org/',
			patreon: 'https://www.patreon.com/yuzuteam',
			discord: 'https://discord.gg/u77vRWY',
			app: {
				linux: 'org.yuzu_emu.yuzu'
			},
			appDirs: {
				win: ['$home/AppData/Local/yuzu/yuzu-windows-msvc', '$home/AppData/Local/yuzu/yuzu-windows-msvc-early-access']
			},
			appRegex: {
				win: 'yuzu\\.exe'
			},
			cmd: {
				linux: ['flatpak', 'run', '${app}', '-g', '${game}', '-f'],
				win: ['${app}', '-g', '${game}', '-f']
			},
			site: 'https://yuzu-emu.org/',
			patreon: 'https://www.patreon.com/yuzuteam',
			install: {
				'linux-x64': {
					pkgManager_flatpak: [
						['flatpak', 'remote-add', '--if-not-exists', 'flathub', 'https://flathub.org/repo/flathub.flatpakrepo'],
						['flatpak', 'install', 'flathub', 'org.yuzu_emu.yuzu']
					]
				},
				'win-x64': {
					prereqs: [
						{
							installer: 'https://aka.ms/vs/16/release/vc_redist.x64.exe'
						}
					],
					installer: 'https://github.com/yuzu-emu/liftinstall/releases/download/1.8/yuzu_install.exe'
				}
			},
			update: {
				win: ['$home/AppData/Local/yuzu/maintenancetool.exe', '--launcher', '${app}']
			}
		}
	};

	if (!prefs.arch) prefs.arch = require('process').arch;

	// only keeps the info necessary for the current os + chip arch
	for (let _emu in emus) {
		let props = ['app', 'appDirs', 'appRegex', 'cmd', 'install', 'update'];

		for (let prop of props) {
			if (!emus[_emu][prop]) continue;
			let type = osType;
			if (prop == 'install') type += '-' + prefs.arch;

			if (typeof emus[_emu][prop] != 'string') {
				if (emus[_emu][prop][type]) {
					emus[_emu][prop] = emus[_emu][prop][type];
				} else if (prop != 'install' || !emus[_emu][prop].jsEmu) {
					delete emus[_emu][prop];
				}
			}
		}
		delete emus[_emu].fullscreenKeyCombo;
	}

	return emus;
})();

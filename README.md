# BlockGPT Link Desktop

[![Build and release](https://github.com/madfire/blockgpt-link-desktop/actions/workflows/build-and-release.yml/badge.svg)](https://github.com/madfire/blockgpt-link-desktop/actions/workflows/build-and-release.yml)
![GitHub release (latest by date)](https://img.shields.io/github/v/release/madfire/blockgpt-link-desktop)
![Total downloads](https://img.shields.io/github/downloads/madfire/blockgpt-link-desktop/total)

BlockGPT Link Desktop is the local desktop companion for the BlockGPT ecosystem.

It provides the native bridge required by BlockGPT web experiences to access serial devices, Bluetooth devices, firmware upload flows, local resource updates, and desktop-only hardware workflows.

## What it does

- starts the local `blockgpt-link` service
- starts the local `blockgpt-resource` service
- exposes tray-based status and maintenance actions
- bundles drivers, firmwares, and selected toolchains for hardware workflows
- provides update entry points for BlockGPT desktop resources

## Product role

BlockGPT Link Desktop supports the same product target as the BlockGPT website:

- natural-language-assisted graphical programming
- Scratch-style learning experiences
- AI + hardware education workflows
- reliable classroom and workshop deployment on local machines

## Development

```bash
npm install
npm run dist
```

## Release assets

Current packaged release output:

- macOS DMG installer
- macOS application bundle

## Screenshots

![screenshot1](./docs/screenshot1.png)

![screenshot2](./docs/screenshot2.png)

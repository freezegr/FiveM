<h1 align="center">Freezegold fiveM 👋</h1>
<p align="center">
  <img src="https://img.shields.io/npm/v/@freezegold/fivem.js?orange=blue" />
  <a href="https://www.npmjs.com/package/@freezegold/fivem.js">
    <img alt="downloads" src="https://img.shields.io/npm/dm/@freezegold/fivem.js.svg?color=blue" target="_blank" />
  </a>
  <a href="https://github.com/freezegr/insta.js/blob/master/LICENSE">
    <img alt="License: MIT" src="https://img.shields.io/badge/license-MIT-yellow.svg" target="_blank" />
  </a>
  <a href="#">
    <img src="https://img.shields.io/static/v1?label=owner&message=freezegr&color=blue" alt="owner">
  </a>
</p>

---

- [Installation](#Installation)
  - [Server Status](#Server-Status)
  - [Online Players](#Online-Players)
  - [Online Player Count](#Online-Player-Count)
  - [Max Player Slot](#Max-Player-Slot)
  - [Server Version](#Server-Version)
  - [Server Tags](#Server-Tags)
  - [Resources](#Resources)
  - [Region Locate](#Region-Locate)
  - [License](#License)
- [Support](https://discord.gg/pQdhaUBFcc)

## Installation 

`npm install @freezegold/fivem --save`

## Server Status

```js
const api = require('@freezegold/fivem');
const server = new api.Server('103.252.88.101:30120');
server.getServerStatus().then(res => {
  console.log(res);
});
```

## Online Players 

```js
server.getOnlinePlayers().then(res => {
  console.log(res);
});
```
## Online Player Count

```js
server.getOnlinePlayersCount().then(res => {
  console.log(res);
});
```


## Max Player Slot

```js
server.getMaxSlotPlayer().then(res => {
  console.log(res);
});
```

## Server Version

```js
server.getVersion().then(res => {
  console.log(res);
});
```


## Server Tags

```js
server.getTags().then(res => {
  console.log(res);
});
```

## Resources

```js
server.getresources().then(res => {
  console.log(res);
});
```

## Region Locate

```js
server.getLocale().then(res => {
  console.log(res);
});
```

## License

```js
server.getLicense().then(res => {
  console.log(res);
});
```

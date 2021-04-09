const request = require('request');

exports.Server = class {
  constructor(ip) {
    if (!ip) throw Error('[FiveM]: you miss api!');
    this.req = request.defaults({
        baseUrl: `http://${ip}/`
      }),
      this.getServerStatus = this.getServerStatus,
      this.getOnlinePlayers = this.getOnlinePlayers,
      this.getOnlinePlayersCount = this.getOnlinePlayersCount,
      this.getMaxSlotPlayer = this.getMaxSlotPlayer,
      this.getVersion = this.getVersion,
      this.getTags = this.getTags,
      this.getresources = this.getresources,
      this.getLocale = this.getLocale,
      this.getLicense = this.getLicense
  };


  getServerStatus() {
    return new Promise((resolve, reject) => {
      this.req.get('info.json', (err, res, body) => {
        if (err) return resolve('offline')
        resolve('online')
      });
    });
  };

  getOnlinePlayers() {
    return new Promise((resolve, reject) => {
      this.req.get('players.json', {
        headers: {
          'Accept': 'application/json',
          'Accept-Charset': 'utf-8'
        }
      }, (err, res, body) => {
        if (err) throw new Error(`[FiveM]: ${err}`)
			     
        resolve(JSON.parse(body))
      });
    });
  };

  getOnlinePlayersCount() {
    return new Promise((resolve, reject) => {
      this.req.get('players.json', {
        headers: {
          'Accept': 'application/json',
          'Accept-Charset': 'utf-8'
        }
      }, (err, res, body) => {
        if (err) throw new Error(`[FiveM]: ${err}`)
        resolve(JSON.parse(body).length)
      });
    });
  };

  getMaxSlotPlayer() {
    return new Promise((resolve, reject) => {
      this.req.get('info.json', {
        headers: {
          'Accept': 'application/json',
          'Accept-Charset': 'utf-8'
        }
      }, (err, res, body) => {
        if (err) throw new Error(`[FiveM]: ${err}`)
        resolve(JSON.parse(body).vars.sv_maxClients)
      });
    });
  };

  getVersion() {
    return new Promise((resolve, reject) => {
      this.req.get('info.json', {
        headers: {
          'Accept': 'application/json',
          'Accept-Charset': 'utf-8'
        }
      }, (err, res, body) => {
        if (err) throw new Error(`[FiveM]: ${err}`)
        resolve(JSON.parse(body).version)
      });
    });
  };

  getTags() {
    return new Promise((resolve, reject) => {
      this.req.get('info.json', {
        headers: {
          'Accept': 'application/json',
          'Accept-Charset': 'utf-8'
        }
      }, (err, res, body) => {
        if (err) throw new Error(`[FiveM]: ${err}`)
        resolve(JSON.parse(body).vars.tags)
      });
    });
  };

  getresources() {
    return new Promise((resolve, reject) => {
      this.req.get('info.json', {
        headers: {
          'Accept': 'application/json',
          'Accept-Charset': 'utf-8'
        }
      }, (err, res, body) => {
        if (err) throw new Error(`[FiveM]: ${err}`)
        resolve(JSON.parse(body).resources)
      });
    });
  };

  getLocale() {
    return new Promise((resolve, reject) => {
      this.req.get('info.json', {
        headers: {
          'Accept': 'application/json',
          'Accept-Charset': 'utf-8'
        }
      }, (err, res, body) => {
        if (err) throw new Error(`[FiveM]: ${err}`)
        resolve(JSON.parse(body).vars.locale)
      });
    });
  };

  getLicense() {
    return new Promise((resolve, reject) => {
      this.req.get('info.json', {
        headers: {
          'Accept': 'application/json',
          'Accept-Charset': 'utf-8'
        }
      }, (err, res, body) => {
        if (err) throw new Error(`[FiveM]: ${err}`)
        resolve(JSON.parse(body).vars.sv_licenseKeyToken)
      });
    });
  };
};

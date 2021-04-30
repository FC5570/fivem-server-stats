const { default: fetch } = require("node-fetch");

module.exports = {
  /**
   * Gets the length of the players currently playing on a FiveM server
   * @param {string} ip: The IP and the port of the server to get the player length of
   * @returns The length of the players playing
   * @example  const fivem = require("fivem-server-stats")
   * fivem.getPlayerLength('45.85.194.126:30120').then((data) => console.log(data))
   */
  async getPlayerLength(ip) {
    if (!ip || typeof ip !== "string")
      throw new Error(`ip and port must be present and must be a string`);
    const data = await fetch(`http://${ip}/players.json`);
    const json = await data.json();
    return json.length;
  },

  /**
   * Gets the players playing currently on the FiveM server
   * @param {string} ip: The IP and port of the server to get the players of
   * @returns An array containing the players playing in the server
   * @example const fivem = require("fivem-server-stats")
   * fivem.getPlayers('45.85.194.126:30120').then((data) => console.log(data))
   */
  async getPlayers(ip) {
    if (!ip || typeof ip !== "string")
      throw new Error(`ip and port must be present and must be a string`);
    const data = await fetch(`http://${ip}/players.json`);
    const json = await data.json();
    return json;
  },

  /**
   * Gets the info of a FiveM server
   * @param {string} ip: The IP and the port of the server to get info of
   * @returns The info of the FiveM server
   * @example const fivem = require("fivem-server-stats")
   * fivem.getInfo'45.85.194.126:30120').then((data) => console.log(data))
   */
  async getInfo(ip) {
    if (!ip || typeof ip !== "string")
      throw new Error(`ip and port must be present and must be a string`);
    const data = await fetch(`http://${ip}/info.json`);
    const json = await data.json();
    return json;
  },
};

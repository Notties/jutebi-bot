require('dotenv').config()

module.exports = {
  TOKEN: process.env.TOKEN.toString(),
  ownerID: [process.env.ownerID.toString(), ""],
  botInvite: "",
  supportServer: "",
  mongodbURL: process.env.mongodbURL.toString(),
  status: "Jutebi",
  commandsDir: "./commands",
  language: "en",
  embedColor: "00fbff",
  errorLog: "",

  sponsor: {
    status: true,
    url: "",
  },

  voteManager: {
    status: false,
    api_key: "",
    vote_commands: [
      "back",
      "channel",
      "clear",
      "dj",
      "filter",
      "loop",
      "nowplaying",
      "pause",
      "playnormal",
      "playlist",
      "queue",
      "resume",
      "save",
      "play",
      "skip",
      "stop",
      "time",
      "volume",
    ],
    vote_url: "",
  },

  shardManager: {
    shardStatus: false,
  },

  playlistSettings: {
    maxPlaylist: 10,
    maxMusic: 75,
  },

  opt: {
    DJ: {
      commands: [
        "back",
        "clear",
        "filter",
        "loop",
        "pause",
        "resume",
        "skip",
        "stop",
        "volume",
        "shuffle",
      ],
    },

    voiceConfig: {
      leaveOnFinish: false,
      leaveOnStop: false,
      leaveOnEmpty: {
        status: true,
        cooldown: 10000000,
      },
    },

    maxVol: 150,
  },
};

module.exports = {
  name: "owner",
  description: "Get information about bot owner.",
  permissions: "0x0000000000000800",
  options: [],

  run: async (client, interaction) => {
    try {
      const { EmbedBuilder } = require("discord.js");
      const embed = new EmbedBuilder()
        .setColor("#da2a41")
        .setAuthor({
          name: "Owner",
          iconURL:
            "https://cdn.discordapp.com/attachments/1156866389819281418/1157310253520662638/2443-iconperson.png?ex=651824aa&is=6516d32a&hm=0becc4a0fda01e5a02a63cf098db30c287e60a474f8d2da4ddeae7f47d98a5a3&",
          url: "https://discord.gg/FUEHs7RCqz",
        })
        .setDescription(
          `__**About me**__:\n\n ▶️ I am just a shota-boi who dislikes bitter-tasting food and loves sweets to the point of becoming as chubby as a pig. I have never been in love before, until finally, I fell for a cute sempai. Just by looking into her eyes, I couldn't muster the courage to tell her how I feel. I've kept my feelings hidden in my heart; it's really frustrating, and i no romantic aspect to it at all. I'm afraid.`
        )
        .setTimestamp();
      interaction.reply({ embeds: [embed] }).catch((e) => {});
    } catch (e) {
      console.error(e);
    }
  },
};

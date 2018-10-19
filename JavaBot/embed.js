const { RichEmbed } = require('discord.js')

const COLORS = {

  red: 0xe74c3c,
  green: 0x2eec71

}

module.exports = {

  info () {



  },

  error(chan, cont, title, message) {

    var Message
    var embed = new RichEmbed()
      .setColor(COLORS.red)
      .setDescription(cont)

    if(title) {

      embed.setTitle(title)

    }

    chan.send(message, embed).then((m) => {

      Message = m

    })

    return Message

  }

}

 
const Discord = require('discord.js')
const fs      = require('fs')
const Embeds = require('./embed.js')

const config = JSON.parse(fs.readFileSync('config.json', 'utf8'))

var client = new Discord.Client()

var ChannelForGTW;

//#region nothuman

var places = new Array(9);
var TempWord;
var GameStarted = false;
var Turn1 = true;
var Turn2 = false;
var Player1;
var Player2;
var Player1Won = false;
var Player2Won = false;
var GuessWord;
var Count = 0;
var UserForWord = 0;
var GameStartedWord = false;
var Test = false;
var Life = 10;
var CheckIfFalse = false;
var Compare = false;
var Counter = 0;
var AnotherCounter = 0;
var WordIsSetup = false;
var Draw = false;
var AbleToJoin = false;
var Players = new Array(10);
var ArrCounter = 0;
var Delete = false;



places[0] = 1;
places[1] = 2;
places[2] = 3;
places[3] = 4;
places[4] = 5;
places[5] = 6;
places[6] = 7;
places[7] = 8;
places[8] = 9;

//#endregion nothuman

//#region human

var red = "r"
var yellow = "y"
var green = "g"
var black = "b"

var WCounterY = 0;
var WCounterG = 0;
var WCounterB = 0;
var WCounterR = 0;

var Way = new Array(42);

var placesh = new Array(71)
var placeY = ["y", "y", "y", "y"]
var placeG = ["g", "g", "g", "g"]
var placeB = ["b", "b", "b", "b"]
var placeR = ["r", "r", "r", "r"]

var tempG = 0;
var tempY = 0;
var tempB = 0;
var tempR = 0;

var tempSumY = 0;
var tempSumG = 0;
var tempSumB = 0;
var tempSumR = 0;

var StartGameL = false;

var AbleToGoOn = false;

var SafeplaceY = ["y", "y", "y", "y"]
var SafeplaceG = ["g", "g", "g", "g"]
var SafeplaceB = ["b", "b", "b", "b"]
var SafeplaceR = ["r", "r", "r", "r"]

var Checker = false;
var Tries = 3;
var SixTries = 0;

var TeamRed;
var TeamBlack;
var TeamGreen;
var TeamYellow;

var TCount = 0;

var StepsTilEndY = [41, 41, 41, 41]
var StepsTilEndG = [41, 41, 41, 41]
var StepsTilEndB = [41, 41, 41, 41]
var StepsTilEndR = [41, 41, 41, 41]

var LplaceY = [32, 32, 32, 32]
var LplaceG = [2, 2, 2, 2]
var LplaceB = [22, 22, 22, 22]
var LplaceR = [12, 12, 12, 12]

var diceY = 0;
var diceG = 0;
var diceB = 0;
var diceR = 0;

var AdiceY = [0, 0, 0]
var AdiceG = [0, 0, 0]
var AdiceB = [0, 0, 0]
var AdiceR = [0, 0, 0]
 
var CounterY = 0;
var CounterG = 0;
var CounterB = 0;
var CounterR = 0;

var Starth = false;

var Tgreen = false;
var Tyellow = false;
var Tblack = false;
var Tred = false;

//#endregion human

//#region battleship

var BPlayer1 = null;
var BPlayer2 = null;

var BCounter1 = 19;
var BCounter2 = 19;

var AllShips1 = [1, 1, 2, 2]

var AllShips2 = [1, 1, 2, 2]

var A = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    B = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    C = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    D = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    E = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    F = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    G = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

var A2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    B2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    C2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    D2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    E2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    F2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    G2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

var Ao = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    Bo = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    Co = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    Do = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    Eo = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    Fo = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    Go = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

var At = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    Bt = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    Ct = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    Dt = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    Et = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    Ft = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    Gt = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

var PlayerOneReady = false;
var PlayerTwoReady = false;

var playable = false;

var TPlayerOne = true;
var TPlayerTwo = false;

//#endregion battleship

//#region Mau

var CardsMax = 3;

var EnteredNum = 0;

var Bonetwo = false,
    Bonethree = false,
    Bonefour = false,
    Btwothree = false,
    Btwofour = false,
    Bthreefour = false,
    Bonetwofour = false,
    Btwothreefour = false,
    Bonetwothree = false,
    Bonetwothreefour = false;

var User1 = null;
var User2 = null;
var User3 = null;
var User4 = null;

var Tuser1 = false;
var Tuser2 = false;
var Tuser3 = false;
var Tuser4 = false;

var Cstarted = false;

var AbleToStartM = false;

var User1Stack = new Array(16);
var User2Stack = new Array(16);
var User3Stack = new Array(16);
var User4Stack = new Array(16);

var MadeStack = new Array(32)

var MauStack = new Array(32);

var ArrUsers = new Array(4);

var WinCounterUser1 = 0;
var WinCounterUser2 = 0;
var WinCounterUser3 = 0;
var WinCounterUser4 = 0;

//#endregion Mau

var cmdmap = {

    say: cmd_say,
    test: cmd_test,
    ttt: cmd_ttt,
    ttt1: cmd_tt1,
    ttt2: cmd_tt2,
    tttq: cmd_ttq,
    tttnum: cmd_tttnum,
    help: cmd_help,
    gtw: cmd_gtw,
    gtwe: cmd_gtwe,
    g   : cmd_g,
    gtwq: cmd_gtwq,
    gj  : cmd_gj,
    gc  : cmd_gc,
    ms  : cmd_ms,
    mt  : cmd_mt,
    mr  : cmd_mr,
    mdy  : cmd_mdy,
    mdg  : cmd_mdg,
    mdb  : cmd_mdb,
    mdr  : cmd_mdr,
    mdq  : cmd_mdq,
    mdmy  : cmd_mdmy,
    mdmg  : cmd_mdmg,
    mdmb  : cmd_mdmb,
    mdmr  : cmd_mdmr,
    mstats: cmd_mstats,
    b1     : cmd_b1,
    b2     : cmd_b2,
    sb1    : cmd_sb1,
    sb2    : cmd_sb2,
    sb1r   : cmd_sb1r,
    sb2r   : cmd_sb2r,
    sb1s   : cmd_s1bs,
    sb2s   : cmd_s2bs,
    br     : cmd_br,
    bt1    : cmd_bt1,
    bt2    : cmd_bt2,
    bq     : cmd_bq,
    ct     : cmd_ct,
    cs     : cmd_cs,
    c1     : cmd_c1,
    c2     : cmd_c2,
    c3     : cmd_c3,
    c4     : cmd_c4

}

function DecideWhoWon() {

  if (places[0] == "x" && places[1] == "x" && places[2] == "x") {

    Player1Won = true;

  } else if(places[3] == "x" && places[4] == "x" && places[5] == "x") {

    Player1Won = true;

  } else if(places[6] == "x" && places[7] == "x" && places[8] == "x") {

    Player1Won = true;

  } else if(places[0] == "x" && places[3] == "x" && places[6] == "x") {

    Player1Won = true;

  } else if(places[1] == "x" && places[4] == "x" && places[7] == "x") {

    Player1Won = true;

  } else if(places[2] == "x" && places[5] == "x" && places[8] == "x") {

    Player1Won = true;

  } else if(places[0] == "x" && places[4] == "x" && places[8] == "x") {

    Player1Won = true;

  } else if(places[2] == "x" && places[4] == "x" && places[6] == "x") {

    Player1Won = true;

  } else if (places[0] == "o" && places[1] == "o" && places[2] == "o") {

    Player2Won = true;

  } else if(places[3] == "o" && places[4] == "o" && places[5] == "o") {

    Player2Won = true;

  } else if(places[6] == "o" && places[7] == "o" && places[8] == "o") {

    Player2Won = true;

  } else if(places[0] == "o" && places[3] == "o" && places[6] == "o") {

    Player2Won = true;

  } else if(places[1] == "o" && places[4] == "o" && places[7] == "o") {

    Player2Won = true;

  } else if(places[2] == "o" && places[5] == "o" && places[8] == "o") {

    Player2Won = true;

  } else if(places[0] == "o" && places[4] == "o" && places[8] == "o") {

    Player2Won = true;

  } else if(places[2] == "o" && places[4] == "o" && places[6] == "o") {

    Player2Won = true;

  } 
  
  for(var i = 0; i < places.length; i++) {

    if(places[i] == "x" || places[i] == "o") {

      AnotherCounter += 1;

      console.log(AnotherCounter)

    }

  }

  if(AnotherCounter == 9) {

    Draw = true;

  } else {

    AnotherCounter = 0;

  }

}

function Reset_Ludo() {

  TeamBlack = null;
  TeamRed = null;
  TeamYellow = null;
  TeamGreen = null;

  Starth = false;
  StartGameL = false;

  TCount = 0;
  SixTries = 0;

  Checker = false;
  AbleToGoOn = false;

  Tgreen = false;
  Tyellow = false;
  Tblack = false;
  Tred = false;

  tempB = 0;
  tempY = 0;
  tempR = 0;
  tempG = 0;

  tempSumB = 0;
  tempSumG = 0;
  tempSumR = 0;
  tempSumY = 0;

  diceB = 0;
  diceY = 0;
  diceR = 0;
  diceG = 0;

  WCounterB = 0;
  WCounterG = 0;
  WCounterR = 0;
  WCounterY = 0;

  for(var x = 0; x < 4; x++) {

    placeB[x] = black;
    placeG[x] = green;
    placeR[x] = red;
    placeY[x] = yellow;

    StepsTilEndB[x] = 41;
    StepsTilEndG[x] = 41;
    StepsTilEndR[x] = 41;
    StepsTilEndY[x] = 41;

  }

  for (var k = 0; k < 3; k++) {

    AdiceB[k] = 0;
    AdiceG[k] = 0;
    AdiceR[k] = 0;
    AdiceY[k] = 0;

  }

}

function cmd_gc(msg, args) {

  let messagecount = parseInt(100);
        msg.channel.fetchMessages({limit: messagecount}).then(messages => msg.channel.bulkDelete(messages));

        for(var i = 0; i < Players.length; i++) {

          if(Players[i] != null) {
      
            Players[i].removeRole("497054719038980097");
      
            Players[i] = null;
      
          }
      
        }
      
        UserForWord.removeRole("497017162645372928");
      
        UserForWord = 0;
        GameStartedWord = false;
        WordIsSetup = false;
        Test = true;
        ArrCounter = 0;

}

function cmd_say(msg, args) {

    msg.channel.send(args.join(' '))

}

function cmd_test(msg, args) {

    console.log("test")

}

function cmd_gj(msg, args) {

  if(AbleToJoin == true && Players[9] == null) {

    Players[ArrCounter] = msg.member;

    Players[ArrCounter].addRole("497054719038980097");

    console.log(Players[ArrCounter])

    ArrCounter += 1;

  } else {

    msg.channel.send("Wait until the creator finished his word!")

  }

}

function cmd_gtwq(msg, args) {

  if(GameStartedWord == true && WordIsSetup == true) {

  msg.channel.send(`You quit`)
  Embeds.error(msg.channel, GuessWord, `This was the word from ${UserForWord}`)

  GuessWord = [];
  TempWord = [];

  Life = 10;
  Counter = 0;

  AbleToJoin = false;

  }

}

function cmd_help(msg, args) {

  Embeds.error(msg.channel, "!!say (arguments): Bot repeats your msg\n!!ttt: Starts ttt game\n!!gtw: Starts gtw", "Help", `Here is a small list for you ${msg.member}`)

}

function cmd_gtw(msg, args) {

  console.log(ChannelForGTW);

  if (UserForWord == 0) {

  UserForWord = msg.member;

  Embeds.error(msg.channel, `${UserForWord} is thinking about a word at the moment. Use !!gtwe (word) to send your word!`, "Guess the word")

  UserForWord.addRole("497017162645372928");

  GameStartedWord = true;

  } else {

    msg.channel.send("There is an Creator already!");

  }

}

function cmd_gtwe(msg, args) {

  if (GameStartedWord == true) {

  var cont = msg.content

  var invoke = cont.split(' ')[0].substr(config.prefix.length),
          args = cont.toUpperCase().split(' ').slice(1)

  AbleToJoin = true;

  Test = false;

  console.log(args[0])

  if(cont.length > 2 && cont.length <= 100) {

    GuessWord = args.slice();

    TempWord = new Array(args.slice().Count)

    console.log(GuessWord)

    WordIsSetup = true;

    msg.delete(1)

    for(var i = 0; i < GuessWord.length; i++) {

      TempWord[i] = "x"

    }

    Embeds.error(msg.channel, TempWord, "Guess the word!")

  }

  } else {

    msg.channel.send(`You need to start the game first with !!gtw ${msg.member}`)

  }

}

function cmd_g(msg, args) {

if (GameStartedWord == true && Test == false) {

  var cont = msg.content

  var invoke = cont.split(' ')[0].substr(config.prefix.length),
          args = cont.toUpperCase().split(' ').slice(1)

  console.log(args.toString())

  if (args[0].length > 0 && args[0].length < 2) {

    for(var i = 0; i < GuessWord.length; i++) {

      if(args.toString() == GuessWord[i].toString()) {

        Compare = true;

        TempWord[i] = GuessWord[i]

        Embeds.error(msg.channel, TempWord, "Found a letter!")

      } else if(Compare == false) {

        Counter += 1;

        if(Counter == GuessWord.length) {

          CheckIfFalse = true;

        }

      }

        Compare = false;

        if(i == GuessWord.length - 1) {

          Counter = 0;

        }

    }

    if(CheckIfFalse == true) {

      Life -= 1;

      if(Life <= 0) {

        msg.ChannelForGTW.send(`You didnt find out what the word from ${UserForWord} was!`)
        Embeds.error(msg.channel, GuessWord, `This was the word from ${UserForWord}`)

        GuessWord.length = 0;
        TempWord.length = 0;

        Life = 10;
        Counter = 0;

        AbleToJoin = false;

      } else {

        msg.channel.send(`Ouch, one step closer, ${Life} tries left`)

        CheckIfFalse = false;

      }

    }

    for(var i = 0; i < TempWord.length; i++) {

      if(TempWord[i] != "x") {

        Count += 1

      }

      if(i == TempWord.length - 1) {

        if(Count == TempWord.length) {

          GuessWord.length = 0;
          TempWord.length = 0;

          Life = 10;
          Counter = 0;

          msg.channel.send(`Your word has been found ${UserForWord}`);

          AbleToJoin = false;

        } else {

          Count = 0;

        }

      }

    }

  } else {

    msg.channel.send("Did you ever play this game? One letter!")

  }

}

}

function cmd_ttt(msg, args) {

  var cont = msg.content,
  author = msg.author

  Embeds.error(msg.channel, "1/2/3\n4/5/6\n7/8/9\nPlayer 1: type ttt1! Player 2: type ttt2!", "Tic Tac Toe", "Game")

  GameStarted = true;

}

function cmd_tt1(msg, args) {

  if (GameStarted == true) {

    if (Player2 != msg.member) {

      Player1 = msg.member;

      msg.channel.send(`Player 1: ${Player1}`)

      if (Player1 != null && Player2 != null) {

        msg.channel.send(`Player 1: ${Player1} (x); Player 2: ${Player2} (o)!\nYou are ready to play, use !!ttt (number) to place your symbol!`)
    
      }

    } else {

      msg.channel.send("You cant sign up twice!")

    }

  }

}

function cmd_tt2(msg, args) {

  if (GameStarted == true) {

    if (Player1 != msg.member) {

      Player2 = msg.member;

      msg.channel.send(`Player 2: ${Player2}`)
      
      if (Player1 != null && Player2 != null) {

        msg.channel.send(`Player 1: ${Player1} (x); Player 2: ${Player2} (o)!\nYou are ready to play, use !!tttnum (number) to place your symbol!`)
    
      }

    } else {

      msg.channel.send("You cant sign up twice!")

    }

  }

}

function cmd_ttq(msg, args) {

  Turn1 = true;
  Turn2 = false;

  Player1Won = false;
  Player2Won = false;

  Player1 = null;
  Player2 = null;

  places[0] = 1;
  places[1] = 2;
  places[2] = 3;
  places[3] = 4;
  places[4] = 5;
  places[5] = 6;
  places[6] = 7;
  places[7] = 8;
  places[8] = 9;

  AnotherCounter = 0;

  msg.channel.send("Quit Game! Reseted.")

}

function cmd_tttnum(msg, args) {

  if(Turn1 == true) {

    var cont = msg.content

    var invoke = cont.split(' ')[0].substr(config.prefix.length),
          args = cont.split(' ').slice(1)

          if(msg.member == Player1 && Player2Won == false) {

          if(parseInt(args) >= 1 && parseInt(args) <= 9) {

            if(places[args - 1] != "x" && places[args - 1] != "o") {

              places[args - 1] = "x";

              DecideWhoWon();

              if(Player1Won == true) {

                msg.channel.send(`${Player1} has won the game!`);

                Turn1 = true;
                Turn2 = false;

                Player1Won = false;
                Player2Won = false;

                Player1 = null;
                Player2 = null;

                places[0] = 1;
                places[1] = 2;
                places[2] = 3;
                places[3] = 4;
                places[4] = 5;
                places[5] = 6;
                places[6] = 7;
                places[7] = 8;
                places[8] = 9;

                AnotherCounter = 0;

              if (Draw == true) {

                msg.channel.send("Thats a draw!");

                Turn1 = true;
                Turn2 = false;

                Player1Won = false;
                Player2Won = false;

                Player1 = null;
                Player2 = null;

                places[0] = 1;
                places[1] = 2;
                places[2] = 3;
                places[3] = 4;
                places[4] = 5;
                places[5] = 6;
                places[6] = 7;
                places[7] = 8;
                places[8] = 9;

              }

              } else if(Player1Won == false && Draw == false){

                msg.channel.send(`Its your turn ${Player2}!`)

                Turn2 = true;
                Turn1 = false;

                Embeds.error(msg.channel, `${places[0]}/${places[1]}/${places[2]}\n${places[3]}/${places[4]}/${places[5]}\n${places[6]}/${places[7]}/${places[8]}\nPlayer 1: ${Player1} (x); Player 2: ${Player2} (o)!\nYou are ready to play, use !!ttt (number) to place your symbol!`)

              }

              Draw = false

             } else {

              msg.channel.send("This Place is already used!")

             }

            }

          }

  } else if(Turn2 == true) {

    var cont = msg.content

    var invoke = cont.split(' ')[0].substr(config.prefix.length),
          args = cont.split(' ').slice(1)

          if(msg.member == Player2 && Player1Won == false) {

          if(parseInt(args) >= 1 && parseInt(args) <= 9) {

            if(places[args - 1] != "x" && places[args - 1] != "o") {

              places[args - 1] = "o";

              DecideWhoWon();

              if (Player2Won == true) {

                msg.channel.send(`${Player2} has won the game!`);

                Turn1 = true;
                Turn2 = false;

                Player1Won = false;
                Player2Won = false;

                Player1 = null;
                Player2 = null;

                places[0] = 1;
                places[1] = 2;
                places[2] = 3;
                places[3] = 4;
                places[4] = 5;
                places[5] = 6;
                places[6] = 7;
                places[7] = 8;
                places[8] = 9;

                AnotherCounter = 0;

              if(Draw == true) {

                msg.channel.send("Thats a draw!");

                Turn1 = true;
                Turn2 = false;

                Player1Won = false;
                Player2Won = false;

                Player1 = null;
                Player2 = null;

                places[0] = 1;
                places[1] = 2;
                places[2] = 3;
                places[3] = 4;
                places[4] = 5;
                places[5] = 6;
                places[6] = 7;
                places[7] = 8;
                places[8] = 9;

  
              }

              } else if(Player2Won == false && Draw == false){

              msg.channel.send(`Its your turn ${Player1}!`)

              Turn1 = true;
              Turn2 = false;

              Embeds.error(msg.channel, `${places[0]}/${places[1]}/${places[2]}\n${places[3]}/${places[4]}/${places[5]}\n${places[6]}/${places[7]}/${places[8]}\nPlayer 1: ${Player1} (x); Player 2: ${Player2} (o)!\nYou are ready to play, use !!ttt (number) to place your symbol!`)

              }

              Draw = false

             } else {

              msg.channel.send("This Place is already used!")

             }

            }

           }
  }

}

function cmd_ms(msg, args) {

  Embeds.error(msg.channel, "For this game you need at least 2 player, to select a team type !!mt 1 (for Red), !!mt 2 (for Green), !!mt 3 (for Yellow) or !!mt 4 (for Black). If you selected your team type !!mr to start the game!", "Instructions")

  Starth = true;

}

function cmd_mt(msg, args) {

  if(Starth == true) {

    var cont = msg.content

    var invoke = cont.split(' ')[0].substr(config.prefix.length),
            args = cont.split(' ').slice(1)

    console.log(parseInt(args[0]))

  if(parseInt(args[0]) === 1 && TeamYellow == null && msg.member != TeamGreen && msg.member != TeamRed && msg.member != TeamBlack) {

    TeamYellow = msg.member;

    msg.channel.send(`${msg.member}: Team Yellow!`)

  } else if(TeamYellow != null && parseInt(args[0]) === 1) {

    msg.channel.send("Yellow is already used!")

  }
  else if(msg.member == TeamGreen || msg.member == TeamRed || msg.member == TeamBlack) {

    msg.channel.send("You already signed up for a team!")

  }

 else if(parseInt(args[0]) === 2 && TeamGreen == null && msg.member != TeamRed && msg.member != TeamYellow && msg.member != TeamBlack) {

    TeamGreen = msg.member;

    msg.channel.send(`${msg.member}: Team Green!`)

  } else if(TeamGreen != null && parseInt(args[0]) === 2) {

    msg.channel.send("Green is already used!")

  }
  else if(msg.member === TeamRed || msg.member == TeamYellow || msg.member == TeamBlack) {

    msg.channel.send("You already signed up for a team!")

  }

  else if(parseInt(args[0]) === 3 && TeamRed == null && msg.member != TeamYellow && msg.member != TeamGreen && msg.member != TeamBlack) {

    TeamRed = msg.member;

    msg.channel.send(`${msg.member}: Team Red!`)

  } else if(TeamRed != null && parseInt(args[0]) === 3) {

    msg.channel.send("Red is already used!")

  }
  else if(msg.member == Yellow || msg.member == TeamGreen || msg.member == TeamBlack) {

    msg.channel.send("You already signed up for a team!")

  }

  else if(parseInt(args[0]) === 4 && TeamBlack == null && msg.member != TeamRed && msg.member != TeamYellow && msg.member != TeamGreen) {

    TeamBlack = msg.member;

    msg.channel.send(`${msg.member}: Team Black!`)

  } else if(TeamBlack != null && parseInt(args[0]) === 4) {

    msg.channel.send("Black is already used!")

  }
  else if(msg.member == TeamRed || msg.member == TeamYellow || msg.member == TeamGreen) {

    msg.channel.send("You already signed up for a team!")

  }


  } else {

    msg.channel.send("Type !ms first to start the game!")

  }

}

function cmd_mdq(msg, args) {

  Reset_Ludo();

  msg.channel.send("Left game, reset everything!")

}

function cmd_mr(msg, args) {

  for(var o = 0; o < Way.length; o++) {

    Way[o] = "x";

  }

  placesh[1] = "/";
  placesh[0] = "/"; 

  if(TeamBlack != null && TeamRed != null) {

    Tred = true;

    msg.channel.send(`${TeamRed}, you start first!`)

    for(var i = 0; i < 4; i++) {

      placeB[i] = black;
      placeR[i] = red;
      placeG[i] = "/";
      placeY[i] = "/";

    }

    Embeds.error(msg.channel, `${placeY[0]} ${placeY[1]} / / ${Way[0]} ${Way[1]} ${Way[2]} / / ${placeG[0]} ${placeG[1]} \n${placeY[2]} ${placeY[3]} / / ${Way[39]} ${placesh[1]} ${Way[3]} / / ${placeG[2]} ${placeG[3]} \n/ / / / ${Way[38]} ${placesh[1]} ${Way[4]} / / / / \n/ / / / ${Way[37]} ${placesh[1]} ${Way[5]} / / / / \n${Way[32]} ${Way[33]} ${Way[34]} ${Way[35]} ${Way[36]} ${placesh[1]} ${Way[6]} ${Way[7]} ${Way[8]} ${Way[9]} ${Way[10]} \n${Way[31]} ${placesh[1]} ${placesh[1]} ${placesh[1]} ${placesh[1]} / ${placesh[1]} ${placesh[1]} ${placesh[1]} ${placesh[1]} ${Way[11]} \n${Way[30]} ${Way[29]} ${Way[28]} ${Way[27]} ${Way[26]} ${placesh[1]} ${Way[16]} ${Way[15]} ${Way[14]} ${Way[13]} ${Way[12]} \n/ / / / ${Way[25]} ${placesh[1]} ${Way[17]} / / / / \n/ / / / ${Way[24]} ${placesh[1]} ${Way[18]} / / / / \n${placeB[0]} ${placeB[1]} / / ${Way[23]} ${placesh[1]} ${Way[19]} / / ${placeR[0]} ${placeR[1]} \n${placeB[2]} ${placeB[3]} / / ${Way[22]} ${Way[21]} ${Way[20]} / / ${placeR[2]} ${placeR[3]}\nTeam Yellow: ${TeamYellow}, Team Green: ${TeamGreen}, Team Red: ${TeamRed}, Team Black: ${TeamBlack}`, "Ludo");

    StartGameL = true;

  } else if(TeamBlack != null && TeamGreen != null) {

    Tgreen = true;
    msg.channel.send(`${TeamGreen}, you start first!`)

    for(var i = 0; i < 4; i++) {

      placeB[i] = black;
      placeR[i] = "/";
      placeG[i] = green;
      placeY[i] = "/";

    }

    Embeds.error(msg.channel, `${placeY[0]} ${placeY[1]} / / ${Way[0]} ${Way[1]} ${Way[2]} / / ${placeG[0]} ${placeG[1]} \n${placeY[2]} ${placeY[3]} / / ${Way[39]} ${placesh[1]} ${Way[3]} / / ${placeG[2]} ${placeG[3]} \n/ / / / ${Way[38]} ${placesh[1]} ${Way[4]} / / / / \n/ / / / ${Way[37]} ${placesh[1]} ${Way[5]} / / / / \n${Way[32]} ${Way[33]} ${Way[34]} ${Way[35]} ${Way[36]} ${placesh[1]} ${Way[6]} ${Way[7]} ${Way[8]} ${Way[9]} ${Way[10]} \n${Way[31]} ${placesh[1]} ${placesh[1]} ${placesh[1]} ${placesh[1]} / ${placesh[1]} ${placesh[1]} ${placesh[1]} ${placesh[1]} ${Way[11]} \n${Way[30]} ${Way[29]} ${Way[28]} ${Way[27]} ${Way[26]} ${placesh[1]} ${Way[16]} ${Way[15]} ${Way[14]} ${Way[13]} ${Way[12]} \n/ / / / ${Way[25]} ${placesh[1]} ${Way[17]} / / / / \n/ / / / ${Way[24]} ${placesh[1]} ${Way[18]} / / / / \n${placeB[0]} ${placeB[1]} / / ${Way[23]} ${placesh[1]} ${Way[19]} / / ${placeR[0]} ${placeR[1]} \n${placeB[2]} ${placeB[3]} / / ${Way[22]} ${Way[21]} ${Way[20]} / / ${placeR[2]} ${placeR[3]}\nTeam Yellow: ${TeamYellow}, Team Green: ${TeamGreen}, Team Red: ${TeamRed}, Team Black: ${TeamBlack}`, "Ludo");

    StartGameL = true;

  } else if(TeamBlack != null && TeamYellow != null) {

    Tyellow = true;
    msg.channel.send(`${TeamYellow}, you start first!`)

    for(var i = 0; i < 4; i++) {

      placeB[i] = black;
      placeR[i] = red;
      placeG[i] = "/";
      placeY[i] = "/";

    }

    Embeds.error(msg.channel, `${placeY[0]} ${placeY[1]} / / ${Way[0]} ${Way[1]} ${Way[2]} / / ${placeG[0]} ${placeG[1]} \n${placeY[2]} ${placeY[3]} / / ${Way[39]} ${placesh[1]} ${Way[3]} / / ${placeG[2]} ${placeG[3]} \n/ / / / ${Way[38]} ${placesh[1]} ${Way[4]} / / / / \n/ / / / ${Way[37]} ${placesh[1]} ${Way[5]} / / / / \n${Way[32]} ${Way[33]} ${Way[34]} ${Way[35]} ${Way[36]} ${placesh[1]} ${Way[6]} ${Way[7]} ${Way[8]} ${Way[9]} ${Way[10]} \n${Way[31]} ${placesh[1]} ${placesh[1]} ${placesh[1]} ${placesh[1]} / ${placesh[1]} ${placesh[1]} ${placesh[1]} ${placesh[1]} ${Way[11]} \n${Way[30]} ${Way[29]} ${Way[28]} ${Way[27]} ${Way[26]} ${placesh[1]} ${Way[16]} ${Way[15]} ${Way[14]} ${Way[13]} ${Way[12]} \n/ / / / ${Way[25]} ${placesh[1]} ${Way[17]} / / / / \n/ / / / ${Way[24]} ${placesh[1]} ${Way[18]} / / / / \n${placeB[0]} ${placeB[1]} / / ${Way[23]} ${placesh[1]} ${Way[19]} / / ${placeR[0]} ${placeR[1]} \n${placeB[2]} ${placeB[3]} / / ${Way[22]} ${Way[21]} ${Way[20]} / / ${placeR[2]} ${placeR[3]}\nTeam Yellow: ${TeamYellow}, Team Green: ${TeamGreen}, Team Red: ${TeamRed}, Team Black: ${TeamBlack}`, "Ludo");

    StartGameL = true;

  } else if(TeamRed != null && TeamGreen != null) {

    Tgreen = true;
    msg.channel.send(`${TeamGreen}, you start first!`)

    for(var i = 0; i < 4; i++) {

      placeB[i] = "/";
      placeR[i] = red;
      placeG[i] = green;
      placeY[i] = "/";

    }

    Embeds.error(msg.channel, `${placeY[0]} ${placeY[1]} / / ${Way[0]} ${Way[1]} ${Way[2]} / / ${placeG[0]} ${placeG[1]} \n${placeY[2]} ${placeY[3]} / / ${Way[39]} ${placesh[1]} ${Way[3]} / / ${placeG[2]} ${placeG[3]} \n/ / / / ${Way[38]} ${placesh[1]} ${Way[4]} / / / / \n/ / / / ${Way[37]} ${placesh[1]} ${Way[5]} / / / / \n${Way[32]} ${Way[33]} ${Way[34]} ${Way[35]} ${Way[36]} ${placesh[1]} ${Way[6]} ${Way[7]} ${Way[8]} ${Way[9]} ${Way[10]} \n${Way[31]} ${placesh[1]} ${placesh[1]} ${placesh[1]} ${placesh[1]} / ${placesh[1]} ${placesh[1]} ${placesh[1]} ${placesh[1]} ${Way[11]} \n${Way[30]} ${Way[29]} ${Way[28]} ${Way[27]} ${Way[26]} ${placesh[1]} ${Way[16]} ${Way[15]} ${Way[14]} ${Way[13]} ${Way[12]} \n/ / / / ${Way[25]} ${placesh[1]} ${Way[17]} / / / / \n/ / / / ${Way[24]} ${placesh[1]} ${Way[18]} / / / / \n${placeB[0]} ${placeB[1]} / / ${Way[23]} ${placesh[1]} ${Way[19]} / / ${placeR[0]} ${placeR[1]} \n${placeB[2]} ${placeB[3]} / / ${Way[22]} ${Way[21]} ${Way[20]} / / ${placeR[2]} ${placeR[3]}\nTeam Yellow: ${TeamYellow}, Team Green: ${TeamGreen}, Team Red: ${TeamRed}, Team Black: ${TeamBlack}`, "Ludo");

    StartGameL = true;

  } else if(TeamRed != null && TeamYellow != null) {

    Tyellow = true;
    msg.channel.send(`${TeamYellow}, you start first!`)

    for(var i = 0; i < 4; i++) {

      placeB[i] = "/";
      placeR[i] = red;
      placeG[i] = "/";
      placeY[i] = yellow;

    }

    Embeds.error(msg.channel, `${placeY[0]} ${placeY[1]} / / ${Way[0]} ${Way[1]} ${Way[2]} / / ${placeG[0]} ${placeG[1]} \n${placeY[2]} ${placeY[3]} / / ${Way[39]} ${placesh[1]} ${Way[3]} / / ${placeG[2]} ${placeG[3]} \n/ / / / ${Way[38]} ${placesh[1]} ${Way[4]} / / / / \n/ / / / ${Way[37]} ${placesh[1]} ${Way[5]} / / / / \n${Way[32]} ${Way[33]} ${Way[34]} ${Way[35]} ${Way[36]} ${placesh[1]} ${Way[6]} ${Way[7]} ${Way[8]} ${Way[9]} ${Way[10]} \n${Way[31]} ${placesh[1]} ${placesh[1]} ${placesh[1]} ${placesh[1]} / ${placesh[1]} ${placesh[1]} ${placesh[1]} ${placesh[1]} ${Way[11]} \n${Way[30]} ${Way[29]} ${Way[28]} ${Way[27]} ${Way[26]} ${placesh[1]} ${Way[16]} ${Way[15]} ${Way[14]} ${Way[13]} ${Way[12]} \n/ / / / ${Way[25]} ${placesh[1]} ${Way[17]} / / / / \n/ / / / ${Way[24]} ${placesh[1]} ${Way[18]} / / / / \n${placeB[0]} ${placeB[1]} / / ${Way[23]} ${placesh[1]} ${Way[19]} / / ${placeR[0]} ${placeR[1]} \n${placeB[2]} ${placeB[3]} / / ${Way[22]} ${Way[21]} ${Way[20]} / / ${placeR[2]} ${placeR[3]}\nTeam Yellow: ${TeamYellow}, Team Green: ${TeamGreen}, Team Red: ${TeamRed}, Team Black: ${TeamBlack}`, "Ludo");

    StartGameL = true;

  } else if(TeamYellow != null && TeamGreen != null) {

    Tyellow = true;
    msg.channel.send(`${TeamYellow}, you start first!`)

    for(var i = 0; i < 4; i++) {

      placeB[i] = "/";
      placeR[i] = "/";
      placeG[i] = green;
      placeY[i] = yellow;

    }

    Embeds.error(msg.channel, `${placeY[0]} ${placeY[1]} / / ${Way[0]} ${Way[1]} ${Way[2]} / / ${placeG[0]} ${placeG[1]} \n${placeY[2]} ${placeY[3]} / / ${Way[39]} ${placesh[1]} ${Way[3]} / / ${placeG[2]} ${placeG[3]} \n/ / / / ${Way[38]} ${placesh[1]} ${Way[4]} / / / / \n/ / / / ${Way[37]} ${placesh[1]} ${Way[5]} / / / / \n${Way[32]} ${Way[33]} ${Way[34]} ${Way[35]} ${Way[36]} ${placesh[1]} ${Way[6]} ${Way[7]} ${Way[8]} ${Way[9]} ${Way[10]} \n${Way[31]} ${placesh[1]} ${placesh[1]} ${placesh[1]} ${placesh[1]} / ${placesh[1]} ${placesh[1]} ${placesh[1]} ${placesh[1]} ${Way[11]} \n${Way[30]} ${Way[29]} ${Way[28]} ${Way[27]} ${Way[26]} ${placesh[1]} ${Way[16]} ${Way[15]} ${Way[14]} ${Way[13]} ${Way[12]} \n/ / / / ${Way[25]} ${placesh[1]} ${Way[17]} / / / / \n/ / / / ${Way[24]} ${placesh[1]} ${Way[18]} / / / / \n${placeB[0]} ${placeB[1]} / / ${Way[23]} ${placesh[1]} ${Way[19]} / / ${placeR[0]} ${placeR[1]} \n${placeB[2]} ${placeB[3]} / / ${Way[22]} ${Way[21]} ${Way[20]} / / ${placeR[2]} ${placeR[3]}\nTeam Yellow: ${TeamYellow}, Team Green: ${TeamGreen}, Team Red: ${TeamRed}, Team Black: ${TeamBlack}`, "Ludo");

    StartGameL = true;

  } else if(TeamBlack != null && TeamRed != null && TeamGreen != null) {

    Tgreen = true;
    msg.channel.send(`${TeamGreen}, you start first!`)

    for(var i = 0; i < 4; i++) {

      placeB[i] = black;
      placeR[i] = red;
      placeG[i] = green;
      placeY[i] = "/";

    }

    Embeds.error(msg.channel, `${placeY[0]} ${placeY[1]} / / ${Way[0]} ${Way[1]} ${Way[2]} / / ${placeG[0]} ${placeG[1]} \n${placeY[2]} ${placeY[3]} / / ${Way[39]} ${placesh[1]} ${Way[3]} / / ${placeG[2]} ${placeG[3]} \n/ / / / ${Way[38]} ${placesh[1]} ${Way[4]} / / / / \n/ / / / ${Way[37]} ${placesh[1]} ${Way[5]} / / / / \n${Way[32]} ${Way[33]} ${Way[34]} ${Way[35]} ${Way[36]} ${placesh[1]} ${Way[6]} ${Way[7]} ${Way[8]} ${Way[9]} ${Way[10]} \n${Way[31]} ${placesh[1]} ${placesh[1]} ${placesh[1]} ${placesh[1]} / ${placesh[1]} ${placesh[1]} ${placesh[1]} ${placesh[1]} ${Way[11]} \n${Way[30]} ${Way[29]} ${Way[28]} ${Way[27]} ${Way[26]} ${placesh[1]} ${Way[16]} ${Way[15]} ${Way[14]} ${Way[13]} ${Way[12]} \n/ / / / ${Way[25]} ${placesh[1]} ${Way[17]} / / / / \n/ / / / ${Way[24]} ${placesh[1]} ${Way[18]} / / / / \n${placeB[0]} ${placeB[1]} / / ${Way[23]} ${placesh[1]} ${Way[19]} / / ${placeR[0]} ${placeR[1]} \n${placeB[2]} ${placeB[3]} / / ${Way[22]} ${Way[21]} ${Way[20]} / / ${placeR[2]} ${placeR[3]}\nTeam Yellow: ${TeamYellow}, Team Green: ${TeamGreen}, Team Red: ${TeamRed}, Team Black: ${TeamBlack}`, "Ludo");

    StartGameL = true;

  } else if(TeamBlack != null && TeamRed != null && TeamYellow != null) {

    Tyellow = true;
    msg.channel.send(`${TeamYellow}, you start first!`)

    for(var i = 0; i < 4; i++) {

      placeB[i] = black;
      placeR[i] = red;
      placeG[i] = "/";
      placeY[i] = yellow;

    }

    Embeds.error(msg.channel, `${placeY[0]} ${placeY[1]} / / ${Way[0]} ${Way[1]} ${Way[2]} / / ${placeG[0]} ${placeG[1]} \n${placeY[2]} ${placeY[3]} / / ${Way[39]} ${placesh[1]} ${Way[3]} / / ${placeG[2]} ${placeG[3]} \n/ / / / ${Way[38]} ${placesh[1]} ${Way[4]} / / / / \n/ / / / ${Way[37]} ${placesh[1]} ${Way[5]} / / / / \n${Way[32]} ${Way[33]} ${Way[34]} ${Way[35]} ${Way[36]} ${placesh[1]} ${Way[6]} ${Way[7]} ${Way[8]} ${Way[9]} ${Way[10]} \n${Way[31]} ${placesh[1]} ${placesh[1]} ${placesh[1]} ${placesh[1]} / ${placesh[1]} ${placesh[1]} ${placesh[1]} ${placesh[1]} ${Way[11]} \n${Way[30]} ${Way[29]} ${Way[28]} ${Way[27]} ${Way[26]} ${placesh[1]} ${Way[16]} ${Way[15]} ${Way[14]} ${Way[13]} ${Way[12]} \n/ / / / ${Way[25]} ${placesh[1]} ${Way[17]} / / / / \n/ / / / ${Way[24]} ${placesh[1]} ${Way[18]} / / / / \n${placeB[0]} ${placeB[1]} / / ${Way[23]} ${placesh[1]} ${Way[19]} / / ${placeR[0]} ${placeR[1]} \n${placeB[2]} ${placeB[3]} / / ${Way[22]} ${Way[21]} ${Way[20]} / / ${placeR[2]} ${placeR[3]}\nTeam Yellow: ${TeamYellow}, Team Green: ${TeamGreen}, Team Red: ${TeamRed}, Team Black: ${TeamBlack}`, "Ludo");

    StartGameL = true;

  } else if(TeamGreen != null && TeamRed != null && TeamYellow != null) {

    Tyellow = true;
    msg.channel.send(`${TeamYellow}, you start first!`)

    for(var i = 0; i < 4; i++) {

      placeB[i] = "/";
      placeR[i] = red;
      placeG[i] = green;
      placeY[i] = yellow;

    }

    Embeds.error(msg.channel, `${placeY[0]} ${placeY[1]} / / ${Way[0]} ${Way[1]} ${Way[2]} / / ${placeG[0]} ${placeG[1]} \n${placeY[2]} ${placeY[3]} / / ${Way[39]} ${placesh[1]} ${Way[3]} / / ${placeG[2]} ${placeG[3]} \n/ / / / ${Way[38]} ${placesh[1]} ${Way[4]} / / / / \n/ / / / ${Way[37]} ${placesh[1]} ${Way[5]} / / / / \n${Way[32]} ${Way[33]} ${Way[34]} ${Way[35]} ${Way[36]} ${placesh[1]} ${Way[6]} ${Way[7]} ${Way[8]} ${Way[9]} ${Way[10]} \n${Way[31]} ${placesh[1]} ${placesh[1]} ${placesh[1]} ${placesh[1]} / ${placesh[1]} ${placesh[1]} ${placesh[1]} ${placesh[1]} ${Way[11]} \n${Way[30]} ${Way[29]} ${Way[28]} ${Way[27]} ${Way[26]} ${placesh[1]} ${Way[16]} ${Way[15]} ${Way[14]} ${Way[13]} ${Way[12]} \n/ / / / ${Way[25]} ${placesh[1]} ${Way[17]} / / / / \n/ / / / ${Way[24]} ${placesh[1]} ${Way[18]} / / / / \n${placeB[0]} ${placeB[1]} / / ${Way[23]} ${placesh[1]} ${Way[19]} / / ${placeR[0]} ${placeR[1]} \n${placeB[2]} ${placeB[3]} / / ${Way[22]} ${Way[21]} ${Way[20]} / / ${placeR[2]} ${placeR[3]}\nTeam Yellow: ${TeamYellow}, Team Green: ${TeamGreen}, Team Red: ${TeamRed}, Team Black: ${TeamBlack}`, "Ludo");

    StartGameL = true;

  } else if(TeamBlack != null && TeamRed != null && TeamYellow && TeamGreen != null) {

    Tyellow = true;
    msg.channel.send(`${TeamYellow}, you start first!`)

    for(var i = 0; i < 4; i++) {

      placeB[i] = black;
      placeR[i] = red;
      placeG[i] = green;
      placeY[i] = yellow;

    }

    Embeds.error(msg.channel, `${placeY[0]} ${placeY[1]} / / ${Way[0]} ${Way[1]} ${Way[2]} / / ${placeG[0]} ${placeG[1]} \n${placeY[2]} ${placeY[3]} / / ${Way[39]} ${placesh[1]} ${Way[3]} / / ${placeG[2]} ${placeG[3]} \n/ / / / ${Way[38]} ${placesh[1]} ${Way[4]} / / / / \n/ / / / ${Way[37]} ${placesh[1]} ${Way[5]} / / / / \n${Way[32]} ${Way[33]} ${Way[34]} ${Way[35]} ${Way[36]} ${placesh[1]} ${Way[6]} ${Way[7]} ${Way[8]} ${Way[9]} ${Way[10]} \n${Way[31]} ${placesh[1]} ${placesh[1]} ${placesh[1]} ${placesh[1]} / ${placesh[1]} ${placesh[1]} ${placesh[1]} ${placesh[1]} ${Way[11]} \n${Way[30]} ${Way[29]} ${Way[28]} ${Way[27]} ${Way[26]} ${placesh[1]} ${Way[16]} ${Way[15]} ${Way[14]} ${Way[13]} ${Way[12]} \n/ / / / ${Way[25]} ${placesh[1]} ${Way[17]} / / / / \n/ / / / ${Way[24]} ${placesh[1]} ${Way[18]} / / / / \n${placeB[0]} ${placeB[1]} / / ${Way[23]} ${placesh[1]} ${Way[19]} / / ${placeR[0]} ${placeR[1]} \n${placeB[2]} ${placeB[3]} / / ${Way[22]} ${Way[21]} ${Way[20]} / / ${placeR[2]} ${placeR[3]}\nTeam Yellow: ${TeamYellow}, Team Green: ${TeamGreen}, Team Red: ${TeamRed}, Team Black: ${TeamBlack}`, "Ludo");

    StartGameL = true;

  } else if (StartGameL == false) {

    msg.channel.send("You need at least two player to play!")

  }
 
}

function cmd_mdy(msg, args) {

  if(StartGameL == true) {

  if(TeamYellow != null && msg.member == TeamYellow) {

    if(Tyellow == true && Tgreen == false && CounterY < 2) {

      TCount = 0;

      for(var k = 0; k < Tries; k++) {

        AdiceY[k] = 0;

      }

      for(var t = 0; t < 4; t++) {

        if(placeY[t] === yellow) {

          TCount += 1;

        }

      }

      if(TCount === (4 - WCounterY)) {

        for(var p = 0; p < Tries; p++) {

          AdiceY[p] = Math.floor(Math.random() * Math.floor(6) + 1)

          if(AdiceY[p] === 0) {

            AdiceY[p] = 1;

          }

          if(AdiceY[p] === 6) {

            if(TCount == 4) {
      
              placeY[0] = "/"

            } else if (WCounterY > 0) {

              placeY[0 + WCounterY] = "/"

            }

              StepsTilEndY[0] -= 1;

              for(var o = (0 + WCounterY); o < 4; o++) {

                if(Way[LplaceY[o]].toString() == green) {

                  for(var l = (0 + WCounterY); l < 4; l++) {

                    if(LplaceG[l] == LplaceY[o]) {

                      placeG[l] = green;
                    
                      LplaceG[l] = 2;

                      StepsTilEndG[l] = 41;

                      msg.channel.send("AH! Green lost a player!")

                      break;

                    }

                  }

                } else if(Way[LplaceY[o]].toString() == black) {

                  for(var l = (0 + WCounterY); l < 4; l++) {

                    if(LplaceB[l] == LplaceY[o]) {

                      placeB[l] = black;
                    
                      LplaceB[l] = 22;

                      StepsTilEndB[l] = 41;

                      msg.channel.send("AH! Black lost a player!")

                      break;

                    }

                  }

                } else if(Way[LplaceY[o]].toString() == red) {

                  for(var l = (0 + WCounterY); l < 4; l++) {

                    if(LplaceR[l] == LplaceY[o]) {

                      placeR[l] = red;
                    
                      LplaceR[l] = 12;

                      StepsTilEndR[l] = 41;

                      msg.channel.send("AH! Red lost a player!")

                      break;

                    }

                  }

                }

              }
      
              Way[32] = yellow;
      
              Embeds.error(msg.channel, `${placeY[0]} ${placeY[1]} / / ${Way[0]} ${Way[1]} ${Way[2]} / / ${placeG[0]} ${placeG[1]} \n${placeY[2]} ${placeY[3]} / / ${Way[39]} ${placesh[1]} ${Way[3]} / / ${placeG[2]} ${placeG[3]} \n/ / / / ${Way[38]} ${placesh[1]} ${Way[4]} / / / / \n/ / / / ${Way[37]} ${placesh[1]} ${Way[5]} / / / / \n${Way[32]} ${Way[33]} ${Way[34]} ${Way[35]} ${Way[36]} ${placesh[1]} ${Way[6]} ${Way[7]} ${Way[8]} ${Way[9]} ${Way[10]} \n${Way[31]} ${placesh[1]} ${placesh[1]} ${placesh[1]} ${placesh[1]} / ${placesh[1]} ${placesh[1]} ${placesh[1]} ${placesh[1]} ${Way[11]} \n${Way[30]} ${Way[29]} ${Way[28]} ${Way[27]} ${Way[26]} ${placesh[1]} ${Way[16]} ${Way[15]} ${Way[14]} ${Way[13]} ${Way[12]} \n/ / / / ${Way[25]} ${placesh[1]} ${Way[17]} / / / / \n/ / / / ${Way[24]} ${placesh[1]} ${Way[18]} / / / / \n${placeB[0]} ${placeB[1]} / / ${Way[23]} ${placesh[1]} ${Way[19]} / / ${placeR[0]} ${placeR[1]} \n${placeB[2]} ${placeB[3]} / / ${Way[22]} ${Way[21]} ${Way[20]} / / ${placeR[2]} ${placeR[3]}\nTeam Yellow: ${TeamYellow}, Team Green: ${TeamGreen}, Team Red: ${TeamRed}, Team Black: ${TeamBlack}`, "Ludo");

      
              if(TeamGreen != null) {

                msg.channel.send(`Its your turn ${TeamGreen}`)
  
                Tgreen = true;
  
                Tyellow = false;
  
              } else if(TeamRed != null) {
  
                msg.channel.send(`Its your turn ${TeamRed}`)
  
                Tred = true;
  
                Tyellow = false;
  
              } else if(TeamBlack != null) {
  
                msg.channel.send(`Its your turn ${TeamBlack}`)
  
                Tblack = true;
  
                Tyellow = false;
  
              }

              break;
              

          } else if(p === 2) {

            Embeds.error(msg.channel, `Youd didnt roll a 6\nYour numbers are:\n${AdiceY[0]}\n${AdiceY[1]}\n${AdiceY[2]}`, "Dice");

            if(TeamGreen != null) {

              msg.channel.send(`Its your turn ${TeamGreen}`)

              Tgreen = true;

              Tyellow = false;

            } else if(TeamRed != null) {

              msg.channel.send(`Its your turn ${TeamRed}`)

              Tred = true;

              Tyellow = false;

            } else if(TeamBlack != null) {

              msg.channel.send(`Its your turn ${TeamBlack}`)

              Tblack = true;

              Tyellow = false;

            }

          }

        }

      } else if(TCount < 4) {

        msg.channel.send("You have to decide which Player to move! (!!mdm (1,2,3,4))")

      }

    }

  } else if (msg.member != TeamYellow) {

    msg.channel.send(`Thats not your team ${msg.member}!`)

  }

}

}

function cmd_mdg(msg, args) {

  if(StartGameL == true) {

    if(TeamGreen != null && msg.member == TeamGreen) {
  
      if(Tgreen == true && Tyellow == false && CounterG < 2) {
  
        TCount = 0;
  
        for(var k = 0; k < Tries; k++) {
  
          AdiceG[k] = 0;
  
        }
  
        for(var t = 0; t < 4; t++) {
  
          if(placeG[t] === green) {
  
            TCount += 1;
  
          }
  
        }
  
        if(TCount === (4 - WCounterG)) {
  
          for(var p = 0; p < Tries; p++) {
  
            AdiceG[p] = Math.floor(Math.random() * Math.floor(6) + 1)
  
            if(AdiceG[p] === 0) {
  
              AdiceG[p] = 1;
  
            }
  
            if(AdiceG[p] === 6) {
  
              if(TCount == 4) {
        
                placeG[0] = "/"
  
              } else if (WCounterG > 0) {
  
                placeG[0 + WCounterG] = "/"
  
              }
  
                StepsTilEndG[0] -= 1;
  
                for(var o = (0 + WCounterG); o < 4; o++) {
  
                  if(Way[LplaceY[o]].toString() == yellow) {
  
                    for(var l = (0 + WCounterG); l < 4; l++) {
  
                      if(LplaceY[l] == LplaceG[o]) {
  
                        placeY[l] = yellow;
                      
                        LplaceY[l] = 32;
  
                        StepsTilEndY[l] = 41;
  
                        msg.channel.send("AH! Yellow lost a player!")
  
                        break;
  
                      }
  
                    }
  
                  } else if(Way[LplaceG[o]].toString() == black) {
  
                    for(var l = (0 + WCounterG); l < 4; l++) {
  
                      if(LplaceB[l] == LplaceG[o]) {
  
                        placeB[l] = black;
                      
                        LplaceB[l] = 22;
  
                        StepsTilEndB[l] = 41;
  
                        msg.channel.send("AH! Black lost a player!")
  
                        break;
  
                      }
  
                    }
  
                  } else if(Way[LplaceG[o]].toString() == red) {
  
                    for(var l = (0 + WCounterG); l < 4; l++) {
  
                      if(LplaceR[l] == LplaceG[o]) {
  
                        placeR[l] = red;
                      
                        LplaceR[l] = 12;
  
                        StepsTilEndR[l] = 41;
  
                        msg.channel.send("AH! Red lost a player!")
  
                        break;
  
                      }
  
                    }
  
                  }
  
                }
        
                Way[2] = green;
        
                Embeds.error(msg.channel, `${placeY[0]} ${placeY[1]} / / ${Way[0]} ${Way[1]} ${Way[2]} / / ${placeG[0]} ${placeG[1]} \n${placeY[2]} ${placeY[3]} / / ${Way[39]} ${placesh[1]} ${Way[3]} / / ${placeG[2]} ${placeG[3]} \n/ / / / ${Way[38]} ${placesh[1]} ${Way[4]} / / / / \n/ / / / ${Way[37]} ${placesh[1]} ${Way[5]} / / / / \n${Way[32]} ${Way[33]} ${Way[34]} ${Way[35]} ${Way[36]} ${placesh[1]} ${Way[6]} ${Way[7]} ${Way[8]} ${Way[9]} ${Way[10]} \n${Way[31]} ${placesh[1]} ${placesh[1]} ${placesh[1]} ${placesh[1]} / ${placesh[1]} ${placesh[1]} ${placesh[1]} ${placesh[1]} ${Way[11]} \n${Way[30]} ${Way[29]} ${Way[28]} ${Way[27]} ${Way[26]} ${placesh[1]} ${Way[16]} ${Way[15]} ${Way[14]} ${Way[13]} ${Way[12]} \n/ / / / ${Way[25]} ${placesh[1]} ${Way[17]} / / / / \n/ / / / ${Way[24]} ${placesh[1]} ${Way[18]} / / / / \n${placeB[0]} ${placeB[1]} / / ${Way[23]} ${placesh[1]} ${Way[19]} / / ${placeR[0]} ${placeR[1]} \n${placeB[2]} ${placeB[3]} / / ${Way[22]} ${Way[21]} ${Way[20]} / / ${placeR[2]} ${placeR[3]}\nTeam Yellow: ${TeamYellow}, Team Green: ${TeamGreen}, Team Red: ${TeamRed}, Team Black: ${TeamBlack}`, "Ludo");
  
                if(TeamRed != null) {

                  msg.channel.send(`Its your turn ${TeamRed}`)
    
                  Tred = true;
    
                  Tgreen= false;
    
                } else if(TeamBlack != null) {
    
                  msg.channel.send(`Its your turn ${TeamBlack}`)
    
                  Tblack = true;
    
                  Tgreen = false;
    
                } else if(TeamYellow != null) {
    
                  msg.channel.send(`Its your turn ${TeamYellow}`)
    
                  Tyellow = true;
    
                  Tgreen = false;
    
                }
  
                break;
                
  
            } else if(p === 2) {
  
              Embeds.error(msg.channel, `You didnt roll a 6\nYour numbers are:\n${AdiceG[0]}\n${AdiceG[1]}\n${AdiceG[2]}`, "Dice");
  
              if(TeamRed != null) {

                msg.channel.send(`Its your turn ${TeamRed}`)
  
                Tred = true;
  
                Tgreen= false;
  
              } else if(TeamBlack != null) {
  
                msg.channel.send(`Its your turn ${TeamBlack}`)
  
                Tblack = true;
  
                Tgreen = false;
  
              } else if(TeamYellow != null) {
  
                msg.channel.send(`Its your turn ${TeamYellow}`)
  
                Tyellow = true;
  
                Tgreen = false;
  
              }
  
            }
  
          }
  
        } else if(TCount < 4) {
  
          msg.channel.send("You have to decide which Player to move! (!!mdm (1,2,3,4))")
  
        }
  
      }
  
    } else if (msg.member != TeamGreen) {

      msg.channel.send(`Thats not your team ${msg.member}!`)

    }
  
  }

}

function cmd_mdb(msg, args) {

  if(StartGameL == true) {

    if(TeamBlack != null && msg.member == TeamBlack) {
  
      if(Tblack == true && Tyellow == false && CounterG < 2) {
  
        TCount = 0;
  
        for(var k = 0; k < Tries; k++) {
  
          AdiceB[k] = 0;
  
        }
  
        for(var t = 0; t < 4; t++) {
  
          if(placeB[t] === black) {
  
            TCount += 1;
  
          }
  
        }
  
        if(TCount === (4 - WCounterB)) {
  
          for(var p = 0; p < Tries; p++) {
  
            AdiceB[p] = Math.floor(Math.random() * Math.floor(6) + 1)
  
            if(AdiceB[p] === 0) {
  
              AdiceB[p] = 1;
  
            }
  
            if(AdiceB[p] === 6) {
  
              if(TCount == 4) {
        
                placeB[0] = "/"
  
              } else if (WCounterB > 0) {
  
                placeB[0 + WCounterB] = "/"
  
              }
  
                StepsTilEndB[0] -= 1;
  
                for(var o = (0 + WCounterB); o < 4; o++) {
  
                  if(Way[LplaceB[o]].toString() == yellow) {
  
                    for(var l = (0 + WCounterB); l < 4; l++) {
  
                      if(LplaceY[l] == LplaceB[o]) {
  
                        placeY[l] = yellow;
                      
                        LplaceY[l] = 32;
  
                        StepsTilEndY[l] = 41;
  
                        msg.channel.send("AH! Yellow lost a player!")
  
                        break;
  
                      }
  
                    }
  
                  } else if(Way[LplaceB[o]].toString() == green) {
  
                    for(var l = (0 + WCounterB); l < 4; l++) {
  
                      if(LplaceG[l] == LplaceB[o]) {
  
                        placeG[l] = green;
                      
                        LplaceG[l] = 2;
  
                        StepsTilEndG[l] = 41;
  
                        msg.channel.send("AH! Green lost a player!")
  
                        break;
  
                      }
  
                    }
  
                  } else if(Way[LplaceB[o]].toString() == red) {
  
                    for(var l = (0 + WCounterB); l < 4; l++) {
  
                      if(LplaceR[l] == LplaceB[o]) {
  
                        placeR[l] = red;
                      
                        LplaceR[l] = 12;
  
                        StepsTilEndR[l] = 41;
  
                        msg.channel.send("AH! Red lost a player!")
  
                        break;
  
                      }
  
                    }
  
                  }
  
                }
        
                Way[22] = black;
        
                Embeds.error(msg.channel, `${placeY[0]} ${placeY[1]} / / ${Way[0]} ${Way[1]} ${Way[2]} / / ${placeG[0]} ${placeG[1]} \n${placeY[2]} ${placeY[3]} / / ${Way[39]} ${placesh[1]} ${Way[3]} / / ${placeG[2]} ${placeG[3]} \n/ / / / ${Way[38]} ${placesh[1]} ${Way[4]} / / / / \n/ / / / ${Way[37]} ${placesh[1]} ${Way[5]} / / / / \n${Way[32]} ${Way[33]} ${Way[34]} ${Way[35]} ${Way[36]} ${placesh[1]} ${Way[6]} ${Way[7]} ${Way[8]} ${Way[9]} ${Way[10]} \n${Way[31]} ${placesh[1]} ${placesh[1]} ${placesh[1]} ${placesh[1]} / ${placesh[1]} ${placesh[1]} ${placesh[1]} ${placesh[1]} ${Way[11]} \n${Way[30]} ${Way[29]} ${Way[28]} ${Way[27]} ${Way[26]} ${placesh[1]} ${Way[16]} ${Way[15]} ${Way[14]} ${Way[13]} ${Way[12]} \n/ / / / ${Way[25]} ${placesh[1]} ${Way[17]} / / / / \n/ / / / ${Way[24]} ${placesh[1]} ${Way[18]} / / / / \n${placeB[0]} ${placeB[1]} / / ${Way[23]} ${placesh[1]} ${Way[19]} / / ${placeR[0]} ${placeR[1]} \n${placeB[2]} ${placeB[3]} / / ${Way[22]} ${Way[21]} ${Way[20]} / / ${placeR[2]} ${placeR[3]}\nTeam Yellow: ${TeamYellow}, Team Green: ${TeamGreen}, Team Red: ${TeamRed}, Team Black: ${TeamBlack}`, "Ludo");
  
                if(TeamYellow != null) {

                  msg.channel.send(`Its your turn ${TeamYellow}`)
    
                  Tyellow = true;
    
                  Tblack = false;
    
                } else if(TeamGreen != null) {
    
                  msg.channel.send(`Its your turn ${TeamGreen}`)
    
                  Tgreen = true;
    
                  Tblack = false;
    
                } else if(TeamRed != null) {
    
                  msg.channel.send(`Its your turn ${TeamRed}`)
    
                  Tred = true;
    
                  Tblack = false;
    
                }
  
                break;
                
  
            } else if(p === 2) {
  
              Embeds.error(msg.channel, `Youd didnt roll a 6\nYour numbers are:\n${AdiceB[0]}\n${AdiceB[1]}\n${AdiceB[2]}`, "Dice");
  
              if(TeamYellow != null) {

                msg.channel.send(`Its your turn ${TeamYellow}`)
  
                Tyellow = true;
  
                Tblack = false;
  
              } else if(TeamGreen != null) {
  
                msg.channel.send(`Its your turn ${TeamGreen}`)
  
                Tgreen = true;
  
                Tblack = false;
  
              } else if(TeamRed != null) {
  
                msg.channel.send(`Its your turn ${TeamRed}`)
  
                Tred = true;
  
                Tblack = false;
  
              }
  
            }
  
          }
  
        } else if(TCount < 4) {
  
          msg.channel.send("You have to decide which Player to move! (!!mdm (1,2,3,4))")
  
        }
  
      }
  
    } else if (msg.member != TeamBlack) {

      msg.channel.send(`Thats not your team ${msg.member}!`)

    }
  
  }

}

function cmd_mdr(msg, args) {

  if(StartGameL == true) {

    if(TeamRed != null && msg.member == TeamRed) {
  
      if(Tred == true && Tyellow == false && CounterG < 2) {
  
        TCount = 0;
  
        for(var k = 0; k < Tries; k++) {
  
          AdiceR[k] = 0;
  
        }
  
        for(var t = 0; t < 4; t++) {
  
          if(placeR[t] === red) {
  
            TCount += 1;
  
          }
  
        }
  
        if(TCount === (4 - WCounterR)) {
  
          for(var p = 0; p < Tries; p++) {
  
            AdiceR[p] = Math.floor(Math.random() * Math.floor(6) + 1)
  
            if(AdiceR[p] === 0) {
  
              AdiceR[p] = 1;
  
            }
  
            if(AdiceR[p] === 6) {
  
              if(TCount == 4) {
        
                placeR[0] = "/"
  
              } else if (WCounterR > 0) {
  
                placeR[0 + WCounterR] = "/"
  
              }
  
                StepsTilEndR[0] -= 1;
  
                for(var o = (0 + WCounterR); o < 4; o++) {
  
                  if(Way[LplaceR[o]].toString() == yellow) {
  
                    for(var l = (0 + WCounterR); l < 4; l++) {
  
                      if(LplaceY[l] == LplaceR[o]) {
  
                        placeY[l] = yellow;
                      
                        LplaceY[l] = 32;
  
                        StepsTilEndY[l] = 41;
  
                        msg.channel.send("AH! Yellow lost a player!")
  
                        break;
  
                      }
  
                    }
  
                  } else if(Way[LplaceR[o]].toString() == green) {
  
                    for(var l = (0 + WCounterR); l < 4; l++) {
  
                      if(LplaceG[l] == LplaceR[o]) {
  
                        placeG[l] = green;
                      
                        LplaceG[l] = 2;
  
                        StepsTilEndG[l] = 41;
  
                        msg.channel.send("AH! Green lost a player!")
  
                        break;
  
                      }
  
                    }
  
                  } else if(Way[LplaceR[o]].toString() == black) {
  
                    for(var l = (0 + WCounterR); l < 4; l++) {
  
                      if(LplaceB[l] == LplaceR[o]) {
  
                        placeB[l] = black;
                      
                        LplaceB[l] = 22;
  
                        StepsTilEndR[l] = 41;
  
                        msg.channel.send("AH! Red lost a player!")
  
                        break;
  
                      }
  
                    }
  
                  }
  
                }
        
                Way[12] = red;
        
                Embeds.error(msg.channel, `${placeY[0]} ${placeY[1]} / / ${Way[0]} ${Way[1]} ${Way[2]} / / ${placeG[0]} ${placeG[1]} \n${placeY[2]} ${placeY[3]} / / ${Way[39]} ${placesh[1]} ${Way[3]} / / ${placeG[2]} ${placeG[3]} \n/ / / / ${Way[38]} ${placesh[1]} ${Way[4]} / / / / \n/ / / / ${Way[37]} ${placesh[1]} ${Way[5]} / / / / \n${Way[32]} ${Way[33]} ${Way[34]} ${Way[35]} ${Way[36]} ${placesh[1]} ${Way[6]} ${Way[7]} ${Way[8]} ${Way[9]} ${Way[10]} \n${Way[31]} ${placesh[1]} ${placesh[1]} ${placesh[1]} ${placesh[1]} / ${placesh[1]} ${placesh[1]} ${placesh[1]} ${placesh[1]} ${Way[11]} \n${Way[30]} ${Way[29]} ${Way[28]} ${Way[27]} ${Way[26]} ${placesh[1]} ${Way[16]} ${Way[15]} ${Way[14]} ${Way[13]} ${Way[12]} \n/ / / / ${Way[25]} ${placesh[1]} ${Way[17]} / / / / \n/ / / / ${Way[24]} ${placesh[1]} ${Way[18]} / / / / \n${placeB[0]} ${placeB[1]} / / ${Way[23]} ${placesh[1]} ${Way[19]} / / ${placeR[0]} ${placeR[1]} \n${placeB[2]} ${placeB[3]} / / ${Way[22]} ${Way[21]} ${Way[20]} / / ${placeR[2]} ${placeR[3]}\nTeam Yellow: ${TeamYellow}, Team Green: ${TeamGreen}, Team Red: ${TeamRed}, Team Black: ${TeamBlack}`, "Ludo");
  
        
                if(TeamBlack != null) {

                  msg.channel.send(`Its your turn ${TeamBlack}`)
    
                  Tblack = true;
    
                  Tred = false;
    
                } else if(TeamYellow != null) {
  
                  msg.channel.send(`Its your turn ${TeamYellow}`)
    
                  Tyellow = true;
    
                  Tred = false;
    
                } else if(TeamGreen != null) {
  
                  msg.channel.send(`Its your turn ${TeamGreen}`)
    
                  Tgreen = true;
    
                  Tred = false;
    
                }
  
                break;
                
  
            } else if(p === 2) {
  
              Embeds.error(msg.channel, `Youd didnt roll a 6\nYour numbers are:\n${AdiceR[0]}\n${AdiceR[1]}\n${AdiceR[2]}`, "Dice");
  
              if(TeamBlack != null) {

                msg.channel.send(`Its your turn ${TeamBlack}`)
  
                Tblack = true;
  
                Tred = false;
  
              } else if(TeamYellow != null) {
  
                msg.channel.send(`Its your turn ${TeamYellow}`)
  
                Tyellow = true;
  
                Tred = false;
  
              } else if(TeamGreen != null) {
  
                msg.channel.send(`Its your turn ${TeamGreen}`)
  
                Tgreen = true;
  
                Tred = false;
  
              }
  
            }
  
          }
  
        } else if(TCount < 4) {
  
          msg.channel.send("You have to decide which Player to move! (!!mdm (1,2,3,4))")
  
        }
  
      }
  
    } else if (msg.member != TeamRed) {

      msg.channel.send(`Thats not your team ${msg.member}!`)

    }
  
  }

}

function cmd_mdmy(msg, args) {

  var cont = msg.content

  var invoke = cont.split(' ')[0].substr(config.prefix.length),
            args = cont.split(' ').slice(1);

  if(Tyellow == true && msg.member == TeamYellow) {

    TCount = 0;

    AbleToGoOn = false;

    for(var t = 0; t < 4; t++) {

      if(placeY[t] === yellow) {

        TCount += 1;

      }

    }

    if(TCount < (4 - WCounterY)) {

      for(var i = 0; i < 4; i++) {

        if(placeY[i] != yellow) {

          if(parseInt(args[0] - 1) == i) {

            AbleToGoOn = true;

            break;

          } 

        }

      }

      if(AbleToGoOn == true && LplaceY[parseInt(args[0]) - 1] != (-1)) {

        diceY = Math.floor(Math.random() * Math.floor(6) + 1)

        if(diceY < 1) {

        diceY = 1

        }

        msg.channel.send(`Your number: ${diceY}`)

        if(diceY === 6) {

          SixTries += 1;

          if(Way[32] == "x" || Way[32] == "g" || Way[32] == "b" || Way[32] == "r") {

            if(Way[32] == "x") {

              for(var x = 0; x < 4; x++) {

                if(placeY[x] == yellow) {

                  placeY[x] = "/";

                  Way[32] = SafeplaceY[x]

                  StepsTilEndY[x] -= 1;

                  break;

                }

              }

            } else if(Way[32] == "g") {

              for(var i = 0; i < 4; i++) {

                if(LplaceG[i] == 32) {

                  placeG[i] = green;

                  LplaceG[i] = 2;

                  StepsTilEndG[i] = 41;

                  msg.channel.send("AH! Green lost one player!")

                  break;

                }

              }

              for(var x = 0; x < 4; x++) {

                if(placeY[x] == yellow) {

                  placeY[x] = "/";

                  StepsTilEndY[x] -= 1;

                  Way[32] = SafeplaceY[x]

                  break;

                }

              }

            } else if(Way[32] == "r") {

              for(var i = 0; i < 4; i++) {

                if(LplaceR[i] == 32) {

                  placeR[i] = red;

                  LplaceR[i] = 12;

                  StepsTilEndR[i] = 41;

                  msg.channel.send("AH! Red lost one player!")

                  break;

                }

              }

              for(var x = 0; x < 4; x++) {

                if(placeY[x] == yellow) {

                  placeY[x] = "/";

                  Way[32] = SafeplaceY[x]

                  StepsTilEndY[x] -= 1;

                  break;

                }

              }

            } else if(Way[32] == "b") {

              for(var i = 0; i < 4; i++) {

                if(LplaceB[i] == 32) {

                  placeB[i] = black;

                  LplaceB[i] = 22;

                  StepsTilEndB[i] = 41;

                  msg.channel.send("AH! Black lost one player!")

                  break;

                }

              }

              for(var x = 0; x < 4; x++) {

                if(placeY[x] == yellow) {

                  placeY[x] = "/";

                  Way[32] = SafeplaceY[x]

                  StepsTilEndY[x] -= 1;

                  break;

                }

              }

            } 

            Embeds.error(msg.channel, `${placeY[0]} ${placeY[1]} / / ${Way[0]} ${Way[1]} ${Way[2]} / / ${placeG[0]} ${placeG[1]} \n${placeY[2]} ${placeY[3]} / / ${Way[39]} ${placesh[1]} ${Way[3]} / / ${placeG[2]} ${placeG[3]} \n/ / / / ${Way[38]} ${placesh[1]} ${Way[4]} / / / / \n/ / / / ${Way[37]} ${placesh[1]} ${Way[5]} / / / / \n${Way[32]} ${Way[33]} ${Way[34]} ${Way[35]} ${Way[36]} ${placesh[1]} ${Way[6]} ${Way[7]} ${Way[8]} ${Way[9]} ${Way[10]} \n${Way[31]} ${placesh[1]} ${placesh[1]} ${placesh[1]} ${placesh[1]} / ${placesh[1]} ${placesh[1]} ${placesh[1]} ${placesh[1]} ${Way[11]} \n${Way[30]} ${Way[29]} ${Way[28]} ${Way[27]} ${Way[26]} ${placesh[1]} ${Way[16]} ${Way[15]} ${Way[14]} ${Way[13]} ${Way[12]} \n/ / / / ${Way[25]} ${placesh[1]} ${Way[17]} / / / / \n/ / / / ${Way[24]} ${placesh[1]} ${Way[18]} / / / / \n${placeB[0]} ${placeB[1]} / / ${Way[23]} ${placesh[1]} ${Way[19]} / / ${placeR[0]} ${placeR[1]} \n${placeB[2]} ${placeB[3]} / / ${Way[22]} ${Way[21]} ${Way[20]} / / ${placeR[2]} ${placeR[3]}\nTeam Yellow: ${TeamYellow}, Team Green: ${TeamGreen}, Team Red: ${TeamRed}, Team Black: ${TeamBlack}`, "Ludo");

            } else if (Way[32] == yellow) {

              if(LplaceY[parseInt(args[0]) - 1] + diceY > 39) {

                tempSumY = (LplaceY[parseInt(args[0]) - 1] + diceY) - 40;
    
              } else {
    
                tempSumY = (LplaceY[parseInt(args[0]) - 1] + diceY);
    
              }

              if(Way[tempSumY].toString() == yellow) {

                msg.channel.send("Moved the next possible char!")
    
                for(var k = 0; k < 4; k++) {
    
                  if(Way[LplaceY[k] + diceY] != yellow) {
    
                    Way[LplaceY[k]] = "x";
    
                    if ((StepsTilEndY[k] - diceY) <= 0) {
    
                      Way[LplaceY[k]] = "x";  
          
                      LplaceY[k] = -1;
          
                      WCounterY += 1;
          
                      if(WCounterY == 4) {
          
                        msg.channel.send(`You won the game, ${TeamYellow}!`)

                        Reset_Ludo();
          
                      } else if (WCounterY < 4) {
      
                        if(TeamGreen != null) {
      
                          msg.channel.send(`You are one step closer to a win! ${WCounterY}!\nIts your turn ${TeamGreen}`)
            
                          Tgreen = true;
            
                          Tyellow = false;
            
                        } else if(TeamRed != null) {
            
                          msg.channel.send(`You are one step closer to a win! ${WCounterY}!\nIts your turn ${TeamRed}`)
            
                          Tred = true;
            
                          Tyellow = false;
            
                        } else if(TeamBlack != null) {
            
                          msg.channel.send(`You are one step closer to a win! ${WCounterY}!\nIts your turn ${TeamBlack}`)
            
                          Tblack = true;
            
                          Tyellow = false;
            
                        }
          
                      }
    
                    } else if ((StepsTilEndY[k] - diceY) > 0) {
    
                      LplaceY[k] += diceY;
    
                      if (LplaceY[k] > 39) {
    
                        LplaceY[k] = (LplaceY[k]) - 40;
    
                        Checker = true;
    
                        }
    
                      if(Way[LplaceY[k]].toString() == green) {
    
                        for(var l = 0; l < 4; l++) {
    
                          if(LplaceG[l] == LplaceY[k]) {
    
                            placeG[l] = green;
                        
                            LplaceG[l] = 2;
    
                            StepsTilEndG[l] = 41;
    
                            msg.channel.send("AH! Green lost a player!")
    
                            break;
    
                            }
    
                          }
    
                        }
    
                        else if (Way[LplaceY[k]].toString() == red) {
    
                          for(var l = 0; l < 4; l++) {
      
                            if(LplaceR[l] == LplaceY[k]) {
      
                              placeR[l] = red;
                          
                              LplaceR[l] = 12;
    
                              StepsTilEndR[l] = 41;
      
                              msg.channel.send("AH! Red lost a player!")
                              
                              break;
      
                              }
      
                            }
      
                          }
    
                          else if(Way[LplaceY[k]].toString() == black) {
    
                            for(var l = 0; l < 4; l++) {
        
                              if(LplaceB[l] == LplaceY[k]) {
        
                                placeB[l] = black;
                            
                                LplaceB[l] = 22;
    
                                StepsTilEndB[l] = 41;
        
                                msg.channel.send("AH! Black lost a player!")
      
                                break;
        
                                }
        
                              }
        
                            }
        
                      Way[LplaceY[k]] = SafeplaceY[k];
    
                      StepsTilEndY[k] -= diceY; 
    
                      if(Checker == true) {
    
                        tempY = (LplaceY[k] - diceY) + 40;
    
                        Way[tempY] = "x";
    
                        } else if (Checker == false) {
    
                          Way[LplaceY[k] - diceY] = "x";
    
                        }
    
                        Checker = false;
    
                        CounterY = 0;
    
                        }
    
                    break;
    
                  }
    
                }
    
                Embeds.error(msg.channel, `${placeY[0]} ${placeY[1]} / / ${Way[0]} ${Way[1]} ${Way[2]} / / ${placeG[0]} ${placeG[1]} \n${placeY[2]} ${placeY[3]} / / ${Way[39]} ${placesh[1]} ${Way[3]} / / ${placeG[2]} ${placeG[3]} \n/ / / / ${Way[38]} ${placesh[1]} ${Way[4]} / / / / \n/ / / / ${Way[37]} ${placesh[1]} ${Way[5]} / / / / \n${Way[32]} ${Way[33]} ${Way[34]} ${Way[35]} ${Way[36]} ${placesh[1]} ${Way[6]} ${Way[7]} ${Way[8]} ${Way[9]} ${Way[10]} \n${Way[31]} ${placesh[1]} ${placesh[1]} ${placesh[1]} ${placesh[1]} / ${placesh[1]} ${placesh[1]} ${placesh[1]} ${placesh[1]} ${Way[11]} \n${Way[30]} ${Way[29]} ${Way[28]} ${Way[27]} ${Way[26]} ${placesh[1]} ${Way[16]} ${Way[15]} ${Way[14]} ${Way[13]} ${Way[12]} \n/ / / / ${Way[25]} ${placesh[1]} ${Way[17]} / / / / \n/ / / / ${Way[24]} ${placesh[1]} ${Way[18]} / / / / \n${placeB[0]} ${placeB[1]} / / ${Way[23]} ${placesh[1]} ${Way[19]} / / ${placeR[0]} ${placeR[1]} \n${placeB[2]} ${placeB[3]} / / ${Way[22]} ${Way[21]} ${Way[20]} / / ${placeR[2]} ${placeR[3]}\nTeam Yellow: ${TeamYellow}, Team Green: ${TeamGreen}, Team Red: ${TeamRed}, Team Black: ${TeamBlack}`, "Ludo");
    
                if(TeamGreen != null) {
    
                  msg.channel.send(`Its your turn ${TeamGreen}`)
    
                  Tgreen = true;
    
                  Tyellow = false;
    
                } else if(TeamRed != null) {
    
                  msg.channel.send(`Its your turn ${TeamRed}`)
    
                  Tred = true;
    
                  Tyellow = false;
    
                } else if(TeamBlack != null) {
    
                  msg.channel.send(`Its your turn ${TeamBlack}`)
    
                  Tblack = true;
    
                  Tyellow = false;
    
                }

              } else if (Way[tempSumY].toString() != yellow) {

              if ((StepsTilEndY[parseInt(args[0]) - 1]) - diceY <= 0) {

                Way[LplaceY[parseInt(args[0]) - 1]] = "x";  
    
                LplaceY[parseInt(args[0]) - 1] = -1;
    
                WCounterY += 1;
    
                if(WCounterY == 4) {
    
                  msg.channel.send(`You won the game, ${TeamYellow}!`)

                  Reset_Ludo();
    
                } else if (WCounterY < 4) {

                  if(TeamGreen != null) {

                    msg.channel.send(`You are one step closer to a win! ${WCounterY}!\nIts your turn ${TeamGreen}`)
      
                    Tgreen = true;
      
                    Tyellow = false;
      
                  } else if(TeamRed != null) {
      
                    msg.channel.send(`You are one step closer to a win! ${WCounterY}!\nIts your turn ${TeamRed}`)
      
                    Tred = true;
      
                    Tyellow = false;
      
                  } else if(TeamBlack != null) {
      
                    msg.channel.send(`You are one step closer to a win! ${WCounterY}!\nIts your turn ${TeamBlack}`)
      
                    Tblack = true;
      
                    Tyellow = false;
      
                  }
    
                }

                Embeds.error(msg.channel, `${placeY[0]} ${placeY[1]} / / ${Way[0]} ${Way[1]} ${Way[2]} / / ${placeG[0]} ${placeG[1]} \n${placeY[2]} ${placeY[3]} / / ${Way[39]} ${placesh[1]} ${Way[3]} / / ${placeG[2]} ${placeG[3]} \n/ / / / ${Way[38]} ${placesh[1]} ${Way[4]} / / / / \n/ / / / ${Way[37]} ${placesh[1]} ${Way[5]} / / / / \n${Way[32]} ${Way[33]} ${Way[34]} ${Way[35]} ${Way[36]} ${placesh[1]} ${Way[6]} ${Way[7]} ${Way[8]} ${Way[9]} ${Way[10]} \n${Way[31]} ${placesh[1]} ${placesh[1]} ${placesh[1]} ${placesh[1]} / ${placesh[1]} ${placesh[1]} ${placesh[1]} ${placesh[1]} ${Way[11]} \n${Way[30]} ${Way[29]} ${Way[28]} ${Way[27]} ${Way[26]} ${placesh[1]} ${Way[16]} ${Way[15]} ${Way[14]} ${Way[13]} ${Way[12]} \n/ / / / ${Way[25]} ${placesh[1]} ${Way[17]} / / / / \n/ / / / ${Way[24]} ${placesh[1]} ${Way[18]} / / / / \n${placeB[0]} ${placeB[1]} / / ${Way[23]} ${placesh[1]} ${Way[19]} / / ${placeR[0]} ${placeR[1]} \n${placeB[2]} ${placeB[3]} / / ${Way[22]} ${Way[21]} ${Way[20]} / / ${placeR[2]} ${placeR[3]}\nTeam Yellow: ${TeamYellow}, Team Green: ${TeamGreen}, Team Red: ${TeamRed}, Team Black: ${TeamBlack}`, "Ludo");

                
              } else if ((StepsTilEndY[parseInt(args[0]) - 1]) - diceY > 0) {

              LplaceY[parseInt(args[0]) - 1] += diceY;
  
              if (LplaceY[parseInt(args[0]) - 1] > 39) {
    
                LplaceY[parseInt(args[0]) - 1] = (LplaceY[parseInt(args[0]) - 1]) - 40;
    
                Checker = true;
    
              }
    
              if(Way[LplaceY[parseInt(args[0]) - 1]].toString() == green) {
    
                for(var l = 0; l < 4; l++) {
    
                  if(LplaceG[l] == LplaceY[parseInt(args[0]) - 1]) {
    
                    placeG[l] = green;
                        
                    LplaceG[l] = 2;
  
                    StepsTilEndG[l] = 41;
    
                    msg.channel.send("AH! Green lost a player!")
  
                    break;
    
                    }
    
                  }
    
                }
  
                else if (Way[LplaceY[parseInt(args[0]) - 1]].toString() == red) {
    
                  for(var l = 0; l < 4; l++) {
      
                    if(LplaceR[l] == LplaceY[parseInt(args[0]) - 1]) {
      
                      placeR[l] = red;
                          
                      LplaceR[l] = 12;
  
                      StepsTilEndR[l] = 41;
      
                      msg.channel.send("AH! Red lost a player!")
    
                      break;
      
                      }
      
                    }
      
                  }
  
                  else if(Way[LplaceY[parseInt(args[0]) - 1]].toString() == black) {
    
                    for(var l = 0; l < 4; l++) {
        
                      if(LplaceB[l] == LplaceY[parseInt(args[0]) - 1]) {
        
                        placeB[l] = black;
                            
                        LplaceB[l] = 22;
  
                        StepsTilEndB[l] = 41;
        
                        msg.channel.send("AH! Black lost a player!")
      
                        break;
        
                        }
        
                      }
        
                    }
        
                Way[LplaceY[parseInt(args[0]) - 1]] = SafeplaceY[parseInt(args[0]) - 1];
  
                StepsTilEndY[parseInt(args[0] - 1)] -= diceY; 
    
                if(Checker == true) {
    
                  tempY = (LplaceY[parseInt(args[0]) - 1] - diceY) + 40;
    
                  Way[tempY] = "x";
    
                } else if (Checker == false) {
    
                  Way[LplaceY[parseInt(args[0]) - 1] - diceY] = "x";
  
                }
    
                Checker = false;
    
                CounterY = 0;
    
                Embeds.error(msg.channel, `${placeY[0]} ${placeY[1]} / / ${Way[0]} ${Way[1]} ${Way[2]} / / ${placeG[0]} ${placeG[1]} \n${placeY[2]} ${placeY[3]} / / ${Way[39]} ${placesh[1]} ${Way[3]} / / ${placeG[2]} ${placeG[3]} \n/ / / / ${Way[38]} ${placesh[1]} ${Way[4]} / / / / \n/ / / / ${Way[37]} ${placesh[1]} ${Way[5]} / / / / \n${Way[32]} ${Way[33]} ${Way[34]} ${Way[35]} ${Way[36]} ${placesh[1]} ${Way[6]} ${Way[7]} ${Way[8]} ${Way[9]} ${Way[10]} \n${Way[31]} ${placesh[1]} ${placesh[1]} ${placesh[1]} ${placesh[1]} / ${placesh[1]} ${placesh[1]} ${placesh[1]} ${placesh[1]} ${Way[11]} \n${Way[30]} ${Way[29]} ${Way[28]} ${Way[27]} ${Way[26]} ${placesh[1]} ${Way[16]} ${Way[15]} ${Way[14]} ${Way[13]} ${Way[12]} \n/ / / / ${Way[25]} ${placesh[1]} ${Way[17]} / / / / \n/ / / / ${Way[24]} ${placesh[1]} ${Way[18]} / / / / \n${placeB[0]} ${placeB[1]} / / ${Way[23]} ${placesh[1]} ${Way[19]} / / ${placeR[0]} ${placeR[1]} \n${placeB[2]} ${placeB[3]} / / ${Way[22]} ${Way[21]} ${Way[20]} / / ${placeR[2]} ${placeR[3]}\nTeam Yellow: ${TeamYellow}, Team Green: ${TeamGreen}, Team Red: ${TeamRed}, Team Black: ${TeamBlack}`, "Ludo");

              }
  
            }

          }

          msg.channel.send("Your number is 6! You can roll the dice again!")

          SixTries -= 1;

        } else if (diceY < 6 && SixTries === 0) {

          if(LplaceY[parseInt(args[0]) - 1] + diceY > 39) {

            tempSumY = (LplaceY[parseInt(args[0]) - 1] + diceY) - 40;

          } else {

            tempSumY = (LplaceY[parseInt(args[0]) - 1] + diceY);

          }

          if(Way[tempSumY].toString() == yellow) {

            msg.channel.send("Moved the next possible char!")

            for(var k = 0; k < 4; k++) {

              if(Way[LplaceY[k] + diceY] != yellow) {

                Way[LplaceY[k]] = "x";

                if ((StepsTilEndY[k] - diceY) <= 0) {

                  Way[LplaceY[k]] = "x";  
      
                  LplaceY[k] = -1;
      
                  WCounterY += 1;
      
                  if(WCounterY == 4) {
      
                    msg.channel.send(`You won the game, ${TeamYellow}!`)

                    Reset_Ludo();
      
                  } else if (WCounterY < 4) {
  
                    if(TeamGreen != null) {
  
                      msg.channel.send(`You are one step closer to a win! ${WCounterY}!\nIts your turn ${TeamGreen}`)
        
                      Tgreen = true;
        
                      Tyellow = false;
        
                    } else if(TeamRed != null) {
        
                      msg.channel.send(`You are one step closer to a win! ${WCounterY}!\nIts your turn ${TeamRed}`)
        
                      Tred = true;
        
                      Tyellow = false;
        
                    } else if(TeamBlack != null) {
        
                      msg.channel.send(`You are one step closer to a win! ${WCounterY}!\nIts your turn ${TeamBlack}`)
        
                      Tblack = true;
        
                      Tyellow = false;
        
                    }
      
                  }

                } else if ((StepsTilEndY[k] - diceY) > 0) {

                  LplaceY[k] += diceY;

                  if (LplaceY[k] > 39) {

                    LplaceY[k] = (LplaceY[k]) - 40;

                    Checker = true;

                    }

                  if(Way[LplaceY[k]].toString() == green) {

                    for(var l = 0; l < 4; l++) {

                      if(LplaceG[l] == LplaceY[k]) {

                        placeG[l] = green;
                    
                        LplaceG[l] = 2;

                        StepsTilEndG[l] = 41;

                        msg.channel.send("AH! Green lost a player!")

                        break;

                        }

                      }

                    }

                    else if (Way[LplaceY[k]].toString() == red) {

                      for(var l = 0; l < 4; l++) {
  
                        if(LplaceR[l] == LplaceY[k]) {
  
                          placeR[l] = red;
                      
                          LplaceR[l] = 12;

                          StepsTilEndR[l] = 41;
  
                          msg.channel.send("AH! Red lost a player!")
                          
                          break;
  
                          }
  
                        }
  
                      }

                      else if(Way[LplaceY[k]].toString() == black) {

                        for(var l = 0; l < 4; l++) {
    
                          if(LplaceB[l] == LplaceY[k]) {
    
                            placeB[l] = black;
                        
                            LplaceB[l] = 22;

                            StepsTilEndB[l] = 41;
    
                            msg.channel.send("AH! Black lost a player!")
  
                            break;
    
                            }
    
                          }
    
                        }
    
                  Way[LplaceY[k]] = SafeplaceY[k];

                  StepsTilEndY[k] -= diceY; 

                  if(Checker == true) {

                    tempY = (LplaceY[k] - diceY) + 40;

                    Way[tempY] = "x";

                    } else if (Checker == false) {

                      Way[LplaceY[k] - diceY] = "x";

                    }

                    Checker = false;

                    CounterY = 0;

                    }

                break;

              }

            }

            Embeds.error(msg.channel, `${placeY[0]} ${placeY[1]} / / ${Way[0]} ${Way[1]} ${Way[2]} / / ${placeG[0]} ${placeG[1]} \n${placeY[2]} ${placeY[3]} / / ${Way[39]} ${placesh[1]} ${Way[3]} / / ${placeG[2]} ${placeG[3]} \n/ / / / ${Way[38]} ${placesh[1]} ${Way[4]} / / / / \n/ / / / ${Way[37]} ${placesh[1]} ${Way[5]} / / / / \n${Way[32]} ${Way[33]} ${Way[34]} ${Way[35]} ${Way[36]} ${placesh[1]} ${Way[6]} ${Way[7]} ${Way[8]} ${Way[9]} ${Way[10]} \n${Way[31]} ${placesh[1]} ${placesh[1]} ${placesh[1]} ${placesh[1]} / ${placesh[1]} ${placesh[1]} ${placesh[1]} ${placesh[1]} ${Way[11]} \n${Way[30]} ${Way[29]} ${Way[28]} ${Way[27]} ${Way[26]} ${placesh[1]} ${Way[16]} ${Way[15]} ${Way[14]} ${Way[13]} ${Way[12]} \n/ / / / ${Way[25]} ${placesh[1]} ${Way[17]} / / / / \n/ / / / ${Way[24]} ${placesh[1]} ${Way[18]} / / / / \n${placeB[0]} ${placeB[1]} / / ${Way[23]} ${placesh[1]} ${Way[19]} / / ${placeR[0]} ${placeR[1]} \n${placeB[2]} ${placeB[3]} / / ${Way[22]} ${Way[21]} ${Way[20]} / / ${placeR[2]} ${placeR[3]}\nTeam Yellow: ${TeamYellow}, Team Green: ${TeamGreen}, Team Red: ${TeamRed}, Team Black: ${TeamBlack}`, "Ludo");

            if(TeamGreen != null) {

              msg.channel.send(`Its your turn ${TeamGreen}`)

              Tgreen = true;

              Tyellow = false;

            } else if(TeamRed != null) {

              msg.channel.send(`Its your turn ${TeamRed}`)

              Tred = true;

              Tyellow = false;

            } else if(TeamBlack != null) {

              msg.channel.send(`Its your turn ${TeamBlack}`)

              Tblack = true;

              Tyellow = false;

            }

          } else if (Way[tempSumY].toString() != yellow) {

          if ((StepsTilEndY[parseInt(args[0]) - 1]) - diceY <= 0) {

            Way[LplaceY[parseInt(args[0]) - 1]] = "x";  

            LplaceY[parseInt(args[0]) - 1] = -1;

            WCounterY += 1;

            if(WCounterY == 4) {

              msg.channel.send(`You won the game, ${TeamYellow}!`)

              Reset_Ludo();

            } else if (WCounterY < 4) {

              if(TeamGreen != null) {

                msg.channel.send(`You are one step closer to a win! ${WCounterY}!\nIts your turn ${TeamGreen}`)
  
                Tgreen = true;
  
                Tyellow = false;
  
              } else if(TeamRed != null) {
  
                msg.channel.send(`You are one step closer to a win! ${WCounterY}!\nIts your turn ${TeamRed}`)
  
                Tred = true;
  
                Tyellow = false;
  
              } else if(TeamBlack != null) {
  
                msg.channel.send(`You are one step closer to a win! ${WCounterY}!\nIts your turn ${TeamBlack}`)
  
                Tblack = true;
  
                Tyellow = false;
  
              }

            }

            Embeds.error(msg.channel, `${placeY[0]} ${placeY[1]} / / ${Way[0]} ${Way[1]} ${Way[2]} / / ${placeG[0]} ${placeG[1]} \n${placeY[2]} ${placeY[3]} / / ${Way[39]} ${placesh[1]} ${Way[3]} / / ${placeG[2]} ${placeG[3]} \n/ / / / ${Way[38]} ${placesh[1]} ${Way[4]} / / / / \n/ / / / ${Way[37]} ${placesh[1]} ${Way[5]} / / / / \n${Way[32]} ${Way[33]} ${Way[34]} ${Way[35]} ${Way[36]} ${placesh[1]} ${Way[6]} ${Way[7]} ${Way[8]} ${Way[9]} ${Way[10]} \n${Way[31]} ${placesh[1]} ${placesh[1]} ${placesh[1]} ${placesh[1]} / ${placesh[1]} ${placesh[1]} ${placesh[1]} ${placesh[1]} ${Way[11]} \n${Way[30]} ${Way[29]} ${Way[28]} ${Way[27]} ${Way[26]} ${placesh[1]} ${Way[16]} ${Way[15]} ${Way[14]} ${Way[13]} ${Way[12]} \n/ / / / ${Way[25]} ${placesh[1]} ${Way[17]} / / / / \n/ / / / ${Way[24]} ${placesh[1]} ${Way[18]} / / / / \n${placeB[0]} ${placeB[1]} / / ${Way[23]} ${placesh[1]} ${Way[19]} / / ${placeR[0]} ${placeR[1]} \n${placeB[2]} ${placeB[3]} / / ${Way[22]} ${Way[21]} ${Way[20]} / / ${placeR[2]} ${placeR[3]}\nTeam Yellow: ${TeamYellow}, Team Green: ${TeamGreen}, Team Red: ${TeamRed}, Team Black: ${TeamBlack}`, "Ludo");

            if(TeamGreen != null) {

              msg.channel.send(`Its your turn ${TeamGreen}`)

              Tgreen = true;

              Tyellow = false;

            } else if(TeamRed != null) {

              msg.channel.send(`Its your turn ${TeamRed}`)

              Tred = true;

              Tyellow = false;

            } else if(TeamBlack != null) {

              msg.channel.send(`Its your turn ${TeamBlack}`)

              Tblack = true;

              Tyellow = false;

            }
            
          } else if ((StepsTilEndY[parseInt(args[0]) - 1]) - diceY > 0) {

            LplaceY[parseInt(args[0]) - 1] += diceY;
  
            if(LplaceY[parseInt(args[0]) - 1] > 39) {
  
              LplaceY[parseInt(args[0]) - 1] = (LplaceY[parseInt(args[0]) - 1]) - 40;
  
              Checker = true;
  
            }
  
            if(Way[LplaceY[parseInt(args[0]) - 1]].toString() == green) {
  
              for(var l = 0; l < 4; l++) {
  
                if(LplaceG[l] == LplaceY[parseInt(args[0]) - 1]) {
  
                  placeG[l] = green;
                      
                  LplaceG[l] = 2;

                  StepsTilEndG[l] = 41;
  
                  msg.channel.send("AH! Green lost a player!")

                  break;
  
                  }
  
                }
  
              }

              else if (Way[LplaceY[parseInt(args[0]) - 1]].toString() == red) {
  
                for(var l = 0; l < 4; l++) {
    
                  if(LplaceR[l] == LplaceY[parseInt(args[0]) - 1]) {
    
                    placeR[l] = red;
                        
                    LplaceR[l] = 12;

                    StepsTilEndR[l] = 41;
    
                    msg.channel.send("AH! Red lost a player!")
  
                    break;
    
                    }
    
                  }
    
                }

                else if(Way[LplaceY[parseInt(args[0]) - 1]].toString() == black) {
  
                  for(var l = 0; l < 4; l++) {
      
                    if(LplaceB[l] == LplaceY[parseInt(args[0]) - 1]) {
      
                      placeB[l] = black;
                          
                      LplaceB[l] = 22;

                      StepsTilEndB[l] = 41;
      
                      msg.channel.send("AH! Black lost a player!")
    
                      break;
      
                      }
      
                    }
      
                  }
      
              Way[LplaceY[parseInt(args[0]) - 1]] = SafeplaceY[parseInt(args[0]) - 1];

              StepsTilEndY[parseInt(args[0] - 1)] -= diceY; 
  
              if(Checker == true) {
  
                tempY = (LplaceY[parseInt(args[0]) - 1] - diceY) + 40;
  
                Way[tempY] = "x";
  
              } else if (Checker == false) {
  
                Way[LplaceY[parseInt(args[0]) - 1] - diceY] = "x";

              }
  
              Checker = false;
  
              CounterY = 0;
  
              Embeds.error(msg.channel, `${placeY[0]} ${placeY[1]} / / ${Way[0]} ${Way[1]} ${Way[2]} / / ${placeG[0]} ${placeG[1]} \n${placeY[2]} ${placeY[3]} / / ${Way[39]} ${placesh[1]} ${Way[3]} / / ${placeG[2]} ${placeG[3]} \n/ / / / ${Way[38]} ${placesh[1]} ${Way[4]} / / / / \n/ / / / ${Way[37]} ${placesh[1]} ${Way[5]} / / / / \n${Way[32]} ${Way[33]} ${Way[34]} ${Way[35]} ${Way[36]} ${placesh[1]} ${Way[6]} ${Way[7]} ${Way[8]} ${Way[9]} ${Way[10]} \n${Way[31]} ${placesh[1]} ${placesh[1]} ${placesh[1]} ${placesh[1]} / ${placesh[1]} ${placesh[1]} ${placesh[1]} ${placesh[1]} ${Way[11]} \n${Way[30]} ${Way[29]} ${Way[28]} ${Way[27]} ${Way[26]} ${placesh[1]} ${Way[16]} ${Way[15]} ${Way[14]} ${Way[13]} ${Way[12]} \n/ / / / ${Way[25]} ${placesh[1]} ${Way[17]} / / / / \n/ / / / ${Way[24]} ${placesh[1]} ${Way[18]} / / / / \n${placeB[0]} ${placeB[1]} / / ${Way[23]} ${placesh[1]} ${Way[19]} / / ${placeR[0]} ${placeR[1]} \n${placeB[2]} ${placeB[3]} / / ${Way[22]} ${Way[21]} ${Way[20]} / / ${placeR[2]} ${placeR[3]}\nTeam Yellow: ${TeamYellow}, Team Green: ${TeamGreen}, Team Red: ${TeamRed}, Team Black: ${TeamBlack}`, "Ludo");

              if(TeamGreen != null) {

                msg.channel.send(`Its your turn ${TeamGreen}`)
  
                Tgreen = true;
  
                Tyellow = false;
  
              } else if(TeamRed != null) {
  
                msg.channel.send(`Its your turn ${TeamRed}`)
  
                Tred = true;
  
                Tyellow = false;
  
              } else if(TeamBlack != null) {
  
                msg.channel.send(`Its your turn ${TeamBlack}`)
  
                Tblack = true;
  
                Tyellow = false;
  
              }

            }

          }

        }

          } else if (AbleToGoOn == false) {

            msg.channel.send("This player isnt available!")

          } else if (LplaceY[parseInt(args[0]) - 1] == -1) {

            msg.channel.send("This player has already finished! Use another player!")

          }

        } else {

          msg.channel.send("Your spawn is full, there are no players on the field! Use !!md (y,b,g,r)")

        }

    } else if( msg.member != TeamYellow ) {

      msg.channel.send(`Thats not your team ${msg.member}!`)

    }

} 

function cmd_mdmg(msg, args) {

  var cont = msg.content

  var invoke = cont.split(' ')[0].substr(config.prefix.length),
            args = cont.split(' ').slice(1);

  if(Tgreen == true && msg.member == TeamGreen) {

    TCount = 0;

    AbleToGoOn = false;

    for(var t = 0; t < 4; t++) {

      if(placeG[t] === green) {

        TCount += 1;

      }

    }

    if(TCount < (4 - WCounterG)) {

      for(var i = 0; i < 4; i++) {

        if(placeG[i] != green) {

          if(parseInt(args[0] - 1) == i) {

            AbleToGoOn = true;

            break;

          } 

        }

      }

      if(AbleToGoOn == true && LplaceG[parseInt(args[0]) - 1] != (-1)) {

        diceG = Math.floor(Math.random() * Math.floor(6) + 1)

        if(diceG < 1) {

        diceG = 1

        }

        msg.channel.send(`Your number: ${diceG}`)

        if(diceG === 6) {

          SixTries += 1;

          if(Way[2] == "x" || Way[2] == "y" || Way[2] == "b" || Way[2] == "r") {

            if(Way[2] == "x") {

              for(var x = 0; x < 4; x++) {

                if(placeG[x] == green) {

                  placeG[x] = "/";

                  Way[2] = SafeplaceG[x]

                  StepsTilEndG[x] -= 1;

                  break;

                }

              }

            } else if(Way[2] == "y") {

              for(var i = 0; i < 4; i++) {

                if(LplaceY[i] == 2) {

                  placeY[i] = yellow;

                  LplaceY[i] = 32;

                  StepsTilEndY[i] = 41;

                  msg.channel.send("AH! Yellow lost one player!")

                  break;

                }

              }

              for(var x = 0; x < 4; x++) {

                if(placeG[x] == green) {

                  placeG[x] = "/";

                  StepsTilEndG[x] -= 1;

                  Way[2] = SafeplaceG[x]

                  break;

                }

              }

            } else if(Way[2] == "r") {

              for(var i = 0; i < 4; i++) {

                if(LplaceR[i] == 2) {

                  placeR[i] = red;

                  LplaceR[i] = 12;

                  StepsTilEndR[i] = 41;

                  msg.channel.send("AH! Red lost one player!")

                  break;

                }

              }

              for(var x = 0; x < 4; x++) {

                if(placeG[x] == green) {

                  placeG[x] = "/";

                  Way[2] = SafeplaceG[x]

                  StepsTilEndG[x] -= 1;

                  break;

                }

              }

            } else if(Way[2] == "b") {

              for(var i = 0; i < 4; i++) {

                if(LplaceB[i] == 2) {

                  placeB[i] = black;

                  LplaceB[i] = 22;

                  StepsTilEndB[i] = 41;

                  msg.channel.send("AH! Black lost one player!")

                  break;

                }

              }

              for(var x = 0; x < 4; x++) {

                if(placeG[x] == green) {

                  placeG[x] = "/";

                  Way[2] = SafeplaceG[x]

                  StepsTilEndG[x] -= 1;

                  break;

                }

              }

            } 

            Embeds.error(msg.channel, `${placeY[0]} ${placeY[1]} / / ${Way[0]} ${Way[1]} ${Way[2]} / / ${placeG[0]} ${placeG[1]} \n${placeY[2]} ${placeY[3]} / / ${Way[39]} ${placesh[1]} ${Way[3]} / / ${placeG[2]} ${placeG[3]} \n/ / / / ${Way[38]} ${placesh[1]} ${Way[4]} / / / / \n/ / / / ${Way[37]} ${placesh[1]} ${Way[5]} / / / / \n${Way[32]} ${Way[33]} ${Way[34]} ${Way[35]} ${Way[36]} ${placesh[1]} ${Way[6]} ${Way[7]} ${Way[8]} ${Way[9]} ${Way[10]} \n${Way[31]} ${placesh[1]} ${placesh[1]} ${placesh[1]} ${placesh[1]} / ${placesh[1]} ${placesh[1]} ${placesh[1]} ${placesh[1]} ${Way[11]} \n${Way[30]} ${Way[29]} ${Way[28]} ${Way[27]} ${Way[26]} ${placesh[1]} ${Way[16]} ${Way[15]} ${Way[14]} ${Way[13]} ${Way[12]} \n/ / / / ${Way[25]} ${placesh[1]} ${Way[17]} / / / / \n/ / / / ${Way[24]} ${placesh[1]} ${Way[18]} / / / / \n${placeB[0]} ${placeB[1]} / / ${Way[23]} ${placesh[1]} ${Way[19]} / / ${placeR[0]} ${placeR[1]} \n${placeB[2]} ${placeB[3]} / / ${Way[22]} ${Way[21]} ${Way[20]} / / ${placeR[2]} ${placeR[3]}\nTeam Yellow: ${TeamYellow}, Team Green: ${TeamGreen}, Team Red: ${TeamRed}, Team Black: ${TeamBlack}`, "Ludo");

            } else if (Way[2] == green) {

            if(LplaceG[parseInt(args[0]) - 1] + diceG > 39) {

              tempSumG = (LplaceG[parseInt(args[0]) - 1] + diceG) - 40;
    
            } else {
    
              tempSumG = (LplaceG[parseInt(args[0]) - 1] + diceG);
    
            }

            if(Way[tempSumG].toString() == green) {

              msg.channel.send("Moved the next possible char!")
  
              for(var k = 0; k < 4; k++) {
  
                if(Way[LplaceG[k] + diceG] != green) {
  
                  Way[LplaceG[k]] = "x";
  
                  if ((StepsTilEndG[k] - diceG) <= 0) {
  
                    Way[LplaceG[k]] = "x";  
        
                    LplaceG[k] = -1;
        
                    WCounterG += 1;
        
                    if(WCounterG == 4) {
        
                      msg.channel.send(`You won the game, ${TeamGreen}!`)

                      Reset_Ludo();
        
                    } else if (WCounterG < 4) {
    
                      if(TeamRed != null) {
    
                        msg.channel.send(`You are one step closer to a win! ${WCounterG}!\nIts your turn ${TeamRed}`)
          
                        Tred = true;
          
                        Tgreen = false;
          
                      } else if(TeamBlack != null) {
          
                        msg.channel.send(`You are one step closer to a win! ${WCounterG}!\nIts your turn ${TeamBlack}`)
          
                        Tblack = true;
          
                        Tgreen = false;
          
                      } else if(TeamYellow != null) {
          
                        msg.channel.send(`You are one step closer to a win! ${WCounterG}!\nIts your turn ${TeamYellow}`)
          
                        Tyellow = true;
          
                        Tgreen = false;
          
                      }
        
                    }
  
                  } else if ((StepsTilEndG[k] - diceG) > 0) {
  
                    LplaceG[k] += diceG;
  
                    if (LplaceG[k] > 39) {
  
                      LplaceG[k] = (LplaceG[k]) - 40;
  
                      Checker = true;
  
                      }
  
                    if(Way[LplaceG[k]].toString() == yellow) {
  
                      for(var l = 0; l < 4; l++) {
  
                        if(LplaceY[l] == LplaceG[k]) {
  
                          placeY[l] = yellow;
                      
                          LplaceY[l] = 32;
  
                          StepsTilEndY[l] = 41;
  
                          msg.channel.send("AH! Yellow lost a player!")
  
                          break;
  
                          }
  
                        }
  
                      }
  
                      else if (Way[LplaceG[k]].toString() == red) {
  
                        for(var l = 0; l < 4; l++) {
    
                          if(LplaceR[l] == LplaceG[k]) {
    
                            placeR[l] = red;
                        
                            LplaceR[l] = 12;
  
                            StepsTilEndR[l] = 41;
    
                            msg.channel.send("AH! Red lost a player!")
                            
                            break;
    
                            }
    
                          }
    
                        }
  
                        else if(Way[LplaceG[k]].toString() == black) {
  
                          for(var l = 0; l < 4; l++) {
      
                            if(LplaceB[l] == LplaceG[k]) {
      
                              placeB[l] = black;
                          
                              LplaceB[l] = 22;
  
                              StepsTilEndB[l] = 41;
      
                              msg.channel.send("AH! Black lost a player!")
    
                              break;
      
                              }
      
                            }
      
                          }
      
                    Way[LplaceG[k]] = SafeplaceG[k];
  
                    StepsTilEndG[k] -= diceG; 
  
                    if(Checker == true) {
  
                      tempG = (LplaceG[k] - diceG) + 40;
  
                      Way[tempG] = "x";
  
                      } else if (Checker == false) {
  
                        Way[LplaceG[k] - diceG] = "x";
  
                      }
  
                      Checker = false;
  
                      CounterY = 0;
  
                      }
  
                  break;
  
                }
  
              }
  
              Embeds.error(msg.channel, `${placeY[0]} ${placeY[1]} / / ${Way[0]} ${Way[1]} ${Way[2]} / / ${placeG[0]} ${placeG[1]} \n${placeY[2]} ${placeY[3]} / / ${Way[39]} ${placesh[1]} ${Way[3]} / / ${placeG[2]} ${placeG[3]} \n/ / / / ${Way[38]} ${placesh[1]} ${Way[4]} / / / / \n/ / / / ${Way[37]} ${placesh[1]} ${Way[5]} / / / / \n${Way[32]} ${Way[33]} ${Way[34]} ${Way[35]} ${Way[36]} ${placesh[1]} ${Way[6]} ${Way[7]} ${Way[8]} ${Way[9]} ${Way[10]} \n${Way[31]} ${placesh[1]} ${placesh[1]} ${placesh[1]} ${placesh[1]} / ${placesh[1]} ${placesh[1]} ${placesh[1]} ${placesh[1]} ${Way[11]} \n${Way[30]} ${Way[29]} ${Way[28]} ${Way[27]} ${Way[26]} ${placesh[1]} ${Way[16]} ${Way[15]} ${Way[14]} ${Way[13]} ${Way[12]} \n/ / / / ${Way[25]} ${placesh[1]} ${Way[17]} / / / / \n/ / / / ${Way[24]} ${placesh[1]} ${Way[18]} / / / / \n${placeB[0]} ${placeB[1]} / / ${Way[23]} ${placesh[1]} ${Way[19]} / / ${placeR[0]} ${placeR[1]} \n${placeB[2]} ${placeB[3]} / / ${Way[22]} ${Way[21]} ${Way[20]} / / ${placeR[2]} ${placeR[3]}\nTeam Yellow: ${TeamYellow}, Team Green: ${TeamGreen}, Team Red: ${TeamRed}, Team Black: ${TeamBlack}`, "Ludo");

            } else if (Way[tempSumG].toString() != green) {

              if ((StepsTilEndG[parseInt(args[0]) - 1]) - diceG <= 0) {

                Way[LplaceG[parseInt(args[0]) - 1]] = "x";  
    
                LplaceG[parseInt(args[0]) - 1] = -1;
    
                WCounterG += 1;
    
                if(WCounterG == 4) {
    
                  msg.channel.send(`You won the game, ${TeamGreen}!`)

                  Reset_Ludo();
    
                } else if (WCounterG < 4) {

                  if(TeamRed != null) {
      
                    msg.channel.send(`You are one step closer to a win! ${WCounterG}!\nIts your turn ${TeamRed}`)
      
                    Tred = true;
      
                    Tgreen = false;
      
                  } else if(TeamBlack != null) {
      
                    msg.channel.send(`You are one step closer to a win! ${WCounterG}!\nIts your turn ${TeamBlack}`)
      
                    Tblack = true;
      
                    Tgreen = false;
      
                  } else if(TeamYellow != null) {
      
                    msg.channel.send(`You are one step closer to a win! ${WCounterG}!\nIts your turn ${TeamYellow}`)
      
                    Tyellow = true;
      
                    Tgreen = false;
      
                  }
    
                }

                Embeds.error(msg.channel, `${placeY[0]} ${placeY[1]} / / ${Way[0]} ${Way[1]} ${Way[2]} / / ${placeG[0]} ${placeG[1]} \n${placeY[2]} ${placeY[3]} / / ${Way[39]} ${placesh[1]} ${Way[3]} / / ${placeG[2]} ${placeG[3]} \n/ / / / ${Way[38]} ${placesh[1]} ${Way[4]} / / / / \n/ / / / ${Way[37]} ${placesh[1]} ${Way[5]} / / / / \n${Way[32]} ${Way[33]} ${Way[34]} ${Way[35]} ${Way[36]} ${placesh[1]} ${Way[6]} ${Way[7]} ${Way[8]} ${Way[9]} ${Way[10]} \n${Way[31]} ${placesh[1]} ${placesh[1]} ${placesh[1]} ${placesh[1]} / ${placesh[1]} ${placesh[1]} ${placesh[1]} ${placesh[1]} ${Way[11]} \n${Way[30]} ${Way[29]} ${Way[28]} ${Way[27]} ${Way[26]} ${placesh[1]} ${Way[16]} ${Way[15]} ${Way[14]} ${Way[13]} ${Way[12]} \n/ / / / ${Way[25]} ${placesh[1]} ${Way[17]} / / / / \n/ / / / ${Way[24]} ${placesh[1]} ${Way[18]} / / / / \n${placeB[0]} ${placeB[1]} / / ${Way[23]} ${placesh[1]} ${Way[19]} / / ${placeR[0]} ${placeR[1]} \n${placeB[2]} ${placeB[3]} / / ${Way[22]} ${Way[21]} ${Way[20]} / / ${placeR[2]} ${placeR[3]}\nTeam Yellow: ${TeamYellow}, Team Green: ${TeamGreen}, Team Red: ${TeamRed}, Team Black: ${TeamBlack}`, "Ludo");

                
              } else if ((StepsTilEndG[parseInt(args[0]) - 1]) - diceG > 0) {

              LplaceG[parseInt(args[0]) - 1] += diceG;
  
              if (LplaceG[parseInt(args[0]) - 1] > 39) {
    
                LplaceG[parseInt(args[0]) - 1] = (LplaceG[parseInt(args[0]) - 1]) - 40;
    
                Checker = true;
    
              }
    
              if(Way[LplaceG[parseInt(args[0]) - 1]].toString() == yellow) {
    
                for(var l = 0; l < 4; l++) {
    
                  if(LplaceY[l] == LplaceG[parseInt(args[0]) - 1]) {
    
                    placeY[l] = yellow;
                        
                    LplaceY[l] = 32;
  
                    StepsTilEndY[l] = 41;
    
                    msg.channel.send("AH! Yellow lost a player!")
  
                    break;
    
                    }
    
                  }
    
                }
  
                else if (Way[LplaceG[parseInt(args[0]) - 1]].toString() == red) {
    
                  for(var l = 0; l < 4; l++) {
      
                    if(LplaceR[l] == LplaceG[parseInt(args[0]) - 1]) {
      
                      placeR[l] = red;
                          
                      LplaceR[l] = 12;
  
                      StepsTilEndR[l] = 41;
      
                      msg.channel.send("AH! Red lost a player!")
    
                      break;
      
                      }
      
                    }
      
                  }
  
                  else if(Way[LplaceG[parseInt(args[0]) - 1]].toString() == black) {
    
                    for(var l = 0; l < 4; l++) {
        
                      if(LplaceB[l] == LplaceG[parseInt(args[0]) - 1]) {
        
                        placeB[l] = black;
                            
                        LplaceB[l] = 22;
  
                        StepsTilEndB[l] = 41;
        
                        msg.channel.send("AH! Black lost a player!")
      
                        break;
        
                        }
        
                      }
        
                    }
        
                Way[LplaceG[parseInt(args[0]) - 1]] = SafeplaceG[parseInt(args[0]) - 1];
  
                StepsTilEndG[parseInt(args[0] - 1)] -= diceG; 
    
                if(Checker == true) {
    
                  tempG = (LplaceG[parseInt(args[0]) - 1] - diceG) + 40;
    
                  Way[tempG] = "x";
    
                } else if (Checker == false) {
    
                  Way[LplaceG[parseInt(args[0]) - 1] - diceG] = "x";
  
                }
    
                Checker = false;
    
                CounterG = 0;
    
                Embeds.error(msg.channel, `${placeY[0]} ${placeY[1]} / / ${Way[0]} ${Way[1]} ${Way[2]} / / ${placeG[0]} ${placeG[1]} \n${placeY[2]} ${placeY[3]} / / ${Way[39]} ${placesh[1]} ${Way[3]} / / ${placeG[2]} ${placeG[3]} \n/ / / / ${Way[38]} ${placesh[1]} ${Way[4]} / / / / \n/ / / / ${Way[37]} ${placesh[1]} ${Way[5]} / / / / \n${Way[32]} ${Way[33]} ${Way[34]} ${Way[35]} ${Way[36]} ${placesh[1]} ${Way[6]} ${Way[7]} ${Way[8]} ${Way[9]} ${Way[10]} \n${Way[31]} ${placesh[1]} ${placesh[1]} ${placesh[1]} ${placesh[1]} / ${placesh[1]} ${placesh[1]} ${placesh[1]} ${placesh[1]} ${Way[11]} \n${Way[30]} ${Way[29]} ${Way[28]} ${Way[27]} ${Way[26]} ${placesh[1]} ${Way[16]} ${Way[15]} ${Way[14]} ${Way[13]} ${Way[12]} \n/ / / / ${Way[25]} ${placesh[1]} ${Way[17]} / / / / \n/ / / / ${Way[24]} ${placesh[1]} ${Way[18]} / / / / \n${placeB[0]} ${placeB[1]} / / ${Way[23]} ${placesh[1]} ${Way[19]} / / ${placeR[0]} ${placeR[1]} \n${placeB[2]} ${placeB[3]} / / ${Way[22]} ${Way[21]} ${Way[20]} / / ${placeR[2]} ${placeR[3]}\nTeam Yellow: ${TeamYellow}, Team Green: ${TeamGreen}, Team Red: ${TeamRed}, Team Black: ${TeamBlack}`, "Ludo");

              }
  
            }

          }

          msg.channel.send("Your number is 6! You can roll the dice again!")

          SixTries -= 1;

        } else if (diceG < 6 && SixTries === 0) {

          if(LplaceG[parseInt(args[0]) - 1] + diceG > 39) {

            tempSumG = (LplaceG[parseInt(args[0]) - 1] + diceG) - 40;

          } else {

            tempSumG = (LplaceG[parseInt(args[0]) - 1] + diceG);

          }

          if(Way[tempSumG].toString() == green) {

            msg.channel.send("Moved the next possible char!")

            for(var k = 0; k < 4; k++) {

              if(Way[LplaceG[k] + diceG] != green) {

                Way[LplaceG[k]] = "x";

                if ((StepsTilEndG[k] - diceG) <= 0) {

                  Way[LplaceG[k]] = "x";  
      
                  LplaceG[k] = -1;
      
                  WCounterG += 1;
      
                  if(WCounterG == 4) {
      
                    msg.channel.send(`You won the game, ${TeamGreen}!`)

                    Reset_Ludo();
      
                  } else if (WCounterG < 4) {
  
                    if(TeamRed != null) {
  
                      msg.channel.send(`You are one step closer to a win! ${WCounterG}!\nIts your turn ${TeamRed}`)
        
                      Tred = true;
        
                      Tgreen = false;
        
                    } else if(TeamBlack != null) {
        
                      msg.channel.send(`You are one step closer to a win! ${WCounterG}!\nIts your turn ${TeamBlack}`)
        
                      Tblack = true;
        
                      Tgreen = false;
        
                    } else if(TeamYellow != null) {
        
                      msg.channel.send(`You are one step closer to a win! ${WCounterG}!\nIts your turn ${TeamYellow}`)
        
                      Tyellow = true;
        
                      Tgreen = false;
        
                    }
      
                  }

                } else if ((StepsTilEndG[k] - diceG) > 0) {

                  LplaceG[k] += diceG;

                  if (LplaceG[k] > 39) {

                    LplaceG[k] = (LplaceG[k]) - 40;

                    Checker = true;

                    }

                  if(Way[LplaceG[k]].toString() == yellow) {

                    for(var l = 0; l < 4; l++) {

                      if(LplaceY[l] == LplaceG[k]) {

                        placeY[l] = yellow;
                    
                        LplaceY[l] = 32;

                        StepsTilEndY[l] = 41;

                        msg.channel.send("AH! Yellow lost a player!")

                        break;

                        }

                      }

                    }

                    else if (Way[LplaceG[k]].toString() == red) {

                      for(var l = 0; l < 4; l++) {
  
                        if(LplaceR[l] == LplaceG[k]) {
  
                          placeR[l] = red;
                      
                          LplaceR[l] = 12;

                          StepsTilEndR[l] = 41;
  
                          msg.channel.send("AH! Red lost a player!")
                          
                          break;
  
                          }
  
                        }
  
                      }

                      else if(Way[LplaceG[k]].toString() == black) {

                        for(var l = 0; l < 4; l++) {
    
                          if(LplaceB[l] == LplaceG[k]) {
    
                            placeB[l] = black;
                        
                            LplaceB[l] = 22;

                            StepsTilEndB[l] = 41;
    
                            msg.channel.send("AH! Black lost a player!")
  
                            break;
    
                            }
    
                          }
    
                        }
    
                  Way[LplaceG[k]] = SafeplaceG[k];

                  StepsTilEndG[k] -= diceG; 

                  if(Checker == true) {

                    tempG = (LplaceG[k] - diceG) + 40;

                    Way[tempG] = "x";

                    } else if (Checker == false) {

                      Way[LplaceG[k] - diceG] = "x";

                    }

                    Checker = false;

                    CounterY = 0;

                    }

                break;

              }

            }

            Embeds.error(msg.channel, `${placeY[0]} ${placeY[1]} / / ${Way[0]} ${Way[1]} ${Way[2]} / / ${placeG[0]} ${placeG[1]} \n${placeY[2]} ${placeY[3]} / / ${Way[39]} ${placesh[1]} ${Way[3]} / / ${placeG[2]} ${placeG[3]} \n/ / / / ${Way[38]} ${placesh[1]} ${Way[4]} / / / / \n/ / / / ${Way[37]} ${placesh[1]} ${Way[5]} / / / / \n${Way[32]} ${Way[33]} ${Way[34]} ${Way[35]} ${Way[36]} ${placesh[1]} ${Way[6]} ${Way[7]} ${Way[8]} ${Way[9]} ${Way[10]} \n${Way[31]} ${placesh[1]} ${placesh[1]} ${placesh[1]} ${placesh[1]} / ${placesh[1]} ${placesh[1]} ${placesh[1]} ${placesh[1]} ${Way[11]} \n${Way[30]} ${Way[29]} ${Way[28]} ${Way[27]} ${Way[26]} ${placesh[1]} ${Way[16]} ${Way[15]} ${Way[14]} ${Way[13]} ${Way[12]} \n/ / / / ${Way[25]} ${placesh[1]} ${Way[17]} / / / / \n/ / / / ${Way[24]} ${placesh[1]} ${Way[18]} / / / / \n${placeB[0]} ${placeB[1]} / / ${Way[23]} ${placesh[1]} ${Way[19]} / / ${placeR[0]} ${placeR[1]} \n${placeB[2]} ${placeB[3]} / / ${Way[22]} ${Way[21]} ${Way[20]} / / ${placeR[2]} ${placeR[3]}\nTeam Yellow: ${TeamYellow}, Team Green: ${TeamGreen}, Team Red: ${TeamRed}, Team Black: ${TeamBlack}`, "Ludo");

            if(TeamRed != null) {
      
              msg.channel.send(`Its your turn ${TeamRed}!`)

              Tred = true;

              Tgreen = false;

            } else if(TeamBlack != null) {

              msg.channel.send(`Its your turn ${TeamBlack}!`)

              Tblack = true;

              Tgreen = false;

            } else if(TeamYellow != null) {

              msg.channel.send(`Its your turn ${TeamYellow}!`)

              Tyellow = true;

              Tgreen = false;

            }

          } else if (Way[tempSumG].toString() != green) {

          if ((StepsTilEndG[parseInt(args[0]) - 1]) - diceG <= 0) {

            Way[LplaceG[parseInt(args[0]) - 1]] = "x";  

            LplaceG[parseInt(args[0]) - 1] = -1;

            WCounterG += 1;

            if(WCounterG == 4) {

              msg.channel.send(`You won the game, ${TeamGreen}!`)

              Reset_Ludo();

            } else if (WCounterG < 4) {

              if(TeamRed != null) {
      
                msg.channel.send(`You are one step closer to a win! ${WCounterG}!\nIts your turn ${TeamRed}`)
  
                Tred = true;
  
                Tgreen = false;
  
              } else if(TeamBlack != null) {
  
                msg.channel.send(`You are one step closer to a win! ${WCounterG}!\nIts your turn ${TeamBlack}`)
  
                Tblack = true;
  
                Tgreen = false;
  
              } else if(TeamYellow != null) {
  
                msg.channel.send(`You are one step closer to a win! ${WCounterG}!\nIts your turn ${TeamYellow}`)
  
                Tyellow = true;
  
                Tgreen = false;
  
              }

            }

            Embeds.error(msg.channel, `${placeY[0]} ${placeY[1]} / / ${Way[0]} ${Way[1]} ${Way[2]} / / ${placeG[0]} ${placeG[1]} \n${placeY[2]} ${placeY[3]} / / ${Way[39]} ${placesh[1]} ${Way[3]} / / ${placeG[2]} ${placeG[3]} \n/ / / / ${Way[38]} ${placesh[1]} ${Way[4]} / / / / \n/ / / / ${Way[37]} ${placesh[1]} ${Way[5]} / / / / \n${Way[32]} ${Way[33]} ${Way[34]} ${Way[35]} ${Way[36]} ${placesh[1]} ${Way[6]} ${Way[7]} ${Way[8]} ${Way[9]} ${Way[10]} \n${Way[31]} ${placesh[1]} ${placesh[1]} ${placesh[1]} ${placesh[1]} / ${placesh[1]} ${placesh[1]} ${placesh[1]} ${placesh[1]} ${Way[11]} \n${Way[30]} ${Way[29]} ${Way[28]} ${Way[27]} ${Way[26]} ${placesh[1]} ${Way[16]} ${Way[15]} ${Way[14]} ${Way[13]} ${Way[12]} \n/ / / / ${Way[25]} ${placesh[1]} ${Way[17]} / / / / \n/ / / / ${Way[24]} ${placesh[1]} ${Way[18]} / / / / \n${placeB[0]} ${placeB[1]} / / ${Way[23]} ${placesh[1]} ${Way[19]} / / ${placeR[0]} ${placeR[1]} \n${placeB[2]} ${placeB[3]} / / ${Way[22]} ${Way[21]} ${Way[20]} / / ${placeR[2]} ${placeR[3]}\nTeam Yellow: ${TeamYellow}, Team Green: ${TeamGreen}, Team Red: ${TeamRed}, Team Black: ${TeamBlack}`, "Ludo");

            if(TeamRed != null) {
      
              msg.channel.send(`Its your turn ${TeamRed}!`)

              Tred = true;

              Tgreen = false;

            } else if(TeamBlack != null) {

              msg.channel.send(`Its your turn ${TeamBlack}!`)

              Tblack = true;

              Tgreen = false;

            } else if(TeamYellow != null) {

              msg.channel.send(`Its your turn ${TeamYellow}!`)

              Tyellow = true;

              Tgreen = false;

            }
            
          } else if ((StepsTilEndG[parseInt(args[0]) - 1]) - diceG > 0) {

            LplaceG[parseInt(args[0]) - 1] += diceG;
  
            if(LplaceG[parseInt(args[0]) - 1] > 39) {
  
              LplaceG[parseInt(args[0]) - 1] = (LplaceG[parseInt(args[0]) - 1]) - 40;
  
              Checker = true;
  
            }
  
            if(Way[LplaceG[parseInt(args[0]) - 1]].toString() == yellow) {
    
              for(var l = 0; l < 4; l++) {
  
                if(LplaceY[l] == LplaceG[parseInt(args[0]) - 1]) {
  
                  placeY[l] = yellow;
                      
                  LplaceY[l] = 32;

                  StepsTilEndG[l] = 41;
  
                  msg.channel.send("AH! Yellow lost a player!")

                  break;
  
                  }
  
                }
  
              }

              else if (Way[LplaceG[parseInt(args[0]) - 1]].toString() == red) {
  
                for(var l = 0; l < 4; l++) {
    
                  if(LplaceR[l] == LplaceG[parseInt(args[0]) - 1]) {
    
                    placeR[l] = red;
                        
                    LplaceR[l] = 12;

                    StepsTilEndR[l] = 41;
    
                    msg.channel.send("AH! Red lost a player!")
  
                    break;
    
                    }
    
                  }
    
                }

                else if(Way[LplaceG[parseInt(args[0]) - 1]].toString() == black) {
  
                  for(var l = 0; l < 4; l++) {
      
                    if(LplaceB[l] == LplaceG[parseInt(args[0]) - 1]) {
      
                      placeB[l] = black;
                          
                      LplaceB[l] = 22;

                      StepsTilEndB[l] = 41;
      
                      msg.channel.send("AH! Black lost a player!")
    
                      break;
      
                      }
      
                    }
      
                  }
      
              Way[LplaceG[parseInt(args[0]) - 1]] = SafeplaceG[parseInt(args[0]) - 1];

              StepsTilEndG[parseInt(args[0] - 1)] -= diceG; 
  
              if(Checker == true) {
  
                tempG = (LplaceG[parseInt(args[0]) - 1] - diceG) + 40;
  
                Way[tempG] = "x";
  
              } else if (Checker == false) {
  
                Way[LplaceG[parseInt(args[0]) - 1] - diceG] = "x";

              }
  
              Checker = false;
  
              CounterG = 0;
  
              Embeds.error(msg.channel, `${placeY[0]} ${placeY[1]} / / ${Way[0]} ${Way[1]} ${Way[2]} / / ${placeG[0]} ${placeG[1]} \n${placeY[2]} ${placeY[3]} / / ${Way[39]} ${placesh[1]} ${Way[3]} / / ${placeG[2]} ${placeG[3]} \n/ / / / ${Way[38]} ${placesh[1]} ${Way[4]} / / / / \n/ / / / ${Way[37]} ${placesh[1]} ${Way[5]} / / / / \n${Way[32]} ${Way[33]} ${Way[34]} ${Way[35]} ${Way[36]} ${placesh[1]} ${Way[6]} ${Way[7]} ${Way[8]} ${Way[9]} ${Way[10]} \n${Way[31]} ${placesh[1]} ${placesh[1]} ${placesh[1]} ${placesh[1]} / ${placesh[1]} ${placesh[1]} ${placesh[1]} ${placesh[1]} ${Way[11]} \n${Way[30]} ${Way[29]} ${Way[28]} ${Way[27]} ${Way[26]} ${placesh[1]} ${Way[16]} ${Way[15]} ${Way[14]} ${Way[13]} ${Way[12]} \n/ / / / ${Way[25]} ${placesh[1]} ${Way[17]} / / / / \n/ / / / ${Way[24]} ${placesh[1]} ${Way[18]} / / / / \n${placeB[0]} ${placeB[1]} / / ${Way[23]} ${placesh[1]} ${Way[19]} / / ${placeR[0]} ${placeR[1]} \n${placeB[2]} ${placeB[3]} / / ${Way[22]} ${Way[21]} ${Way[20]} / / ${placeR[2]} ${placeR[3]}\nTeam Yellow: ${TeamYellow}, Team Green: ${TeamGreen}, Team Red: ${TeamRed}, Team Black: ${TeamBlack}`, "Ludo");

              if(TeamRed != null) {
      
                msg.channel.send(`Its your turn ${TeamRed}!`)
  
                Tred = true;
  
                Tgreen = false;
  
              } else if(TeamBlack != null) {
  
                msg.channel.send(`Its your turn ${TeamBlack}!`)
  
                Tblack = true;
  
                Tgreen = false;
  
              } else if(TeamYellow != null) {
  
                msg.channel.send(`Its your turn ${TeamYellow}!`)
  
                Tyellow = true;
  
                Tgreen = false;
  
              }

            }

          }

        }

          } else if (AbleToGoOn == false) {

            msg.channel.send("This player isnt available!")

          } else if (LplaceG[parseInt(args[0]) - 1] == -1) {

            msg.channel.send("This player has already finished! Use another player!")

          }

        } else {

          msg.channel.send("Your spawn is full, there are no players on the field! Use !!md (y,b,g,r)")

        }

    } else if( msg.member != TeamGreen ) {

      msg.channel.send(`Thats not your team ${msg.member}!`)

   }   

  }

function cmd_mdmb(msg, args) {

  var cont = msg.content

  var invoke = cont.split(' ')[0].substr(config.prefix.length),
            args = cont.split(' ').slice(1);

  if(Tblack == true && msg.member == TeamBlack) {

    TCount = 0;

    AbleToGoOn = false;

    for(var t = 0; t < 4; t++) {

      if(placeB[t] === black) {

        TCount += 1;

      }

    }

    if(TCount < (4 - WCounterB)) {

      for(var i = 0; i < 4; i++) {

        if(placeB[i] != black) {

          if(parseInt(args[0] - 1) == i) {

            AbleToGoOn = true;

            break;

          } 

        }

      }

      if(AbleToGoOn == true && LplaceB[parseInt(args[0]) - 1] != (-1)) {

        diceB = Math.floor(Math.random() * Math.floor(6) + 1)

        if(diceB < 1) {

        diceB = 1

        }

        msg.channel.send(`Your number: ${diceB}`)

        if(diceB === 6) {

          SixTries += 1;

          if(Way[22] == "x" || Way[22] == "y" || Way[22] == "g" || Way[22] == "r") {

            if(Way[22] == "x") {

              for(var x = 0; x < 4; x++) {

                if(placeB[x] == black) {

                  placeB[x] = "/";

                  Way[22] = SafeplaceB[x]

                  StepsTilEndB[x] -= 1;

                  break;

                }

              }

            } else if(Way[22] == "y") {

              for(var i = 0; i < 4; i++) {

                if(LplaceY[i] == 22) {

                  placeY[i] = yellow;

                  LplaceY[i] = 32;

                  StepsTilEndY[i] = 41;

                  msg.channel.send("AH! Yellow lost one player!")

                  break;

                }

              }

              for(var x = 0; x < 4; x++) {

                if(placeB[x] == black) {

                  placeB[x] = "/";

                  StepsTilEndB[x] -= 1;

                  Way[22] = SafeplaceB[x]

                  break;

                }

              }

            } else if(Way[22] == "r") {

              for(var i = 0; i < 4; i++) {

                if(LplaceR[i] == 22) {

                  placeR[i] = red;

                  LplaceR[i] = 12;

                  StepsTilEndR[i] = 41;

                  msg.channel.send("AH! Red lost one player!")

                  break;

                }

              }

              for(var x = 0; x < 4; x++) {

                if(placeB[x] == black) {

                  placeB[x] = "/";

                  Way[22] = SafeplaceB[x]

                  StepsTilEndB[x] -= 1;

                  break;

                }

              }

            } else if(Way[22] == "g") {

              for(var i = 0; i < 4; i++) {

                if(LplaceG[i] == 22) {

                  placeG[i] = green;

                  LplaceG[i] = 2;

                  StepsTilEndG[i] = 41;

                  msg.channel.send("AH! Green lost one player!")

                  break;

                }

              }

              for(var x = 0; x < 4; x++) {

                if(placeB[x] == black) {

                  placeB[x] = "/";

                  Way[22] = SafeplaceB[x]

                  StepsTilEndB[x] -= 1;

                  break;

                }

              }

            } 

            Embeds.error(msg.channel, `${placeY[0]} ${placeY[1]} / / ${Way[0]} ${Way[1]} ${Way[2]} / / ${placeG[0]} ${placeG[1]} \n${placeY[2]} ${placeY[3]} / / ${Way[39]} ${placesh[1]} ${Way[3]} / / ${placeG[2]} ${placeG[3]} \n/ / / / ${Way[38]} ${placesh[1]} ${Way[4]} / / / / \n/ / / / ${Way[37]} ${placesh[1]} ${Way[5]} / / / / \n${Way[32]} ${Way[33]} ${Way[34]} ${Way[35]} ${Way[36]} ${placesh[1]} ${Way[6]} ${Way[7]} ${Way[8]} ${Way[9]} ${Way[10]} \n${Way[31]} ${placesh[1]} ${placesh[1]} ${placesh[1]} ${placesh[1]} / ${placesh[1]} ${placesh[1]} ${placesh[1]} ${placesh[1]} ${Way[11]} \n${Way[30]} ${Way[29]} ${Way[28]} ${Way[27]} ${Way[26]} ${placesh[1]} ${Way[16]} ${Way[15]} ${Way[14]} ${Way[13]} ${Way[12]} \n/ / / / ${Way[25]} ${placesh[1]} ${Way[17]} / / / / \n/ / / / ${Way[24]} ${placesh[1]} ${Way[18]} / / / / \n${placeB[0]} ${placeB[1]} / / ${Way[23]} ${placesh[1]} ${Way[19]} / / ${placeR[0]} ${placeR[1]} \n${placeB[2]} ${placeB[3]} / / ${Way[22]} ${Way[21]} ${Way[20]} / / ${placeR[2]} ${placeR[3]}\nTeam Yellow: ${TeamYellow}, Team Green: ${TeamGreen}, Team Red: ${TeamRed}, Team Black: ${TeamBlack}`, "Ludo");

            } else if (Way[22] == black) {

            if(LplaceB[parseInt(args[0]) - 1] + diceB > 39) {

              tempSumB = (LplaceB[parseInt(args[0]) - 1] + diceB) - 40;
    
            } else {
    
              tempSumB = (LplaceB[parseInt(args[0]) - 1] + diceB);
    
            }

            if(Way[tempSumB].toString() == black) {

              msg.channel.send("Moved the next possible char!")
  
              for(var k = 0; k < 4; k++) {
  
                if(Way[LplaceB[k] + diceB] != black) {
  
                  Way[LplaceB[k]] = "x";
  
                  if ((StepsTilEndB[k] - diceB) <= 0) {
  
                    Way[LplaceB[k]] = "x";  
        
                    LplaceB[k] = -1;
        
                    WCounterB += 1;
        
                    if(WCounterB == 4) {
        
                      msg.channel.send(`You won the game, ${TeamBlack}!`)

                      Reset_Ludo();
        
                    } else if (WCounterB < 4) {
    
                      if(TeamYellow != null) {
          
                        msg.channel.send(`You are one step closer to a win! ${WCounterB}!\nIts your turn ${TeamYellow}`)
          
                        Tyellow = true;
          
                        Tblack = false;
          
                      } else if(TeamGreen != null) {
          
                        msg.channel.send(`You are one step closer to a win! ${WCounterB}!\nIts your turn ${TeamGreen}`)
          
                        Tgreen = true;
          
                        Tblack = false;
          
                      } else if(TeamRed != null) {
          
                        msg.channel.send(`You are one step closer to a win! ${WCounterB}!\nIts your turn ${TeamRed}`)
          
                        Tred = true;
          
                        Tblack = false;
          
                      }
        
                    }
  
                  } else if ((StepsTilEndB[k] - diceB) > 0) {
  
                    LplaceB[k] += diceB;
  
                    if (LplaceB[k] > 39) {
  
                      LplaceB[k] = (LplaceB[k]) - 40;
  
                      Checker = true;
  
                      }
  
                    if(Way[LplaceB[k]].toString() == yellow) {
  
                      for(var l = 0; l < 4; l++) {
  
                        if(LplaceY[l] == LplaceB[k]) {
  
                          placeY[l] = yellow;
                      
                          LplaceY[l] = 32;
  
                          StepsTilEndY[l] = 41;
  
                          msg.channel.send("AH! Yellow lost a player!")
  
                          break;
  
                          }
  
                        }
  
                      }
  
                      else if (Way[LplaceB[k]].toString() == red) {
  
                        for(var l = 0; l < 4; l++) {
    
                          if(LplaceR[l] == LplaceB[k]) {
    
                            placeR[l] = red;
                        
                            LplaceR[l] = 12;
  
                            StepsTilEndR[l] = 41;
    
                            msg.channel.send("AH! Red lost a player!")
                            
                            break;
    
                            }
    
                          }
    
                        }
  
                        else if(Way[LplaceB[k]].toString() == green) {
  
                          for(var l = 0; l < 4; l++) {
      
                            if(LplaceG[l] == LplaceB[k]) {
      
                              placeG[l] = green;
                          
                              LplaceG[l] = 2;
  
                              StepsTilEndG[l] = 41;
      
                              msg.channel.send("AH! Green lost a player!")
    
                              break;
      
                              }
      
                            }
      
                          }
      
                    Way[LplaceB[k]] = SafeplaceB[k];
  
                    StepsTilEndB[k] -= diceB; 
  
                    if(Checker == true) {
  
                      tempB = (LplaceB[k] - diceB) + 40;
  
                      Way[tempB] = "x";
  
                      } else if (Checker == false) {
  
                        Way[LplaceB[k] - diceB] = "x";
  
                      }
  
                      Checker = false;
  
                      CounterB = 0;
  
                      }
  
                  break;
  
                }
  
              }
  
              Embeds.error(msg.channel, `${placeY[0]} ${placeY[1]} / / ${Way[0]} ${Way[1]} ${Way[2]} / / ${placeG[0]} ${placeG[1]} \n${placeY[2]} ${placeY[3]} / / ${Way[39]} ${placesh[1]} ${Way[3]} / / ${placeG[2]} ${placeG[3]} \n/ / / / ${Way[38]} ${placesh[1]} ${Way[4]} / / / / \n/ / / / ${Way[37]} ${placesh[1]} ${Way[5]} / / / / \n${Way[32]} ${Way[33]} ${Way[34]} ${Way[35]} ${Way[36]} ${placesh[1]} ${Way[6]} ${Way[7]} ${Way[8]} ${Way[9]} ${Way[10]} \n${Way[31]} ${placesh[1]} ${placesh[1]} ${placesh[1]} ${placesh[1]} / ${placesh[1]} ${placesh[1]} ${placesh[1]} ${placesh[1]} ${Way[11]} \n${Way[30]} ${Way[29]} ${Way[28]} ${Way[27]} ${Way[26]} ${placesh[1]} ${Way[16]} ${Way[15]} ${Way[14]} ${Way[13]} ${Way[12]} \n/ / / / ${Way[25]} ${placesh[1]} ${Way[17]} / / / / \n/ / / / ${Way[24]} ${placesh[1]} ${Way[18]} / / / / \n${placeB[0]} ${placeB[1]} / / ${Way[23]} ${placesh[1]} ${Way[19]} / / ${placeR[0]} ${placeR[1]} \n${placeB[2]} ${placeB[3]} / / ${Way[22]} ${Way[21]} ${Way[20]} / / ${placeR[2]} ${placeR[3]}\nTeam Yellow: ${TeamYellow}, Team Green: ${TeamGreen}, Team Red: ${TeamRed}, Team Black: ${TeamBlack}`, "Ludo");

            } else if (Way[tempSumB].toString() != black) {

              if ((StepsTilEndB[parseInt(args[0]) - 1]) - diceB <= 0) {

                Way[LplaceB[parseInt(args[0]) - 1]] = "x";  
    
                LplaceB[parseInt(args[0]) - 1] = -1;
    
                WCounterB += 1;
    
                if(WCounterB == 4) {
        
                  msg.channel.send(`You won the game, ${TeamBlack}!`)

                  Reset_Ludo();
    
                } else if (WCounterB < 4) {

                  if(TeamYellow != null) {
      
                    msg.channel.send(`You are one step closer to a win! ${WCounterB}!\nIts your turn ${TeamYellow}`)
      
                    Tyellow = true;
      
                    Tblack = false;
      
                  } else if(TeamGreen != null) {
      
                    msg.channel.send(`You are one step closer to a win! ${WCounterB}!\nIts your turn ${TeamGreen}`)
      
                    Tgreen = true;
      
                    Tblack = false;
      
                  } else if(TeamRed != null) {
      
                    msg.channel.send(`You are one step closer to a win! ${WCounterB}!\nIts your turn ${TeamRed}`)
      
                    Tred = true;
      
                    Tblack = false;
      
                  }
    
                }

                Embeds.error(msg.channel, `${placeY[0]} ${placeY[1]} / / ${Way[0]} ${Way[1]} ${Way[2]} / / ${placeG[0]} ${placeG[1]} \n${placeY[2]} ${placeY[3]} / / ${Way[39]} ${placesh[1]} ${Way[3]} / / ${placeG[2]} ${placeG[3]} \n/ / / / ${Way[38]} ${placesh[1]} ${Way[4]} / / / / \n/ / / / ${Way[37]} ${placesh[1]} ${Way[5]} / / / / \n${Way[32]} ${Way[33]} ${Way[34]} ${Way[35]} ${Way[36]} ${placesh[1]} ${Way[6]} ${Way[7]} ${Way[8]} ${Way[9]} ${Way[10]} \n${Way[31]} ${placesh[1]} ${placesh[1]} ${placesh[1]} ${placesh[1]} / ${placesh[1]} ${placesh[1]} ${placesh[1]} ${placesh[1]} ${Way[11]} \n${Way[30]} ${Way[29]} ${Way[28]} ${Way[27]} ${Way[26]} ${placesh[1]} ${Way[16]} ${Way[15]} ${Way[14]} ${Way[13]} ${Way[12]} \n/ / / / ${Way[25]} ${placesh[1]} ${Way[17]} / / / / \n/ / / / ${Way[24]} ${placesh[1]} ${Way[18]} / / / / \n${placeB[0]} ${placeB[1]} / / ${Way[23]} ${placesh[1]} ${Way[19]} / / ${placeR[0]} ${placeR[1]} \n${placeB[2]} ${placeB[3]} / / ${Way[22]} ${Way[21]} ${Way[20]} / / ${placeR[2]} ${placeR[3]}\nTeam Yellow: ${TeamYellow}, Team Green: ${TeamGreen}, Team Red: ${TeamRed}, Team Black: ${TeamBlack}`, "Ludo");

                
              } else if ((StepsTilEndB[parseInt(args[0]) - 1]) - diceB > 0) {

              LplaceB[parseInt(args[0]) - 1] += diceB;
  
              if (LplaceB[parseInt(args[0]) - 1] > 39) {
    
                LplaceB[parseInt(args[0]) - 1] = (LplaceB[parseInt(args[0]) - 1]) - 40;
    
                Checker = true;
    
              }
    
              if(Way[LplaceB[parseInt(args[0]) - 1]].toString() == yellow) {
    
                for(var l = 0; l < 4; l++) {
    
                  if(LplaceY[l] == LplaceB[parseInt(args[0]) - 1]) {
    
                    placeY[l] = yellow;
                        
                    LplaceY[l] = 32;
  
                    StepsTilEndY[l] = 41;
    
                    msg.channel.send("AH! Yellow lost a player!")
  
                    break;
    
                    }
    
                  }
    
                }
  
                else if (Way[LplaceB[parseInt(args[0]) - 1]].toString() == red) {
    
                  for(var l = 0; l < 4; l++) {
      
                    if(LplaceR[l] == LplaceB[parseInt(args[0]) - 1]) {
      
                      placeR[l] = red;
                          
                      LplaceR[l] = 12;
  
                      StepsTilEndR[l] = 41;
      
                      msg.channel.send("AH! Red lost a player!")
    
                      break;
      
                      }
      
                    }
      
                  }
  
                  else if(Way[LplaceB[parseInt(args[0]) - 1]].toString() == green) {
    
                    for(var l = 0; l < 4; l++) {
        
                      if(LplaceG[l] == LplaceB[parseInt(args[0]) - 1]) {
        
                        placeG[l] = black;
                            
                        LplaceG[l] = 2;
  
                        StepsTilEndG[l] = 41;
        
                        msg.channel.send("AH! Green lost a player!")
      
                        break;
        
                        }
        
                      }
        
                    }
        
                Way[LplaceB[parseInt(args[0]) - 1]] = SafeplaceB[parseInt(args[0]) - 1];
  
                StepsTilEndB[parseInt(args[0] - 1)] -= diceB; 
    
                if(Checker == true) {
    
                  tempB = (LplaceB[parseInt(args[0]) - 1] - diceB) + 40;
    
                  Way[tempB] = "x";
    
                } else if (Checker == false) {
    
                  Way[LplaceB[parseInt(args[0]) - 1] - diceB] = "x";
  
                }
    
                Checker = false;
    
                CounterB = 0;
    
                Embeds.error(msg.channel, `${placeY[0]} ${placeY[1]} / / ${Way[0]} ${Way[1]} ${Way[2]} / / ${placeG[0]} ${placeG[1]} \n${placeY[2]} ${placeY[3]} / / ${Way[39]} ${placesh[1]} ${Way[3]} / / ${placeG[2]} ${placeG[3]} \n/ / / / ${Way[38]} ${placesh[1]} ${Way[4]} / / / / \n/ / / / ${Way[37]} ${placesh[1]} ${Way[5]} / / / / \n${Way[32]} ${Way[33]} ${Way[34]} ${Way[35]} ${Way[36]} ${placesh[1]} ${Way[6]} ${Way[7]} ${Way[8]} ${Way[9]} ${Way[10]} \n${Way[31]} ${placesh[1]} ${placesh[1]} ${placesh[1]} ${placesh[1]} / ${placesh[1]} ${placesh[1]} ${placesh[1]} ${placesh[1]} ${Way[11]} \n${Way[30]} ${Way[29]} ${Way[28]} ${Way[27]} ${Way[26]} ${placesh[1]} ${Way[16]} ${Way[15]} ${Way[14]} ${Way[13]} ${Way[12]} \n/ / / / ${Way[25]} ${placesh[1]} ${Way[17]} / / / / \n/ / / / ${Way[24]} ${placesh[1]} ${Way[18]} / / / / \n${placeB[0]} ${placeB[1]} / / ${Way[23]} ${placesh[1]} ${Way[19]} / / ${placeR[0]} ${placeR[1]} \n${placeB[2]} ${placeB[3]} / / ${Way[22]} ${Way[21]} ${Way[20]} / / ${placeR[2]} ${placeR[3]}\nTeam Yellow: ${TeamYellow}, Team Green: ${TeamGreen}, Team Red: ${TeamRed}, Team Black: ${TeamBlack}`, "Ludo");

              }
  
            }

          }

          msg.channel.send("Your number is 6! You can roll the dice again!")

          SixTries -= 1;

        } else if (diceB < 6 && SixTries === 0) {

          if(LplaceB[parseInt(args[0]) - 1] + diceB > 39) {

            tempSumB = (LplaceB[parseInt(args[0]) - 1] + diceB) - 40;
  
          } else {
  
            tempSumB = (LplaceB[parseInt(args[0]) - 1] + diceB);
  
          }

          if(Way[tempSumB].toString() == black) {

            msg.channel.send("Moved the next possible char!")

            for(var k = 0; k < 4; k++) {

              if(Way[LplaceB[k] + diceB] != black) {

                Way[LplaceB[k]] = "x";

                if ((StepsTilEndB[k] - diceB) <= 0) {

                  Way[LplaceB[k]] = "x";  
      
                  LplaceB[k] = -1;
      
                  WCounterB += 1;
      
                  if(WCounterB == 4) {
      
                    msg.channel.send(`You won the game, ${TeamBlack}!`)

                    Reset_Ludo();
      
                  } else if (WCounterB < 4) {
  
                    if(TeamYellow != null) {
        
                      msg.channel.send(`You are one step closer to a win! ${WCounterB}!\nIts your turn ${TeamYellow}`)
        
                      Tyellow = true;
        
                      Tblack = false;
        
                    } else if(TeamGreen != null) {
        
                      msg.channel.send(`You are one step closer to a win! ${WCounterB}!\nIts your turn ${TeamGreen}`)
        
                      Tgreen = true;
        
                      Tblack = false;
        
                    } else if(TeamRed != null) {
        
                      msg.channel.send(`You are one step closer to a win! ${WCounterB}!\nIts your turn ${TeamRed}`)
        
                      Tred = true;
        
                      Tblack = false;
        
                    }
      
                  }

                } else if ((StepsTilEndB[k] - diceB) > 0) {

                  LplaceB[k] += diceB;

                  if (LplaceB[k] > 39) {

                    LplaceB[k] = (LplaceB[k]) - 40;

                    Checker = true;

                    }

                  if(Way[LplaceB[k]].toString() == yellow) {

                    for(var l = 0; l < 4; l++) {

                      if(LplaceY[l] == LplaceB[k]) {

                        placeY[l] = yellow;
                    
                        LplaceY[l] = 32;

                        StepsTilEndY[l] = 41;

                        msg.channel.send("AH! Yellow lost a player!")

                        break;

                        }

                      }

                    }

                    else if (Way[LplaceB[k]].toString() == red) {

                      for(var l = 0; l < 4; l++) {
  
                        if(LplaceR[l] == LplaceB[k]) {
  
                          placeR[l] = red;
                      
                          LplaceR[l] = 12;

                          StepsTilEndR[l] = 41;
  
                          msg.channel.send("AH! Red lost a player!")
                          
                          break;
  
                          }
  
                        }
  
                      }

                      else if(Way[LplaceB[k]].toString() == green) {

                        for(var l = 0; l < 4; l++) {
    
                          if(LplaceG[l] == LplaceB[k]) {
    
                            placeG[l] = green;
                        
                            LplaceG[l] = 2;

                            StepsTilEndG[l] = 41;
    
                            msg.channel.send("AH! Green lost a player!")
  
                            break;
    
                            }
    
                          }
    
                        }
    
                  Way[LplaceB[k]] = SafeplaceB[k];

                  StepsTilEndB[k] -= diceB; 

                  if(Checker == true) {

                    tempB = (LplaceB[k] - diceB) + 40;

                    Way[tempB] = "x";

                    } else if (Checker == false) {

                      Way[LplaceB[k] - diceB] = "x";

                    }

                    Checker = false;

                    CounterB = 0;

                    }

                break;

              }

            }

            Embeds.error(msg.channel, `${placeY[0]} ${placeY[1]} / / ${Way[0]} ${Way[1]} ${Way[2]} / / ${placeG[0]} ${placeG[1]} \n${placeY[2]} ${placeY[3]} / / ${Way[39]} ${placesh[1]} ${Way[3]} / / ${placeG[2]} ${placeG[3]} \n/ / / / ${Way[38]} ${placesh[1]} ${Way[4]} / / / / \n/ / / / ${Way[37]} ${placesh[1]} ${Way[5]} / / / / \n${Way[32]} ${Way[33]} ${Way[34]} ${Way[35]} ${Way[36]} ${placesh[1]} ${Way[6]} ${Way[7]} ${Way[8]} ${Way[9]} ${Way[10]} \n${Way[31]} ${placesh[1]} ${placesh[1]} ${placesh[1]} ${placesh[1]} / ${placesh[1]} ${placesh[1]} ${placesh[1]} ${placesh[1]} ${Way[11]} \n${Way[30]} ${Way[29]} ${Way[28]} ${Way[27]} ${Way[26]} ${placesh[1]} ${Way[16]} ${Way[15]} ${Way[14]} ${Way[13]} ${Way[12]} \n/ / / / ${Way[25]} ${placesh[1]} ${Way[17]} / / / / \n/ / / / ${Way[24]} ${placesh[1]} ${Way[18]} / / / / \n${placeB[0]} ${placeB[1]} / / ${Way[23]} ${placesh[1]} ${Way[19]} / / ${placeR[0]} ${placeR[1]} \n${placeB[2]} ${placeB[3]} / / ${Way[22]} ${Way[21]} ${Way[20]} / / ${placeR[2]} ${placeR[3]}\nTeam Yellow: ${TeamYellow}, Team Green: ${TeamGreen}, Team Red: ${TeamRed}, Team Black: ${TeamBlack}`, "Ludo");

            if(TeamYellow != null) {

              msg.channel.send(`Its your turn ${TeamYellow}!`)

              Tyellow = true;

              Tblack = false;

            } else if(TeamGreen != null) {

              msg.channel.send(`Its your turn ${TeamGreen}!`)
  
              Tgreen = true;
  
              Tblack = false;
  
            } else if (TeamRed != null) {
      
              msg.channel.send(`Its your turn ${TeamRed}!`)

              Tred = true;

              Tblack = false;

            } 

          } else if (Way[tempSumB].toString() != black) {

            if ((StepsTilEndB[parseInt(args[0]) - 1]) - diceB <= 0) {

              Way[LplaceB[parseInt(args[0]) - 1]] = "x";  
  
              LplaceB[parseInt(args[0]) - 1] = -1;
  
              WCounterB += 1;
  
              if(WCounterB == 4) {
      
                msg.channel.send(`You won the game, ${TeamBlack}!`)

                Reset_Ludo();
  
              } else if (WCounterB < 4) {

                if(TeamYellow != null) {
    
                  msg.channel.send(`You are one step closer to a win! ${WCounterB}!\nIts your turn ${TeamYellow}`)
    
                  Tyellow = true;
    
                  Tblack = false;
    
                } else if(TeamGreen != null) {
    
                  msg.channel.send(`You are one step closer to a win! ${WCounterB}!\nIts your turn ${TeamGreen}`)
    
                  Tgreen = true;
    
                  Tblack = false;
    
                } else if(TeamRed != null) {
    
                  msg.channel.send(`You are one step closer to a win! ${WCounterB}!\nIts your turn ${TeamRed}`)
    
                  Tred = true;
    
                  Tblack = false;
    
                }
  
              }

              Embeds.error(msg.channel, `${placeY[0]} ${placeY[1]} / / ${Way[0]} ${Way[1]} ${Way[2]} / / ${placeG[0]} ${placeG[1]} \n${placeY[2]} ${placeY[3]} / / ${Way[39]} ${placesh[1]} ${Way[3]} / / ${placeG[2]} ${placeG[3]} \n/ / / / ${Way[38]} ${placesh[1]} ${Way[4]} / / / / \n/ / / / ${Way[37]} ${placesh[1]} ${Way[5]} / / / / \n${Way[32]} ${Way[33]} ${Way[34]} ${Way[35]} ${Way[36]} ${placesh[1]} ${Way[6]} ${Way[7]} ${Way[8]} ${Way[9]} ${Way[10]} \n${Way[31]} ${placesh[1]} ${placesh[1]} ${placesh[1]} ${placesh[1]} / ${placesh[1]} ${placesh[1]} ${placesh[1]} ${placesh[1]} ${Way[11]} \n${Way[30]} ${Way[29]} ${Way[28]} ${Way[27]} ${Way[26]} ${placesh[1]} ${Way[16]} ${Way[15]} ${Way[14]} ${Way[13]} ${Way[12]} \n/ / / / ${Way[25]} ${placesh[1]} ${Way[17]} / / / / \n/ / / / ${Way[24]} ${placesh[1]} ${Way[18]} / / / / \n${placeB[0]} ${placeB[1]} / / ${Way[23]} ${placesh[1]} ${Way[19]} / / ${placeR[0]} ${placeR[1]} \n${placeB[2]} ${placeB[3]} / / ${Way[22]} ${Way[21]} ${Way[20]} / / ${placeR[2]} ${placeR[3]}\nTeam Yellow: ${TeamYellow}, Team Green: ${TeamGreen}, Team Red: ${TeamRed}, Team Black: ${TeamBlack}`, "Ludo");

              
            } else if ((StepsTilEndB[parseInt(args[0]) - 1]) - diceB > 0) {

            LplaceB[parseInt(args[0]) - 1] += diceB;

            if (LplaceB[parseInt(args[0]) - 1] > 39) {
  
              LplaceB[parseInt(args[0]) - 1] = (LplaceB[parseInt(args[0]) - 1]) - 40;
  
              Checker = true;
  
            }
  
            if(Way[LplaceB[parseInt(args[0]) - 1]].toString() == yellow) {
  
              for(var l = 0; l < 4; l++) {
  
                if(LplaceY[l] == LplaceB[parseInt(args[0]) - 1]) {
  
                  placeY[l] = yellow;
                      
                  LplaceY[l] = 32;

                  StepsTilEndG[l] = 41;
  
                  msg.channel.send("AH! Yellow lost a player!")

                  break;
  
                  }
  
                }
  
              }

              else if (Way[LplaceB[parseInt(args[0]) - 1]].toString() == red) {
  
                for(var l = 0; l < 4; l++) {
    
                  if(LplaceR[l] == LplaceB[parseInt(args[0]) - 1]) {
    
                    placeR[l] = red;
                        
                    LplaceR[l] = 12;

                    StepsTilEndR[l] = 41;
    
                    msg.channel.send("AH! Red lost a player!")
  
                    break;
    
                    }
    
                  }
    
                }

                else if(Way[LplaceB[parseInt(args[0]) - 1]].toString() == green) {
  
                  for(var l = 0; l < 4; l++) {
      
                    if(LplaceG[l] == LplaceB[parseInt(args[0]) - 1]) {
      
                      placeG[l] = black;
                          
                      LplaceG[l] = 2;

                      StepsTilEndG[l] = 41;
      
                      msg.channel.send("AH! Green lost a player!")
    
                      break;
      
                      }
      
                    }
      
                  }
      
              Way[LplaceB[parseInt(args[0]) - 1]] = SafeplaceB[parseInt(args[0]) - 1];

              StepsTilEndB[parseInt(args[0] - 1)] -= diceB; 
  
              if(Checker == true) {
  
                tempB = (LplaceB[parseInt(args[0]) - 1] - diceB) + 40;
  
                Way[tempB] = "x";
  
              } else if (Checker == false) {
  
                Way[LplaceB[parseInt(args[0]) - 1] - diceB] = "x";

              }
  
              Checker = false;
  
              CounterB = 0;
  
              Embeds.error(msg.channel, `${placeY[0]} ${placeY[1]} / / ${Way[0]} ${Way[1]} ${Way[2]} / / ${placeG[0]} ${placeG[1]} \n${placeY[2]} ${placeY[3]} / / ${Way[39]} ${placesh[1]} ${Way[3]} / / ${placeG[2]} ${placeG[3]} \n/ / / / ${Way[38]} ${placesh[1]} ${Way[4]} / / / / \n/ / / / ${Way[37]} ${placesh[1]} ${Way[5]} / / / / \n${Way[32]} ${Way[33]} ${Way[34]} ${Way[35]} ${Way[36]} ${placesh[1]} ${Way[6]} ${Way[7]} ${Way[8]} ${Way[9]} ${Way[10]} \n${Way[31]} ${placesh[1]} ${placesh[1]} ${placesh[1]} ${placesh[1]} / ${placesh[1]} ${placesh[1]} ${placesh[1]} ${placesh[1]} ${Way[11]} \n${Way[30]} ${Way[29]} ${Way[28]} ${Way[27]} ${Way[26]} ${placesh[1]} ${Way[16]} ${Way[15]} ${Way[14]} ${Way[13]} ${Way[12]} \n/ / / / ${Way[25]} ${placesh[1]} ${Way[17]} / / / / \n/ / / / ${Way[24]} ${placesh[1]} ${Way[18]} / / / / \n${placeB[0]} ${placeB[1]} / / ${Way[23]} ${placesh[1]} ${Way[19]} / / ${placeR[0]} ${placeR[1]} \n${placeB[2]} ${placeB[3]} / / ${Way[22]} ${Way[21]} ${Way[20]} / / ${placeR[2]} ${placeR[3]}\nTeam Yellow: ${TeamYellow}, Team Green: ${TeamGreen}, Team Red: ${TeamRed}, Team Black: ${TeamBlack}`, "Ludo");

              if(TeamYellow != null) {

                msg.channel.send(`Its your turn ${TeamYellow}!`)
  
                Tyellow = true;
  
                Tblack = false;
  
              } else if(TeamGreen != null) {
  
                msg.channel.send(`Its your turn ${TeamGreen}!`)
    
                Tgreen = true;
    
                Tblack = false;
    
              } else if (TeamRed != null) {
        
                msg.channel.send(`Its your turn ${TeamRed}!`)
  
                Tred = true;
  
                Tblack = false;
  
              } 

            }

          }

        }

          } else if (AbleToGoOn == false) {

            msg.channel.send("This player isnt available!")

          } else if (LplaceG[parseInt(args[0]) - 1] == -1) {

            msg.channel.send("This player has already finished! Use another player!")

          }

        } else {

          msg.channel.send("Your spawn is full, there are no players on the field! Use !!md (y,b,g,r)")

        }

    } else if( msg.member != TeamGreen ) {

      msg.channel.send(`Thats not your team ${msg.member}!`)

   }   

}

function cmd_mdmr(msg, args) {

  var cont = msg.content

  var invoke = cont.split(' ')[0].substr(config.prefix.length),
            args = cont.split(' ').slice(1);

  if(Tred == true && msg.member == TeamRed) {

    TCount = 0;

    AbleToGoOn = false;

    for(var t = 0; t < 4; t++) {

      if(placeR[t] === red) {

        TCount += 1;

      }

    }

    if(TCount < (4 - WCounterR)) {

      for(var i = 0; i < 4; i++) {

        if(placeR[i] != red) {

          if(parseInt(args[0] - 1) == i) {

            AbleToGoOn = true;

            break;

          } 

        }

      }

      if(AbleToGoOn == true && LplaceR[parseInt(args[0]) - 1] != (-1)) {

        diceR = Math.floor(Math.random() * Math.floor(6) + 1)

        if(diceR < 1) {

        diceR = 1

        }

        msg.channel.send(`Your number: ${diceR}`)

        if(diceR === 6) {

          SixTries += 1;

          if(Way[12] == "x" || Way[12] == "y" || Way[12] == "g" || Way[12] == "b") {

            if(Way[12] == "x") {

              for(var x = 0; x < 4; x++) {

                if(placeR[x] == red) {

                  placeR[x] = "/";

                  Way[12] = SafeplaceR[x]

                  StepsTilEndR[x] -= 1;

                  break;

                }

              }

            } else if(Way[12] == "y") {

              for(var i = 0; i < 4; i++) {

                if(LplaceY[i] == 12) {

                  placeY[i] = yellow;

                  LplaceY[i] = 32;

                  StepsTilEndY[i] = 41;

                  msg.channel.send("AH! Yellow lost one player!")

                  break;

                }

              }

              for(var x = 0; x < 4; x++) {

                if(placeR[x] == red) {

                  placeR[x] = "/";

                  Way[12] = SafeplaceR[x]

                  StepsTilEndR[x] -= 1;

                  break;

                }

              }

            } else if(Way[22] == "b") {

              for(var i = 0; i < 4; i++) {

                if(LplaceB[i] == 12) {

                  placeB[i] = black;

                  LplaceB[i] = 22;

                  StepsTilEndB[i] = 41;

                  msg.channel.send("AH! Red lost one player!")

                  break;

                }

              }

              for(var x = 0; x < 4; x++) {

                if(placeR[x] == red) {

                  placeR[x] = "/";

                  Way[12] = SafeplaceR[x]

                  StepsTilEndR[x] -= 1;

                  break;

                }

              }

            } else if(Way[22] == "g") {

              for(var i = 0; i < 4; i++) {

                if(LplaceG[i] == 12) {

                  placeG[i] = green;

                  LplaceG[i] = 2;

                  StepsTilEndG[i] = 41;

                  msg.channel.send("AH! Green lost one player!")

                  break;

                }

              }

              for(var x = 0; x < 4; x++) {

                if(placeR[x] == red) {

                  placeR[x] = "/";

                  Way[12] = SafeplaceR[x]

                  StepsTilEndR[x] -= 1;

                  break;

                }

              }

            } 

            Embeds.error(msg.channel, `${placeY[0]} ${placeY[1]} / / ${Way[0]} ${Way[1]} ${Way[2]} / / ${placeG[0]} ${placeG[1]} \n${placeY[2]} ${placeY[3]} / / ${Way[39]} ${placesh[1]} ${Way[3]} / / ${placeG[2]} ${placeG[3]} \n/ / / / ${Way[38]} ${placesh[1]} ${Way[4]} / / / / \n/ / / / ${Way[37]} ${placesh[1]} ${Way[5]} / / / / \n${Way[32]} ${Way[33]} ${Way[34]} ${Way[35]} ${Way[36]} ${placesh[1]} ${Way[6]} ${Way[7]} ${Way[8]} ${Way[9]} ${Way[10]} \n${Way[31]} ${placesh[1]} ${placesh[1]} ${placesh[1]} ${placesh[1]} / ${placesh[1]} ${placesh[1]} ${placesh[1]} ${placesh[1]} ${Way[11]} \n${Way[30]} ${Way[29]} ${Way[28]} ${Way[27]} ${Way[26]} ${placesh[1]} ${Way[16]} ${Way[15]} ${Way[14]} ${Way[13]} ${Way[12]} \n/ / / / ${Way[25]} ${placesh[1]} ${Way[17]} / / / / \n/ / / / ${Way[24]} ${placesh[1]} ${Way[18]} / / / / \n${placeB[0]} ${placeB[1]} / / ${Way[23]} ${placesh[1]} ${Way[19]} / / ${placeR[0]} ${placeR[1]} \n${placeB[2]} ${placeB[3]} / / ${Way[22]} ${Way[21]} ${Way[20]} / / ${placeR[2]} ${placeR[3]}\nTeam Yellow: ${TeamYellow}, Team Green: ${TeamGreen}, Team Red: ${TeamRed}, Team Black: ${TeamBlack}`, "Ludo");

            } else if (Way[12] == red) {

            if(LplaceR[parseInt(args[0]) - 1] + diceR > 39) {

              tempSumR = (LplaceR[parseInt(args[0]) - 1] + diceR) - 40;
    
            } else {
    
              tempSumR = (LplaceR[parseInt(args[0]) - 1] + diceR);
    
            }

            if(Way[tempSumR].toString() == red) {

              msg.channel.send("Moved the next possible char!")
  
              for(var k = 0; k < 4; k++) {
  
                if(Way[LplaceR[k] + diceR] != red) {
  
                  Way[LplaceR[k]] = "x";
  
                  if ((StepsTilEndR[k] - diceR) <= 0) {
  
                    Way[LplaceR[k]] = "x";  
        
                    LplaceR[k] = -1;
        
                    WCounterR += 1;
        
                    if(WCounterR == 4) {
        
                      msg.channel.send(`You won the game, ${TeamRed}!`)

                      Reset_Ludo();
        
                    } else if (WCounterR < 4) {
    
                      if(TeamBlack != null) {
          
                        msg.channel.send(`You are one step closer to a win! ${WCounterR}!\nIts your turn ${TeamBlack}`)
          
                        Tblack = true;
          
                        Tred = false;
          
                      } else if(TeamYellow != null) {
          
                        msg.channel.send(`You are one step closer to a win! ${WCounterR}!\nIts your turn ${TeamYellow}`)
          
                        Tyellow = true;
          
                        Tred = false;
          
                      } else if(TeamGreen != null) {
          
                        msg.channel.send(`You are one step closer to a win! ${WCounterR}!\nIts your turn ${TeamGreen}`)
          
                        Tgreen = true;
          
                        Tred = false;
          
                      }
        
                    }
  
                  } else if ((StepsTilEndR[k] - diceR) > 0) {
  
                    LplaceR[k] += diceR;
  
                    if (LplaceR[k] > 39) {
  
                      LplaceR[k] = (LplaceR[k]) - 40;
  
                      Checker = true;
  
                      }
  
                    if(Way[LplaceR[k]].toString() == yellow) {
  
                      for(var l = 0; l < 4; l++) {
  
                        if(LplaceY[l] == LplaceR[k]) {
  
                          placeY[l] = yellow;
                      
                          LplaceY[l] = 32;
  
                          StepsTilEndY[l] = 41;
  
                          msg.channel.send("AH! Yellow lost a player!")
  
                          break;
  
                          }
  
                        }
  
                      }
  
                      else if (Way[LplaceR[k]].toString() == black) {
  
                        for(var l = 0; l < 4; l++) {
    
                          if(LplaceB[l] == LplaceR[k]) {
    
                            placeB[l] = black;
                        
                            LplaceB[l] = 22;
  
                            StepsTilEndB[l] = 41;
    
                            msg.channel.send("AH! Black lost a player!")
                            
                            break;
    
                            }
    
                          }
    
                        }
  
                        else if(Way[LplaceR[k]].toString() == green) {
  
                          for(var l = 0; l < 4; l++) {
      
                            if(LplaceG[l] == LplaceR[k]) {
      
                              placeG[l] = green;
                          
                              LplaceG[l] = 2;
  
                              StepsTilEndG[l] = 41;
      
                              msg.channel.send("AH! Green lost a player!")
    
                              break;
      
                              }
      
                            }
      
                          }
      
                    Way[LplaceR[k]] = SafeplaceR[k];
  
                    StepsTilEndR[k] -= diceR; 
  
                    if(Checker == true) {
  
                      tempR = (LplaceR[k] - diceR) + 40;
  
                      Way[tempR] = "x";
  
                      } else if (Checker == false) {
  
                        Way[LplaceR[k] - diceR] = "x";
  
                      }
  
                      Checker = false;
  
                      CounterR = 0;
  
                      }
  
                  break;
  
                }
  
              }
  
              Embeds.error(msg.channel, `${placeY[0]} ${placeY[1]} / / ${Way[0]} ${Way[1]} ${Way[2]} / / ${placeG[0]} ${placeG[1]} \n${placeY[2]} ${placeY[3]} / / ${Way[39]} ${placesh[1]} ${Way[3]} / / ${placeG[2]} ${placeG[3]} \n/ / / / ${Way[38]} ${placesh[1]} ${Way[4]} / / / / \n/ / / / ${Way[37]} ${placesh[1]} ${Way[5]} / / / / \n${Way[32]} ${Way[33]} ${Way[34]} ${Way[35]} ${Way[36]} ${placesh[1]} ${Way[6]} ${Way[7]} ${Way[8]} ${Way[9]} ${Way[10]} \n${Way[31]} ${placesh[1]} ${placesh[1]} ${placesh[1]} ${placesh[1]} / ${placesh[1]} ${placesh[1]} ${placesh[1]} ${placesh[1]} ${Way[11]} \n${Way[30]} ${Way[29]} ${Way[28]} ${Way[27]} ${Way[26]} ${placesh[1]} ${Way[16]} ${Way[15]} ${Way[14]} ${Way[13]} ${Way[12]} \n/ / / / ${Way[25]} ${placesh[1]} ${Way[17]} / / / / \n/ / / / ${Way[24]} ${placesh[1]} ${Way[18]} / / / / \n${placeB[0]} ${placeB[1]} / / ${Way[23]} ${placesh[1]} ${Way[19]} / / ${placeR[0]} ${placeR[1]} \n${placeB[2]} ${placeB[3]} / / ${Way[22]} ${Way[21]} ${Way[20]} / / ${placeR[2]} ${placeR[3]}\nTeam Yellow: ${TeamYellow}, Team Green: ${TeamGreen}, Team Red: ${TeamRed}, Team Black: ${TeamBlack}`, "Ludo");

            } else if (Way[tempSumR].toString() != red) {

              if ((StepsTilEndR[parseInt(args[0]) - 1]) - diceR <= 0) {

                Way[LplaceR[parseInt(args[0]) - 1]] = "x";  
    
                LplaceR[parseInt(args[0]) - 1] = -1;
    
                WCounterR += 1;
    
                if(WCounterR == 4) {
        
                  msg.channel.send(`You won the game, ${TeamRed}!`)

                  Reset_Ludo();
    
                } else if (WCounterR < 4) {

                  if(TeamBlack != null) {
          
                    msg.channel.send(`You are one step closer to a win! ${WCounterR}!\nIts your turn ${TeamBlack}`)
      
                    Tblack = true;
      
                    Tred = false;
      
                  } else if(TeamYellow != null) {
      
                    msg.channel.send(`You are one step closer to a win! ${WCounterR}!\nIts your turn ${TeamYellow}`)
      
                    Tyellow = true;
      
                    Tred = false;
      
                  } else if(TeamGreen != null) {
      
                    msg.channel.send(`You are one step closer to a win! ${WCounterR}!\nIts your turn ${TeamGreen}`)
      
                    Tgreen = true;
      
                    Tred = false;
      
                  }
    
                }

                Embeds.error(msg.channel, `${placeY[0]} ${placeY[1]} / / ${Way[0]} ${Way[1]} ${Way[2]} / / ${placeG[0]} ${placeG[1]} \n${placeY[2]} ${placeY[3]} / / ${Way[39]} ${placesh[1]} ${Way[3]} / / ${placeG[2]} ${placeG[3]} \n/ / / / ${Way[38]} ${placesh[1]} ${Way[4]} / / / / \n/ / / / ${Way[37]} ${placesh[1]} ${Way[5]} / / / / \n${Way[32]} ${Way[33]} ${Way[34]} ${Way[35]} ${Way[36]} ${placesh[1]} ${Way[6]} ${Way[7]} ${Way[8]} ${Way[9]} ${Way[10]} \n${Way[31]} ${placesh[1]} ${placesh[1]} ${placesh[1]} ${placesh[1]} / ${placesh[1]} ${placesh[1]} ${placesh[1]} ${placesh[1]} ${Way[11]} \n${Way[30]} ${Way[29]} ${Way[28]} ${Way[27]} ${Way[26]} ${placesh[1]} ${Way[16]} ${Way[15]} ${Way[14]} ${Way[13]} ${Way[12]} \n/ / / / ${Way[25]} ${placesh[1]} ${Way[17]} / / / / \n/ / / / ${Way[24]} ${placesh[1]} ${Way[18]} / / / / \n${placeB[0]} ${placeB[1]} / / ${Way[23]} ${placesh[1]} ${Way[19]} / / ${placeR[0]} ${placeR[1]} \n${placeB[2]} ${placeB[3]} / / ${Way[22]} ${Way[21]} ${Way[20]} / / ${placeR[2]} ${placeR[3]}\nTeam Yellow: ${TeamYellow}, Team Green: ${TeamGreen}, Team Red: ${TeamRed}, Team Black: ${TeamBlack}`, "Ludo");

                
              } else if ((StepsTilEndR[parseInt(args[0]) - 1]) - diceR > 0) {

              LplaceR[parseInt(args[0]) - 1] += diceR;
  
              if (LplaceR[parseInt(args[0]) - 1] > 39) {
    
                LplaceR[parseInt(args[0]) - 1] = (LplaceR[parseInt(args[0]) - 1]) - 40;
    
                Checker = true;
    
              }
    
              if(Way[LplaceR[parseInt(args[0]) - 1]].toString() == yellow) {
    
                for(var l = 0; l < 4; l++) {
    
                  if(LplaceY[l] == LplaceR[parseInt(args[0]) - 1]) {
    
                    placeY[l] = yellow;
                        
                    LplaceY[l] = 32;
  
                    StepsTilEndY[l] = 41;
    
                    msg.channel.send("AH! Yellow lost a player!")
  
                    break;
    
                    }
    
                  }
    
                }
  
                else if (Way[LplaceR[parseInt(args[0]) - 1]].toString() == black) {
    
                  for(var l = 0; l < 4; l++) {
      
                    if(LplaceB[l] == LplaceR[parseInt(args[0]) - 1]) {
      
                      placeB[l] = black;
                          
                      LplaceB[l] = 22;
  
                      StepsTilEndB[l] = 41;
      
                      msg.channel.send("AH! Black lost a player!")
    
                      break;
      
                      }
      
                    }
      
                  }
  
                  else if(Way[LplaceR[parseInt(args[0]) - 1]].toString() == green) {
    
                    for(var l = 0; l < 4; l++) {
        
                      if(LplaceG[l] == LplaceR[parseInt(args[0]) - 1]) {
        
                        placeG[l] = black;
                            
                        LplaceG[l] = 2;
  
                        StepsTilEndG[l] = 41;
        
                        msg.channel.send("AH! Green lost a player!")
      
                        break;
        
                        }
        
                      }
        
                    }
        
                Way[LplaceR[parseInt(args[0]) - 1]] = SafeplaceR[parseInt(args[0]) - 1];
  
                StepsTilEndR[parseInt(args[0] - 1)] -= diceR; 
    
                if(Checker == true) {
    
                  tempR = (LplaceR[parseInt(args[0]) - 1] - diceR) + 40;
    
                  Way[tempR] = "x";
    
                } else if (Checker == false) {
    
                  Way[LplaceR[parseInt(args[0]) - 1] - diceR] = "x";
  
                }
    
                Checker = false;
    
                CounterR = 0;
    
                Embeds.error(msg.channel, `${placeY[0]} ${placeY[1]} / / ${Way[0]} ${Way[1]} ${Way[2]} / / ${placeG[0]} ${placeG[1]} \n${placeY[2]} ${placeY[3]} / / ${Way[39]} ${placesh[1]} ${Way[3]} / / ${placeG[2]} ${placeG[3]} \n/ / / / ${Way[38]} ${placesh[1]} ${Way[4]} / / / / \n/ / / / ${Way[37]} ${placesh[1]} ${Way[5]} / / / / \n${Way[32]} ${Way[33]} ${Way[34]} ${Way[35]} ${Way[36]} ${placesh[1]} ${Way[6]} ${Way[7]} ${Way[8]} ${Way[9]} ${Way[10]} \n${Way[31]} ${placesh[1]} ${placesh[1]} ${placesh[1]} ${placesh[1]} / ${placesh[1]} ${placesh[1]} ${placesh[1]} ${placesh[1]} ${Way[11]} \n${Way[30]} ${Way[29]} ${Way[28]} ${Way[27]} ${Way[26]} ${placesh[1]} ${Way[16]} ${Way[15]} ${Way[14]} ${Way[13]} ${Way[12]} \n/ / / / ${Way[25]} ${placesh[1]} ${Way[17]} / / / / \n/ / / / ${Way[24]} ${placesh[1]} ${Way[18]} / / / / \n${placeB[0]} ${placeB[1]} / / ${Way[23]} ${placesh[1]} ${Way[19]} / / ${placeR[0]} ${placeR[1]} \n${placeB[2]} ${placeB[3]} / / ${Way[22]} ${Way[21]} ${Way[20]} / / ${placeR[2]} ${placeR[3]}\nTeam Yellow: ${TeamYellow}, Team Green: ${TeamGreen}, Team Red: ${TeamRed}, Team Black: ${TeamBlack}`, "Ludo");

              }
  
            }

          }

          msg.channel.send("Your number is 6! You can roll the dice again!")

          SixTries -= 1;

        } else if (diceB < 6 && SixTries === 0) {

          if(LplaceR[parseInt(args[0]) - 1] + diceR > 39) {

            tempSumR = (LplaceR[parseInt(args[0]) - 1] + diceR) - 40;
  
          } else {
  
            tempSumR = (LplaceR[parseInt(args[0]) - 1] + diceR);
  
          }

          if(Way[tempSumR].toString() == red) {

            msg.channel.send("Moved the next possible char!")

            for(var k = 0; k < 4; k++) {

              if(Way[LplaceR[k] + diceR] != red) {

                Way[LplaceR[k]] = "x";

                if ((StepsTilEndR[k] - diceR) <= 0) {

                  Way[LplaceR[k]] = "x";  
      
                  LplaceR[k] = -1;
      
                  WCounterR += 1;
      
                  if(WCounterR == 4) {
      
                    msg.channel.send(`You won the game, ${TeamRed}!`)

                    Reset_Ludo();
      
                  } else if (WCounterR < 4) {
  
                    if(TeamBlack != null) {
        
                      msg.channel.send(`You are one step closer to a win! ${WCounterR}!\nIts your turn ${TeamBlack}`)
        
                      Tblack = true;
        
                      Tred = false;
        
                    } else if(TeamYellow != null) {
        
                      msg.channel.send(`You are one step closer to a win! ${WCounterR}!\nIts your turn ${TeamYellow}`)
        
                      Tyellow = true;
        
                      Tred = false;
        
                    } else if(TeamGreen != null) {
        
                      msg.channel.send(`You are one step closer to a win! ${WCounterR}!\nIts your turn ${TeamGreen}`)
        
                      Tgreen = true;
        
                      Tred = false;
        
                    }
      
                  }

                } else if ((StepsTilEndR[k] - diceR) > 0) {

                  LplaceR[k] += diceR;

                  if (LplaceR[k] > 39) {

                    LplaceR[k] = (LplaceR[k]) - 40;

                    Checker = true;

                    }

                  if(Way[LplaceR[k]].toString() == yellow) {

                    for(var l = 0; l < 4; l++) {

                      if(LplaceY[l] == LplaceR[k]) {

                        placeY[l] = yellow;
                    
                        LplaceY[l] = 32;

                        StepsTilEndY[l] = 41;

                        msg.channel.send("AH! Yellow lost a player!")

                        break;

                        }

                      }

                    }

                    else if (Way[LplaceR[k]].toString() == black) {

                      for(var l = 0; l < 4; l++) {
  
                        if(LplaceB[l] == LplaceR[k]) {
  
                          placeB[l] = black;
                      
                          LplaceB[l] = 22;

                          StepsTilEndB[l] = 41;
  
                          msg.channel.send("AH! Black lost a player!")
                          
                          break;
  
                          }
  
                        }
  
                      }

                      else if(Way[LplaceR[k]].toString() == green) {

                        for(var l = 0; l < 4; l++) {
    
                          if(LplaceG[l] == LplaceR[k]) {
    
                            placeG[l] = green;
                        
                            LplaceG[l] = 2;

                            StepsTilEndG[l] = 41;
    
                            msg.channel.send("AH! Green lost a player!")
  
                            break;
    
                            }
    
                          }
    
                        }
    
                  Way[LplaceR[k]] = SafeplaceR[k];

                  StepsTilEndR[k] -= diceR; 

                  if(Checker == true) {

                    tempR = (LplaceR[k] - diceR) + 40;

                    Way[tempR] = "x";

                    } else if (Checker == false) {

                      Way[LplaceR[k] - diceR] = "x";

                    }

                    Checker = false;

                    CounterR = 0;

                    }

                break;

              }

            }

            Embeds.error(msg.channel, `${placeY[0]} ${placeY[1]} / / ${Way[0]} ${Way[1]} ${Way[2]} / / ${placeG[0]} ${placeG[1]} \n${placeY[2]} ${placeY[3]} / / ${Way[39]} ${placesh[1]} ${Way[3]} / / ${placeG[2]} ${placeG[3]} \n/ / / / ${Way[38]} ${placesh[1]} ${Way[4]} / / / / \n/ / / / ${Way[37]} ${placesh[1]} ${Way[5]} / / / / \n${Way[32]} ${Way[33]} ${Way[34]} ${Way[35]} ${Way[36]} ${placesh[1]} ${Way[6]} ${Way[7]} ${Way[8]} ${Way[9]} ${Way[10]} \n${Way[31]} ${placesh[1]} ${placesh[1]} ${placesh[1]} ${placesh[1]} / ${placesh[1]} ${placesh[1]} ${placesh[1]} ${placesh[1]} ${Way[11]} \n${Way[30]} ${Way[29]} ${Way[28]} ${Way[27]} ${Way[26]} ${placesh[1]} ${Way[16]} ${Way[15]} ${Way[14]} ${Way[13]} ${Way[12]} \n/ / / / ${Way[25]} ${placesh[1]} ${Way[17]} / / / / \n/ / / / ${Way[24]} ${placesh[1]} ${Way[18]} / / / / \n${placeB[0]} ${placeB[1]} / / ${Way[23]} ${placesh[1]} ${Way[19]} / / ${placeR[0]} ${placeR[1]} \n${placeB[2]} ${placeB[3]} / / ${Way[22]} ${Way[21]} ${Way[20]} / / ${placeR[2]} ${placeR[3]}\nTeam Yellow: ${TeamYellow}, Team Green: ${TeamGreen}, Team Red: ${TeamRed}, Team Black: ${TeamBlack}`, "Ludo");

            if(TeamBlack != null) {

              msg.channel.send(`Its your turn ${TeamBlack}!`)

              Tblack = true;

              Tred = false;

            } else if (TeamYellow != null) {
      
              msg.channel.send(`Its your turn ${TeamYellow}!`)

              Tyellow = true;

              Tred = false;

            } else if(TeamGreen != null) {

              msg.channel.send(`Its your turn ${TeamGreen}!`)

              Tgreen = true;

              Tred = false;

            }

          } else if (Way[tempSumR].toString() != red) {

            if ((StepsTilEndR[parseInt(args[0]) - 1]) - diceR <= 0) {

              Way[LplaceR[parseInt(args[0]) - 1]] = "x";  
  
              LplaceR[parseInt(args[0]) - 1] = -1;
  
              WCounterR += 1;
  
              if(WCounterR == 4) {
      
                msg.channel.send(`You won the game, ${TeamRed}!`)

                Reset_Ludo();
  
              } else if (WCounterR < 4) {

                if(TeamBlack != null) {
        
                  msg.channel.send(`You are one step closer to a win! ${WCounterR}!\nIts your turn ${TeamBlack}`)
    
                  Tblack = true;
    
                  Tred = false;
    
                } else if(TeamYellow != null) {
    
                  msg.channel.send(`You are one step closer to a win! ${WCounterR}!\nIts your turn ${TeamYellow}`)
    
                  Tyellow = true;
    
                  Tred = false;
    
                } else if(TeamGreen != null) {
    
                  msg.channel.send(`You are one step closer to a win! ${WCounterR}!\nIts your turn ${TeamGreen}`)
    
                  Tgreen = true;
    
                  Tred = false;
    
                }
  
              }

              Embeds.error(msg.channel, `${placeY[0]} ${placeY[1]} / / ${Way[0]} ${Way[1]} ${Way[2]} / / ${placeG[0]} ${placeG[1]} \n${placeY[2]} ${placeY[3]} / / ${Way[39]} ${placesh[1]} ${Way[3]} / / ${placeG[2]} ${placeG[3]} \n/ / / / ${Way[38]} ${placesh[1]} ${Way[4]} / / / / \n/ / / / ${Way[37]} ${placesh[1]} ${Way[5]} / / / / \n${Way[32]} ${Way[33]} ${Way[34]} ${Way[35]} ${Way[36]} ${placesh[1]} ${Way[6]} ${Way[7]} ${Way[8]} ${Way[9]} ${Way[10]} \n${Way[31]} ${placesh[1]} ${placesh[1]} ${placesh[1]} ${placesh[1]} / ${placesh[1]} ${placesh[1]} ${placesh[1]} ${placesh[1]} ${Way[11]} \n${Way[30]} ${Way[29]} ${Way[28]} ${Way[27]} ${Way[26]} ${placesh[1]} ${Way[16]} ${Way[15]} ${Way[14]} ${Way[13]} ${Way[12]} \n/ / / / ${Way[25]} ${placesh[1]} ${Way[17]} / / / / \n/ / / / ${Way[24]} ${placesh[1]} ${Way[18]} / / / / \n${placeB[0]} ${placeB[1]} / / ${Way[23]} ${placesh[1]} ${Way[19]} / / ${placeR[0]} ${placeR[1]} \n${placeB[2]} ${placeB[3]} / / ${Way[22]} ${Way[21]} ${Way[20]} / / ${placeR[2]} ${placeR[3]}\nTeam Yellow: ${TeamYellow}, Team Green: ${TeamGreen}, Team Red: ${TeamRed}, Team Black: ${TeamBlack}`, "Ludo");

              
            } else if ((StepsTilEndR[parseInt(args[0]) - 1]) - diceR > 0) {

            LplaceR[parseInt(args[0]) - 1] += diceR;

            if (LplaceR[parseInt(args[0]) - 1] > 39) {
  
              LplaceR[parseInt(args[0]) - 1] = (LplaceR[parseInt(args[0]) - 1]) - 40;
  
              Checker = true;
  
            }
  
            if(Way[LplaceR[parseInt(args[0]) - 1]].toString() == yellow) {
  
              for(var l = 0; l < 4; l++) {
  
                if(LplaceY[l] == LplaceR[parseInt(args[0]) - 1]) {
  
                  placeY[l] = yellow;
                      
                  LplaceY[l] = 32;

                  StepsTilEndY[l] = 41;
  
                  msg.channel.send("AH! Yellow lost a player!")

                  break;
  
                  }
  
                }
  
              }

              else if (Way[LplaceR[parseInt(args[0]) - 1]].toString() == black) {
  
                for(var l = 0; l < 4; l++) {
    
                  if(LplaceB[l] == LplaceR[parseInt(args[0]) - 1]) {
    
                    placeB[l] = black;
                        
                    LplaceB[l] = 22;

                    StepsTilEndB[l] = 41;
    
                    msg.channel.send("AH! Black lost a player!")
  
                    break;
    
                    }
    
                  }
    
                }

                else if(Way[LplaceR[parseInt(args[0]) - 1]].toString() == green) {
  
                  for(var l = 0; l < 4; l++) {
      
                    if(LplaceG[l] == LplaceR[parseInt(args[0]) - 1]) {
      
                      placeG[l] = black;
                          
                      LplaceG[l] = 2;

                      StepsTilEndG[l] = 41;
      
                      msg.channel.send("AH! Green lost a player!")
    
                      break;
      
                      }
      
                    }
      
                  }
      
              Way[LplaceR[parseInt(args[0]) - 1]] = SafeplaceR[parseInt(args[0]) - 1];

              StepsTilEndR[parseInt(args[0] - 1)] -= diceR; 
  
              if(Checker == true) {
  
                tempR = (LplaceR[parseInt(args[0]) - 1] - diceR) + 40;
  
                Way[tempR] = "x";
  
              } else if (Checker == false) {
  
                Way[LplaceR[parseInt(args[0]) - 1] - diceR] = "x";

              }
  
              Checker = false;
  
              CounterR = 0;
  
              Embeds.error(msg.channel, `${placeY[0]} ${placeY[1]} / / ${Way[0]} ${Way[1]} ${Way[2]} / / ${placeG[0]} ${placeG[1]} \n${placeY[2]} ${placeY[3]} / / ${Way[39]} ${placesh[1]} ${Way[3]} / / ${placeG[2]} ${placeG[3]} \n/ / / / ${Way[38]} ${placesh[1]} ${Way[4]} / / / / \n/ / / / ${Way[37]} ${placesh[1]} ${Way[5]} / / / / \n${Way[32]} ${Way[33]} ${Way[34]} ${Way[35]} ${Way[36]} ${placesh[1]} ${Way[6]} ${Way[7]} ${Way[8]} ${Way[9]} ${Way[10]} \n${Way[31]} ${placesh[1]} ${placesh[1]} ${placesh[1]} ${placesh[1]} / ${placesh[1]} ${placesh[1]} ${placesh[1]} ${placesh[1]} ${Way[11]} \n${Way[30]} ${Way[29]} ${Way[28]} ${Way[27]} ${Way[26]} ${placesh[1]} ${Way[16]} ${Way[15]} ${Way[14]} ${Way[13]} ${Way[12]} \n/ / / / ${Way[25]} ${placesh[1]} ${Way[17]} / / / / \n/ / / / ${Way[24]} ${placesh[1]} ${Way[18]} / / / / \n${placeB[0]} ${placeB[1]} / / ${Way[23]} ${placesh[1]} ${Way[19]} / / ${placeR[0]} ${placeR[1]} \n${placeB[2]} ${placeB[3]} / / ${Way[22]} ${Way[21]} ${Way[20]} / / ${placeR[2]} ${placeR[3]}\nTeam Yellow: ${TeamYellow}, Team Green: ${TeamGreen}, Team Red: ${TeamRed}, Team Black: ${TeamBlack}`, "Ludo");

              if(TeamBlack != null) {

                msg.channel.send(`Its your turn ${TeamBlack}!`)
  
                Tblack = true;
  
                Tred = false;
  
              } else if (TeamYellow != null) {
        
                msg.channel.send(`Its your turn ${TeamYellow}!`)
  
                Tyellow = true;
  
                Tred = false;
  
              } else if(TeamGreen != null) {
  
                msg.channel.send(`Its your turn ${TeamGreen}!`)
  
                Tgreen = true;
  
                Tred = false;
  
              }

            }

          }

        }

          } else if (AbleToGoOn == false) {

            msg.channel.send("This player isnt available!")

          } else if (LplaceG[parseInt(args[0]) - 1] == -1) {

            msg.channel.send("This player has already finished! Use another player!")

          }

        } else {

          msg.channel.send("Your spawn is full, there are no players on the field! Use !!md (y,b,g,r)")

        }

    } else if( msg.member != TeamGreen ) {

      msg.channel.send(`Thats not your team ${msg.member}!`)

   }   

}

function cmd_mstats(msg, args) {

  var cont = msg.content;

  var invoke = cont.split(' ')[0].substr(config.prefix.length),
            args = cont.toUpperCase().split(' ').slice(1)

  if(StartGameL == true) {

  if(args[0] == "G") {

    if(TeamGreen != null) {

      Embeds.error(msg.channel, `Char 1: ${StepsTilEndG[0]} moves left\nChar 2: ${StepsTilEndG[1]} moves left\nChar 3: ${StepsTilEndG[2]} moves left\nChar 4: ${StepsTilEndG[3]} moves left`, "Statistics for Team Green")

    } else {

      msg.channel.send("This team isnt playing!")

    }

  } else if(args[0] == "Y") {

    if(TeamYellow != null) {

      Embeds.error(msg.channel, `Char 1: ${StepsTilEndY[0]} moves left\nChar 2: ${StepsTilEndY[1]} moves left\nChar 3: ${StepsTilEndY[2]} moves left\nChar 4: ${StepsTilEndY[3]} moves left`, "Statistics for Team Yellow")

    } else {

      msg.channel.send("This team isnt playing!")

    }

  } else if(args[0] == "R") {

    if(TeamRed != null) {

      Embeds.error(msg.channel, `Char 1: ${StepsTilEndR[0]} moves left\nChar 2: ${StepsTilEndR[1]} moves left\nChar 3: ${StepsTilEndR[2]} moves left\nChar 4: ${StepsTilEndR[3]} moves left`, "Statistics for Team Red")

    } else {

      msg.channel.send("This team isnt playing!")

    }

  } else if(args[0] == "B") {

    if(TeamBlack != null) {

      Embeds.error(msg.channel, `Char 1: ${StepsTilEndB[0]} moves left\nChar 2: ${StepsTilEndB[1]} moves left\nChar 3: ${StepsTilEndB[2]} moves left\nChar 4: ${StepsTilEndB[3]} moves left`, "Statistics for Team Black")

    } else {

      msg.channel.send("This team isnt playing!")

    }

  }

} else {

  msg.channel.send("No game started yet!")

}
 
}

function cmd_b1(msg, args) {

  var ChannelB = client.channels.find("id", "498556497593237523");
  var ChannelFP1 = client.channels.find("id", "498570645999976469");
  var RPlayer1 = "498570745048465418";

  if(msg.channel == ChannelB && msg.member != BPlayer2 && BPlayer1 == null) {

    BPlayer1 = msg.member;
    BPlayer1.addRole(RPlayer1);

    msg.channel.send(`You are Player 1 ${msg.member}`)

    for(var i = 0; i < 10; i++) {

      A[i] = "x";
      B[i] = "x";
      C[i] = "x";
      D[i] = "x";
      E[i] = "x";
      F[i] = "x";
      G[i] = "x";

    }

    Embeds.error(ChannelFP1, `/ 1 2 3 4 5 6 7 8 9 10\na ${A[0]} ${A[1]} ${A[2]} ${A[3]} ${A[4]} ${A[5]} ${A[6]} ${A[7]} ${A[8]} ${A[9]}\nb ${B[0]} ${B[1]} ${B[2]} ${B[3]} ${B[4]} ${B[5]} ${B[6]} ${B[7]} ${B[8]} ${B[9]}\nc ${C[0]} ${C[1]} ${C[2]} ${C[3]} ${C[4]} ${C[5]} ${C[6]} ${C[7]} ${C[8]} ${C[9]}\nd ${D[0]} ${D[1]} ${D[2]} ${D[3]} ${D[4]} ${D[5]} ${D[6]} ${D[7]} ${D[8]} ${D[9]}\ne ${E[0]} ${E[1]} ${E[2]} ${E[3]} ${E[4]} ${E[5]} ${E[6]} ${E[7]} ${E[8]} ${E[9]}\nf ${F[0]} ${F[1]} ${F[2]} ${F[3]} ${F[4]} ${F[5]} ${F[6]} ${F[7]} ${F[8]} ${F[9]}\ng ${G[0]} ${G[1]} ${G[2]} ${G[3]} ${G[4]} ${G[5]} ${G[6]} ${G[7]} ${G[8]} ${G[9]}\n`)

  } else {

    msg.channel.send("You can only play this game in #battleship!")

  }

}

function cmd_sb1(msg, args) {

  var ChannelFP1 = client.channels.find("id", "498570645999976469");

  var cont = msg.content;

  var invoke = cont.split(' ')[0].substr(config.prefix.length),
            args = cont.toUpperCase().split(' ').slice(1)

  if(msg.member == BPlayer1 && msg.channel == ChannelFP1) {

    if(args[0] != null && args[0].length < 2 && args[1] != null && parseInt(args[1]) <= 10 && parseInt(args[1]) >= 1 && args[2] != null && args[3] != null) {

      console.log(args[0].toString(), parseInt(args[1]), args[2].toString(), args[3].toString())

      if(args[0].toString() == "A") {

          var temp = parseInt(args[1] - 1)

          if(temp > 0) {

            if(args[2].toString() == "B" && AllShips1[0] != 0) {

              if(args[3].toString() == "V") {

                msg.channel.send("Thats not possible!")

              } else if (args[3].toString() == "H") {

                if(temp + 5 == 10) {

                  if(A[temp] == "x" && A[temp + 1] == "x" && A[temp + 2] == "x" && A[temp + 3] == "x" && A[temp + 4] == "x" && A[temp - 1] == "x" && B[temp] == "x" && B[temp + 1] == "x" && B[temp + 2] == "x" && B[temp + 3] == "x" && B[temp + 4] == "x" && B[temp - 1] == "x") {
  
                    A[temp] = "p";
                    A[temp + 1] = "p"; 
                    A[temp + 2] = "p"; 
                    A[temp + 3] = "p"
                    A[temp + 4] = "p";
  
                    AllShips1[0] -= 1;
  
                    Embeds.error(ChannelFP1, `/ 1 2 3 4 5 6 7 8 9 10\na ${A[0]} ${A[1]} ${A[2]} ${A[3]} ${A[4]} ${A[5]} ${A[6]} ${A[7]} ${A[8]} ${A[9]}\nb ${B[0]} ${B[1]} ${B[2]} ${B[3]} ${B[4]} ${B[5]} ${B[6]} ${B[7]} ${B[8]} ${B[9]}\nc ${C[0]} ${C[1]} ${C[2]} ${C[3]} ${C[4]} ${C[5]} ${C[6]} ${C[7]} ${C[8]} ${C[9]}\nd ${D[0]} ${D[1]} ${D[2]} ${D[3]} ${D[4]} ${D[5]} ${D[6]} ${D[7]} ${D[8]} ${D[9]}\ne ${E[0]} ${E[1]} ${E[2]} ${E[3]} ${E[4]} ${E[5]} ${E[6]} ${E[7]} ${E[8]} ${E[9]}\nf ${F[0]} ${F[1]} ${F[2]} ${F[3]} ${F[4]} ${F[5]} ${F[6]} ${F[7]} ${F[8]} ${F[9]}\ng ${G[0]} ${G[1]} ${G[2]} ${G[3]} ${G[4]} ${G[5]} ${G[6]} ${G[7]} ${G[8]} ${G[9]}\n`)
    
                  } else {
  
                    msg.channel.send("You cant place that ship there!")
  
                  }
                  
                } else if (temp + 5 < 10) {

                if(A[temp] == "x" && A[temp + 1] == "x" && A[temp + 2] == "x" && A[temp + 3] == "x" && A[temp + 4] == "x" && A[temp + 5] == "x" && A[temp - 1] == "x" && B[temp] == "x" && B[temp + 1] == "x" && B[temp + 2] == "x" && B[temp + 3] == "x" && B[temp + 4] == "x" && B[temp - 1] == "x" && B[temp +5] == "x") {
  
                  A[temp] = "p";
                  A[temp + 1] = "p"; 
                  A[temp + 2] = "p"; 
                  A[temp + 3] = "p"
                  A[temp + 4] = "p";

                  AllShips1[0] -= 1;

                  Embeds.error(ChannelFP1, `/ 1 2 3 4 5 6 7 8 9 10\na ${A[0]} ${A[1]} ${A[2]} ${A[3]} ${A[4]} ${A[5]} ${A[6]} ${A[7]} ${A[8]} ${A[9]}\nb ${B[0]} ${B[1]} ${B[2]} ${B[3]} ${B[4]} ${B[5]} ${B[6]} ${B[7]} ${B[8]} ${B[9]}\nc ${C[0]} ${C[1]} ${C[2]} ${C[3]} ${C[4]} ${C[5]} ${C[6]} ${C[7]} ${C[8]} ${C[9]}\nd ${D[0]} ${D[1]} ${D[2]} ${D[3]} ${D[4]} ${D[5]} ${D[6]} ${D[7]} ${D[8]} ${D[9]}\ne ${E[0]} ${E[1]} ${E[2]} ${E[3]} ${E[4]} ${E[5]} ${E[6]} ${E[7]} ${E[8]} ${E[9]}\nf ${F[0]} ${F[1]} ${F[2]} ${F[3]} ${F[4]} ${F[5]} ${F[6]} ${F[7]} ${F[8]} ${F[9]}\ng ${G[0]} ${G[1]} ${G[2]} ${G[3]} ${G[4]} ${G[5]} ${G[6]} ${G[7]} ${G[8]} ${G[9]}\n`)
  
                } else {

                  msg.channel.send("You cant place that ship there!")

                }

              }

              }

            } else if(args[2].toString() == "C" && AllShips1[1] != 0) {

              if(args[3].toString() == "V") {

                msg.channel.send("Thats not possible!")

              } else if (args[3].toString() == "H") {

                if(temp + 4 == 10) {

                  if(A[temp] == "x" && A[temp + 1] == "x" && A[temp + 2] == "x" && A[temp + 3] == "x" && A[temp - 1] == "x" && B[temp] == "x" && B[temp + 1] == "x" && B[temp + 2] == "x" && B[temp + 3] == "x" && B[temp - 1] == "x") {
  
                    A[temp] = "p";
                    A[temp + 1] = "p"; 
                    A[temp + 2] = "p"; 
                    A[temp + 3] = "p"
  
                    AllShips1[1] -= 1;
  
                    Embeds.error(ChannelFP1, `/ 1 2 3 4 5 6 7 8 9 10\na ${A[0]} ${A[1]} ${A[2]} ${A[3]} ${A[4]} ${A[5]} ${A[6]} ${A[7]} ${A[8]} ${A[9]}\nb ${B[0]} ${B[1]} ${B[2]} ${B[3]} ${B[4]} ${B[5]} ${B[6]} ${B[7]} ${B[8]} ${B[9]}\nc ${C[0]} ${C[1]} ${C[2]} ${C[3]} ${C[4]} ${C[5]} ${C[6]} ${C[7]} ${C[8]} ${C[9]}\nd ${D[0]} ${D[1]} ${D[2]} ${D[3]} ${D[4]} ${D[5]} ${D[6]} ${D[7]} ${D[8]} ${D[9]}\ne ${E[0]} ${E[1]} ${E[2]} ${E[3]} ${E[4]} ${E[5]} ${E[6]} ${E[7]} ${E[8]} ${E[9]}\nf ${F[0]} ${F[1]} ${F[2]} ${F[3]} ${F[4]} ${F[5]} ${F[6]} ${F[7]} ${F[8]} ${F[9]}\ng ${G[0]} ${G[1]} ${G[2]} ${G[3]} ${G[4]} ${G[5]} ${G[6]} ${G[7]} ${G[8]} ${G[9]}\n`)
    
                  } else {
  
                    msg.channel.send("You cant place that ship there!")
  
                  }

                } else if (temp + 4 < 10) {

                if(A[temp] == "x" && A[temp + 1] == "x" && A[temp + 2] == "x" && A[temp + 3] == "x" && A[temp + 4] == "x" && A[temp - 1] == "x" && B[temp] == "x" && B[temp + 1] == "x" && B[temp + 2] == "x" && B[temp + 3] == "x" && B[temp + 4] == "x" && B[temp - 1] == "x") {
  
                  A[temp] = "p";
                  A[temp + 1] = "p"; 
                  A[temp + 2] = "p"; 
                  A[temp + 3] = "p"

                  AllShips1[1] -= 1;

                  Embeds.error(ChannelFP1, `/ 1 2 3 4 5 6 7 8 9 10\na ${A[0]} ${A[1]} ${A[2]} ${A[3]} ${A[4]} ${A[5]} ${A[6]} ${A[7]} ${A[8]} ${A[9]}\nb ${B[0]} ${B[1]} ${B[2]} ${B[3]} ${B[4]} ${B[5]} ${B[6]} ${B[7]} ${B[8]} ${B[9]}\nc ${C[0]} ${C[1]} ${C[2]} ${C[3]} ${C[4]} ${C[5]} ${C[6]} ${C[7]} ${C[8]} ${C[9]}\nd ${D[0]} ${D[1]} ${D[2]} ${D[3]} ${D[4]} ${D[5]} ${D[6]} ${D[7]} ${D[8]} ${D[9]}\ne ${E[0]} ${E[1]} ${E[2]} ${E[3]} ${E[4]} ${E[5]} ${E[6]} ${E[7]} ${E[8]} ${E[9]}\nf ${F[0]} ${F[1]} ${F[2]} ${F[3]} ${F[4]} ${F[5]} ${F[6]} ${F[7]} ${F[8]} ${F[9]}\ng ${G[0]} ${G[1]} ${G[2]} ${G[3]} ${G[4]} ${G[5]} ${G[6]} ${G[7]} ${G[8]} ${G[9]}\n`)
  
                } else {

                  msg.channel.send("You cant place that ship there!")

                }

              }

              }

            } else if(args[2].toString() == "F" && AllShips1[2] != 0) {

              if(args[3].toString() == "V") {

                msg.channel.send("Thats not possible!")

              } else if (args[3].toString() == "H") {

                if(temp + 3 == 10) {

                  if(A[temp] == "x" && A[temp + 1] == "x" && A[temp + 2] == "x" && A[temp - 1] == "x" && B[temp] == "x" && B[temp + 1] == "x" && B[temp + 2] == "x" && B[temp - 1] == "x") {
  
                    A[temp] = "p";
                    A[temp + 1] = "p"; 
                    A[temp + 2] = "p"; 
  
                    AllShips1[2] -= 1;
  
                    Embeds.error(ChannelFP1, `/ 1 2 3 4 5 6 7 8 9 10\na ${A[0]} ${A[1]} ${A[2]} ${A[3]} ${A[4]} ${A[5]} ${A[6]} ${A[7]} ${A[8]} ${A[9]}\nb ${B[0]} ${B[1]} ${B[2]} ${B[3]} ${B[4]} ${B[5]} ${B[6]} ${B[7]} ${B[8]} ${B[9]}\nc ${C[0]} ${C[1]} ${C[2]} ${C[3]} ${C[4]} ${C[5]} ${C[6]} ${C[7]} ${C[8]} ${C[9]}\nd ${D[0]} ${D[1]} ${D[2]} ${D[3]} ${D[4]} ${D[5]} ${D[6]} ${D[7]} ${D[8]} ${D[9]}\ne ${E[0]} ${E[1]} ${E[2]} ${E[3]} ${E[4]} ${E[5]} ${E[6]} ${E[7]} ${E[8]} ${E[9]}\nf ${F[0]} ${F[1]} ${F[2]} ${F[3]} ${F[4]} ${F[5]} ${F[6]} ${F[7]} ${F[8]} ${F[9]}\ng ${G[0]} ${G[1]} ${G[2]} ${G[3]} ${G[4]} ${G[5]} ${G[6]} ${G[7]} ${G[8]} ${G[9]}\n`)
    
                  } else {
  
                    msg.channel.send("You cant place that ship there!")
  
                  }

                } else if (temp + 3 < 10) {

                if(A[temp] == "x" && A[temp + 1] == "x" && A[temp + 2] == "x" && A[temp + 3] == "x" && A[temp - 1] == "x" && B[temp] == "x" && B[temp + 1] == "x" && B[temp + 2] == "x" && B[temp + 3] == "x" && B[temp - 1] == "x") {
  
                  A[temp] = "p";
                  A[temp + 1] = "p"; 
                  A[temp + 2] = "p"; 

                  AllShips1[2] -= 1;

                  Embeds.error(ChannelFP1, `/ 1 2 3 4 5 6 7 8 9 10\na ${A[0]} ${A[1]} ${A[2]} ${A[3]} ${A[4]} ${A[5]} ${A[6]} ${A[7]} ${A[8]} ${A[9]}\nb ${B[0]} ${B[1]} ${B[2]} ${B[3]} ${B[4]} ${B[5]} ${B[6]} ${B[7]} ${B[8]} ${B[9]}\nc ${C[0]} ${C[1]} ${C[2]} ${C[3]} ${C[4]} ${C[5]} ${C[6]} ${C[7]} ${C[8]} ${C[9]}\nd ${D[0]} ${D[1]} ${D[2]} ${D[3]} ${D[4]} ${D[5]} ${D[6]} ${D[7]} ${D[8]} ${D[9]}\ne ${E[0]} ${E[1]} ${E[2]} ${E[3]} ${E[4]} ${E[5]} ${E[6]} ${E[7]} ${E[8]} ${E[9]}\nf ${F[0]} ${F[1]} ${F[2]} ${F[3]} ${F[4]} ${F[5]} ${F[6]} ${F[7]} ${F[8]} ${F[9]}\ng ${G[0]} ${G[1]} ${G[2]} ${G[3]} ${G[4]} ${G[5]} ${G[6]} ${G[7]} ${G[8]} ${G[9]}\n`)
  
                } else {

                  msg.channel.send("You cant place that ship there!")

                }

              }

              }

            } else if(args[2].toString() == "M" && AllShips1[3] != 0) {

              if(args[3].toString() == "V") {

                msg.channel.send("Thats not possible!")

              } else if (args[3].toString() == "H") {

                if(temp + 2 == 10) {

                  if(A[temp] == "x" && A[temp + 1] == "x" && A[temp - 1] == "x" && B[temp] == "x" && B[temp + 1] == "x" && B[temp - 1] == "x") {
  
                    A[temp] = "p";
                    A[temp + 1] = "p"; 
  
                    AllShips1[3] -= 1;
  
                    Embeds.error(ChannelFP1, `/ 1 2 3 4 5 6 7 8 9 10\na ${A[0]} ${A[1]} ${A[2]} ${A[3]} ${A[4]} ${A[5]} ${A[6]} ${A[7]} ${A[8]} ${A[9]}\nb ${B[0]} ${B[1]} ${B[2]} ${B[3]} ${B[4]} ${B[5]} ${B[6]} ${B[7]} ${B[8]} ${B[9]}\nc ${C[0]} ${C[1]} ${C[2]} ${C[3]} ${C[4]} ${C[5]} ${C[6]} ${C[7]} ${C[8]} ${C[9]}\nd ${D[0]} ${D[1]} ${D[2]} ${D[3]} ${D[4]} ${D[5]} ${D[6]} ${D[7]} ${D[8]} ${D[9]}\ne ${E[0]} ${E[1]} ${E[2]} ${E[3]} ${E[4]} ${E[5]} ${E[6]} ${E[7]} ${E[8]} ${E[9]}\nf ${F[0]} ${F[1]} ${F[2]} ${F[3]} ${F[4]} ${F[5]} ${F[6]} ${F[7]} ${F[8]} ${F[9]}\ng ${G[0]} ${G[1]} ${G[2]} ${G[3]} ${G[4]} ${G[5]} ${G[6]} ${G[7]} ${G[8]} ${G[9]}\n`)
    
                  } else {
  
                    msg.channel.send("You cant place that ship there!")
  
                  }

                } else if (temp + 2 < 10) {

                if(A[temp] == "x" && A[temp + 1] == "x" && A[temp + 2] == "x" && A[temp - 1] == "x" && B[temp] == "x" && B[temp + 1] == "x" && B[temp + 2] == "x" && B[temp - 1] == "x") {
  
                  A[temp] = "p";
                  A[temp + 1] = "p"; 

                  AllShips1[3] -= 1;

                  Embeds.error(ChannelFP1, `/ 1 2 3 4 5 6 7 8 9 10\na ${A[0]} ${A[1]} ${A[2]} ${A[3]} ${A[4]} ${A[5]} ${A[6]} ${A[7]} ${A[8]} ${A[9]}\nb ${B[0]} ${B[1]} ${B[2]} ${B[3]} ${B[4]} ${B[5]} ${B[6]} ${B[7]} ${B[8]} ${B[9]}\nc ${C[0]} ${C[1]} ${C[2]} ${C[3]} ${C[4]} ${C[5]} ${C[6]} ${C[7]} ${C[8]} ${C[9]}\nd ${D[0]} ${D[1]} ${D[2]} ${D[3]} ${D[4]} ${D[5]} ${D[6]} ${D[7]} ${D[8]} ${D[9]}\ne ${E[0]} ${E[1]} ${E[2]} ${E[3]} ${E[4]} ${E[5]} ${E[6]} ${E[7]} ${E[8]} ${E[9]}\nf ${F[0]} ${F[1]} ${F[2]} ${F[3]} ${F[4]} ${F[5]} ${F[6]} ${F[7]} ${F[8]} ${F[9]}\ng ${G[0]} ${G[1]} ${G[2]} ${G[3]} ${G[4]} ${G[5]} ${G[6]} ${G[7]} ${G[8]} ${G[9]}\n`)
  
                } else {

                  msg.channel.send("You cant place that ship there!")

                }

              }

              }

            } else {

              msg.channel.send("You used all ships of this kind")

            }

          } else if (temp == 0) {

            if(args[2].toString() == "B" && AllShips1[0] != 0) {

              if(args[3].toString() == "V") {

                msg.channel.send("Thats not possible!")

              } else if (args[3].toString() == "H") {

                if(A[temp] == "x" && A[temp + 1] == "x" && A[temp + 2] == "x" && A[temp + 3] == "x" && A[temp + 4] == "x" && A[temp + 5] == "x" && B[temp] == "x" && B[temp + 1] == "x" && B[temp + 2] == "x" && B[temp + 3] == "x" && B[temp + 4] == "x" && B[temp +5] == "x") {
  
                  A[temp] = "p";
                  A[temp + 1] = "p"; 
                  A[temp + 2] = "p"; 
                  A[temp + 3] = "p"
                  A[temp + 4] = "p";

                  AllShips1[0] -= 1;

                  Embeds.error(ChannelFP1, `/ 1 2 3 4 5 6 7 8 9 10\na ${A[0]} ${A[1]} ${A[2]} ${A[3]} ${A[4]} ${A[5]} ${A[6]} ${A[7]} ${A[8]} ${A[9]}\nb ${B[0]} ${B[1]} ${B[2]} ${B[3]} ${B[4]} ${B[5]} ${B[6]} ${B[7]} ${B[8]} ${B[9]}\nc ${C[0]} ${C[1]} ${C[2]} ${C[3]} ${C[4]} ${C[5]} ${C[6]} ${C[7]} ${C[8]} ${C[9]}\nd ${D[0]} ${D[1]} ${D[2]} ${D[3]} ${D[4]} ${D[5]} ${D[6]} ${D[7]} ${D[8]} ${D[9]}\ne ${E[0]} ${E[1]} ${E[2]} ${E[3]} ${E[4]} ${E[5]} ${E[6]} ${E[7]} ${E[8]} ${E[9]}\nf ${F[0]} ${F[1]} ${F[2]} ${F[3]} ${F[4]} ${F[5]} ${F[6]} ${F[7]} ${F[8]} ${F[9]}\ng ${G[0]} ${G[1]} ${G[2]} ${G[3]} ${G[4]} ${G[5]} ${G[6]} ${G[7]} ${G[8]} ${G[9]}\n`)
  
                } else {

                  msg.channel.send("You cant place that ship there!")

                }

              }

            } else if(args[2].toString() == "C" && AllShips1[1] != 0) {

              if(args[3].toString() == "V") {

                msg.channel.send("Thats not possible!")

              } else if (args[3].toString() == "H") {

                if(A[temp] == "x" && A[temp + 1] == "x" && A[temp + 2] == "x" && A[temp + 3] == "x" && A[temp + 4] == "x" && B[temp] == "x" && B[temp + 1] == "x" && B[temp + 2] == "x" && B[temp + 3] == "x" && B[temp + 4] == "x") {
  
                  A[temp] = "p";
                  A[temp + 1] = "p"; 
                  A[temp + 2] = "p"; 
                  A[temp + 3] = "p"

                  AllShips1[1] -= 1;

                  Embeds.error(ChannelFP1, `/ 1 2 3 4 5 6 7 8 9 10\na ${A[0]} ${A[1]} ${A[2]} ${A[3]} ${A[4]} ${A[5]} ${A[6]} ${A[7]} ${A[8]} ${A[9]}\nb ${B[0]} ${B[1]} ${B[2]} ${B[3]} ${B[4]} ${B[5]} ${B[6]} ${B[7]} ${B[8]} ${B[9]}\nc ${C[0]} ${C[1]} ${C[2]} ${C[3]} ${C[4]} ${C[5]} ${C[6]} ${C[7]} ${C[8]} ${C[9]}\nd ${D[0]} ${D[1]} ${D[2]} ${D[3]} ${D[4]} ${D[5]} ${D[6]} ${D[7]} ${D[8]} ${D[9]}\ne ${E[0]} ${E[1]} ${E[2]} ${E[3]} ${E[4]} ${E[5]} ${E[6]} ${E[7]} ${E[8]} ${E[9]}\nf ${F[0]} ${F[1]} ${F[2]} ${F[3]} ${F[4]} ${F[5]} ${F[6]} ${F[7]} ${F[8]} ${F[9]}\ng ${G[0]} ${G[1]} ${G[2]} ${G[3]} ${G[4]} ${G[5]} ${G[6]} ${G[7]} ${G[8]} ${G[9]}\n`)
  
                } else {

                  msg.channel.send("You cant place that ship there!")

                }

              }

            } else if(args[2].toString() == "F" && AllShips1[2] != 0) {

              if(args[3].toString() == "V") {

                msg.channel.send("Thats not possible!")

              } else if (args[3].toString() == "H") {

                if(A[temp] == "x" && A[temp + 1] == "x" && A[temp + 2] == "x" && A[temp + 3] == "x" && B[temp] == "x" && B[temp + 1] == "x" && B[temp + 2] == "x" && B[temp + 3] == "x") {
  
                  A[temp] = "p";
                  A[temp + 1] = "p"; 
                  A[temp + 2] = "p"; 

                  AllShips1[2] -= 1;

                  Embeds.error(ChannelFP1, `/ 1 2 3 4 5 6 7 8 9 10\na ${A[0]} ${A[1]} ${A[2]} ${A[3]} ${A[4]} ${A[5]} ${A[6]} ${A[7]} ${A[8]} ${A[9]}\nb ${B[0]} ${B[1]} ${B[2]} ${B[3]} ${B[4]} ${B[5]} ${B[6]} ${B[7]} ${B[8]} ${B[9]}\nc ${C[0]} ${C[1]} ${C[2]} ${C[3]} ${C[4]} ${C[5]} ${C[6]} ${C[7]} ${C[8]} ${C[9]}\nd ${D[0]} ${D[1]} ${D[2]} ${D[3]} ${D[4]} ${D[5]} ${D[6]} ${D[7]} ${D[8]} ${D[9]}\ne ${E[0]} ${E[1]} ${E[2]} ${E[3]} ${E[4]} ${E[5]} ${E[6]} ${E[7]} ${E[8]} ${E[9]}\nf ${F[0]} ${F[1]} ${F[2]} ${F[3]} ${F[4]} ${F[5]} ${F[6]} ${F[7]} ${F[8]} ${F[9]}\ng ${G[0]} ${G[1]} ${G[2]} ${G[3]} ${G[4]} ${G[5]} ${G[6]} ${G[7]} ${G[8]} ${G[9]}\n`)
  
                } else {

                  msg.channel.send("You cant place that ship there!")

                }

              }

            } else if(args[2].toString() == "M" && AllShips1[3] != 0) {

              if(args[3].toString() == "V") {

                msg.channel.send("Thats not possible!")

              } else if (args[3].toString() == "H") {

                if(A[temp] == "x" && A[temp + 1] == "x" && A[temp + 2] == "x" && B[temp] == "x" && B[temp + 1] == "x" && B[temp + 2] == "x") {
  
                  A[temp] = "p";
                  A[temp + 1] = "p"; 

                  AllShips1[3] -= 1;

                  Embeds.error(ChannelFP1, `/ 1 2 3 4 5 6 7 8 9 10\na ${A[0]} ${A[1]} ${A[2]} ${A[3]} ${A[4]} ${A[5]} ${A[6]} ${A[7]} ${A[8]} ${A[9]}\nb ${B[0]} ${B[1]} ${B[2]} ${B[3]} ${B[4]} ${B[5]} ${B[6]} ${B[7]} ${B[8]} ${B[9]}\nc ${C[0]} ${C[1]} ${C[2]} ${C[3]} ${C[4]} ${C[5]} ${C[6]} ${C[7]} ${C[8]} ${C[9]}\nd ${D[0]} ${D[1]} ${D[2]} ${D[3]} ${D[4]} ${D[5]} ${D[6]} ${D[7]} ${D[8]} ${D[9]}\ne ${E[0]} ${E[1]} ${E[2]} ${E[3]} ${E[4]} ${E[5]} ${E[6]} ${E[7]} ${E[8]} ${E[9]}\nf ${F[0]} ${F[1]} ${F[2]} ${F[3]} ${F[4]} ${F[5]} ${F[6]} ${F[7]} ${F[8]} ${F[9]}\ng ${G[0]} ${G[1]} ${G[2]} ${G[3]} ${G[4]} ${G[5]} ${G[6]} ${G[7]} ${G[8]} ${G[9]}\n`)
  
                } else {

                  msg.channel.send("You cant place that ship there!")

                }

              }

            } else {

              msg.channel.send("You used all ships of this kind")

            }

          }

      } else if(args[0].toString() == "B") {

        var temp = parseInt(args[1] - 1)

        if(temp > 0) {

          if(args[2].toString() == "B" && AllShips1[0] != 0) {

            if(args[3].toString() == "V") {

              msg.channel.send("Thats not possible!")

            } else if (args[3].toString() == "H") {

              if(temp + 5 == 10) {

                if(A[temp] == "x" && A[temp + 1] == "x" && A[temp + 2] == "x" && A[temp + 3] == "x" && A[temp + 4] == "x" && A[temp - 1] == "x" && B[temp] == "x" && B[temp + 1] == "x" && B[temp + 2] == "x" && B[temp + 3] == "x" && B[temp + 4] == "x" && B[temp - 1] == "x" && C[temp] == "x" && C[temp + 1] == "x" && C[temp + 2] == "x" && C[temp + 3] == "x" && C[temp + 4] == "x" && C[temp - 1] == "x") {

                  B[temp] = "p";
                  B[temp + 1] = "p"; 
                  B[temp + 2] = "p"; 
                  B[temp + 3] = "p";
                  B[temp + 4] = "p";

                  AllShips1[0] -= 1;

                  Embeds.error(ChannelFP1, `/ 1 2 3 4 5 6 7 8 9 10\na ${A[0]} ${A[1]} ${A[2]} ${A[3]} ${A[4]} ${A[5]} ${A[6]} ${A[7]} ${A[8]} ${A[9]}\nb ${B[0]} ${B[1]} ${B[2]} ${B[3]} ${B[4]} ${B[5]} ${B[6]} ${B[7]} ${B[8]} ${B[9]}\nc ${C[0]} ${C[1]} ${C[2]} ${C[3]} ${C[4]} ${C[5]} ${C[6]} ${C[7]} ${C[8]} ${C[9]}\nd ${D[0]} ${D[1]} ${D[2]} ${D[3]} ${D[4]} ${D[5]} ${D[6]} ${D[7]} ${D[8]} ${D[9]}\ne ${E[0]} ${E[1]} ${E[2]} ${E[3]} ${E[4]} ${E[5]} ${E[6]} ${E[7]} ${E[8]} ${E[9]}\nf ${F[0]} ${F[1]} ${F[2]} ${F[3]} ${F[4]} ${F[5]} ${F[6]} ${F[7]} ${F[8]} ${F[9]}\ng ${G[0]} ${G[1]} ${G[2]} ${G[3]} ${G[4]} ${G[5]} ${G[6]} ${G[7]} ${G[8]} ${G[9]}\n`)
  
                } else {

                  msg.channel.send("You cant place that ship there!")

                }
                
              } else if (temp + 5 < 10) {

              if(A[temp] == "x" && A[temp + 1] == "x" && A[temp + 2] == "x" && A[temp + 3] == "x" && A[temp + 4] == "x" && A[temp + 5] == "x" && A[temp - 1] == "x" && B[temp] == "x" && B[temp + 1] == "x" && B[temp + 2] == "x" && B[temp + 3] == "x" && B[temp + 4] == "x" && B[temp - 1] == "x" && B[temp +5] == "x" && C[temp] == "x" && C[temp + 1] == "x" && C[temp + 2] == "x" && C[temp + 3] == "x" && C[temp + 4] == "x" && C[temp - 1] == "x" && C[temp + 5] == "x") {

                B[temp] = "p";
                B[temp + 1] = "p"; 
                B[temp + 2] = "p"; 
                B[temp + 3] = "p"
                B[temp + 4] = "p";

                AllShips1[0] -= 1;

                Embeds.error(ChannelFP1, `/ 1 2 3 4 5 6 7 8 9 10\na ${A[0]} ${A[1]} ${A[2]} ${A[3]} ${A[4]} ${A[5]} ${A[6]} ${A[7]} ${A[8]} ${A[9]}\nb ${B[0]} ${B[1]} ${B[2]} ${B[3]} ${B[4]} ${B[5]} ${B[6]} ${B[7]} ${B[8]} ${B[9]}\nc ${C[0]} ${C[1]} ${C[2]} ${C[3]} ${C[4]} ${C[5]} ${C[6]} ${C[7]} ${C[8]} ${C[9]}\nd ${D[0]} ${D[1]} ${D[2]} ${D[3]} ${D[4]} ${D[5]} ${D[6]} ${D[7]} ${D[8]} ${D[9]}\ne ${E[0]} ${E[1]} ${E[2]} ${E[3]} ${E[4]} ${E[5]} ${E[6]} ${E[7]} ${E[8]} ${E[9]}\nf ${F[0]} ${F[1]} ${F[2]} ${F[3]} ${F[4]} ${F[5]} ${F[6]} ${F[7]} ${F[8]} ${F[9]}\ng ${G[0]} ${G[1]} ${G[2]} ${G[3]} ${G[4]} ${G[5]} ${G[6]} ${G[7]} ${G[8]} ${G[9]}\n`)

              } else {

                msg.channel.send("You cant place that ship there!")

              }

            }

            }

          } else if(args[2].toString() == "C" && AllShips1[1] != 0) {

            if(args[3].toString() == "V") {

              msg.channel.send("Thats not possible!")

            } else if (args[3].toString() == "H") {

              if(temp + 4 == 10) {

                if(A[temp] == "x" && A[temp + 1] == "x" && A[temp + 2] == "x" && A[temp + 3] == "x" && A[temp - 1] == "x" && B[temp] == "x" && B[temp + 1] == "x" && B[temp + 2] == "x" && B[temp + 3] == "x" && B[temp - 1] == "x" && C[temp] == "x" && C[temp + 1] == "x" && C[temp + 2] == "x" && C[temp + 3] == "x" && C[temp - 1] == "x") {

                  B[temp] = "p";
                  B[temp + 1] = "p"; 
                  B[temp + 2] = "p"; 
                  B[temp + 3] = "p"

                  AllShips1[1] -= 1;

                  Embeds.error(ChannelFP1, `/ 1 2 3 4 5 6 7 8 9 10\na ${A[0]} ${A[1]} ${A[2]} ${A[3]} ${A[4]} ${A[5]} ${A[6]} ${A[7]} ${A[8]} ${A[9]}\nb ${B[0]} ${B[1]} ${B[2]} ${B[3]} ${B[4]} ${B[5]} ${B[6]} ${B[7]} ${B[8]} ${B[9]}\nc ${C[0]} ${C[1]} ${C[2]} ${C[3]} ${C[4]} ${C[5]} ${C[6]} ${C[7]} ${C[8]} ${C[9]}\nd ${D[0]} ${D[1]} ${D[2]} ${D[3]} ${D[4]} ${D[5]} ${D[6]} ${D[7]} ${D[8]} ${D[9]}\ne ${E[0]} ${E[1]} ${E[2]} ${E[3]} ${E[4]} ${E[5]} ${E[6]} ${E[7]} ${E[8]} ${E[9]}\nf ${F[0]} ${F[1]} ${F[2]} ${F[3]} ${F[4]} ${F[5]} ${F[6]} ${F[7]} ${F[8]} ${F[9]}\ng ${G[0]} ${G[1]} ${G[2]} ${G[3]} ${G[4]} ${G[5]} ${G[6]} ${G[7]} ${G[8]} ${G[9]}\n`)
  
                } else {

                  msg.channel.send("You cant place that ship there!")

                }

              } else if (temp + 4 < 10) {

              if(A[temp] == "x" && A[temp + 1] == "x" && A[temp + 2] == "x" && A[temp + 3] == "x" && A[temp + 4] == "x" && A[temp - 1] == "x" && B[temp] == "x" && B[temp + 1] == "x" && B[temp + 2] == "x" && B[temp + 3] == "x" && B[temp + 4] == "x" && B[temp - 1] == "x" && C[temp] == "x" && C[temp + 1] == "x" && C[temp + 2] == "x" && C[temp + 3] == "x" && C[temp + 4] == "x" && C[temp - 1] == "x") {

                B[temp] = "p";
                B[temp + 1] = "p"; 
                B[temp + 2] = "p"; 
                B[temp + 3] = "p"

                AllShips1[1] -= 1;

                Embeds.error(ChannelFP1, `/ 1 2 3 4 5 6 7 8 9 10\na ${A[0]} ${A[1]} ${A[2]} ${A[3]} ${A[4]} ${A[5]} ${A[6]} ${A[7]} ${A[8]} ${A[9]}\nb ${B[0]} ${B[1]} ${B[2]} ${B[3]} ${B[4]} ${B[5]} ${B[6]} ${B[7]} ${B[8]} ${B[9]}\nc ${C[0]} ${C[1]} ${C[2]} ${C[3]} ${C[4]} ${C[5]} ${C[6]} ${C[7]} ${C[8]} ${C[9]}\nd ${D[0]} ${D[1]} ${D[2]} ${D[3]} ${D[4]} ${D[5]} ${D[6]} ${D[7]} ${D[8]} ${D[9]}\ne ${E[0]} ${E[1]} ${E[2]} ${E[3]} ${E[4]} ${E[5]} ${E[6]} ${E[7]} ${E[8]} ${E[9]}\nf ${F[0]} ${F[1]} ${F[2]} ${F[3]} ${F[4]} ${F[5]} ${F[6]} ${F[7]} ${F[8]} ${F[9]}\ng ${G[0]} ${G[1]} ${G[2]} ${G[3]} ${G[4]} ${G[5]} ${G[6]} ${G[7]} ${G[8]} ${G[9]}\n`)

              } else {

                msg.channel.send("You cant place that ship there!")

              }

            }

            }

          } else if(args[2].toString() == "F" && AllShips1[2] != 0) {

            if(args[3].toString() == "V") {

              msg.channel.send("Thats not possible!")

            } else if (args[3].toString() == "H") {

              if(temp + 3 == 10) {

                if(A[temp] == "x" && A[temp + 1] == "x" && A[temp + 2] == "x" && A[temp - 1] == "x" && B[temp] == "x" && B[temp + 1] == "x" && B[temp + 2] == "x" && B[temp - 1] == "x" && C[temp] == "x" && C[temp + 1] == "x" && C[temp + 2] == "x" && C[temp - 1] == "x") {

                  B[temp] = "p";
                  B[temp + 1] = "p"; 
                  B[temp + 2] = "p"; 

                  AllShips1[2] -= 1;

                  Embeds.error(ChannelFP1, `/ 1 2 3 4 5 6 7 8 9 10\na ${A[0]} ${A[1]} ${A[2]} ${A[3]} ${A[4]} ${A[5]} ${A[6]} ${A[7]} ${A[8]} ${A[9]}\nb ${B[0]} ${B[1]} ${B[2]} ${B[3]} ${B[4]} ${B[5]} ${B[6]} ${B[7]} ${B[8]} ${B[9]}\nc ${C[0]} ${C[1]} ${C[2]} ${C[3]} ${C[4]} ${C[5]} ${C[6]} ${C[7]} ${C[8]} ${C[9]}\nd ${D[0]} ${D[1]} ${D[2]} ${D[3]} ${D[4]} ${D[5]} ${D[6]} ${D[7]} ${D[8]} ${D[9]}\ne ${E[0]} ${E[1]} ${E[2]} ${E[3]} ${E[4]} ${E[5]} ${E[6]} ${E[7]} ${E[8]} ${E[9]}\nf ${F[0]} ${F[1]} ${F[2]} ${F[3]} ${F[4]} ${F[5]} ${F[6]} ${F[7]} ${F[8]} ${F[9]}\ng ${G[0]} ${G[1]} ${G[2]} ${G[3]} ${G[4]} ${G[5]} ${G[6]} ${G[7]} ${G[8]} ${G[9]}\n`)
  
                } else {

                  msg.channel.send("You cant place that ship there!")

                }

              } else if (temp + 3 < 10) {

              if(A[temp] == "x" && A[temp + 1] == "x" && A[temp + 2] == "x" && A[temp + 3] == "x" && A[temp - 1] == "x" && B[temp] == "x" && B[temp + 1] == "x" && B[temp + 2] == "x" && B[temp + 3] == "x" && B[temp - 1] == "x" && C[temp] == "x" && C[temp + 1] == "x" && C[temp + 2] == "x" && C[temp + 3] == "x" && C[temp - 1] == "x") {

                B[temp] = "p";
                B[temp + 1] = "p"; 
                B[temp + 2] = "p"; 

                AllShips1[2] -= 1;

                Embeds.error(ChannelFP1, `/ 1 2 3 4 5 6 7 8 9 10\na ${A[0]} ${A[1]} ${A[2]} ${A[3]} ${A[4]} ${A[5]} ${A[6]} ${A[7]} ${A[8]} ${A[9]}\nb ${B[0]} ${B[1]} ${B[2]} ${B[3]} ${B[4]} ${B[5]} ${B[6]} ${B[7]} ${B[8]} ${B[9]}\nc ${C[0]} ${C[1]} ${C[2]} ${C[3]} ${C[4]} ${C[5]} ${C[6]} ${C[7]} ${C[8]} ${C[9]}\nd ${D[0]} ${D[1]} ${D[2]} ${D[3]} ${D[4]} ${D[5]} ${D[6]} ${D[7]} ${D[8]} ${D[9]}\ne ${E[0]} ${E[1]} ${E[2]} ${E[3]} ${E[4]} ${E[5]} ${E[6]} ${E[7]} ${E[8]} ${E[9]}\nf ${F[0]} ${F[1]} ${F[2]} ${F[3]} ${F[4]} ${F[5]} ${F[6]} ${F[7]} ${F[8]} ${F[9]}\ng ${G[0]} ${G[1]} ${G[2]} ${G[3]} ${G[4]} ${G[5]} ${G[6]} ${G[7]} ${G[8]} ${G[9]}\n`)

              } else {

                msg.channel.send("You cant place that ship there!")

              }

            }

            }

          } else if(args[2].toString() == "M" && AllShips1[3] != 0) {

            if(args[3].toString() == "V") {

              if (temp > 0 && temp < 9) {

                if(A[temp] == "x" && B[temp] == "x" && A[temp + 1] == "x" && B[temp + 1] == "x" && C[temp] == "x" && C[temp + 1] == "x" && A[temp - 1] == "x" && B[temp - 1] == "x" && C[temp - 1] == "x") {

                  A[temp] = "p";
                  B[temp] = "p"; 

                  AllShips1[3] -= 1;

                  Embeds.error(ChannelFP1, `/ 1 2 3 4 5 6 7 8 9 10\na ${A[0]} ${A[1]} ${A[2]} ${A[3]} ${A[4]} ${A[5]} ${A[6]} ${A[7]} ${A[8]} ${A[9]}\nb ${B[0]} ${B[1]} ${B[2]} ${B[3]} ${B[4]} ${B[5]} ${B[6]} ${B[7]} ${B[8]} ${B[9]}\nc ${C[0]} ${C[1]} ${C[2]} ${C[3]} ${C[4]} ${C[5]} ${C[6]} ${C[7]} ${C[8]} ${C[9]}\nd ${D[0]} ${D[1]} ${D[2]} ${D[3]} ${D[4]} ${D[5]} ${D[6]} ${D[7]} ${D[8]} ${D[9]}\ne ${E[0]} ${E[1]} ${E[2]} ${E[3]} ${E[4]} ${E[5]} ${E[6]} ${E[7]} ${E[8]} ${E[9]}\nf ${F[0]} ${F[1]} ${F[2]} ${F[3]} ${F[4]} ${F[5]} ${F[6]} ${F[7]} ${F[8]} ${F[9]}\ng ${G[0]} ${G[1]} ${G[2]} ${G[3]} ${G[4]} ${G[5]} ${G[6]} ${G[7]} ${G[8]} ${G[9]}\n`)

                }

              } else if (temp == 9) {

                if(A[temp] == "x" && B[temp] == "x" && C[temp] == "x" && A[temp - 1] == "x" && B[temp - 1] == "x" && C[temp - 1] == "x") {

                  A[temp] = "p";
                  B[temp] = "p"; 

                  AllShips1[3] -= 1;

                  Embeds.error(ChannelFP1, `/ 1 2 3 4 5 6 7 8 9 10\na ${A[0]} ${A[1]} ${A[2]} ${A[3]} ${A[4]} ${A[5]} ${A[6]} ${A[7]} ${A[8]} ${A[9]}\nb ${B[0]} ${B[1]} ${B[2]} ${B[3]} ${B[4]} ${B[5]} ${B[6]} ${B[7]} ${B[8]} ${B[9]}\nc ${C[0]} ${C[1]} ${C[2]} ${C[3]} ${C[4]} ${C[5]} ${C[6]} ${C[7]} ${C[8]} ${C[9]}\nd ${D[0]} ${D[1]} ${D[2]} ${D[3]} ${D[4]} ${D[5]} ${D[6]} ${D[7]} ${D[8]} ${D[9]}\ne ${E[0]} ${E[1]} ${E[2]} ${E[3]} ${E[4]} ${E[5]} ${E[6]} ${E[7]} ${E[8]} ${E[9]}\nf ${F[0]} ${F[1]} ${F[2]} ${F[3]} ${F[4]} ${F[5]} ${F[6]} ${F[7]} ${F[8]} ${F[9]}\ng ${G[0]} ${G[1]} ${G[2]} ${G[3]} ${G[4]} ${G[5]} ${G[6]} ${G[7]} ${G[8]} ${G[9]}\n`)

                }

              } else {

                msg.channel.send("You cant place that ship there!")

              }

            } else if (args[3].toString() == "H") {

              if(temp + 2 == 10) {

                if(A[temp] == "x" && A[temp + 1] == "x" && A[temp - 1] == "x" && B[temp] == "x" && B[temp + 1] == "x" && B[temp - 1] == "x" && C[temp] == "x" && C[temp - 1] && C[temp + 1] == "x") {

                  B[temp] = "p";
                  B[temp + 1] = "p"; 

                  AllShips1[3] -= 1;

                  Embeds.error(ChannelFP1, `/ 1 2 3 4 5 6 7 8 9 10\na ${A[0]} ${A[1]} ${A[2]} ${A[3]} ${A[4]} ${A[5]} ${A[6]} ${A[7]} ${A[8]} ${A[9]}\nb ${B[0]} ${B[1]} ${B[2]} ${B[3]} ${B[4]} ${B[5]} ${B[6]} ${B[7]} ${B[8]} ${B[9]}\nc ${C[0]} ${C[1]} ${C[2]} ${C[3]} ${C[4]} ${C[5]} ${C[6]} ${C[7]} ${C[8]} ${C[9]}\nd ${D[0]} ${D[1]} ${D[2]} ${D[3]} ${D[4]} ${D[5]} ${D[6]} ${D[7]} ${D[8]} ${D[9]}\ne ${E[0]} ${E[1]} ${E[2]} ${E[3]} ${E[4]} ${E[5]} ${E[6]} ${E[7]} ${E[8]} ${E[9]}\nf ${F[0]} ${F[1]} ${F[2]} ${F[3]} ${F[4]} ${F[5]} ${F[6]} ${F[7]} ${F[8]} ${F[9]}\ng ${G[0]} ${G[1]} ${G[2]} ${G[3]} ${G[4]} ${G[5]} ${G[6]} ${G[7]} ${G[8]} ${G[9]}\n`)
  
                } else {

                  msg.channel.send("You cant place that ship there!")

                }

              } else if (temp + 2 < 10) {

              if(A[temp] == "x" && A[temp + 1] == "x" && A[temp + 2] == "x" && A[temp - 1] == "x" && B[temp] == "x" && B[temp + 1] == "x" && B[temp + 2] == "x" && B[temp - 1] == "x" && C[temp] == "x" && C[temp - 1] && C[temp + 1] == "x" && C[temp + 2] == "x") {

                B[temp] = "p";
                B[temp + 1] = "p"; 

                AllShips1[3] -= 1;

                Embeds.error(ChannelFP1, `/ 1 2 3 4 5 6 7 8 9 10\na ${A[0]} ${A[1]} ${A[2]} ${A[3]} ${A[4]} ${A[5]} ${A[6]} ${A[7]} ${A[8]} ${A[9]}\nb ${B[0]} ${B[1]} ${B[2]} ${B[3]} ${B[4]} ${B[5]} ${B[6]} ${B[7]} ${B[8]} ${B[9]}\nc ${C[0]} ${C[1]} ${C[2]} ${C[3]} ${C[4]} ${C[5]} ${C[6]} ${C[7]} ${C[8]} ${C[9]}\nd ${D[0]} ${D[1]} ${D[2]} ${D[3]} ${D[4]} ${D[5]} ${D[6]} ${D[7]} ${D[8]} ${D[9]}\ne ${E[0]} ${E[1]} ${E[2]} ${E[3]} ${E[4]} ${E[5]} ${E[6]} ${E[7]} ${E[8]} ${E[9]}\nf ${F[0]} ${F[1]} ${F[2]} ${F[3]} ${F[4]} ${F[5]} ${F[6]} ${F[7]} ${F[8]} ${F[9]}\ng ${G[0]} ${G[1]} ${G[2]} ${G[3]} ${G[4]} ${G[5]} ${G[6]} ${G[7]} ${G[8]} ${G[9]}\n`)

              } else {

                msg.channel.send("You cant place that ship there!")

              }

            }

            }

          } else {

            msg.channel.send("You used all ships of this kind")

          }

        } else if (temp == 0) {

          if(args[2].toString() == "B" && AllShips1[0] != 0) {

            if(args[3].toString() == "V") {

              msg.channel.send("Thats not possible!")

            } else if (args[3].toString() == "H") {

              if(A[temp] == "x" && A[temp + 1] == "x" && A[temp + 2] == "x" && A[temp + 3] == "x" && A[temp + 4] == "x" && A[temp + 5] == "x" && B[temp] == "x" && B[temp + 1] == "x" && B[temp + 2] == "x" && B[temp + 3] == "x" && B[temp + 4] == "x" && B[temp +5] == "x" && C[temp] == "x" && C[temp] && C[temp + 1] == "x" && C[temp + 2] == "x" && C[temp + 3] == "x" && C[temp + 4] == "x" && C[temp + 5] == "x") {

                B[temp] = "p";
                B[temp + 1] = "p"; 
                B[temp + 2] = "p"; 
                B[temp + 3] = "p"
                B[temp + 4] = "p";

                AllShips1[0] -= 1;

                Embeds.error(ChannelFP1, `/ 1 2 3 4 5 6 7 8 9 10\na ${A[0]} ${A[1]} ${A[2]} ${A[3]} ${A[4]} ${A[5]} ${A[6]} ${A[7]} ${A[8]} ${A[9]}\nb ${B[0]} ${B[1]} ${B[2]} ${B[3]} ${B[4]} ${B[5]} ${B[6]} ${B[7]} ${B[8]} ${B[9]}\nc ${C[0]} ${C[1]} ${C[2]} ${C[3]} ${C[4]} ${C[5]} ${C[6]} ${C[7]} ${C[8]} ${C[9]}\nd ${D[0]} ${D[1]} ${D[2]} ${D[3]} ${D[4]} ${D[5]} ${D[6]} ${D[7]} ${D[8]} ${D[9]}\ne ${E[0]} ${E[1]} ${E[2]} ${E[3]} ${E[4]} ${E[5]} ${E[6]} ${E[7]} ${E[8]} ${E[9]}\nf ${F[0]} ${F[1]} ${F[2]} ${F[3]} ${F[4]} ${F[5]} ${F[6]} ${F[7]} ${F[8]} ${F[9]}\ng ${G[0]} ${G[1]} ${G[2]} ${G[3]} ${G[4]} ${G[5]} ${G[6]} ${G[7]} ${G[8]} ${G[9]}\n`)

              } else {

                msg.channel.send("You cant place that ship there!")

              }

            }

          } else if(args[2].toString() == "C" && AllShips1[1] != 0) {

            if(args[3].toString() == "V") {

              msg.channel.send("Thats not possible!")

            } else if (args[3].toString() == "H") {

              if(A[temp] == "x" && A[temp + 1] == "x" && A[temp + 2] == "x" && A[temp + 3] == "x" && A[temp + 4] == "x" && B[temp] == "x" && B[temp + 1] == "x" && B[temp + 2] == "x" && B[temp + 3] == "x" && B[temp + 4] == "x" && C[temp] == "x" && C[temp] && C[temp + 1] == "x" && C[temp + 2] == "x" && C[temp + 3] == "x" && C[temp + 4] == "x") {

                B[temp] = "p";
                B[temp + 1] = "p"; 
                B[temp + 2] = "p"; 
                B[temp + 3] = "p"

                AllShips1[1] -= 1;

                Embeds.error(ChannelFP1, `/ 1 2 3 4 5 6 7 8 9 10\na ${A[0]} ${A[1]} ${A[2]} ${A[3]} ${A[4]} ${A[5]} ${A[6]} ${A[7]} ${A[8]} ${A[9]}\nb ${B[0]} ${B[1]} ${B[2]} ${B[3]} ${B[4]} ${B[5]} ${B[6]} ${B[7]} ${B[8]} ${B[9]}\nc ${C[0]} ${C[1]} ${C[2]} ${C[3]} ${C[4]} ${C[5]} ${C[6]} ${C[7]} ${C[8]} ${C[9]}\nd ${D[0]} ${D[1]} ${D[2]} ${D[3]} ${D[4]} ${D[5]} ${D[6]} ${D[7]} ${D[8]} ${D[9]}\ne ${E[0]} ${E[1]} ${E[2]} ${E[3]} ${E[4]} ${E[5]} ${E[6]} ${E[7]} ${E[8]} ${E[9]}\nf ${F[0]} ${F[1]} ${F[2]} ${F[3]} ${F[4]} ${F[5]} ${F[6]} ${F[7]} ${F[8]} ${F[9]}\ng ${G[0]} ${G[1]} ${G[2]} ${G[3]} ${G[4]} ${G[5]} ${G[6]} ${G[7]} ${G[8]} ${G[9]}\n`)

              } else {

                msg.channel.send("You cant place that ship there!")

              }

            }

          } else if(args[2].toString() == "F" && AllShips1[2] != 0) {

            if(args[3].toString() == "V") {

              msg.channel.send("Thats not possible!")

            } else if (args[3].toString() == "H") {

              if(A[temp] == "x" && A[temp + 1] == "x" && A[temp + 2] == "x" && A[temp + 3] == "x" && B[temp] == "x" && B[temp + 1] == "x" && B[temp + 2] == "x" && B[temp + 3] == "x" && C[temp] == "x" && C[temp] && C[temp + 1] == "x" && C[temp + 2] == "x" && C[temp + 3] == "x") {

                B[temp] = "p";
                B[temp + 1] = "p"; 
                B[temp + 2] = "p"; 

                AllShips1[2] -= 1;

                Embeds.error(ChannelFP1, `/ 1 2 3 4 5 6 7 8 9 10\na ${A[0]} ${A[1]} ${A[2]} ${A[3]} ${A[4]} ${A[5]} ${A[6]} ${A[7]} ${A[8]} ${A[9]}\nb ${B[0]} ${B[1]} ${B[2]} ${B[3]} ${B[4]} ${B[5]} ${B[6]} ${B[7]} ${B[8]} ${B[9]}\nc ${C[0]} ${C[1]} ${C[2]} ${C[3]} ${C[4]} ${C[5]} ${C[6]} ${C[7]} ${C[8]} ${C[9]}\nd ${D[0]} ${D[1]} ${D[2]} ${D[3]} ${D[4]} ${D[5]} ${D[6]} ${D[7]} ${D[8]} ${D[9]}\ne ${E[0]} ${E[1]} ${E[2]} ${E[3]} ${E[4]} ${E[5]} ${E[6]} ${E[7]} ${E[8]} ${E[9]}\nf ${F[0]} ${F[1]} ${F[2]} ${F[3]} ${F[4]} ${F[5]} ${F[6]} ${F[7]} ${F[8]} ${F[9]}\ng ${G[0]} ${G[1]} ${G[2]} ${G[3]} ${G[4]} ${G[5]} ${G[6]} ${G[7]} ${G[8]} ${G[9]}\n`)

              } else {

                msg.channel.send("You cant place that ship there!")

              }

            }

          } else if(args[2].toString() == "M" && AllShips1[3] != 0) {

            if(args[3].toString() == "V") {

              if(temp == 0) {

                if(A[temp] == "x" && B[temp] == "x" && A[temp + 1] == "x" && B[temp + 1] == "x" && C[temp] == "x" && C[temp + 1] == "x") {

                  A[temp] = "p";
                  B[temp] = "p"; 

                  AllShips1[3] -= 1;

                  Embeds.error(ChannelFP1, `/ 1 2 3 4 5 6 7 8 9 10\na ${A[0]} ${A[1]} ${A[2]} ${A[3]} ${A[4]} ${A[5]} ${A[6]} ${A[7]} ${A[8]} ${A[9]}\nb ${B[0]} ${B[1]} ${B[2]} ${B[3]} ${B[4]} ${B[5]} ${B[6]} ${B[7]} ${B[8]} ${B[9]}\nc ${C[0]} ${C[1]} ${C[2]} ${C[3]} ${C[4]} ${C[5]} ${C[6]} ${C[7]} ${C[8]} ${C[9]}\nd ${D[0]} ${D[1]} ${D[2]} ${D[3]} ${D[4]} ${D[5]} ${D[6]} ${D[7]} ${D[8]} ${D[9]}\ne ${E[0]} ${E[1]} ${E[2]} ${E[3]} ${E[4]} ${E[5]} ${E[6]} ${E[7]} ${E[8]} ${E[9]}\nf ${F[0]} ${F[1]} ${F[2]} ${F[3]} ${F[4]} ${F[5]} ${F[6]} ${F[7]} ${F[8]} ${F[9]}\ng ${G[0]} ${G[1]} ${G[2]} ${G[3]} ${G[4]} ${G[5]} ${G[6]} ${G[7]} ${G[8]} ${G[9]}\n`)

                } else {

                  msg.channel.send("You cant place that ship there!")

                }

              }

            } else if (args[3].toString() == "H") {

              if(A[temp] == "x" && A[temp + 1] == "x" && A[temp + 2] == "x" && B[temp] == "x" && B[temp + 1] == "x" && B[temp + 2] == "x" && C[temp] == "x" && C[temp] && C[temp + 1] == "x" && C[temp + 2] == "x") {

                B[temp] = "p";
                B[temp + 1] = "p"; 

                AllShips1[3] -= 1;

                Embeds.error(ChannelFP1, `/ 1 2 3 4 5 6 7 8 9 10\na ${A[0]} ${A[1]} ${A[2]} ${A[3]} ${A[4]} ${A[5]} ${A[6]} ${A[7]} ${A[8]} ${A[9]}\nb ${B[0]} ${B[1]} ${B[2]} ${B[3]} ${B[4]} ${B[5]} ${B[6]} ${B[7]} ${B[8]} ${B[9]}\nc ${C[0]} ${C[1]} ${C[2]} ${C[3]} ${C[4]} ${C[5]} ${C[6]} ${C[7]} ${C[8]} ${C[9]}\nd ${D[0]} ${D[1]} ${D[2]} ${D[3]} ${D[4]} ${D[5]} ${D[6]} ${D[7]} ${D[8]} ${D[9]}\ne ${E[0]} ${E[1]} ${E[2]} ${E[3]} ${E[4]} ${E[5]} ${E[6]} ${E[7]} ${E[8]} ${E[9]}\nf ${F[0]} ${F[1]} ${F[2]} ${F[3]} ${F[4]} ${F[5]} ${F[6]} ${F[7]} ${F[8]} ${F[9]}\ng ${G[0]} ${G[1]} ${G[2]} ${G[3]} ${G[4]} ${G[5]} ${G[6]} ${G[7]} ${G[8]} ${G[9]}\n`)

              } else {

                msg.channel.send("You cant place that ship there!")

              }

            }

          } else {

            msg.channel.send("You used all ships of this kind")

          }

        } 

    } else if(args[0].toString() == "C") {

      var temp = parseInt(args[1] - 1)

      if(temp > 0) {

        if(args[2].toString() == "B" && AllShips1[0] != 0) {

          if(args[3].toString() == "V") {

            msg.channel.send("Thats not possible!")

          } else if (args[3].toString() == "H") {

            if(temp + 5 == 10) {

              if(B[temp] == "x" && B[temp + 1] == "x" && B[temp + 2] == "x" && B[temp + 3] == "x" && B[temp + 4] == "x" && B[temp - 1] == "x" && C[temp] == "x" && C[temp + 1] == "x" && C[temp + 2] == "x" && C[temp + 3] == "x" && C[temp + 4] == "x" && C[temp - 1] == "x" && D[temp] == "x" && D[temp + 1] == "x" && D[temp + 2] == "x" && D[temp + 3] == "x" && D[temp + 4] == "x" && D[temp - 1] == "x") {

                C[temp] = "p";
                C[temp + 1] = "p"; 
                C[temp + 2] = "p"; 
                C[temp + 3] = "p";
                C[temp + 4] = "p";

                AllShips1[0] -= 1;

                Embeds.error(ChannelFP1, `/ 1 2 3 4 5 6 7 8 9 10\na ${A[0]} ${A[1]} ${A[2]} ${A[3]} ${A[4]} ${A[5]} ${A[6]} ${A[7]} ${A[8]} ${A[9]}\nb ${B[0]} ${B[1]} ${B[2]} ${B[3]} ${B[4]} ${B[5]} ${B[6]} ${B[7]} ${B[8]} ${B[9]}\nc ${C[0]} ${C[1]} ${C[2]} ${C[3]} ${C[4]} ${C[5]} ${C[6]} ${C[7]} ${C[8]} ${C[9]}\nd ${D[0]} ${D[1]} ${D[2]} ${D[3]} ${D[4]} ${D[5]} ${D[6]} ${D[7]} ${D[8]} ${D[9]}\ne ${E[0]} ${E[1]} ${E[2]} ${E[3]} ${E[4]} ${E[5]} ${E[6]} ${E[7]} ${E[8]} ${E[9]}\nf ${F[0]} ${F[1]} ${F[2]} ${F[3]} ${F[4]} ${F[5]} ${F[6]} ${F[7]} ${F[8]} ${F[9]}\ng ${G[0]} ${G[1]} ${G[2]} ${G[3]} ${G[4]} ${G[5]} ${G[6]} ${G[7]} ${G[8]} ${G[9]}\n`)

              } else {

                msg.channel.send("You cant place that ship there!")

              }
              
            } else if (temp + 5 < 10) {

            if(B[temp] == "x" && B[temp + 1] == "x" && B[temp + 2] == "x" && B[temp + 3] == "x" && B[temp + 4] == "x" && B[temp + 5] == "x" && B[temp - 1] == "x" && C[temp] == "x" && C[temp + 1] == "x" && C[temp + 2] == "x" && C[temp + 3] == "x" && C[temp + 4] == "x" && C[temp - 1] == "x" && C[temp +5] == "x" && D[temp] == "x" && D[temp + 1] == "x" && D[temp + 2] == "x" && D[temp + 3] == "x" && D[temp + 4] == "x" && D[temp - 1] == "x" && D[temp + 5] == "x") {

              C[temp] = "p";
              C[temp + 1] = "p"; 
              C[temp + 2] = "p"; 
              C[temp + 3] = "p"
              C[temp + 4] = "p";

              AllShips1[0] -= 1;

              Embeds.error(ChannelFP1, `/ 1 2 3 4 5 6 7 8 9 10\na ${A[0]} ${A[1]} ${A[2]} ${A[3]} ${A[4]} ${A[5]} ${A[6]} ${A[7]} ${A[8]} ${A[9]}\nb ${B[0]} ${B[1]} ${B[2]} ${B[3]} ${B[4]} ${B[5]} ${B[6]} ${B[7]} ${B[8]} ${B[9]}\nc ${C[0]} ${C[1]} ${C[2]} ${C[3]} ${C[4]} ${C[5]} ${C[6]} ${C[7]} ${C[8]} ${C[9]}\nd ${D[0]} ${D[1]} ${D[2]} ${D[3]} ${D[4]} ${D[5]} ${D[6]} ${D[7]} ${D[8]} ${D[9]}\ne ${E[0]} ${E[1]} ${E[2]} ${E[3]} ${E[4]} ${E[5]} ${E[6]} ${E[7]} ${E[8]} ${E[9]}\nf ${F[0]} ${F[1]} ${F[2]} ${F[3]} ${F[4]} ${F[5]} ${F[6]} ${F[7]} ${F[8]} ${F[9]}\ng ${G[0]} ${G[1]} ${G[2]} ${G[3]} ${G[4]} ${G[5]} ${G[6]} ${G[7]} ${G[8]} ${G[9]}\n`)

            } else {

              msg.channel.send("You cant place that ship there!")

            }

          }

          }

        } else if(args[2].toString() == "C" && AllShips1[1] != 0) {

          if(args[3].toString() == "V") {

            msg.channel.send("Thats not possible!")

          } else if (args[3].toString() == "H") {

            if(temp + 4 == 10) {

              if(B[temp] == "x" && B[temp + 1] == "x" && B[temp + 2] == "x" && B[temp + 3] == "x" && B[temp - 1] == "x" && C[temp] == "x" && C[temp + 1] == "x" && C[temp + 2] == "x" && C[temp + 3] == "x" && C[temp - 1] == "x" && D[temp] == "x" && D[temp + 1] == "x" && D[temp + 2] == "x" && D[temp + 3] == "x" && D[temp - 1] == "x") {

                C[temp] = "p";
                C[temp + 1] = "p"; 
                C[temp + 2] = "p"; 
                C[temp + 3] = "p"

                AllShips1[1] -= 1;

                Embeds.error(ChannelFP1, `/ 1 2 3 4 5 6 7 8 9 10\na ${A[0]} ${A[1]} ${A[2]} ${A[3]} ${A[4]} ${A[5]} ${A[6]} ${A[7]} ${A[8]} ${A[9]}\nb ${B[0]} ${B[1]} ${B[2]} ${B[3]} ${B[4]} ${B[5]} ${B[6]} ${B[7]} ${B[8]} ${B[9]}\nc ${C[0]} ${C[1]} ${C[2]} ${C[3]} ${C[4]} ${C[5]} ${C[6]} ${C[7]} ${C[8]} ${C[9]}\nd ${D[0]} ${D[1]} ${D[2]} ${D[3]} ${D[4]} ${D[5]} ${D[6]} ${D[7]} ${D[8]} ${D[9]}\ne ${E[0]} ${E[1]} ${E[2]} ${E[3]} ${E[4]} ${E[5]} ${E[6]} ${E[7]} ${E[8]} ${E[9]}\nf ${F[0]} ${F[1]} ${F[2]} ${F[3]} ${F[4]} ${F[5]} ${F[6]} ${F[7]} ${F[8]} ${F[9]}\ng ${G[0]} ${G[1]} ${G[2]} ${G[3]} ${G[4]} ${G[5]} ${G[6]} ${G[7]} ${G[8]} ${G[9]}\n`)

              } else {

                msg.channel.send("You cant place that ship there!")

              }

            } else if (temp + 4 < 10) {

              if(B[temp] == "x" && B[temp + 1] == "x" && B[temp + 2] == "x" && B[temp + 3] == "x" && B[temp + 4] == "x" && B[temp - 1] == "x" && C[temp] == "x" && C[temp + 1] == "x" && C[temp + 2] == "x" && C[temp + 3] == "x" && C[temp + 4] == "x" && C[temp - 1] == "x" && D[temp] == "x" && D[temp + 1] == "x" && D[temp + 2] == "x" && D[temp + 3] == "x" && D[temp + 4] == "x" && D[temp - 1] == "x") {

              C[temp] = "p";
              C[temp + 1] = "p"; 
              C[temp + 2] = "p"; 
              C[temp + 3] = "p"

              AllShips1[1] -= 1;

              Embeds.error(ChannelFP1, `/ 1 2 3 4 5 6 7 8 9 10\na ${A[0]} ${A[1]} ${A[2]} ${A[3]} ${A[4]} ${A[5]} ${A[6]} ${A[7]} ${A[8]} ${A[9]}\nb ${B[0]} ${B[1]} ${B[2]} ${B[3]} ${B[4]} ${B[5]} ${B[6]} ${B[7]} ${B[8]} ${B[9]}\nc ${C[0]} ${C[1]} ${C[2]} ${C[3]} ${C[4]} ${C[5]} ${C[6]} ${C[7]} ${C[8]} ${C[9]}\nd ${D[0]} ${D[1]} ${D[2]} ${D[3]} ${D[4]} ${D[5]} ${D[6]} ${D[7]} ${D[8]} ${D[9]}\ne ${E[0]} ${E[1]} ${E[2]} ${E[3]} ${E[4]} ${E[5]} ${E[6]} ${E[7]} ${E[8]} ${E[9]}\nf ${F[0]} ${F[1]} ${F[2]} ${F[3]} ${F[4]} ${F[5]} ${F[6]} ${F[7]} ${F[8]} ${F[9]}\ng ${G[0]} ${G[1]} ${G[2]} ${G[3]} ${G[4]} ${G[5]} ${G[6]} ${G[7]} ${G[8]} ${G[9]}\n`)

            } else {

              msg.channel.send("You cant place that ship there!")

            }

          }

          }

        } else if(args[2].toString() == "F" && AllShips1[2] != 0) {

          if(args[3].toString() == "V") {

            if (temp > 0 && temp < 9) {

              if(A[temp] == "x" && B[temp] == "x" && A[temp + 1] == "x" && B[temp + 1] == "x" && C[temp] == "x" && C[temp + 1] == "x" && A[temp - 1] == "x" && B[temp - 1] == "x" && C[temp - 1] == "x" && D[temp] == "x" && D[temp + 1] == "x" && D[temp - 1] == "x") {

                A[temp] = "p";
                B[temp] = "p";
                C[temp] = "p"; 

                AllShips1[2] -= 1;

                Embeds.error(ChannelFP1, `/ 1 2 3 4 5 6 7 8 9 10\na ${A[0]} ${A[1]} ${A[2]} ${A[3]} ${A[4]} ${A[5]} ${A[6]} ${A[7]} ${A[8]} ${A[9]}\nb ${B[0]} ${B[1]} ${B[2]} ${B[3]} ${B[4]} ${B[5]} ${B[6]} ${B[7]} ${B[8]} ${B[9]}\nc ${C[0]} ${C[1]} ${C[2]} ${C[3]} ${C[4]} ${C[5]} ${C[6]} ${C[7]} ${C[8]} ${C[9]}\nd ${D[0]} ${D[1]} ${D[2]} ${D[3]} ${D[4]} ${D[5]} ${D[6]} ${D[7]} ${D[8]} ${D[9]}\ne ${E[0]} ${E[1]} ${E[2]} ${E[3]} ${E[4]} ${E[5]} ${E[6]} ${E[7]} ${E[8]} ${E[9]}\nf ${F[0]} ${F[1]} ${F[2]} ${F[3]} ${F[4]} ${F[5]} ${F[6]} ${F[7]} ${F[8]} ${F[9]}\ng ${G[0]} ${G[1]} ${G[2]} ${G[3]} ${G[4]} ${G[5]} ${G[6]} ${G[7]} ${G[8]} ${G[9]}\n`)

              }

            } else if (temp == 9) {

              if(A[temp] == "x" && B[temp] == "x" && C[temp] == "x" && A[temp - 1] == "x" && B[temp - 1] == "x" && C[temp - 1] == "x" && D[temp] == "x" && D[temp - 1] == "x") {

                A[temp] = "p";
                B[temp] = "p"; 
                C[temp] = "p";

                AllShips1[2] -= 1;

                Embeds.error(ChannelFP1, `/ 1 2 3 4 5 6 7 8 9 10\na ${A[0]} ${A[1]} ${A[2]} ${A[3]} ${A[4]} ${A[5]} ${A[6]} ${A[7]} ${A[8]} ${A[9]}\nb ${B[0]} ${B[1]} ${B[2]} ${B[3]} ${B[4]} ${B[5]} ${B[6]} ${B[7]} ${B[8]} ${B[9]}\nc ${C[0]} ${C[1]} ${C[2]} ${C[3]} ${C[4]} ${C[5]} ${C[6]} ${C[7]} ${C[8]} ${C[9]}\nd ${D[0]} ${D[1]} ${D[2]} ${D[3]} ${D[4]} ${D[5]} ${D[6]} ${D[7]} ${D[8]} ${D[9]}\ne ${E[0]} ${E[1]} ${E[2]} ${E[3]} ${E[4]} ${E[5]} ${E[6]} ${E[7]} ${E[8]} ${E[9]}\nf ${F[0]} ${F[1]} ${F[2]} ${F[3]} ${F[4]} ${F[5]} ${F[6]} ${F[7]} ${F[8]} ${F[9]}\ng ${G[0]} ${G[1]} ${G[2]} ${G[3]} ${G[4]} ${G[5]} ${G[6]} ${G[7]} ${G[8]} ${G[9]}\n`)

              }

            } else {

              msg.channel.send("You cant place that ship there!")

            }

          } else if (args[3].toString() == "H") {

            if(temp + 3 == 10) {

              if(B[temp] == "x" && B[temp + 1] == "x" && B[temp + 2] == "x" && B[temp - 1] == "x" && C[temp] == "x" && C[temp + 1] == "x" && C[temp + 2] == "x" && C[temp - 1] == "x" && D[temp] == "x" && D[temp + 1] == "x" && D[temp + 2] == "x" && D[temp - 1] == "x") {

                C[temp] = "p";
                C[temp + 1] = "p"; 
                C[temp + 2] = "p"; 

                AllShips1[2] -= 1;

                Embeds.error(ChannelFP1, `/ 1 2 3 4 5 6 7 8 9 10\na ${A[0]} ${A[1]} ${A[2]} ${A[3]} ${A[4]} ${A[5]} ${A[6]} ${A[7]} ${A[8]} ${A[9]}\nb ${B[0]} ${B[1]} ${B[2]} ${B[3]} ${B[4]} ${B[5]} ${B[6]} ${B[7]} ${B[8]} ${B[9]}\nc ${C[0]} ${C[1]} ${C[2]} ${C[3]} ${C[4]} ${C[5]} ${C[6]} ${C[7]} ${C[8]} ${C[9]}\nd ${D[0]} ${D[1]} ${D[2]} ${D[3]} ${D[4]} ${D[5]} ${D[6]} ${D[7]} ${D[8]} ${D[9]}\ne ${E[0]} ${E[1]} ${E[2]} ${E[3]} ${E[4]} ${E[5]} ${E[6]} ${E[7]} ${E[8]} ${E[9]}\nf ${F[0]} ${F[1]} ${F[2]} ${F[3]} ${F[4]} ${F[5]} ${F[6]} ${F[7]} ${F[8]} ${F[9]}\ng ${G[0]} ${G[1]} ${G[2]} ${G[3]} ${G[4]} ${G[5]} ${G[6]} ${G[7]} ${G[8]} ${G[9]}\n`)

              } else {

                msg.channel.send("You cant place that ship there!")

              }

            } else if (temp + 3 < 10) {

              if(B[temp] == "x" && B[temp + 1] == "x" && B[temp + 2] == "x" && B[temp + 3] == "x" && B[temp - 1] == "x" && C[temp] == "x" && C[temp + 1] == "x" && C[temp + 2] == "x" && C[temp + 3] == "x" && C[temp - 1] == "x" && D[temp] == "x" && D[temp + 1] == "x" && D[temp + 2] == "x" && D[temp + 3] == "x" && D[temp - 1] == "x") {

              C[temp] = "p";
              C[temp + 1] = "p"; 
              C[temp + 2] = "p"; 

              AllShips1[2] -= 1;

              Embeds.error(ChannelFP1, `/ 1 2 3 4 5 6 7 8 9 10\na ${A[0]} ${A[1]} ${A[2]} ${A[3]} ${A[4]} ${A[5]} ${A[6]} ${A[7]} ${A[8]} ${A[9]}\nb ${B[0]} ${B[1]} ${B[2]} ${B[3]} ${B[4]} ${B[5]} ${B[6]} ${B[7]} ${B[8]} ${B[9]}\nc ${C[0]} ${C[1]} ${C[2]} ${C[3]} ${C[4]} ${C[5]} ${C[6]} ${C[7]} ${C[8]} ${C[9]}\nd ${D[0]} ${D[1]} ${D[2]} ${D[3]} ${D[4]} ${D[5]} ${D[6]} ${D[7]} ${D[8]} ${D[9]}\ne ${E[0]} ${E[1]} ${E[2]} ${E[3]} ${E[4]} ${E[5]} ${E[6]} ${E[7]} ${E[8]} ${E[9]}\nf ${F[0]} ${F[1]} ${F[2]} ${F[3]} ${F[4]} ${F[5]} ${F[6]} ${F[7]} ${F[8]} ${F[9]}\ng ${G[0]} ${G[1]} ${G[2]} ${G[3]} ${G[4]} ${G[5]} ${G[6]} ${G[7]} ${G[8]} ${G[9]}\n`)

            } else {

              msg.channel.send("You cant place that ship there!")

            }

          }

          }

        } else if(args[2].toString() == "M" && AllShips1[3] != 0) {

          if(args[3].toString() == "V") {

            if (temp > 0 && temp < 9) {

              if(A[temp] == "x" && B[temp] == "x" && A[temp + 1] == "x" && B[temp + 1] == "x" && C[temp] == "x" && C[temp + 1] == "x" && A[temp - 1] == "x" && B[temp - 1] == "x" && C[temp - 1] == "x" && D[temp] == "x" && D[temp + 1] == "x" && D[temp - 1] == "x") {

                B[temp] = "p";
                C[temp] = "p"; 

                AllShips1[3] -= 1;

                Embeds.error(ChannelFP1, `/ 1 2 3 4 5 6 7 8 9 10\na ${A[0]} ${A[1]} ${A[2]} ${A[3]} ${A[4]} ${A[5]} ${A[6]} ${A[7]} ${A[8]} ${A[9]}\nb ${B[0]} ${B[1]} ${B[2]} ${B[3]} ${B[4]} ${B[5]} ${B[6]} ${B[7]} ${B[8]} ${B[9]}\nc ${C[0]} ${C[1]} ${C[2]} ${C[3]} ${C[4]} ${C[5]} ${C[6]} ${C[7]} ${C[8]} ${C[9]}\nd ${D[0]} ${D[1]} ${D[2]} ${D[3]} ${D[4]} ${D[5]} ${D[6]} ${D[7]} ${D[8]} ${D[9]}\ne ${E[0]} ${E[1]} ${E[2]} ${E[3]} ${E[4]} ${E[5]} ${E[6]} ${E[7]} ${E[8]} ${E[9]}\nf ${F[0]} ${F[1]} ${F[2]} ${F[3]} ${F[4]} ${F[5]} ${F[6]} ${F[7]} ${F[8]} ${F[9]}\ng ${G[0]} ${G[1]} ${G[2]} ${G[3]} ${G[4]} ${G[5]} ${G[6]} ${G[7]} ${G[8]} ${G[9]}\n`)

              }

            } else if (temp == 9) {

              if(A[temp] == "x" && B[temp] == "x" && C[temp] == "x" && A[temp - 1] == "x" && B[temp - 1] == "x" && C[temp - 1] == "x" && D[temp] == "x" && D[temp - 1] == "x") {

                B[temp] = "p";
                C[temp] = "p"; 

                AllShips1[3] -= 1;

                Embeds.error(ChannelFP1, `/ 1 2 3 4 5 6 7 8 9 10\na ${A[0]} ${A[1]} ${A[2]} ${A[3]} ${A[4]} ${A[5]} ${A[6]} ${A[7]} ${A[8]} ${A[9]}\nb ${B[0]} ${B[1]} ${B[2]} ${B[3]} ${B[4]} ${B[5]} ${B[6]} ${B[7]} ${B[8]} ${B[9]}\nc ${C[0]} ${C[1]} ${C[2]} ${C[3]} ${C[4]} ${C[5]} ${C[6]} ${C[7]} ${C[8]} ${C[9]}\nd ${D[0]} ${D[1]} ${D[2]} ${D[3]} ${D[4]} ${D[5]} ${D[6]} ${D[7]} ${D[8]} ${D[9]}\ne ${E[0]} ${E[1]} ${E[2]} ${E[3]} ${E[4]} ${E[5]} ${E[6]} ${E[7]} ${E[8]} ${E[9]}\nf ${F[0]} ${F[1]} ${F[2]} ${F[3]} ${F[4]} ${F[5]} ${F[6]} ${F[7]} ${F[8]} ${F[9]}\ng ${G[0]} ${G[1]} ${G[2]} ${G[3]} ${G[4]} ${G[5]} ${G[6]} ${G[7]} ${G[8]} ${G[9]}\n`)

              }

            } else {

              msg.channel.send("You cant place that ship there!")

            }

          } else if (args[3].toString() == "H") {

            if(temp + 2 == 10) {

              if(B[temp] == "x" && B[temp + 1] == "x" && B[temp - 1] == "x" && C[temp] == "x" && C[temp + 1] == "x" && C[temp - 1] == "x" && D[temp] == "x" && D[temp + 1] == "x" && D[temp - 1] == "x") {

                C[temp] = "p";
                C[temp + 1] = "p"; 

                AllShips1[3] -= 1;

                Embeds.error(ChannelFP1, `/ 1 2 3 4 5 6 7 8 9 10\na ${A[0]} ${A[1]} ${A[2]} ${A[3]} ${A[4]} ${A[5]} ${A[6]} ${A[7]} ${A[8]} ${A[9]}\nb ${B[0]} ${B[1]} ${B[2]} ${B[3]} ${B[4]} ${B[5]} ${B[6]} ${B[7]} ${B[8]} ${B[9]}\nc ${C[0]} ${C[1]} ${C[2]} ${C[3]} ${C[4]} ${C[5]} ${C[6]} ${C[7]} ${C[8]} ${C[9]}\nd ${D[0]} ${D[1]} ${D[2]} ${D[3]} ${D[4]} ${D[5]} ${D[6]} ${D[7]} ${D[8]} ${D[9]}\ne ${E[0]} ${E[1]} ${E[2]} ${E[3]} ${E[4]} ${E[5]} ${E[6]} ${E[7]} ${E[8]} ${E[9]}\nf ${F[0]} ${F[1]} ${F[2]} ${F[3]} ${F[4]} ${F[5]} ${F[6]} ${F[7]} ${F[8]} ${F[9]}\ng ${G[0]} ${G[1]} ${G[2]} ${G[3]} ${G[4]} ${G[5]} ${G[6]} ${G[7]} ${G[8]} ${G[9]}\n`)

              } else {

                msg.channel.send("You cant place that ship there!")

              }

            } else if (temp + 2 < 10) {

            if(B[temp] == "x" && B[temp + 1] == "x" && B[temp + 2] == "x" && B[temp - 1] == "x" && C[temp] == "x" && C[temp + 1] == "x" && C[temp + 2] == "x" && C[temp - 1] == "x" && D[temp] == "x" && D[temp + 1] == "x" && D[temp + 2] == "x" && D[temp - 1] == "x") {

              C[temp] = "p";
              C[temp + 1] = "p"; 

              AllShips1[3] -= 1;

              Embeds.error(ChannelFP1, `/ 1 2 3 4 5 6 7 8 9 10\na ${A[0]} ${A[1]} ${A[2]} ${A[3]} ${A[4]} ${A[5]} ${A[6]} ${A[7]} ${A[8]} ${A[9]}\nb ${B[0]} ${B[1]} ${B[2]} ${B[3]} ${B[4]} ${B[5]} ${B[6]} ${B[7]} ${B[8]} ${B[9]}\nc ${C[0]} ${C[1]} ${C[2]} ${C[3]} ${C[4]} ${C[5]} ${C[6]} ${C[7]} ${C[8]} ${C[9]}\nd ${D[0]} ${D[1]} ${D[2]} ${D[3]} ${D[4]} ${D[5]} ${D[6]} ${D[7]} ${D[8]} ${D[9]}\ne ${E[0]} ${E[1]} ${E[2]} ${E[3]} ${E[4]} ${E[5]} ${E[6]} ${E[7]} ${E[8]} ${E[9]}\nf ${F[0]} ${F[1]} ${F[2]} ${F[3]} ${F[4]} ${F[5]} ${F[6]} ${F[7]} ${F[8]} ${F[9]}\ng ${G[0]} ${G[1]} ${G[2]} ${G[3]} ${G[4]} ${G[5]} ${G[6]} ${G[7]} ${G[8]} ${G[9]}\n`)

            } else {

              msg.channel.send("You cant place that ship there!")

            }

          }

          }

        } else {

          msg.channel.send("You used all ships of this kind")

        }

      } else if (temp == 0) {

        if(args[2].toString() == "B" && AllShips1[0] != 0) {

          if(args[3].toString() == "V") {

            msg.channel.send("Thats not possible!")

          } else if (args[3].toString() == "H") {

            if(B[temp] == "x" && B[temp + 1] == "x" && B[temp + 2] == "x" && B[temp + 3] == "x" && B[temp + 4] == "x" && B[temp + 5] == "x" && C[temp] == "x" && C[temp + 1] == "x" && C[temp + 2] == "x" && C[temp + 3] == "x" && C[temp + 4] == "x" && C[temp + 5] == "x" && D[temp] == "x" && D[temp + 1] == "x" && D[temp + 2] == "x" && D[temp + 3] == "x" && D[temp + 4] == "x" && D[temp + 5] == "x") {

              C[temp] = "p";
              C[temp + 1] = "p"; 
              C[temp + 2] = "p"; 
              C[temp + 3] = "p"
              C[temp + 4] = "p";

              AllShips1[0] -= 1;

              Embeds.error(ChannelFP1, `/ 1 2 3 4 5 6 7 8 9 10\na ${A[0]} ${A[1]} ${A[2]} ${A[3]} ${A[4]} ${A[5]} ${A[6]} ${A[7]} ${A[8]} ${A[9]}\nb ${B[0]} ${B[1]} ${B[2]} ${B[3]} ${B[4]} ${B[5]} ${B[6]} ${B[7]} ${B[8]} ${B[9]}\nc ${C[0]} ${C[1]} ${C[2]} ${C[3]} ${C[4]} ${C[5]} ${C[6]} ${C[7]} ${C[8]} ${C[9]}\nd ${D[0]} ${D[1]} ${D[2]} ${D[3]} ${D[4]} ${D[5]} ${D[6]} ${D[7]} ${D[8]} ${D[9]}\ne ${E[0]} ${E[1]} ${E[2]} ${E[3]} ${E[4]} ${E[5]} ${E[6]} ${E[7]} ${E[8]} ${E[9]}\nf ${F[0]} ${F[1]} ${F[2]} ${F[3]} ${F[4]} ${F[5]} ${F[6]} ${F[7]} ${F[8]} ${F[9]}\ng ${G[0]} ${G[1]} ${G[2]} ${G[3]} ${G[4]} ${G[5]} ${G[6]} ${G[7]} ${G[8]} ${G[9]}\n`)

            } else {

              msg.channel.send("You cant place that ship there!")

            }

          }

        } else if(args[2].toString() == "C" && AllShips1[1] != 0) {

          if(args[3].toString() == "V") {

            msg.channel.send("Thats not possible!")

          } else if (args[3].toString() == "H") {

            if(B[temp] == "x" && B[temp + 1] == "x" && B[temp + 2] == "x" && B[temp + 3] == "x" && B[temp + 4] == "x" && C[temp] == "x" && C[temp + 1] == "x" && C[temp + 2] == "x" && C[temp + 3] == "x" && C[temp + 4] == "x" && D[temp] == "x" && D[temp + 1] == "x" && D[temp + 2] == "x" && D[temp + 3] == "x" && D[temp + 4] == "x") {

              C[temp] = "p";
              C[temp + 1] = "p"; 
              C[temp + 2] = "p"; 
              C[temp + 3] = "p"

              AllShips1[1] -= 1;

              Embeds.error(ChannelFP1, `/ 1 2 3 4 5 6 7 8 9 10\na ${A[0]} ${A[1]} ${A[2]} ${A[3]} ${A[4]} ${A[5]} ${A[6]} ${A[7]} ${A[8]} ${A[9]}\nb ${B[0]} ${B[1]} ${B[2]} ${B[3]} ${B[4]} ${B[5]} ${B[6]} ${B[7]} ${B[8]} ${B[9]}\nc ${C[0]} ${C[1]} ${C[2]} ${C[3]} ${C[4]} ${C[5]} ${C[6]} ${C[7]} ${C[8]} ${C[9]}\nd ${D[0]} ${D[1]} ${D[2]} ${D[3]} ${D[4]} ${D[5]} ${D[6]} ${D[7]} ${D[8]} ${D[9]}\ne ${E[0]} ${E[1]} ${E[2]} ${E[3]} ${E[4]} ${E[5]} ${E[6]} ${E[7]} ${E[8]} ${E[9]}\nf ${F[0]} ${F[1]} ${F[2]} ${F[3]} ${F[4]} ${F[5]} ${F[6]} ${F[7]} ${F[8]} ${F[9]}\ng ${G[0]} ${G[1]} ${G[2]} ${G[3]} ${G[4]} ${G[5]} ${G[6]} ${G[7]} ${G[8]} ${G[9]}\n`)

            } else {

              msg.channel.send("You cant place that ship there!")

            }

          }

        } else if(args[2].toString() == "F" && AllShips1[2] != 0) {

          if(args[3].toString() == "V") {

            if(A[temp] == "x" && B[temp] == "x" && A[temp + 1] == "x" && B[temp + 1] == "x" && C[temp] == "x" && C[temp + 1] == "x" && D[temp] == "x" && D[temp + 1] == "x") {

              A[temp] = "p";
              B[temp] = "p";
              C[temp] = "p"; 

              AllShips1[2] -= 1;

              Embeds.error(ChannelFP1, `/ 1 2 3 4 5 6 7 8 9 10\na ${A[0]} ${A[1]} ${A[2]} ${A[3]} ${A[4]} ${A[5]} ${A[6]} ${A[7]} ${A[8]} ${A[9]}\nb ${B[0]} ${B[1]} ${B[2]} ${B[3]} ${B[4]} ${B[5]} ${B[6]} ${B[7]} ${B[8]} ${B[9]}\nc ${C[0]} ${C[1]} ${C[2]} ${C[3]} ${C[4]} ${C[5]} ${C[6]} ${C[7]} ${C[8]} ${C[9]}\nd ${D[0]} ${D[1]} ${D[2]} ${D[3]} ${D[4]} ${D[5]} ${D[6]} ${D[7]} ${D[8]} ${D[9]}\ne ${E[0]} ${E[1]} ${E[2]} ${E[3]} ${E[4]} ${E[5]} ${E[6]} ${E[7]} ${E[8]} ${E[9]}\nf ${F[0]} ${F[1]} ${F[2]} ${F[3]} ${F[4]} ${F[5]} ${F[6]} ${F[7]} ${F[8]} ${F[9]}\ng ${G[0]} ${G[1]} ${G[2]} ${G[3]} ${G[4]} ${G[5]} ${G[6]} ${G[7]} ${G[8]} ${G[9]}\n`)

            } else {

              msg.channel.send("You cant place that ship there!")

            }

          } else if (args[3].toString() == "H") {

            if(B[temp] == "x" && B[temp + 1] == "x" && B[temp + 2] == "x" && B[temp + 3] == "x" && C[temp] == "x" && C[temp + 1] == "x" && C[temp + 2] == "x" && C[temp + 3] == "x" && D[temp] == "x" && D[temp + 1] == "x" && D[temp + 2] == "x" && D[temp + 3] == "x") {

              C[temp] = "p";
              C[temp + 1] = "p"; 
              C[temp + 2] = "p"; 

              AllShips1[2] -= 1;

              Embeds.error(ChannelFP1, `/ 1 2 3 4 5 6 7 8 9 10\na ${A[0]} ${A[1]} ${A[2]} ${A[3]} ${A[4]} ${A[5]} ${A[6]} ${A[7]} ${A[8]} ${A[9]}\nb ${B[0]} ${B[1]} ${B[2]} ${B[3]} ${B[4]} ${B[5]} ${B[6]} ${B[7]} ${B[8]} ${B[9]}\nc ${C[0]} ${C[1]} ${C[2]} ${C[3]} ${C[4]} ${C[5]} ${C[6]} ${C[7]} ${C[8]} ${C[9]}\nd ${D[0]} ${D[1]} ${D[2]} ${D[3]} ${D[4]} ${D[5]} ${D[6]} ${D[7]} ${D[8]} ${D[9]}\ne ${E[0]} ${E[1]} ${E[2]} ${E[3]} ${E[4]} ${E[5]} ${E[6]} ${E[7]} ${E[8]} ${E[9]}\nf ${F[0]} ${F[1]} ${F[2]} ${F[3]} ${F[4]} ${F[5]} ${F[6]} ${F[7]} ${F[8]} ${F[9]}\ng ${G[0]} ${G[1]} ${G[2]} ${G[3]} ${G[4]} ${G[5]} ${G[6]} ${G[7]} ${G[8]} ${G[9]}\n`)

            } else {

              msg.channel.send("You cant place that ship there!")

            }

          }

        } else if(args[2].toString() == "M" && AllShips1[3] != 0) {

          if(args[3].toString() == "V") {

            if(temp == 0) {

              if(A[temp] == "x" && B[temp] == "x" && A[temp + 1] == "x" && B[temp + 1] == "x" && C[temp] == "x" && C[temp + 1] == "x" && D[temp] == "x" && D[temp + 1] == "x") {

                B[temp] = "p";
                C[temp] = "p"; 

                AllShips1[3] -= 1;

                Embeds.error(ChannelFP1, `/ 1 2 3 4 5 6 7 8 9 10\na ${A[0]} ${A[1]} ${A[2]} ${A[3]} ${A[4]} ${A[5]} ${A[6]} ${A[7]} ${A[8]} ${A[9]}\nb ${B[0]} ${B[1]} ${B[2]} ${B[3]} ${B[4]} ${B[5]} ${B[6]} ${B[7]} ${B[8]} ${B[9]}\nc ${C[0]} ${C[1]} ${C[2]} ${C[3]} ${C[4]} ${C[5]} ${C[6]} ${C[7]} ${C[8]} ${C[9]}\nd ${D[0]} ${D[1]} ${D[2]} ${D[3]} ${D[4]} ${D[5]} ${D[6]} ${D[7]} ${D[8]} ${D[9]}\ne ${E[0]} ${E[1]} ${E[2]} ${E[3]} ${E[4]} ${E[5]} ${E[6]} ${E[7]} ${E[8]} ${E[9]}\nf ${F[0]} ${F[1]} ${F[2]} ${F[3]} ${F[4]} ${F[5]} ${F[6]} ${F[7]} ${F[8]} ${F[9]}\ng ${G[0]} ${G[1]} ${G[2]} ${G[3]} ${G[4]} ${G[5]} ${G[6]} ${G[7]} ${G[8]} ${G[9]}\n`)

              } else {

                msg.channel.send("You cant place that ship there!")

              }

            }

          } else if (args[3].toString() == "H") {

            if(B[temp] == "x" && B[temp + 1] == "x" && B[temp + 2] == "x" && C[temp] == "x" && C[temp + 1] == "x" && C[temp + 2] == "x" && D[temp] == "x" && D[temp + 1] == "x" && D[temp + 2] == "x") {

              C[temp] = "p";
              C[temp + 1] = "p"; 

              AllShips1[3] -= 1;

              Embeds.error(ChannelFP1, `/ 1 2 3 4 5 6 7 8 9 10\na ${A[0]} ${A[1]} ${A[2]} ${A[3]} ${A[4]} ${A[5]} ${A[6]} ${A[7]} ${A[8]} ${A[9]}\nb ${B[0]} ${B[1]} ${B[2]} ${B[3]} ${B[4]} ${B[5]} ${B[6]} ${B[7]} ${B[8]} ${B[9]}\nc ${C[0]} ${C[1]} ${C[2]} ${C[3]} ${C[4]} ${C[5]} ${C[6]} ${C[7]} ${C[8]} ${C[9]}\nd ${D[0]} ${D[1]} ${D[2]} ${D[3]} ${D[4]} ${D[5]} ${D[6]} ${D[7]} ${D[8]} ${D[9]}\ne ${E[0]} ${E[1]} ${E[2]} ${E[3]} ${E[4]} ${E[5]} ${E[6]} ${E[7]} ${E[8]} ${E[9]}\nf ${F[0]} ${F[1]} ${F[2]} ${F[3]} ${F[4]} ${F[5]} ${F[6]} ${F[7]} ${F[8]} ${F[9]}\ng ${G[0]} ${G[1]} ${G[2]} ${G[3]} ${G[4]} ${G[5]} ${G[6]} ${G[7]} ${G[8]} ${G[9]}\n`)

            } else {

              msg.channel.send("You cant place that ship there!")

            }

          }

        } else {

          msg.channel.send("You used all ships of this kind")

        }

      }

    } else if(args[0].toString() == "D") {

      var temp = parseInt(args[1] - 1)
    
      if(temp > 0) {
    
        if(args[2].toString() == "B" && AllShips1[0] != 0) {
    
          if(args[3].toString() == "V") {
    
            msg.channel.send("Thats not possible!")
    
          } else if (args[3].toString() == "H") {
    
            if(temp + 5 == 10) {
    
              if(C[temp] == "x" && C[temp + 1] == "x" && C[temp + 2] == "x" && C[temp + 3] == "x" && C[temp + 4] == "x" && C[temp - 1] == "x" && D[temp] == "x" && D[temp + 1] == "x" && D[temp + 2] == "x" && D[temp + 3] == "x" && D[temp + 4] == "x" && D[temp - 1] == "x" && E[temp] == "x" && E[temp + 1] == "x" && E[temp + 2] == "x" && E[temp + 3] == "x" && E[temp + 4] == "x" && E[temp - 1] == "x") {
    
                D[temp] = "p";
                D[temp + 1] = "p"; 
                D[temp + 2] = "p"; 
                D[temp + 3] = "p";
                D[temp + 4] = "p";
    
                AllShips1[0] -= 1;
    
                Embeds.error(ChannelFP1, `/ 1 2 3 4 5 6 7 8 9 10\na ${A[0]} ${A[1]} ${A[2]} ${A[3]} ${A[4]} ${A[5]} ${A[6]} ${A[7]} ${A[8]} ${A[9]}\nb ${B[0]} ${B[1]} ${B[2]} ${B[3]} ${B[4]} ${B[5]} ${B[6]} ${B[7]} ${B[8]} ${B[9]}\nc ${C[0]} ${C[1]} ${C[2]} ${C[3]} ${C[4]} ${C[5]} ${C[6]} ${C[7]} ${C[8]} ${C[9]}\nd ${D[0]} ${D[1]} ${D[2]} ${D[3]} ${D[4]} ${D[5]} ${D[6]} ${D[7]} ${D[8]} ${D[9]}\ne ${E[0]} ${E[1]} ${E[2]} ${E[3]} ${E[4]} ${E[5]} ${E[6]} ${E[7]} ${E[8]} ${E[9]}\nf ${F[0]} ${F[1]} ${F[2]} ${F[3]} ${F[4]} ${F[5]} ${F[6]} ${F[7]} ${F[8]} ${F[9]}\ng ${G[0]} ${G[1]} ${G[2]} ${G[3]} ${G[4]} ${G[5]} ${G[6]} ${G[7]} ${G[8]} ${G[9]}\n`)
    
              } else {
    
                msg.channel.send("You cant place that ship there!")
    
              }
              
            } else if (temp + 5 < 10) {
    
            if(C[temp] == "x" && C[temp + 1] == "x" && C[temp + 2] == "x" && C[temp + 3] == "x" && C[temp + 4] == "x" && C[temp + 5] == "x" && C[temp - 1] == "x" && D[temp] == "x" && D[temp + 1] == "x" && D[temp + 2] == "x" && D[temp + 3] == "x" && D[temp + 4] == "x" && D[temp - 1] == "x" && D[temp +5] == "x" && E[temp] == "x" && E[temp + 1] == "x" && E[temp + 2] == "x" && E[temp + 3] == "x" && E[temp + 4] == "x" && E[temp - 1] == "x" && E[temp + 5] == "x") {
    
              D[temp] = "p";
              D[temp + 1] = "p"; 
              D[temp + 2] = "p"; 
              D[temp + 3] = "p";
              D[temp + 4] = "p";
    
              AllShips1[0] -= 1;
    
              Embeds.error(ChannelFP1, `/ 1 2 3 4 5 6 7 8 9 10\na ${A[0]} ${A[1]} ${A[2]} ${A[3]} ${A[4]} ${A[5]} ${A[6]} ${A[7]} ${A[8]} ${A[9]}\nb ${B[0]} ${B[1]} ${B[2]} ${B[3]} ${B[4]} ${B[5]} ${B[6]} ${B[7]} ${B[8]} ${B[9]}\nc ${C[0]} ${C[1]} ${C[2]} ${C[3]} ${C[4]} ${C[5]} ${C[6]} ${C[7]} ${C[8]} ${C[9]}\nd ${D[0]} ${D[1]} ${D[2]} ${D[3]} ${D[4]} ${D[5]} ${D[6]} ${D[7]} ${D[8]} ${D[9]}\ne ${E[0]} ${E[1]} ${E[2]} ${E[3]} ${E[4]} ${E[5]} ${E[6]} ${E[7]} ${E[8]} ${E[9]}\nf ${F[0]} ${F[1]} ${F[2]} ${F[3]} ${F[4]} ${F[5]} ${F[6]} ${F[7]} ${F[8]} ${F[9]}\ng ${G[0]} ${G[1]} ${G[2]} ${G[3]} ${G[4]} ${G[5]} ${G[6]} ${G[7]} ${G[8]} ${G[9]}\n`)
    
            } else {
    
              msg.channel.send("You cant place that ship there!")
    
            }
    
          }
    
          }
    
        } else if(args[2].toString() == "C" && AllShips1[1] != 0) {
    
          if(args[3].toString() == "V") {
    
            if (temp > 0 && temp < 9) {
    
              if(A[temp] == "x" && B[temp] == "x" && A[temp + 1] == "x" && B[temp + 1] == "x" && C[temp] == "x" && C[temp + 1] == "x" && A[temp - 1] == "x" && B[temp - 1] == "x" && C[temp - 1] == "x" && D[temp] == "x" && D[temp + 1] == "x" && D[temp - 1] == "x" && E[temp] == "x" && E[temp - 1] == "x" && E[temp + 1] == "x") {
    
                A[temp] = "p";
                B[temp] = "p";
                C[temp] = "p"; 
                D[temp] = "p";
    
                AllShips1[1] -= 1;
    
                Embeds.error(ChannelFP1, `/ 1 2 3 4 5 6 7 8 9 10\na ${A[0]} ${A[1]} ${A[2]} ${A[3]} ${A[4]} ${A[5]} ${A[6]} ${A[7]} ${A[8]} ${A[9]}\nb ${B[0]} ${B[1]} ${B[2]} ${B[3]} ${B[4]} ${B[5]} ${B[6]} ${B[7]} ${B[8]} ${B[9]}\nc ${C[0]} ${C[1]} ${C[2]} ${C[3]} ${C[4]} ${C[5]} ${C[6]} ${C[7]} ${C[8]} ${C[9]}\nd ${D[0]} ${D[1]} ${D[2]} ${D[3]} ${D[4]} ${D[5]} ${D[6]} ${D[7]} ${D[8]} ${D[9]}\ne ${E[0]} ${E[1]} ${E[2]} ${E[3]} ${E[4]} ${E[5]} ${E[6]} ${E[7]} ${E[8]} ${E[9]}\nf ${F[0]} ${F[1]} ${F[2]} ${F[3]} ${F[4]} ${F[5]} ${F[6]} ${F[7]} ${F[8]} ${F[9]}\ng ${G[0]} ${G[1]} ${G[2]} ${G[3]} ${G[4]} ${G[5]} ${G[6]} ${G[7]} ${G[8]} ${G[9]}\n`)
    
              }
    
            } else if (temp == 9) {
    
              if(A[temp] == "x" && B[temp] == "x" && C[temp] == "x" && A[temp - 1] == "x" && B[temp - 1] == "x" && C[temp - 1] == "x" && D[temp] == "x" && D[temp - 1] == "x" && E[temp] == "x" && E[temp - 1] == "x") {
    
                A[temp] = "p";
                B[temp] = "p"; 
                C[temp] = "p";
                D[temp] = "p";
    
                AllShips1[1] -= 1;
    
                Embeds.error(ChannelFP1, `/ 1 2 3 4 5 6 7 8 9 10\na ${A[0]} ${A[1]} ${A[2]} ${A[3]} ${A[4]} ${A[5]} ${A[6]} ${A[7]} ${A[8]} ${A[9]}\nb ${B[0]} ${B[1]} ${B[2]} ${B[3]} ${B[4]} ${B[5]} ${B[6]} ${B[7]} ${B[8]} ${B[9]}\nc ${C[0]} ${C[1]} ${C[2]} ${C[3]} ${C[4]} ${C[5]} ${C[6]} ${C[7]} ${C[8]} ${C[9]}\nd ${D[0]} ${D[1]} ${D[2]} ${D[3]} ${D[4]} ${D[5]} ${D[6]} ${D[7]} ${D[8]} ${D[9]}\ne ${E[0]} ${E[1]} ${E[2]} ${E[3]} ${E[4]} ${E[5]} ${E[6]} ${E[7]} ${E[8]} ${E[9]}\nf ${F[0]} ${F[1]} ${F[2]} ${F[3]} ${F[4]} ${F[5]} ${F[6]} ${F[7]} ${F[8]} ${F[9]}\ng ${G[0]} ${G[1]} ${G[2]} ${G[3]} ${G[4]} ${G[5]} ${G[6]} ${G[7]} ${G[8]} ${G[9]}\n`)
    
              }
    
            } else {
    
              msg.channel.send("You cant place that ship there!")
    
            }
    
          } else if (args[3].toString() == "H") {
    
            if(temp + 4 == 10) {
    
              if(C[temp] == "x" && C[temp + 1] == "x" && C[temp + 2] == "x" && C[temp + 3] == "x" && C[temp - 1] == "x" && D[temp] == "x" && D[temp + 1] == "x" && D[temp + 2] == "x" && D[temp + 3] == "x" && D[temp - 1] == "x" && E[temp] == "x" && E[temp + 1] == "x" && E[temp + 2] == "x" && E[temp + 3] == "x" && E[temp - 1] == "x") {
    
                D[temp] = "p";
                D[temp + 1] = "p"; 
                D[temp + 2] = "p"; 
                D[temp + 3] = "p";
    
                AllShips1[1] -= 1;
    
                Embeds.error(ChannelFP1, `/ 1 2 3 4 5 6 7 8 9 10\na ${A[0]} ${A[1]} ${A[2]} ${A[3]} ${A[4]} ${A[5]} ${A[6]} ${A[7]} ${A[8]} ${A[9]}\nb ${B[0]} ${B[1]} ${B[2]} ${B[3]} ${B[4]} ${B[5]} ${B[6]} ${B[7]} ${B[8]} ${B[9]}\nc ${C[0]} ${C[1]} ${C[2]} ${C[3]} ${C[4]} ${C[5]} ${C[6]} ${C[7]} ${C[8]} ${C[9]}\nd ${D[0]} ${D[1]} ${D[2]} ${D[3]} ${D[4]} ${D[5]} ${D[6]} ${D[7]} ${D[8]} ${D[9]}\ne ${E[0]} ${E[1]} ${E[2]} ${E[3]} ${E[4]} ${E[5]} ${E[6]} ${E[7]} ${E[8]} ${E[9]}\nf ${F[0]} ${F[1]} ${F[2]} ${F[3]} ${F[4]} ${F[5]} ${F[6]} ${F[7]} ${F[8]} ${F[9]}\ng ${G[0]} ${G[1]} ${G[2]} ${G[3]} ${G[4]} ${G[5]} ${G[6]} ${G[7]} ${G[8]} ${G[9]}\n`)
    
              } else {
    
                msg.channel.send("You cant place that ship there!")
    
              }
    
            } else if (temp + 4 < 10) {
    
              if(C[temp] == "x" && C[temp + 1] == "x" && C[temp + 2] == "x" && C[temp + 3] == "x" && C[temp + 4] == "x" && C[temp - 1] == "x" && D[temp] == "x" && D[temp + 1] == "x" && D[temp + 2] == "x" && D[temp + 3] == "x" && D[temp + 4] == "x" && D[temp - 1] == "x" && E[temp] == "x" && E[temp + 1] == "x" && E[temp + 2] == "x" && E[temp + 3] == "x" && E[temp + 4] == "x" && E[temp - 1] == "x") {
    
              D[temp] = "p";
              D[temp + 1] = "p"; 
              D[temp + 2] = "p"; 
              D[temp + 3] = "p"
    
              AllShips1[1] -= 1;
    
              Embeds.error(ChannelFP1, `/ 1 2 3 4 5 6 7 8 9 10\na ${A[0]} ${A[1]} ${A[2]} ${A[3]} ${A[4]} ${A[5]} ${A[6]} ${A[7]} ${A[8]} ${A[9]}\nb ${B[0]} ${B[1]} ${B[2]} ${B[3]} ${B[4]} ${B[5]} ${B[6]} ${B[7]} ${B[8]} ${B[9]}\nc ${C[0]} ${C[1]} ${C[2]} ${C[3]} ${C[4]} ${C[5]} ${C[6]} ${C[7]} ${C[8]} ${C[9]}\nd ${D[0]} ${D[1]} ${D[2]} ${D[3]} ${D[4]} ${D[5]} ${D[6]} ${D[7]} ${D[8]} ${D[9]}\ne ${E[0]} ${E[1]} ${E[2]} ${E[3]} ${E[4]} ${E[5]} ${E[6]} ${E[7]} ${E[8]} ${E[9]}\nf ${F[0]} ${F[1]} ${F[2]} ${F[3]} ${F[4]} ${F[5]} ${F[6]} ${F[7]} ${F[8]} ${F[9]}\ng ${G[0]} ${G[1]} ${G[2]} ${G[3]} ${G[4]} ${G[5]} ${G[6]} ${G[7]} ${G[8]} ${G[9]}\n`)
    
            } else {
    
              msg.channel.send("You cant place that ship there!")
    
            }
    
          }
    
          }
    
        } else if(args[2].toString() == "F" && AllShips1[2] != 0) {
    
          if(args[3].toString() == "V") {
    
            if (temp > 0 && temp < 9) {
    
              if(A[temp] == "x" && B[temp] == "x" && A[temp + 1] == "x" && B[temp + 1] == "x" && C[temp] == "x" && C[temp + 1] == "x" && A[temp - 1] == "x" && B[temp - 1] == "x" && C[temp - 1] == "x" && D[temp] == "x" && D[temp + 1] == "x" && D[temp - 1] == "x" && E[temp] == "x" && E[temp - 1] == "x" && E[temp + 1] == "x") {
    
                B[temp] = "p";
                C[temp] = "p";
                D[temp] = "p"; 
    
                AllShips1[2] -= 1;
    
                Embeds.error(ChannelFP1, `/ 1 2 3 4 5 6 7 8 9 10\na ${A[0]} ${A[1]} ${A[2]} ${A[3]} ${A[4]} ${A[5]} ${A[6]} ${A[7]} ${A[8]} ${A[9]}\nb ${B[0]} ${B[1]} ${B[2]} ${B[3]} ${B[4]} ${B[5]} ${B[6]} ${B[7]} ${B[8]} ${B[9]}\nc ${C[0]} ${C[1]} ${C[2]} ${C[3]} ${C[4]} ${C[5]} ${C[6]} ${C[7]} ${C[8]} ${C[9]}\nd ${D[0]} ${D[1]} ${D[2]} ${D[3]} ${D[4]} ${D[5]} ${D[6]} ${D[7]} ${D[8]} ${D[9]}\ne ${E[0]} ${E[1]} ${E[2]} ${E[3]} ${E[4]} ${E[5]} ${E[6]} ${E[7]} ${E[8]} ${E[9]}\nf ${F[0]} ${F[1]} ${F[2]} ${F[3]} ${F[4]} ${F[5]} ${F[6]} ${F[7]} ${F[8]} ${F[9]}\ng ${G[0]} ${G[1]} ${G[2]} ${G[3]} ${G[4]} ${G[5]} ${G[6]} ${G[7]} ${G[8]} ${G[9]}\n`)
    
              }
    
            } else if (temp == 9) {
    
              if(A[temp] == "x" && B[temp] == "x" && C[temp] == "x" && A[temp - 1] == "x" && B[temp - 1] == "x" && C[temp - 1] == "x" && D[temp] == "x" && D[temp - 1] == "x" && E[temp] == "x" && E[temp - 1] == "x") {
    
                B[temp] = "p";
                C[temp] = "p"; 
                D[temp] = "p";
    
                AllShips1[2] -= 1;
    
                Embeds.error(ChannelFP1, `/ 1 2 3 4 5 6 7 8 9 10\na ${A[0]} ${A[1]} ${A[2]} ${A[3]} ${A[4]} ${A[5]} ${A[6]} ${A[7]} ${A[8]} ${A[9]}\nb ${B[0]} ${B[1]} ${B[2]} ${B[3]} ${B[4]} ${B[5]} ${B[6]} ${B[7]} ${B[8]} ${B[9]}\nc ${C[0]} ${C[1]} ${C[2]} ${C[3]} ${C[4]} ${C[5]} ${C[6]} ${C[7]} ${C[8]} ${C[9]}\nd ${D[0]} ${D[1]} ${D[2]} ${D[3]} ${D[4]} ${D[5]} ${D[6]} ${D[7]} ${D[8]} ${D[9]}\ne ${E[0]} ${E[1]} ${E[2]} ${E[3]} ${E[4]} ${E[5]} ${E[6]} ${E[7]} ${E[8]} ${E[9]}\nf ${F[0]} ${F[1]} ${F[2]} ${F[3]} ${F[4]} ${F[5]} ${F[6]} ${F[7]} ${F[8]} ${F[9]}\ng ${G[0]} ${G[1]} ${G[2]} ${G[3]} ${G[4]} ${G[5]} ${G[6]} ${G[7]} ${G[8]} ${G[9]}\n`)
    
              }
    
            } else {
    
              msg.channel.send("You cant place that ship there!")
    
            }
    
          } else if (args[3].toString() == "H") {
    
            if(temp + 3 == 10) {
    
              if(C[temp] == "x" && C[temp + 1] == "x" && C[temp + 2] == "x" && C[temp - 1] == "x" && D[temp] == "x" && D[temp + 1] == "x" && D[temp + 2] == "x" && D[temp - 1] == "x" && E[temp] == "x" && E[temp + 1] == "x" && E[temp + 2] == "x" && E[temp - 1] == "x") {
    
                D[temp] = "p";
                D[temp + 1] = "p"; 
                D[temp + 2] = "p"; 
    
                AllShips1[2] -= 1;
    
                Embeds.error(ChannelFP1, `/ 1 2 3 4 5 6 7 8 9 10\na ${A[0]} ${A[1]} ${A[2]} ${A[3]} ${A[4]} ${A[5]} ${A[6]} ${A[7]} ${A[8]} ${A[9]}\nb ${B[0]} ${B[1]} ${B[2]} ${B[3]} ${B[4]} ${B[5]} ${B[6]} ${B[7]} ${B[8]} ${B[9]}\nc ${C[0]} ${C[1]} ${C[2]} ${C[3]} ${C[4]} ${C[5]} ${C[6]} ${C[7]} ${C[8]} ${C[9]}\nd ${D[0]} ${D[1]} ${D[2]} ${D[3]} ${D[4]} ${D[5]} ${D[6]} ${D[7]} ${D[8]} ${D[9]}\ne ${E[0]} ${E[1]} ${E[2]} ${E[3]} ${E[4]} ${E[5]} ${E[6]} ${E[7]} ${E[8]} ${E[9]}\nf ${F[0]} ${F[1]} ${F[2]} ${F[3]} ${F[4]} ${F[5]} ${F[6]} ${F[7]} ${F[8]} ${F[9]}\ng ${G[0]} ${G[1]} ${G[2]} ${G[3]} ${G[4]} ${G[5]} ${G[6]} ${G[7]} ${G[8]} ${G[9]}\n`)
    
              } else {
    
                msg.channel.send("You cant place that ship there!")
    
              }
    
            } else if (temp + 3 < 10) {
    
              if(C[temp] == "x" && C[temp + 1] == "x" && C[temp + 2] == "x" && C[temp + 3] == "x" && C[temp - 1] == "x" && D[temp] == "x" && D[temp + 1] == "x" && D[temp + 2] == "x" && D[temp + 3] == "x" && D[temp - 1] == "x" && E[temp] == "x" && E[temp + 1] == "x" && E[temp + 2] == "x" && E[temp + 3] == "x" && E[temp - 1] == "x") {
    
              D[temp] = "p";
              D[temp + 1] = "p"; 
              D[temp + 2] = "p"; 
    
              AllShips1[2] -= 1;
    
              Embeds.error(ChannelFP1, `/ 1 2 3 4 5 6 7 8 9 10\na ${A[0]} ${A[1]} ${A[2]} ${A[3]} ${A[4]} ${A[5]} ${A[6]} ${A[7]} ${A[8]} ${A[9]}\nb ${B[0]} ${B[1]} ${B[2]} ${B[3]} ${B[4]} ${B[5]} ${B[6]} ${B[7]} ${B[8]} ${B[9]}\nc ${C[0]} ${C[1]} ${C[2]} ${C[3]} ${C[4]} ${C[5]} ${C[6]} ${C[7]} ${C[8]} ${C[9]}\nd ${D[0]} ${D[1]} ${D[2]} ${D[3]} ${D[4]} ${D[5]} ${D[6]} ${D[7]} ${D[8]} ${D[9]}\ne ${E[0]} ${E[1]} ${E[2]} ${E[3]} ${E[4]} ${E[5]} ${E[6]} ${E[7]} ${E[8]} ${E[9]}\nf ${F[0]} ${F[1]} ${F[2]} ${F[3]} ${F[4]} ${F[5]} ${F[6]} ${F[7]} ${F[8]} ${F[9]}\ng ${G[0]} ${G[1]} ${G[2]} ${G[3]} ${G[4]} ${G[5]} ${G[6]} ${G[7]} ${G[8]} ${G[9]}\n`)
    
            } else {
    
              msg.channel.send("You cant place that ship there!")
    
            }
    
          }
    
          }
    
        } else if(args[2].toString() == "M" && AllShips1[3] != 0) {
    
          if(args[3].toString() == "V") {
    
            if (temp > 0 && temp < 9) {
    
              if(B[temp] == "x" && B[temp + 1] == "x" && C[temp] == "x" && C[temp + 1] == "x" && B[temp - 1] == "x" && C[temp - 1] == "x" && D[temp] == "x" && D[temp + 1] == "x" && D[temp - 1] == "x" && E[temp] == "x" && E[temp - 1] == "x" && E[temp + 1] == "x") {
    
                D[temp] = "p";
                C[temp] = "p"; 
    
                AllShips1[3] -= 1;
    
                Embeds.error(ChannelFP1, `/ 1 2 3 4 5 6 7 8 9 10\na ${A[0]} ${A[1]} ${A[2]} ${A[3]} ${A[4]} ${A[5]} ${A[6]} ${A[7]} ${A[8]} ${A[9]}\nb ${B[0]} ${B[1]} ${B[2]} ${B[3]} ${B[4]} ${B[5]} ${B[6]} ${B[7]} ${B[8]} ${B[9]}\nc ${C[0]} ${C[1]} ${C[2]} ${C[3]} ${C[4]} ${C[5]} ${C[6]} ${C[7]} ${C[8]} ${C[9]}\nd ${D[0]} ${D[1]} ${D[2]} ${D[3]} ${D[4]} ${D[5]} ${D[6]} ${D[7]} ${D[8]} ${D[9]}\ne ${E[0]} ${E[1]} ${E[2]} ${E[3]} ${E[4]} ${E[5]} ${E[6]} ${E[7]} ${E[8]} ${E[9]}\nf ${F[0]} ${F[1]} ${F[2]} ${F[3]} ${F[4]} ${F[5]} ${F[6]} ${F[7]} ${F[8]} ${F[9]}\ng ${G[0]} ${G[1]} ${G[2]} ${G[3]} ${G[4]} ${G[5]} ${G[6]} ${G[7]} ${G[8]} ${G[9]}\n`)
    
              }
    
            } else if (temp == 9) {
    
              if(B[temp] == "x" && B[temp - 1] == "x" && C[temp] == "x" && C[temp - 1] == "x" && D[temp] == "x" && D[temp - 1] == "x" && E[temp] == "x" && E[temp - 1] == "x") {
    
                D[temp] = "p";
                C[temp] = "p"; 
    
                AllShips1[3] -= 1;
    
                Embeds.error(ChannelFP1, `/ 1 2 3 4 5 6 7 8 9 10\na ${A[0]} ${A[1]} ${A[2]} ${A[3]} ${A[4]} ${A[5]} ${A[6]} ${A[7]} ${A[8]} ${A[9]}\nb ${B[0]} ${B[1]} ${B[2]} ${B[3]} ${B[4]} ${B[5]} ${B[6]} ${B[7]} ${B[8]} ${B[9]}\nc ${C[0]} ${C[1]} ${C[2]} ${C[3]} ${C[4]} ${C[5]} ${C[6]} ${C[7]} ${C[8]} ${C[9]}\nd ${D[0]} ${D[1]} ${D[2]} ${D[3]} ${D[4]} ${D[5]} ${D[6]} ${D[7]} ${D[8]} ${D[9]}\ne ${E[0]} ${E[1]} ${E[2]} ${E[3]} ${E[4]} ${E[5]} ${E[6]} ${E[7]} ${E[8]} ${E[9]}\nf ${F[0]} ${F[1]} ${F[2]} ${F[3]} ${F[4]} ${F[5]} ${F[6]} ${F[7]} ${F[8]} ${F[9]}\ng ${G[0]} ${G[1]} ${G[2]} ${G[3]} ${G[4]} ${G[5]} ${G[6]} ${G[7]} ${G[8]} ${G[9]}\n`)
    
              }
    
            } else {
    
              msg.channel.send("You cant place that ship there!")
    
            }
    
          } else if (args[3].toString() == "H") {
    
            if(temp + 2 == 10) {
    
              if(C[temp] == "x" && C[temp + 1] == "x" && C[temp - 1] == "x" && D[temp] == "x" && D[temp + 1] == "x" && D[temp - 1] == "x" && E[temp] == "x" && E[temp + 1] == "x" && E[temp - 1] == "x") {
    
                D[temp] = "p";
                D[temp + 1] = "p"; 
    
                AllShips1[3] -= 1;
    
                Embeds.error(ChannelFP1, `/ 1 2 3 4 5 6 7 8 9 10\na ${A[0]} ${A[1]} ${A[2]} ${A[3]} ${A[4]} ${A[5]} ${A[6]} ${A[7]} ${A[8]} ${A[9]}\nb ${B[0]} ${B[1]} ${B[2]} ${B[3]} ${B[4]} ${B[5]} ${B[6]} ${B[7]} ${B[8]} ${B[9]}\nc ${C[0]} ${C[1]} ${C[2]} ${C[3]} ${C[4]} ${C[5]} ${C[6]} ${C[7]} ${C[8]} ${C[9]}\nd ${D[0]} ${D[1]} ${D[2]} ${D[3]} ${D[4]} ${D[5]} ${D[6]} ${D[7]} ${D[8]} ${D[9]}\ne ${E[0]} ${E[1]} ${E[2]} ${E[3]} ${E[4]} ${E[5]} ${E[6]} ${E[7]} ${E[8]} ${E[9]}\nf ${F[0]} ${F[1]} ${F[2]} ${F[3]} ${F[4]} ${F[5]} ${F[6]} ${F[7]} ${F[8]} ${F[9]}\ng ${G[0]} ${G[1]} ${G[2]} ${G[3]} ${G[4]} ${G[5]} ${G[6]} ${G[7]} ${G[8]} ${G[9]}\n`)
    
              } else {
    
                msg.channel.send("You cant place that ship there!")
    
              }
    
            } else if (temp + 2 < 10) {
    
            if(C[temp] == "x" && C[temp + 1] == "x" && C[temp + 2] == "x" && C[temp - 1] == "x" && D[temp] == "x" && D[temp + 1] == "x" && D[temp + 2] == "x" && D[temp - 1] == "x" && E[temp] == "x" && E[temp + 1] == "x" && E[temp + 2] == "x" && E[temp - 1] == "x") {
    
              D[temp] = "p";
              D[temp + 1] = "p"; 
    
              AllShips1[3] -= 1;
    
              Embeds.error(ChannelFP1, `/ 1 2 3 4 5 6 7 8 9 10\na ${A[0]} ${A[1]} ${A[2]} ${A[3]} ${A[4]} ${A[5]} ${A[6]} ${A[7]} ${A[8]} ${A[9]}\nb ${B[0]} ${B[1]} ${B[2]} ${B[3]} ${B[4]} ${B[5]} ${B[6]} ${B[7]} ${B[8]} ${B[9]}\nc ${C[0]} ${C[1]} ${C[2]} ${C[3]} ${C[4]} ${C[5]} ${C[6]} ${C[7]} ${C[8]} ${C[9]}\nd ${D[0]} ${D[1]} ${D[2]} ${D[3]} ${D[4]} ${D[5]} ${D[6]} ${D[7]} ${D[8]} ${D[9]}\ne ${E[0]} ${E[1]} ${E[2]} ${E[3]} ${E[4]} ${E[5]} ${E[6]} ${E[7]} ${E[8]} ${E[9]}\nf ${F[0]} ${F[1]} ${F[2]} ${F[3]} ${F[4]} ${F[5]} ${F[6]} ${F[7]} ${F[8]} ${F[9]}\ng ${G[0]} ${G[1]} ${G[2]} ${G[3]} ${G[4]} ${G[5]} ${G[6]} ${G[7]} ${G[8]} ${G[9]}\n`)
    
            } else {
    
              msg.channel.send("You cant place that ship there!")
    
            }
    
          }
    
          }
    
        } else {
    
          msg.channel.send("You used all ships of this kind")
    
        }
    
      } else if (temp == 0) {
    
        if(args[2].toString() == "B" && AllShips1[0] != 0) {
    
          if(args[3].toString() == "V") {
    
            msg.channel.send("Thats not possible!")
    
          } else if (args[3].toString() == "H") {
    
            if(C[temp] == "x" && C[temp + 1] == "x" && C[temp + 2] == "x" && C[temp + 3] == "x" && C[temp + 4] == "x" && C[temp + 5] == "x" && D[temp] == "x" && D[temp + 1] == "x" && D[temp + 2] == "x" && D[temp + 3] == "x" && D[temp + 4] == "x" && D[temp +5] == "x" && E[temp] == "x" && E[temp + 1] == "x" && E[temp + 2] == "x" && E[temp + 3] == "x" && E[temp + 4] == "x" && E[temp + 5] == "x") {
    
              D[temp] = "p";
              D[temp + 1] = "p"; 
              D[temp + 2] = "p"; 
              D[temp + 3] = "p"
              D[temp + 4] = "p";
    
              AllShips1[0] -= 1;
    
              Embeds.error(ChannelFP1, `/ 1 2 3 4 5 6 7 8 9 10\na ${A[0]} ${A[1]} ${A[2]} ${A[3]} ${A[4]} ${A[5]} ${A[6]} ${A[7]} ${A[8]} ${A[9]}\nb ${B[0]} ${B[1]} ${B[2]} ${B[3]} ${B[4]} ${B[5]} ${B[6]} ${B[7]} ${B[8]} ${B[9]}\nc ${C[0]} ${C[1]} ${C[2]} ${C[3]} ${C[4]} ${C[5]} ${C[6]} ${C[7]} ${C[8]} ${C[9]}\nd ${D[0]} ${D[1]} ${D[2]} ${D[3]} ${D[4]} ${D[5]} ${D[6]} ${D[7]} ${D[8]} ${D[9]}\ne ${E[0]} ${E[1]} ${E[2]} ${E[3]} ${E[4]} ${E[5]} ${E[6]} ${E[7]} ${E[8]} ${E[9]}\nf ${F[0]} ${F[1]} ${F[2]} ${F[3]} ${F[4]} ${F[5]} ${F[6]} ${F[7]} ${F[8]} ${F[9]}\ng ${G[0]} ${G[1]} ${G[2]} ${G[3]} ${G[4]} ${G[5]} ${G[6]} ${G[7]} ${G[8]} ${G[9]}\n`)
    
            } else {
    
              msg.channel.send("You cant place that ship there!")
    
            }
    
          }
    
        } else if(args[2].toString() == "C" && AllShips1[1] != 0) {
    
          if(args[3].toString() == "V") {
    
            if(A[temp] == "x" && B[temp] == "x" && A[temp + 1] == "x" && B[temp + 1] == "x" && C[temp] == "x" && C[temp + 1] == "x" && D[temp] == "x" && D[temp + 1] == "x" && E[temp] == "x" && E[temp + 1] == "x") {
    
              A[temp] = "p";
              B[temp] = "p";
              C[temp] = "p";
              D[temp] = "p"; 
    
              AllShips1[1] -= 1;
    
              Embeds.error(ChannelFP1, `/ 1 2 3 4 5 6 7 8 9 10\na ${A[0]} ${A[1]} ${A[2]} ${A[3]} ${A[4]} ${A[5]} ${A[6]} ${A[7]} ${A[8]} ${A[9]}\nb ${B[0]} ${B[1]} ${B[2]} ${B[3]} ${B[4]} ${B[5]} ${B[6]} ${B[7]} ${B[8]} ${B[9]}\nc ${C[0]} ${C[1]} ${C[2]} ${C[3]} ${C[4]} ${C[5]} ${C[6]} ${C[7]} ${C[8]} ${C[9]}\nd ${D[0]} ${D[1]} ${D[2]} ${D[3]} ${D[4]} ${D[5]} ${D[6]} ${D[7]} ${D[8]} ${D[9]}\ne ${E[0]} ${E[1]} ${E[2]} ${E[3]} ${E[4]} ${E[5]} ${E[6]} ${E[7]} ${E[8]} ${E[9]}\nf ${F[0]} ${F[1]} ${F[2]} ${F[3]} ${F[4]} ${F[5]} ${F[6]} ${F[7]} ${F[8]} ${F[9]}\ng ${G[0]} ${G[1]} ${G[2]} ${G[3]} ${G[4]} ${G[5]} ${G[6]} ${G[7]} ${G[8]} ${G[9]}\n`)
    
            } else {
    
              msg.channel.send("You cant place that ship there!")
    
            }
    
          } else if (args[3].toString() == "H") {
    
            if(C[temp] == "x" && C[temp + 1] == "x" && C[temp + 2] == "x" && C[temp + 3] == "x" && C[temp + 4] == "x" && D[temp] == "x" && D[temp + 1] == "x" && D[temp + 2] == "x" && D[temp + 3] == "x" && D[temp + 4] == "x" && E[temp] == "x" && E[temp + 1] == "x" && E[temp + 2] == "x" && E[temp + 3] == "x" && E[temp + 4] == "x") {
    
              D[temp] = "p";
              D[temp + 1] = "p"; 
              D[temp + 2] = "p"; 
              D[temp + 3] = "p"
    
              AllShips1[1] -= 1;
    
              Embeds.error(ChannelFP1, `/ 1 2 3 4 5 6 7 8 9 10\na ${A[0]} ${A[1]} ${A[2]} ${A[3]} ${A[4]} ${A[5]} ${A[6]} ${A[7]} ${A[8]} ${A[9]}\nb ${B[0]} ${B[1]} ${B[2]} ${B[3]} ${B[4]} ${B[5]} ${B[6]} ${B[7]} ${B[8]} ${B[9]}\nc ${C[0]} ${C[1]} ${C[2]} ${C[3]} ${C[4]} ${C[5]} ${C[6]} ${C[7]} ${C[8]} ${C[9]}\nd ${D[0]} ${D[1]} ${D[2]} ${D[3]} ${D[4]} ${D[5]} ${D[6]} ${D[7]} ${D[8]} ${D[9]}\ne ${E[0]} ${E[1]} ${E[2]} ${E[3]} ${E[4]} ${E[5]} ${E[6]} ${E[7]} ${E[8]} ${E[9]}\nf ${F[0]} ${F[1]} ${F[2]} ${F[3]} ${F[4]} ${F[5]} ${F[6]} ${F[7]} ${F[8]} ${F[9]}\ng ${G[0]} ${G[1]} ${G[2]} ${G[3]} ${G[4]} ${G[5]} ${G[6]} ${G[7]} ${G[8]} ${G[9]}\n`)
    
            } else {
    
              msg.channel.send("You cant place that ship there!")
    
            }
    
          }
    
        } else if(args[2].toString() == "F" && AllShips1[2] != 0) {
    
          if(args[3].toString() == "V") {
    
            if(A[temp] == "x" && B[temp] == "x" && A[temp + 1] == "x" && B[temp + 1] == "x" && C[temp] == "x" && C[temp + 1] == "x" && D[temp] == "x" && D[temp + 1] == "x" && E[temp] == "x" && E[temp + 1] == "x") {
    
              B[temp] = "p";
              C[temp] = "p";
              D[temp] = "p"; 
    
              AllShips1[2] -= 1;
    
              Embeds.error(ChannelFP1, `/ 1 2 3 4 5 6 7 8 9 10\na ${A[0]} ${A[1]} ${A[2]} ${A[3]} ${A[4]} ${A[5]} ${A[6]} ${A[7]} ${A[8]} ${A[9]}\nb ${B[0]} ${B[1]} ${B[2]} ${B[3]} ${B[4]} ${B[5]} ${B[6]} ${B[7]} ${B[8]} ${B[9]}\nc ${C[0]} ${C[1]} ${C[2]} ${C[3]} ${C[4]} ${C[5]} ${C[6]} ${C[7]} ${C[8]} ${C[9]}\nd ${D[0]} ${D[1]} ${D[2]} ${D[3]} ${D[4]} ${D[5]} ${D[6]} ${D[7]} ${D[8]} ${D[9]}\ne ${E[0]} ${E[1]} ${E[2]} ${E[3]} ${E[4]} ${E[5]} ${E[6]} ${E[7]} ${E[8]} ${E[9]}\nf ${F[0]} ${F[1]} ${F[2]} ${F[3]} ${F[4]} ${F[5]} ${F[6]} ${F[7]} ${F[8]} ${F[9]}\ng ${G[0]} ${G[1]} ${G[2]} ${G[3]} ${G[4]} ${G[5]} ${G[6]} ${G[7]} ${G[8]} ${G[9]}\n`)
    
            } else {
    
              msg.channel.send("You cant place that ship there!")
    
            }
    
          } else if (args[3].toString() == "H") {
    
            if(C[temp] == "x" && C[temp + 1] == "x" && C[temp + 2] == "x" && C[temp + 3] == "x" && D[temp] == "x" && D[temp + 1] == "x" && D[temp + 2] == "x" && D[temp + 3] == "x" && E[temp] == "x" && E[temp + 1] == "x" && E[temp + 2] == "x" && E[temp + 3] == "x") {
    
              D[temp] = "p";
              D[temp + 1] = "p"; 
              D[temp + 2] = "p"; 
    
              AllShips1[2] -= 1;
    
              Embeds.error(ChannelFP1, `/ 1 2 3 4 5 6 7 8 9 10\na ${A[0]} ${A[1]} ${A[2]} ${A[3]} ${A[4]} ${A[5]} ${A[6]} ${A[7]} ${A[8]} ${A[9]}\nb ${B[0]} ${B[1]} ${B[2]} ${B[3]} ${B[4]} ${B[5]} ${B[6]} ${B[7]} ${B[8]} ${B[9]}\nc ${C[0]} ${C[1]} ${C[2]} ${C[3]} ${C[4]} ${C[5]} ${C[6]} ${C[7]} ${C[8]} ${C[9]}\nd ${D[0]} ${D[1]} ${D[2]} ${D[3]} ${D[4]} ${D[5]} ${D[6]} ${D[7]} ${D[8]} ${D[9]}\ne ${E[0]} ${E[1]} ${E[2]} ${E[3]} ${E[4]} ${E[5]} ${E[6]} ${E[7]} ${E[8]} ${E[9]}\nf ${F[0]} ${F[1]} ${F[2]} ${F[3]} ${F[4]} ${F[5]} ${F[6]} ${F[7]} ${F[8]} ${F[9]}\ng ${G[0]} ${G[1]} ${G[2]} ${G[3]} ${G[4]} ${G[5]} ${G[6]} ${G[7]} ${G[8]} ${G[9]}\n`)
    
            } else {
    
              msg.channel.send("You cant place that ship there!")
    
            }
    
          }
    
        } else if(args[2].toString() == "M" && AllShips1[3] != 0) {
    
          if(args[3].toString() == "V") {
    
            if(temp == 0) {
    
              if(B[temp] == "x" && C[temp] == "x" && B[temp + 1] == "x" && C[temp + 1] == "x" && D[temp] == "x" && D[temp + 1] == "x" && E[temp] == "x" && E[temp + 1] == "x") {
    
                C[temp] = "p";
                D[temp] = "p"; 
    
                AllShips1[3] -= 1;
    
                Embeds.error(ChannelFP1, `/ 1 2 3 4 5 6 7 8 9 10\na ${A[0]} ${A[1]} ${A[2]} ${A[3]} ${A[4]} ${A[5]} ${A[6]} ${A[7]} ${A[8]} ${A[9]}\nb ${B[0]} ${B[1]} ${B[2]} ${B[3]} ${B[4]} ${B[5]} ${B[6]} ${B[7]} ${B[8]} ${B[9]}\nc ${C[0]} ${C[1]} ${C[2]} ${C[3]} ${C[4]} ${C[5]} ${C[6]} ${C[7]} ${C[8]} ${C[9]}\nd ${D[0]} ${D[1]} ${D[2]} ${D[3]} ${D[4]} ${D[5]} ${D[6]} ${D[7]} ${D[8]} ${D[9]}\ne ${E[0]} ${E[1]} ${E[2]} ${E[3]} ${E[4]} ${E[5]} ${E[6]} ${E[7]} ${E[8]} ${E[9]}\nf ${F[0]} ${F[1]} ${F[2]} ${F[3]} ${F[4]} ${F[5]} ${F[6]} ${F[7]} ${F[8]} ${F[9]}\ng ${G[0]} ${G[1]} ${G[2]} ${G[3]} ${G[4]} ${G[5]} ${G[6]} ${G[7]} ${G[8]} ${G[9]}\n`)
    
              } else {
    
                msg.channel.send("You cant place that ship there!")
    
              }
    
            }
    
          } else if (args[3].toString() == "H") {
    
            if(C[temp] == "x" && C[temp + 1] == "x" && C[temp + 2] == "x" && D[temp] == "x" && D[temp + 1] == "x" && D[temp + 2] == "x" && E[temp] == "x" && E[temp + 1] == "x" && E[temp + 2] == "x") {
    
              D[temp] = "p";
              D[temp + 1] = "p"; 
    
              AllShips1[3] -= 1;
    
              Embeds.error(ChannelFP1, `/ 1 2 3 4 5 6 7 8 9 10\na ${A[0]} ${A[1]} ${A[2]} ${A[3]} ${A[4]} ${A[5]} ${A[6]} ${A[7]} ${A[8]} ${A[9]}\nb ${B[0]} ${B[1]} ${B[2]} ${B[3]} ${B[4]} ${B[5]} ${B[6]} ${B[7]} ${B[8]} ${B[9]}\nc ${C[0]} ${C[1]} ${C[2]} ${C[3]} ${C[4]} ${C[5]} ${C[6]} ${C[7]} ${C[8]} ${C[9]}\nd ${D[0]} ${D[1]} ${D[2]} ${D[3]} ${D[4]} ${D[5]} ${D[6]} ${D[7]} ${D[8]} ${D[9]}\ne ${E[0]} ${E[1]} ${E[2]} ${E[3]} ${E[4]} ${E[5]} ${E[6]} ${E[7]} ${E[8]} ${E[9]}\nf ${F[0]} ${F[1]} ${F[2]} ${F[3]} ${F[4]} ${F[5]} ${F[6]} ${F[7]} ${F[8]} ${F[9]}\ng ${G[0]} ${G[1]} ${G[2]} ${G[3]} ${G[4]} ${G[5]} ${G[6]} ${G[7]} ${G[8]} ${G[9]}\n`)
    
            } else {
    
              msg.channel.send("You cant place that ship there!")
    
            }
    
          }
    
        } else {
    
          msg.channel.send("You used all ships of this kind")
    
        }
    
      }
    
    } else if(args[0].toString() == "E") {

      var temp = parseInt(args[1] - 1)
    
      if(temp > 0) {
    
        if(args[2].toString() == "B" && AllShips1[0] != 0) {
    
          if(args[3].toString() == "V") {
    
            if (temp > 0 && temp < 9) {
    
              if(A[temp] == "x" && B[temp] == "x" && A[temp + 1] == "x" && B[temp + 1] == "x" && C[temp] == "x" && C[temp + 1] == "x" && A[temp - 1] == "x" && B[temp - 1] == "x" && C[temp - 1] == "x" && D[temp] == "x" && D[temp + 1] == "x" && D[temp - 1] == "x" && E[temp] == "x" && E[temp - 1] == "x" && E[temp + 1] == "x" && F[temp] == "x" && F[temp - 1] == "x" && F[temp + 1] == "x") {
    
                A[temp] = "p";
                B[temp] = "p";
                C[temp] = "p"; 
                D[temp] = "p";
                E[temp] = "p";
    
                AllShips1[0] -= 1;
    
                Embeds.error(ChannelFP1, `/ 1 2 3 4 5 6 7 8 9 10\na ${A[0]} ${A[1]} ${A[2]} ${A[3]} ${A[4]} ${A[5]} ${A[6]} ${A[7]} ${A[8]} ${A[9]}\nb ${B[0]} ${B[1]} ${B[2]} ${B[3]} ${B[4]} ${B[5]} ${B[6]} ${B[7]} ${B[8]} ${B[9]}\nc ${C[0]} ${C[1]} ${C[2]} ${C[3]} ${C[4]} ${C[5]} ${C[6]} ${C[7]} ${C[8]} ${C[9]}\nd ${D[0]} ${D[1]} ${D[2]} ${D[3]} ${D[4]} ${D[5]} ${D[6]} ${D[7]} ${D[8]} ${D[9]}\ne ${E[0]} ${E[1]} ${E[2]} ${E[3]} ${E[4]} ${E[5]} ${E[6]} ${E[7]} ${E[8]} ${E[9]}\nf ${F[0]} ${F[1]} ${F[2]} ${F[3]} ${F[4]} ${F[5]} ${F[6]} ${F[7]} ${F[8]} ${F[9]}\ng ${G[0]} ${G[1]} ${G[2]} ${G[3]} ${G[4]} ${G[5]} ${G[6]} ${G[7]} ${G[8]} ${G[9]}\n`)
    
              }
    
            } else if (temp == 9) {
    
              if(A[temp] == "x" && B[temp] == "x" && B[temp - 1] == "x" && C[temp] == "x" && A[temp - 1] == "x" && B[temp - 1] == "x" && C[temp - 1] == "x" && D[temp] == "x" && D[temp - 1] == "x" && E[temp] == "x" && E[temp - 1] == "x" && F[temp] == "x" && F[temp - 1] == "x") {
    
                A[temp] = "p";
                B[temp] = "p"; 
                C[temp] = "p";
                D[temp] = "p";
                E[temp] = "p";
    
                AllShips1[0] -= 1;
    
                Embeds.error(ChannelFP1, `/ 1 2 3 4 5 6 7 8 9 10\na ${A[0]} ${A[1]} ${A[2]} ${A[3]} ${A[4]} ${A[5]} ${A[6]} ${A[7]} ${A[8]} ${A[9]}\nb ${B[0]} ${B[1]} ${B[2]} ${B[3]} ${B[4]} ${B[5]} ${B[6]} ${B[7]} ${B[8]} ${B[9]}\nc ${C[0]} ${C[1]} ${C[2]} ${C[3]} ${C[4]} ${C[5]} ${C[6]} ${C[7]} ${C[8]} ${C[9]}\nd ${D[0]} ${D[1]} ${D[2]} ${D[3]} ${D[4]} ${D[5]} ${D[6]} ${D[7]} ${D[8]} ${D[9]}\ne ${E[0]} ${E[1]} ${E[2]} ${E[3]} ${E[4]} ${E[5]} ${E[6]} ${E[7]} ${E[8]} ${E[9]}\nf ${F[0]} ${F[1]} ${F[2]} ${F[3]} ${F[4]} ${F[5]} ${F[6]} ${F[7]} ${F[8]} ${F[9]}\ng ${G[0]} ${G[1]} ${G[2]} ${G[3]} ${G[4]} ${G[5]} ${G[6]} ${G[7]} ${G[8]} ${G[9]}\n`)
    
              }
    
            } else {
    
              msg.channel.send("You cant place that ship there!")
    
            }
    
          } else if (args[3].toString() == "H") {
    
            if(temp + 5 == 10) {
    
              if(D[temp] == "x" && D[temp + 1] == "x" && D[temp + 2] == "x" && D[temp + 3] == "x" && D[temp + 4] == "x" && D[temp - 1] == "x" && E[temp] == "x" && E[temp + 1] == "x" && E[temp + 2] == "x" && E[temp + 3] == "x" && E[temp + 4] == "x" && E[temp - 1] == "x" && F[temp] == "x" && F[temp + 1] == "x" && F[temp + 2] == "x" && F[temp + 3] == "x" && F[temp + 4] == "x" && F[temp - 1] == "x") {
    
                E[temp] = "p";
                E[temp + 1] = "p"; 
                E[temp + 2] = "p"; 
                E[temp + 3] = "p";
                E[temp + 4] = "p";
    
                AllShips1[0] -= 1;
    
                Embeds.error(ChannelFP1, `/ 1 2 3 4 5 6 7 8 9 10\na ${A[0]} ${A[1]} ${A[2]} ${A[3]} ${A[4]} ${A[5]} ${A[6]} ${A[7]} ${A[8]} ${A[9]}\nb ${B[0]} ${B[1]} ${B[2]} ${B[3]} ${B[4]} ${B[5]} ${B[6]} ${B[7]} ${B[8]} ${B[9]}\nc ${C[0]} ${C[1]} ${C[2]} ${C[3]} ${C[4]} ${C[5]} ${C[6]} ${C[7]} ${C[8]} ${C[9]}\nd ${D[0]} ${D[1]} ${D[2]} ${D[3]} ${D[4]} ${D[5]} ${D[6]} ${D[7]} ${D[8]} ${D[9]}\ne ${E[0]} ${E[1]} ${E[2]} ${E[3]} ${E[4]} ${E[5]} ${E[6]} ${E[7]} ${E[8]} ${E[9]}\nf ${F[0]} ${F[1]} ${F[2]} ${F[3]} ${F[4]} ${F[5]} ${F[6]} ${F[7]} ${F[8]} ${F[9]}\ng ${G[0]} ${G[1]} ${G[2]} ${G[3]} ${G[4]} ${G[5]} ${G[6]} ${G[7]} ${G[8]} ${G[9]}\n`)
    
              } else {
    
                msg.channel.send("You cant place that ship there!")
    
              }
              
            } else if (temp + 5 < 10) {
    
            if(D[temp] == "x" && D[temp + 1] == "x" && D[temp + 2] == "x" && D[temp + 3] == "x" && D[temp + 4] == "x" && D[temp - 1] == "x" && E[temp] == "x" && E[temp + 1] == "x" && E[temp + 2] == "x" && E[temp + 3] == "x" && E[temp + 4] == "x" && E[temp - 1] == "x" && F[temp] == "x" && F[temp + 1] == "x" && F[temp + 2] == "x" && F[temp + 3] == "x" && F[temp + 4] == "x" && F[temp - 1] == "x" && D[temp + 5] == "x" && E[temp + 5] == "x" && F[temp + 5] == "x") {
    
              E[temp] = "p";
              E[temp + 1] = "p"; 
              E[temp + 2] = "p"; 
              E[temp + 3] = "p";
              E[temp + 4] = "p";
    
              AllShips1[0] -= 1;
    
              Embeds.error(ChannelFP1, `/ 1 2 3 4 5 6 7 8 9 10\na ${A[0]} ${A[1]} ${A[2]} ${A[3]} ${A[4]} ${A[5]} ${A[6]} ${A[7]} ${A[8]} ${A[9]}\nb ${B[0]} ${B[1]} ${B[2]} ${B[3]} ${B[4]} ${B[5]} ${B[6]} ${B[7]} ${B[8]} ${B[9]}\nc ${C[0]} ${C[1]} ${C[2]} ${C[3]} ${C[4]} ${C[5]} ${C[6]} ${C[7]} ${C[8]} ${C[9]}\nd ${D[0]} ${D[1]} ${D[2]} ${D[3]} ${D[4]} ${D[5]} ${D[6]} ${D[7]} ${D[8]} ${D[9]}\ne ${E[0]} ${E[1]} ${E[2]} ${E[3]} ${E[4]} ${E[5]} ${E[6]} ${E[7]} ${E[8]} ${E[9]}\nf ${F[0]} ${F[1]} ${F[2]} ${F[3]} ${F[4]} ${F[5]} ${F[6]} ${F[7]} ${F[8]} ${F[9]}\ng ${G[0]} ${G[1]} ${G[2]} ${G[3]} ${G[4]} ${G[5]} ${G[6]} ${G[7]} ${G[8]} ${G[9]}\n`)
    
            } else {
    
              msg.channel.send("You cant place that ship there!")
    
            }
    
          }
    
          }
    
        } else if(args[2].toString() == "C" && AllShips1[1] != 0) {
    
          if(args[3].toString() == "V") {
    
            if (temp > 0 && temp < 9) {
    
              if(A[temp] == "x" && B[temp] == "x" && A[temp + 1] == "x" && B[temp + 1] == "x" && C[temp] == "x" && C[temp + 1] == "x" && A[temp - 1] == "x" && B[temp - 1] == "x" && C[temp - 1] == "x" && D[temp] == "x" && D[temp + 1] == "x" && D[temp - 1] == "x" && E[temp] == "x" && E[temp - 1] == "x" && E[temp + 1] == "x" && F[temp] == "x" && F[temp - 1] == "x" && F[temp + 1] == "x") {
    
                B[temp] = "p";
                C[temp] = "p";
                D[temp] = "p"; 
                E[temp] = "p";
    
                AllShips1[1] -= 1;
    
                Embeds.error(ChannelFP1, `/ 1 2 3 4 5 6 7 8 9 10\na ${A[0]} ${A[1]} ${A[2]} ${A[3]} ${A[4]} ${A[5]} ${A[6]} ${A[7]} ${A[8]} ${A[9]}\nb ${B[0]} ${B[1]} ${B[2]} ${B[3]} ${B[4]} ${B[5]} ${B[6]} ${B[7]} ${B[8]} ${B[9]}\nc ${C[0]} ${C[1]} ${C[2]} ${C[3]} ${C[4]} ${C[5]} ${C[6]} ${C[7]} ${C[8]} ${C[9]}\nd ${D[0]} ${D[1]} ${D[2]} ${D[3]} ${D[4]} ${D[5]} ${D[6]} ${D[7]} ${D[8]} ${D[9]}\ne ${E[0]} ${E[1]} ${E[2]} ${E[3]} ${E[4]} ${E[5]} ${E[6]} ${E[7]} ${E[8]} ${E[9]}\nf ${F[0]} ${F[1]} ${F[2]} ${F[3]} ${F[4]} ${F[5]} ${F[6]} ${F[7]} ${F[8]} ${F[9]}\ng ${G[0]} ${G[1]} ${G[2]} ${G[3]} ${G[4]} ${G[5]} ${G[6]} ${G[7]} ${G[8]} ${G[9]}\n`)
    
              }
    
            } else if (temp == 9) {
    
              if(A[temp] == "x" && B[temp] == "x" && B[temp - 1] == "x" && C[temp] == "x" && A[temp - 1] == "x" && B[temp - 1] == "x" && C[temp - 1] == "x" && D[temp] == "x" && D[temp - 1] == "x" && E[temp] == "x" && E[temp - 1] == "x" && F[temp] == "x" && F[temp - 1] == "x") {
    
                B[temp] = "p";
                C[temp] = "p"; 
                D[temp] = "p";
                E[temp] = "p";
    
                AllShips1[1] -= 1;
    
                Embeds.error(ChannelFP1, `/ 1 2 3 4 5 6 7 8 9 10\na ${A[0]} ${A[1]} ${A[2]} ${A[3]} ${A[4]} ${A[5]} ${A[6]} ${A[7]} ${A[8]} ${A[9]}\nb ${B[0]} ${B[1]} ${B[2]} ${B[3]} ${B[4]} ${B[5]} ${B[6]} ${B[7]} ${B[8]} ${B[9]}\nc ${C[0]} ${C[1]} ${C[2]} ${C[3]} ${C[4]} ${C[5]} ${C[6]} ${C[7]} ${C[8]} ${C[9]}\nd ${D[0]} ${D[1]} ${D[2]} ${D[3]} ${D[4]} ${D[5]} ${D[6]} ${D[7]} ${D[8]} ${D[9]}\ne ${E[0]} ${E[1]} ${E[2]} ${E[3]} ${E[4]} ${E[5]} ${E[6]} ${E[7]} ${E[8]} ${E[9]}\nf ${F[0]} ${F[1]} ${F[2]} ${F[3]} ${F[4]} ${F[5]} ${F[6]} ${F[7]} ${F[8]} ${F[9]}\ng ${G[0]} ${G[1]} ${G[2]} ${G[3]} ${G[4]} ${G[5]} ${G[6]} ${G[7]} ${G[8]} ${G[9]}\n`)
    
              }
    
            } else {
    
              msg.channel.send("You cant place that ship there!")
    
            }
    
          } else if (args[3].toString() == "H") {
    
            if(temp + 4 == 10) {
    
              if(D[temp] == "x" && D[temp + 1] == "x" && D[temp + 2] == "x" && D[temp + 3] == "x" && D[temp - 1] == "x" && E[temp] == "x" && E[temp + 1] == "x" && E[temp + 2] == "x" && E[temp + 3] == "x" && E[temp - 1] == "x" && F[temp] == "x" && F[temp + 1] == "x" && F[temp + 2] == "x" && F[temp + 3] == "x" && F[temp - 1] == "x") {
    
                E[temp] = "p";
                E[temp + 1] = "p"; 
                E[temp + 2] = "p"; 
                E[temp + 3] = "p";
    
                AllShips1[1] -= 1;
    
                Embeds.error(ChannelFP1, `/ 1 2 3 4 5 6 7 8 9 10\na ${A[0]} ${A[1]} ${A[2]} ${A[3]} ${A[4]} ${A[5]} ${A[6]} ${A[7]} ${A[8]} ${A[9]}\nb ${B[0]} ${B[1]} ${B[2]} ${B[3]} ${B[4]} ${B[5]} ${B[6]} ${B[7]} ${B[8]} ${B[9]}\nc ${C[0]} ${C[1]} ${C[2]} ${C[3]} ${C[4]} ${C[5]} ${C[6]} ${C[7]} ${C[8]} ${C[9]}\nd ${D[0]} ${D[1]} ${D[2]} ${D[3]} ${D[4]} ${D[5]} ${D[6]} ${D[7]} ${D[8]} ${D[9]}\ne ${E[0]} ${E[1]} ${E[2]} ${E[3]} ${E[4]} ${E[5]} ${E[6]} ${E[7]} ${E[8]} ${E[9]}\nf ${F[0]} ${F[1]} ${F[2]} ${F[3]} ${F[4]} ${F[5]} ${F[6]} ${F[7]} ${F[8]} ${F[9]}\ng ${G[0]} ${G[1]} ${G[2]} ${G[3]} ${G[4]} ${G[5]} ${G[6]} ${G[7]} ${G[8]} ${G[9]}\n`)
    
              } else {
    
                msg.channel.send("You cant place that ship there!")
    
              }
    
            } else if (temp + 4 < 10) {
    
              if(D[temp] == "x" && D[temp + 1] == "x" && D[temp + 2] == "x" && D[temp + 3] == "x" && D[temp + 4] == "x" && D[temp - 1] == "x" && E[temp] == "x" && E[temp + 1] == "x" && E[temp + 2] == "x" && E[temp + 3] == "x" && E[temp + 4] == "x" && E[temp - 1] == "x" && F[temp] == "x" && F[temp + 1] == "x" && F[temp + 2] == "x" && F[temp + 3] == "x" && F[temp + 4] == "x" && F[temp - 1] == "x") {
    
              E[temp] = "p";
              E[temp + 1] = "p"; 
              E[temp + 2] = "p"; 
              E[temp + 3] = "p"
    
              AllShips1[1] -= 1;
    
              Embeds.error(ChannelFP1, `/ 1 2 3 4 5 6 7 8 9 10\na ${A[0]} ${A[1]} ${A[2]} ${A[3]} ${A[4]} ${A[5]} ${A[6]} ${A[7]} ${A[8]} ${A[9]}\nb ${B[0]} ${B[1]} ${B[2]} ${B[3]} ${B[4]} ${B[5]} ${B[6]} ${B[7]} ${B[8]} ${B[9]}\nc ${C[0]} ${C[1]} ${C[2]} ${C[3]} ${C[4]} ${C[5]} ${C[6]} ${C[7]} ${C[8]} ${C[9]}\nd ${D[0]} ${D[1]} ${D[2]} ${D[3]} ${D[4]} ${D[5]} ${D[6]} ${D[7]} ${D[8]} ${D[9]}\ne ${E[0]} ${E[1]} ${E[2]} ${E[3]} ${E[4]} ${E[5]} ${E[6]} ${E[7]} ${E[8]} ${E[9]}\nf ${F[0]} ${F[1]} ${F[2]} ${F[3]} ${F[4]} ${F[5]} ${F[6]} ${F[7]} ${F[8]} ${F[9]}\ng ${G[0]} ${G[1]} ${G[2]} ${G[3]} ${G[4]} ${G[5]} ${G[6]} ${G[7]} ${G[8]} ${G[9]}\n`)
    
            } else {
    
              msg.channel.send("You cant place that ship there!")
    
            }
    
          }
    
          }
    
        } else if(args[2].toString() == "F" && AllShips1[2] != 0) {
    
          if(args[3].toString() == "V") {
    
            if (temp > 0 && temp < 9) {
    
              if(B[temp] == "x" && C[temp] == "x" && B[temp + 1] == "x" && C[temp + 1] == "x" && D[temp] == "x" && D[temp + 1] == "x" && B[temp - 1] == "x" && C[temp - 1] == "x" && D[temp - 1] == "x" && E[temp] == "x" && E[temp + 1] == "x" && E[temp - 1] == "x" && F[temp] == "x" && F[temp - 1] == "x" && F[temp + 1] == "x") {
    
                C[temp] = "p";
                D[temp] = "p";
                E[temp] = "p"; 
    
                AllShips1[2] -= 1;
    
                Embeds.error(ChannelFP1, `/ 1 2 3 4 5 6 7 8 9 10\na ${A[0]} ${A[1]} ${A[2]} ${A[3]} ${A[4]} ${A[5]} ${A[6]} ${A[7]} ${A[8]} ${A[9]}\nb ${B[0]} ${B[1]} ${B[2]} ${B[3]} ${B[4]} ${B[5]} ${B[6]} ${B[7]} ${B[8]} ${B[9]}\nc ${C[0]} ${C[1]} ${C[2]} ${C[3]} ${C[4]} ${C[5]} ${C[6]} ${C[7]} ${C[8]} ${C[9]}\nd ${D[0]} ${D[1]} ${D[2]} ${D[3]} ${D[4]} ${D[5]} ${D[6]} ${D[7]} ${D[8]} ${D[9]}\ne ${E[0]} ${E[1]} ${E[2]} ${E[3]} ${E[4]} ${E[5]} ${E[6]} ${E[7]} ${E[8]} ${E[9]}\nf ${F[0]} ${F[1]} ${F[2]} ${F[3]} ${F[4]} ${F[5]} ${F[6]} ${F[7]} ${F[8]} ${F[9]}\ng ${G[0]} ${G[1]} ${G[2]} ${G[3]} ${G[4]} ${G[5]} ${G[6]} ${G[7]} ${G[8]} ${G[9]}\n`)
    
              }
    
            } else if (temp == 9) {
    
              if(B[temp] == "x" && C[temp] == "x" && D[temp] == "x" && B[temp - 1] == "x" && C[temp - 1] == "x" && D[temp - 1] == "x" && E[temp] == "x" && E[temp - 1] == "x" && F[temp] == "x" && F[temp - 1] == "x") {
    
                C[temp] = "p";
                D[temp] = "p"; 
                E[temp] = "p";
    
                AllShips1[2] -= 1;
    
                Embeds.error(ChannelFP1, `/ 1 2 3 4 5 6 7 8 9 10\na ${A[0]} ${A[1]} ${A[2]} ${A[3]} ${A[4]} ${A[5]} ${A[6]} ${A[7]} ${A[8]} ${A[9]}\nb ${B[0]} ${B[1]} ${B[2]} ${B[3]} ${B[4]} ${B[5]} ${B[6]} ${B[7]} ${B[8]} ${B[9]}\nc ${C[0]} ${C[1]} ${C[2]} ${C[3]} ${C[4]} ${C[5]} ${C[6]} ${C[7]} ${C[8]} ${C[9]}\nd ${D[0]} ${D[1]} ${D[2]} ${D[3]} ${D[4]} ${D[5]} ${D[6]} ${D[7]} ${D[8]} ${D[9]}\ne ${E[0]} ${E[1]} ${E[2]} ${E[3]} ${E[4]} ${E[5]} ${E[6]} ${E[7]} ${E[8]} ${E[9]}\nf ${F[0]} ${F[1]} ${F[2]} ${F[3]} ${F[4]} ${F[5]} ${F[6]} ${F[7]} ${F[8]} ${F[9]}\ng ${G[0]} ${G[1]} ${G[2]} ${G[3]} ${G[4]} ${G[5]} ${G[6]} ${G[7]} ${G[8]} ${G[9]}\n`)
    
              }
    
            } else {
    
              msg.channel.send("You cant place that ship there!")
    
            }
    
          } else if (args[3].toString() == "H") {
    
            if(temp + 3 == 10) {
    
              if(D[temp] == "x" && D[temp + 1] == "x" && D[temp + 2] == "x" && D[temp - 1] == "x" && E[temp] == "x" && E[temp + 1] == "x" && E[temp + 2] == "x" && E[temp - 1] == "x" && F[temp] == "x" && F[temp + 1] == "x" && F[temp + 2] == "x" && F[temp - 1] == "x") {
    
                E[temp] = "p";
                E[temp + 1] = "p"; 
                E[temp + 2] = "p"; 
    
                AllShips1[2] -= 1;
    
                Embeds.error(ChannelFP1, `/ 1 2 3 4 5 6 7 8 9 10\na ${A[0]} ${A[1]} ${A[2]} ${A[3]} ${A[4]} ${A[5]} ${A[6]} ${A[7]} ${A[8]} ${A[9]}\nb ${B[0]} ${B[1]} ${B[2]} ${B[3]} ${B[4]} ${B[5]} ${B[6]} ${B[7]} ${B[8]} ${B[9]}\nc ${C[0]} ${C[1]} ${C[2]} ${C[3]} ${C[4]} ${C[5]} ${C[6]} ${C[7]} ${C[8]} ${C[9]}\nd ${D[0]} ${D[1]} ${D[2]} ${D[3]} ${D[4]} ${D[5]} ${D[6]} ${D[7]} ${D[8]} ${D[9]}\ne ${E[0]} ${E[1]} ${E[2]} ${E[3]} ${E[4]} ${E[5]} ${E[6]} ${E[7]} ${E[8]} ${E[9]}\nf ${F[0]} ${F[1]} ${F[2]} ${F[3]} ${F[4]} ${F[5]} ${F[6]} ${F[7]} ${F[8]} ${F[9]}\ng ${G[0]} ${G[1]} ${G[2]} ${G[3]} ${G[4]} ${G[5]} ${G[6]} ${G[7]} ${G[8]} ${G[9]}\n`)
    
              } else {
    
                msg.channel.send("You cant place that ship there!")
    
              }
    
            } else if (temp + 3 < 10) {
    
              if(D[temp] == "x" && D[temp + 1] == "x" && D[temp + 2] == "x" && D[temp + 3] == "x" && D[temp - 1] == "x" && E[temp] == "x" && E[temp + 1] == "x" && E[temp + 2] == "x" && E[temp + 3] == "x" && E[temp - 1] == "x" && F[temp] == "x" && F[temp + 1] == "x" && F[temp + 2] == "x" && F[temp + 3] == "x" && F[temp - 1] == "x") {
    
              E[temp] = "p";
              E[temp + 1] = "p"; 
              E[temp + 2] = "p"; 
    
              AllShips1[2] -= 1;
    
              Embeds.error(ChannelFP1, `/ 1 2 3 4 5 6 7 8 9 10\na ${A[0]} ${A[1]} ${A[2]} ${A[3]} ${A[4]} ${A[5]} ${A[6]} ${A[7]} ${A[8]} ${A[9]}\nb ${B[0]} ${B[1]} ${B[2]} ${B[3]} ${B[4]} ${B[5]} ${B[6]} ${B[7]} ${B[8]} ${B[9]}\nc ${C[0]} ${C[1]} ${C[2]} ${C[3]} ${C[4]} ${C[5]} ${C[6]} ${C[7]} ${C[8]} ${C[9]}\nd ${D[0]} ${D[1]} ${D[2]} ${D[3]} ${D[4]} ${D[5]} ${D[6]} ${D[7]} ${D[8]} ${D[9]}\ne ${E[0]} ${E[1]} ${E[2]} ${E[3]} ${E[4]} ${E[5]} ${E[6]} ${E[7]} ${E[8]} ${E[9]}\nf ${F[0]} ${F[1]} ${F[2]} ${F[3]} ${F[4]} ${F[5]} ${F[6]} ${F[7]} ${F[8]} ${F[9]}\ng ${G[0]} ${G[1]} ${G[2]} ${G[3]} ${G[4]} ${G[5]} ${G[6]} ${G[7]} ${G[8]} ${G[9]}\n`)
    
            } else {
    
              msg.channel.send("You cant place that ship there!")
    
            }
    
          }
    
          }
    
        } else if(args[2].toString() == "M" && AllShips1[3] != 0) {
    
          if(args[3].toString() == "V") {
    
            if (temp > 0 && temp < 9) {
    
              if(C[temp] == "x" && C[temp + 1] == "x" && D[temp] == "x" && D[temp + 1] == "x" && C[temp - 1] == "x" && D[temp - 1] == "x" && E[temp] == "x" && E[temp + 1] == "x" && E[temp - 1] == "x" && F[temp] == "x" && F[temp - 1] == "x" && F[temp + 1] == "x") {
    
                D[temp] = "p";
                E[temp] = "p"; 
    
                AllShips1[3] -= 1;
    
                Embeds.error(ChannelFP1, `/ 1 2 3 4 5 6 7 8 9 10\na ${A[0]} ${A[1]} ${A[2]} ${A[3]} ${A[4]} ${A[5]} ${A[6]} ${A[7]} ${A[8]} ${A[9]}\nb ${B[0]} ${B[1]} ${B[2]} ${B[3]} ${B[4]} ${B[5]} ${B[6]} ${B[7]} ${B[8]} ${B[9]}\nc ${C[0]} ${C[1]} ${C[2]} ${C[3]} ${C[4]} ${C[5]} ${C[6]} ${C[7]} ${C[8]} ${C[9]}\nd ${D[0]} ${D[1]} ${D[2]} ${D[3]} ${D[4]} ${D[5]} ${D[6]} ${D[7]} ${D[8]} ${D[9]}\ne ${E[0]} ${E[1]} ${E[2]} ${E[3]} ${E[4]} ${E[5]} ${E[6]} ${E[7]} ${E[8]} ${E[9]}\nf ${F[0]} ${F[1]} ${F[2]} ${F[3]} ${F[4]} ${F[5]} ${F[6]} ${F[7]} ${F[8]} ${F[9]}\ng ${G[0]} ${G[1]} ${G[2]} ${G[3]} ${G[4]} ${G[5]} ${G[6]} ${G[7]} ${G[8]} ${G[9]}\n`)
    
              }
    
            } else if (temp == 9) {
    
              if(C[temp] == "x" && C[temp - 1] == "x" && D[temp] == "x" && D[temp - 1] == "x" && E[temp] == "x" && E[temp - 1] == "x" && F[temp] == "x" && F[temp - 1] == "x") {
    
                D[temp] = "p";
                E[temp] = "p"; 
    
                AllShips1[3] -= 1;
    
                Embeds.error(ChannelFP1, `/ 1 2 3 4 5 6 7 8 9 10\na ${A[0]} ${A[1]} ${A[2]} ${A[3]} ${A[4]} ${A[5]} ${A[6]} ${A[7]} ${A[8]} ${A[9]}\nb ${B[0]} ${B[1]} ${B[2]} ${B[3]} ${B[4]} ${B[5]} ${B[6]} ${B[7]} ${B[8]} ${B[9]}\nc ${C[0]} ${C[1]} ${C[2]} ${C[3]} ${C[4]} ${C[5]} ${C[6]} ${C[7]} ${C[8]} ${C[9]}\nd ${D[0]} ${D[1]} ${D[2]} ${D[3]} ${D[4]} ${D[5]} ${D[6]} ${D[7]} ${D[8]} ${D[9]}\ne ${E[0]} ${E[1]} ${E[2]} ${E[3]} ${E[4]} ${E[5]} ${E[6]} ${E[7]} ${E[8]} ${E[9]}\nf ${F[0]} ${F[1]} ${F[2]} ${F[3]} ${F[4]} ${F[5]} ${F[6]} ${F[7]} ${F[8]} ${F[9]}\ng ${G[0]} ${G[1]} ${G[2]} ${G[3]} ${G[4]} ${G[5]} ${G[6]} ${G[7]} ${G[8]} ${G[9]}\n`)
    
              }
    
            } else {
    
              msg.channel.send("You cant place that ship there!")
    
            }
    
          } else if (args[3].toString() == "H") {
    
            if(temp + 2 == 10) {
    
              if(D[temp] == "x" && D[temp + 1] == "x" && D[temp - 1] == "x" && E[temp] == "x" && E[temp + 1] == "x" && E[temp - 1] == "x" && F[temp] == "x" && F[temp + 1] == "x" && F[temp - 1] == "x") {
    
                E[temp] = "p";
                E[temp + 1] = "p"; 
    
                AllShips1[3] -= 1;
    
                Embeds.error(ChannelFP1, `/ 1 2 3 4 5 6 7 8 9 10\na ${A[0]} ${A[1]} ${A[2]} ${A[3]} ${A[4]} ${A[5]} ${A[6]} ${A[7]} ${A[8]} ${A[9]}\nb ${B[0]} ${B[1]} ${B[2]} ${B[3]} ${B[4]} ${B[5]} ${B[6]} ${B[7]} ${B[8]} ${B[9]}\nc ${C[0]} ${C[1]} ${C[2]} ${C[3]} ${C[4]} ${C[5]} ${C[6]} ${C[7]} ${C[8]} ${C[9]}\nd ${D[0]} ${D[1]} ${D[2]} ${D[3]} ${D[4]} ${D[5]} ${D[6]} ${D[7]} ${D[8]} ${D[9]}\ne ${E[0]} ${E[1]} ${E[2]} ${E[3]} ${E[4]} ${E[5]} ${E[6]} ${E[7]} ${E[8]} ${E[9]}\nf ${F[0]} ${F[1]} ${F[2]} ${F[3]} ${F[4]} ${F[5]} ${F[6]} ${F[7]} ${F[8]} ${F[9]}\ng ${G[0]} ${G[1]} ${G[2]} ${G[3]} ${G[4]} ${G[5]} ${G[6]} ${G[7]} ${G[8]} ${G[9]}\n`)
    
              } else {
    
                msg.channel.send("You cant place that ship there!")
    
              }
    
            } else if (temp + 2 < 10) {
    
            if(D[temp] == "x" && D[temp + 1] == "x" && D[temp + 2] == "x" && D[temp - 1] == "x" && E[temp] == "x" && E[temp + 1] == "x" && E[temp + 2] == "x" && E[temp - 1] == "x" && F[temp] == "x" && F[temp + 1] == "x" && F[temp + 2] == "x" && F[temp - 1] == "x") {
    
              E[temp] = "p";
              E[temp + 1] = "p"; 
    
              AllShips1[3] -= 1;
    
              Embeds.error(ChannelFP1, `/ 1 2 3 4 5 6 7 8 9 10\na ${A[0]} ${A[1]} ${A[2]} ${A[3]} ${A[4]} ${A[5]} ${A[6]} ${A[7]} ${A[8]} ${A[9]}\nb ${B[0]} ${B[1]} ${B[2]} ${B[3]} ${B[4]} ${B[5]} ${B[6]} ${B[7]} ${B[8]} ${B[9]}\nc ${C[0]} ${C[1]} ${C[2]} ${C[3]} ${C[4]} ${C[5]} ${C[6]} ${C[7]} ${C[8]} ${C[9]}\nd ${D[0]} ${D[1]} ${D[2]} ${D[3]} ${D[4]} ${D[5]} ${D[6]} ${D[7]} ${D[8]} ${D[9]}\ne ${E[0]} ${E[1]} ${E[2]} ${E[3]} ${E[4]} ${E[5]} ${E[6]} ${E[7]} ${E[8]} ${E[9]}\nf ${F[0]} ${F[1]} ${F[2]} ${F[3]} ${F[4]} ${F[5]} ${F[6]} ${F[7]} ${F[8]} ${F[9]}\ng ${G[0]} ${G[1]} ${G[2]} ${G[3]} ${G[4]} ${G[5]} ${G[6]} ${G[7]} ${G[8]} ${G[9]}\n`)
    
            } else {
    
              msg.channel.send("You cant place that ship there!")
    
            }
    
          }
    
          }
    
        } else {
    
          msg.channel.send("You used all ships of this kind")
    
        }
    
      } else if (temp == 0) {
    
        if(args[2].toString() == "B" && AllShips1[0] != 0) {
    
          if(args[3].toString() == "V") {
    
            if(A[temp] == "x" && B[temp] == "x" && B[temp + 1] == "x" && C[temp] == "x" && A[temp + 1] == "x" && B[temp + 1] == "x" && C[temp + 1] == "x" && D[temp] == "x" && D[temp + 1] == "x" && E[temp] == "x" && E[temp + 1] == "x" && F[temp] == "x" && F[temp + 1] == "x") {
    
              A[temp] = "p";
              B[temp] = "p"; 
              C[temp] = "p";
              D[temp] = "p";
              E[temp] = "p";
    
              AllShips1[0] -= 1;
    
              Embeds.error(ChannelFP1, `/ 1 2 3 4 5 6 7 8 9 10\na ${A[0]} ${A[1]} ${A[2]} ${A[3]} ${A[4]} ${A[5]} ${A[6]} ${A[7]} ${A[8]} ${A[9]}\nb ${B[0]} ${B[1]} ${B[2]} ${B[3]} ${B[4]} ${B[5]} ${B[6]} ${B[7]} ${B[8]} ${B[9]}\nc ${C[0]} ${C[1]} ${C[2]} ${C[3]} ${C[4]} ${C[5]} ${C[6]} ${C[7]} ${C[8]} ${C[9]}\nd ${D[0]} ${D[1]} ${D[2]} ${D[3]} ${D[4]} ${D[5]} ${D[6]} ${D[7]} ${D[8]} ${D[9]}\ne ${E[0]} ${E[1]} ${E[2]} ${E[3]} ${E[4]} ${E[5]} ${E[6]} ${E[7]} ${E[8]} ${E[9]}\nf ${F[0]} ${F[1]} ${F[2]} ${F[3]} ${F[4]} ${F[5]} ${F[6]} ${F[7]} ${F[8]} ${F[9]}\ng ${G[0]} ${G[1]} ${G[2]} ${G[3]} ${G[4]} ${G[5]} ${G[6]} ${G[7]} ${G[8]} ${G[9]}\n`)
    
            } else {
    
            msg.channel.send("You cant place that ship there!")
    
          }
    
          } else if (args[3].toString() == "H") {
    
            if(D[temp] == "x" && D[temp + 1] == "x" && D[temp + 2] == "x" && D[temp + 3] == "x" && D[temp + 4] == "x" && D[temp + 5] == "x" && E[temp] == "x" && E[temp + 1] == "x" && E[temp + 2] == "x" && E[temp + 3] == "x" && E[temp + 4] == "x" && E[temp +5] == "x" && F[temp] == "x" && F[temp + 1] == "x" && F[temp + 2] == "x" && F[temp + 3] == "x" && F[temp + 4] == "x" && F[temp + 5] == "x") {
    
              E[temp] = "p";
              E[temp + 1] = "p"; 
              E[temp + 2] = "p"; 
              E[temp + 3] = "p";
              E[temp + 4] = "p";
    
              AllShips1[0] -= 1;
    
              Embeds.error(ChannelFP1, `/ 1 2 3 4 5 6 7 8 9 10\na ${A[0]} ${A[1]} ${A[2]} ${A[3]} ${A[4]} ${A[5]} ${A[6]} ${A[7]} ${A[8]} ${A[9]}\nb ${B[0]} ${B[1]} ${B[2]} ${B[3]} ${B[4]} ${B[5]} ${B[6]} ${B[7]} ${B[8]} ${B[9]}\nc ${C[0]} ${C[1]} ${C[2]} ${C[3]} ${C[4]} ${C[5]} ${C[6]} ${C[7]} ${C[8]} ${C[9]}\nd ${D[0]} ${D[1]} ${D[2]} ${D[3]} ${D[4]} ${D[5]} ${D[6]} ${D[7]} ${D[8]} ${D[9]}\ne ${E[0]} ${E[1]} ${E[2]} ${E[3]} ${E[4]} ${E[5]} ${E[6]} ${E[7]} ${E[8]} ${E[9]}\nf ${F[0]} ${F[1]} ${F[2]} ${F[3]} ${F[4]} ${F[5]} ${F[6]} ${F[7]} ${F[8]} ${F[9]}\ng ${G[0]} ${G[1]} ${G[2]} ${G[3]} ${G[4]} ${G[5]} ${G[6]} ${G[7]} ${G[8]} ${G[9]}\n`)
    
            } else {
    
              msg.channel.send("You cant place that ship there!")
    
            }
    
          }
    
        } else if(args[2].toString() == "C" && AllShips1[1] != 0) {
    
          if(args[3].toString() == "V") {
    
            if(A[temp] == "x" && B[temp] == "x" && B[temp + 1] == "x" && C[temp] == "x" && A[temp + 1] == "x" && B[temp + 1] == "x" && C[temp + 1] == "x" && D[temp] == "x" && D[temp + 1] == "x" && E[temp] == "x" && E[temp + 1] == "x" && F[temp] == "x" && F[temp + 1] == "x") {
    
              B[temp] = "p";
              C[temp] = "p";
              D[temp] = "p";
              E[temp] = "p"; 
    
              AllShips1[1] -= 1;
    
              Embeds.error(ChannelFP1, `/ 1 2 3 4 5 6 7 8 9 10\na ${A[0]} ${A[1]} ${A[2]} ${A[3]} ${A[4]} ${A[5]} ${A[6]} ${A[7]} ${A[8]} ${A[9]}\nb ${B[0]} ${B[1]} ${B[2]} ${B[3]} ${B[4]} ${B[5]} ${B[6]} ${B[7]} ${B[8]} ${B[9]}\nc ${C[0]} ${C[1]} ${C[2]} ${C[3]} ${C[4]} ${C[5]} ${C[6]} ${C[7]} ${C[8]} ${C[9]}\nd ${D[0]} ${D[1]} ${D[2]} ${D[3]} ${D[4]} ${D[5]} ${D[6]} ${D[7]} ${D[8]} ${D[9]}\ne ${E[0]} ${E[1]} ${E[2]} ${E[3]} ${E[4]} ${E[5]} ${E[6]} ${E[7]} ${E[8]} ${E[9]}\nf ${F[0]} ${F[1]} ${F[2]} ${F[3]} ${F[4]} ${F[5]} ${F[6]} ${F[7]} ${F[8]} ${F[9]}\ng ${G[0]} ${G[1]} ${G[2]} ${G[3]} ${G[4]} ${G[5]} ${G[6]} ${G[7]} ${G[8]} ${G[9]}\n`)
    
            } else {
    
              msg.channel.send("You cant place that ship there!")
    
            }
    
          } else if (args[3].toString() == "H") {
    
            if(D[temp] == "x" && D[temp + 1] == "x" && D[temp + 2] == "x" && D[temp + 3] == "x" && D[temp + 4] == "x" && E[temp] == "x" && E[temp + 1] == "x" && E[temp + 2] == "x" && E[temp + 3] == "x" && E[temp + 4] == "x" && F[temp] == "x" && F[temp + 1] == "x" && F[temp + 2] == "x" && F[temp + 3] == "x" && F[temp + 4] == "x") {
    
              E[temp] = "p";
              E[temp + 1] = "p"; 
              E[temp + 2] = "p"; 
              E[temp + 3] = "p";
    
              AllShips1[1] -= 1;
    
              Embeds.error(ChannelFP1, `/ 1 2 3 4 5 6 7 8 9 10\na ${A[0]} ${A[1]} ${A[2]} ${A[3]} ${A[4]} ${A[5]} ${A[6]} ${A[7]} ${A[8]} ${A[9]}\nb ${B[0]} ${B[1]} ${B[2]} ${B[3]} ${B[4]} ${B[5]} ${B[6]} ${B[7]} ${B[8]} ${B[9]}\nc ${C[0]} ${C[1]} ${C[2]} ${C[3]} ${C[4]} ${C[5]} ${C[6]} ${C[7]} ${C[8]} ${C[9]}\nd ${D[0]} ${D[1]} ${D[2]} ${D[3]} ${D[4]} ${D[5]} ${D[6]} ${D[7]} ${D[8]} ${D[9]}\ne ${E[0]} ${E[1]} ${E[2]} ${E[3]} ${E[4]} ${E[5]} ${E[6]} ${E[7]} ${E[8]} ${E[9]}\nf ${F[0]} ${F[1]} ${F[2]} ${F[3]} ${F[4]} ${F[5]} ${F[6]} ${F[7]} ${F[8]} ${F[9]}\ng ${G[0]} ${G[1]} ${G[2]} ${G[3]} ${G[4]} ${G[5]} ${G[6]} ${G[7]} ${G[8]} ${G[9]}\n`)
    
            } else {
    
              msg.channel.send("You cant place that ship there!")
    
            }
    
          }
    
        } else if(args[2].toString() == "F" && AllShips1[2] != 0) {
    
          if(args[3].toString() == "V") {
    
            if(B[temp] == "x" && B[temp + 1] == "x" && C[temp] == "x" && B[temp + 1] == "x" && C[temp + 1] == "x" && D[temp] == "x" && D[temp + 1] == "x" && E[temp] == "x" && E[temp + 1] == "x" && F[temp] == "x" && F[temp + 1] == "x") {
    
              C[temp] = "p";
              D[temp] = "p";
              E[temp] = "p"; 
    
              AllShips1[2] -= 1;
    
              Embeds.error(ChannelFP1, `/ 1 2 3 4 5 6 7 8 9 10\na ${A[0]} ${A[1]} ${A[2]} ${A[3]} ${A[4]} ${A[5]} ${A[6]} ${A[7]} ${A[8]} ${A[9]}\nb ${B[0]} ${B[1]} ${B[2]} ${B[3]} ${B[4]} ${B[5]} ${B[6]} ${B[7]} ${B[8]} ${B[9]}\nc ${C[0]} ${C[1]} ${C[2]} ${C[3]} ${C[4]} ${C[5]} ${C[6]} ${C[7]} ${C[8]} ${C[9]}\nd ${D[0]} ${D[1]} ${D[2]} ${D[3]} ${D[4]} ${D[5]} ${D[6]} ${D[7]} ${D[8]} ${D[9]}\ne ${E[0]} ${E[1]} ${E[2]} ${E[3]} ${E[4]} ${E[5]} ${E[6]} ${E[7]} ${E[8]} ${E[9]}\nf ${F[0]} ${F[1]} ${F[2]} ${F[3]} ${F[4]} ${F[5]} ${F[6]} ${F[7]} ${F[8]} ${F[9]}\ng ${G[0]} ${G[1]} ${G[2]} ${G[3]} ${G[4]} ${G[5]} ${G[6]} ${G[7]} ${G[8]} ${G[9]}\n`)
    
            } else {
    
              msg.channel.send("You cant place that ship there!")
    
            }
    
          } else if (args[3].toString() == "H") {
    
            if(D[temp] == "x" && D[temp + 1] == "x" && D[temp + 2] == "x" && D[temp + 3] == "x" && E[temp] == "x" && E[temp + 1] == "x" && E[temp + 2] == "x" && E[temp + 3] == "x" && F[temp] == "x" && F[temp + 1] == "x" && F[temp + 2] == "x" && F[temp + 3] == "x") {
    
              E[temp] = "p";
              E[temp + 1] = "p"; 
              E[temp + 2] = "p"; 
    
              AllShips1[2] -= 1;
    
              Embeds.error(ChannelFP1, `/ 1 2 3 4 5 6 7 8 9 10\na ${A[0]} ${A[1]} ${A[2]} ${A[3]} ${A[4]} ${A[5]} ${A[6]} ${A[7]} ${A[8]} ${A[9]}\nb ${B[0]} ${B[1]} ${B[2]} ${B[3]} ${B[4]} ${B[5]} ${B[6]} ${B[7]} ${B[8]} ${B[9]}\nc ${C[0]} ${C[1]} ${C[2]} ${C[3]} ${C[4]} ${C[5]} ${C[6]} ${C[7]} ${C[8]} ${C[9]}\nd ${D[0]} ${D[1]} ${D[2]} ${D[3]} ${D[4]} ${D[5]} ${D[6]} ${D[7]} ${D[8]} ${D[9]}\ne ${E[0]} ${E[1]} ${E[2]} ${E[3]} ${E[4]} ${E[5]} ${E[6]} ${E[7]} ${E[8]} ${E[9]}\nf ${F[0]} ${F[1]} ${F[2]} ${F[3]} ${F[4]} ${F[5]} ${F[6]} ${F[7]} ${F[8]} ${F[9]}\ng ${G[0]} ${G[1]} ${G[2]} ${G[3]} ${G[4]} ${G[5]} ${G[6]} ${G[7]} ${G[8]} ${G[9]}\n`)
    
            } else {
    
              msg.channel.send("You cant place that ship there!")
    
            }
    
          }
    
        } else if(args[2].toString() == "M" && AllShips1[3] != 0) {
    
          if(args[3].toString() == "V") {
    
            if(temp == 0) {
    
              if(C[temp] == "x" && C[temp + 1] == "x" && D[temp] == "x" && D[temp + 1] == "x" && E[temp] == "x" && E[temp + 1] == "x" && F[temp] == "x" && F[temp + 1] == "x") {
    
                D[temp] = "p";
                E[temp] = "p"; 
    
                AllShips1[3] -= 1;
    
                Embeds.error(ChannelFP1, `/ 1 2 3 4 5 6 7 8 9 10\na ${A[0]} ${A[1]} ${A[2]} ${A[3]} ${A[4]} ${A[5]} ${A[6]} ${A[7]} ${A[8]} ${A[9]}\nb ${B[0]} ${B[1]} ${B[2]} ${B[3]} ${B[4]} ${B[5]} ${B[6]} ${B[7]} ${B[8]} ${B[9]}\nc ${C[0]} ${C[1]} ${C[2]} ${C[3]} ${C[4]} ${C[5]} ${C[6]} ${C[7]} ${C[8]} ${C[9]}\nd ${D[0]} ${D[1]} ${D[2]} ${D[3]} ${D[4]} ${D[5]} ${D[6]} ${D[7]} ${D[8]} ${D[9]}\ne ${E[0]} ${E[1]} ${E[2]} ${E[3]} ${E[4]} ${E[5]} ${E[6]} ${E[7]} ${E[8]} ${E[9]}\nf ${F[0]} ${F[1]} ${F[2]} ${F[3]} ${F[4]} ${F[5]} ${F[6]} ${F[7]} ${F[8]} ${F[9]}\ng ${G[0]} ${G[1]} ${G[2]} ${G[3]} ${G[4]} ${G[5]} ${G[6]} ${G[7]} ${G[8]} ${G[9]}\n`)
    
              } else {
    
                msg.channel.send("You cant place that ship there!")
    
              }
    
            }
    
          } else if (args[3].toString() == "H") {
    
            if(D[temp] == "x" && D[temp + 1] == "x" && D[temp + 2] == "x" && E[temp] == "x" && E[temp + 1] == "x" && E[temp + 2] == "x" && F[temp] == "x" && F[temp + 1] == "x" && F[temp + 2] == "x") {
    
              E[temp] = "p";
              E[temp + 1] = "p"; 
    
              AllShips1[3] -= 1;
    
              Embeds.error(ChannelFP1, `/ 1 2 3 4 5 6 7 8 9 10\na ${A[0]} ${A[1]} ${A[2]} ${A[3]} ${A[4]} ${A[5]} ${A[6]} ${A[7]} ${A[8]} ${A[9]}\nb ${B[0]} ${B[1]} ${B[2]} ${B[3]} ${B[4]} ${B[5]} ${B[6]} ${B[7]} ${B[8]} ${B[9]}\nc ${C[0]} ${C[1]} ${C[2]} ${C[3]} ${C[4]} ${C[5]} ${C[6]} ${C[7]} ${C[8]} ${C[9]}\nd ${D[0]} ${D[1]} ${D[2]} ${D[3]} ${D[4]} ${D[5]} ${D[6]} ${D[7]} ${D[8]} ${D[9]}\ne ${E[0]} ${E[1]} ${E[2]} ${E[3]} ${E[4]} ${E[5]} ${E[6]} ${E[7]} ${E[8]} ${E[9]}\nf ${F[0]} ${F[1]} ${F[2]} ${F[3]} ${F[4]} ${F[5]} ${F[6]} ${F[7]} ${F[8]} ${F[9]}\ng ${G[0]} ${G[1]} ${G[2]} ${G[3]} ${G[4]} ${G[5]} ${G[6]} ${G[7]} ${G[8]} ${G[9]}\n`)
    
            } else {
    
              msg.channel.send("You cant place that ship there!")
    
            }
    
          }
    
        } else {
    
          msg.channel.send("You used all ships of this kind")
    
        }
    
      }
    
    } else if(args[0].toString() == "F") {

      var temp = parseInt(args[1] - 1)
    
      if(temp > 0) {
    
        if(args[2].toString() == "B" && AllShips1[0] != 0) {
    
          if(args[3].toString() == "V") {
    
            if (temp > 0 && temp < 9) {
    
              if(A[temp] == "x" && B[temp] == "x" && A[temp + 1] == "x" && B[temp + 1] == "x" && C[temp] == "x" && C[temp + 1] == "x" && A[temp - 1] == "x" && B[temp - 1] == "x" && C[temp - 1] == "x" && D[temp] == "x" && D[temp + 1] == "x" && D[temp - 1] == "x" && E[temp] == "x" && E[temp - 1] == "x" && E[temp + 1] == "x" && F[temp] == "x" && F[temp - 1] == "x" && F[temp + 1] == "x" && G[temp] == "x" && G[temp + 1] == "x" && G[temp - 1]) {
    
                B[temp] = "p";
                C[temp] = "p";
                D[temp] = "p"; 
                E[temp] = "p";
                F[temp] = "p";
    
                AllShips1[0] -= 1;
    
                Embeds.error(ChannelFP1, `/ 1 2 3 4 5 6 7 8 9 10\na ${A[0]} ${A[1]} ${A[2]} ${A[3]} ${A[4]} ${A[5]} ${A[6]} ${A[7]} ${A[8]} ${A[9]}\nb ${B[0]} ${B[1]} ${B[2]} ${B[3]} ${B[4]} ${B[5]} ${B[6]} ${B[7]} ${B[8]} ${B[9]}\nc ${C[0]} ${C[1]} ${C[2]} ${C[3]} ${C[4]} ${C[5]} ${C[6]} ${C[7]} ${C[8]} ${C[9]}\nd ${D[0]} ${D[1]} ${D[2]} ${D[3]} ${D[4]} ${D[5]} ${D[6]} ${D[7]} ${D[8]} ${D[9]}\ne ${E[0]} ${E[1]} ${E[2]} ${E[3]} ${E[4]} ${E[5]} ${E[6]} ${E[7]} ${E[8]} ${E[9]}\nf ${F[0]} ${F[1]} ${F[2]} ${F[3]} ${F[4]} ${F[5]} ${F[6]} ${F[7]} ${F[8]} ${F[9]}\ng ${G[0]} ${G[1]} ${G[2]} ${G[3]} ${G[4]} ${G[5]} ${G[6]} ${G[7]} ${G[8]} ${G[9]}\n`)
    
              }
    
            } else if (temp == 9) {
    
              if(A[temp] == "x" && B[temp] == "x" && B[temp - 1] == "x" && C[temp] == "x" && A[temp - 1] == "x" && B[temp - 1] == "x" && C[temp - 1] == "x" && D[temp] == "x" && D[temp - 1] == "x" && E[temp] == "x" && E[temp - 1] == "x" && F[temp] == "x" && F[temp - 1] == "x" && G[temp] == "x" && G[temp - 1] == "x") {
    
                B[temp] = "p";
                C[temp] = "p"; 
                D[temp] = "p";
                E[temp] = "p";
                F[temp] = "p";
    
                AllShips1[0] -= 1;
    
                Embeds.error(ChannelFP1, `/ 1 2 3 4 5 6 7 8 9 10\na ${A[0]} ${A[1]} ${A[2]} ${A[3]} ${A[4]} ${A[5]} ${A[6]} ${A[7]} ${A[8]} ${A[9]}\nb ${B[0]} ${B[1]} ${B[2]} ${B[3]} ${B[4]} ${B[5]} ${B[6]} ${B[7]} ${B[8]} ${B[9]}\nc ${C[0]} ${C[1]} ${C[2]} ${C[3]} ${C[4]} ${C[5]} ${C[6]} ${C[7]} ${C[8]} ${C[9]}\nd ${D[0]} ${D[1]} ${D[2]} ${D[3]} ${D[4]} ${D[5]} ${D[6]} ${D[7]} ${D[8]} ${D[9]}\ne ${E[0]} ${E[1]} ${E[2]} ${E[3]} ${E[4]} ${E[5]} ${E[6]} ${E[7]} ${E[8]} ${E[9]}\nf ${F[0]} ${F[1]} ${F[2]} ${F[3]} ${F[4]} ${F[5]} ${F[6]} ${F[7]} ${F[8]} ${F[9]}\ng ${G[0]} ${G[1]} ${G[2]} ${G[3]} ${G[4]} ${G[5]} ${G[6]} ${G[7]} ${G[8]} ${G[9]}\n`)
    
              }
    
            } else {
    
              msg.channel.send("You cant place that ship there!")
    
            }
    
          } else if (args[3].toString() == "H") {
    
            if(temp + 5 == 10) {
    
              if(E[temp] == "x" && E[temp + 1] == "x" && E[temp + 2] == "x" && E[temp + 3] == "x" && E[temp + 4] == "x" && E[temp - 1] == "x" && F[temp] == "x" && F[temp + 1] == "x" && F[temp + 2] == "x" && F[temp + 3] == "x" && F[temp + 4] == "x" && F[temp - 1] == "x" && G[temp] == "x" && G[temp + 1] == "x" && G[temp + 2] == "x" && G[temp + 3] == "x" && G[temp + 4] == "x" && G[temp - 1] == "x") {
    
                F[temp] = "p";
                F[temp + 1] = "p"; 
                F[temp + 2] = "p"; 
                F[temp + 3] = "p";
                F[temp + 4] = "p";
    
                AllShips1[0] -= 1;
    
                Embeds.error(ChannelFP1, `/ 1 2 3 4 5 6 7 8 9 10\na ${A[0]} ${A[1]} ${A[2]} ${A[3]} ${A[4]} ${A[5]} ${A[6]} ${A[7]} ${A[8]} ${A[9]}\nb ${B[0]} ${B[1]} ${B[2]} ${B[3]} ${B[4]} ${B[5]} ${B[6]} ${B[7]} ${B[8]} ${B[9]}\nc ${C[0]} ${C[1]} ${C[2]} ${C[3]} ${C[4]} ${C[5]} ${C[6]} ${C[7]} ${C[8]} ${C[9]}\nd ${D[0]} ${D[1]} ${D[2]} ${D[3]} ${D[4]} ${D[5]} ${D[6]} ${D[7]} ${D[8]} ${D[9]}\ne ${E[0]} ${E[1]} ${E[2]} ${E[3]} ${E[4]} ${E[5]} ${E[6]} ${E[7]} ${E[8]} ${E[9]}\nf ${F[0]} ${F[1]} ${F[2]} ${F[3]} ${F[4]} ${F[5]} ${F[6]} ${F[7]} ${F[8]} ${F[9]}\ng ${G[0]} ${G[1]} ${G[2]} ${G[3]} ${G[4]} ${G[5]} ${G[6]} ${G[7]} ${G[8]} ${G[9]}\n`)
    
              } else {
    
                msg.channel.send("You cant place that ship there!")
    
              }
              
            } else if (temp + 5 < 10) {
    
            if(E[temp] == "x" && E[temp + 1] == "x" && E[temp + 2] == "x" && E[temp + 3] == "x" && E[temp + 4] == "x" && E[temp - 1] == "x" && F[temp] == "x" && F[temp + 1] == "x" && F[temp + 2] == "x" && F[temp + 3] == "x" && F[temp + 4] == "x" && F[temp - 1] == "x" && G[temp] == "x" && G[temp + 1] == "x" && G[temp + 2] == "x" && G[temp + 3] == "x" && G[temp + 4] == "x" && G[temp - 1] == "x" && E[temp + 5] == "x" && F[temp + 5] == "x" && G[temp + 5] == "x") {
    
              F[temp] = "p";
              F[temp + 1] = "p"; 
              F[temp + 2] = "p"; 
              F[temp + 3] = "p";
              F[temp + 4] = "p";
    
              AllShips1[0] -= 1;
    
              Embeds.error(ChannelFP1, `/ 1 2 3 4 5 6 7 8 9 10\na ${A[0]} ${A[1]} ${A[2]} ${A[3]} ${A[4]} ${A[5]} ${A[6]} ${A[7]} ${A[8]} ${A[9]}\nb ${B[0]} ${B[1]} ${B[2]} ${B[3]} ${B[4]} ${B[5]} ${B[6]} ${B[7]} ${B[8]} ${B[9]}\nc ${C[0]} ${C[1]} ${C[2]} ${C[3]} ${C[4]} ${C[5]} ${C[6]} ${C[7]} ${C[8]} ${C[9]}\nd ${D[0]} ${D[1]} ${D[2]} ${D[3]} ${D[4]} ${D[5]} ${D[6]} ${D[7]} ${D[8]} ${D[9]}\ne ${E[0]} ${E[1]} ${E[2]} ${E[3]} ${E[4]} ${E[5]} ${E[6]} ${E[7]} ${E[8]} ${E[9]}\nf ${F[0]} ${F[1]} ${F[2]} ${F[3]} ${F[4]} ${F[5]} ${F[6]} ${F[7]} ${F[8]} ${F[9]}\ng ${G[0]} ${G[1]} ${G[2]} ${G[3]} ${G[4]} ${G[5]} ${G[6]} ${G[7]} ${G[8]} ${G[9]}\n`)
    
            } else {
    
              msg.channel.send("You cant place that ship there!")
    
            }
    
          }
    
          }
    
        } else if(args[2].toString() == "C" && AllShips1[1] != 0) {
    
          if(args[3].toString() == "V") {
    
            if (temp > 0 && temp < 9) {
    
              if(B[temp] == "x" && C[temp] == "x" && B[temp + 1] == "x" && C[temp + 1] == "x" && D[temp] == "x" && D[temp + 1] == "x" && B[temp - 1] == "x" && C[temp - 1] == "x" && D[temp - 1] == "x" && E[temp] == "x" && E[temp + 1] == "x" && E[temp - 1] == "x" && F[temp] == "x" && F[temp - 1] == "x" && F[temp + 1] == "x" && G[temp] == "x" && G[temp - 1] == "x" && G[temp + 1] == "x") {
    
                C[temp] = "p";
                D[temp] = "p";
                E[temp] = "p"; 
                F[temp] = "p";
    
                AllShips1[1] -= 1;
    
                Embeds.error(ChannelFP1, `/ 1 2 3 4 5 6 7 8 9 10\na ${A[0]} ${A[1]} ${A[2]} ${A[3]} ${A[4]} ${A[5]} ${A[6]} ${A[7]} ${A[8]} ${A[9]}\nb ${B[0]} ${B[1]} ${B[2]} ${B[3]} ${B[4]} ${B[5]} ${B[6]} ${B[7]} ${B[8]} ${B[9]}\nc ${C[0]} ${C[1]} ${C[2]} ${C[3]} ${C[4]} ${C[5]} ${C[6]} ${C[7]} ${C[8]} ${C[9]}\nd ${D[0]} ${D[1]} ${D[2]} ${D[3]} ${D[4]} ${D[5]} ${D[6]} ${D[7]} ${D[8]} ${D[9]}\ne ${E[0]} ${E[1]} ${E[2]} ${E[3]} ${E[4]} ${E[5]} ${E[6]} ${E[7]} ${E[8]} ${E[9]}\nf ${F[0]} ${F[1]} ${F[2]} ${F[3]} ${F[4]} ${F[5]} ${F[6]} ${F[7]} ${F[8]} ${F[9]}\ng ${G[0]} ${G[1]} ${G[2]} ${G[3]} ${G[4]} ${G[5]} ${G[6]} ${G[7]} ${G[8]} ${G[9]}\n`)
    
              }
    
            } else if (temp == 9) {
    
              if(B[temp] == "x" && C[temp] == "x" && C[temp - 1] == "x" && D[temp] == "x" && B[temp - 1] == "x" && C[temp - 1] == "x" && D[temp - 1] == "x" && E[temp] == "x" && E[temp - 1] == "x" && F[temp] == "x" && F[temp - 1] == "x" && G[temp] == "x" && G[temp - 1] == "x") {
    
                C[temp] = "p";
                D[temp] = "p"; 
                E[temp] = "p";
                F[temp] = "p";
    
                AllShips1[1] -= 1;
    
                Embeds.error(ChannelFP1, `/ 1 2 3 4 5 6 7 8 9 10\na ${A[0]} ${A[1]} ${A[2]} ${A[3]} ${A[4]} ${A[5]} ${A[6]} ${A[7]} ${A[8]} ${A[9]}\nb ${B[0]} ${B[1]} ${B[2]} ${B[3]} ${B[4]} ${B[5]} ${B[6]} ${B[7]} ${B[8]} ${B[9]}\nc ${C[0]} ${C[1]} ${C[2]} ${C[3]} ${C[4]} ${C[5]} ${C[6]} ${C[7]} ${C[8]} ${C[9]}\nd ${D[0]} ${D[1]} ${D[2]} ${D[3]} ${D[4]} ${D[5]} ${D[6]} ${D[7]} ${D[8]} ${D[9]}\ne ${E[0]} ${E[1]} ${E[2]} ${E[3]} ${E[4]} ${E[5]} ${E[6]} ${E[7]} ${E[8]} ${E[9]}\nf ${F[0]} ${F[1]} ${F[2]} ${F[3]} ${F[4]} ${F[5]} ${F[6]} ${F[7]} ${F[8]} ${F[9]}\ng ${G[0]} ${G[1]} ${G[2]} ${G[3]} ${G[4]} ${G[5]} ${G[6]} ${G[7]} ${G[8]} ${G[9]}\n`)
    
              }
    
            } else {
    
              msg.channel.send("You cant place that ship there!")
    
            }
    
          } else if (args[3].toString() == "H") {
    
            if(temp + 4 == 10) {
    
              if(E[temp] == "x" && E[temp + 1] == "x" && E[temp + 2] == "x" && E[temp + 3] == "x" && E[temp - 1] == "x" && F[temp] == "x" && F[temp + 1] == "x" && F[temp + 2] == "x" && F[temp + 3] == "x" && F[temp - 1] == "x" && G[temp] == "x" && G[temp + 1] == "x" && G[temp + 2] == "x" && G[temp + 3] == "x" && G[temp - 1] == "x") {
    
                F[temp] = "p";
                F[temp + 1] = "p"; 
                F[temp + 2] = "p"; 
                F[temp + 3] = "p";
    
                AllShips1[1] -= 1;
    
                Embeds.error(ChannelFP1, `/ 1 2 3 4 5 6 7 8 9 10\na ${A[0]} ${A[1]} ${A[2]} ${A[3]} ${A[4]} ${A[5]} ${A[6]} ${A[7]} ${A[8]} ${A[9]}\nb ${B[0]} ${B[1]} ${B[2]} ${B[3]} ${B[4]} ${B[5]} ${B[6]} ${B[7]} ${B[8]} ${B[9]}\nc ${C[0]} ${C[1]} ${C[2]} ${C[3]} ${C[4]} ${C[5]} ${C[6]} ${C[7]} ${C[8]} ${C[9]}\nd ${D[0]} ${D[1]} ${D[2]} ${D[3]} ${D[4]} ${D[5]} ${D[6]} ${D[7]} ${D[8]} ${D[9]}\ne ${E[0]} ${E[1]} ${E[2]} ${E[3]} ${E[4]} ${E[5]} ${E[6]} ${E[7]} ${E[8]} ${E[9]}\nf ${F[0]} ${F[1]} ${F[2]} ${F[3]} ${F[4]} ${F[5]} ${F[6]} ${F[7]} ${F[8]} ${F[9]}\ng ${G[0]} ${G[1]} ${G[2]} ${G[3]} ${G[4]} ${G[5]} ${G[6]} ${G[7]} ${G[8]} ${G[9]}\n`)
    
              } else {
    
                msg.channel.send("You cant place that ship there!")
    
              }
    
            } else if (temp + 4 < 10) {
    
              if(E[temp] == "x" && E[temp + 1] == "x" && E[temp + 2] == "x" && E[temp + 3] == "x" && E[temp + 4] == "x" && E[temp - 1] == "x" && F[temp] == "x" && F[temp + 1] == "x" && F[temp + 2] == "x" && F[temp + 3] == "x" && F[temp + 4] == "x" && F[temp - 1] == "x" && G[temp] == "x" && G[temp + 1] == "x" && G[temp + 2] == "x" && G[temp + 3] == "x" && G[temp + 4] == "x" && G[temp - 1] == "x") {
    
                F[temp] = "p";
                F[temp + 1] = "p"; 
                F[temp + 2] = "p"; 
                F[temp + 3] = "p";
    
              AllShips1[1] -= 1;
    
              Embeds.error(ChannelFP1, `/ 1 2 3 4 5 6 7 8 9 10\na ${A[0]} ${A[1]} ${A[2]} ${A[3]} ${A[4]} ${A[5]} ${A[6]} ${A[7]} ${A[8]} ${A[9]}\nb ${B[0]} ${B[1]} ${B[2]} ${B[3]} ${B[4]} ${B[5]} ${B[6]} ${B[7]} ${B[8]} ${B[9]}\nc ${C[0]} ${C[1]} ${C[2]} ${C[3]} ${C[4]} ${C[5]} ${C[6]} ${C[7]} ${C[8]} ${C[9]}\nd ${D[0]} ${D[1]} ${D[2]} ${D[3]} ${D[4]} ${D[5]} ${D[6]} ${D[7]} ${D[8]} ${D[9]}\ne ${E[0]} ${E[1]} ${E[2]} ${E[3]} ${E[4]} ${E[5]} ${E[6]} ${E[7]} ${E[8]} ${E[9]}\nf ${F[0]} ${F[1]} ${F[2]} ${F[3]} ${F[4]} ${F[5]} ${F[6]} ${F[7]} ${F[8]} ${F[9]}\ng ${G[0]} ${G[1]} ${G[2]} ${G[3]} ${G[4]} ${G[5]} ${G[6]} ${G[7]} ${G[8]} ${G[9]}\n`)
    
            } else {
    
              msg.channel.send("You cant place that ship there!")
    
            }
    
          }
    
          }
    
        } else if(args[2].toString() == "F" && AllShips1[2] != 0) {
    
          if(args[3].toString() == "V") {
    
            if (temp > 0 && temp < 9) {
    
              if(C[temp] == "x" && D[temp] == "x" && C[temp + 1] == "x" && D[temp + 1] == "x" && E[temp] == "x" && E[temp + 1] == "x" && C[temp - 1] == "x" && D[temp - 1] == "x" && E[temp - 1] == "x" && F[temp] == "x" && F[temp + 1] == "x" && F[temp - 1] == "x" && G[temp] == "x" && G[temp - 1] == "x" && G[temp + 1] == "x") {
    
                D[temp] = "p";
                E[temp] = "p";
                F[temp] = "p"; 
    
                AllShips1[2] -= 1;
    
                Embeds.error(ChannelFP1, `/ 1 2 3 4 5 6 7 8 9 10\na ${A[0]} ${A[1]} ${A[2]} ${A[3]} ${A[4]} ${A[5]} ${A[6]} ${A[7]} ${A[8]} ${A[9]}\nb ${B[0]} ${B[1]} ${B[2]} ${B[3]} ${B[4]} ${B[5]} ${B[6]} ${B[7]} ${B[8]} ${B[9]}\nc ${C[0]} ${C[1]} ${C[2]} ${C[3]} ${C[4]} ${C[5]} ${C[6]} ${C[7]} ${C[8]} ${C[9]}\nd ${D[0]} ${D[1]} ${D[2]} ${D[3]} ${D[4]} ${D[5]} ${D[6]} ${D[7]} ${D[8]} ${D[9]}\ne ${E[0]} ${E[1]} ${E[2]} ${E[3]} ${E[4]} ${E[5]} ${E[6]} ${E[7]} ${E[8]} ${E[9]}\nf ${F[0]} ${F[1]} ${F[2]} ${F[3]} ${F[4]} ${F[5]} ${F[6]} ${F[7]} ${F[8]} ${F[9]}\ng ${G[0]} ${G[1]} ${G[2]} ${G[3]} ${G[4]} ${G[5]} ${G[6]} ${G[7]} ${G[8]} ${G[9]}\n`)
    
              }
    
            } else if (temp == 9) {
    
              if(C[temp] == "x" && D[temp] == "x" && E[temp] == "x" && C[temp - 1] == "x" && D[temp - 1] == "x" && E[temp - 1] == "x" && F[temp] == "x" && F[temp - 1] == "x" && G[temp] == "x" && G[temp - 1] == "x") {
    
                D[temp] = "p";
                E[temp] = "p"; 
                F[temp] = "p";
    
                AllShips1[2] -= 1;
    
                Embeds.error(ChannelFP1, `/ 1 2 3 4 5 6 7 8 9 10\na ${A[0]} ${A[1]} ${A[2]} ${A[3]} ${A[4]} ${A[5]} ${A[6]} ${A[7]} ${A[8]} ${A[9]}\nb ${B[0]} ${B[1]} ${B[2]} ${B[3]} ${B[4]} ${B[5]} ${B[6]} ${B[7]} ${B[8]} ${B[9]}\nc ${C[0]} ${C[1]} ${C[2]} ${C[3]} ${C[4]} ${C[5]} ${C[6]} ${C[7]} ${C[8]} ${C[9]}\nd ${D[0]} ${D[1]} ${D[2]} ${D[3]} ${D[4]} ${D[5]} ${D[6]} ${D[7]} ${D[8]} ${D[9]}\ne ${E[0]} ${E[1]} ${E[2]} ${E[3]} ${E[4]} ${E[5]} ${E[6]} ${E[7]} ${E[8]} ${E[9]}\nf ${F[0]} ${F[1]} ${F[2]} ${F[3]} ${F[4]} ${F[5]} ${F[6]} ${F[7]} ${F[8]} ${F[9]}\ng ${G[0]} ${G[1]} ${G[2]} ${G[3]} ${G[4]} ${G[5]} ${G[6]} ${G[7]} ${G[8]} ${G[9]}\n`)
    
              }
    
            } else {
    
              msg.channel.send("You cant place that ship there!")
    
            }
    
          } else if (args[3].toString() == "H") {
    
            if(temp + 3 == 10) {
    
              if(E[temp] == "x" && E[temp + 1] == "x" && E[temp + 2] == "x" && E[temp - 1] == "x" && F[temp] == "x" && F[temp + 1] == "x" && F[temp + 2] == "x" && F[temp - 1] == "x" && G[temp] == "x" && G[temp + 1] == "x" && G[temp + 2] == "x" && G[temp - 1] == "x") {
    
                F[temp] = "p";
                F[temp + 1] = "p"; 
                F[temp + 2] = "p"; 
    
                AllShips1[2] -= 1;
    
                Embeds.error(ChannelFP1, `/ 1 2 3 4 5 6 7 8 9 10\na ${A[0]} ${A[1]} ${A[2]} ${A[3]} ${A[4]} ${A[5]} ${A[6]} ${A[7]} ${A[8]} ${A[9]}\nb ${B[0]} ${B[1]} ${B[2]} ${B[3]} ${B[4]} ${B[5]} ${B[6]} ${B[7]} ${B[8]} ${B[9]}\nc ${C[0]} ${C[1]} ${C[2]} ${C[3]} ${C[4]} ${C[5]} ${C[6]} ${C[7]} ${C[8]} ${C[9]}\nd ${D[0]} ${D[1]} ${D[2]} ${D[3]} ${D[4]} ${D[5]} ${D[6]} ${D[7]} ${D[8]} ${D[9]}\ne ${E[0]} ${E[1]} ${E[2]} ${E[3]} ${E[4]} ${E[5]} ${E[6]} ${E[7]} ${E[8]} ${E[9]}\nf ${F[0]} ${F[1]} ${F[2]} ${F[3]} ${F[4]} ${F[5]} ${F[6]} ${F[7]} ${F[8]} ${F[9]}\ng ${G[0]} ${G[1]} ${G[2]} ${G[3]} ${G[4]} ${G[5]} ${G[6]} ${G[7]} ${G[8]} ${G[9]}\n`)
    
              } else {
    
                msg.channel.send("You cant place that ship there!")
    
              }
    
            } else if (temp + 3 < 10) {
    
              if(E[temp] == "x" && E[temp + 1] == "x" && E[temp + 2] == "x" && E[temp + 3] == "x" && E[temp - 1] == "x" && F[temp] == "x" && F[temp + 1] == "x" && F[temp + 2] == "x" && F[temp + 3] == "x" && F[temp - 1] == "x" && G[temp] == "x" && G[temp + 1] == "x" && G[temp + 2] == "x" && G[temp + 3] == "x" && G[temp - 1] == "x") {
    
              F[temp] = "p";
              F[temp + 1] = "p"; 
              F[temp + 2] = "p"; 
    
              AllShips1[2] -= 1;
    
              Embeds.error(ChannelFP1, `/ 1 2 3 4 5 6 7 8 9 10\na ${A[0]} ${A[1]} ${A[2]} ${A[3]} ${A[4]} ${A[5]} ${A[6]} ${A[7]} ${A[8]} ${A[9]}\nb ${B[0]} ${B[1]} ${B[2]} ${B[3]} ${B[4]} ${B[5]} ${B[6]} ${B[7]} ${B[8]} ${B[9]}\nc ${C[0]} ${C[1]} ${C[2]} ${C[3]} ${C[4]} ${C[5]} ${C[6]} ${C[7]} ${C[8]} ${C[9]}\nd ${D[0]} ${D[1]} ${D[2]} ${D[3]} ${D[4]} ${D[5]} ${D[6]} ${D[7]} ${D[8]} ${D[9]}\ne ${E[0]} ${E[1]} ${E[2]} ${E[3]} ${E[4]} ${E[5]} ${E[6]} ${E[7]} ${E[8]} ${E[9]}\nf ${F[0]} ${F[1]} ${F[2]} ${F[3]} ${F[4]} ${F[5]} ${F[6]} ${F[7]} ${F[8]} ${F[9]}\ng ${G[0]} ${G[1]} ${G[2]} ${G[3]} ${G[4]} ${G[5]} ${G[6]} ${G[7]} ${G[8]} ${G[9]}\n`)
    
            } else {
    
              msg.channel.send("You cant place that ship there!")
    
            }
    
          }
    
          }
    
        } else if(args[2].toString() == "M" && AllShips1[3] != 0) {
    
          if(args[3].toString() == "V") {
    
            if (temp > 0 && temp < 9) {
    
              if(D[temp] == "x" && D[temp + 1] == "x" && E[temp] == "x" && E[temp + 1] == "x" && D[temp - 1] == "x" && E[temp - 1] == "x" && F[temp] == "x" && F[temp + 1] == "x" && F[temp - 1] == "x" && G[temp] == "x" && G[temp - 1] == "x" && G[temp + 1] == "x") {
    
                E[temp] = "p";
                F[temp] = "p"; 
    
                AllShips1[3] -= 1;
    
                Embeds.error(ChannelFP1, `/ 1 2 3 4 5 6 7 8 9 10\na ${A[0]} ${A[1]} ${A[2]} ${A[3]} ${A[4]} ${A[5]} ${A[6]} ${A[7]} ${A[8]} ${A[9]}\nb ${B[0]} ${B[1]} ${B[2]} ${B[3]} ${B[4]} ${B[5]} ${B[6]} ${B[7]} ${B[8]} ${B[9]}\nc ${C[0]} ${C[1]} ${C[2]} ${C[3]} ${C[4]} ${C[5]} ${C[6]} ${C[7]} ${C[8]} ${C[9]}\nd ${D[0]} ${D[1]} ${D[2]} ${D[3]} ${D[4]} ${D[5]} ${D[6]} ${D[7]} ${D[8]} ${D[9]}\ne ${E[0]} ${E[1]} ${E[2]} ${E[3]} ${E[4]} ${E[5]} ${E[6]} ${E[7]} ${E[8]} ${E[9]}\nf ${F[0]} ${F[1]} ${F[2]} ${F[3]} ${F[4]} ${F[5]} ${F[6]} ${F[7]} ${F[8]} ${F[9]}\ng ${G[0]} ${G[1]} ${G[2]} ${G[3]} ${G[4]} ${G[5]} ${G[6]} ${G[7]} ${G[8]} ${G[9]}\n`)
    
              }
    
            } else if (temp == 9) {
    
              if(D[temp] == "x" && D[temp - 1] == "x" && E[temp] == "x" && E[temp - 1] == "x" && F[temp] == "x" && F[temp - 1] == "x" && G[temp] == "x" && G[temp - 1] == "x") {
    
                E[temp] = "p";
                F[temp] = "p"; 
    
                AllShips1[3] -= 1;
    
                Embeds.error(ChannelFP1, `/ 1 2 3 4 5 6 7 8 9 10\na ${A[0]} ${A[1]} ${A[2]} ${A[3]} ${A[4]} ${A[5]} ${A[6]} ${A[7]} ${A[8]} ${A[9]}\nb ${B[0]} ${B[1]} ${B[2]} ${B[3]} ${B[4]} ${B[5]} ${B[6]} ${B[7]} ${B[8]} ${B[9]}\nc ${C[0]} ${C[1]} ${C[2]} ${C[3]} ${C[4]} ${C[5]} ${C[6]} ${C[7]} ${C[8]} ${C[9]}\nd ${D[0]} ${D[1]} ${D[2]} ${D[3]} ${D[4]} ${D[5]} ${D[6]} ${D[7]} ${D[8]} ${D[9]}\ne ${E[0]} ${E[1]} ${E[2]} ${E[3]} ${E[4]} ${E[5]} ${E[6]} ${E[7]} ${E[8]} ${E[9]}\nf ${F[0]} ${F[1]} ${F[2]} ${F[3]} ${F[4]} ${F[5]} ${F[6]} ${F[7]} ${F[8]} ${F[9]}\ng ${G[0]} ${G[1]} ${G[2]} ${G[3]} ${G[4]} ${G[5]} ${G[6]} ${G[7]} ${G[8]} ${G[9]}\n`)
    
              }
    
            } else {
    
              msg.channel.send("You cant place that ship there!")
    
            }
    
          } else if (args[3].toString() == "H") {
    
            if(temp + 2 == 10) {
    
              if(E[temp] == "x" && E[temp + 1] == "x" && E[temp - 1] == "x" && F[temp] == "x" && F[temp + 1] == "x" && F[temp - 1] == "x" && G[temp] == "x" && G[temp + 1] == "x" && G[temp - 1] == "x") {
    
                F[temp] = "p";
                F[temp + 1] = "p"; 
    
                AllShips1[3] -= 1;
    
                Embeds.error(ChannelFP1, `/ 1 2 3 4 5 6 7 8 9 10\na ${A[0]} ${A[1]} ${A[2]} ${A[3]} ${A[4]} ${A[5]} ${A[6]} ${A[7]} ${A[8]} ${A[9]}\nb ${B[0]} ${B[1]} ${B[2]} ${B[3]} ${B[4]} ${B[5]} ${B[6]} ${B[7]} ${B[8]} ${B[9]}\nc ${C[0]} ${C[1]} ${C[2]} ${C[3]} ${C[4]} ${C[5]} ${C[6]} ${C[7]} ${C[8]} ${C[9]}\nd ${D[0]} ${D[1]} ${D[2]} ${D[3]} ${D[4]} ${D[5]} ${D[6]} ${D[7]} ${D[8]} ${D[9]}\ne ${E[0]} ${E[1]} ${E[2]} ${E[3]} ${E[4]} ${E[5]} ${E[6]} ${E[7]} ${E[8]} ${E[9]}\nf ${F[0]} ${F[1]} ${F[2]} ${F[3]} ${F[4]} ${F[5]} ${F[6]} ${F[7]} ${F[8]} ${F[9]}\ng ${G[0]} ${G[1]} ${G[2]} ${G[3]} ${G[4]} ${G[5]} ${G[6]} ${G[7]} ${G[8]} ${G[9]}\n`)
    
              } else {
    
                msg.channel.send("You cant place that ship there!")
    
              }
    
            } else if (temp + 2 < 10) {
    
            if(E[temp] == "x" && E[temp + 1] == "x" && E[temp + 2] == "x" && E[temp - 1] == "x" && F[temp] == "x" && F[temp + 1] == "x" && F[temp + 2] == "x" && F[temp - 1] == "x" && G[temp] == "x" && G[temp + 1] == "x" && G[temp + 2] == "x" && G[temp - 1] == "x") {
    
              F[temp] = "p";
              F[temp + 1] = "p"; 
    
              AllShips1[3] -= 1;
    
              Embeds.error(ChannelFP1, `/ 1 2 3 4 5 6 7 8 9 10\na ${A[0]} ${A[1]} ${A[2]} ${A[3]} ${A[4]} ${A[5]} ${A[6]} ${A[7]} ${A[8]} ${A[9]}\nb ${B[0]} ${B[1]} ${B[2]} ${B[3]} ${B[4]} ${B[5]} ${B[6]} ${B[7]} ${B[8]} ${B[9]}\nc ${C[0]} ${C[1]} ${C[2]} ${C[3]} ${C[4]} ${C[5]} ${C[6]} ${C[7]} ${C[8]} ${C[9]}\nd ${D[0]} ${D[1]} ${D[2]} ${D[3]} ${D[4]} ${D[5]} ${D[6]} ${D[7]} ${D[8]} ${D[9]}\ne ${E[0]} ${E[1]} ${E[2]} ${E[3]} ${E[4]} ${E[5]} ${E[6]} ${E[7]} ${E[8]} ${E[9]}\nf ${F[0]} ${F[1]} ${F[2]} ${F[3]} ${F[4]} ${F[5]} ${F[6]} ${F[7]} ${F[8]} ${F[9]}\ng ${G[0]} ${G[1]} ${G[2]} ${G[3]} ${G[4]} ${G[5]} ${G[6]} ${G[7]} ${G[8]} ${G[9]}\n`)
    
            } else {
    
              msg.channel.send("You cant place that ship there!")
    
            }
    
          }
    
          }
    
        } else {
    
          msg.channel.send("You used all ships of this kind")
    
        }
    
      } else if (temp == 0) {
    
        if(args[2].toString() == "B" && AllShips1[0] != 0) {
    
          if(args[3].toString() == "V") {
    
            if(A[temp] == "x" && B[temp] == "x" && B[temp + 1] == "x" && C[temp] == "x" && A[temp + 1] == "x" && B[temp + 1] == "x" && C[temp + 1] == "x" && D[temp] == "x" && D[temp + 1] == "x" && E[temp] == "x" && E[temp + 1] == "x" && F[temp] == "x" && F[temp + 1] == "x" && G[temp] == "x" && G[temp + 1] == "x") {
    
              B[temp] = "p";
              C[temp] = "p"; 
              D[temp] = "p";
              E[temp] = "p";
              F[temp] = "p";
    
              AllShips1[0] -= 1;
    
              Embeds.error(ChannelFP1, `/ 1 2 3 4 5 6 7 8 9 10\na ${A[0]} ${A[1]} ${A[2]} ${A[3]} ${A[4]} ${A[5]} ${A[6]} ${A[7]} ${A[8]} ${A[9]}\nb ${B[0]} ${B[1]} ${B[2]} ${B[3]} ${B[4]} ${B[5]} ${B[6]} ${B[7]} ${B[8]} ${B[9]}\nc ${C[0]} ${C[1]} ${C[2]} ${C[3]} ${C[4]} ${C[5]} ${C[6]} ${C[7]} ${C[8]} ${C[9]}\nd ${D[0]} ${D[1]} ${D[2]} ${D[3]} ${D[4]} ${D[5]} ${D[6]} ${D[7]} ${D[8]} ${D[9]}\ne ${E[0]} ${E[1]} ${E[2]} ${E[3]} ${E[4]} ${E[5]} ${E[6]} ${E[7]} ${E[8]} ${E[9]}\nf ${F[0]} ${F[1]} ${F[2]} ${F[3]} ${F[4]} ${F[5]} ${F[6]} ${F[7]} ${F[8]} ${F[9]}\ng ${G[0]} ${G[1]} ${G[2]} ${G[3]} ${G[4]} ${G[5]} ${G[6]} ${G[7]} ${G[8]} ${G[9]}\n`)
    
            } else {
    
            msg.channel.send("You cant place that ship there!")
    
          }
    
          } else if (args[3].toString() == "H") {
    
            if(E[temp] == "x" && E[temp + 1] == "x" && E[temp + 2] == "x" && E[temp + 3] == "x" && E[temp + 4] == "x" && E[temp + 5] == "x" && F[temp] == "x" && F[temp + 1] == "x" && F[temp + 2] == "x" && F[temp + 3] == "x" && F[temp + 4] == "x" && F[temp +5] == "x" && G[temp] == "x" && G[temp + 1] == "x" && G[temp + 2] == "x" && G[temp + 3] == "x" && G[temp + 4] == "x" && G[temp + 5] == "x") {
    
              F[temp] = "p";
              F[temp + 1] = "p"; 
              F[temp + 2] = "p"; 
              F[temp + 3] = "p";
              F[temp + 4] = "p";
    
              AllShips1[0] -= 1;
    
              Embeds.error(ChannelFP1, `/ 1 2 3 4 5 6 7 8 9 10\na ${A[0]} ${A[1]} ${A[2]} ${A[3]} ${A[4]} ${A[5]} ${A[6]} ${A[7]} ${A[8]} ${A[9]}\nb ${B[0]} ${B[1]} ${B[2]} ${B[3]} ${B[4]} ${B[5]} ${B[6]} ${B[7]} ${B[8]} ${B[9]}\nc ${C[0]} ${C[1]} ${C[2]} ${C[3]} ${C[4]} ${C[5]} ${C[6]} ${C[7]} ${C[8]} ${C[9]}\nd ${D[0]} ${D[1]} ${D[2]} ${D[3]} ${D[4]} ${D[5]} ${D[6]} ${D[7]} ${D[8]} ${D[9]}\ne ${E[0]} ${E[1]} ${E[2]} ${E[3]} ${E[4]} ${E[5]} ${E[6]} ${E[7]} ${E[8]} ${E[9]}\nf ${F[0]} ${F[1]} ${F[2]} ${F[3]} ${F[4]} ${F[5]} ${F[6]} ${F[7]} ${F[8]} ${F[9]}\ng ${G[0]} ${G[1]} ${G[2]} ${G[3]} ${G[4]} ${G[5]} ${G[6]} ${G[7]} ${G[8]} ${G[9]}\n`)
    
            } else {
    
              msg.channel.send("You cant place that ship there!")
    
            }
    
          }
    
        } else if(args[2].toString() == "C" && AllShips1[1] != 0) {
    
          if(args[3].toString() == "V") {
    
            if(B[temp] == "x" && C[temp] == "x" && C[temp + 1] == "x" && D[temp] == "x" && B[temp + 1] == "x" && C[temp + 1] == "x" && D[temp + 1] == "x" && E[temp] == "x" && E[temp + 1] == "x" && F[temp] == "x" && F[temp + 1] == "x" && G[temp] == "x" && G[temp + 1] == "x") {
    
              C[temp] = "p";
              D[temp] = "p";
              E[temp] = "p";
              F[temp] = "p"; 
    
              AllShips1[1] -= 1;
    
              Embeds.error(ChannelFP1, `/ 1 2 3 4 5 6 7 8 9 10\na ${A[0]} ${A[1]} ${A[2]} ${A[3]} ${A[4]} ${A[5]} ${A[6]} ${A[7]} ${A[8]} ${A[9]}\nb ${B[0]} ${B[1]} ${B[2]} ${B[3]} ${B[4]} ${B[5]} ${B[6]} ${B[7]} ${B[8]} ${B[9]}\nc ${C[0]} ${C[1]} ${C[2]} ${C[3]} ${C[4]} ${C[5]} ${C[6]} ${C[7]} ${C[8]} ${C[9]}\nd ${D[0]} ${D[1]} ${D[2]} ${D[3]} ${D[4]} ${D[5]} ${D[6]} ${D[7]} ${D[8]} ${D[9]}\ne ${E[0]} ${E[1]} ${E[2]} ${E[3]} ${E[4]} ${E[5]} ${E[6]} ${E[7]} ${E[8]} ${E[9]}\nf ${F[0]} ${F[1]} ${F[2]} ${F[3]} ${F[4]} ${F[5]} ${F[6]} ${F[7]} ${F[8]} ${F[9]}\ng ${G[0]} ${G[1]} ${G[2]} ${G[3]} ${G[4]} ${G[5]} ${G[6]} ${G[7]} ${G[8]} ${G[9]}\n`)
    
            } else {
    
              msg.channel.send("You cant place that ship there!")
    
            }
    
          } else if (args[3].toString() == "H") {
    
            if(E[temp] == "x" && E[temp + 1] == "x" && E[temp + 2] == "x" && E[temp + 3] == "x" && E[temp + 4] == "x" && F[temp] == "x" && F[temp + 1] == "x" && F[temp + 2] == "x" && F[temp + 3] == "x" && F[temp + 4] == "x" && G[temp] == "x" && G[temp + 1] == "x" && G[temp + 2] == "x" && G[temp + 3] == "x" && G[temp + 4] == "x") {
    
              F[temp] = "p";
              F[temp + 1] = "p"; 
              F[temp + 2] = "p"; 
              F[temp + 3] = "p";
    
              AllShips1[1] -= 1;
    
              Embeds.error(ChannelFP1, `/ 1 2 3 4 5 6 7 8 9 10\na ${A[0]} ${A[1]} ${A[2]} ${A[3]} ${A[4]} ${A[5]} ${A[6]} ${A[7]} ${A[8]} ${A[9]}\nb ${B[0]} ${B[1]} ${B[2]} ${B[3]} ${B[4]} ${B[5]} ${B[6]} ${B[7]} ${B[8]} ${B[9]}\nc ${C[0]} ${C[1]} ${C[2]} ${C[3]} ${C[4]} ${C[5]} ${C[6]} ${C[7]} ${C[8]} ${C[9]}\nd ${D[0]} ${D[1]} ${D[2]} ${D[3]} ${D[4]} ${D[5]} ${D[6]} ${D[7]} ${D[8]} ${D[9]}\ne ${E[0]} ${E[1]} ${E[2]} ${E[3]} ${E[4]} ${E[5]} ${E[6]} ${E[7]} ${E[8]} ${E[9]}\nf ${F[0]} ${F[1]} ${F[2]} ${F[3]} ${F[4]} ${F[5]} ${F[6]} ${F[7]} ${F[8]} ${F[9]}\ng ${G[0]} ${G[1]} ${G[2]} ${G[3]} ${G[4]} ${G[5]} ${G[6]} ${G[7]} ${G[8]} ${G[9]}\n`)
    
            } else {
    
              msg.channel.send("You cant place that ship there!")
    
            }
    
          }
    
        } else if(args[2].toString() == "F" && AllShips1[2] != 0) {
    
          if(args[3].toString() == "V") {
    
            if(C[temp] == "x" && C[temp + 1] == "x" && D[temp] == "x" && C[temp + 1] == "x" && D[temp + 1] == "x" && E[temp] == "x" && E[temp + 1] == "x" && F[temp] == "x" && F[temp + 1] == "x" && G[temp] == "x" && G[temp + 1] == "x") {
    
              D[temp] = "p";
              E[temp] = "p";
              F[temp] = "p"; 
    
              AllShips1[2] -= 1;
    
              Embeds.error(ChannelFP1, `/ 1 2 3 4 5 6 7 8 9 10\na ${A[0]} ${A[1]} ${A[2]} ${A[3]} ${A[4]} ${A[5]} ${A[6]} ${A[7]} ${A[8]} ${A[9]}\nb ${B[0]} ${B[1]} ${B[2]} ${B[3]} ${B[4]} ${B[5]} ${B[6]} ${B[7]} ${B[8]} ${B[9]}\nc ${C[0]} ${C[1]} ${C[2]} ${C[3]} ${C[4]} ${C[5]} ${C[6]} ${C[7]} ${C[8]} ${C[9]}\nd ${D[0]} ${D[1]} ${D[2]} ${D[3]} ${D[4]} ${D[5]} ${D[6]} ${D[7]} ${D[8]} ${D[9]}\ne ${E[0]} ${E[1]} ${E[2]} ${E[3]} ${E[4]} ${E[5]} ${E[6]} ${E[7]} ${E[8]} ${E[9]}\nf ${F[0]} ${F[1]} ${F[2]} ${F[3]} ${F[4]} ${F[5]} ${F[6]} ${F[7]} ${F[8]} ${F[9]}\ng ${G[0]} ${G[1]} ${G[2]} ${G[3]} ${G[4]} ${G[5]} ${G[6]} ${G[7]} ${G[8]} ${G[9]}\n`)
    
            } else {
    
              msg.channel.send("You cant place that ship there!")
    
            }
    
          } else if (args[3].toString() == "H") {
    
            if(E[temp] == "x" && E[temp + 1] == "x" && E[temp + 2] == "x" && E[temp + 3] == "x" && F[temp] == "x" && F[temp + 1] == "x" && F[temp + 2] == "x" && F[temp + 3] == "x" && G[temp] == "x" && G[temp + 1] == "x" && G[temp + 2] == "x" && G[temp + 3] == "x") {
    
              F[temp] = "p";
              F[temp + 1] = "p"; 
              F[temp + 2] = "p"; 
    
              AllShips1[2] -= 1;
    
              Embeds.error(ChannelFP1, `/ 1 2 3 4 5 6 7 8 9 10\na ${A[0]} ${A[1]} ${A[2]} ${A[3]} ${A[4]} ${A[5]} ${A[6]} ${A[7]} ${A[8]} ${A[9]}\nb ${B[0]} ${B[1]} ${B[2]} ${B[3]} ${B[4]} ${B[5]} ${B[6]} ${B[7]} ${B[8]} ${B[9]}\nc ${C[0]} ${C[1]} ${C[2]} ${C[3]} ${C[4]} ${C[5]} ${C[6]} ${C[7]} ${C[8]} ${C[9]}\nd ${D[0]} ${D[1]} ${D[2]} ${D[3]} ${D[4]} ${D[5]} ${D[6]} ${D[7]} ${D[8]} ${D[9]}\ne ${E[0]} ${E[1]} ${E[2]} ${E[3]} ${E[4]} ${E[5]} ${E[6]} ${E[7]} ${E[8]} ${E[9]}\nf ${F[0]} ${F[1]} ${F[2]} ${F[3]} ${F[4]} ${F[5]} ${F[6]} ${F[7]} ${F[8]} ${F[9]}\ng ${G[0]} ${G[1]} ${G[2]} ${G[3]} ${G[4]} ${G[5]} ${G[6]} ${G[7]} ${G[8]} ${G[9]}\n`)
    
            } else {
    
              msg.channel.send("You cant place that ship there!")
    
            }
    
          }
    
        } else if(args[2].toString() == "M" && AllShips1[3] != 0) {
    
          if(args[3].toString() == "V") {
    
            if(temp == 0) {
    
              if(D[temp] == "x" && D[temp + 1] == "x" && E[temp] == "x" && E[temp + 1] == "x" && F[temp] == "x" && F[temp + 1] == "x" && G[temp] == "x" && G[temp + 1] == "x") {
    
                E[temp] = "p";
                F[temp] = "p"; 
    
                AllShips1[3] -= 1;
    
                Embeds.error(ChannelFP1, `/ 1 2 3 4 5 6 7 8 9 10\na ${A[0]} ${A[1]} ${A[2]} ${A[3]} ${A[4]} ${A[5]} ${A[6]} ${A[7]} ${A[8]} ${A[9]}\nb ${B[0]} ${B[1]} ${B[2]} ${B[3]} ${B[4]} ${B[5]} ${B[6]} ${B[7]} ${B[8]} ${B[9]}\nc ${C[0]} ${C[1]} ${C[2]} ${C[3]} ${C[4]} ${C[5]} ${C[6]} ${C[7]} ${C[8]} ${C[9]}\nd ${D[0]} ${D[1]} ${D[2]} ${D[3]} ${D[4]} ${D[5]} ${D[6]} ${D[7]} ${D[8]} ${D[9]}\ne ${E[0]} ${E[1]} ${E[2]} ${E[3]} ${E[4]} ${E[5]} ${E[6]} ${E[7]} ${E[8]} ${E[9]}\nf ${F[0]} ${F[1]} ${F[2]} ${F[3]} ${F[4]} ${F[5]} ${F[6]} ${F[7]} ${F[8]} ${F[9]}\ng ${G[0]} ${G[1]} ${G[2]} ${G[3]} ${G[4]} ${G[5]} ${G[6]} ${G[7]} ${G[8]} ${G[9]}\n`)
    
              } else {
    
                msg.channel.send("You cant place that ship there!")
    
              }
    
            }
    
          } else if (args[3].toString() == "H") {
    
            if(E[temp] == "x" && E[temp + 1] == "x" && E[temp + 2] == "x" && F[temp] == "x" && F[temp + 1] == "x" && F[temp + 2] == "x" && G[temp] == "x" && G[temp + 1] == "x" && G[temp + 2] == "x") {
    
              F[temp] = "p";
              F[temp + 1] = "p"; 
    
              AllShips1[3] -= 1;
    
              Embeds.error(ChannelFP1, `/ 1 2 3 4 5 6 7 8 9 10\na ${A[0]} ${A[1]} ${A[2]} ${A[3]} ${A[4]} ${A[5]} ${A[6]} ${A[7]} ${A[8]} ${A[9]}\nb ${B[0]} ${B[1]} ${B[2]} ${B[3]} ${B[4]} ${B[5]} ${B[6]} ${B[7]} ${B[8]} ${B[9]}\nc ${C[0]} ${C[1]} ${C[2]} ${C[3]} ${C[4]} ${C[5]} ${C[6]} ${C[7]} ${C[8]} ${C[9]}\nd ${D[0]} ${D[1]} ${D[2]} ${D[3]} ${D[4]} ${D[5]} ${D[6]} ${D[7]} ${D[8]} ${D[9]}\ne ${E[0]} ${E[1]} ${E[2]} ${E[3]} ${E[4]} ${E[5]} ${E[6]} ${E[7]} ${E[8]} ${E[9]}\nf ${F[0]} ${F[1]} ${F[2]} ${F[3]} ${F[4]} ${F[5]} ${F[6]} ${F[7]} ${F[8]} ${F[9]}\ng ${G[0]} ${G[1]} ${G[2]} ${G[3]} ${G[4]} ${G[5]} ${G[6]} ${G[7]} ${G[8]} ${G[9]}\n`)
    
            } else {
    
              msg.channel.send("You cant place that ship there!")
    
            }
    
          }
    
        } else {
    
          msg.channel.send("You used all ships of this kind")
    
        }
    
      }
    
    } else if(args[0].toString() == "G") {

      var temp = parseInt(args[1] - 1)
    
      if(temp > 0) {
    
        if(args[2].toString() == "B" && AllShips1[0] != 0) {
    
          if(args[3].toString() == "V") {
    
            if (temp > 0 && temp < 9) {
    
              if(B[temp] == "x" && C[temp] == "x" && B[temp + 1] == "x" && C[temp + 1] == "x" && D[temp] == "x" && D[temp + 1] == "x" && B[temp - 1] == "x" && C[temp - 1] == "x" && D[temp - 1] == "x" && E[temp] == "x" && E[temp + 1] == "x" && E[temp - 1] == "x" && F[temp] == "x" && F[temp - 1] == "x" && F[temp + 1] == "x" && G[temp] == "x" && G[temp - 1] == "x" && G[temp + 1] == "x") {
    
                C[temp] = "p";
                D[temp] = "p";
                E[temp] = "p"; 
                F[temp] = "p";
                G[temp] = "p";
    
                AllShips1[0] -= 1;
    
                Embeds.error(ChannelFP1, `/ 1 2 3 4 5 6 7 8 9 10\na ${A[0]} ${A[1]} ${A[2]} ${A[3]} ${A[4]} ${A[5]} ${A[6]} ${A[7]} ${A[8]} ${A[9]}\nb ${B[0]} ${B[1]} ${B[2]} ${B[3]} ${B[4]} ${B[5]} ${B[6]} ${B[7]} ${B[8]} ${B[9]}\nc ${C[0]} ${C[1]} ${C[2]} ${C[3]} ${C[4]} ${C[5]} ${C[6]} ${C[7]} ${C[8]} ${C[9]}\nd ${D[0]} ${D[1]} ${D[2]} ${D[3]} ${D[4]} ${D[5]} ${D[6]} ${D[7]} ${D[8]} ${D[9]}\ne ${E[0]} ${E[1]} ${E[2]} ${E[3]} ${E[4]} ${E[5]} ${E[6]} ${E[7]} ${E[8]} ${E[9]}\nf ${F[0]} ${F[1]} ${F[2]} ${F[3]} ${F[4]} ${F[5]} ${F[6]} ${F[7]} ${F[8]} ${F[9]}\ng ${G[0]} ${G[1]} ${G[2]} ${G[3]} ${G[4]} ${G[5]} ${G[6]} ${G[7]} ${G[8]} ${G[9]}\n`)
    
              }
    
            } else if (temp == 9) {
    
              if(B[temp] == "x" && C[temp] == "x" && D[temp] == "x" && B[temp - 1] == "x" && C[temp - 1] == "x" && D[temp - 1] == "x" && E[temp] == "x" && E[temp - 1] == "x" && F[temp] == "x" && F[temp - 1] == "x" && G[temp] == "x" && G[temp - 1] == "x") {
    
                C[temp] = "p";
                D[temp] = "p"; 
                E[temp] = "p";
                F[temp] = "p";
                G[temp] = "p";
    
                AllShips1[0] -= 1;
    
                Embeds.error(ChannelFP1, `/ 1 2 3 4 5 6 7 8 9 10\na ${A[0]} ${A[1]} ${A[2]} ${A[3]} ${A[4]} ${A[5]} ${A[6]} ${A[7]} ${A[8]} ${A[9]}\nb ${B[0]} ${B[1]} ${B[2]} ${B[3]} ${B[4]} ${B[5]} ${B[6]} ${B[7]} ${B[8]} ${B[9]}\nc ${C[0]} ${C[1]} ${C[2]} ${C[3]} ${C[4]} ${C[5]} ${C[6]} ${C[7]} ${C[8]} ${C[9]}\nd ${D[0]} ${D[1]} ${D[2]} ${D[3]} ${D[4]} ${D[5]} ${D[6]} ${D[7]} ${D[8]} ${D[9]}\ne ${E[0]} ${E[1]} ${E[2]} ${E[3]} ${E[4]} ${E[5]} ${E[6]} ${E[7]} ${E[8]} ${E[9]}\nf ${F[0]} ${F[1]} ${F[2]} ${F[3]} ${F[4]} ${F[5]} ${F[6]} ${F[7]} ${F[8]} ${F[9]}\ng ${G[0]} ${G[1]} ${G[2]} ${G[3]} ${G[4]} ${G[5]} ${G[6]} ${G[7]} ${G[8]} ${G[9]}\n`)
    
              }
    
            } else {
    
              msg.channel.send("You cant place that ship there!")
    
            }
    
          } else if (args[3].toString() == "H") {
    
            if(temp + 5 == 10) {
    
              if(F[temp] == "x" && F[temp + 1] == "x" && F[temp + 2] == "x" && F[temp + 3] == "x" && F[temp + 4] == "x" && F[temp - 1] == "x" && G[temp] == "x" && G[temp + 1] == "x" && G[temp + 2] == "x" && G[temp + 3] == "x" && G[temp + 4] == "x" && G[temp - 1] == "x") {
    
                G[temp] = "p";
                G[temp + 1] = "p"; 
                G[temp + 2] = "p"; 
                G[temp + 3] = "p";
                G[temp + 4] = "p";
    
                AllShips1[0] -= 1;
    
                Embeds.error(ChannelFP1, `/ 1 2 3 4 5 6 7 8 9 10\na ${A[0]} ${A[1]} ${A[2]} ${A[3]} ${A[4]} ${A[5]} ${A[6]} ${A[7]} ${A[8]} ${A[9]}\nb ${B[0]} ${B[1]} ${B[2]} ${B[3]} ${B[4]} ${B[5]} ${B[6]} ${B[7]} ${B[8]} ${B[9]}\nc ${C[0]} ${C[1]} ${C[2]} ${C[3]} ${C[4]} ${C[5]} ${C[6]} ${C[7]} ${C[8]} ${C[9]}\nd ${D[0]} ${D[1]} ${D[2]} ${D[3]} ${D[4]} ${D[5]} ${D[6]} ${D[7]} ${D[8]} ${D[9]}\ne ${E[0]} ${E[1]} ${E[2]} ${E[3]} ${E[4]} ${E[5]} ${E[6]} ${E[7]} ${E[8]} ${E[9]}\nf ${F[0]} ${F[1]} ${F[2]} ${F[3]} ${F[4]} ${F[5]} ${F[6]} ${F[7]} ${F[8]} ${F[9]}\ng ${G[0]} ${G[1]} ${G[2]} ${G[3]} ${G[4]} ${G[5]} ${G[6]} ${G[7]} ${G[8]} ${G[9]}\n`)
    
              } else {
    
                msg.channel.send("You cant place that ship there!")
    
              }
              
            } else if (temp + 5 < 10) {
    
            if(F[temp] == "x" && F[temp + 1] == "x" && F[temp + 2] == "x" && F[temp + 3] == "x" && F[temp + 4] == "x" && F[temp - 1] == "x" && G[temp] == "x" && G[temp + 1] == "x" && G[temp + 2] == "x" && G[temp + 3] == "x" && G[temp + 4] == "x" && G[temp - 1] == "x" && F[temp + 5] == "x" && G[temp + 5] == "x") {
    
              G[temp] = "p";
              G[temp + 1] = "p"; 
              G[temp + 2] = "p"; 
              G[temp + 3] = "p";
              G[temp + 4] = "p";
    
              AllShips1[0] -= 1;
    
              Embeds.error(ChannelFP1, `/ 1 2 3 4 5 6 7 8 9 10\na ${A[0]} ${A[1]} ${A[2]} ${A[3]} ${A[4]} ${A[5]} ${A[6]} ${A[7]} ${A[8]} ${A[9]}\nb ${B[0]} ${B[1]} ${B[2]} ${B[3]} ${B[4]} ${B[5]} ${B[6]} ${B[7]} ${B[8]} ${B[9]}\nc ${C[0]} ${C[1]} ${C[2]} ${C[3]} ${C[4]} ${C[5]} ${C[6]} ${C[7]} ${C[8]} ${C[9]}\nd ${D[0]} ${D[1]} ${D[2]} ${D[3]} ${D[4]} ${D[5]} ${D[6]} ${D[7]} ${D[8]} ${D[9]}\ne ${E[0]} ${E[1]} ${E[2]} ${E[3]} ${E[4]} ${E[5]} ${E[6]} ${E[7]} ${E[8]} ${E[9]}\nf ${F[0]} ${F[1]} ${F[2]} ${F[3]} ${F[4]} ${F[5]} ${F[6]} ${F[7]} ${F[8]} ${F[9]}\ng ${G[0]} ${G[1]} ${G[2]} ${G[3]} ${G[4]} ${G[5]} ${G[6]} ${G[7]} ${G[8]} ${G[9]}\n`)
    
            } else {
    
              msg.channel.send("You cant place that ship there!")
    
            }
    
          }
    
          }
    
        } else if(args[2].toString() == "C" && AllShips1[1] != 0) {
    
          if(args[3].toString() == "V") {
    
            if (temp > 0 && temp < 9) {
    
              if(C[temp] == "x" && D[temp] == "x" && C[temp + 1] == "x" && D[temp + 1] == "x" && E[temp] == "x" && E[temp + 1] == "x" && C[temp - 1] == "x" && D[temp - 1] == "x" && E[temp - 1] == "x" && F[temp] == "x" && F[temp + 1] == "x" && F[temp - 1] == "x" && G[temp] == "x" && G[temp - 1] == "x" && G[temp + 1] == "x") {
    
                D[temp] = "p";
                E[temp] = "p";
                F[temp] = "p"; 
                G[temp] = "p";
    
                AllShips1[1] -= 1;
    
                Embeds.error(ChannelFP1, `/ 1 2 3 4 5 6 7 8 9 10\na ${A[0]} ${A[1]} ${A[2]} ${A[3]} ${A[4]} ${A[5]} ${A[6]} ${A[7]} ${A[8]} ${A[9]}\nb ${B[0]} ${B[1]} ${B[2]} ${B[3]} ${B[4]} ${B[5]} ${B[6]} ${B[7]} ${B[8]} ${B[9]}\nc ${C[0]} ${C[1]} ${C[2]} ${C[3]} ${C[4]} ${C[5]} ${C[6]} ${C[7]} ${C[8]} ${C[9]}\nd ${D[0]} ${D[1]} ${D[2]} ${D[3]} ${D[4]} ${D[5]} ${D[6]} ${D[7]} ${D[8]} ${D[9]}\ne ${E[0]} ${E[1]} ${E[2]} ${E[3]} ${E[4]} ${E[5]} ${E[6]} ${E[7]} ${E[8]} ${E[9]}\nf ${F[0]} ${F[1]} ${F[2]} ${F[3]} ${F[4]} ${F[5]} ${F[6]} ${F[7]} ${F[8]} ${F[9]}\ng ${G[0]} ${G[1]} ${G[2]} ${G[3]} ${G[4]} ${G[5]} ${G[6]} ${G[7]} ${G[8]} ${G[9]}\n`)
    
              }
    
            } else if (temp == 9) {
    
              if(C[temp] == "x" && D[temp] == "x" && E[temp] == "x" && C[temp - 1] == "x" && D[temp - 1] == "x" && E[temp - 1] == "x" && F[temp] == "x" && F[temp - 1] == "x" && G[temp] == "x" && G[temp - 1] == "x") {
    
                D[temp] = "p";
                E[temp] = "p"; 
                F[temp] = "p";
                G[temp] = "p";
    
                AllShips1[1] -= 1;
    
                Embeds.error(ChannelFP1, `/ 1 2 3 4 5 6 7 8 9 10\na ${A[0]} ${A[1]} ${A[2]} ${A[3]} ${A[4]} ${A[5]} ${A[6]} ${A[7]} ${A[8]} ${A[9]}\nb ${B[0]} ${B[1]} ${B[2]} ${B[3]} ${B[4]} ${B[5]} ${B[6]} ${B[7]} ${B[8]} ${B[9]}\nc ${C[0]} ${C[1]} ${C[2]} ${C[3]} ${C[4]} ${C[5]} ${C[6]} ${C[7]} ${C[8]} ${C[9]}\nd ${D[0]} ${D[1]} ${D[2]} ${D[3]} ${D[4]} ${D[5]} ${D[6]} ${D[7]} ${D[8]} ${D[9]}\ne ${E[0]} ${E[1]} ${E[2]} ${E[3]} ${E[4]} ${E[5]} ${E[6]} ${E[7]} ${E[8]} ${E[9]}\nf ${F[0]} ${F[1]} ${F[2]} ${F[3]} ${F[4]} ${F[5]} ${F[6]} ${F[7]} ${F[8]} ${F[9]}\ng ${G[0]} ${G[1]} ${G[2]} ${G[3]} ${G[4]} ${G[5]} ${G[6]} ${G[7]} ${G[8]} ${G[9]}\n`)
    
              }
    
            } else {
    
              msg.channel.send("You cant place that ship there!")
    
            }
    
          } else if (args[3].toString() == "H") {
    
            if(temp + 4 == 10) {
    
              if(F[temp] == "x" && F[temp + 1] == "x" && F[temp + 2] == "x" && F[temp + 3] == "x" && F[temp - 1] == "x" && G[temp] == "x" && G[temp + 1] == "x" && G[temp + 2] == "x" && G[temp + 3] == "x" && G[temp - 1] == "x") {
    
                G[temp] = "p";
                G[temp + 1] = "p"; 
                G[temp + 2] = "p"; 
                G[temp + 3] = "p";
    
                AllShips1[1] -= 1;
    
                Embeds.error(ChannelFP1, `/ 1 2 3 4 5 6 7 8 9 10\na ${A[0]} ${A[1]} ${A[2]} ${A[3]} ${A[4]} ${A[5]} ${A[6]} ${A[7]} ${A[8]} ${A[9]}\nb ${B[0]} ${B[1]} ${B[2]} ${B[3]} ${B[4]} ${B[5]} ${B[6]} ${B[7]} ${B[8]} ${B[9]}\nc ${C[0]} ${C[1]} ${C[2]} ${C[3]} ${C[4]} ${C[5]} ${C[6]} ${C[7]} ${C[8]} ${C[9]}\nd ${D[0]} ${D[1]} ${D[2]} ${D[3]} ${D[4]} ${D[5]} ${D[6]} ${D[7]} ${D[8]} ${D[9]}\ne ${E[0]} ${E[1]} ${E[2]} ${E[3]} ${E[4]} ${E[5]} ${E[6]} ${E[7]} ${E[8]} ${E[9]}\nf ${F[0]} ${F[1]} ${F[2]} ${F[3]} ${F[4]} ${F[5]} ${F[6]} ${F[7]} ${F[8]} ${F[9]}\ng ${G[0]} ${G[1]} ${G[2]} ${G[3]} ${G[4]} ${G[5]} ${G[6]} ${G[7]} ${G[8]} ${G[9]}\n`)
    
              } else {
    
                msg.channel.send("You cant place that ship there!")
    
              }
    
            } else if (temp + 4 < 10) {
    
              if(F[temp] == "x" && F[temp + 1] == "x" && F[temp + 2] == "x" && F[temp + 3] == "x" && F[temp - 1] == "x" && G[temp] == "x" && G[temp + 1] == "x" && G[temp + 2] == "x" && G[temp + 3] == "x" && G[temp - 1] == "x" && F[temp + 4] == "x" && G[temp + 4] == "x") {
    
                G[temp] = "p";
                G[temp + 1] = "p"; 
                G[temp + 2] = "p"; 
                G[temp + 3] = "p";
    
              AllShips1[1] -= 1;
    
              Embeds.error(ChannelFP1, `/ 1 2 3 4 5 6 7 8 9 10\na ${A[0]} ${A[1]} ${A[2]} ${A[3]} ${A[4]} ${A[5]} ${A[6]} ${A[7]} ${A[8]} ${A[9]}\nb ${B[0]} ${B[1]} ${B[2]} ${B[3]} ${B[4]} ${B[5]} ${B[6]} ${B[7]} ${B[8]} ${B[9]}\nc ${C[0]} ${C[1]} ${C[2]} ${C[3]} ${C[4]} ${C[5]} ${C[6]} ${C[7]} ${C[8]} ${C[9]}\nd ${D[0]} ${D[1]} ${D[2]} ${D[3]} ${D[4]} ${D[5]} ${D[6]} ${D[7]} ${D[8]} ${D[9]}\ne ${E[0]} ${E[1]} ${E[2]} ${E[3]} ${E[4]} ${E[5]} ${E[6]} ${E[7]} ${E[8]} ${E[9]}\nf ${F[0]} ${F[1]} ${F[2]} ${F[3]} ${F[4]} ${F[5]} ${F[6]} ${F[7]} ${F[8]} ${F[9]}\ng ${G[0]} ${G[1]} ${G[2]} ${G[3]} ${G[4]} ${G[5]} ${G[6]} ${G[7]} ${G[8]} ${G[9]}\n`)
    
            } else {
    
              msg.channel.send("You cant place that ship there!")
    
            }
    
          }
    
          }
    
        } else if(args[2].toString() == "F" && AllShips1[2] != 0) {
    
          if(args[3].toString() == "V") {
    
            if (temp > 0 && temp < 9) {
    
              if(D[temp] == "x" && E[temp] == "x" && D[temp + 1] == "x" && E[temp + 1] == "x" && F[temp] == "x" && F[temp + 1] == "x" && D[temp - 1] == "x" && E[temp - 1] == "x" && F[temp - 1] == "x" && G[temp] == "x" && G[temp + 1] == "x" && G[temp - 1] == "x") {
    
                E[temp] = "p";
                F[temp] = "p";
                G[temp] = "p"; 
    
                AllShips1[2] -= 1;
    
                Embeds.error(ChannelFP1, `/ 1 2 3 4 5 6 7 8 9 10\na ${A[0]} ${A[1]} ${A[2]} ${A[3]} ${A[4]} ${A[5]} ${A[6]} ${A[7]} ${A[8]} ${A[9]}\nb ${B[0]} ${B[1]} ${B[2]} ${B[3]} ${B[4]} ${B[5]} ${B[6]} ${B[7]} ${B[8]} ${B[9]}\nc ${C[0]} ${C[1]} ${C[2]} ${C[3]} ${C[4]} ${C[5]} ${C[6]} ${C[7]} ${C[8]} ${C[9]}\nd ${D[0]} ${D[1]} ${D[2]} ${D[3]} ${D[4]} ${D[5]} ${D[6]} ${D[7]} ${D[8]} ${D[9]}\ne ${E[0]} ${E[1]} ${E[2]} ${E[3]} ${E[4]} ${E[5]} ${E[6]} ${E[7]} ${E[8]} ${E[9]}\nf ${F[0]} ${F[1]} ${F[2]} ${F[3]} ${F[4]} ${F[5]} ${F[6]} ${F[7]} ${F[8]} ${F[9]}\ng ${G[0]} ${G[1]} ${G[2]} ${G[3]} ${G[4]} ${G[5]} ${G[6]} ${G[7]} ${G[8]} ${G[9]}\n`)
    
              }
    
            } else if (temp == 9) {
    
              if(D[temp] == "x" && E[temp] == "x" && F[temp] == "x" && D[temp - 1] == "x" && E[temp - 1] == "x" && F[temp - 1] == "x" && G[temp] == "x" && G[temp - 1] == "x") {
    
                E[temp] = "p";
                F[temp] = "p"; 
                G[temp] = "p";
    
                AllShips1[2] -= 1;
    
                Embeds.error(ChannelFP1, `/ 1 2 3 4 5 6 7 8 9 10\na ${A[0]} ${A[1]} ${A[2]} ${A[3]} ${A[4]} ${A[5]} ${A[6]} ${A[7]} ${A[8]} ${A[9]}\nb ${B[0]} ${B[1]} ${B[2]} ${B[3]} ${B[4]} ${B[5]} ${B[6]} ${B[7]} ${B[8]} ${B[9]}\nc ${C[0]} ${C[1]} ${C[2]} ${C[3]} ${C[4]} ${C[5]} ${C[6]} ${C[7]} ${C[8]} ${C[9]}\nd ${D[0]} ${D[1]} ${D[2]} ${D[3]} ${D[4]} ${D[5]} ${D[6]} ${D[7]} ${D[8]} ${D[9]}\ne ${E[0]} ${E[1]} ${E[2]} ${E[3]} ${E[4]} ${E[5]} ${E[6]} ${E[7]} ${E[8]} ${E[9]}\nf ${F[0]} ${F[1]} ${F[2]} ${F[3]} ${F[4]} ${F[5]} ${F[6]} ${F[7]} ${F[8]} ${F[9]}\ng ${G[0]} ${G[1]} ${G[2]} ${G[3]} ${G[4]} ${G[5]} ${G[6]} ${G[7]} ${G[8]} ${G[9]}\n`)
    
              }
    
            } else {
    
              msg.channel.send("You cant place that ship there!")
    
            }
    
          } else if (args[3].toString() == "H") {
    
            if(temp + 3 == 10) {
    
              if(F[temp] == "x" && F[temp + 1] == "x" && F[temp + 2] == "x" && F[temp - 1] == "x" && G[temp] == "x" && G[temp + 1] == "x" && G[temp + 2] == "x" && G[temp - 1] == "x") {
    
                G[temp] = "p";
                G[temp + 1] = "p"; 
                G[temp + 2] = "p"; 
    
                AllShips1[2] -= 1;
    
                Embeds.error(ChannelFP1, `/ 1 2 3 4 5 6 7 8 9 10\na ${A[0]} ${A[1]} ${A[2]} ${A[3]} ${A[4]} ${A[5]} ${A[6]} ${A[7]} ${A[8]} ${A[9]}\nb ${B[0]} ${B[1]} ${B[2]} ${B[3]} ${B[4]} ${B[5]} ${B[6]} ${B[7]} ${B[8]} ${B[9]}\nc ${C[0]} ${C[1]} ${C[2]} ${C[3]} ${C[4]} ${C[5]} ${C[6]} ${C[7]} ${C[8]} ${C[9]}\nd ${D[0]} ${D[1]} ${D[2]} ${D[3]} ${D[4]} ${D[5]} ${D[6]} ${D[7]} ${D[8]} ${D[9]}\ne ${E[0]} ${E[1]} ${E[2]} ${E[3]} ${E[4]} ${E[5]} ${E[6]} ${E[7]} ${E[8]} ${E[9]}\nf ${F[0]} ${F[1]} ${F[2]} ${F[3]} ${F[4]} ${F[5]} ${F[6]} ${F[7]} ${F[8]} ${F[9]}\ng ${G[0]} ${G[1]} ${G[2]} ${G[3]} ${G[4]} ${G[5]} ${G[6]} ${G[7]} ${G[8]} ${G[9]}\n`)
    
              } else {
    
                msg.channel.send("You cant place that ship there!")
    
              }
    
            } else if (temp + 3 < 10) {
    
              if(F[temp] == "x" && F[temp + 1] == "x" && F[temp + 2] == "x" && F[temp - 1] == "x" && G[temp] == "x" && G[temp + 1] == "x" && G[temp + 2] == "x" && G[temp - 1] == "x" && G[temp + 3] == "x" && F[temp + 3] == "x") {
    
              G[temp] = "p";
              G[temp + 1] = "p"; 
              G[temp + 2] = "p"; 
    
              AllShips1[2] -= 1;
    
              Embeds.error(ChannelFP1, `/ 1 2 3 4 5 6 7 8 9 10\na ${A[0]} ${A[1]} ${A[2]} ${A[3]} ${A[4]} ${A[5]} ${A[6]} ${A[7]} ${A[8]} ${A[9]}\nb ${B[0]} ${B[1]} ${B[2]} ${B[3]} ${B[4]} ${B[5]} ${B[6]} ${B[7]} ${B[8]} ${B[9]}\nc ${C[0]} ${C[1]} ${C[2]} ${C[3]} ${C[4]} ${C[5]} ${C[6]} ${C[7]} ${C[8]} ${C[9]}\nd ${D[0]} ${D[1]} ${D[2]} ${D[3]} ${D[4]} ${D[5]} ${D[6]} ${D[7]} ${D[8]} ${D[9]}\ne ${E[0]} ${E[1]} ${E[2]} ${E[3]} ${E[4]} ${E[5]} ${E[6]} ${E[7]} ${E[8]} ${E[9]}\nf ${F[0]} ${F[1]} ${F[2]} ${F[3]} ${F[4]} ${F[5]} ${F[6]} ${F[7]} ${F[8]} ${F[9]}\ng ${G[0]} ${G[1]} ${G[2]} ${G[3]} ${G[4]} ${G[5]} ${G[6]} ${G[7]} ${G[8]} ${G[9]}\n`)
    
            } else {
    
              msg.channel.send("You cant place that ship there!")
    
            }
    
          }
    
          }
    
        } else if(args[2].toString() == "M" && AllShips1[3] != 0) {
    
          if(args[3].toString() == "V") {
    
            if (temp > 0 && temp < 9) {
    
              if(E[temp] == "x" && E[temp + 1] == "x" && F[temp] == "x" && F[temp + 1] == "x" && E[temp - 1] == "x" && F[temp - 1] == "x" && G[temp] == "x" && G[temp + 1] == "x" && G[temp - 1] == "x") {
    
                F[temp] = "p";
                G[temp] = "p"; 
    
                AllShips1[3] -= 1;
    
                Embeds.error(ChannelFP1, `/ 1 2 3 4 5 6 7 8 9 10\na ${A[0]} ${A[1]} ${A[2]} ${A[3]} ${A[4]} ${A[5]} ${A[6]} ${A[7]} ${A[8]} ${A[9]}\nb ${B[0]} ${B[1]} ${B[2]} ${B[3]} ${B[4]} ${B[5]} ${B[6]} ${B[7]} ${B[8]} ${B[9]}\nc ${C[0]} ${C[1]} ${C[2]} ${C[3]} ${C[4]} ${C[5]} ${C[6]} ${C[7]} ${C[8]} ${C[9]}\nd ${D[0]} ${D[1]} ${D[2]} ${D[3]} ${D[4]} ${D[5]} ${D[6]} ${D[7]} ${D[8]} ${D[9]}\ne ${E[0]} ${E[1]} ${E[2]} ${E[3]} ${E[4]} ${E[5]} ${E[6]} ${E[7]} ${E[8]} ${E[9]}\nf ${F[0]} ${F[1]} ${F[2]} ${F[3]} ${F[4]} ${F[5]} ${F[6]} ${F[7]} ${F[8]} ${F[9]}\ng ${G[0]} ${G[1]} ${G[2]} ${G[3]} ${G[4]} ${G[5]} ${G[6]} ${G[7]} ${G[8]} ${G[9]}\n`)
    
              }
    
            } else if (temp == 9) {
    
              if(E[temp] == "x" && F[temp] == "x" && E[temp - 1] == "x" && F[temp - 1] == "x" && G[temp] == "x" && G[temp - 1] == "x") {
    
                F[temp] = "p";
                G[temp] = "p"; 
    
                AllShips1[3] -= 1;
    
                Embeds.error(ChannelFP1, `/ 1 2 3 4 5 6 7 8 9 10\na ${A[0]} ${A[1]} ${A[2]} ${A[3]} ${A[4]} ${A[5]} ${A[6]} ${A[7]} ${A[8]} ${A[9]}\nb ${B[0]} ${B[1]} ${B[2]} ${B[3]} ${B[4]} ${B[5]} ${B[6]} ${B[7]} ${B[8]} ${B[9]}\nc ${C[0]} ${C[1]} ${C[2]} ${C[3]} ${C[4]} ${C[5]} ${C[6]} ${C[7]} ${C[8]} ${C[9]}\nd ${D[0]} ${D[1]} ${D[2]} ${D[3]} ${D[4]} ${D[5]} ${D[6]} ${D[7]} ${D[8]} ${D[9]}\ne ${E[0]} ${E[1]} ${E[2]} ${E[3]} ${E[4]} ${E[5]} ${E[6]} ${E[7]} ${E[8]} ${E[9]}\nf ${F[0]} ${F[1]} ${F[2]} ${F[3]} ${F[4]} ${F[5]} ${F[6]} ${F[7]} ${F[8]} ${F[9]}\ng ${G[0]} ${G[1]} ${G[2]} ${G[3]} ${G[4]} ${G[5]} ${G[6]} ${G[7]} ${G[8]} ${G[9]}\n`)
    
              }
    
            } else {
    
              msg.channel.send("You cant place that ship there!")
    
            }
    
          } else if (args[3].toString() == "H") {
    
            if(temp + 2 == 10) {
    
              if(F[temp] == "x" && F[temp + 1] == "x" && F[temp - 1] == "x" && G[temp] == "x" && G[temp + 1] == "x" && G[temp - 1] == "x") {
    
                G[temp] = "p";
                G[temp + 1] = "p"; 
    
                AllShips1[3] -= 1;
    
                Embeds.error(ChannelFP1, `/ 1 2 3 4 5 6 7 8 9 10\na ${A[0]} ${A[1]} ${A[2]} ${A[3]} ${A[4]} ${A[5]} ${A[6]} ${A[7]} ${A[8]} ${A[9]}\nb ${B[0]} ${B[1]} ${B[2]} ${B[3]} ${B[4]} ${B[5]} ${B[6]} ${B[7]} ${B[8]} ${B[9]}\nc ${C[0]} ${C[1]} ${C[2]} ${C[3]} ${C[4]} ${C[5]} ${C[6]} ${C[7]} ${C[8]} ${C[9]}\nd ${D[0]} ${D[1]} ${D[2]} ${D[3]} ${D[4]} ${D[5]} ${D[6]} ${D[7]} ${D[8]} ${D[9]}\ne ${E[0]} ${E[1]} ${E[2]} ${E[3]} ${E[4]} ${E[5]} ${E[6]} ${E[7]} ${E[8]} ${E[9]}\nf ${F[0]} ${F[1]} ${F[2]} ${F[3]} ${F[4]} ${F[5]} ${F[6]} ${F[7]} ${F[8]} ${F[9]}\ng ${G[0]} ${G[1]} ${G[2]} ${G[3]} ${G[4]} ${G[5]} ${G[6]} ${G[7]} ${G[8]} ${G[9]}\n`)
    
              } else {
    
                msg.channel.send("You cant place that ship there!")
    
              }
    
            } else if (temp + 2 < 10) {
    
            if(F[temp] == "x" && F[temp + 1] == "x" && F[temp - 1] == "x" && G[temp] == "x" && G[temp + 1] == "x" && G[temp - 1] == "x" && F[temp + 2] == "x" && G[temp + 2] == "x") {
    
              G[temp] = "p";
              G[temp + 1] = "p"; 
    
              AllShips1[3] -= 1;
    
              Embeds.error(ChannelFP1, `/ 1 2 3 4 5 6 7 8 9 10\na ${A[0]} ${A[1]} ${A[2]} ${A[3]} ${A[4]} ${A[5]} ${A[6]} ${A[7]} ${A[8]} ${A[9]}\nb ${B[0]} ${B[1]} ${B[2]} ${B[3]} ${B[4]} ${B[5]} ${B[6]} ${B[7]} ${B[8]} ${B[9]}\nc ${C[0]} ${C[1]} ${C[2]} ${C[3]} ${C[4]} ${C[5]} ${C[6]} ${C[7]} ${C[8]} ${C[9]}\nd ${D[0]} ${D[1]} ${D[2]} ${D[3]} ${D[4]} ${D[5]} ${D[6]} ${D[7]} ${D[8]} ${D[9]}\ne ${E[0]} ${E[1]} ${E[2]} ${E[3]} ${E[4]} ${E[5]} ${E[6]} ${E[7]} ${E[8]} ${E[9]}\nf ${F[0]} ${F[1]} ${F[2]} ${F[3]} ${F[4]} ${F[5]} ${F[6]} ${F[7]} ${F[8]} ${F[9]}\ng ${G[0]} ${G[1]} ${G[2]} ${G[3]} ${G[4]} ${G[5]} ${G[6]} ${G[7]} ${G[8]} ${G[9]}\n`)
    
            } else {
    
              msg.channel.send("You cant place that ship there!")
    
            }
    
          }
    
          }
    
        } else {
    
          msg.channel.send("You used all ships of this kind")
    
        }
    
      } else if (temp == 0) {
    
        if(args[2].toString() == "B" && AllShips1[0] != 0) {
    
          if(args[3].toString() == "V") {
    
            if(B[temp] == "x" && C[temp] == "x" && C[temp + 1] == "x" && D[temp] == "x" && B[temp + 1] == "x" && C[temp + 1] == "x" && D[temp + 1] == "x" && E[temp] == "x" && E[temp + 1] == "x" && F[temp] == "x" && F[temp + 1] == "x" && G[temp] == "x" && G[temp + 1] == "x") {
    
              C[temp] = "p";
              D[temp] = "p"; 
              E[temp] = "p";
              F[temp] = "p";
              G[temp] = "p";
    
              AllShips1[0] -= 1;
    
              Embeds.error(ChannelFP1, `/ 1 2 3 4 5 6 7 8 9 10\na ${A[0]} ${A[1]} ${A[2]} ${A[3]} ${A[4]} ${A[5]} ${A[6]} ${A[7]} ${A[8]} ${A[9]}\nb ${B[0]} ${B[1]} ${B[2]} ${B[3]} ${B[4]} ${B[5]} ${B[6]} ${B[7]} ${B[8]} ${B[9]}\nc ${C[0]} ${C[1]} ${C[2]} ${C[3]} ${C[4]} ${C[5]} ${C[6]} ${C[7]} ${C[8]} ${C[9]}\nd ${D[0]} ${D[1]} ${D[2]} ${D[3]} ${D[4]} ${D[5]} ${D[6]} ${D[7]} ${D[8]} ${D[9]}\ne ${E[0]} ${E[1]} ${E[2]} ${E[3]} ${E[4]} ${E[5]} ${E[6]} ${E[7]} ${E[8]} ${E[9]}\nf ${F[0]} ${F[1]} ${F[2]} ${F[3]} ${F[4]} ${F[5]} ${F[6]} ${F[7]} ${F[8]} ${F[9]}\ng ${G[0]} ${G[1]} ${G[2]} ${G[3]} ${G[4]} ${G[5]} ${G[6]} ${G[7]} ${G[8]} ${G[9]}\n`)
    
            } else {
    
            msg.channel.send("You cant place that ship there!")
    
          }
    
          } else if (args[3].toString() == "H") {
    
            if(F[temp] == "x" && F[temp + 1] == "x" && F[temp + 2] == "x" && F[temp + 3] == "x" && F[temp + 4] == "x" && F[temp + 5] == "x" && G[temp] == "x" && G[temp + 1] == "x" && G[temp + 2] == "x" && G[temp + 3] == "x" && G[temp + 4] == "x" && G[temp +5] == "x") {
    
              G[temp] = "p";
              G[temp + 1] = "p"; 
              G[temp + 2] = "p"; 
              G[temp + 3] = "p";
              G[temp + 4] = "p";
    
              AllShips1[0] -= 1;
    
              Embeds.error(ChannelFP1, `/ 1 2 3 4 5 6 7 8 9 10\na ${A[0]} ${A[1]} ${A[2]} ${A[3]} ${A[4]} ${A[5]} ${A[6]} ${A[7]} ${A[8]} ${A[9]}\nb ${B[0]} ${B[1]} ${B[2]} ${B[3]} ${B[4]} ${B[5]} ${B[6]} ${B[7]} ${B[8]} ${B[9]}\nc ${C[0]} ${C[1]} ${C[2]} ${C[3]} ${C[4]} ${C[5]} ${C[6]} ${C[7]} ${C[8]} ${C[9]}\nd ${D[0]} ${D[1]} ${D[2]} ${D[3]} ${D[4]} ${D[5]} ${D[6]} ${D[7]} ${D[8]} ${D[9]}\ne ${E[0]} ${E[1]} ${E[2]} ${E[3]} ${E[4]} ${E[5]} ${E[6]} ${E[7]} ${E[8]} ${E[9]}\nf ${F[0]} ${F[1]} ${F[2]} ${F[3]} ${F[4]} ${F[5]} ${F[6]} ${F[7]} ${F[8]} ${F[9]}\ng ${G[0]} ${G[1]} ${G[2]} ${G[3]} ${G[4]} ${G[5]} ${G[6]} ${G[7]} ${G[8]} ${G[9]}\n`)
    
            } else {
    
              msg.channel.send("You cant place that ship there!")
    
            }
    
          }
    
        } else if(args[2].toString() == "C" && AllShips1[1] != 0) {
    
          if(args[3].toString() == "V") {
    
            if(C[temp] == "x" && D[temp] == "x" && D[temp + 1] == "x" && E[temp] == "x" && C[temp + 1] == "x" && D[temp + 1] == "x" && E[temp + 1] == "x" && F[temp] == "x" && F[temp + 1] == "x" && G[temp] == "x" && G[temp + 1] == "x") {
    
              D[temp] = "p";
              E[temp] = "p";
              F[temp] = "p";
              G[temp] = "p"; 
    
              AllShips1[1] -= 1;
    
              Embeds.error(ChannelFP1, `/ 1 2 3 4 5 6 7 8 9 10\na ${A[0]} ${A[1]} ${A[2]} ${A[3]} ${A[4]} ${A[5]} ${A[6]} ${A[7]} ${A[8]} ${A[9]}\nb ${B[0]} ${B[1]} ${B[2]} ${B[3]} ${B[4]} ${B[5]} ${B[6]} ${B[7]} ${B[8]} ${B[9]}\nc ${C[0]} ${C[1]} ${C[2]} ${C[3]} ${C[4]} ${C[5]} ${C[6]} ${C[7]} ${C[8]} ${C[9]}\nd ${D[0]} ${D[1]} ${D[2]} ${D[3]} ${D[4]} ${D[5]} ${D[6]} ${D[7]} ${D[8]} ${D[9]}\ne ${E[0]} ${E[1]} ${E[2]} ${E[3]} ${E[4]} ${E[5]} ${E[6]} ${E[7]} ${E[8]} ${E[9]}\nf ${F[0]} ${F[1]} ${F[2]} ${F[3]} ${F[4]} ${F[5]} ${F[6]} ${F[7]} ${F[8]} ${F[9]}\ng ${G[0]} ${G[1]} ${G[2]} ${G[3]} ${G[4]} ${G[5]} ${G[6]} ${G[7]} ${G[8]} ${G[9]}\n`)
    
            } else {
    
              msg.channel.send("You cant place that ship there!")
    
            }
    
          } else if (args[3].toString() == "H") {
    
            if(F[temp] == "x" && F[temp + 1] == "x" && F[temp + 2] == "x" && F[temp + 3] == "x" && F[temp + 4] == "x" && G[temp] == "x" && G[temp + 1] == "x" && G[temp + 2] == "x" && G[temp + 3] == "x" && G[temp + 4] == "x") {
    
              G[temp] = "p";
              G[temp + 1] = "p"; 
              G[temp + 2] = "p"; 
              G[temp + 3] = "p";
    
              AllShips1[1] -= 1;
    
              Embeds.error(ChannelFP1, `/ 1 2 3 4 5 6 7 8 9 10\na ${A[0]} ${A[1]} ${A[2]} ${A[3]} ${A[4]} ${A[5]} ${A[6]} ${A[7]} ${A[8]} ${A[9]}\nb ${B[0]} ${B[1]} ${B[2]} ${B[3]} ${B[4]} ${B[5]} ${B[6]} ${B[7]} ${B[8]} ${B[9]}\nc ${C[0]} ${C[1]} ${C[2]} ${C[3]} ${C[4]} ${C[5]} ${C[6]} ${C[7]} ${C[8]} ${C[9]}\nd ${D[0]} ${D[1]} ${D[2]} ${D[3]} ${D[4]} ${D[5]} ${D[6]} ${D[7]} ${D[8]} ${D[9]}\ne ${E[0]} ${E[1]} ${E[2]} ${E[3]} ${E[4]} ${E[5]} ${E[6]} ${E[7]} ${E[8]} ${E[9]}\nf ${F[0]} ${F[1]} ${F[2]} ${F[3]} ${F[4]} ${F[5]} ${F[6]} ${F[7]} ${F[8]} ${F[9]}\ng ${G[0]} ${G[1]} ${G[2]} ${G[3]} ${G[4]} ${G[5]} ${G[6]} ${G[7]} ${G[8]} ${G[9]}\n`)
    
            } else {
    
              msg.channel.send("You cant place that ship there!")
    
            }
    
          }
    
        } else if(args[2].toString() == "F" && AllShips1[2] != 0) {
    
          if(args[3].toString() == "V") {
    
            if(D[temp] == "x" && D[temp + 1] == "x" && E[temp] == "x" && D[temp + 1] == "x" && E[temp + 1] == "x" && F[temp] == "x" && F[temp + 1] == "x" && G[temp] == "x" && G[temp + 1] == "x") {
    
              E[temp] = "p";
              F[temp] = "p";
              G[temp] = "p"; 
    
              AllShips1[2] -= 1;
    
              Embeds.error(ChannelFP1, `/ 1 2 3 4 5 6 7 8 9 10\na ${A[0]} ${A[1]} ${A[2]} ${A[3]} ${A[4]} ${A[5]} ${A[6]} ${A[7]} ${A[8]} ${A[9]}\nb ${B[0]} ${B[1]} ${B[2]} ${B[3]} ${B[4]} ${B[5]} ${B[6]} ${B[7]} ${B[8]} ${B[9]}\nc ${C[0]} ${C[1]} ${C[2]} ${C[3]} ${C[4]} ${C[5]} ${C[6]} ${C[7]} ${C[8]} ${C[9]}\nd ${D[0]} ${D[1]} ${D[2]} ${D[3]} ${D[4]} ${D[5]} ${D[6]} ${D[7]} ${D[8]} ${D[9]}\ne ${E[0]} ${E[1]} ${E[2]} ${E[3]} ${E[4]} ${E[5]} ${E[6]} ${E[7]} ${E[8]} ${E[9]}\nf ${F[0]} ${F[1]} ${F[2]} ${F[3]} ${F[4]} ${F[5]} ${F[6]} ${F[7]} ${F[8]} ${F[9]}\ng ${G[0]} ${G[1]} ${G[2]} ${G[3]} ${G[4]} ${G[5]} ${G[6]} ${G[7]} ${G[8]} ${G[9]}\n`)
    
            } else {
    
              msg.channel.send("You cant place that ship there!")
    
            }
    
          } else if (args[3].toString() == "H") {
    
            if(F[temp] == "x" && F[temp + 1] == "x" && F[temp + 2] == "x" && F[temp + 3] == "x" && G[temp] == "x" && G[temp + 1] == "x" && G[temp + 2] == "x" && G[temp + 3] == "x") {
    
              G[temp] = "p";
              G[temp + 1] = "p"; 
              G[temp + 2] = "p"; 
    
              AllShips1[2] -= 1;
    
              Embeds.error(ChannelFP1, `/ 1 2 3 4 5 6 7 8 9 10\na ${A[0]} ${A[1]} ${A[2]} ${A[3]} ${A[4]} ${A[5]} ${A[6]} ${A[7]} ${A[8]} ${A[9]}\nb ${B[0]} ${B[1]} ${B[2]} ${B[3]} ${B[4]} ${B[5]} ${B[6]} ${B[7]} ${B[8]} ${B[9]}\nc ${C[0]} ${C[1]} ${C[2]} ${C[3]} ${C[4]} ${C[5]} ${C[6]} ${C[7]} ${C[8]} ${C[9]}\nd ${D[0]} ${D[1]} ${D[2]} ${D[3]} ${D[4]} ${D[5]} ${D[6]} ${D[7]} ${D[8]} ${D[9]}\ne ${E[0]} ${E[1]} ${E[2]} ${E[3]} ${E[4]} ${E[5]} ${E[6]} ${E[7]} ${E[8]} ${E[9]}\nf ${F[0]} ${F[1]} ${F[2]} ${F[3]} ${F[4]} ${F[5]} ${F[6]} ${F[7]} ${F[8]} ${F[9]}\ng ${G[0]} ${G[1]} ${G[2]} ${G[3]} ${G[4]} ${G[5]} ${G[6]} ${G[7]} ${G[8]} ${G[9]}\n`)
    
            } else {
    
              msg.channel.send("You cant place that ship there!")
    
            }
    
          }
    
        } else if(args[2].toString() == "M" && AllShips1[3] != 0) {
    
          if(args[3].toString() == "V") {
    
            if(temp == 0) {
    
              if(E[temp] == "x" && E[temp + 1] == "x" && F[temp] == "x" && F[temp + 1] == "x" && G[temp] == "x" && G[temp + 1] == "x") {
    
                F[temp] = "p";
                G[temp] = "p"; 
    
                AllShips1[3] -= 1;
    
                Embeds.error(ChannelFP1, `/ 1 2 3 4 5 6 7 8 9 10\na ${A[0]} ${A[1]} ${A[2]} ${A[3]} ${A[4]} ${A[5]} ${A[6]} ${A[7]} ${A[8]} ${A[9]}\nb ${B[0]} ${B[1]} ${B[2]} ${B[3]} ${B[4]} ${B[5]} ${B[6]} ${B[7]} ${B[8]} ${B[9]}\nc ${C[0]} ${C[1]} ${C[2]} ${C[3]} ${C[4]} ${C[5]} ${C[6]} ${C[7]} ${C[8]} ${C[9]}\nd ${D[0]} ${D[1]} ${D[2]} ${D[3]} ${D[4]} ${D[5]} ${D[6]} ${D[7]} ${D[8]} ${D[9]}\ne ${E[0]} ${E[1]} ${E[2]} ${E[3]} ${E[4]} ${E[5]} ${E[6]} ${E[7]} ${E[8]} ${E[9]}\nf ${F[0]} ${F[1]} ${F[2]} ${F[3]} ${F[4]} ${F[5]} ${F[6]} ${F[7]} ${F[8]} ${F[9]}\ng ${G[0]} ${G[1]} ${G[2]} ${G[3]} ${G[4]} ${G[5]} ${G[6]} ${G[7]} ${G[8]} ${G[9]}\n`)
    
              } else {
    
                msg.channel.send("You cant place that ship there!")
    
              }
    
            }
    
          } else if (args[3].toString() == "H") {
    
            if(F[temp] == "x" && F[temp + 1] == "x" && F[temp + 2] == "x" && G[temp] == "x" && G[temp + 1] == "x" && G[temp + 2] == "x") {
    
              G[temp] = "p";
              G[temp + 1] = "p"; 
    
              AllShips1[3] -= 1;
    
              Embeds.error(ChannelFP1, `/ 1 2 3 4 5 6 7 8 9 10\na ${A[0]} ${A[1]} ${A[2]} ${A[3]} ${A[4]} ${A[5]} ${A[6]} ${A[7]} ${A[8]} ${A[9]}\nb ${B[0]} ${B[1]} ${B[2]} ${B[3]} ${B[4]} ${B[5]} ${B[6]} ${B[7]} ${B[8]} ${B[9]}\nc ${C[0]} ${C[1]} ${C[2]} ${C[3]} ${C[4]} ${C[5]} ${C[6]} ${C[7]} ${C[8]} ${C[9]}\nd ${D[0]} ${D[1]} ${D[2]} ${D[3]} ${D[4]} ${D[5]} ${D[6]} ${D[7]} ${D[8]} ${D[9]}\ne ${E[0]} ${E[1]} ${E[2]} ${E[3]} ${E[4]} ${E[5]} ${E[6]} ${E[7]} ${E[8]} ${E[9]}\nf ${F[0]} ${F[1]} ${F[2]} ${F[3]} ${F[4]} ${F[5]} ${F[6]} ${F[7]} ${F[8]} ${F[9]}\ng ${G[0]} ${G[1]} ${G[2]} ${G[3]} ${G[4]} ${G[5]} ${G[6]} ${G[7]} ${G[8]} ${G[9]}\n`)
    
            } else {
    
              msg.channel.send("You cant place that ship there!")
    
            }
    
          }
    
        } else {
    
          msg.channel.send("You used all ships of this kind")
    
        }
    
      }
    
    }

    } else if (args[0] == null) {

      msg.channel.send("You need to choose a letter from A - J!")

    } else if (args[0].length > 2) {

      msg.channel.send("One letter, not two!")

    } else if (args[1] == null) {

      msg.channel.send("You need to choose a number from 1 - 10!")

    } else if (parseInt(args[1]) > 10) {

      msg.channel.send("A number between 0 - 11 please")

    } else if (parseInt(args[1]) < 1) {

      msg.channel.send("A number between 0 - 11 please")

    } else if (msg.channel != ChannelFP1) {

      msg.channel.send("You cant use this command here!")

    } else if (args[2] == null) {

      msg.channel.send("Type in what ship you want to place! (b (Battleship x1 (5 places)), c (Cruiser x2 (4 places)), f (Frigates x2 (3 places)), m (Minesweepers x3 (2 places)))")

    } else if (args[3] == null) {

      msg.channel.send("Type in in what direction it should be placed! (v = vertical, h = horizontal)")

    }

  }

}

function cmd_b2(msg, args) {

  var ChannelB = client.channels.find("id", "498556497593237523");
  var ChannelFP2 = client.channels.find("id", "498570704879353896");
  var RPlayer2 = "498570808394907648";

  if(msg.channel == ChannelB && msg.member != BPlayer1 && BPlayer2 == null) {

    BPlayer2 = msg.member;
    BPlayer2.addRole(RPlayer2);

    msg.channel.send(`You are Player 2 ${msg.member}`)

    for(var i = 0; i < 10; i++) {

      A2[i] = "x";
      B2[i] = "x";
      C2[i] = "x";
      D2[i] = "x";
      E2[i] = "x";
      F2[i] = "x";
      G2[i] = "x";

    }

    Embeds.error(ChannelFP2, `/ 1 2 3 4 5 6 7 8 9 10\na ${A2[0]} ${A2[1]} ${A2[2]} ${A2[3]} ${A2[4]} ${A2[5]} ${A2[6]} ${A2[7]} ${A2[8]} ${A2[9]}\nb ${B2[0]} ${B2[1]} ${B2[2]} ${B2[3]} ${B2[4]} ${B2[5]} ${B2[6]} ${B2[7]} ${B2[8]} ${B2[9]}\nc ${C2[0]} ${C2[1]} ${C2[2]} ${C2[3]} ${C2[4]} ${C2[5]} ${C2[6]} ${C2[7]} ${C2[8]} ${C2[9]}\nd ${D2[0]} ${D2[1]} ${D2[2]} ${D2[3]} ${D2[4]} ${D2[5]} ${D2[6]} ${D2[7]} ${D2[8]} ${D2[9]}\ne ${E2[0]} ${E2[1]} ${E2[2]} ${E2[3]} ${E2[4]} ${E2[5]} ${E2[6]} ${E2[7]} ${E2[8]} ${E2[9]}\nf ${F2[0]} ${F2[1]} ${F2[2]} ${F2[3]} ${F2[4]} ${F2[5]} ${F2[6]} ${F2[7]} ${F2[8]} ${F2[9]}\ng ${G2[0]} ${G2[1]} ${G2[2]} ${G2[3]} ${G2[4]} ${G2[5]} ${G2[6]} ${G2[7]} ${G2[8]} ${G2[9]}\n`)

  } else {

    msg.channel.send("You can only play this game in #battleship!")

  }

}

function cmd_sb2(msg, args) {

  var ChannelFP2 = client.channels.find("id", "498570704879353896");

  var cont = msg.content;

  var invoke = cont.split(' ')[0].substr(config.prefix.length),
            args = cont.toUpperCase().split(' ').slice(1)

  if(msg.member == BPlayer2 && msg.channel == ChannelFP2) {

    if(args[0] != null && args[0].length < 2 && args[1] != null && parseInt(args[1]) <= 10 && parseInt(args[1]) >= 1 && args[2] != null && args[3] != null) {

      console.log(args[0].toString(), parseInt(args[1]), args[2].toString(), args[3].toString())

      if(args[0].toString() == "A") {

        var temp = parseInt(args[1] - 1)
    
        if(temp > 0) {
    
          if(args[2].toString() == "B" && AllShips2[0] != 0) {
    
            if(args[3].toString() == "V") {
    
              msg.channel.send("Thats not possible!")
    
            } else if (args[3].toString() == "H") {
    
              if(temp + 5 == 10) {
    
                if(A2[temp] == "x" && A2[temp + 1] == "x" && A2[temp + 2] == "x" && A2[temp + 3] == "x" && A2[temp + 4] == "x" && A2[temp - 1] == "x" && B2[temp] == "x" && B2[temp + 1] == "x" && B2[temp + 2] == "x" && B2[temp + 3] == "x" && B2[temp + 4] == "x" && B2[temp - 1] == "x") {
    
                  A2[temp] = "p";
                  A2[temp + 1] = "p"; 
                  A2[temp + 2] = "p"; 
                  A2[temp + 3] = "p"
                  A2[temp + 4] = "p";
    
                  AllShips2[0] -= 1;
    
                  Embeds.error(ChannelFP2, `/ 1 2 3 4 5 6 7 8 9 10\na ${A2[0]} ${A2[1]} ${A2[2]} ${A2[3]} ${A2[4]} ${A2[5]} ${A2[6]} ${A2[7]} ${A2[8]} ${A2[9]}\nb ${B2[0]} ${B2[1]} ${B2[2]} ${B2[3]} ${B2[4]} ${B2[5]} ${B2[6]} ${B2[7]} ${B2[8]} ${B2[9]}\nc ${C2[0]} ${C2[1]} ${C2[2]} ${C2[3]} ${C2[4]} ${C2[5]} ${C2[6]} ${C2[7]} ${C2[8]} ${C2[9]}\nd ${D2[0]} ${D2[1]} ${D2[2]} ${D2[3]} ${D2[4]} ${D2[5]} ${D2[6]} ${D2[7]} ${D2[8]} ${D2[9]}\ne ${E2[0]} ${E2[1]} ${E2[2]} ${E2[3]} ${E2[4]} ${E2[5]} ${E2[6]} ${E2[7]} ${E2[8]} ${E2[9]}\nf ${F2[0]} ${F2[1]} ${F2[2]} ${F2[3]} ${F2[4]} ${F2[5]} ${F2[6]} ${F2[7]} ${F2[8]} ${F2[9]}\ng ${G2[0]} ${G2[1]} ${G2[2]} ${G2[3]} ${G2[4]} ${G2[5]} ${G2[6]} ${G2[7]} ${G2[8]} ${G2[9]}\n`)
    
                } else {
    
                  msg.channel.send("You cant place that ship there!")
    
                }
                
              } else if (temp + 5 < 10) {
    
              if(A2[temp] == "x" && A2[temp + 1] == "x" && A2[temp + 2] == "x" && A2[temp + 3] == "x" && A2[temp + 4] == "x" && A2[temp + 5] == "x" && A2[temp - 1] == "x" && B2[temp] == "x" && B2[temp + 1] == "x" && B2[temp + 2] == "x" && B2[temp + 3] == "x" && B2[temp + 4] == "x" && B2[temp - 1] == "x" && B2[temp +5] == "x") {
    
                A2[temp] = "p";
                A2[temp + 1] = "p"; 
                A2[temp + 2] = "p"; 
                A2[temp + 3] = "p"
                A2[temp + 4] = "p";
    
                AllShips2[0] -= 1;
    
                Embeds.error(ChannelFP2, `/ 1 2 3 4 5 6 7 8 9 10\na ${A2[0]} ${A2[1]} ${A2[2]} ${A2[3]} ${A2[4]} ${A2[5]} ${A2[6]} ${A2[7]} ${A2[8]} ${A2[9]}\nb ${B2[0]} ${B2[1]} ${B2[2]} ${B2[3]} ${B2[4]} ${B2[5]} ${B2[6]} ${B2[7]} ${B2[8]} ${B2[9]}\nc ${C2[0]} ${C2[1]} ${C2[2]} ${C2[3]} ${C2[4]} ${C2[5]} ${C2[6]} ${C2[7]} ${C2[8]} ${C2[9]}\nd ${D2[0]} ${D2[1]} ${D2[2]} ${D2[3]} ${D2[4]} ${D2[5]} ${D2[6]} ${D2[7]} ${D2[8]} ${D2[9]}\ne ${E2[0]} ${E2[1]} ${E2[2]} ${E2[3]} ${E2[4]} ${E2[5]} ${E2[6]} ${E2[7]} ${E2[8]} ${E2[9]}\nf ${F2[0]} ${F2[1]} ${F2[2]} ${F2[3]} ${F2[4]} ${F2[5]} ${F2[6]} ${F2[7]} ${F2[8]} ${F2[9]}\ng ${G2[0]} ${G2[1]} ${G2[2]} ${G2[3]} ${G2[4]} ${G2[5]} ${G2[6]} ${G2[7]} ${G2[8]} ${G2[9]}\n`)
    
              } else {
    
                msg.channel.send("You cant place that ship there!")
    
              }
    
            }
    
            }
    
          } else if(args[2].toString() == "C" && AllShips2[1] != 0) {
    
            if(args[3].toString() == "V") {
    
              msg.channel.send("Thats not possible!")
    
            } else if (args[3].toString() == "H") {
    
              if(temp + 4 == 10) {
    
                if(A2[temp] == "x" && A2[temp + 1] == "x" && A2[temp + 2] == "x" && A2[temp + 3] == "x" && A2[temp - 1] == "x" && B2[temp] == "x" && B2[temp + 1] == "x" && B2[temp + 2] == "x" && B2[temp + 3] == "x" && B2[temp - 1] == "x") {
    
                  A2[temp] = "p";
                  A2[temp + 1] = "p"; 
                  A2[temp + 2] = "p"; 
                  A2[temp + 3] = "p"
    
                  AllShips2[1] -= 1;
    
                  Embeds.error(ChannelFP2, `/ 1 2 3 4 5 6 7 8 9 10\na ${A2[0]} ${A2[1]} ${A2[2]} ${A2[3]} ${A2[4]} ${A2[5]} ${A2[6]} ${A2[7]} ${A2[8]} ${A2[9]}\nb ${B2[0]} ${B2[1]} ${B2[2]} ${B2[3]} ${B2[4]} ${B2[5]} ${B2[6]} ${B2[7]} ${B2[8]} ${B2[9]}\nc ${C2[0]} ${C2[1]} ${C2[2]} ${C2[3]} ${C2[4]} ${C2[5]} ${C2[6]} ${C2[7]} ${C2[8]} ${C2[9]}\nd ${D2[0]} ${D2[1]} ${D2[2]} ${D2[3]} ${D2[4]} ${D2[5]} ${D2[6]} ${D2[7]} ${D2[8]} ${D2[9]}\ne ${E2[0]} ${E2[1]} ${E2[2]} ${E2[3]} ${E2[4]} ${E2[5]} ${E2[6]} ${E2[7]} ${E2[8]} ${E2[9]}\nf ${F2[0]} ${F2[1]} ${F2[2]} ${F2[3]} ${F2[4]} ${F2[5]} ${F2[6]} ${F2[7]} ${F2[8]} ${F2[9]}\ng ${G2[0]} ${G2[1]} ${G2[2]} ${G2[3]} ${G2[4]} ${G2[5]} ${G2[6]} ${G2[7]} ${G2[8]} ${G2[9]}\n`)
    
                } else {
    
                  msg.channel.send("You cant place that ship there!")
    
                }
    
              } else if (temp + 4 < 10) {
    
              if(A2[temp] == "x" && A2[temp + 1] == "x" && A2[temp + 2] == "x" && A2[temp + 3] == "x" && A2[temp + 4] == "x" && A2[temp - 1] == "x" && B2[temp] == "x" && B2[temp + 1] == "x" && B2[temp + 2] == "x" && B2[temp + 3] == "x" && B2[temp + 4] == "x" && B2[temp - 1] == "x") {
    
                A2[temp] = "p";
                A2[temp + 1] = "p"; 
                A2[temp + 2] = "p"; 
                A2[temp + 3] = "p"
    
                AllShips2[1] -= 1;
    
                Embeds.error(ChannelFP2, `/ 1 2 3 4 5 6 7 8 9 10\na ${A2[0]} ${A2[1]} ${A2[2]} ${A2[3]} ${A2[4]} ${A2[5]} ${A2[6]} ${A2[7]} ${A2[8]} ${A2[9]}\nb ${B2[0]} ${B2[1]} ${B2[2]} ${B2[3]} ${B2[4]} ${B2[5]} ${B2[6]} ${B2[7]} ${B2[8]} ${B2[9]}\nc ${C2[0]} ${C2[1]} ${C2[2]} ${C2[3]} ${C2[4]} ${C2[5]} ${C2[6]} ${C2[7]} ${C2[8]} ${C2[9]}\nd ${D2[0]} ${D2[1]} ${D2[2]} ${D2[3]} ${D2[4]} ${D2[5]} ${D2[6]} ${D2[7]} ${D2[8]} ${D2[9]}\ne ${E2[0]} ${E2[1]} ${E2[2]} ${E2[3]} ${E2[4]} ${E2[5]} ${E2[6]} ${E2[7]} ${E2[8]} ${E2[9]}\nf ${F2[0]} ${F2[1]} ${F2[2]} ${F2[3]} ${F2[4]} ${F2[5]} ${F2[6]} ${F2[7]} ${F2[8]} ${F2[9]}\ng ${G2[0]} ${G2[1]} ${G2[2]} ${G2[3]} ${G2[4]} ${G2[5]} ${G2[6]} ${G2[7]} ${G2[8]} ${G2[9]}\n`)
    
              } else {
    
                msg.channel.send("You cant place that ship there!")
    
              }
    
            }
    
            }
    
          } else if(args[2].toString() == "F" && AllShips2[2] != 0) {
    
            if(args[3].toString() == "V") {
    
              msg.channel.send("Thats not possible!")
    
            } else if (args[3].toString() == "H") {
    
              if(temp + 3 == 10) {
    
                if(A2[temp] == "x" && A2[temp + 1] == "x" && A2[temp + 2] == "x" && A2[temp - 1] == "x" && B2[temp] == "x" && B2[temp + 1] == "x" && B2[temp + 2] == "x" && B2[temp - 1] == "x") {
    
                  A2[temp] = "p";
                  A2[temp + 1] = "p"; 
                  A2[temp + 2] = "p"; 
    
                  AllShips2[2] -= 1;
    
                  Embeds.error(ChannelFP2, `/ 1 2 3 4 5 6 7 8 9 10\na ${A2[0]} ${A2[1]} ${A2[2]} ${A2[3]} ${A2[4]} ${A2[5]} ${A2[6]} ${A2[7]} ${A2[8]} ${A2[9]}\nb ${B2[0]} ${B2[1]} ${B2[2]} ${B2[3]} ${B2[4]} ${B2[5]} ${B2[6]} ${B2[7]} ${B2[8]} ${B2[9]}\nc ${C2[0]} ${C2[1]} ${C2[2]} ${C2[3]} ${C2[4]} ${C2[5]} ${C2[6]} ${C2[7]} ${C2[8]} ${C2[9]}\nd ${D2[0]} ${D2[1]} ${D2[2]} ${D2[3]} ${D2[4]} ${D2[5]} ${D2[6]} ${D2[7]} ${D2[8]} ${D2[9]}\ne ${E2[0]} ${E2[1]} ${E2[2]} ${E2[3]} ${E2[4]} ${E2[5]} ${E2[6]} ${E2[7]} ${E2[8]} ${E2[9]}\nf ${F2[0]} ${F2[1]} ${F2[2]} ${F2[3]} ${F2[4]} ${F2[5]} ${F2[6]} ${F2[7]} ${F2[8]} ${F2[9]}\ng ${G2[0]} ${G2[1]} ${G2[2]} ${G2[3]} ${G2[4]} ${G2[5]} ${G2[6]} ${G2[7]} ${G2[8]} ${G2[9]}\n`)
    
                } else {
    
                  msg.channel.send("You cant place that ship there!")
    
                }
    
              } else if (temp + 3 < 10) {
    
              if(A2[temp] == "x" && A2[temp + 1] == "x" && A2[temp + 2] == "x" && A2[temp + 3] == "x" && A2[temp - 1] == "x" && B2[temp] == "x" && B2[temp + 1] == "x" && B2[temp + 2] == "x" && B2[temp + 3] == "x" && B2[temp - 1] == "x") {
    
                A2[temp] = "p";
                A2[temp + 1] = "p"; 
                A2[temp + 2] = "p"; 
    
                AllShips2[2] -= 1;
    
                Embeds.error(ChannelFP2, `/ 1 2 3 4 5 6 7 8 9 10\na ${A2[0]} ${A2[1]} ${A2[2]} ${A2[3]} ${A2[4]} ${A2[5]} ${A2[6]} ${A2[7]} ${A2[8]} ${A2[9]}\nb ${B2[0]} ${B2[1]} ${B2[2]} ${B2[3]} ${B2[4]} ${B2[5]} ${B2[6]} ${B2[7]} ${B2[8]} ${B2[9]}\nc ${C2[0]} ${C2[1]} ${C2[2]} ${C2[3]} ${C2[4]} ${C2[5]} ${C2[6]} ${C2[7]} ${C2[8]} ${C2[9]}\nd ${D2[0]} ${D2[1]} ${D2[2]} ${D2[3]} ${D2[4]} ${D2[5]} ${D2[6]} ${D2[7]} ${D2[8]} ${D2[9]}\ne ${E2[0]} ${E2[1]} ${E2[2]} ${E2[3]} ${E2[4]} ${E2[5]} ${E2[6]} ${E2[7]} ${E2[8]} ${E2[9]}\nf ${F2[0]} ${F2[1]} ${F2[2]} ${F2[3]} ${F2[4]} ${F2[5]} ${F2[6]} ${F2[7]} ${F2[8]} ${F2[9]}\ng ${G2[0]} ${G2[1]} ${G2[2]} ${G2[3]} ${G2[4]} ${G2[5]} ${G2[6]} ${G2[7]} ${G2[8]} ${G2[9]}\n`)
    
              } else {
    
                msg.channel.send("You cant place that ship there!")
    
              }
    
            }
    
            }
    
          } else if(args[2].toString() == "M" && AllShips2[3] != 0) {
    
            if(args[3].toString() == "V") {
    
              msg.channel.send("Thats not possible!")
    
            } else if (args[3].toString() == "H") {
    
              if(temp + 2 == 10) {
    
                if(A2[temp] == "x" && A2[temp + 1] == "x" && A2[temp - 1] == "x" && B2[temp] == "x" && B2[temp + 1] == "x" && B2[temp - 1] == "x") {
    
                  A2[temp] = "p";
                  A2[temp + 1] = "p"; 
    
                  AllShips2[3] -= 1;
    
                  Embeds.error(ChannelFP2, `/ 1 2 3 4 5 6 7 8 9 10\na ${A2[0]} ${A2[1]} ${A2[2]} ${A2[3]} ${A2[4]} ${A2[5]} ${A2[6]} ${A2[7]} ${A2[8]} ${A2[9]}\nb ${B2[0]} ${B2[1]} ${B2[2]} ${B2[3]} ${B2[4]} ${B2[5]} ${B2[6]} ${B2[7]} ${B2[8]} ${B2[9]}\nc ${C2[0]} ${C2[1]} ${C2[2]} ${C2[3]} ${C2[4]} ${C2[5]} ${C2[6]} ${C2[7]} ${C2[8]} ${C2[9]}\nd ${D2[0]} ${D2[1]} ${D2[2]} ${D2[3]} ${D2[4]} ${D2[5]} ${D2[6]} ${D2[7]} ${D2[8]} ${D2[9]}\ne ${E2[0]} ${E2[1]} ${E2[2]} ${E2[3]} ${E2[4]} ${E2[5]} ${E2[6]} ${E2[7]} ${E2[8]} ${E2[9]}\nf ${F2[0]} ${F2[1]} ${F2[2]} ${F2[3]} ${F2[4]} ${F2[5]} ${F2[6]} ${F2[7]} ${F2[8]} ${F2[9]}\ng ${G2[0]} ${G2[1]} ${G2[2]} ${G2[3]} ${G2[4]} ${G2[5]} ${G2[6]} ${G2[7]} ${G2[8]} ${G2[9]}\n`)
    
                } else {
    
                  msg.channel.send("You cant place that ship there!")
    
                }
    
              } else if (temp + 2 < 10) {
    
              if(A2[temp] == "x" && A2[temp + 1] == "x" && A2[temp + 2] == "x" && A2[temp - 1] == "x" && B2[temp] == "x" && B2[temp + 1] == "x" && B2[temp + 2] == "x" && B2[temp - 1] == "x") {
    
                A2[temp] = "p";
                A2[temp + 1] = "p"; 
    
                AllShips2[3] -= 1;
    
                Embeds.error(ChannelFP2, `/ 1 2 3 4 5 6 7 8 9 10\na ${A2[0]} ${A2[1]} ${A2[2]} ${A2[3]} ${A2[4]} ${A2[5]} ${A2[6]} ${A2[7]} ${A2[8]} ${A2[9]}\nb ${B2[0]} ${B2[1]} ${B2[2]} ${B2[3]} ${B2[4]} ${B2[5]} ${B2[6]} ${B2[7]} ${B2[8]} ${B2[9]}\nc ${C2[0]} ${C2[1]} ${C2[2]} ${C2[3]} ${C2[4]} ${C2[5]} ${C2[6]} ${C2[7]} ${C2[8]} ${C2[9]}\nd ${D2[0]} ${D2[1]} ${D2[2]} ${D2[3]} ${D2[4]} ${D2[5]} ${D2[6]} ${D2[7]} ${D2[8]} ${D2[9]}\ne ${E2[0]} ${E2[1]} ${E2[2]} ${E2[3]} ${E2[4]} ${E2[5]} ${E2[6]} ${E2[7]} ${E2[8]} ${E2[9]}\nf ${F2[0]} ${F2[1]} ${F2[2]} ${F2[3]} ${F2[4]} ${F2[5]} ${F2[6]} ${F2[7]} ${F2[8]} ${F2[9]}\ng ${G2[0]} ${G2[1]} ${G2[2]} ${G2[3]} ${G2[4]} ${G2[5]} ${G2[6]} ${G2[7]} ${G2[8]} ${G2[9]}\n`)
    
              } else {
    
                msg.channel.send("You cant place that ship there!")
    
              }
    
            }
    
            }
    
          } else {
    
            msg.channel.send("You used all ships of this kind")
    
          }
    
        } else if (temp == 0) {
    
          if(args[2].toString() == "B" && AllShips2[0] != 0) {
    
            if(args[3].toString() == "V") {
    
              msg.channel.send("Thats not possible!")
    
            } else if (args[3].toString() == "H") {
    
              if(A2[temp] == "x" && A2[temp + 1] == "x" && A2[temp + 2] == "x" && A2[temp + 3] == "x" && A2[temp + 4] == "x" && A2[temp + 5] == "x" && B2[temp] == "x" && B2[temp + 1] == "x" && B2[temp + 2] == "x" && B2[temp + 3] == "x" && B2[temp + 4] == "x" && B2[temp +5] == "x") {
    
                A2[temp] = "p";
                A2[temp + 1] = "p"; 
                A2[temp + 2] = "p"; 
                A2[temp + 3] = "p"
                A2[temp + 4] = "p";
    
                AllShips2[0] -= 1;
    
                Embeds.error(ChannelFP2, `/ 1 2 3 4 5 6 7 8 9 10\na ${A2[0]} ${A2[1]} ${A2[2]} ${A2[3]} ${A2[4]} ${A2[5]} ${A2[6]} ${A2[7]} ${A2[8]} ${A2[9]}\nb ${B2[0]} ${B2[1]} ${B2[2]} ${B2[3]} ${B2[4]} ${B2[5]} ${B2[6]} ${B2[7]} ${B2[8]} ${B2[9]}\nc ${C2[0]} ${C2[1]} ${C2[2]} ${C2[3]} ${C2[4]} ${C2[5]} ${C2[6]} ${C2[7]} ${C2[8]} ${C2[9]}\nd ${D2[0]} ${D2[1]} ${D2[2]} ${D2[3]} ${D2[4]} ${D2[5]} ${D2[6]} ${D2[7]} ${D2[8]} ${D2[9]}\ne ${E2[0]} ${E2[1]} ${E2[2]} ${E2[3]} ${E2[4]} ${E2[5]} ${E2[6]} ${E2[7]} ${E2[8]} ${E2[9]}\nf ${F2[0]} ${F2[1]} ${F2[2]} ${F2[3]} ${F2[4]} ${F2[5]} ${F2[6]} ${F2[7]} ${F2[8]} ${F2[9]}\ng ${G2[0]} ${G2[1]} ${G2[2]} ${G2[3]} ${G2[4]} ${G2[5]} ${G2[6]} ${G2[7]} ${G2[8]} ${G2[9]}\n`)
    
              } else {
    
                msg.channel.send("You cant place that ship there!")
    
              }
    
            }
    
          } else if(args[2].toString() == "C" && AllShips2[1] != 0) {
    
            if(args[3].toString() == "V") {
    
              msg.channel.send("Thats not possible!")
    
            } else if (args[3].toString() == "H") {
    
              if(A2[temp] == "x" && A2[temp + 1] == "x" && A2[temp + 2] == "x" && A2[temp + 3] == "x" && A2[temp + 4] == "x" && B2[temp] == "x" && B2[temp + 1] == "x" && B2[temp + 2] == "x" && B2[temp + 3] == "x" && B2[temp + 4] == "x") {
    
                A2[temp] = "p";
                A2[temp + 1] = "p"; 
                A2[temp + 2] = "p"; 
                A2[temp + 3] = "p"
    
                AllShips2[1] -= 1;
    
                Embeds.error(ChannelFP2, `/ 1 2 3 4 5 6 7 8 9 10\na ${A2[0]} ${A2[1]} ${A2[2]} ${A2[3]} ${A2[4]} ${A2[5]} ${A2[6]} ${A2[7]} ${A2[8]} ${A2[9]}\nb ${B2[0]} ${B2[1]} ${B2[2]} ${B2[3]} ${B2[4]} ${B2[5]} ${B2[6]} ${B2[7]} ${B2[8]} ${B2[9]}\nc ${C2[0]} ${C2[1]} ${C2[2]} ${C2[3]} ${C2[4]} ${C2[5]} ${C2[6]} ${C2[7]} ${C2[8]} ${C2[9]}\nd ${D2[0]} ${D2[1]} ${D2[2]} ${D2[3]} ${D2[4]} ${D2[5]} ${D2[6]} ${D2[7]} ${D2[8]} ${D2[9]}\ne ${E2[0]} ${E2[1]} ${E2[2]} ${E2[3]} ${E2[4]} ${E2[5]} ${E2[6]} ${E2[7]} ${E2[8]} ${E2[9]}\nf ${F2[0]} ${F2[1]} ${F2[2]} ${F2[3]} ${F2[4]} ${F2[5]} ${F2[6]} ${F2[7]} ${F2[8]} ${F2[9]}\ng ${G2[0]} ${G2[1]} ${G2[2]} ${G2[3]} ${G2[4]} ${G2[5]} ${G2[6]} ${G2[7]} ${G2[8]} ${G2[9]}\n`)
    
              } else {
    
                msg.channel.send("You cant place that ship there!")
    
              }
    
            }
    
          } else if(args[2].toString() == "F" && AllShips2[2] != 0) {
    
            if(args[3].toString() == "V") {
    
              msg.channel.send("Thats not possible!")
    
            } else if (args[3].toString() == "H") {
    
              if(A2[temp] == "x" && A2[temp + 1] == "x" && A2[temp + 2] == "x" && A2[temp + 3] == "x" && B2[temp] == "x" && B2[temp + 1] == "x" && B2[temp + 2] == "x" && B2[temp + 3] == "x") {
    
                A2[temp] = "p";
                A2[temp + 1] = "p"; 
                A2[temp + 2] = "p"; 
    
                AllShips2[2] -= 1;
    
                Embeds.error(ChannelFP2, `/ 1 2 3 4 5 6 7 8 9 10\na ${A2[0]} ${A2[1]} ${A2[2]} ${A2[3]} ${A2[4]} ${A2[5]} ${A2[6]} ${A2[7]} ${A2[8]} ${A2[9]}\nb ${B2[0]} ${B2[1]} ${B2[2]} ${B2[3]} ${B2[4]} ${B2[5]} ${B2[6]} ${B2[7]} ${B2[8]} ${B2[9]}\nc ${C2[0]} ${C2[1]} ${C2[2]} ${C2[3]} ${C2[4]} ${C2[5]} ${C2[6]} ${C2[7]} ${C2[8]} ${C2[9]}\nd ${D2[0]} ${D2[1]} ${D2[2]} ${D2[3]} ${D2[4]} ${D2[5]} ${D2[6]} ${D2[7]} ${D2[8]} ${D2[9]}\ne ${E2[0]} ${E2[1]} ${E2[2]} ${E2[3]} ${E2[4]} ${E2[5]} ${E2[6]} ${E2[7]} ${E2[8]} ${E2[9]}\nf ${F2[0]} ${F2[1]} ${F2[2]} ${F2[3]} ${F2[4]} ${F2[5]} ${F2[6]} ${F2[7]} ${F2[8]} ${F2[9]}\ng ${G2[0]} ${G2[1]} ${G2[2]} ${G2[3]} ${G2[4]} ${G2[5]} ${G2[6]} ${G2[7]} ${G2[8]} ${G2[9]}\n`)
    
              } else {
    
                msg.channel.send("You cant place that ship there!")
    
              }
    
            }
    
          } else if(args[2].toString() == "M" && AllShips2[3] != 0) {
    
            if(args[3].toString() == "V") {
    
              msg.channel.send("Thats not possible!")
    
            } else if (args[3].toString() == "H") {
    
              if(A2[temp] == "x" && A2[temp + 1] == "x" && A2[temp + 2] == "x" && B2[temp] == "x" && B2[temp + 1] == "x" && B2[temp + 2] == "x") {
    
                A2[temp] = "p";
                A2[temp + 1] = "p"; 
    
                AllShips2[3] -= 1;
    
                Embeds.error(ChannelFP2, `/ 1 2 3 4 5 6 7 8 9 10\na ${A2[0]} ${A2[1]} ${A2[2]} ${A2[3]} ${A2[4]} ${A2[5]} ${A2[6]} ${A2[7]} ${A2[8]} ${A2[9]}\nb ${B2[0]} ${B2[1]} ${B2[2]} ${B2[3]} ${B2[4]} ${B2[5]} ${B2[6]} ${B2[7]} ${B2[8]} ${B2[9]}\nc ${C2[0]} ${C2[1]} ${C2[2]} ${C2[3]} ${C2[4]} ${C2[5]} ${C2[6]} ${C2[7]} ${C2[8]} ${C2[9]}\nd ${D2[0]} ${D2[1]} ${D2[2]} ${D2[3]} ${D2[4]} ${D2[5]} ${D2[6]} ${D2[7]} ${D2[8]} ${D2[9]}\ne ${E2[0]} ${E2[1]} ${E2[2]} ${E2[3]} ${E2[4]} ${E2[5]} ${E2[6]} ${E2[7]} ${E2[8]} ${E2[9]}\nf ${F2[0]} ${F2[1]} ${F2[2]} ${F2[3]} ${F2[4]} ${F2[5]} ${F2[6]} ${F2[7]} ${F2[8]} ${F2[9]}\ng ${G2[0]} ${G2[1]} ${G2[2]} ${G2[3]} ${G2[4]} ${G2[5]} ${G2[6]} ${G2[7]} ${G2[8]} ${G2[9]}\n`)
    
              } else {
    
                msg.channel.send("You cant place that ship there!")
    
              }
    
            }
    
          } else {
    
            msg.channel.send("You used all ships of this kind")
    
          }
    
        }
    
      } else if(args[0].toString() == "B") {
    
      var temp = parseInt(args[1] - 1)
    
      if(temp > 0) {
    
        if(args[2].toString() == "B" && AllShips2[0] != 0) {
    
          if(args[3].toString() == "V") {
    
            msg.channel.send("Thats not possible!")
    
          } else if (args[3].toString() == "H") {
    
            if(temp + 5 == 10) {
    
              if(A2[temp] == "x" && A2[temp + 1] == "x" && A2[temp + 2] == "x" && A2[temp + 3] == "x" && A2[temp + 4] == "x" && A2[temp - 1] == "x" && B2[temp] == "x" && B2[temp + 1] == "x" && B2[temp + 2] == "x" && B2[temp + 3] == "x" && B2[temp + 4] == "x" && B2[temp - 1] == "x" && C2[temp] == "x" && C2[temp + 1] == "x" && C2[temp + 2] == "x" && C2[temp + 3] == "x" && C2[temp + 4] == "x" && C2[temp - 1] == "x") {
    
                B2[temp] = "p";
                B2[temp + 1] = "p"; 
                B2[temp + 2] = "p"; 
                B2[temp + 3] = "p";
                B2[temp + 4] = "p";
    
                AllShips2[0] -= 1;
    
                Embeds.error(ChannelFP2, `/ 1 2 3 4 5 6 7 8 9 10\na ${A2[0]} ${A2[1]} ${A2[2]} ${A2[3]} ${A2[4]} ${A2[5]} ${A2[6]} ${A2[7]} ${A2[8]} ${A2[9]}\nb ${B2[0]} ${B2[1]} ${B2[2]} ${B2[3]} ${B2[4]} ${B2[5]} ${B2[6]} ${B2[7]} ${B2[8]} ${B2[9]}\nc ${C2[0]} ${C2[1]} ${C2[2]} ${C2[3]} ${C2[4]} ${C2[5]} ${C2[6]} ${C2[7]} ${C2[8]} ${C2[9]}\nd ${D2[0]} ${D2[1]} ${D2[2]} ${D2[3]} ${D2[4]} ${D2[5]} ${D2[6]} ${D2[7]} ${D2[8]} ${D2[9]}\ne ${E2[0]} ${E2[1]} ${E2[2]} ${E2[3]} ${E2[4]} ${E2[5]} ${E2[6]} ${E2[7]} ${E2[8]} ${E2[9]}\nf ${F2[0]} ${F2[1]} ${F2[2]} ${F2[3]} ${F2[4]} ${F2[5]} ${F2[6]} ${F2[7]} ${F2[8]} ${F2[9]}\ng ${G2[0]} ${G2[1]} ${G2[2]} ${G2[3]} ${G2[4]} ${G2[5]} ${G2[6]} ${G2[7]} ${G2[8]} ${G2[9]}\n`)
    
              } else {
    
                msg.channel.send("You cant place that ship there!")
    
              }
              
            } else if (temp + 5 < 10) {
    
            if(A2[temp] == "x" && A2[temp + 1] == "x" && A2[temp + 2] == "x" && A2[temp + 3] == "x" && A2[temp + 4] == "x" && A2[temp + 5] == "x" && A2[temp - 1] == "x" && B2[temp] == "x" && B2[temp + 1] == "x" && B2[temp + 2] == "x" && B2[temp + 3] == "x" && B2[temp + 4] == "x" && B2[temp - 1] == "x" && B2[temp +5] == "x" && C2[temp] == "x" && C2[temp + 1] == "x" && C2[temp + 2] == "x" && C2[temp + 3] == "x" && C2[temp + 4] == "x" && C2[temp - 1] == "x" && C2[temp + 5] == "x") {
    
              B2[temp] = "p";
              B2[temp + 1] = "p"; 
              B2[temp + 2] = "p"; 
              B2[temp + 3] = "p"
              B2[temp + 4] = "p";
    
              AllShips2[0] -= 1;
    
              Embeds.error(ChannelFP2, `/ 1 2 3 4 5 6 7 8 9 10\na ${A2[0]} ${A2[1]} ${A2[2]} ${A2[3]} ${A2[4]} ${A2[5]} ${A2[6]} ${A2[7]} ${A2[8]} ${A2[9]}\nb ${B2[0]} ${B2[1]} ${B2[2]} ${B2[3]} ${B2[4]} ${B2[5]} ${B2[6]} ${B2[7]} ${B2[8]} ${B2[9]}\nc ${C2[0]} ${C2[1]} ${C2[2]} ${C2[3]} ${C2[4]} ${C2[5]} ${C2[6]} ${C2[7]} ${C2[8]} ${C2[9]}\nd ${D2[0]} ${D2[1]} ${D2[2]} ${D2[3]} ${D2[4]} ${D2[5]} ${D2[6]} ${D2[7]} ${D2[8]} ${D2[9]}\ne ${E2[0]} ${E2[1]} ${E2[2]} ${E2[3]} ${E2[4]} ${E2[5]} ${E2[6]} ${E2[7]} ${E2[8]} ${E2[9]}\nf ${F2[0]} ${F2[1]} ${F2[2]} ${F2[3]} ${F2[4]} ${F2[5]} ${F2[6]} ${F2[7]} ${F2[8]} ${F2[9]}\ng ${G2[0]} ${G2[1]} ${G2[2]} ${G2[3]} ${G2[4]} ${G2[5]} ${G2[6]} ${G2[7]} ${G2[8]} ${G2[9]}\n`)
    
            } else {
    
              msg.channel.send("You cant place that ship there!")
    
            }
    
          }
    
          }
    
        } else if(args[2].toString() == "C" && AllShips2[1] != 0) {
    
          if(args[3].toString() == "V") {
    
            msg.channel.send("Thats not possible!")
    
          } else if (args[3].toString() == "H") {
    
            if(temp + 4 == 10) {
    
              if(A2[temp] == "x" && A2[temp + 1] == "x" && A2[temp + 2] == "x" && A2[temp + 3] == "x" && A2[temp - 1] == "x" && B2[temp] == "x" && B2[temp + 1] == "x" && B2[temp + 2] == "x" && B2[temp + 3] == "x" && B2[temp - 1] == "x" && C2[temp] == "x" && C2[temp + 1] == "x" && C2[temp + 2] == "x" && C2[temp + 3] == "x" && C2[temp - 1] == "x") {
    
                B2[temp] = "p";
                B2[temp + 1] = "p"; 
                B2[temp + 2] = "p"; 
                B2[temp + 3] = "p"
    
                AllShips2[1] -= 1;
    
                Embeds.error(ChannelFP2, `/ 1 2 3 4 5 6 7 8 9 10\na ${A2[0]} ${A2[1]} ${A2[2]} ${A2[3]} ${A2[4]} ${A2[5]} ${A2[6]} ${A2[7]} ${A2[8]} ${A2[9]}\nb ${B2[0]} ${B2[1]} ${B2[2]} ${B2[3]} ${B2[4]} ${B2[5]} ${B2[6]} ${B2[7]} ${B2[8]} ${B2[9]}\nc ${C2[0]} ${C2[1]} ${C2[2]} ${C2[3]} ${C2[4]} ${C2[5]} ${C2[6]} ${C2[7]} ${C2[8]} ${C2[9]}\nd ${D2[0]} ${D2[1]} ${D2[2]} ${D2[3]} ${D2[4]} ${D2[5]} ${D2[6]} ${D2[7]} ${D2[8]} ${D2[9]}\ne ${E2[0]} ${E2[1]} ${E2[2]} ${E2[3]} ${E2[4]} ${E2[5]} ${E2[6]} ${E2[7]} ${E2[8]} ${E2[9]}\nf ${F2[0]} ${F2[1]} ${F2[2]} ${F2[3]} ${F2[4]} ${F2[5]} ${F2[6]} ${F2[7]} ${F2[8]} ${F2[9]}\ng ${G2[0]} ${G2[1]} ${G2[2]} ${G2[3]} ${G2[4]} ${G2[5]} ${G2[6]} ${G2[7]} ${G2[8]} ${G2[9]}\n`)
    
              } else {
    
                msg.channel.send("You cant place that ship there!")
    
              }
    
            } else if (temp + 4 < 10) {
    
            if(A2[temp] == "x" && A2[temp + 1] == "x" && A2[temp + 2] == "x" && A2[temp + 3] == "x" && A2[temp + 4] == "x" && A2[temp - 1] == "x" && B2[temp] == "x" && B2[temp + 1] == "x" && B2[temp + 2] == "x" && B2[temp + 3] == "x" && B2[temp + 4] == "x" && B2[temp - 1] == "x" && C2[temp] == "x" && C2[temp + 1] == "x" && C2[temp + 2] == "x" && C2[temp + 3] == "x" && C2[temp + 4] == "x" && C2[temp - 1] == "x") {
    
              B2[temp] = "p";
              B2[temp + 1] = "p"; 
              B2[temp + 2] = "p"; 
              B2[temp + 3] = "p"
    
              AllShips2[1] -= 1;
    
              Embeds.error(ChannelFP2, `/ 1 2 3 4 5 6 7 8 9 10\na ${A2[0]} ${A2[1]} ${A2[2]} ${A2[3]} ${A2[4]} ${A2[5]} ${A2[6]} ${A2[7]} ${A2[8]} ${A2[9]}\nb ${B2[0]} ${B2[1]} ${B2[2]} ${B2[3]} ${B2[4]} ${B2[5]} ${B2[6]} ${B2[7]} ${B2[8]} ${B2[9]}\nc ${C2[0]} ${C2[1]} ${C2[2]} ${C2[3]} ${C2[4]} ${C2[5]} ${C2[6]} ${C2[7]} ${C2[8]} ${C2[9]}\nd ${D2[0]} ${D2[1]} ${D2[2]} ${D2[3]} ${D2[4]} ${D2[5]} ${D2[6]} ${D2[7]} ${D2[8]} ${D2[9]}\ne ${E2[0]} ${E2[1]} ${E2[2]} ${E2[3]} ${E2[4]} ${E2[5]} ${E2[6]} ${E2[7]} ${E2[8]} ${E2[9]}\nf ${F2[0]} ${F2[1]} ${F2[2]} ${F2[3]} ${F2[4]} ${F2[5]} ${F2[6]} ${F2[7]} ${F2[8]} ${F2[9]}\ng ${G2[0]} ${G2[1]} ${G2[2]} ${G2[3]} ${G2[4]} ${G2[5]} ${G2[6]} ${G2[7]} ${G2[8]} ${G2[9]}\n`)
    
            } else {
    
              msg.channel.send("You cant place that ship there!")
    
            }
    
          }
    
          }
    
        } else if(args[2].toString() == "F" && AllShips2[2] != 0) {
    
          if(args[3].toString() == "V") {
    
            msg.channel.send("Thats not possible!")
    
          } else if (args[3].toString() == "H") {
    
            if(temp + 3 == 10) {
    
              if(A2[temp] == "x" && A2[temp + 1] == "x" && A2[temp + 2] == "x" && A2[temp - 1] == "x" && B2[temp] == "x" && B2[temp + 1] == "x" && B2[temp + 2] == "x" && B2[temp - 1] == "x" && C2[temp] == "x" && C2[temp + 1] == "x" && C2[temp + 2] == "x" && C2[temp - 1] == "x") {
    
                B2[temp] = "p";
                B2[temp + 1] = "p"; 
                B2[temp + 2] = "p"; 
    
                AllShips2[2] -= 1;
    
                Embeds.error(ChannelFP2, `/ 1 2 3 4 5 6 7 8 9 10\na ${A2[0]} ${A2[1]} ${A2[2]} ${A2[3]} ${A2[4]} ${A2[5]} ${A2[6]} ${A2[7]} ${A2[8]} ${A2[9]}\nb ${B2[0]} ${B2[1]} ${B2[2]} ${B2[3]} ${B2[4]} ${B2[5]} ${B2[6]} ${B2[7]} ${B2[8]} ${B2[9]}\nc ${C2[0]} ${C2[1]} ${C2[2]} ${C2[3]} ${C2[4]} ${C2[5]} ${C2[6]} ${C2[7]} ${C2[8]} ${C2[9]}\nd ${D2[0]} ${D2[1]} ${D2[2]} ${D2[3]} ${D2[4]} ${D2[5]} ${D2[6]} ${D2[7]} ${D2[8]} ${D2[9]}\ne ${E2[0]} ${E2[1]} ${E2[2]} ${E2[3]} ${E2[4]} ${E2[5]} ${E2[6]} ${E2[7]} ${E2[8]} ${E2[9]}\nf ${F2[0]} ${F2[1]} ${F2[2]} ${F2[3]} ${F2[4]} ${F2[5]} ${F2[6]} ${F2[7]} ${F2[8]} ${F2[9]}\ng ${G2[0]} ${G2[1]} ${G2[2]} ${G2[3]} ${G2[4]} ${G2[5]} ${G2[6]} ${G2[7]} ${G2[8]} ${G2[9]}\n`)
    
              } else {
    
                msg.channel.send("You cant place that ship there!")
    
              }
    
            } else if (temp + 3 < 10) {
    
            if(A2[temp] == "x" && A2[temp + 1] == "x" && A2[temp + 2] == "x" && A2[temp + 3] == "x" && A2[temp - 1] == "x" && B2[temp] == "x" && B2[temp + 1] == "x" && B2[temp + 2] == "x" && B2[temp + 3] == "x" && B2[temp - 1] == "x" && C2[temp] == "x" && C2[temp + 1] == "x" && C2[temp + 2] == "x" && C2[temp + 3] == "x" && C2[temp - 1] == "x") {
    
              B2[temp] = "p";
              B2[temp + 1] = "p"; 
              B2[temp + 2] = "p"; 
    
              AllShips2[2] -= 1;
    
              Embeds.error(ChannelFP2, `/ 1 2 3 4 5 6 7 8 9 10\na ${A2[0]} ${A2[1]} ${A2[2]} ${A2[3]} ${A2[4]} ${A2[5]} ${A2[6]} ${A2[7]} ${A2[8]} ${A2[9]}\nb ${B2[0]} ${B2[1]} ${B2[2]} ${B2[3]} ${B2[4]} ${B2[5]} ${B2[6]} ${B2[7]} ${B2[8]} ${B2[9]}\nc ${C2[0]} ${C2[1]} ${C2[2]} ${C2[3]} ${C2[4]} ${C2[5]} ${C2[6]} ${C2[7]} ${C2[8]} ${C2[9]}\nd ${D2[0]} ${D2[1]} ${D2[2]} ${D2[3]} ${D2[4]} ${D2[5]} ${D2[6]} ${D2[7]} ${D2[8]} ${D2[9]}\ne ${E2[0]} ${E2[1]} ${E2[2]} ${E2[3]} ${E2[4]} ${E2[5]} ${E2[6]} ${E2[7]} ${E2[8]} ${E2[9]}\nf ${F2[0]} ${F2[1]} ${F2[2]} ${F2[3]} ${F2[4]} ${F2[5]} ${F2[6]} ${F2[7]} ${F2[8]} ${F2[9]}\ng ${G2[0]} ${G2[1]} ${G2[2]} ${G2[3]} ${G2[4]} ${G2[5]} ${G2[6]} ${G2[7]} ${G2[8]} ${G2[9]}\n`)
    
            } else {
    
              msg.channel.send("You cant place that ship there!")
    
            }
    
          }
    
          }
    
        } else if(args[2].toString() == "M" && AllShips2[3] != 0) {
    
          if(args[3].toString() == "V") {
    
            if (temp > 0 && temp < 9) {
    
              if(A2[temp] == "x" && B2[temp] == "x" && A2[temp + 1] == "x" && B2[temp + 1] == "x" && C2[temp] == "x" && C2[temp + 1] == "x" && A2[temp - 1] == "x" && B2[temp - 1] == "x" && C2[temp - 1] == "x") {
    
                A2[temp] = "p";
                B2[temp] = "p"; 
    
                AllShips2[3] -= 1;
    
                Embeds.error(ChannelFP2, `/ 1 2 3 4 5 6 7 8 9 10\na ${A2[0]} ${A2[1]} ${A2[2]} ${A2[3]} ${A2[4]} ${A2[5]} ${A2[6]} ${A2[7]} ${A2[8]} ${A2[9]}\nb ${B2[0]} ${B2[1]} ${B2[2]} ${B2[3]} ${B2[4]} ${B2[5]} ${B2[6]} ${B2[7]} ${B2[8]} ${B2[9]}\nc ${C2[0]} ${C2[1]} ${C2[2]} ${C2[3]} ${C2[4]} ${C2[5]} ${C2[6]} ${C2[7]} ${C2[8]} ${C2[9]}\nd ${D2[0]} ${D2[1]} ${D2[2]} ${D2[3]} ${D2[4]} ${D2[5]} ${D2[6]} ${D2[7]} ${D2[8]} ${D2[9]}\ne ${E2[0]} ${E2[1]} ${E2[2]} ${E2[3]} ${E2[4]} ${E2[5]} ${E2[6]} ${E2[7]} ${E2[8]} ${E2[9]}\nf ${F2[0]} ${F2[1]} ${F2[2]} ${F2[3]} ${F2[4]} ${F2[5]} ${F2[6]} ${F2[7]} ${F2[8]} ${F2[9]}\ng ${G2[0]} ${G2[1]} ${G2[2]} ${G2[3]} ${G2[4]} ${G2[5]} ${G2[6]} ${G2[7]} ${G2[8]} ${G2[9]}\n`)
    
              }
    
            } else if (temp == 9) {
    
              if(A2[temp] == "x" && B2[temp] == "x" && C2[temp] == "x" && A2[temp - 1] == "x" && B2[temp - 1] == "x" && C2[temp - 1] == "x") {
    
                A2[temp] = "p";
                B2[temp] = "p"; 
    
                AllShips2[3] -= 1;
    
                Embeds.error(ChannelFP2, `/ 1 2 3 4 5 6 7 8 9 10\na ${A2[0]} ${A2[1]} ${A2[2]} ${A2[3]} ${A2[4]} ${A2[5]} ${A2[6]} ${A2[7]} ${A2[8]} ${A2[9]}\nb ${B2[0]} ${B2[1]} ${B2[2]} ${B2[3]} ${B2[4]} ${B2[5]} ${B2[6]} ${B2[7]} ${B2[8]} ${B2[9]}\nc ${C2[0]} ${C2[1]} ${C2[2]} ${C2[3]} ${C2[4]} ${C2[5]} ${C2[6]} ${C2[7]} ${C2[8]} ${C2[9]}\nd ${D2[0]} ${D2[1]} ${D2[2]} ${D2[3]} ${D2[4]} ${D2[5]} ${D2[6]} ${D2[7]} ${D2[8]} ${D2[9]}\ne ${E2[0]} ${E2[1]} ${E2[2]} ${E2[3]} ${E2[4]} ${E2[5]} ${E2[6]} ${E2[7]} ${E2[8]} ${E2[9]}\nf ${F2[0]} ${F2[1]} ${F2[2]} ${F2[3]} ${F2[4]} ${F2[5]} ${F2[6]} ${F2[7]} ${F2[8]} ${F2[9]}\ng ${G2[0]} ${G2[1]} ${G2[2]} ${G2[3]} ${G2[4]} ${G2[5]} ${G2[6]} ${G2[7]} ${G2[8]} ${G2[9]}\n`)
    
              }
    
            } else {
    
              msg.channel.send("You cant place that ship there!")
    
            }
    
          } else if (args[3].toString() == "H") {
    
            if(temp + 2 == 10) {
    
              if(A2[temp] == "x" && A2[temp + 1] == "x" && A2[temp - 1] == "x" && B2[temp] == "x" && B2[temp + 1] == "x" && B2[temp - 1] == "x" && C2[temp] == "x" && C2[temp - 1] && C2[temp + 1] == "x") {
    
                B2[temp] = "p";
                B2[temp + 1] = "p"; 
    
                AllShips2[3] -= 1;
    
                Embeds.error(ChannelFP2, `/ 1 2 3 4 5 6 7 8 9 10\na ${A2[0]} ${A2[1]} ${A2[2]} ${A2[3]} ${A2[4]} ${A2[5]} ${A2[6]} ${A2[7]} ${A2[8]} ${A2[9]}\nb ${B2[0]} ${B2[1]} ${B2[2]} ${B2[3]} ${B2[4]} ${B2[5]} ${B2[6]} ${B2[7]} ${B2[8]} ${B2[9]}\nc ${C2[0]} ${C2[1]} ${C2[2]} ${C2[3]} ${C2[4]} ${C2[5]} ${C2[6]} ${C2[7]} ${C2[8]} ${C2[9]}\nd ${D2[0]} ${D2[1]} ${D2[2]} ${D2[3]} ${D2[4]} ${D2[5]} ${D2[6]} ${D2[7]} ${D2[8]} ${D2[9]}\ne ${E2[0]} ${E2[1]} ${E2[2]} ${E2[3]} ${E2[4]} ${E2[5]} ${E2[6]} ${E2[7]} ${E2[8]} ${E2[9]}\nf ${F2[0]} ${F2[1]} ${F2[2]} ${F2[3]} ${F2[4]} ${F2[5]} ${F2[6]} ${F2[7]} ${F2[8]} ${F2[9]}\ng ${G2[0]} ${G2[1]} ${G2[2]} ${G2[3]} ${G2[4]} ${G2[5]} ${G2[6]} ${G2[7]} ${G2[8]} ${G2[9]}\n`)
    
              } else {
    
                msg.channel.send("You cant place that ship there!")
    
              }
    
            } else if (temp + 2 < 10) {
    
            if(A2[temp] == "x" && A2[temp + 1] == "x" && A2[temp + 2] == "x" && A2[temp - 1] == "x" && B2[temp] == "x" && B2[temp + 1] == "x" && B2[temp + 2] == "x" && B2[temp - 1] == "x" && C2[temp] == "x" && C2[temp - 1] && C2[temp + 1] == "x" && C2[temp + 2] == "x") {
    
              B2[temp] = "p";
              B2[temp + 1] = "p"; 
    
              AllShips2[3] -= 1;
    
              Embeds.error(ChannelFP2, `/ 1 2 3 4 5 6 7 8 9 10\na ${A2[0]} ${A2[1]} ${A2[2]} ${A2[3]} ${A2[4]} ${A2[5]} ${A2[6]} ${A2[7]} ${A2[8]} ${A2[9]}\nb ${B2[0]} ${B2[1]} ${B2[2]} ${B2[3]} ${B2[4]} ${B2[5]} ${B2[6]} ${B2[7]} ${B2[8]} ${B2[9]}\nc ${C2[0]} ${C2[1]} ${C2[2]} ${C2[3]} ${C2[4]} ${C2[5]} ${C2[6]} ${C2[7]} ${C2[8]} ${C2[9]}\nd ${D2[0]} ${D2[1]} ${D2[2]} ${D2[3]} ${D2[4]} ${D2[5]} ${D2[6]} ${D2[7]} ${D2[8]} ${D2[9]}\ne ${E2[0]} ${E2[1]} ${E2[2]} ${E2[3]} ${E2[4]} ${E2[5]} ${E2[6]} ${E2[7]} ${E2[8]} ${E2[9]}\nf ${F2[0]} ${F2[1]} ${F2[2]} ${F2[3]} ${F2[4]} ${F2[5]} ${F2[6]} ${F2[7]} ${F2[8]} ${F2[9]}\ng ${G2[0]} ${G2[1]} ${G2[2]} ${G2[3]} ${G2[4]} ${G2[5]} ${G2[6]} ${G2[7]} ${G2[8]} ${G2[9]}\n`)
    
            } else {
    
              msg.channel.send("You cant place that ship there!")
    
            }
    
          }
    
          }
    
        } else {
    
          msg.channel.send("You used all ships of this kind")
    
        }
    
      } else if (temp == 0) {
    
        if(args[2].toString() == "B" && AllShips2[0] != 0) {
    
          if(args[3].toString() == "V") {
    
            msg.channel.send("Thats not possible!")
    
          } else if (args[3].toString() == "H") {
    
            if(A2[temp] == "x" && A2[temp + 1] == "x" && A2[temp + 2] == "x" && A2[temp + 3] == "x" && A2[temp + 4] == "x" && A2[temp + 5] == "x" && B2[temp] == "x" && B2[temp + 1] == "x" && B2[temp + 2] == "x" && B2[temp + 3] == "x" && B2[temp + 4] == "x" && B2[temp +5] == "x" && C2[temp] == "x" && C2[temp] && C2[temp + 1] == "x" && C2[temp + 2] == "x" && C2[temp + 3] == "x" && C2[temp + 4] == "x" && C2[temp + 5] == "x") {
    
              B2[temp] = "p";
              B2[temp + 1] = "p"; 
              B2[temp + 2] = "p"; 
              B2[temp + 3] = "p"
              B2[temp + 4] = "p";
    
              AllShips2[0] -= 1;
    
              Embeds.error(ChannelFP2, `/ 1 2 3 4 5 6 7 8 9 10\na ${A2[0]} ${A2[1]} ${A2[2]} ${A2[3]} ${A2[4]} ${A2[5]} ${A2[6]} ${A2[7]} ${A2[8]} ${A2[9]}\nb ${B2[0]} ${B2[1]} ${B2[2]} ${B2[3]} ${B2[4]} ${B2[5]} ${B2[6]} ${B2[7]} ${B2[8]} ${B2[9]}\nc ${C2[0]} ${C2[1]} ${C2[2]} ${C2[3]} ${C2[4]} ${C2[5]} ${C2[6]} ${C2[7]} ${C2[8]} ${C2[9]}\nd ${D2[0]} ${D2[1]} ${D2[2]} ${D2[3]} ${D2[4]} ${D2[5]} ${D2[6]} ${D2[7]} ${D2[8]} ${D2[9]}\ne ${E2[0]} ${E2[1]} ${E2[2]} ${E2[3]} ${E2[4]} ${E2[5]} ${E2[6]} ${E2[7]} ${E2[8]} ${E2[9]}\nf ${F2[0]} ${F2[1]} ${F2[2]} ${F2[3]} ${F2[4]} ${F2[5]} ${F2[6]} ${F2[7]} ${F2[8]} ${F2[9]}\ng ${G2[0]} ${G2[1]} ${G2[2]} ${G2[3]} ${G2[4]} ${G2[5]} ${G2[6]} ${G2[7]} ${G2[8]} ${G2[9]}\n`)
    
            } else {
    
              msg.channel.send("You cant place that ship there!")
    
            }
    
          }
    
        } else if(args[2].toString() == "C" && AllShips2[1] != 0) {
    
          if(args[3].toString() == "V") {
    
            msg.channel.send("Thats not possible!")
    
          } else if (args[3].toString() == "H") {
    
            if(A2[temp] == "x" && A2[temp + 1] == "x" && A2[temp + 2] == "x" && A2[temp + 3] == "x" && A2[temp + 4] == "x" && B2[temp] == "x" && B2[temp + 1] == "x" && B2[temp + 2] == "x" && B2[temp + 3] == "x" && B2[temp + 4] == "x" && C2[temp] == "x" && C2[temp] && C2[temp + 1] == "x" && C2[temp + 2] == "x" && C2[temp + 3] == "x" && C2[temp + 4] == "x") {
    
              B2[temp] = "p";
              B2[temp + 1] = "p"; 
              B2[temp + 2] = "p"; 
              B2[temp + 3] = "p"
    
              AllShips2[1] -= 1;
    
              Embeds.error(ChannelFP2, `/ 1 2 3 4 5 6 7 8 9 10\na ${A2[0]} ${A2[1]} ${A2[2]} ${A2[3]} ${A2[4]} ${A2[5]} ${A2[6]} ${A2[7]} ${A2[8]} ${A2[9]}\nb ${B2[0]} ${B2[1]} ${B2[2]} ${B2[3]} ${B2[4]} ${B2[5]} ${B2[6]} ${B2[7]} ${B2[8]} ${B2[9]}\nc ${C2[0]} ${C2[1]} ${C2[2]} ${C2[3]} ${C2[4]} ${C2[5]} ${C2[6]} ${C2[7]} ${C2[8]} ${C2[9]}\nd ${D2[0]} ${D2[1]} ${D2[2]} ${D2[3]} ${D2[4]} ${D2[5]} ${D2[6]} ${D2[7]} ${D2[8]} ${D2[9]}\ne ${E2[0]} ${E2[1]} ${E2[2]} ${E2[3]} ${E2[4]} ${E2[5]} ${E2[6]} ${E2[7]} ${E2[8]} ${E2[9]}\nf ${F2[0]} ${F2[1]} ${F2[2]} ${F2[3]} ${F2[4]} ${F2[5]} ${F2[6]} ${F2[7]} ${F2[8]} ${F2[9]}\ng ${G2[0]} ${G2[1]} ${G2[2]} ${G2[3]} ${G2[4]} ${G2[5]} ${G2[6]} ${G2[7]} ${G2[8]} ${G2[9]}\n`)
    
            } else {
    
              msg.channel.send("You cant place that ship there!")
    
            }
    
          }
    
        } else if(args[2].toString() == "F" && AllShips2[2] != 0) {
    
          if(args[3].toString() == "V") {
    
            msg.channel.send("Thats not possible!")
    
          } else if (args[3].toString() == "H") {
    
            if(A2[temp] == "x" && A2[temp + 1] == "x" && A2[temp + 2] == "x" && A2[temp + 3] == "x" && B2[temp] == "x" && B2[temp + 1] == "x" && B2[temp + 2] == "x" && B2[temp + 3] == "x" && C2[temp] == "x" && C2[temp] && C2[temp + 1] == "x" && C2[temp + 2] == "x" && C2[temp + 3] == "x") {
    
              B2[temp] = "p";
              B2[temp + 1] = "p"; 
              B2[temp + 2] = "p"; 
    
              AllShips2[2] -= 1;
    
              Embeds.error(ChannelFP2, `/ 1 2 3 4 5 6 7 8 9 10\na ${A2[0]} ${A2[1]} ${A2[2]} ${A2[3]} ${A2[4]} ${A2[5]} ${A2[6]} ${A2[7]} ${A2[8]} ${A2[9]}\nb ${B2[0]} ${B2[1]} ${B2[2]} ${B2[3]} ${B2[4]} ${B2[5]} ${B2[6]} ${B2[7]} ${B2[8]} ${B2[9]}\nc ${C2[0]} ${C2[1]} ${C2[2]} ${C2[3]} ${C2[4]} ${C2[5]} ${C2[6]} ${C2[7]} ${C2[8]} ${C2[9]}\nd ${D2[0]} ${D2[1]} ${D2[2]} ${D2[3]} ${D2[4]} ${D2[5]} ${D2[6]} ${D2[7]} ${D2[8]} ${D2[9]}\ne ${E2[0]} ${E2[1]} ${E2[2]} ${E2[3]} ${E2[4]} ${E2[5]} ${E2[6]} ${E2[7]} ${E2[8]} ${E2[9]}\nf ${F2[0]} ${F2[1]} ${F2[2]} ${F2[3]} ${F2[4]} ${F2[5]} ${F2[6]} ${F2[7]} ${F2[8]} ${F2[9]}\ng ${G2[0]} ${G2[1]} ${G2[2]} ${G2[3]} ${G2[4]} ${G2[5]} ${G2[6]} ${G2[7]} ${G2[8]} ${G2[9]}\n`)
    
            } else {
    
              msg.channel.send("You cant place that ship there!")
    
            }
    
          }
    
        } else if(args[2].toString() == "M" && AllShips2[3] != 0) {
    
          if(args[3].toString() == "V") {
    
            if(temp == 0) {
    
              if(A2[temp] == "x" && B2[temp] == "x" && A2[temp + 1] == "x" && B2[temp + 1] == "x" && C2[temp] == "x" && C2[temp + 1] == "x") {
    
                A2[temp] = "p";
                B2[temp] = "p"; 
    
                AllShips2[3] -= 1;
    
                Embeds.error(ChannelFP2, `/ 1 2 3 4 5 6 7 8 9 10\na ${A2[0]} ${A2[1]} ${A2[2]} ${A2[3]} ${A2[4]} ${A2[5]} ${A2[6]} ${A2[7]} ${A2[8]} ${A2[9]}\nb ${B2[0]} ${B2[1]} ${B2[2]} ${B2[3]} ${B2[4]} ${B2[5]} ${B2[6]} ${B2[7]} ${B2[8]} ${B2[9]}\nc ${C2[0]} ${C2[1]} ${C2[2]} ${C2[3]} ${C2[4]} ${C2[5]} ${C2[6]} ${C2[7]} ${C2[8]} ${C2[9]}\nd ${D2[0]} ${D2[1]} ${D2[2]} ${D2[3]} ${D2[4]} ${D2[5]} ${D2[6]} ${D2[7]} ${D2[8]} ${D2[9]}\ne ${E2[0]} ${E2[1]} ${E2[2]} ${E2[3]} ${E2[4]} ${E2[5]} ${E2[6]} ${E2[7]} ${E2[8]} ${E2[9]}\nf ${F2[0]} ${F2[1]} ${F2[2]} ${F2[3]} ${F2[4]} ${F2[5]} ${F2[6]} ${F2[7]} ${F2[8]} ${F2[9]}\ng ${G2[0]} ${G2[1]} ${G2[2]} ${G2[3]} ${G2[4]} ${G2[5]} ${G2[6]} ${G2[7]} ${G2[8]} ${G2[9]}\n`)
    
              } else {
    
                msg.channel.send("You cant place that ship there!")
    
              }
    
            }
    
          } else if (args[3].toString() == "H") {
    
            if(A2[temp] == "x" && A2[temp + 1] == "x" && A2[temp + 2] == "x" && B2[temp] == "x" && B2[temp + 1] == "x" && B2[temp + 2] == "x" && C2[temp] == "x" && C2[temp] && C2[temp + 1] == "x" && C2[temp + 2] == "x") {
    
              B2[temp] = "p";
              B2[temp + 1] = "p"; 
    
              AllShips2[3] -= 1;
    
              Embeds.error(ChannelFP2, `/ 1 2 3 4 5 6 7 8 9 10\na ${A2[0]} ${A2[1]} ${A2[2]} ${A2[3]} ${A2[4]} ${A2[5]} ${A2[6]} ${A2[7]} ${A2[8]} ${A2[9]}\nb ${B2[0]} ${B2[1]} ${B2[2]} ${B2[3]} ${B2[4]} ${B2[5]} ${B2[6]} ${B2[7]} ${B2[8]} ${B2[9]}\nc ${C2[0]} ${C2[1]} ${C2[2]} ${C2[3]} ${C2[4]} ${C2[5]} ${C2[6]} ${C2[7]} ${C2[8]} ${C2[9]}\nd ${D2[0]} ${D2[1]} ${D2[2]} ${D2[3]} ${D2[4]} ${D2[5]} ${D2[6]} ${D2[7]} ${D2[8]} ${D2[9]}\ne ${E2[0]} ${E2[1]} ${E2[2]} ${E2[3]} ${E2[4]} ${E2[5]} ${E2[6]} ${E2[7]} ${E2[8]} ${E2[9]}\nf ${F2[0]} ${F2[1]} ${F2[2]} ${F2[3]} ${F2[4]} ${F2[5]} ${F2[6]} ${F2[7]} ${F2[8]} ${F2[9]}\ng ${G2[0]} ${G2[1]} ${G2[2]} ${G2[3]} ${G2[4]} ${G2[5]} ${G2[6]} ${G2[7]} ${G2[8]} ${G2[9]}\n`)
    
            } else {
    
              msg.channel.send("You cant place that ship there!")
    
            }
    
          }
    
        } else {
    
          msg.channel.send("You used all ships of this kind")
    
        }
    
      } 
    
      } else if(args[0].toString() == "C") {
    
    var temp = parseInt(args[1] - 1)
    
    if(temp > 0) {
    
      if(args[2].toString() == "B" && AllShips2[0] != 0) {
    
        if(args[3].toString() == "V") {
    
          msg.channel.send("Thats not possible!")
    
        } else if (args[3].toString() == "H") {
    
          if(temp + 5 == 10) {
    
            if(B2[temp] == "x" && B2[temp + 1] == "x" && B2[temp + 2] == "x" && B2[temp + 3] == "x" && B2[temp + 4] == "x" && B2[temp - 1] == "x" && C2[temp] == "x" && C2[temp + 1] == "x" && C2[temp + 2] == "x" && C2[temp + 3] == "x" && C2[temp + 4] == "x" && C2[temp - 1] == "x" && D2[temp] == "x" && D2[temp + 1] == "x" && D2[temp + 2] == "x" && D2[temp + 3] == "x" && D2[temp + 4] == "x" && D2[temp - 1] == "x") {
    
              C2[temp] = "p";
              C2[temp + 1] = "p"; 
              C2[temp + 2] = "p"; 
              C2[temp + 3] = "p";
              C2[temp + 4] = "p";
    
              AllShips2[0] -= 1;
    
              Embeds.error(ChannelFP2, `/ 1 2 3 4 5 6 7 8 9 10\na ${A2[0]} ${A2[1]} ${A2[2]} ${A2[3]} ${A2[4]} ${A2[5]} ${A2[6]} ${A2[7]} ${A2[8]} ${A2[9]}\nb ${B2[0]} ${B2[1]} ${B2[2]} ${B2[3]} ${B2[4]} ${B2[5]} ${B2[6]} ${B2[7]} ${B2[8]} ${B2[9]}\nc ${C2[0]} ${C2[1]} ${C2[2]} ${C2[3]} ${C2[4]} ${C2[5]} ${C2[6]} ${C2[7]} ${C2[8]} ${C2[9]}\nd ${D2[0]} ${D2[1]} ${D2[2]} ${D2[3]} ${D2[4]} ${D2[5]} ${D2[6]} ${D2[7]} ${D2[8]} ${D2[9]}\ne ${E2[0]} ${E2[1]} ${E2[2]} ${E2[3]} ${E2[4]} ${E2[5]} ${E2[6]} ${E2[7]} ${E2[8]} ${E2[9]}\nf ${F2[0]} ${F2[1]} ${F2[2]} ${F2[3]} ${F2[4]} ${F2[5]} ${F2[6]} ${F2[7]} ${F2[8]} ${F2[9]}\ng ${G2[0]} ${G2[1]} ${G2[2]} ${G2[3]} ${G2[4]} ${G2[5]} ${G2[6]} ${G2[7]} ${G2[8]} ${G2[9]}\n`)
    
            } else {
    
              msg.channel.send("You cant place that ship there!")
    
            }
            
          } else if (temp + 5 < 10) {
    
          if(B2[temp] == "x" && B2[temp + 1] == "x" && B2[temp + 2] == "x" && B2[temp + 3] == "x" && B2[temp + 4] == "x" && B2[temp + 5] == "x" && B2[temp - 1] == "x" && C2[temp] == "x" && C2[temp + 1] == "x" && C2[temp + 2] == "x" && C2[temp + 3] == "x" && C2[temp + 4] == "x" && C2[temp - 1] == "x" && C2[temp +5] == "x" && D2[temp] == "x" && D2[temp + 1] == "x" && D2[temp + 2] == "x" && D2[temp + 3] == "x" && D2[temp + 4] == "x" && D2[temp - 1] == "x" && D2[temp + 5] == "x") {
    
            C2[temp] = "p";
            C2[temp + 1] = "p"; 
            C2[temp + 2] = "p"; 
            C2[temp + 3] = "p"
            C2[temp + 4] = "p";
    
            AllShips2[0] -= 1;
    
            Embeds.error(ChannelFP2, `/ 1 2 3 4 5 6 7 8 9 10\na ${A2[0]} ${A2[1]} ${A2[2]} ${A2[3]} ${A2[4]} ${A2[5]} ${A2[6]} ${A2[7]} ${A2[8]} ${A2[9]}\nb ${B2[0]} ${B2[1]} ${B2[2]} ${B2[3]} ${B2[4]} ${B2[5]} ${B2[6]} ${B2[7]} ${B2[8]} ${B2[9]}\nc ${C2[0]} ${C2[1]} ${C2[2]} ${C2[3]} ${C2[4]} ${C2[5]} ${C2[6]} ${C2[7]} ${C2[8]} ${C2[9]}\nd ${D2[0]} ${D2[1]} ${D2[2]} ${D2[3]} ${D2[4]} ${D2[5]} ${D2[6]} ${D2[7]} ${D2[8]} ${D2[9]}\ne ${E2[0]} ${E2[1]} ${E2[2]} ${E2[3]} ${E2[4]} ${E2[5]} ${E2[6]} ${E2[7]} ${E2[8]} ${E2[9]}\nf ${F2[0]} ${F2[1]} ${F2[2]} ${F2[3]} ${F2[4]} ${F2[5]} ${F2[6]} ${F2[7]} ${F2[8]} ${F2[9]}\ng ${G2[0]} ${G2[1]} ${G2[2]} ${G2[3]} ${G2[4]} ${G2[5]} ${G2[6]} ${G2[7]} ${G2[8]} ${G2[9]}\n`)
    
          } else {
    
            msg.channel.send("You cant place that ship there!")
    
          }
    
        }
    
        }
    
      } else if(args[2].toString() == "C" && AllShips2[1] != 0) {
    
        if(args[3].toString() == "V") {
    
          msg.channel.send("Thats not possible!")
    
        } else if (args[3].toString() == "H") {
    
          if(temp + 4 == 10) {
    
            if(B2[temp] == "x" && B2[temp + 1] == "x" && B2[temp + 2] == "x" && B2[temp + 3] == "x" && B2[temp - 1] == "x" && C2[temp] == "x" && C2[temp + 1] == "x" && C2[temp + 2] == "x" && C2[temp + 3] == "x" && C2[temp - 1] == "x" && D2[temp] == "x" && D2[temp + 1] == "x" && D2[temp + 2] == "x" && D2[temp + 3] == "x" && D2[temp - 1] == "x") {
    
              C2[temp] = "p";
              C2[temp + 1] = "p"; 
              C2[temp + 2] = "p"; 
              C2[temp + 3] = "p"
    
              AllShips2[1] -= 1;
    
              Embeds.error(ChannelFP2, `/ 1 2 3 4 5 6 7 8 9 10\na ${A2[0]} ${A2[1]} ${A2[2]} ${A2[3]} ${A2[4]} ${A2[5]} ${A2[6]} ${A2[7]} ${A2[8]} ${A2[9]}\nb ${B2[0]} ${B2[1]} ${B2[2]} ${B2[3]} ${B2[4]} ${B2[5]} ${B2[6]} ${B2[7]} ${B2[8]} ${B2[9]}\nc ${C2[0]} ${C2[1]} ${C2[2]} ${C2[3]} ${C2[4]} ${C2[5]} ${C2[6]} ${C2[7]} ${C2[8]} ${C2[9]}\nd ${D2[0]} ${D2[1]} ${D2[2]} ${D2[3]} ${D2[4]} ${D2[5]} ${D2[6]} ${D2[7]} ${D2[8]} ${D2[9]}\ne ${E2[0]} ${E2[1]} ${E2[2]} ${E2[3]} ${E2[4]} ${E2[5]} ${E2[6]} ${E2[7]} ${E2[8]} ${E2[9]}\nf ${F2[0]} ${F2[1]} ${F2[2]} ${F2[3]} ${F2[4]} ${F2[5]} ${F2[6]} ${F2[7]} ${F2[8]} ${F2[9]}\ng ${G2[0]} ${G2[1]} ${G2[2]} ${G2[3]} ${G2[4]} ${G2[5]} ${G2[6]} ${G2[7]} ${G2[8]} ${G2[9]}\n`)
    
            } else {
    
              msg.channel.send("You cant place that ship there!")
    
            }
    
          } else if (temp + 4 < 10) {
    
            if(B2[temp] == "x" && B2[temp + 1] == "x" && B2[temp + 2] == "x" && B2[temp + 3] == "x" && B2[temp + 4] == "x" && B2[temp - 1] == "x" && C2[temp] == "x" && C2[temp + 1] == "x" && C2[temp + 2] == "x" && C2[temp + 3] == "x" && C2[temp + 4] == "x" && C2[temp - 1] == "x" && D2[temp] == "x" && D2[temp + 1] == "x" && D2[temp + 2] == "x" && D2[temp + 3] == "x" && D2[temp + 4] == "x" && D2[temp - 1] == "x") {
    
            C2[temp] = "p";
            C2[temp + 1] = "p"; 
            C2[temp + 2] = "p"; 
            C2[temp + 3] = "p"
    
            AllShips2[1] -= 1;
    
            Embeds.error(ChannelFP2, `/ 1 2 3 4 5 6 7 8 9 10\na ${A2[0]} ${A2[1]} ${A2[2]} ${A2[3]} ${A2[4]} ${A2[5]} ${A2[6]} ${A2[7]} ${A2[8]} ${A2[9]}\nb ${B2[0]} ${B2[1]} ${B2[2]} ${B2[3]} ${B2[4]} ${B2[5]} ${B2[6]} ${B2[7]} ${B2[8]} ${B2[9]}\nc ${C2[0]} ${C2[1]} ${C2[2]} ${C2[3]} ${C2[4]} ${C2[5]} ${C2[6]} ${C2[7]} ${C2[8]} ${C2[9]}\nd ${D2[0]} ${D2[1]} ${D2[2]} ${D2[3]} ${D2[4]} ${D2[5]} ${D2[6]} ${D2[7]} ${D2[8]} ${D2[9]}\ne ${E2[0]} ${E2[1]} ${E2[2]} ${E2[3]} ${E2[4]} ${E2[5]} ${E2[6]} ${E2[7]} ${E2[8]} ${E2[9]}\nf ${F2[0]} ${F2[1]} ${F2[2]} ${F2[3]} ${F2[4]} ${F2[5]} ${F2[6]} ${F2[7]} ${F2[8]} ${F2[9]}\ng ${G2[0]} ${G2[1]} ${G2[2]} ${G2[3]} ${G2[4]} ${G2[5]} ${G2[6]} ${G2[7]} ${G2[8]} ${G2[9]}\n`)
    
          } else {
    
            msg.channel.send("You cant place that ship there!")
    
          }
    
        }
    
        }
    
      } else if(args[2].toString() == "F" && AllShips2[2] != 0) {
    
        if(args[3].toString() == "V") {
    
          if (temp > 0 && temp < 9) {
    
            if(A2[temp] == "x" && B2[temp] == "x" && A2[temp + 1] == "x" && B2[temp + 1] == "x" && C2[temp] == "x" && C2[temp + 1] == "x" && A2[temp - 1] == "x" && B2[temp - 1] == "x" && C2[temp - 1] == "x" && D2[temp] == "x" && D2[temp + 1] == "x" && D2[temp - 1] == "x") {
    
              A2[temp] = "p";
              B2[temp] = "p";
              C2[temp] = "p"; 
    
              AllShips2[2] -= 1;
    
              Embeds.error(ChannelFP2, `/ 1 2 3 4 5 6 7 8 9 10\na ${A2[0]} ${A2[1]} ${A2[2]} ${A2[3]} ${A2[4]} ${A2[5]} ${A2[6]} ${A2[7]} ${A2[8]} ${A2[9]}\nb ${B2[0]} ${B2[1]} ${B2[2]} ${B2[3]} ${B2[4]} ${B2[5]} ${B2[6]} ${B2[7]} ${B2[8]} ${B2[9]}\nc ${C2[0]} ${C2[1]} ${C2[2]} ${C2[3]} ${C2[4]} ${C2[5]} ${C2[6]} ${C2[7]} ${C2[8]} ${C2[9]}\nd ${D2[0]} ${D2[1]} ${D2[2]} ${D2[3]} ${D2[4]} ${D2[5]} ${D2[6]} ${D2[7]} ${D2[8]} ${D2[9]}\ne ${E2[0]} ${E2[1]} ${E2[2]} ${E2[3]} ${E2[4]} ${E2[5]} ${E2[6]} ${E2[7]} ${E2[8]} ${E2[9]}\nf ${F2[0]} ${F2[1]} ${F2[2]} ${F2[3]} ${F2[4]} ${F2[5]} ${F2[6]} ${F2[7]} ${F2[8]} ${F2[9]}\ng ${G2[0]} ${G2[1]} ${G2[2]} ${G2[3]} ${G2[4]} ${G2[5]} ${G2[6]} ${G2[7]} ${G2[8]} ${G2[9]}\n`)
    
            }
    
          } else if (temp == 9) {
    
            if(A2[temp] == "x" && B2[temp] == "x" && C2[temp] == "x" && A2[temp - 1] == "x" && B2[temp - 1] == "x" && C2[temp - 1] == "x" && D2[temp] == "x" && D2[temp - 1] == "x") {
    
              A2[temp] = "p";
              B2[temp] = "p"; 
              C2[temp] = "p";
    
              AllShips2[2] -= 1;
    
              Embeds.error(ChannelFP2, `/ 1 2 3 4 5 6 7 8 9 10\na ${A2[0]} ${A2[1]} ${A2[2]} ${A2[3]} ${A2[4]} ${A2[5]} ${A2[6]} ${A2[7]} ${A2[8]} ${A2[9]}\nb ${B2[0]} ${B2[1]} ${B2[2]} ${B2[3]} ${B2[4]} ${B2[5]} ${B2[6]} ${B2[7]} ${B2[8]} ${B2[9]}\nc ${C2[0]} ${C2[1]} ${C2[2]} ${C2[3]} ${C2[4]} ${C2[5]} ${C2[6]} ${C2[7]} ${C2[8]} ${C2[9]}\nd ${D2[0]} ${D2[1]} ${D2[2]} ${D2[3]} ${D2[4]} ${D2[5]} ${D2[6]} ${D2[7]} ${D2[8]} ${D2[9]}\ne ${E2[0]} ${E2[1]} ${E2[2]} ${E2[3]} ${E2[4]} ${E2[5]} ${E2[6]} ${E2[7]} ${E2[8]} ${E2[9]}\nf ${F2[0]} ${F2[1]} ${F2[2]} ${F2[3]} ${F2[4]} ${F2[5]} ${F2[6]} ${F2[7]} ${F2[8]} ${F2[9]}\ng ${G2[0]} ${G2[1]} ${G2[2]} ${G2[3]} ${G2[4]} ${G2[5]} ${G2[6]} ${G2[7]} ${G2[8]} ${G2[9]}\n`)
    
            }
    
          } else {
    
            msg.channel.send("You cant place that ship there!")
    
          }
    
        } else if (args[3].toString() == "H") {
    
          if(temp + 3 == 10) {
    
            if(B2[temp] == "x" && B2[temp + 1] == "x" && B2[temp + 2] == "x" && B2[temp - 1] == "x" && C2[temp] == "x" && C2[temp + 1] == "x" && C2[temp + 2] == "x" && C2[temp - 1] == "x" && D2[temp] == "x" && D2[temp + 1] == "x" && D2[temp + 2] == "x" && D2[temp - 1] == "x") {
    
              C2[temp] = "p";
              C2[temp + 1] = "p"; 
              C2[temp + 2] = "p"; 
    
              AllShips2[2] -= 1;
    
              Embeds.error(ChannelFP2, `/ 1 2 3 4 5 6 7 8 9 10\na ${A2[0]} ${A2[1]} ${A2[2]} ${A2[3]} ${A2[4]} ${A2[5]} ${A2[6]} ${A2[7]} ${A2[8]} ${A2[9]}\nb ${B2[0]} ${B2[1]} ${B2[2]} ${B2[3]} ${B2[4]} ${B2[5]} ${B2[6]} ${B2[7]} ${B2[8]} ${B2[9]}\nc ${C2[0]} ${C2[1]} ${C2[2]} ${C2[3]} ${C2[4]} ${C2[5]} ${C2[6]} ${C2[7]} ${C2[8]} ${C2[9]}\nd ${D2[0]} ${D2[1]} ${D2[2]} ${D2[3]} ${D2[4]} ${D2[5]} ${D2[6]} ${D2[7]} ${D2[8]} ${D2[9]}\ne ${E2[0]} ${E2[1]} ${E2[2]} ${E2[3]} ${E2[4]} ${E2[5]} ${E2[6]} ${E2[7]} ${E2[8]} ${E2[9]}\nf ${F2[0]} ${F2[1]} ${F2[2]} ${F2[3]} ${F2[4]} ${F2[5]} ${F2[6]} ${F2[7]} ${F2[8]} ${F2[9]}\ng ${G2[0]} ${G2[1]} ${G2[2]} ${G2[3]} ${G2[4]} ${G2[5]} ${G2[6]} ${G2[7]} ${G2[8]} ${G2[9]}\n`)
    
            } else {
    
              msg.channel.send("You cant place that ship there!")
    
            }
    
          } else if (temp + 3 < 10) {
    
            if(B2[temp] == "x" && B2[temp + 1] == "x" && B2[temp + 2] == "x" && B2[temp + 3] == "x" && B2[temp - 1] == "x" && C2[temp] == "x" && C2[temp + 1] == "x" && C2[temp + 2] == "x" && C2[temp + 3] == "x" && C2[temp - 1] == "x" && D2[temp] == "x" && D2[temp + 1] == "x" && D2[temp + 2] == "x" && D2[temp + 3] == "x" && D2[temp - 1] == "x") {
    
            C2[temp] = "p";
            C2[temp + 1] = "p"; 
            C2[temp + 2] = "p"; 
    
            AllShips2[2] -= 1;
    
            Embeds.error(ChannelFP2, `/ 1 2 3 4 5 6 7 8 9 10\na ${A2[0]} ${A2[1]} ${A2[2]} ${A2[3]} ${A2[4]} ${A2[5]} ${A2[6]} ${A2[7]} ${A2[8]} ${A2[9]}\nb ${B2[0]} ${B2[1]} ${B2[2]} ${B2[3]} ${B2[4]} ${B2[5]} ${B2[6]} ${B2[7]} ${B2[8]} ${B2[9]}\nc ${C2[0]} ${C2[1]} ${C2[2]} ${C2[3]} ${C2[4]} ${C2[5]} ${C2[6]} ${C2[7]} ${C2[8]} ${C2[9]}\nd ${D2[0]} ${D2[1]} ${D2[2]} ${D2[3]} ${D2[4]} ${D2[5]} ${D2[6]} ${D2[7]} ${D2[8]} ${D2[9]}\ne ${E2[0]} ${E2[1]} ${E2[2]} ${E2[3]} ${E2[4]} ${E2[5]} ${E2[6]} ${E2[7]} ${E2[8]} ${E2[9]}\nf ${F2[0]} ${F2[1]} ${F2[2]} ${F2[3]} ${F2[4]} ${F2[5]} ${F2[6]} ${F2[7]} ${F2[8]} ${F2[9]}\ng ${G2[0]} ${G2[1]} ${G2[2]} ${G2[3]} ${G2[4]} ${G2[5]} ${G2[6]} ${G2[7]} ${G2[8]} ${G2[9]}\n`)
    
          } else {
    
            msg.channel.send("You cant place that ship there!")
    
          }
    
        }
    
        }
    
      } else if(args[2].toString() == "M" && AllShips2[3] != 0) {
    
        if(args[3].toString() == "V") {
    
          if (temp > 0 && temp < 9) {
    
            if(A2[temp] == "x" && B2[temp] == "x" && A2[temp + 1] == "x" && B2[temp + 1] == "x" && C2[temp] == "x" && C2[temp + 1] == "x" && A2[temp - 1] == "x" && B2[temp - 1] == "x" && C2[temp - 1] == "x" && D2[temp] == "x" && D2[temp + 1] == "x" && D2[temp - 1] == "x") {
    
              B2[temp] = "p";
              C2[temp] = "p"; 
    
              AllShips2[3] -= 1;
    
              Embeds.error(ChannelFP2, `/ 1 2 3 4 5 6 7 8 9 10\na ${A2[0]} ${A2[1]} ${A2[2]} ${A2[3]} ${A2[4]} ${A2[5]} ${A2[6]} ${A2[7]} ${A2[8]} ${A2[9]}\nb ${B2[0]} ${B2[1]} ${B2[2]} ${B2[3]} ${B2[4]} ${B2[5]} ${B2[6]} ${B2[7]} ${B2[8]} ${B2[9]}\nc ${C2[0]} ${C2[1]} ${C2[2]} ${C2[3]} ${C2[4]} ${C2[5]} ${C2[6]} ${C2[7]} ${C2[8]} ${C2[9]}\nd ${D2[0]} ${D2[1]} ${D2[2]} ${D2[3]} ${D2[4]} ${D2[5]} ${D2[6]} ${D2[7]} ${D2[8]} ${D2[9]}\ne ${E2[0]} ${E2[1]} ${E2[2]} ${E2[3]} ${E2[4]} ${E2[5]} ${E2[6]} ${E2[7]} ${E2[8]} ${E2[9]}\nf ${F2[0]} ${F2[1]} ${F2[2]} ${F2[3]} ${F2[4]} ${F2[5]} ${F2[6]} ${F2[7]} ${F2[8]} ${F2[9]}\ng ${G2[0]} ${G2[1]} ${G2[2]} ${G2[3]} ${G2[4]} ${G2[5]} ${G2[6]} ${G2[7]} ${G2[8]} ${G2[9]}\n`)
    
            }
    
          } else if (temp == 9) {
    
            if(A2[temp] == "x" && B2[temp] == "x" && C2[temp] == "x" && A2[temp - 1] == "x" && B2[temp - 1] == "x" && C2[temp - 1] == "x" && D2[temp] == "x" && D2[temp - 1] == "x") {
    
              B2[temp] = "p";
              C2[temp] = "p"; 
    
              AllShips2[3] -= 1;
    
              Embeds.error(ChannelFP2, `/ 1 2 3 4 5 6 7 8 9 10\na ${A2[0]} ${A2[1]} ${A2[2]} ${A2[3]} ${A2[4]} ${A2[5]} ${A2[6]} ${A2[7]} ${A2[8]} ${A2[9]}\nb ${B2[0]} ${B2[1]} ${B2[2]} ${B2[3]} ${B2[4]} ${B2[5]} ${B2[6]} ${B2[7]} ${B2[8]} ${B2[9]}\nc ${C2[0]} ${C2[1]} ${C2[2]} ${C2[3]} ${C2[4]} ${C2[5]} ${C2[6]} ${C2[7]} ${C2[8]} ${C2[9]}\nd ${D2[0]} ${D2[1]} ${D2[2]} ${D2[3]} ${D2[4]} ${D2[5]} ${D2[6]} ${D2[7]} ${D2[8]} ${D2[9]}\ne ${E2[0]} ${E2[1]} ${E2[2]} ${E2[3]} ${E2[4]} ${E2[5]} ${E2[6]} ${E2[7]} ${E2[8]} ${E2[9]}\nf ${F2[0]} ${F2[1]} ${F2[2]} ${F2[3]} ${F2[4]} ${F2[5]} ${F2[6]} ${F2[7]} ${F2[8]} ${F2[9]}\ng ${G2[0]} ${G2[1]} ${G2[2]} ${G2[3]} ${G2[4]} ${G2[5]} ${G2[6]} ${G2[7]} ${G2[8]} ${G2[9]}\n`)
    
            }
    
          } else {
    
            msg.channel.send("You cant place that ship there!")
    
          }
    
        } else if (args[3].toString() == "H") {
    
          if(temp + 2 == 10) {
    
            if(B2[temp] == "x" && B2[temp + 1] == "x" && B2[temp - 1] == "x" && C2[temp] == "x" && C2[temp + 1] == "x" && C2[temp - 1] == "x" && D2[temp] == "x" && D2[temp + 1] == "x" && D2[temp - 1] == "x") {
    
              C2[temp] = "p";
              C2[temp + 1] = "p"; 
    
              AllShips2[3] -= 1;
    
              Embeds.error(ChannelFP2, `/ 1 2 3 4 5 6 7 8 9 10\na ${A2[0]} ${A2[1]} ${A2[2]} ${A2[3]} ${A2[4]} ${A2[5]} ${A2[6]} ${A2[7]} ${A2[8]} ${A2[9]}\nb ${B2[0]} ${B2[1]} ${B2[2]} ${B2[3]} ${B2[4]} ${B2[5]} ${B2[6]} ${B2[7]} ${B2[8]} ${B2[9]}\nc ${C2[0]} ${C2[1]} ${C2[2]} ${C2[3]} ${C2[4]} ${C2[5]} ${C2[6]} ${C2[7]} ${C2[8]} ${C2[9]}\nd ${D2[0]} ${D2[1]} ${D2[2]} ${D2[3]} ${D2[4]} ${D2[5]} ${D2[6]} ${D2[7]} ${D2[8]} ${D2[9]}\ne ${E2[0]} ${E2[1]} ${E2[2]} ${E2[3]} ${E2[4]} ${E2[5]} ${E2[6]} ${E2[7]} ${E2[8]} ${E2[9]}\nf ${F2[0]} ${F2[1]} ${F2[2]} ${F2[3]} ${F2[4]} ${F2[5]} ${F2[6]} ${F2[7]} ${F2[8]} ${F2[9]}\ng ${G2[0]} ${G2[1]} ${G2[2]} ${G2[3]} ${G2[4]} ${G2[5]} ${G2[6]} ${G2[7]} ${G2[8]} ${G2[9]}\n`)
    
            } else {
    
              msg.channel.send("You cant place that ship there!")
    
            }
    
          } else if (temp + 2 < 10) {
    
          if(B2[temp] == "x" && B2[temp + 1] == "x" && B2[temp + 2] == "x" && B2[temp - 1] == "x" && C2[temp] == "x" && C2[temp + 1] == "x" && C2[temp + 2] == "x" && C2[temp - 1] == "x" && D2[temp] == "x" && D2[temp + 1] == "x" && D2[temp + 2] == "x" && D2[temp - 1] == "x") {
    
            C2[temp] = "p";
            C2[temp + 1] = "p"; 
    
            AllShips2[3] -= 1;
    
            Embeds.error(ChannelFP2, `/ 1 2 3 4 5 6 7 8 9 10\na ${A2[0]} ${A2[1]} ${A2[2]} ${A2[3]} ${A2[4]} ${A2[5]} ${A2[6]} ${A2[7]} ${A2[8]} ${A2[9]}\nb ${B2[0]} ${B2[1]} ${B2[2]} ${B2[3]} ${B2[4]} ${B2[5]} ${B2[6]} ${B2[7]} ${B2[8]} ${B2[9]}\nc ${C2[0]} ${C2[1]} ${C2[2]} ${C2[3]} ${C2[4]} ${C2[5]} ${C2[6]} ${C2[7]} ${C2[8]} ${C2[9]}\nd ${D2[0]} ${D2[1]} ${D2[2]} ${D2[3]} ${D2[4]} ${D2[5]} ${D2[6]} ${D2[7]} ${D2[8]} ${D2[9]}\ne ${E2[0]} ${E2[1]} ${E2[2]} ${E2[3]} ${E2[4]} ${E2[5]} ${E2[6]} ${E2[7]} ${E2[8]} ${E2[9]}\nf ${F2[0]} ${F2[1]} ${F2[2]} ${F2[3]} ${F2[4]} ${F2[5]} ${F2[6]} ${F2[7]} ${F2[8]} ${F2[9]}\ng ${G2[0]} ${G2[1]} ${G2[2]} ${G2[3]} ${G2[4]} ${G2[5]} ${G2[6]} ${G2[7]} ${G2[8]} ${G2[9]}\n`)
    
          } else {
    
            msg.channel.send("You cant place that ship there!")
    
          }
    
        }
    
        }
    
      } else {
    
        msg.channel.send("You used all ships of this kind")
    
      }
    
    } else if (temp == 0) {
    
      if(args[2].toString() == "B" && AllShips2[0] != 0) {
    
        if(args[3].toString() == "V") {
    
          msg.channel.send("Thats not possible!")
    
        } else if (args[3].toString() == "H") {
    
          if(B2[temp] == "x" && B2[temp + 1] == "x" && B2[temp + 2] == "x" && B2[temp + 3] == "x" && B2[temp + 4] == "x" && B2[temp + 5] == "x" && C2[temp] == "x" && C2[temp + 1] == "x" && C2[temp + 2] == "x" && C2[temp + 3] == "x" && C2[temp + 4] == "x" && C2[temp + 5] == "x" && D2[temp] == "x" && D2[temp + 1] == "x" && D2[temp + 2] == "x" && D2[temp + 3] == "x" && D2[temp + 4] == "x" && D2[temp + 5] == "x") {
    
            C2[temp] = "p";
            C2[temp + 1] = "p"; 
            C2[temp + 2] = "p"; 
            C2[temp + 3] = "p"
            C2[temp + 4] = "p";
    
            AllShips2[0] -= 1;
    
            Embeds.error(ChannelFP2, `/ 1 2 3 4 5 6 7 8 9 10\na ${A2[0]} ${A2[1]} ${A2[2]} ${A2[3]} ${A2[4]} ${A2[5]} ${A2[6]} ${A2[7]} ${A2[8]} ${A2[9]}\nb ${B2[0]} ${B2[1]} ${B2[2]} ${B2[3]} ${B2[4]} ${B2[5]} ${B2[6]} ${B2[7]} ${B2[8]} ${B2[9]}\nc ${C2[0]} ${C2[1]} ${C2[2]} ${C2[3]} ${C2[4]} ${C2[5]} ${C2[6]} ${C2[7]} ${C2[8]} ${C2[9]}\nd ${D2[0]} ${D2[1]} ${D2[2]} ${D2[3]} ${D2[4]} ${D2[5]} ${D2[6]} ${D2[7]} ${D2[8]} ${D2[9]}\ne ${E2[0]} ${E2[1]} ${E2[2]} ${E2[3]} ${E2[4]} ${E2[5]} ${E2[6]} ${E2[7]} ${E2[8]} ${E2[9]}\nf ${F2[0]} ${F2[1]} ${F2[2]} ${F2[3]} ${F2[4]} ${F2[5]} ${F2[6]} ${F2[7]} ${F2[8]} ${F2[9]}\ng ${G2[0]} ${G2[1]} ${G2[2]} ${G2[3]} ${G2[4]} ${G2[5]} ${G2[6]} ${G2[7]} ${G2[8]} ${G2[9]}\n`)
    
          } else {
    
            msg.channel.send("You cant place that ship there!")
    
          }
    
        }
    
      } else if(args[2].toString() == "C" && AllShips2[1] != 0) {
    
        if(args[3].toString() == "V") {
    
          msg.channel.send("Thats not possible!")
    
        } else if (args[3].toString() == "H") {
    
          if(B2[temp] == "x" && B2[temp + 1] == "x" && B2[temp + 2] == "x" && B2[temp + 3] == "x" && B2[temp + 4] == "x" && C2[temp] == "x" && C2[temp + 1] == "x" && C2[temp + 2] == "x" && C2[temp + 3] == "x" && C2[temp + 4] == "x" && D2[temp] == "x" && D2[temp + 1] == "x" && D2[temp + 2] == "x" && D2[temp + 3] == "x" && D2[temp + 4] == "x") {
    
            C2[temp] = "p";
            C2[temp + 1] = "p"; 
            C2[temp + 2] = "p"; 
            C2[temp + 3] = "p"
    
            AllShips2[1] -= 1;
    
            Embeds.error(ChannelFP2, `/ 1 2 3 4 5 6 7 8 9 10\na ${A2[0]} ${A2[1]} ${A2[2]} ${A2[3]} ${A2[4]} ${A2[5]} ${A2[6]} ${A2[7]} ${A2[8]} ${A2[9]}\nb ${B2[0]} ${B2[1]} ${B2[2]} ${B2[3]} ${B2[4]} ${B2[5]} ${B2[6]} ${B2[7]} ${B2[8]} ${B2[9]}\nc ${C2[0]} ${C2[1]} ${C2[2]} ${C2[3]} ${C2[4]} ${C2[5]} ${C2[6]} ${C2[7]} ${C2[8]} ${C2[9]}\nd ${D2[0]} ${D2[1]} ${D2[2]} ${D2[3]} ${D2[4]} ${D2[5]} ${D2[6]} ${D2[7]} ${D2[8]} ${D2[9]}\ne ${E2[0]} ${E2[1]} ${E2[2]} ${E2[3]} ${E2[4]} ${E2[5]} ${E2[6]} ${E2[7]} ${E2[8]} ${E2[9]}\nf ${F2[0]} ${F2[1]} ${F2[2]} ${F2[3]} ${F2[4]} ${F2[5]} ${F2[6]} ${F2[7]} ${F2[8]} ${F2[9]}\ng ${G2[0]} ${G2[1]} ${G2[2]} ${G2[3]} ${G2[4]} ${G2[5]} ${G2[6]} ${G2[7]} ${G2[8]} ${G2[9]}\n`)
    
          } else {
    
            msg.channel.send("You cant place that ship there!")
    
          }
    
        }
    
      } else if(args[2].toString() == "F" && AllShips2[2] != 0) {
    
        if(args[3].toString() == "V") {
    
          if(A2[temp] == "x" && B2[temp] == "x" && A2[temp + 1] == "x" && B2[temp + 1] == "x" && C2[temp] == "x" && C2[temp + 1] == "x" && D2[temp] == "x" && D2[temp + 1] == "x") {
    
            A2[temp] = "p";
            B2[temp] = "p";
            C2[temp] = "p"; 
    
            AllShips2[2] -= 1;
    
            Embeds.error(ChannelFP2, `/ 1 2 3 4 5 6 7 8 9 10\na ${A2[0]} ${A2[1]} ${A2[2]} ${A2[3]} ${A2[4]} ${A2[5]} ${A2[6]} ${A2[7]} ${A2[8]} ${A2[9]}\nb ${B2[0]} ${B2[1]} ${B2[2]} ${B2[3]} ${B2[4]} ${B2[5]} ${B2[6]} ${B2[7]} ${B2[8]} ${B2[9]}\nc ${C2[0]} ${C2[1]} ${C2[2]} ${C2[3]} ${C2[4]} ${C2[5]} ${C2[6]} ${C2[7]} ${C2[8]} ${C2[9]}\nd ${D2[0]} ${D2[1]} ${D2[2]} ${D2[3]} ${D2[4]} ${D2[5]} ${D2[6]} ${D2[7]} ${D2[8]} ${D2[9]}\ne ${E2[0]} ${E2[1]} ${E2[2]} ${E2[3]} ${E2[4]} ${E2[5]} ${E2[6]} ${E2[7]} ${E2[8]} ${E2[9]}\nf ${F2[0]} ${F2[1]} ${F2[2]} ${F2[3]} ${F2[4]} ${F2[5]} ${F2[6]} ${F2[7]} ${F2[8]} ${F2[9]}\ng ${G2[0]} ${G2[1]} ${G2[2]} ${G2[3]} ${G2[4]} ${G2[5]} ${G2[6]} ${G2[7]} ${G2[8]} ${G2[9]}\n`)
    
          } else {
    
            msg.channel.send("You cant place that ship there!")
    
          }
    
        } else if (args[3].toString() == "H") {
    
          if(B2[temp] == "x" && B2[temp + 1] == "x" && B2[temp + 2] == "x" && B2[temp + 3] == "x" && C2[temp] == "x" && C2[temp + 1] == "x" && C2[temp + 2] == "x" && C2[temp + 3] == "x" && D2[temp] == "x" && D2[temp + 1] == "x" && D2[temp + 2] == "x" && D2[temp + 3] == "x") {
    
            C2[temp] = "p";
            C2[temp + 1] = "p"; 
            C2[temp + 2] = "p"; 
    
            AllShips2[2] -= 1;
    
            Embeds.error(ChannelFP2, `/ 1 2 3 4 5 6 7 8 9 10\na ${A2[0]} ${A2[1]} ${A2[2]} ${A2[3]} ${A2[4]} ${A2[5]} ${A2[6]} ${A2[7]} ${A2[8]} ${A2[9]}\nb ${B2[0]} ${B2[1]} ${B2[2]} ${B2[3]} ${B2[4]} ${B2[5]} ${B2[6]} ${B2[7]} ${B2[8]} ${B2[9]}\nc ${C2[0]} ${C2[1]} ${C2[2]} ${C2[3]} ${C2[4]} ${C2[5]} ${C2[6]} ${C2[7]} ${C2[8]} ${C2[9]}\nd ${D2[0]} ${D2[1]} ${D2[2]} ${D2[3]} ${D2[4]} ${D2[5]} ${D2[6]} ${D2[7]} ${D2[8]} ${D2[9]}\ne ${E2[0]} ${E2[1]} ${E2[2]} ${E2[3]} ${E2[4]} ${E2[5]} ${E2[6]} ${E2[7]} ${E2[8]} ${E2[9]}\nf ${F2[0]} ${F2[1]} ${F2[2]} ${F2[3]} ${F2[4]} ${F2[5]} ${F2[6]} ${F2[7]} ${F2[8]} ${F2[9]}\ng ${G2[0]} ${G2[1]} ${G2[2]} ${G2[3]} ${G2[4]} ${G2[5]} ${G2[6]} ${G2[7]} ${G2[8]} ${G2[9]}\n`)
    
          } else {
    
            msg.channel.send("You cant place that ship there!")
    
          }
    
        }
    
      } else if(args[2].toString() == "M" && AllShips2[3] != 0) {
    
        if(args[3].toString() == "V") {
    
          if(temp == 0) {
    
            if(A2[temp] == "x" && B2[temp] == "x" && A2[temp + 1] == "x" && B2[temp + 1] == "x" && C2[temp] == "x" && C2[temp + 1] == "x" && D2[temp] == "x" && D2[temp + 1] == "x") {
    
              B2[temp] = "p";
              C2[temp] = "p"; 
    
              AllShips2[3] -= 1;
    
              Embeds.error(ChannelFP2, `/ 1 2 3 4 5 6 7 8 9 10\na ${A2[0]} ${A2[1]} ${A2[2]} ${A2[3]} ${A2[4]} ${A2[5]} ${A2[6]} ${A2[7]} ${A2[8]} ${A2[9]}\nb ${B2[0]} ${B2[1]} ${B2[2]} ${B2[3]} ${B2[4]} ${B2[5]} ${B2[6]} ${B2[7]} ${B2[8]} ${B2[9]}\nc ${C2[0]} ${C2[1]} ${C2[2]} ${C2[3]} ${C2[4]} ${C2[5]} ${C2[6]} ${C2[7]} ${C2[8]} ${C2[9]}\nd ${D2[0]} ${D2[1]} ${D2[2]} ${D2[3]} ${D2[4]} ${D2[5]} ${D2[6]} ${D2[7]} ${D2[8]} ${D2[9]}\ne ${E2[0]} ${E2[1]} ${E2[2]} ${E2[3]} ${E2[4]} ${E2[5]} ${E2[6]} ${E2[7]} ${E2[8]} ${E2[9]}\nf ${F2[0]} ${F2[1]} ${F2[2]} ${F2[3]} ${F2[4]} ${F2[5]} ${F2[6]} ${F2[7]} ${F2[8]} ${F2[9]}\ng ${G2[0]} ${G2[1]} ${G2[2]} ${G2[3]} ${G2[4]} ${G2[5]} ${G2[6]} ${G2[7]} ${G2[8]} ${G2[9]}\n`)
    
            } else {
    
              msg.channel.send("You cant place that ship there!")
    
            }
    
          }
    
        } else if (args[3].toString() == "H") {
    
          if(B2[temp] == "x" && B2[temp + 1] == "x" && B2[temp + 2] == "x" && C2[temp] == "x" && C2[temp + 1] == "x" && C2[temp + 2] == "x" && D2[temp] == "x" && D2[temp + 1] == "x" && D2[temp + 2] == "x") {
    
            C2[temp] = "p";
            C2[temp + 1] = "p"; 
    
            AllShips2[3] -= 1;
    
            Embeds.error(ChannelFP2, `/ 1 2 3 4 5 6 7 8 9 10\na ${A2[0]} ${A2[1]} ${A2[2]} ${A2[3]} ${A2[4]} ${A2[5]} ${A2[6]} ${A2[7]} ${A2[8]} ${A2[9]}\nb ${B2[0]} ${B2[1]} ${B2[2]} ${B2[3]} ${B2[4]} ${B2[5]} ${B2[6]} ${B2[7]} ${B2[8]} ${B2[9]}\nc ${C2[0]} ${C2[1]} ${C2[2]} ${C2[3]} ${C2[4]} ${C2[5]} ${C2[6]} ${C2[7]} ${C2[8]} ${C2[9]}\nd ${D2[0]} ${D2[1]} ${D2[2]} ${D2[3]} ${D2[4]} ${D2[5]} ${D2[6]} ${D2[7]} ${D2[8]} ${D2[9]}\ne ${E2[0]} ${E2[1]} ${E2[2]} ${E2[3]} ${E2[4]} ${E2[5]} ${E2[6]} ${E2[7]} ${E2[8]} ${E2[9]}\nf ${F2[0]} ${F2[1]} ${F2[2]} ${F2[3]} ${F2[4]} ${F2[5]} ${F2[6]} ${F2[7]} ${F2[8]} ${F2[9]}\ng ${G2[0]} ${G2[1]} ${G2[2]} ${G2[3]} ${G2[4]} ${G2[5]} ${G2[6]} ${G2[7]} ${G2[8]} ${G2[9]}\n`)
    
          } else {
    
            msg.channel.send("You cant place that ship there!")
    
          }
    
        }
    
      } else {
    
        msg.channel.send("You used all ships of this kind")
    
      }
    
    }
    
      } else if(args[0].toString() == "D") {
    
    var temp = parseInt(args[1] - 1)
    
    if(temp > 0) {
    
      if(args[2].toString() == "B" && AllShips2[0] != 0) {
    
        if(args[3].toString() == "V") {
    
          msg.channel.send("Thats not possible!")
    
        } else if (args[3].toString() == "H") {
    
          if(temp + 5 == 10) {
    
            if(C2[temp] == "x" && C2[temp + 1] == "x" && C2[temp + 2] == "x" && C2[temp + 3] == "x" && C2[temp + 4] == "x" && C2[temp - 1] == "x" && D2[temp] == "x" && D2[temp + 1] == "x" && D2[temp + 2] == "x" && D2[temp + 3] == "x" && D2[temp + 4] == "x" && D2[temp - 1] == "x" && E2[temp] == "x" && E2[temp + 1] == "x" && E2[temp + 2] == "x" && E2[temp + 3] == "x" && E2[temp + 4] == "x" && E2[temp - 1] == "x") {
    
              D2[temp] = "p";
              D2[temp + 1] = "p"; 
              D2[temp + 2] = "p"; 
              D2[temp + 3] = "p";
              D2[temp + 4] = "p";
    
              AllShips2[0] -= 1;
    
              Embeds.error(ChannelFP2, `/ 1 2 3 4 5 6 7 8 9 10\na ${A2[0]} ${A2[1]} ${A2[2]} ${A2[3]} ${A2[4]} ${A2[5]} ${A2[6]} ${A2[7]} ${A2[8]} ${A2[9]}\nb ${B2[0]} ${B2[1]} ${B2[2]} ${B2[3]} ${B2[4]} ${B2[5]} ${B2[6]} ${B2[7]} ${B2[8]} ${B2[9]}\nc ${C2[0]} ${C2[1]} ${C2[2]} ${C2[3]} ${C2[4]} ${C2[5]} ${C2[6]} ${C2[7]} ${C2[8]} ${C2[9]}\nd ${D2[0]} ${D2[1]} ${D2[2]} ${D2[3]} ${D2[4]} ${D2[5]} ${D2[6]} ${D2[7]} ${D2[8]} ${D2[9]}\ne ${E2[0]} ${E2[1]} ${E2[2]} ${E2[3]} ${E2[4]} ${E2[5]} ${E2[6]} ${E2[7]} ${E2[8]} ${E2[9]}\nf ${F2[0]} ${F2[1]} ${F2[2]} ${F2[3]} ${F2[4]} ${F2[5]} ${F2[6]} ${F2[7]} ${F2[8]} ${F2[9]}\ng ${G2[0]} ${G2[1]} ${G2[2]} ${G2[3]} ${G2[4]} ${G2[5]} ${G2[6]} ${G2[7]} ${G2[8]} ${G2[9]}\n`)
    
            } else {
    
              msg.channel.send("You cant place that ship there!")
    
            }
            
          } else if (temp + 5 < 10) {
    
          if(C2[temp] == "x" && C2[temp + 1] == "x" && C2[temp + 2] == "x" && C2[temp + 3] == "x" && C2[temp + 4] == "x" && C2[temp + 5] == "x" && C2[temp - 1] == "x" && D2[temp] == "x" && D2[temp + 1] == "x" && D2[temp + 2] == "x" && D2[temp + 3] == "x" && D2[temp + 4] == "x" && D2[temp - 1] == "x" && D2[temp +5] == "x" && E2[temp] == "x" && E2[temp + 1] == "x" && E2[temp + 2] == "x" && E2[temp + 3] == "x" && E2[temp + 4] == "x" && E2[temp - 1] == "x" && E2[temp + 5] == "x") {
    
            D2[temp] = "p";
            D2[temp + 1] = "p"; 
            D2[temp + 2] = "p"; 
            D2[temp + 3] = "p";
            D2[temp + 4] = "p";
    
            AllShips2[0] -= 1;
    
            Embeds.error(ChannelFP2, `/ 1 2 3 4 5 6 7 8 9 10\na ${A2[0]} ${A2[1]} ${A2[2]} ${A2[3]} ${A2[4]} ${A2[5]} ${A2[6]} ${A2[7]} ${A2[8]} ${A2[9]}\nb ${B2[0]} ${B2[1]} ${B2[2]} ${B2[3]} ${B2[4]} ${B2[5]} ${B2[6]} ${B2[7]} ${B2[8]} ${B2[9]}\nc ${C2[0]} ${C2[1]} ${C2[2]} ${C2[3]} ${C2[4]} ${C2[5]} ${C2[6]} ${C2[7]} ${C2[8]} ${C2[9]}\nd ${D2[0]} ${D2[1]} ${D2[2]} ${D2[3]} ${D2[4]} ${D2[5]} ${D2[6]} ${D2[7]} ${D2[8]} ${D2[9]}\ne ${E2[0]} ${E2[1]} ${E2[2]} ${E2[3]} ${E2[4]} ${E2[5]} ${E2[6]} ${E2[7]} ${E2[8]} ${E2[9]}\nf ${F2[0]} ${F2[1]} ${F2[2]} ${F2[3]} ${F2[4]} ${F2[5]} ${F2[6]} ${F2[7]} ${F2[8]} ${F2[9]}\ng ${G2[0]} ${G2[1]} ${G2[2]} ${G2[3]} ${G2[4]} ${G2[5]} ${G2[6]} ${G2[7]} ${G2[8]} ${G2[9]}\n`)
    
          } else {
    
            msg.channel.send("You cant place that ship there!")
    
          }
    
        }
    
        }
    
      } else if(args[2].toString() == "C" && AllShips2[1] != 0) {
    
        if(args[3].toString() == "V") {
    
          if (temp > 0 && temp < 9) {
    
            if(A2[temp] == "x" && B2[temp] == "x" && A2[temp + 1] == "x" && B2[temp + 1] == "x" && C2[temp] == "x" && C2[temp + 1] == "x" && A2[temp - 1] == "x" && B2[temp - 1] == "x" && C2[temp - 1] == "x" && D2[temp] == "x" && D2[temp + 1] == "x" && D2[temp - 1] == "x" && E2[temp] == "x" && E2[temp - 1] == "x" && E2[temp + 1] == "x") {
    
              A2[temp] = "p";
              B2[temp] = "p";
              C2[temp] = "p"; 
              D2[temp] = "p";
    
              AllShips2[1] -= 1;
    
              Embeds.error(ChannelFP2, `/ 1 2 3 4 5 6 7 8 9 10\na ${A2[0]} ${A2[1]} ${A2[2]} ${A2[3]} ${A2[4]} ${A2[5]} ${A2[6]} ${A2[7]} ${A2[8]} ${A2[9]}\nb ${B2[0]} ${B2[1]} ${B2[2]} ${B2[3]} ${B2[4]} ${B2[5]} ${B2[6]} ${B2[7]} ${B2[8]} ${B2[9]}\nc ${C2[0]} ${C2[1]} ${C2[2]} ${C2[3]} ${C2[4]} ${C2[5]} ${C2[6]} ${C2[7]} ${C2[8]} ${C2[9]}\nd ${D2[0]} ${D2[1]} ${D2[2]} ${D2[3]} ${D2[4]} ${D2[5]} ${D2[6]} ${D2[7]} ${D2[8]} ${D2[9]}\ne ${E2[0]} ${E2[1]} ${E2[2]} ${E2[3]} ${E2[4]} ${E2[5]} ${E2[6]} ${E2[7]} ${E2[8]} ${E2[9]}\nf ${F2[0]} ${F2[1]} ${F2[2]} ${F2[3]} ${F2[4]} ${F2[5]} ${F2[6]} ${F2[7]} ${F2[8]} ${F2[9]}\ng ${G2[0]} ${G2[1]} ${G2[2]} ${G2[3]} ${G2[4]} ${G2[5]} ${G2[6]} ${G2[7]} ${G2[8]} ${G2[9]}\n`)
    
            }
    
          } else if (temp == 9) {
    
            if(A2[temp] == "x" && B2[temp] == "x" && C2[temp] == "x" && A2[temp - 1] == "x" && B2[temp - 1] == "x" && C2[temp - 1] == "x" && D2[temp] == "x" && D2[temp - 1] == "x" && E2[temp] == "x" && E2[temp - 1] == "x") {
    
              A2[temp] = "p";
              B2[temp] = "p"; 
              C2[temp] = "p";
              D2[temp] = "p";
    
              AllShips2[1] -= 1;
    
              Embeds.error(ChannelFP2, `/ 1 2 3 4 5 6 7 8 9 10\na ${A2[0]} ${A2[1]} ${A2[2]} ${A2[3]} ${A2[4]} ${A2[5]} ${A2[6]} ${A2[7]} ${A2[8]} ${A2[9]}\nb ${B2[0]} ${B2[1]} ${B2[2]} ${B2[3]} ${B2[4]} ${B2[5]} ${B2[6]} ${B2[7]} ${B2[8]} ${B2[9]}\nc ${C2[0]} ${C2[1]} ${C2[2]} ${C2[3]} ${C2[4]} ${C2[5]} ${C2[6]} ${C2[7]} ${C2[8]} ${C2[9]}\nd ${D2[0]} ${D2[1]} ${D2[2]} ${D2[3]} ${D2[4]} ${D2[5]} ${D2[6]} ${D2[7]} ${D2[8]} ${D2[9]}\ne ${E2[0]} ${E2[1]} ${E2[2]} ${E2[3]} ${E2[4]} ${E2[5]} ${E2[6]} ${E2[7]} ${E2[8]} ${E2[9]}\nf ${F2[0]} ${F2[1]} ${F2[2]} ${F2[3]} ${F2[4]} ${F2[5]} ${F2[6]} ${F2[7]} ${F2[8]} ${F2[9]}\ng ${G2[0]} ${G2[1]} ${G2[2]} ${G2[3]} ${G2[4]} ${G2[5]} ${G2[6]} ${G2[7]} ${G2[8]} ${G2[9]}\n`)
    
            }
    
          } else {
    
            msg.channel.send("You cant place that ship there!")
    
          }
    
        } else if (args[3].toString() == "H") {
    
          if(temp + 4 == 10) {
    
            if(C2[temp] == "x" && C2[temp + 1] == "x" && C2[temp + 2] == "x" && C2[temp + 3] == "x" && C2[temp - 1] == "x" && D2[temp] == "x" && D2[temp + 1] == "x" && D2[temp + 2] == "x" && D2[temp + 3] == "x" && D2[temp - 1] == "x" && E2[temp] == "x" && E2[temp + 1] == "x" && E2[temp + 2] == "x" && E2[temp + 3] == "x" && E2[temp - 1] == "x") {
    
              D2[temp] = "p";
              D2[temp + 1] = "p"; 
              D2[temp + 2] = "p"; 
              D2[temp + 3] = "p";
    
              AllShips2[1] -= 1;
    
              Embeds.error(ChannelFP2, `/ 1 2 3 4 5 6 7 8 9 10\na ${A2[0]} ${A2[1]} ${A2[2]} ${A2[3]} ${A2[4]} ${A2[5]} ${A2[6]} ${A2[7]} ${A2[8]} ${A2[9]}\nb ${B2[0]} ${B2[1]} ${B2[2]} ${B2[3]} ${B2[4]} ${B2[5]} ${B2[6]} ${B2[7]} ${B2[8]} ${B2[9]}\nc ${C2[0]} ${C2[1]} ${C2[2]} ${C2[3]} ${C2[4]} ${C2[5]} ${C2[6]} ${C2[7]} ${C2[8]} ${C2[9]}\nd ${D2[0]} ${D2[1]} ${D2[2]} ${D2[3]} ${D2[4]} ${D2[5]} ${D2[6]} ${D2[7]} ${D2[8]} ${D2[9]}\ne ${E2[0]} ${E2[1]} ${E2[2]} ${E2[3]} ${E2[4]} ${E2[5]} ${E2[6]} ${E2[7]} ${E2[8]} ${E2[9]}\nf ${F2[0]} ${F2[1]} ${F2[2]} ${F2[3]} ${F2[4]} ${F2[5]} ${F2[6]} ${F2[7]} ${F2[8]} ${F2[9]}\ng ${G2[0]} ${G2[1]} ${G2[2]} ${G2[3]} ${G2[4]} ${G2[5]} ${G2[6]} ${G2[7]} ${G2[8]} ${G2[9]}\n`)
    
            } else {
    
              msg.channel.send("You cant place that ship there!")
    
            }
    
          } else if (temp + 4 < 10) {
    
            if(C2[temp] == "x" && C2[temp + 1] == "x" && C2[temp + 2] == "x" && C2[temp + 3] == "x" && C2[temp + 4] == "x" && C2[temp - 1] == "x" && D2[temp] == "x" && D2[temp + 1] == "x" && D2[temp + 2] == "x" && D2[temp + 3] == "x" && D2[temp + 4] == "x" && D2[temp - 1] == "x" && E2[temp] == "x" && E2[temp + 1] == "x" && E2[temp + 2] == "x" && E2[temp + 3] == "x" && E2[temp + 4] == "x" && E2[temp - 1] == "x") {
    
            D2[temp] = "p";
            D2[temp + 1] = "p"; 
            D2[temp + 2] = "p"; 
            D2[temp + 3] = "p"
    
            AllShips2[1] -= 1;
    
            Embeds.error(ChannelFP2, `/ 1 2 3 4 5 6 7 8 9 10\na ${A2[0]} ${A2[1]} ${A2[2]} ${A2[3]} ${A2[4]} ${A2[5]} ${A2[6]} ${A2[7]} ${A2[8]} ${A2[9]}\nb ${B2[0]} ${B2[1]} ${B2[2]} ${B2[3]} ${B2[4]} ${B2[5]} ${B2[6]} ${B2[7]} ${B2[8]} ${B2[9]}\nc ${C2[0]} ${C2[1]} ${C2[2]} ${C2[3]} ${C2[4]} ${C2[5]} ${C2[6]} ${C2[7]} ${C2[8]} ${C2[9]}\nd ${D2[0]} ${D2[1]} ${D2[2]} ${D2[3]} ${D2[4]} ${D2[5]} ${D2[6]} ${D2[7]} ${D2[8]} ${D2[9]}\ne ${E2[0]} ${E2[1]} ${E2[2]} ${E2[3]} ${E2[4]} ${E2[5]} ${E2[6]} ${E2[7]} ${E2[8]} ${E2[9]}\nf ${F2[0]} ${F2[1]} ${F2[2]} ${F2[3]} ${F2[4]} ${F2[5]} ${F2[6]} ${F2[7]} ${F2[8]} ${F2[9]}\ng ${G2[0]} ${G2[1]} ${G2[2]} ${G2[3]} ${G2[4]} ${G2[5]} ${G2[6]} ${G2[7]} ${G2[8]} ${G2[9]}\n`)
    
          } else {
    
            msg.channel.send("You cant place that ship there!")
    
          }
    
        }
    
        }
    
      } else if(args[2].toString() == "F" && AllShips2[2] != 0) {
    
        if(args[3].toString() == "V") {
    
          if (temp > 0 && temp < 9) {
    
            if(A2[temp] == "x" && B2[temp] == "x" && A2[temp + 1] == "x" && B2[temp + 1] == "x" && C2[temp] == "x" && C2[temp + 1] == "x" && A2[temp - 1] == "x" && B2[temp - 1] == "x" && C2[temp - 1] == "x" && D2[temp] == "x" && D2[temp + 1] == "x" && D2[temp - 1] == "x" && E2[temp] == "x" && E2[temp - 1] == "x" && E2[temp + 1] == "x") {
    
              B2[temp] = "p";
              C2[temp] = "p";
              D2[temp] = "p"; 
    
              AllShips2[2] -= 1;
    
              Embeds.error(ChannelFP2, `/ 1 2 3 4 5 6 7 8 9 10\na ${A2[0]} ${A2[1]} ${A2[2]} ${A2[3]} ${A2[4]} ${A2[5]} ${A2[6]} ${A2[7]} ${A2[8]} ${A2[9]}\nb ${B2[0]} ${B2[1]} ${B2[2]} ${B2[3]} ${B2[4]} ${B2[5]} ${B2[6]} ${B2[7]} ${B2[8]} ${B2[9]}\nc ${C2[0]} ${C2[1]} ${C2[2]} ${C2[3]} ${C2[4]} ${C2[5]} ${C2[6]} ${C2[7]} ${C2[8]} ${C2[9]}\nd ${D2[0]} ${D2[1]} ${D2[2]} ${D2[3]} ${D2[4]} ${D2[5]} ${D2[6]} ${D2[7]} ${D2[8]} ${D2[9]}\ne ${E2[0]} ${E2[1]} ${E2[2]} ${E2[3]} ${E2[4]} ${E2[5]} ${E2[6]} ${E2[7]} ${E2[8]} ${E2[9]}\nf ${F2[0]} ${F2[1]} ${F2[2]} ${F2[3]} ${F2[4]} ${F2[5]} ${F2[6]} ${F2[7]} ${F2[8]} ${F2[9]}\ng ${G2[0]} ${G2[1]} ${G2[2]} ${G2[3]} ${G2[4]} ${G2[5]} ${G2[6]} ${G2[7]} ${G2[8]} ${G2[9]}\n`)
    
            }
    
          } else if (temp == 9) {
    
            if(A2[temp] == "x" && B2[temp] == "x" && C2[temp] == "x" && A2[temp - 1] == "x" && B2[temp - 1] == "x" && C2[temp - 1] == "x" && D2[temp] == "x" && D2[temp - 1] == "x" && E2[temp] == "x" && E2[temp - 1] == "x") {
    
              B2[temp] = "p";
              C2[temp] = "p"; 
              D2[temp] = "p";
    
              AllShips2[2] -= 1;
    
              Embeds.error(ChannelFP2, `/ 1 2 3 4 5 6 7 8 9 10\na ${A2[0]} ${A2[1]} ${A2[2]} ${A2[3]} ${A2[4]} ${A2[5]} ${A2[6]} ${A2[7]} ${A2[8]} ${A2[9]}\nb ${B2[0]} ${B2[1]} ${B2[2]} ${B2[3]} ${B2[4]} ${B2[5]} ${B2[6]} ${B2[7]} ${B2[8]} ${B2[9]}\nc ${C2[0]} ${C2[1]} ${C2[2]} ${C2[3]} ${C2[4]} ${C2[5]} ${C2[6]} ${C2[7]} ${C2[8]} ${C2[9]}\nd ${D2[0]} ${D2[1]} ${D2[2]} ${D2[3]} ${D2[4]} ${D2[5]} ${D2[6]} ${D2[7]} ${D2[8]} ${D2[9]}\ne ${E2[0]} ${E2[1]} ${E2[2]} ${E2[3]} ${E2[4]} ${E2[5]} ${E2[6]} ${E2[7]} ${E2[8]} ${E2[9]}\nf ${F2[0]} ${F2[1]} ${F2[2]} ${F2[3]} ${F2[4]} ${F2[5]} ${F2[6]} ${F2[7]} ${F2[8]} ${F2[9]}\ng ${G2[0]} ${G2[1]} ${G2[2]} ${G2[3]} ${G2[4]} ${G2[5]} ${G2[6]} ${G2[7]} ${G2[8]} ${G2[9]}\n`)
    
            }
    
          } else {
    
            msg.channel.send("You cant place that ship there!")
    
          }
    
        } else if (args[3].toString() == "H") {
    
          if(temp + 3 == 10) {
    
            if(C2[temp] == "x" && C2[temp + 1] == "x" && C2[temp + 2] == "x" && C2[temp - 1] == "x" && D2[temp] == "x" && D2[temp + 1] == "x" && D2[temp + 2] == "x" && D2[temp - 1] == "x" && E2[temp] == "x" && E2[temp + 1] == "x" && E2[temp + 2] == "x" && E2[temp - 1] == "x") {
    
              D2[temp] = "p";
              D2[temp + 1] = "p"; 
              D2[temp + 2] = "p"; 
    
              AllShips2[2] -= 1;
    
              Embeds.error(ChannelFP2, `/ 1 2 3 4 5 6 7 8 9 10\na ${A2[0]} ${A2[1]} ${A2[2]} ${A2[3]} ${A2[4]} ${A2[5]} ${A2[6]} ${A2[7]} ${A2[8]} ${A2[9]}\nb ${B2[0]} ${B2[1]} ${B2[2]} ${B2[3]} ${B2[4]} ${B2[5]} ${B2[6]} ${B2[7]} ${B2[8]} ${B2[9]}\nc ${C2[0]} ${C2[1]} ${C2[2]} ${C2[3]} ${C2[4]} ${C2[5]} ${C2[6]} ${C2[7]} ${C2[8]} ${C2[9]}\nd ${D2[0]} ${D2[1]} ${D2[2]} ${D2[3]} ${D2[4]} ${D2[5]} ${D2[6]} ${D2[7]} ${D2[8]} ${D2[9]}\ne ${E2[0]} ${E2[1]} ${E2[2]} ${E2[3]} ${E2[4]} ${E2[5]} ${E2[6]} ${E2[7]} ${E2[8]} ${E2[9]}\nf ${F2[0]} ${F2[1]} ${F2[2]} ${F2[3]} ${F2[4]} ${F2[5]} ${F2[6]} ${F2[7]} ${F2[8]} ${F2[9]}\ng ${G2[0]} ${G2[1]} ${G2[2]} ${G2[3]} ${G2[4]} ${G2[5]} ${G2[6]} ${G2[7]} ${G2[8]} ${G2[9]}\n`)
    
            } else {
    
              msg.channel.send("You cant place that ship there!")
    
            }
    
          } else if (temp + 3 < 10) {
    
            if(C2[temp] == "x" && C2[temp + 1] == "x" && C2[temp + 2] == "x" && C2[temp + 3] == "x" && C2[temp - 1] == "x" && D2[temp] == "x" && D2[temp + 1] == "x" && D2[temp + 2] == "x" && D2[temp + 3] == "x" && D2[temp - 1] == "x" && E2[temp] == "x" && E2[temp + 1] == "x" && E2[temp + 2] == "x" && E2[temp + 3] == "x" && E2[temp - 1] == "x") {
    
            D2[temp] = "p";
            D2[temp + 1] = "p"; 
            D2[temp + 2] = "p"; 
    
            AllShips2[2] -= 1;
    
            Embeds.error(ChannelFP2, `/ 1 2 3 4 5 6 7 8 9 10\na ${A2[0]} ${A2[1]} ${A2[2]} ${A2[3]} ${A2[4]} ${A2[5]} ${A2[6]} ${A2[7]} ${A2[8]} ${A2[9]}\nb ${B2[0]} ${B2[1]} ${B2[2]} ${B2[3]} ${B2[4]} ${B2[5]} ${B2[6]} ${B2[7]} ${B2[8]} ${B2[9]}\nc ${C2[0]} ${C2[1]} ${C2[2]} ${C2[3]} ${C2[4]} ${C2[5]} ${C2[6]} ${C2[7]} ${C2[8]} ${C2[9]}\nd ${D2[0]} ${D2[1]} ${D2[2]} ${D2[3]} ${D2[4]} ${D2[5]} ${D2[6]} ${D2[7]} ${D2[8]} ${D2[9]}\ne ${E2[0]} ${E2[1]} ${E2[2]} ${E2[3]} ${E2[4]} ${E2[5]} ${E2[6]} ${E2[7]} ${E2[8]} ${E2[9]}\nf ${F2[0]} ${F2[1]} ${F2[2]} ${F2[3]} ${F2[4]} ${F2[5]} ${F2[6]} ${F2[7]} ${F2[8]} ${F2[9]}\ng ${G2[0]} ${G2[1]} ${G2[2]} ${G2[3]} ${G2[4]} ${G2[5]} ${G2[6]} ${G2[7]} ${G2[8]} ${G2[9]}\n`)
    
          } else {
    
            msg.channel.send("You cant place that ship there!")
    
          }
    
        }
    
        }
    
      } else if(args[2].toString() == "M" && AllShips2[3] != 0) {
    
        if(args[3].toString() == "V") {
    
          if (temp > 0 && temp < 9) {
    
            if(B2[temp] == "x" && B2[temp + 1] == "x" && C2[temp] == "x" && C2[temp + 1] == "x" && B2[temp - 1] == "x" && C2[temp - 1] == "x" && D2[temp] == "x" && D2[temp + 1] == "x" && D2[temp - 1] == "x" && E2[temp] == "x" && E2[temp - 1] == "x" && E2[temp + 1] == "x") {
    
              D2[temp] = "p";
              C2[temp] = "p"; 
    
              AllShips2[3] -= 1;
    
              Embeds.error(ChannelFP2, `/ 1 2 3 4 5 6 7 8 9 10\na ${A2[0]} ${A2[1]} ${A2[2]} ${A2[3]} ${A2[4]} ${A2[5]} ${A2[6]} ${A2[7]} ${A2[8]} ${A2[9]}\nb ${B2[0]} ${B2[1]} ${B2[2]} ${B2[3]} ${B2[4]} ${B2[5]} ${B2[6]} ${B2[7]} ${B2[8]} ${B2[9]}\nc ${C2[0]} ${C2[1]} ${C2[2]} ${C2[3]} ${C2[4]} ${C2[5]} ${C2[6]} ${C2[7]} ${C2[8]} ${C2[9]}\nd ${D2[0]} ${D2[1]} ${D2[2]} ${D2[3]} ${D2[4]} ${D2[5]} ${D2[6]} ${D2[7]} ${D2[8]} ${D2[9]}\ne ${E2[0]} ${E2[1]} ${E2[2]} ${E2[3]} ${E2[4]} ${E2[5]} ${E2[6]} ${E2[7]} ${E2[8]} ${E2[9]}\nf ${F2[0]} ${F2[1]} ${F2[2]} ${F2[3]} ${F2[4]} ${F2[5]} ${F2[6]} ${F2[7]} ${F2[8]} ${F2[9]}\ng ${G2[0]} ${G2[1]} ${G2[2]} ${G2[3]} ${G2[4]} ${G2[5]} ${G2[6]} ${G2[7]} ${G2[8]} ${G2[9]}\n`)
    
            }
    
          } else if (temp == 9) {
    
            if(B2[temp] == "x" && B2[temp - 1] == "x" && C2[temp] == "x" && C2[temp - 1] == "x" && D2[temp] == "x" && D2[temp - 1] == "x" && E2[temp] == "x" && E2[temp - 1] == "x") {
    
              D2[temp] = "p";
              C2[temp] = "p"; 
    
              AllShips2[3] -= 1;
    
              Embeds.error(ChannelFP2, `/ 1 2 3 4 5 6 7 8 9 10\na ${A2[0]} ${A2[1]} ${A2[2]} ${A2[3]} ${A2[4]} ${A2[5]} ${A2[6]} ${A2[7]} ${A2[8]} ${A2[9]}\nb ${B2[0]} ${B2[1]} ${B2[2]} ${B2[3]} ${B2[4]} ${B2[5]} ${B2[6]} ${B2[7]} ${B2[8]} ${B2[9]}\nc ${C2[0]} ${C2[1]} ${C2[2]} ${C2[3]} ${C2[4]} ${C2[5]} ${C2[6]} ${C2[7]} ${C2[8]} ${C2[9]}\nd ${D2[0]} ${D2[1]} ${D2[2]} ${D2[3]} ${D2[4]} ${D2[5]} ${D2[6]} ${D2[7]} ${D2[8]} ${D2[9]}\ne ${E2[0]} ${E2[1]} ${E2[2]} ${E2[3]} ${E2[4]} ${E2[5]} ${E2[6]} ${E2[7]} ${E2[8]} ${E2[9]}\nf ${F2[0]} ${F2[1]} ${F2[2]} ${F2[3]} ${F2[4]} ${F2[5]} ${F2[6]} ${F2[7]} ${F2[8]} ${F2[9]}\ng ${G2[0]} ${G2[1]} ${G2[2]} ${G2[3]} ${G2[4]} ${G2[5]} ${G2[6]} ${G2[7]} ${G2[8]} ${G2[9]}\n`)
    
            }
    
          } else {
    
            msg.channel.send("You cant place that ship there!")
    
          }
    
        } else if (args[3].toString() == "H") {
    
          if(temp + 2 == 10) {
    
            if(C2[temp] == "x" && C2[temp + 1] == "x" && C2[temp - 1] == "x" && D2[temp] == "x" && D2[temp + 1] == "x" && D2[temp - 1] == "x" && E2[temp] == "x" && E2[temp + 1] == "x" && E2[temp - 1] == "x") {
    
              D2[temp] = "p";
              D2[temp + 1] = "p"; 
    
              AllShips2[3] -= 1;
    
              Embeds.error(ChannelFP2, `/ 1 2 3 4 5 6 7 8 9 10\na ${A2[0]} ${A2[1]} ${A2[2]} ${A2[3]} ${A2[4]} ${A2[5]} ${A2[6]} ${A2[7]} ${A2[8]} ${A2[9]}\nb ${B2[0]} ${B2[1]} ${B2[2]} ${B2[3]} ${B2[4]} ${B2[5]} ${B2[6]} ${B2[7]} ${B2[8]} ${B2[9]}\nc ${C2[0]} ${C2[1]} ${C2[2]} ${C2[3]} ${C2[4]} ${C2[5]} ${C2[6]} ${C2[7]} ${C2[8]} ${C2[9]}\nd ${D2[0]} ${D2[1]} ${D2[2]} ${D2[3]} ${D2[4]} ${D2[5]} ${D2[6]} ${D2[7]} ${D2[8]} ${D2[9]}\ne ${E2[0]} ${E2[1]} ${E2[2]} ${E2[3]} ${E2[4]} ${E2[5]} ${E2[6]} ${E2[7]} ${E2[8]} ${E2[9]}\nf ${F2[0]} ${F2[1]} ${F2[2]} ${F2[3]} ${F2[4]} ${F2[5]} ${F2[6]} ${F2[7]} ${F2[8]} ${F2[9]}\ng ${G2[0]} ${G2[1]} ${G2[2]} ${G2[3]} ${G2[4]} ${G2[5]} ${G2[6]} ${G2[7]} ${G2[8]} ${G2[9]}\n`)
    
            } else {
    
              msg.channel.send("You cant place that ship there!")
    
            }
    
          } else if (temp + 2 < 10) {
    
          if(C2[temp] == "x" && C2[temp + 1] == "x" && C2[temp + 2] == "x" && C2[temp - 1] == "x" && D2[temp] == "x" && D2[temp + 1] == "x" && D2[temp + 2] == "x" && D2[temp - 1] == "x" && E2[temp] == "x" && E2[temp + 1] == "x" && E2[temp + 2] == "x" && E2[temp - 1] == "x") {
    
            D2[temp] = "p";
            D2[temp + 1] = "p"; 
    
            AllShips2[3] -= 1;
    
            Embeds.error(ChannelFP2, `/ 1 2 3 4 5 6 7 8 9 10\na ${A2[0]} ${A2[1]} ${A2[2]} ${A2[3]} ${A2[4]} ${A2[5]} ${A2[6]} ${A2[7]} ${A2[8]} ${A2[9]}\nb ${B2[0]} ${B2[1]} ${B2[2]} ${B2[3]} ${B2[4]} ${B2[5]} ${B2[6]} ${B2[7]} ${B2[8]} ${B2[9]}\nc ${C2[0]} ${C2[1]} ${C2[2]} ${C2[3]} ${C2[4]} ${C2[5]} ${C2[6]} ${C2[7]} ${C2[8]} ${C2[9]}\nd ${D2[0]} ${D2[1]} ${D2[2]} ${D2[3]} ${D2[4]} ${D2[5]} ${D2[6]} ${D2[7]} ${D2[8]} ${D2[9]}\ne ${E2[0]} ${E2[1]} ${E2[2]} ${E2[3]} ${E2[4]} ${E2[5]} ${E2[6]} ${E2[7]} ${E2[8]} ${E2[9]}\nf ${F2[0]} ${F2[1]} ${F2[2]} ${F2[3]} ${F2[4]} ${F2[5]} ${F2[6]} ${F2[7]} ${F2[8]} ${F2[9]}\ng ${G2[0]} ${G2[1]} ${G2[2]} ${G2[3]} ${G2[4]} ${G2[5]} ${G2[6]} ${G2[7]} ${G2[8]} ${G2[9]}\n`)
    
          } else {
    
            msg.channel.send("You cant place that ship there!")
    
          }
    
        }
    
        }
    
      } else {
    
        msg.channel.send("You used all ships of this kind")
    
      }
    
    } else if (temp == 0) {
    
      if(args[2].toString() == "B" && AllShips2[0] != 0) {
    
        if(args[3].toString() == "V") {
    
          msg.channel.send("Thats not possible!")
    
        } else if (args[3].toString() == "H") {
    
          if(C2[temp] == "x" && C2[temp + 1] == "x" && C2[temp + 2] == "x" && C2[temp + 3] == "x" && C2[temp + 4] == "x" && C2[temp + 5] == "x" && D2[temp] == "x" && D2[temp + 1] == "x" && D2[temp + 2] == "x" && D2[temp + 3] == "x" && D2[temp + 4] == "x" && D2[temp +5] == "x" && E2[temp] == "x" && E2[temp + 1] == "x" && E2[temp + 2] == "x" && E2[temp + 3] == "x" && E2[temp + 4] == "x" && E2[temp + 5] == "x") {
    
            D2[temp] = "p";
            D2[temp + 1] = "p"; 
            D2[temp + 2] = "p"; 
            D2[temp + 3] = "p"
            D2[temp + 4] = "p";
    
            AllShips2[0] -= 1;
    
            Embeds.error(ChannelFP2, `/ 1 2 3 4 5 6 7 8 9 10\na ${A2[0]} ${A2[1]} ${A2[2]} ${A2[3]} ${A2[4]} ${A2[5]} ${A2[6]} ${A2[7]} ${A2[8]} ${A2[9]}\nb ${B2[0]} ${B2[1]} ${B2[2]} ${B2[3]} ${B2[4]} ${B2[5]} ${B2[6]} ${B2[7]} ${B2[8]} ${B2[9]}\nc ${C2[0]} ${C2[1]} ${C2[2]} ${C2[3]} ${C2[4]} ${C2[5]} ${C2[6]} ${C2[7]} ${C2[8]} ${C2[9]}\nd ${D2[0]} ${D2[1]} ${D2[2]} ${D2[3]} ${D2[4]} ${D2[5]} ${D2[6]} ${D2[7]} ${D2[8]} ${D2[9]}\ne ${E2[0]} ${E2[1]} ${E2[2]} ${E2[3]} ${E2[4]} ${E2[5]} ${E2[6]} ${E2[7]} ${E2[8]} ${E2[9]}\nf ${F2[0]} ${F2[1]} ${F2[2]} ${F2[3]} ${F2[4]} ${F2[5]} ${F2[6]} ${F2[7]} ${F2[8]} ${F2[9]}\ng ${G2[0]} ${G2[1]} ${G2[2]} ${G2[3]} ${G2[4]} ${G2[5]} ${G2[6]} ${G2[7]} ${G2[8]} ${G2[9]}\n`)
    
          } else {
    
            msg.channel.send("You cant place that ship there!")
    
          }
    
        }
    
      } else if(args[2].toString() == "C" && AllShips2[1] != 0) {
    
        if(args[3].toString() == "V") {
    
          if(A2[temp] == "x" && B2[temp] == "x" && A2[temp + 1] == "x" && B2[temp + 1] == "x" && C2[temp] == "x" && C2[temp + 1] == "x" && D2[temp] == "x" && D2[temp + 1] == "x" && E2[temp] == "x" && E2[temp + 1] == "x") {
    
            A2[temp] = "p";
            B2[temp] = "p";
            C2[temp] = "p";
            D2[temp] = "p"; 
    
            AllShips2[1] -= 1;
    
            Embeds.error(ChannelFP2, `/ 1 2 3 4 5 6 7 8 9 10\na ${A2[0]} ${A2[1]} ${A2[2]} ${A2[3]} ${A2[4]} ${A2[5]} ${A2[6]} ${A2[7]} ${A2[8]} ${A2[9]}\nb ${B2[0]} ${B2[1]} ${B2[2]} ${B2[3]} ${B2[4]} ${B2[5]} ${B2[6]} ${B2[7]} ${B2[8]} ${B2[9]}\nc ${C2[0]} ${C2[1]} ${C2[2]} ${C2[3]} ${C2[4]} ${C2[5]} ${C2[6]} ${C2[7]} ${C2[8]} ${C2[9]}\nd ${D2[0]} ${D2[1]} ${D2[2]} ${D2[3]} ${D2[4]} ${D2[5]} ${D2[6]} ${D2[7]} ${D2[8]} ${D2[9]}\ne ${E2[0]} ${E2[1]} ${E2[2]} ${E2[3]} ${E2[4]} ${E2[5]} ${E2[6]} ${E2[7]} ${E2[8]} ${E2[9]}\nf ${F2[0]} ${F2[1]} ${F2[2]} ${F2[3]} ${F2[4]} ${F2[5]} ${F2[6]} ${F2[7]} ${F2[8]} ${F2[9]}\ng ${G2[0]} ${G2[1]} ${G2[2]} ${G2[3]} ${G2[4]} ${G2[5]} ${G2[6]} ${G2[7]} ${G2[8]} ${G2[9]}\n`)
    
          } else {
    
            msg.channel.send("You cant place that ship there!")
    
          }
    
        } else if (args[3].toString() == "H") {
    
          if(C2[temp] == "x" && C2[temp + 1] == "x" && C2[temp + 2] == "x" && C2[temp + 3] == "x" && C2[temp + 4] == "x" && D2[temp] == "x" && D2[temp + 1] == "x" && D2[temp + 2] == "x" && D2[temp + 3] == "x" && D2[temp + 4] == "x" && E2[temp] == "x" && E2[temp + 1] == "x" && E2[temp + 2] == "x" && E2[temp + 3] == "x" && E2[temp + 4] == "x") {
    
            D2[temp] = "p";
            D2[temp + 1] = "p"; 
            D2[temp + 2] = "p"; 
            D2[temp + 3] = "p"
    
            AllShips2[1] -= 1;
    
            Embeds.error(ChannelFP2, `/ 1 2 3 4 5 6 7 8 9 10\na ${A2[0]} ${A2[1]} ${A2[2]} ${A2[3]} ${A2[4]} ${A2[5]} ${A2[6]} ${A2[7]} ${A2[8]} ${A2[9]}\nb ${B2[0]} ${B2[1]} ${B2[2]} ${B2[3]} ${B2[4]} ${B2[5]} ${B2[6]} ${B2[7]} ${B2[8]} ${B2[9]}\nc ${C2[0]} ${C2[1]} ${C2[2]} ${C2[3]} ${C2[4]} ${C2[5]} ${C2[6]} ${C2[7]} ${C2[8]} ${C2[9]}\nd ${D2[0]} ${D2[1]} ${D2[2]} ${D2[3]} ${D2[4]} ${D2[5]} ${D2[6]} ${D2[7]} ${D2[8]} ${D2[9]}\ne ${E2[0]} ${E2[1]} ${E2[2]} ${E2[3]} ${E2[4]} ${E2[5]} ${E2[6]} ${E2[7]} ${E2[8]} ${E2[9]}\nf ${F2[0]} ${F2[1]} ${F2[2]} ${F2[3]} ${F2[4]} ${F2[5]} ${F2[6]} ${F2[7]} ${F2[8]} ${F2[9]}\ng ${G2[0]} ${G2[1]} ${G2[2]} ${G2[3]} ${G2[4]} ${G2[5]} ${G2[6]} ${G2[7]} ${G2[8]} ${G2[9]}\n`)
    
          } else {
    
            msg.channel.send("You cant place that ship there!")
    
          }
    
        }
    
      } else if(args[2].toString() == "F" && AllShips2[2] != 0) {
    
        if(args[3].toString() == "V") {
    
          if(A2[temp] == "x" && B2[temp] == "x" && A2[temp + 1] == "x" && B2[temp + 1] == "x" && C2[temp] == "x" && C2[temp + 1] == "x" && D2[temp] == "x" && D2[temp + 1] == "x" && E2[temp] == "x" && E2[temp + 1] == "x") {
    
            B2[temp] = "p";
            C2[temp] = "p";
            D2[temp] = "p"; 
    
            AllShips2[2] -= 1;
    
            Embeds.error(ChannelFP2, `/ 1 2 3 4 5 6 7 8 9 10\na ${A2[0]} ${A2[1]} ${A2[2]} ${A2[3]} ${A2[4]} ${A2[5]} ${A2[6]} ${A2[7]} ${A2[8]} ${A2[9]}\nb ${B2[0]} ${B2[1]} ${B2[2]} ${B2[3]} ${B2[4]} ${B2[5]} ${B2[6]} ${B2[7]} ${B2[8]} ${B2[9]}\nc ${C2[0]} ${C2[1]} ${C2[2]} ${C2[3]} ${C2[4]} ${C2[5]} ${C2[6]} ${C2[7]} ${C2[8]} ${C2[9]}\nd ${D2[0]} ${D2[1]} ${D2[2]} ${D2[3]} ${D2[4]} ${D2[5]} ${D2[6]} ${D2[7]} ${D2[8]} ${D2[9]}\ne ${E2[0]} ${E2[1]} ${E2[2]} ${E2[3]} ${E2[4]} ${E2[5]} ${E2[6]} ${E2[7]} ${E2[8]} ${E2[9]}\nf ${F2[0]} ${F2[1]} ${F2[2]} ${F2[3]} ${F2[4]} ${F2[5]} ${F2[6]} ${F2[7]} ${F2[8]} ${F2[9]}\ng ${G2[0]} ${G2[1]} ${G2[2]} ${G2[3]} ${G2[4]} ${G2[5]} ${G2[6]} ${G2[7]} ${G2[8]} ${G2[9]}\n`)
    
          } else {
    
            msg.channel.send("You cant place that ship there!")
    
          }
    
        } else if (args[3].toString() == "H") {
    
          if(C2[temp] == "x" && C2[temp + 1] == "x" && C2[temp + 2] == "x" && C2[temp + 3] == "x" && D2[temp] == "x" && D2[temp + 1] == "x" && D2[temp + 2] == "x" && D2[temp + 3] == "x" && E2[temp] == "x" && E2[temp + 1] == "x" && E2[temp + 2] == "x" && E2[temp + 3] == "x") {
    
            D2[temp] = "p";
            D2[temp + 1] = "p"; 
            D2[temp + 2] = "p"; 
    
            AllShips2[2] -= 1;
    
            Embeds.error(ChannelFP2, `/ 1 2 3 4 5 6 7 8 9 10\na ${A2[0]} ${A2[1]} ${A2[2]} ${A2[3]} ${A2[4]} ${A2[5]} ${A2[6]} ${A2[7]} ${A2[8]} ${A2[9]}\nb ${B2[0]} ${B2[1]} ${B2[2]} ${B2[3]} ${B2[4]} ${B2[5]} ${B2[6]} ${B2[7]} ${B2[8]} ${B2[9]}\nc ${C2[0]} ${C2[1]} ${C2[2]} ${C2[3]} ${C2[4]} ${C2[5]} ${C2[6]} ${C2[7]} ${C2[8]} ${C2[9]}\nd ${D2[0]} ${D2[1]} ${D2[2]} ${D2[3]} ${D2[4]} ${D2[5]} ${D2[6]} ${D2[7]} ${D2[8]} ${D2[9]}\ne ${E2[0]} ${E2[1]} ${E2[2]} ${E2[3]} ${E2[4]} ${E2[5]} ${E2[6]} ${E2[7]} ${E2[8]} ${E2[9]}\nf ${F2[0]} ${F2[1]} ${F2[2]} ${F2[3]} ${F2[4]} ${F2[5]} ${F2[6]} ${F2[7]} ${F2[8]} ${F2[9]}\ng ${G2[0]} ${G2[1]} ${G2[2]} ${G2[3]} ${G2[4]} ${G2[5]} ${G2[6]} ${G2[7]} ${G2[8]} ${G2[9]}\n`)
    
          } else {
    
            msg.channel.send("You cant place that ship there!")
    
          }
    
        }
    
      } else if(args[2].toString() == "M" && AllShips2[3] != 0) {
    
        if(args[3].toString() == "V") {
    
          if(temp == 0) {
    
            if(B2[temp] == "x" && C2[temp] == "x" && B2[temp + 1] == "x" && C2[temp + 1] == "x" && D2[temp] == "x" && D2[temp + 1] == "x" && E2[temp] == "x" && E2[temp + 1] == "x") {
    
              C2[temp] = "p";
              D2[temp] = "p"; 
    
              AllShips2[3] -= 1;
    
              Embeds.error(ChannelFP2, `/ 1 2 3 4 5 6 7 8 9 10\na ${A2[0]} ${A2[1]} ${A2[2]} ${A2[3]} ${A2[4]} ${A2[5]} ${A2[6]} ${A2[7]} ${A2[8]} ${A2[9]}\nb ${B2[0]} ${B2[1]} ${B2[2]} ${B2[3]} ${B2[4]} ${B2[5]} ${B2[6]} ${B2[7]} ${B2[8]} ${B2[9]}\nc ${C2[0]} ${C2[1]} ${C2[2]} ${C2[3]} ${C2[4]} ${C2[5]} ${C2[6]} ${C2[7]} ${C2[8]} ${C2[9]}\nd ${D2[0]} ${D2[1]} ${D2[2]} ${D2[3]} ${D2[4]} ${D2[5]} ${D2[6]} ${D2[7]} ${D2[8]} ${D2[9]}\ne ${E2[0]} ${E2[1]} ${E2[2]} ${E2[3]} ${E2[4]} ${E2[5]} ${E2[6]} ${E2[7]} ${E2[8]} ${E2[9]}\nf ${F2[0]} ${F2[1]} ${F2[2]} ${F2[3]} ${F2[4]} ${F2[5]} ${F2[6]} ${F2[7]} ${F2[8]} ${F2[9]}\ng ${G2[0]} ${G2[1]} ${G2[2]} ${G2[3]} ${G2[4]} ${G2[5]} ${G2[6]} ${G2[7]} ${G2[8]} ${G2[9]}\n`)
    
            } else {
    
              msg.channel.send("You cant place that ship there!")
    
            }
    
          }
    
        } else if (args[3].toString() == "H") {
    
          if(C2[temp] == "x" && C2[temp + 1] == "x" && C2[temp + 2] == "x" && D2[temp] == "x" && D2[temp + 1] == "x" && D2[temp + 2] == "x" && E2[temp] == "x" && E2[temp + 1] == "x" && E2[temp + 2] == "x") {
    
            D2[temp] = "p";
            D2[temp + 1] = "p"; 
    
            AllShips2[3] -= 1;
    
            Embeds.error(ChannelFP2, `/ 1 2 3 4 5 6 7 8 9 10\na ${A2[0]} ${A2[1]} ${A2[2]} ${A2[3]} ${A2[4]} ${A2[5]} ${A2[6]} ${A2[7]} ${A2[8]} ${A2[9]}\nb ${B2[0]} ${B2[1]} ${B2[2]} ${B2[3]} ${B2[4]} ${B2[5]} ${B2[6]} ${B2[7]} ${B2[8]} ${B2[9]}\nc ${C2[0]} ${C2[1]} ${C2[2]} ${C2[3]} ${C2[4]} ${C2[5]} ${C2[6]} ${C2[7]} ${C2[8]} ${C2[9]}\nd ${D2[0]} ${D2[1]} ${D2[2]} ${D2[3]} ${D2[4]} ${D2[5]} ${D2[6]} ${D2[7]} ${D2[8]} ${D2[9]}\ne ${E2[0]} ${E2[1]} ${E2[2]} ${E2[3]} ${E2[4]} ${E2[5]} ${E2[6]} ${E2[7]} ${E2[8]} ${E2[9]}\nf ${F2[0]} ${F2[1]} ${F2[2]} ${F2[3]} ${F2[4]} ${F2[5]} ${F2[6]} ${F2[7]} ${F2[8]} ${F2[9]}\ng ${G2[0]} ${G2[1]} ${G2[2]} ${G2[3]} ${G2[4]} ${G2[5]} ${G2[6]} ${G2[7]} ${G2[8]} ${G2[9]}\n`)
    
          } else {
    
            msg.channel.send("You cant place that ship there!")
    
          }
    
        }
    
      } else {
    
        msg.channel.send("You used all ships of this kind")
    
      }
    
    }
    
      } else if(args[0].toString() == "E") {
    
    var temp = parseInt(args[1] - 1)
    
    if(temp > 0) {
    
      if(args[2].toString() == "B" && AllShips2[0] != 0) {
    
        if(args[3].toString() == "V") {
    
          if (temp > 0 && temp < 9) {
    
            if(A2[temp] == "x" && B2[temp] == "x" && A2[temp + 1] == "x" && B2[temp + 1] == "x" && C2[temp] == "x" && C2[temp + 1] == "x" && A2[temp - 1] == "x" && B2[temp - 1] == "x" && C2[temp - 1] == "x" && D2[temp] == "x" && D2[temp + 1] == "x" && D2[temp - 1] == "x" && E2[temp] == "x" && E2[temp - 1] == "x" && E2[temp + 1] == "x" && F2[temp] == "x" && F2[temp - 1] == "x" && F2[temp + 1] == "x") {
    
              A2[temp] = "p";
              B2[temp] = "p";
              C2[temp] = "p"; 
              D2[temp] = "p";
              E2[temp] = "p";
    
              AllShips2[0] -= 1;
    
              Embeds.error(ChannelFP2, `/ 1 2 3 4 5 6 7 8 9 10\na ${A2[0]} ${A2[1]} ${A2[2]} ${A2[3]} ${A2[4]} ${A2[5]} ${A2[6]} ${A2[7]} ${A2[8]} ${A2[9]}\nb ${B2[0]} ${B2[1]} ${B2[2]} ${B2[3]} ${B2[4]} ${B2[5]} ${B2[6]} ${B2[7]} ${B2[8]} ${B2[9]}\nc ${C2[0]} ${C2[1]} ${C2[2]} ${C2[3]} ${C2[4]} ${C2[5]} ${C2[6]} ${C2[7]} ${C2[8]} ${C2[9]}\nd ${D2[0]} ${D2[1]} ${D2[2]} ${D2[3]} ${D2[4]} ${D2[5]} ${D2[6]} ${D2[7]} ${D2[8]} ${D2[9]}\ne ${E2[0]} ${E2[1]} ${E2[2]} ${E2[3]} ${E2[4]} ${E2[5]} ${E2[6]} ${E2[7]} ${E2[8]} ${E2[9]}\nf ${F2[0]} ${F2[1]} ${F2[2]} ${F2[3]} ${F2[4]} ${F2[5]} ${F2[6]} ${F2[7]} ${F2[8]} ${F2[9]}\ng ${G2[0]} ${G2[1]} ${G2[2]} ${G2[3]} ${G2[4]} ${G2[5]} ${G2[6]} ${G2[7]} ${G2[8]} ${G2[9]}\n`)
    
            }
    
          } else if (temp == 9) {
    
            if(A2[temp] == "x" && B2[temp] == "x" && B2[temp - 1] == "x" && C2[temp] == "x" && A2[temp - 1] == "x" && B2[temp - 1] == "x" && C2[temp - 1] == "x" && D2[temp] == "x" && D2[temp - 1] == "x" && E2[temp] == "x" && E2[temp - 1] == "x" && F2[temp] == "x" && F2[temp - 1] == "x") {
    
              A2[temp] = "p";
              B2[temp] = "p"; 
              C2[temp] = "p";
              D2[temp] = "p";
              E2[temp] = "p";
    
              AllShips2[0] -= 1;
    
              Embeds.error(ChannelFP2, `/ 1 2 3 4 5 6 7 8 9 10\na ${A2[0]} ${A2[1]} ${A2[2]} ${A2[3]} ${A2[4]} ${A2[5]} ${A2[6]} ${A2[7]} ${A2[8]} ${A2[9]}\nb ${B2[0]} ${B2[1]} ${B2[2]} ${B2[3]} ${B2[4]} ${B2[5]} ${B2[6]} ${B2[7]} ${B2[8]} ${B2[9]}\nc ${C2[0]} ${C2[1]} ${C2[2]} ${C2[3]} ${C2[4]} ${C2[5]} ${C2[6]} ${C2[7]} ${C2[8]} ${C2[9]}\nd ${D2[0]} ${D2[1]} ${D2[2]} ${D2[3]} ${D2[4]} ${D2[5]} ${D2[6]} ${D2[7]} ${D2[8]} ${D2[9]}\ne ${E2[0]} ${E2[1]} ${E2[2]} ${E2[3]} ${E2[4]} ${E2[5]} ${E2[6]} ${E2[7]} ${E2[8]} ${E2[9]}\nf ${F2[0]} ${F2[1]} ${F2[2]} ${F2[3]} ${F2[4]} ${F2[5]} ${F2[6]} ${F2[7]} ${F2[8]} ${F2[9]}\ng ${G2[0]} ${G2[1]} ${G2[2]} ${G2[3]} ${G2[4]} ${G2[5]} ${G2[6]} ${G2[7]} ${G2[8]} ${G2[9]}\n`)
    
            }
    
          } else {
    
            msg.channel.send("You cant place that ship there!")
    
          }
    
        } else if (args[3].toString() == "H") {
    
          if(temp + 5 == 10) {
    
            if(D2[temp] == "x" && D2[temp + 1] == "x" && D2[temp + 2] == "x" && D2[temp + 3] == "x" && D2[temp + 4] == "x" && D2[temp - 1] == "x" && E2[temp] == "x" && E2[temp + 1] == "x" && E2[temp + 2] == "x" && E2[temp + 3] == "x" && E2[temp + 4] == "x" && E2[temp - 1] == "x" && F2[temp] == "x" && F2[temp + 1] == "x" && F2[temp + 2] == "x" && F2[temp + 3] == "x" && F2[temp + 4] == "x" && F2[temp - 1] == "x") {
    
              E2[temp] = "p";
              E2[temp + 1] = "p"; 
              E2[temp + 2] = "p"; 
              E2[temp + 3] = "p";
              E2[temp + 4] = "p";
    
              AllShips2[0] -= 1;
    
              Embeds.error(ChannelFP2, `/ 1 2 3 4 5 6 7 8 9 10\na ${A2[0]} ${A2[1]} ${A2[2]} ${A2[3]} ${A2[4]} ${A2[5]} ${A2[6]} ${A2[7]} ${A2[8]} ${A2[9]}\nb ${B2[0]} ${B2[1]} ${B2[2]} ${B2[3]} ${B2[4]} ${B2[5]} ${B2[6]} ${B2[7]} ${B2[8]} ${B2[9]}\nc ${C2[0]} ${C2[1]} ${C2[2]} ${C2[3]} ${C2[4]} ${C2[5]} ${C2[6]} ${C2[7]} ${C2[8]} ${C2[9]}\nd ${D2[0]} ${D2[1]} ${D2[2]} ${D2[3]} ${D2[4]} ${D2[5]} ${D2[6]} ${D2[7]} ${D2[8]} ${D2[9]}\ne ${E2[0]} ${E2[1]} ${E2[2]} ${E2[3]} ${E2[4]} ${E2[5]} ${E2[6]} ${E2[7]} ${E2[8]} ${E2[9]}\nf ${F2[0]} ${F2[1]} ${F2[2]} ${F2[3]} ${F2[4]} ${F2[5]} ${F2[6]} ${F2[7]} ${F2[8]} ${F2[9]}\ng ${G2[0]} ${G2[1]} ${G2[2]} ${G2[3]} ${G2[4]} ${G2[5]} ${G2[6]} ${G2[7]} ${G2[8]} ${G2[9]}\n`)
    
            } else {
    
              msg.channel.send("You cant place that ship there!")
    
            }
            
          } else if (temp + 5 < 10) {
    
          if(D2[temp] == "x" && D2[temp + 1] == "x" && D2[temp + 2] == "x" && D2[temp + 3] == "x" && D2[temp + 4] == "x" && D2[temp - 1] == "x" && E2[temp] == "x" && E2[temp + 1] == "x" && E2[temp + 2] == "x" && E2[temp + 3] == "x" && E2[temp + 4] == "x" && E2[temp - 1] == "x" && F2[temp] == "x" && F2[temp + 1] == "x" && F2[temp + 2] == "x" && F2[temp + 3] == "x" && F2[temp + 4] == "x" && F2[temp - 1] == "x" && D2[temp + 5] == "x" && E2[temp + 5] == "x" && F2[temp + 5] == "x") {
    
            E2[temp] = "p";
            E2[temp + 1] = "p"; 
            E2[temp + 2] = "p"; 
            E2[temp + 3] = "p";
            E2[temp + 4] = "p";
    
            AllShips2[0] -= 1;
    
            Embeds.error(ChannelFP2, `/ 1 2 3 4 5 6 7 8 9 10\na ${A2[0]} ${A2[1]} ${A2[2]} ${A2[3]} ${A2[4]} ${A2[5]} ${A2[6]} ${A2[7]} ${A2[8]} ${A2[9]}\nb ${B2[0]} ${B2[1]} ${B2[2]} ${B2[3]} ${B2[4]} ${B2[5]} ${B2[6]} ${B2[7]} ${B2[8]} ${B2[9]}\nc ${C2[0]} ${C2[1]} ${C2[2]} ${C2[3]} ${C2[4]} ${C2[5]} ${C2[6]} ${C2[7]} ${C2[8]} ${C2[9]}\nd ${D2[0]} ${D2[1]} ${D2[2]} ${D2[3]} ${D2[4]} ${D2[5]} ${D2[6]} ${D2[7]} ${D2[8]} ${D2[9]}\ne ${E2[0]} ${E2[1]} ${E2[2]} ${E2[3]} ${E2[4]} ${E2[5]} ${E2[6]} ${E2[7]} ${E2[8]} ${E2[9]}\nf ${F2[0]} ${F2[1]} ${F2[2]} ${F2[3]} ${F2[4]} ${F2[5]} ${F2[6]} ${F2[7]} ${F2[8]} ${F2[9]}\ng ${G2[0]} ${G2[1]} ${G2[2]} ${G2[3]} ${G2[4]} ${G2[5]} ${G2[6]} ${G2[7]} ${G2[8]} ${G2[9]}\n`)
    
          } else {
    
            msg.channel.send("You cant place that ship there!")
    
          }
    
        }
    
        }
    
      } else if(args[2].toString() == "C" && AllShips2[1] != 0) {
    
        if(args[3].toString() == "V") {
    
          if (temp > 0 && temp < 9) {
    
            if(A2[temp] == "x" && B2[temp] == "x" && A2[temp + 1] == "x" && B2[temp + 1] == "x" && C2[temp] == "x" && C2[temp + 1] == "x" && A2[temp - 1] == "x" && B2[temp - 1] == "x" && C2[temp - 1] == "x" && D2[temp] == "x" && D2[temp + 1] == "x" && D2[temp - 1] == "x" && E2[temp] == "x" && E2[temp - 1] == "x" && E2[temp + 1] == "x" && F2[temp] == "x" && F2[temp - 1] == "x" && F2[temp + 1] == "x") {
    
              B2[temp] = "p";
              C2[temp] = "p";
              D2[temp] = "p"; 
              E2[temp] = "p";
    
              AllShips2[1] -= 1;
    
              Embeds.error(ChannelFP2, `/ 1 2 3 4 5 6 7 8 9 10\na ${A2[0]} ${A2[1]} ${A2[2]} ${A2[3]} ${A2[4]} ${A2[5]} ${A2[6]} ${A2[7]} ${A2[8]} ${A2[9]}\nb ${B2[0]} ${B2[1]} ${B2[2]} ${B2[3]} ${B2[4]} ${B2[5]} ${B2[6]} ${B2[7]} ${B2[8]} ${B2[9]}\nc ${C2[0]} ${C2[1]} ${C2[2]} ${C2[3]} ${C2[4]} ${C2[5]} ${C2[6]} ${C2[7]} ${C2[8]} ${C2[9]}\nd ${D2[0]} ${D2[1]} ${D2[2]} ${D2[3]} ${D2[4]} ${D2[5]} ${D2[6]} ${D2[7]} ${D2[8]} ${D2[9]}\ne ${E2[0]} ${E2[1]} ${E2[2]} ${E2[3]} ${E2[4]} ${E2[5]} ${E2[6]} ${E2[7]} ${E2[8]} ${E2[9]}\nf ${F2[0]} ${F2[1]} ${F2[2]} ${F2[3]} ${F2[4]} ${F2[5]} ${F2[6]} ${F2[7]} ${F2[8]} ${F2[9]}\ng ${G2[0]} ${G2[1]} ${G2[2]} ${G2[3]} ${G2[4]} ${G2[5]} ${G2[6]} ${G2[7]} ${G2[8]} ${G2[9]}\n`)
    
            }
    
          } else if (temp == 9) {
    
            if(A2[temp] == "x" && B2[temp] == "x" && B2[temp - 1] == "x" && C2[temp] == "x" && A2[temp - 1] == "x" && B2[temp - 1] == "x" && C2[temp - 1] == "x" && D2[temp] == "x" && D2[temp - 1] == "x" && E2[temp] == "x" && E2[temp - 1] == "x" && F2[temp] == "x" && F2[temp - 1] == "x") {
    
              B2[temp] = "p";
              C2[temp] = "p"; 
              D2[temp] = "p";
              E2[temp] = "p";
    
              AllShips2[1] -= 1;
    
              Embeds.error(ChannelFP2, `/ 1 2 3 4 5 6 7 8 9 10\na ${A2[0]} ${A2[1]} ${A2[2]} ${A2[3]} ${A2[4]} ${A2[5]} ${A2[6]} ${A2[7]} ${A2[8]} ${A2[9]}\nb ${B2[0]} ${B2[1]} ${B2[2]} ${B2[3]} ${B2[4]} ${B2[5]} ${B2[6]} ${B2[7]} ${B2[8]} ${B2[9]}\nc ${C2[0]} ${C2[1]} ${C2[2]} ${C2[3]} ${C2[4]} ${C2[5]} ${C2[6]} ${C2[7]} ${C2[8]} ${C2[9]}\nd ${D2[0]} ${D2[1]} ${D2[2]} ${D2[3]} ${D2[4]} ${D2[5]} ${D2[6]} ${D2[7]} ${D2[8]} ${D2[9]}\ne ${E2[0]} ${E2[1]} ${E2[2]} ${E2[3]} ${E2[4]} ${E2[5]} ${E2[6]} ${E2[7]} ${E2[8]} ${E2[9]}\nf ${F2[0]} ${F2[1]} ${F2[2]} ${F2[3]} ${F2[4]} ${F2[5]} ${F2[6]} ${F2[7]} ${F2[8]} ${F2[9]}\ng ${G2[0]} ${G2[1]} ${G2[2]} ${G2[3]} ${G2[4]} ${G2[5]} ${G2[6]} ${G2[7]} ${G2[8]} ${G2[9]}\n`)
    
            }
    
          } else {
    
            msg.channel.send("You cant place that ship there!")
    
          }
    
        } else if (args[3].toString() == "H") {
    
          if(temp + 4 == 10) {
    
            if(D2[temp] == "x" && D2[temp + 1] == "x" && D2[temp + 2] == "x" && D2[temp + 3] == "x" && D2[temp - 1] == "x" && E2[temp] == "x" && E2[temp + 1] == "x" && E2[temp + 2] == "x" && E2[temp + 3] == "x" && E2[temp - 1] == "x" && F2[temp] == "x" && F2[temp + 1] == "x" && F2[temp + 2] == "x" && F2[temp + 3] == "x" && F2[temp - 1] == "x") {
    
              E2[temp] = "p";
              E2[temp + 1] = "p"; 
              E2[temp + 2] = "p"; 
              E2[temp + 3] = "p";
    
              AllShips2[1] -= 1;
    
              Embeds.error(ChannelFP2, `/ 1 2 3 4 5 6 7 8 9 10\na ${A2[0]} ${A2[1]} ${A2[2]} ${A2[3]} ${A2[4]} ${A2[5]} ${A2[6]} ${A2[7]} ${A2[8]} ${A2[9]}\nb ${B2[0]} ${B2[1]} ${B2[2]} ${B2[3]} ${B2[4]} ${B2[5]} ${B2[6]} ${B2[7]} ${B2[8]} ${B2[9]}\nc ${C2[0]} ${C2[1]} ${C2[2]} ${C2[3]} ${C2[4]} ${C2[5]} ${C2[6]} ${C2[7]} ${C2[8]} ${C2[9]}\nd ${D2[0]} ${D2[1]} ${D2[2]} ${D2[3]} ${D2[4]} ${D2[5]} ${D2[6]} ${D2[7]} ${D2[8]} ${D2[9]}\ne ${E2[0]} ${E2[1]} ${E2[2]} ${E2[3]} ${E2[4]} ${E2[5]} ${E2[6]} ${E2[7]} ${E2[8]} ${E2[9]}\nf ${F2[0]} ${F2[1]} ${F2[2]} ${F2[3]} ${F2[4]} ${F2[5]} ${F2[6]} ${F2[7]} ${F2[8]} ${F2[9]}\ng ${G2[0]} ${G2[1]} ${G2[2]} ${G2[3]} ${G2[4]} ${G2[5]} ${G2[6]} ${G2[7]} ${G2[8]} ${G2[9]}\n`)
    
            } else {
    
              msg.channel.send("You cant place that ship there!")
    
            }
    
          } else if (temp + 4 < 10) {
    
            if(D2[temp] == "x" && D2[temp + 1] == "x" && D2[temp + 2] == "x" && D2[temp + 3] == "x" && D2[temp + 4] == "x" && D2[temp - 1] == "x" && E2[temp] == "x" && E2[temp + 1] == "x" && E2[temp + 2] == "x" && E2[temp + 3] == "x" && E2[temp + 4] == "x" && E2[temp - 1] == "x" && F2[temp] == "x" && F2[temp + 1] == "x" && F2[temp + 2] == "x" && F2[temp + 3] == "x" && F2[temp + 4] == "x" && F2[temp - 1] == "x") {
    
            E2[temp] = "p";
            E2[temp + 1] = "p"; 
            E2[temp + 2] = "p"; 
            E2[temp + 3] = "p"
    
            AllShips2[1] -= 1;
    
            Embeds.error(ChannelFP2, `/ 1 2 3 4 5 6 7 8 9 10\na ${A2[0]} ${A2[1]} ${A2[2]} ${A2[3]} ${A2[4]} ${A2[5]} ${A2[6]} ${A2[7]} ${A2[8]} ${A2[9]}\nb ${B2[0]} ${B2[1]} ${B2[2]} ${B2[3]} ${B2[4]} ${B2[5]} ${B2[6]} ${B2[7]} ${B2[8]} ${B2[9]}\nc ${C2[0]} ${C2[1]} ${C2[2]} ${C2[3]} ${C2[4]} ${C2[5]} ${C2[6]} ${C2[7]} ${C2[8]} ${C2[9]}\nd ${D2[0]} ${D2[1]} ${D2[2]} ${D2[3]} ${D2[4]} ${D2[5]} ${D2[6]} ${D2[7]} ${D2[8]} ${D2[9]}\ne ${E2[0]} ${E2[1]} ${E2[2]} ${E2[3]} ${E2[4]} ${E2[5]} ${E2[6]} ${E2[7]} ${E2[8]} ${E2[9]}\nf ${F2[0]} ${F2[1]} ${F2[2]} ${F2[3]} ${F2[4]} ${F2[5]} ${F2[6]} ${F2[7]} ${F2[8]} ${F2[9]}\ng ${G2[0]} ${G2[1]} ${G2[2]} ${G2[3]} ${G2[4]} ${G2[5]} ${G2[6]} ${G2[7]} ${G2[8]} ${G2[9]}\n`)
    
          } else {
    
            msg.channel.send("You cant place that ship there!")
    
          }
    
        }
    
        }
    
      } else if(args[2].toString() == "F" && AllShips2[2] != 0) {
    
        if(args[3].toString() == "V") {
    
          if (temp > 0 && temp < 9) {
    
            if(B2[temp] == "x" && C2[temp] == "x" && B2[temp + 1] == "x" && C2[temp + 1] == "x" && D2[temp] == "x" && D2[temp + 1] == "x" && B2[temp - 1] == "x" && C2[temp - 1] == "x" && D2[temp - 1] == "x" && E2[temp] == "x" && E2[temp + 1] == "x" && E2[temp - 1] == "x" && F2[temp] == "x" && F2[temp - 1] == "x" && F2[temp + 1] == "x") {
    
              C2[temp] = "p";
              D2[temp] = "p";
              E2[temp] = "p"; 
    
              AllShips2[2] -= 1;
    
              Embeds.error(ChannelFP2, `/ 1 2 3 4 5 6 7 8 9 10\na ${A2[0]} ${A2[1]} ${A2[2]} ${A2[3]} ${A2[4]} ${A2[5]} ${A2[6]} ${A2[7]} ${A2[8]} ${A2[9]}\nb ${B2[0]} ${B2[1]} ${B2[2]} ${B2[3]} ${B2[4]} ${B2[5]} ${B2[6]} ${B2[7]} ${B2[8]} ${B2[9]}\nc ${C2[0]} ${C2[1]} ${C2[2]} ${C2[3]} ${C2[4]} ${C2[5]} ${C2[6]} ${C2[7]} ${C2[8]} ${C2[9]}\nd ${D2[0]} ${D2[1]} ${D2[2]} ${D2[3]} ${D2[4]} ${D2[5]} ${D2[6]} ${D2[7]} ${D2[8]} ${D2[9]}\ne ${E2[0]} ${E2[1]} ${E2[2]} ${E2[3]} ${E2[4]} ${E2[5]} ${E2[6]} ${E2[7]} ${E2[8]} ${E2[9]}\nf ${F2[0]} ${F2[1]} ${F2[2]} ${F2[3]} ${F2[4]} ${F2[5]} ${F2[6]} ${F2[7]} ${F2[8]} ${F2[9]}\ng ${G2[0]} ${G2[1]} ${G2[2]} ${G2[3]} ${G2[4]} ${G2[5]} ${G2[6]} ${G2[7]} ${G2[8]} ${G2[9]}\n`)
    
            }
    
          } else if (temp == 9) {
    
            if(B2[temp] == "x" && C2[temp] == "x" && D2[temp] == "x" && B2[temp - 1] == "x" && C2[temp - 1] == "x" && D2[temp - 1] == "x" && E2[temp] == "x" && E2[temp - 1] == "x" && F2[temp] == "x" && F2[temp - 1] == "x") {
    
              C2[temp] = "p";
              D2[temp] = "p"; 
              E2[temp] = "p";
    
              AllShips2[2] -= 1;
    
              Embeds.error(ChannelFP2, `/ 1 2 3 4 5 6 7 8 9 10\na ${A2[0]} ${A2[1]} ${A2[2]} ${A2[3]} ${A2[4]} ${A2[5]} ${A2[6]} ${A2[7]} ${A2[8]} ${A2[9]}\nb ${B2[0]} ${B2[1]} ${B2[2]} ${B2[3]} ${B2[4]} ${B2[5]} ${B2[6]} ${B2[7]} ${B2[8]} ${B2[9]}\nc ${C2[0]} ${C2[1]} ${C2[2]} ${C2[3]} ${C2[4]} ${C2[5]} ${C2[6]} ${C2[7]} ${C2[8]} ${C2[9]}\nd ${D2[0]} ${D2[1]} ${D2[2]} ${D2[3]} ${D2[4]} ${D2[5]} ${D2[6]} ${D2[7]} ${D2[8]} ${D2[9]}\ne ${E2[0]} ${E2[1]} ${E2[2]} ${E2[3]} ${E2[4]} ${E2[5]} ${E2[6]} ${E2[7]} ${E2[8]} ${E2[9]}\nf ${F2[0]} ${F2[1]} ${F2[2]} ${F2[3]} ${F2[4]} ${F2[5]} ${F2[6]} ${F2[7]} ${F2[8]} ${F2[9]}\ng ${G2[0]} ${G2[1]} ${G2[2]} ${G2[3]} ${G2[4]} ${G2[5]} ${G2[6]} ${G2[7]} ${G2[8]} ${G2[9]}\n`)
    
            }
    
          } else {
    
            msg.channel.send("You cant place that ship there!")
    
          }
    
        } else if (args[3].toString() == "H") {
    
          if(temp + 3 == 10) {
    
            if(D2[temp] == "x" && D2[temp + 1] == "x" && D2[temp + 2] == "x" && D2[temp - 1] == "x" && E2[temp] == "x" && E2[temp + 1] == "x" && E2[temp + 2] == "x" && E2[temp - 1] == "x" && F2[temp] == "x" && F2[temp + 1] == "x" && F2[temp + 2] == "x" && F2[temp - 1] == "x") {
    
              E2[temp] = "p";
              E2[temp + 1] = "p"; 
              E2[temp + 2] = "p"; 
    
              AllShips2[2] -= 1;
    
              Embeds.error(ChannelFP2, `/ 1 2 3 4 5 6 7 8 9 10\na ${A2[0]} ${A2[1]} ${A2[2]} ${A2[3]} ${A2[4]} ${A2[5]} ${A2[6]} ${A2[7]} ${A2[8]} ${A2[9]}\nb ${B2[0]} ${B2[1]} ${B2[2]} ${B2[3]} ${B2[4]} ${B2[5]} ${B2[6]} ${B2[7]} ${B2[8]} ${B2[9]}\nc ${C2[0]} ${C2[1]} ${C2[2]} ${C2[3]} ${C2[4]} ${C2[5]} ${C2[6]} ${C2[7]} ${C2[8]} ${C2[9]}\nd ${D2[0]} ${D2[1]} ${D2[2]} ${D2[3]} ${D2[4]} ${D2[5]} ${D2[6]} ${D2[7]} ${D2[8]} ${D2[9]}\ne ${E2[0]} ${E2[1]} ${E2[2]} ${E2[3]} ${E2[4]} ${E2[5]} ${E2[6]} ${E2[7]} ${E2[8]} ${E2[9]}\nf ${F2[0]} ${F2[1]} ${F2[2]} ${F2[3]} ${F2[4]} ${F2[5]} ${F2[6]} ${F2[7]} ${F2[8]} ${F2[9]}\ng ${G2[0]} ${G2[1]} ${G2[2]} ${G2[3]} ${G2[4]} ${G2[5]} ${G2[6]} ${G2[7]} ${G2[8]} ${G2[9]}\n`)
    
            } else {
    
              msg.channel.send("You cant place that ship there!")
    
            }
    
          } else if (temp + 3 < 10) {
    
            if(D2[temp] == "x" && D2[temp + 1] == "x" && D2[temp + 2] == "x" && D2[temp + 3] == "x" && D2[temp - 1] == "x" && E2[temp] == "x" && E2[temp + 1] == "x" && E2[temp + 2] == "x" && E2[temp + 3] == "x" && E2[temp - 1] == "x" && F2[temp] == "x" && F2[temp + 1] == "x" && F2[temp + 2] == "x" && F2[temp + 3] == "x" && F2[temp - 1] == "x") {
    
            E2[temp] = "p";
            E2[temp + 1] = "p"; 
            E2[temp + 2] = "p"; 
    
            AllShips2[2] -= 1;
    
            Embeds.error(ChannelFP2, `/ 1 2 3 4 5 6 7 8 9 10\na ${A2[0]} ${A2[1]} ${A2[2]} ${A2[3]} ${A2[4]} ${A2[5]} ${A2[6]} ${A2[7]} ${A2[8]} ${A2[9]}\nb ${B2[0]} ${B2[1]} ${B2[2]} ${B2[3]} ${B2[4]} ${B2[5]} ${B2[6]} ${B2[7]} ${B2[8]} ${B2[9]}\nc ${C2[0]} ${C2[1]} ${C2[2]} ${C2[3]} ${C2[4]} ${C2[5]} ${C2[6]} ${C2[7]} ${C2[8]} ${C2[9]}\nd ${D2[0]} ${D2[1]} ${D2[2]} ${D2[3]} ${D2[4]} ${D2[5]} ${D2[6]} ${D2[7]} ${D2[8]} ${D2[9]}\ne ${E2[0]} ${E2[1]} ${E2[2]} ${E2[3]} ${E2[4]} ${E2[5]} ${E2[6]} ${E2[7]} ${E2[8]} ${E2[9]}\nf ${F2[0]} ${F2[1]} ${F2[2]} ${F2[3]} ${F2[4]} ${F2[5]} ${F2[6]} ${F2[7]} ${F2[8]} ${F2[9]}\ng ${G2[0]} ${G2[1]} ${G2[2]} ${G2[3]} ${G2[4]} ${G2[5]} ${G2[6]} ${G2[7]} ${G2[8]} ${G2[9]}\n`)
    
          } else {
    
            msg.channel.send("You cant place that ship there!")
    
          }
    
        }
    
        }
    
      } else if(args[2].toString() == "M" && AllShips2[3] != 0) {
    
        if(args[3].toString() == "V") {
    
          if (temp > 0 && temp < 9) {
    
            if(C2[temp] == "x" && C2[temp + 1] == "x" && D2[temp] == "x" && D2[temp + 1] == "x" && C2[temp - 1] == "x" && D2[temp - 1] == "x" && E2[temp] == "x" && E2[temp + 1] == "x" && E2[temp - 1] == "x" && F2[temp] == "x" && F2[temp - 1] == "x" && F2[temp + 1] == "x") {
    
              D2[temp] = "p";
              E2[temp] = "p"; 
    
              AllShips2[3] -= 1;
    
              Embeds.error(ChannelFP2, `/ 1 2 3 4 5 6 7 8 9 10\na ${A2[0]} ${A2[1]} ${A2[2]} ${A2[3]} ${A2[4]} ${A2[5]} ${A2[6]} ${A2[7]} ${A2[8]} ${A2[9]}\nb ${B2[0]} ${B2[1]} ${B2[2]} ${B2[3]} ${B2[4]} ${B2[5]} ${B2[6]} ${B2[7]} ${B2[8]} ${B2[9]}\nc ${C2[0]} ${C2[1]} ${C2[2]} ${C2[3]} ${C2[4]} ${C2[5]} ${C2[6]} ${C2[7]} ${C2[8]} ${C2[9]}\nd ${D2[0]} ${D2[1]} ${D2[2]} ${D2[3]} ${D2[4]} ${D2[5]} ${D2[6]} ${D2[7]} ${D2[8]} ${D2[9]}\ne ${E2[0]} ${E2[1]} ${E2[2]} ${E2[3]} ${E2[4]} ${E2[5]} ${E2[6]} ${E2[7]} ${E2[8]} ${E2[9]}\nf ${F2[0]} ${F2[1]} ${F2[2]} ${F2[3]} ${F2[4]} ${F2[5]} ${F2[6]} ${F2[7]} ${F2[8]} ${F2[9]}\ng ${G2[0]} ${G2[1]} ${G2[2]} ${G2[3]} ${G2[4]} ${G2[5]} ${G2[6]} ${G2[7]} ${G2[8]} ${G2[9]}\n`)
    
            }
    
          } else if (temp == 9) {
    
            if(C2[temp] == "x" && C2[temp - 1] == "x" && D2[temp] == "x" && D2[temp - 1] == "x" && E2[temp] == "x" && E2[temp - 1] == "x" && F2[temp] == "x" && F2[temp - 1] == "x") {
    
              D2[temp] = "p";
              E2[temp] = "p"; 
    
              AllShips2[3] -= 1;
    
              Embeds.error(ChannelFP2, `/ 1 2 3 4 5 6 7 8 9 10\na ${A2[0]} ${A2[1]} ${A2[2]} ${A2[3]} ${A2[4]} ${A2[5]} ${A2[6]} ${A2[7]} ${A2[8]} ${A2[9]}\nb ${B2[0]} ${B2[1]} ${B2[2]} ${B2[3]} ${B2[4]} ${B2[5]} ${B2[6]} ${B2[7]} ${B2[8]} ${B2[9]}\nc ${C2[0]} ${C2[1]} ${C2[2]} ${C2[3]} ${C2[4]} ${C2[5]} ${C2[6]} ${C2[7]} ${C2[8]} ${C2[9]}\nd ${D2[0]} ${D2[1]} ${D2[2]} ${D2[3]} ${D2[4]} ${D2[5]} ${D2[6]} ${D2[7]} ${D2[8]} ${D2[9]}\ne ${E2[0]} ${E2[1]} ${E2[2]} ${E2[3]} ${E2[4]} ${E2[5]} ${E2[6]} ${E2[7]} ${E2[8]} ${E2[9]}\nf ${F2[0]} ${F2[1]} ${F2[2]} ${F2[3]} ${F2[4]} ${F2[5]} ${F2[6]} ${F2[7]} ${F2[8]} ${F2[9]}\ng ${G2[0]} ${G2[1]} ${G2[2]} ${G2[3]} ${G2[4]} ${G2[5]} ${G2[6]} ${G2[7]} ${G2[8]} ${G2[9]}\n`)
    
            }
    
          } else {
    
            msg.channel.send("You cant place that ship there!")
    
          }
    
        } else if (args[3].toString() == "H") {
    
          if(temp + 2 == 10) {
    
            if(D2[temp] == "x" && D2[temp + 1] == "x" && D2[temp - 1] == "x" && E2[temp] == "x" && E2[temp + 1] == "x" && E2[temp - 1] == "x" && F2[temp] == "x" && F2[temp + 1] == "x" && F2[temp - 1] == "x") {
    
              E2[temp] = "p";
              E2[temp + 1] = "p"; 
    
              AllShips2[3] -= 1;
    
              Embeds.error(ChannelFP2, `/ 1 2 3 4 5 6 7 8 9 10\na ${A2[0]} ${A2[1]} ${A2[2]} ${A2[3]} ${A2[4]} ${A2[5]} ${A2[6]} ${A2[7]} ${A2[8]} ${A2[9]}\nb ${B2[0]} ${B2[1]} ${B2[2]} ${B2[3]} ${B2[4]} ${B2[5]} ${B2[6]} ${B2[7]} ${B2[8]} ${B2[9]}\nc ${C2[0]} ${C2[1]} ${C2[2]} ${C2[3]} ${C2[4]} ${C2[5]} ${C2[6]} ${C2[7]} ${C2[8]} ${C2[9]}\nd ${D2[0]} ${D2[1]} ${D2[2]} ${D2[3]} ${D2[4]} ${D2[5]} ${D2[6]} ${D2[7]} ${D2[8]} ${D2[9]}\ne ${E2[0]} ${E2[1]} ${E2[2]} ${E2[3]} ${E2[4]} ${E2[5]} ${E2[6]} ${E2[7]} ${E2[8]} ${E2[9]}\nf ${F2[0]} ${F2[1]} ${F2[2]} ${F2[3]} ${F2[4]} ${F2[5]} ${F2[6]} ${F2[7]} ${F2[8]} ${F2[9]}\ng ${G2[0]} ${G2[1]} ${G2[2]} ${G2[3]} ${G2[4]} ${G2[5]} ${G2[6]} ${G2[7]} ${G2[8]} ${G2[9]}\n`)
    
            } else {
    
              msg.channel.send("You cant place that ship there!")
    
            }
    
          } else if (temp + 2 < 10) {
    
          if(D2[temp] == "x" && D2[temp + 1] == "x" && D2[temp + 2] == "x" && D2[temp - 1] == "x" && E2[temp] == "x" && E2[temp + 1] == "x" && E2[temp + 2] == "x" && E2[temp - 1] == "x" && F2[temp] == "x" && F2[temp + 1] == "x" && F2[temp + 2] == "x" && F2[temp - 1] == "x") {
    
            E2[temp] = "p";
            E2[temp + 1] = "p"; 
    
            AllShips2[3] -= 1;
    
            Embeds.error(ChannelFP2, `/ 1 2 3 4 5 6 7 8 9 10\na ${A2[0]} ${A2[1]} ${A2[2]} ${A2[3]} ${A2[4]} ${A2[5]} ${A2[6]} ${A2[7]} ${A2[8]} ${A2[9]}\nb ${B2[0]} ${B2[1]} ${B2[2]} ${B2[3]} ${B2[4]} ${B2[5]} ${B2[6]} ${B2[7]} ${B2[8]} ${B2[9]}\nc ${C2[0]} ${C2[1]} ${C2[2]} ${C2[3]} ${C2[4]} ${C2[5]} ${C2[6]} ${C2[7]} ${C2[8]} ${C2[9]}\nd ${D2[0]} ${D2[1]} ${D2[2]} ${D2[3]} ${D2[4]} ${D2[5]} ${D2[6]} ${D2[7]} ${D2[8]} ${D2[9]}\ne ${E2[0]} ${E2[1]} ${E2[2]} ${E2[3]} ${E2[4]} ${E2[5]} ${E2[6]} ${E2[7]} ${E2[8]} ${E2[9]}\nf ${F2[0]} ${F2[1]} ${F2[2]} ${F2[3]} ${F2[4]} ${F2[5]} ${F2[6]} ${F2[7]} ${F2[8]} ${F2[9]}\ng ${G2[0]} ${G2[1]} ${G2[2]} ${G2[3]} ${G2[4]} ${G2[5]} ${G2[6]} ${G2[7]} ${G2[8]} ${G2[9]}\n`)
    
          } else {
    
            msg.channel.send("You cant place that ship there!")
    
          }
    
        }
    
        }
    
      } else {
    
        msg.channel.send("You used all ships of this kind")
    
      }
    
    } else if (temp == 0) {
    
      if(args[2].toString() == "B" && AllShips2[0] != 0) {
    
        if(args[3].toString() == "V") {
    
          if(A2[temp] == "x" && B2[temp] == "x" && B2[temp + 1] == "x" && C2[temp] == "x" && A2[temp + 1] == "x" && B2[temp + 1] == "x" && C2[temp + 1] == "x" && D2[temp] == "x" && D2[temp + 1] == "x" && E2[temp] == "x" && E2[temp + 1] == "x" && F2[temp] == "x" && F2[temp + 1] == "x") {
    
            A2[temp] = "p";
            B2[temp] = "p"; 
            C2[temp] = "p";
            D2[temp] = "p";
            E2[temp] = "p";
    
            AllShips2[0] -= 1;
    
            Embeds.error(ChannelFP2, `/ 1 2 3 4 5 6 7 8 9 10\na ${A2[0]} ${A2[1]} ${A2[2]} ${A2[3]} ${A2[4]} ${A2[5]} ${A2[6]} ${A2[7]} ${A2[8]} ${A2[9]}\nb ${B2[0]} ${B2[1]} ${B2[2]} ${B2[3]} ${B2[4]} ${B2[5]} ${B2[6]} ${B2[7]} ${B2[8]} ${B2[9]}\nc ${C2[0]} ${C2[1]} ${C2[2]} ${C2[3]} ${C2[4]} ${C2[5]} ${C2[6]} ${C2[7]} ${C2[8]} ${C2[9]}\nd ${D2[0]} ${D2[1]} ${D2[2]} ${D2[3]} ${D2[4]} ${D2[5]} ${D2[6]} ${D2[7]} ${D2[8]} ${D2[9]}\ne ${E2[0]} ${E2[1]} ${E2[2]} ${E2[3]} ${E2[4]} ${E2[5]} ${E2[6]} ${E2[7]} ${E2[8]} ${E2[9]}\nf ${F2[0]} ${F2[1]} ${F2[2]} ${F2[3]} ${F2[4]} ${F2[5]} ${F2[6]} ${F2[7]} ${F2[8]} ${F2[9]}\ng ${G2[0]} ${G2[1]} ${G2[2]} ${G2[3]} ${G2[4]} ${G2[5]} ${G2[6]} ${G2[7]} ${G2[8]} ${G2[9]}\n`)
    
          } else {
    
          msg.channel.send("You cant place that ship there!")
    
        }
    
        } else if (args[3].toString() == "H") {
    
          if(D2[temp] == "x" && D2[temp + 1] == "x" && D2[temp + 2] == "x" && D2[temp + 3] == "x" && D2[temp + 4] == "x" && D2[temp + 5] == "x" && E2[temp] == "x" && E2[temp + 1] == "x" && E2[temp + 2] == "x" && E2[temp + 3] == "x" && E2[temp + 4] == "x" && E2[temp +5] == "x" && F2[temp] == "x" && F2[temp + 1] == "x" && F2[temp + 2] == "x" && F2[temp + 3] == "x" && F2[temp + 4] == "x" && F2[temp + 5] == "x") {
    
            E2[temp] = "p";
            E2[temp + 1] = "p"; 
            E2[temp + 2] = "p"; 
            E2[temp + 3] = "p";
            E2[temp + 4] = "p";
    
            AllShips2[0] -= 1;
    
            Embeds.error(ChannelFP2, `/ 1 2 3 4 5 6 7 8 9 10\na ${A2[0]} ${A2[1]} ${A2[2]} ${A2[3]} ${A2[4]} ${A2[5]} ${A2[6]} ${A2[7]} ${A2[8]} ${A2[9]}\nb ${B2[0]} ${B2[1]} ${B2[2]} ${B2[3]} ${B2[4]} ${B2[5]} ${B2[6]} ${B2[7]} ${B2[8]} ${B2[9]}\nc ${C2[0]} ${C2[1]} ${C2[2]} ${C2[3]} ${C2[4]} ${C2[5]} ${C2[6]} ${C2[7]} ${C2[8]} ${C2[9]}\nd ${D2[0]} ${D2[1]} ${D2[2]} ${D2[3]} ${D2[4]} ${D2[5]} ${D2[6]} ${D2[7]} ${D2[8]} ${D2[9]}\ne ${E2[0]} ${E2[1]} ${E2[2]} ${E2[3]} ${E2[4]} ${E2[5]} ${E2[6]} ${E2[7]} ${E2[8]} ${E2[9]}\nf ${F2[0]} ${F2[1]} ${F2[2]} ${F2[3]} ${F2[4]} ${F2[5]} ${F2[6]} ${F2[7]} ${F2[8]} ${F2[9]}\ng ${G2[0]} ${G2[1]} ${G2[2]} ${G2[3]} ${G2[4]} ${G2[5]} ${G2[6]} ${G2[7]} ${G2[8]} ${G2[9]}\n`)
    
          } else {
    
            msg.channel.send("You cant place that ship there!")
    
          }
    
        }
    
      } else if(args[2].toString() == "C" && AllShips2[1] != 0) {
    
        if(args[3].toString() == "V") {
    
          if(A2[temp] == "x" && B2[temp] == "x" && B2[temp + 1] == "x" && C2[temp] == "x" && A2[temp + 1] == "x" && B2[temp + 1] == "x" && C2[temp + 1] == "x" && D2[temp] == "x" && D2[temp + 1] == "x" && E2[temp] == "x" && E2[temp + 1] == "x" && F2[temp] == "x" && F2[temp + 1] == "x") {
    
            B2[temp] = "p";
            C2[temp] = "p";
            D2[temp] = "p";
            E2[temp] = "p"; 
    
            AllShips2[1] -= 1;
    
            Embeds.error(ChannelFP2, `/ 1 2 3 4 5 6 7 8 9 10\na ${A2[0]} ${A2[1]} ${A2[2]} ${A2[3]} ${A2[4]} ${A2[5]} ${A2[6]} ${A2[7]} ${A2[8]} ${A2[9]}\nb ${B2[0]} ${B2[1]} ${B2[2]} ${B2[3]} ${B2[4]} ${B2[5]} ${B2[6]} ${B2[7]} ${B2[8]} ${B2[9]}\nc ${C2[0]} ${C2[1]} ${C2[2]} ${C2[3]} ${C2[4]} ${C2[5]} ${C2[6]} ${C2[7]} ${C2[8]} ${C2[9]}\nd ${D2[0]} ${D2[1]} ${D2[2]} ${D2[3]} ${D2[4]} ${D2[5]} ${D2[6]} ${D2[7]} ${D2[8]} ${D2[9]}\ne ${E2[0]} ${E2[1]} ${E2[2]} ${E2[3]} ${E2[4]} ${E2[5]} ${E2[6]} ${E2[7]} ${E2[8]} ${E2[9]}\nf ${F2[0]} ${F2[1]} ${F2[2]} ${F2[3]} ${F2[4]} ${F2[5]} ${F2[6]} ${F2[7]} ${F2[8]} ${F2[9]}\ng ${G2[0]} ${G2[1]} ${G2[2]} ${G2[3]} ${G2[4]} ${G2[5]} ${G2[6]} ${G2[7]} ${G2[8]} ${G2[9]}\n`)
    
          } else {
    
            msg.channel.send("You cant place that ship there!")
    
          }
    
        } else if (args[3].toString() == "H") {
    
          if(D2[temp] == "x" && D2[temp + 1] == "x" && D2[temp + 2] == "x" && D2[temp + 3] == "x" && D2[temp + 4] == "x" && E2[temp] == "x" && E2[temp + 1] == "x" && E2[temp + 2] == "x" && E2[temp + 3] == "x" && E2[temp + 4] == "x" && F2[temp] == "x" && F2[temp + 1] == "x" && F2[temp + 2] == "x" && F2[temp + 3] == "x" && F2[temp + 4] == "x") {
    
            E2[temp] = "p";
            E2[temp + 1] = "p"; 
            E2[temp + 2] = "p"; 
            E2[temp + 3] = "p";
    
            AllShips2[1] -= 1;
    
            Embeds.error(ChannelFP2, `/ 1 2 3 4 5 6 7 8 9 10\na ${A2[0]} ${A2[1]} ${A2[2]} ${A2[3]} ${A2[4]} ${A2[5]} ${A2[6]} ${A2[7]} ${A2[8]} ${A2[9]}\nb ${B2[0]} ${B2[1]} ${B2[2]} ${B2[3]} ${B2[4]} ${B2[5]} ${B2[6]} ${B2[7]} ${B2[8]} ${B2[9]}\nc ${C2[0]} ${C2[1]} ${C2[2]} ${C2[3]} ${C2[4]} ${C2[5]} ${C2[6]} ${C2[7]} ${C2[8]} ${C2[9]}\nd ${D2[0]} ${D2[1]} ${D2[2]} ${D2[3]} ${D2[4]} ${D2[5]} ${D2[6]} ${D2[7]} ${D2[8]} ${D2[9]}\ne ${E2[0]} ${E2[1]} ${E2[2]} ${E2[3]} ${E2[4]} ${E2[5]} ${E2[6]} ${E2[7]} ${E2[8]} ${E2[9]}\nf ${F2[0]} ${F2[1]} ${F2[2]} ${F2[3]} ${F2[4]} ${F2[5]} ${F2[6]} ${F2[7]} ${F2[8]} ${F2[9]}\ng ${G2[0]} ${G2[1]} ${G2[2]} ${G2[3]} ${G2[4]} ${G2[5]} ${G2[6]} ${G2[7]} ${G2[8]} ${G2[9]}\n`)
    
          } else {
    
            msg.channel.send("You cant place that ship there!")
    
          }
    
        }
    
      } else if(args[2].toString() == "F" && AllShips2[2] != 0) {
    
        if(args[3].toString() == "V") {
    
          if(B2[temp] == "x" && B2[temp + 1] == "x" && C2[temp] == "x" && B2[temp + 1] == "x" && C2[temp + 1] == "x" && D2[temp] == "x" && D2[temp + 1] == "x" && E2[temp] == "x" && E2[temp + 1] == "x" && F2[temp] == "x" && F2[temp + 1] == "x") {
    
            C2[temp] = "p";
            D2[temp] = "p";
            E2[temp] = "p"; 
    
            AllShips2[2] -= 1;
    
            Embeds.error(ChannelFP2, `/ 1 2 3 4 5 6 7 8 9 10\na ${A2[0]} ${A2[1]} ${A2[2]} ${A2[3]} ${A2[4]} ${A2[5]} ${A2[6]} ${A2[7]} ${A2[8]} ${A2[9]}\nb ${B2[0]} ${B2[1]} ${B2[2]} ${B2[3]} ${B2[4]} ${B2[5]} ${B2[6]} ${B2[7]} ${B2[8]} ${B2[9]}\nc ${C2[0]} ${C2[1]} ${C2[2]} ${C2[3]} ${C2[4]} ${C2[5]} ${C2[6]} ${C2[7]} ${C2[8]} ${C2[9]}\nd ${D2[0]} ${D2[1]} ${D2[2]} ${D2[3]} ${D2[4]} ${D2[5]} ${D2[6]} ${D2[7]} ${D2[8]} ${D2[9]}\ne ${E2[0]} ${E2[1]} ${E2[2]} ${E2[3]} ${E2[4]} ${E2[5]} ${E2[6]} ${E2[7]} ${E2[8]} ${E2[9]}\nf ${F2[0]} ${F2[1]} ${F2[2]} ${F2[3]} ${F2[4]} ${F2[5]} ${F2[6]} ${F2[7]} ${F2[8]} ${F2[9]}\ng ${G2[0]} ${G2[1]} ${G2[2]} ${G2[3]} ${G2[4]} ${G2[5]} ${G2[6]} ${G2[7]} ${G2[8]} ${G2[9]}\n`)
    
          } else {
    
            msg.channel.send("You cant place that ship there!")
    
          }
    
        } else if (args[3].toString() == "H") {
    
          if(D2[temp] == "x" && D2[temp + 1] == "x" && D2[temp + 2] == "x" && D2[temp + 3] == "x" && E2[temp] == "x" && E2[temp + 1] == "x" && E2[temp + 2] == "x" && E2[temp + 3] == "x" && F2[temp] == "x" && F2[temp + 1] == "x" && F2[temp + 2] == "x" && F2[temp + 3] == "x") {
    
            E2[temp] = "p";
            E2[temp + 1] = "p"; 
            E2[temp + 2] = "p"; 
    
            AllShips2[2] -= 1;
    
            Embeds.error(ChannelFP2, `/ 1 2 3 4 5 6 7 8 9 10\na ${A2[0]} ${A2[1]} ${A2[2]} ${A2[3]} ${A2[4]} ${A2[5]} ${A2[6]} ${A2[7]} ${A2[8]} ${A2[9]}\nb ${B2[0]} ${B2[1]} ${B2[2]} ${B2[3]} ${B2[4]} ${B2[5]} ${B2[6]} ${B2[7]} ${B2[8]} ${B2[9]}\nc ${C2[0]} ${C2[1]} ${C2[2]} ${C2[3]} ${C2[4]} ${C2[5]} ${C2[6]} ${C2[7]} ${C2[8]} ${C2[9]}\nd ${D2[0]} ${D2[1]} ${D2[2]} ${D2[3]} ${D2[4]} ${D2[5]} ${D2[6]} ${D2[7]} ${D2[8]} ${D2[9]}\ne ${E2[0]} ${E2[1]} ${E2[2]} ${E2[3]} ${E2[4]} ${E2[5]} ${E2[6]} ${E2[7]} ${E2[8]} ${E2[9]}\nf ${F2[0]} ${F2[1]} ${F2[2]} ${F2[3]} ${F2[4]} ${F2[5]} ${F2[6]} ${F2[7]} ${F2[8]} ${F2[9]}\ng ${G2[0]} ${G2[1]} ${G2[2]} ${G2[3]} ${G2[4]} ${G2[5]} ${G2[6]} ${G2[7]} ${G2[8]} ${G2[9]}\n`)
    
          } else {
    
            msg.channel.send("You cant place that ship there!")
    
          }
    
        }
    
      } else if(args[2].toString() == "M" && AllShips2[3] != 0) {
    
        if(args[3].toString() == "V") {
    
          if(temp == 0) {
    
            if(C2[temp] == "x" && C2[temp + 1] == "x" && D2[temp] == "x" && D2[temp + 1] == "x" && E2[temp] == "x" && E2[temp + 1] == "x" && F2[temp] == "x" && F2[temp + 1] == "x") {
    
              D2[temp] = "p";
              E2[temp] = "p"; 
    
              AllShips2[3] -= 1;
    
              Embeds.error(ChannelFP2, `/ 1 2 3 4 5 6 7 8 9 10\na ${A2[0]} ${A2[1]} ${A2[2]} ${A2[3]} ${A2[4]} ${A2[5]} ${A2[6]} ${A2[7]} ${A2[8]} ${A2[9]}\nb ${B2[0]} ${B2[1]} ${B2[2]} ${B2[3]} ${B2[4]} ${B2[5]} ${B2[6]} ${B2[7]} ${B2[8]} ${B2[9]}\nc ${C2[0]} ${C2[1]} ${C2[2]} ${C2[3]} ${C2[4]} ${C2[5]} ${C2[6]} ${C2[7]} ${C2[8]} ${C2[9]}\nd ${D2[0]} ${D2[1]} ${D2[2]} ${D2[3]} ${D2[4]} ${D2[5]} ${D2[6]} ${D2[7]} ${D2[8]} ${D2[9]}\ne ${E2[0]} ${E2[1]} ${E2[2]} ${E2[3]} ${E2[4]} ${E2[5]} ${E2[6]} ${E2[7]} ${E2[8]} ${E2[9]}\nf ${F2[0]} ${F2[1]} ${F2[2]} ${F2[3]} ${F2[4]} ${F2[5]} ${F2[6]} ${F2[7]} ${F2[8]} ${F2[9]}\ng ${G2[0]} ${G2[1]} ${G2[2]} ${G2[3]} ${G2[4]} ${G2[5]} ${G2[6]} ${G2[7]} ${G2[8]} ${G2[9]}\n`)
    
            } else {
    
              msg.channel.send("You cant place that ship there!")
    
            }
    
          }
    
        } else if (args[3].toString() == "H") {
    
          if(D2[temp] == "x" && D2[temp + 1] == "x" && D2[temp + 2] == "x" && E2[temp] == "x" && E2[temp + 1] == "x" && E2[temp + 2] == "x" && F2[temp] == "x" && F2[temp + 1] == "x" && F2[temp + 2] == "x") {
    
            E2[temp] = "p";
            E2[temp + 1] = "p"; 
    
            AllShips2[3] -= 1;
    
            Embeds.error(ChannelFP2, `/ 1 2 3 4 5 6 7 8 9 10\na ${A2[0]} ${A2[1]} ${A2[2]} ${A2[3]} ${A2[4]} ${A2[5]} ${A2[6]} ${A2[7]} ${A2[8]} ${A2[9]}\nb ${B2[0]} ${B2[1]} ${B2[2]} ${B2[3]} ${B2[4]} ${B2[5]} ${B2[6]} ${B2[7]} ${B2[8]} ${B2[9]}\nc ${C2[0]} ${C2[1]} ${C2[2]} ${C2[3]} ${C2[4]} ${C2[5]} ${C2[6]} ${C2[7]} ${C2[8]} ${C2[9]}\nd ${D2[0]} ${D2[1]} ${D2[2]} ${D2[3]} ${D2[4]} ${D2[5]} ${D2[6]} ${D2[7]} ${D2[8]} ${D2[9]}\ne ${E2[0]} ${E2[1]} ${E2[2]} ${E2[3]} ${E2[4]} ${E2[5]} ${E2[6]} ${E2[7]} ${E2[8]} ${E2[9]}\nf ${F2[0]} ${F2[1]} ${F2[2]} ${F2[3]} ${F2[4]} ${F2[5]} ${F2[6]} ${F2[7]} ${F2[8]} ${F2[9]}\ng ${G2[0]} ${G2[1]} ${G2[2]} ${G2[3]} ${G2[4]} ${G2[5]} ${G2[6]} ${G2[7]} ${G2[8]} ${G2[9]}\n`)
    
          } else {
    
            msg.channel.send("You cant place that ship there!")
    
          }
    
        }
    
      } else {
    
        msg.channel.send("You used all ships of this kind")
    
      }
    
    }
    
      } else if(args[0].toString() == "F") {
    
    var temp = parseInt(args[1] - 1)
    
    if(temp > 0) {
    
      if(args[2].toString() == "B" && AllShips2[0] != 0) {
    
        if(args[3].toString() == "V") {
    
          if (temp > 0 && temp < 9) {
    
            if(A2[temp] == "x" && B2[temp] == "x" && A2[temp + 1] == "x" && B2[temp + 1] == "x" && C2[temp] == "x" && C2[temp + 1] == "x" && A2[temp - 1] == "x" && B2[temp - 1] == "x" && C2[temp - 1] == "x" && D2[temp] == "x" && D2[temp + 1] == "x" && D2[temp - 1] == "x" && E2[temp] == "x" && E2[temp - 1] == "x" && E2[temp + 1] == "x" && F2[temp] == "x" && F2[temp - 1] == "x" && F2[temp + 1] == "x" && G2[temp] == "x" && G2[temp + 1] == "x" && G2[temp - 1]) {
    
              B2[temp] = "p";
              C2[temp] = "p";
              D2[temp] = "p"; 
              E2[temp] = "p";
              F2[temp] = "p";
    
              AllShips2[0] -= 1;
    
              Embeds.error(ChannelFP2, `/ 1 2 3 4 5 6 7 8 9 10\na ${A2[0]} ${A2[1]} ${A2[2]} ${A2[3]} ${A2[4]} ${A2[5]} ${A2[6]} ${A2[7]} ${A2[8]} ${A2[9]}\nb ${B2[0]} ${B2[1]} ${B2[2]} ${B2[3]} ${B2[4]} ${B2[5]} ${B2[6]} ${B2[7]} ${B2[8]} ${B2[9]}\nc ${C2[0]} ${C2[1]} ${C2[2]} ${C2[3]} ${C2[4]} ${C2[5]} ${C2[6]} ${C2[7]} ${C2[8]} ${C2[9]}\nd ${D2[0]} ${D2[1]} ${D2[2]} ${D2[3]} ${D2[4]} ${D2[5]} ${D2[6]} ${D2[7]} ${D2[8]} ${D2[9]}\ne ${E2[0]} ${E2[1]} ${E2[2]} ${E2[3]} ${E2[4]} ${E2[5]} ${E2[6]} ${E2[7]} ${E2[8]} ${E2[9]}\nf ${F2[0]} ${F2[1]} ${F2[2]} ${F2[3]} ${F2[4]} ${F2[5]} ${F2[6]} ${F2[7]} ${F2[8]} ${F2[9]}\ng ${G2[0]} ${G2[1]} ${G2[2]} ${G2[3]} ${G2[4]} ${G2[5]} ${G2[6]} ${G2[7]} ${G2[8]} ${G2[9]}\n`)
    
            }
    
          } else if (temp == 9) {
    
            if(A2[temp] == "x" && B2[temp] == "x" && B2[temp - 1] == "x" && C2[temp] == "x" && A2[temp - 1] == "x" && B2[temp - 1] == "x" && C2[temp - 1] == "x" && D2[temp] == "x" && D2[temp - 1] == "x" && E2[temp] == "x" && E2[temp - 1] == "x" && F2[temp] == "x" && F2[temp - 1] == "x" && G2[temp] == "x" && G2[temp - 1] == "x") {
    
              B2[temp] = "p";
              C2[temp] = "p"; 
              D2[temp] = "p";
              E2[temp] = "p";
              F2[temp] = "p";
    
              AllShips2[0] -= 1;
    
              Embeds.error(ChannelFP2, `/ 1 2 3 4 5 6 7 8 9 10\na ${A2[0]} ${A2[1]} ${A2[2]} ${A2[3]} ${A2[4]} ${A2[5]} ${A2[6]} ${A2[7]} ${A2[8]} ${A2[9]}\nb ${B2[0]} ${B2[1]} ${B2[2]} ${B2[3]} ${B2[4]} ${B2[5]} ${B2[6]} ${B2[7]} ${B2[8]} ${B2[9]}\nc ${C2[0]} ${C2[1]} ${C2[2]} ${C2[3]} ${C2[4]} ${C2[5]} ${C2[6]} ${C2[7]} ${C2[8]} ${C2[9]}\nd ${D2[0]} ${D2[1]} ${D2[2]} ${D2[3]} ${D2[4]} ${D2[5]} ${D2[6]} ${D2[7]} ${D2[8]} ${D2[9]}\ne ${E2[0]} ${E2[1]} ${E2[2]} ${E2[3]} ${E2[4]} ${E2[5]} ${E2[6]} ${E2[7]} ${E2[8]} ${E2[9]}\nf ${F2[0]} ${F2[1]} ${F2[2]} ${F2[3]} ${F2[4]} ${F2[5]} ${F2[6]} ${F2[7]} ${F2[8]} ${F2[9]}\ng ${G2[0]} ${G2[1]} ${G2[2]} ${G2[3]} ${G2[4]} ${G2[5]} ${G2[6]} ${G2[7]} ${G2[8]} ${G2[9]}\n`)
    
            }
    
          } else {
    
            msg.channel.send("You cant place that ship there!")
    
          }
    
        } else if (args[3].toString() == "H") {
    
          if(temp + 5 == 10) {
    
            if(E2[temp] == "x" && E2[temp + 1] == "x" && E2[temp + 2] == "x" && E2[temp + 3] == "x" && E2[temp + 4] == "x" && E2[temp - 1] == "x" && F2[temp] == "x" && F2[temp + 1] == "x" && F2[temp + 2] == "x" && F2[temp + 3] == "x" && F2[temp + 4] == "x" && F2[temp - 1] == "x" && G2[temp] == "x" && G2[temp + 1] == "x" && G2[temp + 2] == "x" && G2[temp + 3] == "x" && G2[temp + 4] == "x" && G2[temp - 1] == "x") {
    
              F2[temp] = "p";
              F2[temp + 1] = "p"; 
              F2[temp + 2] = "p"; 
              F2[temp + 3] = "p";
              F2[temp + 4] = "p";
    
              AllShips2[0] -= 1;
    
              Embeds.error(ChannelFP2, `/ 1 2 3 4 5 6 7 8 9 10\na ${A2[0]} ${A2[1]} ${A2[2]} ${A2[3]} ${A2[4]} ${A2[5]} ${A2[6]} ${A2[7]} ${A2[8]} ${A2[9]}\nb ${B2[0]} ${B2[1]} ${B2[2]} ${B2[3]} ${B2[4]} ${B2[5]} ${B2[6]} ${B2[7]} ${B2[8]} ${B2[9]}\nc ${C2[0]} ${C2[1]} ${C2[2]} ${C2[3]} ${C2[4]} ${C2[5]} ${C2[6]} ${C2[7]} ${C2[8]} ${C2[9]}\nd ${D2[0]} ${D2[1]} ${D2[2]} ${D2[3]} ${D2[4]} ${D2[5]} ${D2[6]} ${D2[7]} ${D2[8]} ${D2[9]}\ne ${E2[0]} ${E2[1]} ${E2[2]} ${E2[3]} ${E2[4]} ${E2[5]} ${E2[6]} ${E2[7]} ${E2[8]} ${E2[9]}\nf ${F2[0]} ${F2[1]} ${F2[2]} ${F2[3]} ${F2[4]} ${F2[5]} ${F2[6]} ${F2[7]} ${F2[8]} ${F2[9]}\ng ${G2[0]} ${G2[1]} ${G2[2]} ${G2[3]} ${G2[4]} ${G2[5]} ${G2[6]} ${G2[7]} ${G2[8]} ${G2[9]}\n`)
    
            } else {
    
              msg.channel.send("You cant place that ship there!")
    
            }
            
          } else if (temp + 5 < 10) {
    
          if(E2[temp] == "x" && E2[temp + 1] == "x" && E2[temp + 2] == "x" && E2[temp + 3] == "x" && E2[temp + 4] == "x" && E2[temp - 1] == "x" && F2[temp] == "x" && F2[temp + 1] == "x" && F2[temp + 2] == "x" && F2[temp + 3] == "x" && F2[temp + 4] == "x" && F2[temp - 1] == "x" && G2[temp] == "x" && G2[temp + 1] == "x" && G2[temp + 2] == "x" && G2[temp + 3] == "x" && G2[temp + 4] == "x" && G2[temp - 1] == "x" && E2[temp + 5] == "x" && F2[temp + 5] == "x" && G2[temp + 5] == "x") {
    
            F2[temp] = "p";
            F2[temp + 1] = "p"; 
            F2[temp + 2] = "p"; 
            F2[temp + 3] = "p";
            F2[temp + 4] = "p";
    
            AllShips2[0] -= 1;
    
            Embeds.error(ChannelFP2, `/ 1 2 3 4 5 6 7 8 9 10\na ${A2[0]} ${A2[1]} ${A2[2]} ${A2[3]} ${A2[4]} ${A2[5]} ${A2[6]} ${A2[7]} ${A2[8]} ${A2[9]}\nb ${B2[0]} ${B2[1]} ${B2[2]} ${B2[3]} ${B2[4]} ${B2[5]} ${B2[6]} ${B2[7]} ${B2[8]} ${B2[9]}\nc ${C2[0]} ${C2[1]} ${C2[2]} ${C2[3]} ${C2[4]} ${C2[5]} ${C2[6]} ${C2[7]} ${C2[8]} ${C2[9]}\nd ${D2[0]} ${D2[1]} ${D2[2]} ${D2[3]} ${D2[4]} ${D2[5]} ${D2[6]} ${D2[7]} ${D2[8]} ${D2[9]}\ne ${E2[0]} ${E2[1]} ${E2[2]} ${E2[3]} ${E2[4]} ${E2[5]} ${E2[6]} ${E2[7]} ${E2[8]} ${E2[9]}\nf ${F2[0]} ${F2[1]} ${F2[2]} ${F2[3]} ${F2[4]} ${F2[5]} ${F2[6]} ${F2[7]} ${F2[8]} ${F2[9]}\ng ${G2[0]} ${G2[1]} ${G2[2]} ${G2[3]} ${G2[4]} ${G2[5]} ${G2[6]} ${G2[7]} ${G2[8]} ${G2[9]}\n`)
    
          } else {
    
            msg.channel.send("You cant place that ship there!")
    
          }
    
        }
    
        }
    
      } else if(args[2].toString() == "C" && AllShips2[1] != 0) {
    
        if(args[3].toString() == "V") {
    
          if (temp > 0 && temp < 9) {
    
            if(B2[temp] == "x" && C2[temp] == "x" && B2[temp + 1] == "x" && C2[temp + 1] == "x" && D2[temp] == "x" && D2[temp + 1] == "x" && B2[temp - 1] == "x" && C2[temp - 1] == "x" && D2[temp - 1] == "x" && E2[temp] == "x" && E2[temp + 1] == "x" && E2[temp - 1] == "x" && F2[temp] == "x" && F2[temp - 1] == "x" && F2[temp + 1] == "x" && G2[temp] == "x" && G2[temp - 1] == "x" && G2[temp + 1] == "x") {
    
              C2[temp] = "p";
              D2[temp] = "p";
              E2[temp] = "p"; 
              F2[temp] = "p";
    
              AllShips2[1] -= 1;
    
              Embeds.error(ChannelFP2, `/ 1 2 3 4 5 6 7 8 9 10\na ${A2[0]} ${A2[1]} ${A2[2]} ${A2[3]} ${A2[4]} ${A2[5]} ${A2[6]} ${A2[7]} ${A2[8]} ${A2[9]}\nb ${B2[0]} ${B2[1]} ${B2[2]} ${B2[3]} ${B2[4]} ${B2[5]} ${B2[6]} ${B2[7]} ${B2[8]} ${B2[9]}\nc ${C2[0]} ${C2[1]} ${C2[2]} ${C2[3]} ${C2[4]} ${C2[5]} ${C2[6]} ${C2[7]} ${C2[8]} ${C2[9]}\nd ${D2[0]} ${D2[1]} ${D2[2]} ${D2[3]} ${D2[4]} ${D2[5]} ${D2[6]} ${D2[7]} ${D2[8]} ${D2[9]}\ne ${E2[0]} ${E2[1]} ${E2[2]} ${E2[3]} ${E2[4]} ${E2[5]} ${E2[6]} ${E2[7]} ${E2[8]} ${E2[9]}\nf ${F2[0]} ${F2[1]} ${F2[2]} ${F2[3]} ${F2[4]} ${F2[5]} ${F2[6]} ${F2[7]} ${F2[8]} ${F2[9]}\ng ${G2[0]} ${G2[1]} ${G2[2]} ${G2[3]} ${G2[4]} ${G2[5]} ${G2[6]} ${G2[7]} ${G2[8]} ${G2[9]}\n`)
    
            }
    
          } else if (temp == 9) {
    
            if(B2[temp] == "x" && C2[temp] == "x" && C2[temp - 1] == "x" && D2[temp] == "x" && B2[temp - 1] == "x" && C2[temp - 1] == "x" && D2[temp - 1] == "x" && E2[temp] == "x" && E2[temp - 1] == "x" && F2[temp] == "x" && F2[temp - 1] == "x" && G2[temp] == "x" && G2[temp - 1] == "x") {
    
              C2[temp] = "p";
              D2[temp] = "p"; 
              E2[temp] = "p";
              F2[temp] = "p";
    
              AllShips2[1] -= 1;
    
              Embeds.error(ChannelFP2, `/ 1 2 3 4 5 6 7 8 9 10\na ${A2[0]} ${A2[1]} ${A2[2]} ${A2[3]} ${A2[4]} ${A2[5]} ${A2[6]} ${A2[7]} ${A2[8]} ${A2[9]}\nb ${B2[0]} ${B2[1]} ${B2[2]} ${B2[3]} ${B2[4]} ${B2[5]} ${B2[6]} ${B2[7]} ${B2[8]} ${B2[9]}\nc ${C2[0]} ${C2[1]} ${C2[2]} ${C2[3]} ${C2[4]} ${C2[5]} ${C2[6]} ${C2[7]} ${C2[8]} ${C2[9]}\nd ${D2[0]} ${D2[1]} ${D2[2]} ${D2[3]} ${D2[4]} ${D2[5]} ${D2[6]} ${D2[7]} ${D2[8]} ${D2[9]}\ne ${E2[0]} ${E2[1]} ${E2[2]} ${E2[3]} ${E2[4]} ${E2[5]} ${E2[6]} ${E2[7]} ${E2[8]} ${E2[9]}\nf ${F2[0]} ${F2[1]} ${F2[2]} ${F2[3]} ${F2[4]} ${F2[5]} ${F2[6]} ${F2[7]} ${F2[8]} ${F2[9]}\ng ${G2[0]} ${G2[1]} ${G2[2]} ${G2[3]} ${G2[4]} ${G2[5]} ${G2[6]} ${G2[7]} ${G2[8]} ${G2[9]}\n`)
    
            }
    
          } else {
    
            msg.channel.send("You cant place that ship there!")
    
          }
    
        } else if (args[3].toString() == "H") {
    
          if(temp + 4 == 10) {
    
            if(E2[temp] == "x" && E2[temp + 1] == "x" && E2[temp + 2] == "x" && E2[temp + 3] == "x" && E2[temp - 1] == "x" && F2[temp] == "x" && F2[temp + 1] == "x" && F2[temp + 2] == "x" && F2[temp + 3] == "x" && F2[temp - 1] == "x" && G2[temp] == "x" && G2[temp + 1] == "x" && G2[temp + 2] == "x" && G2[temp + 3] == "x" && G2[temp - 1] == "x") {
    
              F2[temp] = "p";
              F2[temp + 1] = "p"; 
              F2[temp + 2] = "p"; 
              F2[temp + 3] = "p";
    
              AllShips2[1] -= 1;
    
              Embeds.error(ChannelFP2, `/ 1 2 3 4 5 6 7 8 9 10\na ${A2[0]} ${A2[1]} ${A2[2]} ${A2[3]} ${A2[4]} ${A2[5]} ${A2[6]} ${A2[7]} ${A2[8]} ${A2[9]}\nb ${B2[0]} ${B2[1]} ${B2[2]} ${B2[3]} ${B2[4]} ${B2[5]} ${B2[6]} ${B2[7]} ${B2[8]} ${B2[9]}\nc ${C2[0]} ${C2[1]} ${C2[2]} ${C2[3]} ${C2[4]} ${C2[5]} ${C2[6]} ${C2[7]} ${C2[8]} ${C2[9]}\nd ${D2[0]} ${D2[1]} ${D2[2]} ${D2[3]} ${D2[4]} ${D2[5]} ${D2[6]} ${D2[7]} ${D2[8]} ${D2[9]}\ne ${E2[0]} ${E2[1]} ${E2[2]} ${E2[3]} ${E2[4]} ${E2[5]} ${E2[6]} ${E2[7]} ${E2[8]} ${E2[9]}\nf ${F2[0]} ${F2[1]} ${F2[2]} ${F2[3]} ${F2[4]} ${F2[5]} ${F2[6]} ${F2[7]} ${F2[8]} ${F2[9]}\ng ${G2[0]} ${G2[1]} ${G2[2]} ${G2[3]} ${G2[4]} ${G2[5]} ${G2[6]} ${G2[7]} ${G2[8]} ${G2[9]}\n`)
    
            } else {
    
              msg.channel.send("You cant place that ship there!")
    
            }
    
          } else if (temp + 4 < 10) {
    
            if(E2[temp] == "x" && E2[temp + 1] == "x" && E2[temp + 2] == "x" && E2[temp + 3] == "x" && E2[temp + 4] == "x" && E2[temp - 1] == "x" && F2[temp] == "x" && F2[temp + 1] == "x" && F2[temp + 2] == "x" && F2[temp + 3] == "x" && F2[temp + 4] == "x" && F2[temp - 1] == "x" && G2[temp] == "x" && G2[temp + 1] == "x" && G2[temp + 2] == "x" && G2[temp + 3] == "x" && G2[temp + 4] == "x" && G2[temp - 1] == "x") {
    
              F2[temp] = "p";
              F2[temp + 1] = "p"; 
              F2[temp + 2] = "p"; 
              F2[temp + 3] = "p";
    
            AllShips2[1] -= 1;
    
            Embeds.error(ChannelFP2, `/ 1 2 3 4 5 6 7 8 9 10\na ${A2[0]} ${A2[1]} ${A2[2]} ${A2[3]} ${A2[4]} ${A2[5]} ${A2[6]} ${A2[7]} ${A2[8]} ${A2[9]}\nb ${B2[0]} ${B2[1]} ${B2[2]} ${B2[3]} ${B2[4]} ${B2[5]} ${B2[6]} ${B2[7]} ${B2[8]} ${B2[9]}\nc ${C2[0]} ${C2[1]} ${C2[2]} ${C2[3]} ${C2[4]} ${C2[5]} ${C2[6]} ${C2[7]} ${C2[8]} ${C2[9]}\nd ${D2[0]} ${D2[1]} ${D2[2]} ${D2[3]} ${D2[4]} ${D2[5]} ${D2[6]} ${D2[7]} ${D2[8]} ${D2[9]}\ne ${E2[0]} ${E2[1]} ${E2[2]} ${E2[3]} ${E2[4]} ${E2[5]} ${E2[6]} ${E2[7]} ${E2[8]} ${E2[9]}\nf ${F2[0]} ${F2[1]} ${F2[2]} ${F2[3]} ${F2[4]} ${F2[5]} ${F2[6]} ${F2[7]} ${F2[8]} ${F2[9]}\ng ${G2[0]} ${G2[1]} ${G2[2]} ${G2[3]} ${G2[4]} ${G2[5]} ${G2[6]} ${G2[7]} ${G2[8]} ${G2[9]}\n`)
    
          } else {
    
            msg.channel.send("You cant place that ship there!")
    
          }
    
        }
    
        }
    
      } else if(args[2].toString() == "F" && AllShips2[2] != 0) {
    
        if(args[3].toString() == "V") {
    
          if (temp > 0 && temp < 9) {
    
            if(C2[temp] == "x" && D2[temp] == "x" && C2[temp + 1] == "x" && D2[temp + 1] == "x" && E2[temp] == "x" && E2[temp + 1] == "x" && C2[temp - 1] == "x" && D2[temp - 1] == "x" && E2[temp - 1] == "x" && F2[temp] == "x" && F2[temp + 1] == "x" && F2[temp - 1] == "x" && G2[temp] == "x" && G2[temp - 1] == "x" && G2[temp + 1] == "x") {
    
              D2[temp] = "p";
              E2[temp] = "p";
              F2[temp] = "p"; 
    
              AllShips2[2] -= 1;
    
              Embeds.error(ChannelFP2, `/ 1 2 3 4 5 6 7 8 9 10\na ${A2[0]} ${A2[1]} ${A2[2]} ${A2[3]} ${A2[4]} ${A2[5]} ${A2[6]} ${A2[7]} ${A2[8]} ${A2[9]}\nb ${B2[0]} ${B2[1]} ${B2[2]} ${B2[3]} ${B2[4]} ${B2[5]} ${B2[6]} ${B2[7]} ${B2[8]} ${B2[9]}\nc ${C2[0]} ${C2[1]} ${C2[2]} ${C2[3]} ${C2[4]} ${C2[5]} ${C2[6]} ${C2[7]} ${C2[8]} ${C2[9]}\nd ${D2[0]} ${D2[1]} ${D2[2]} ${D2[3]} ${D2[4]} ${D2[5]} ${D2[6]} ${D2[7]} ${D2[8]} ${D2[9]}\ne ${E2[0]} ${E2[1]} ${E2[2]} ${E2[3]} ${E2[4]} ${E2[5]} ${E2[6]} ${E2[7]} ${E2[8]} ${E2[9]}\nf ${F2[0]} ${F2[1]} ${F2[2]} ${F2[3]} ${F2[4]} ${F2[5]} ${F2[6]} ${F2[7]} ${F2[8]} ${F2[9]}\ng ${G2[0]} ${G2[1]} ${G2[2]} ${G2[3]} ${G2[4]} ${G2[5]} ${G2[6]} ${G2[7]} ${G2[8]} ${G2[9]}\n`)
    
            }
    
          } else if (temp == 9) {
    
            if(C2[temp] == "x" && D2[temp] == "x" && E2[temp] == "x" && C2[temp - 1] == "x" && D2[temp - 1] == "x" && E2[temp - 1] == "x" && F2[temp] == "x" && F2[temp - 1] == "x" && G2[temp] == "x" && G2[temp - 1] == "x") {
    
              D2[temp] = "p";
              E2[temp] = "p"; 
              F2[temp] = "p";
    
              AllShips2[2] -= 1;
    
              Embeds.error(ChannelFP2, `/ 1 2 3 4 5 6 7 8 9 10\na ${A2[0]} ${A2[1]} ${A2[2]} ${A2[3]} ${A2[4]} ${A2[5]} ${A2[6]} ${A2[7]} ${A2[8]} ${A2[9]}\nb ${B2[0]} ${B2[1]} ${B2[2]} ${B2[3]} ${B2[4]} ${B2[5]} ${B2[6]} ${B2[7]} ${B2[8]} ${B2[9]}\nc ${C2[0]} ${C2[1]} ${C2[2]} ${C2[3]} ${C2[4]} ${C2[5]} ${C2[6]} ${C2[7]} ${C2[8]} ${C2[9]}\nd ${D2[0]} ${D2[1]} ${D2[2]} ${D2[3]} ${D2[4]} ${D2[5]} ${D2[6]} ${D2[7]} ${D2[8]} ${D2[9]}\ne ${E2[0]} ${E2[1]} ${E2[2]} ${E2[3]} ${E2[4]} ${E2[5]} ${E2[6]} ${E2[7]} ${E2[8]} ${E2[9]}\nf ${F2[0]} ${F2[1]} ${F2[2]} ${F2[3]} ${F2[4]} ${F2[5]} ${F2[6]} ${F2[7]} ${F2[8]} ${F2[9]}\ng ${G2[0]} ${G2[1]} ${G2[2]} ${G2[3]} ${G2[4]} ${G2[5]} ${G2[6]} ${G2[7]} ${G2[8]} ${G2[9]}\n`)
    
            }
    
          } else {
    
            msg.channel.send("You cant place that ship there!")
    
          }
    
        } else if (args[3].toString() == "H") {
    
          if(temp + 3 == 10) {
    
            if(E2[temp] == "x" && E2[temp + 1] == "x" && E2[temp + 2] == "x" && E2[temp - 1] == "x" && F2[temp] == "x" && F2[temp + 1] == "x" && F2[temp + 2] == "x" && F2[temp - 1] == "x" && G2[temp] == "x" && G2[temp + 1] == "x" && G2[temp + 2] == "x" && G2[temp - 1] == "x") {
    
              F2[temp] = "p";
              F2[temp + 1] = "p"; 
              F2[temp + 2] = "p"; 
    
              AllShips2[2] -= 1;
    
              Embeds.error(ChannelFP2, `/ 1 2 3 4 5 6 7 8 9 10\na ${A2[0]} ${A2[1]} ${A2[2]} ${A2[3]} ${A2[4]} ${A2[5]} ${A2[6]} ${A2[7]} ${A2[8]} ${A2[9]}\nb ${B2[0]} ${B2[1]} ${B2[2]} ${B2[3]} ${B2[4]} ${B2[5]} ${B2[6]} ${B2[7]} ${B2[8]} ${B2[9]}\nc ${C2[0]} ${C2[1]} ${C2[2]} ${C2[3]} ${C2[4]} ${C2[5]} ${C2[6]} ${C2[7]} ${C2[8]} ${C2[9]}\nd ${D2[0]} ${D2[1]} ${D2[2]} ${D2[3]} ${D2[4]} ${D2[5]} ${D2[6]} ${D2[7]} ${D2[8]} ${D2[9]}\ne ${E2[0]} ${E2[1]} ${E2[2]} ${E2[3]} ${E2[4]} ${E2[5]} ${E2[6]} ${E2[7]} ${E2[8]} ${E2[9]}\nf ${F2[0]} ${F2[1]} ${F2[2]} ${F2[3]} ${F2[4]} ${F2[5]} ${F2[6]} ${F2[7]} ${F2[8]} ${F2[9]}\ng ${G2[0]} ${G2[1]} ${G2[2]} ${G2[3]} ${G2[4]} ${G2[5]} ${G2[6]} ${G2[7]} ${G2[8]} ${G2[9]}\n`)
    
            } else {
    
              msg.channel.send("You cant place that ship there!")
    
            }
    
          } else if (temp + 3 < 10) {
    
            if(E2[temp] == "x" && E2[temp + 1] == "x" && E2[temp + 2] == "x" && E2[temp + 3] == "x" && E2[temp - 1] == "x" && F2[temp] == "x" && F2[temp + 1] == "x" && F2[temp + 2] == "x" && F2[temp + 3] == "x" && F2[temp - 1] == "x" && G2[temp] == "x" && G2[temp + 1] == "x" && G2[temp + 2] == "x" && G2[temp + 3] == "x" && G2[temp - 1] == "x") {
    
            F2[temp] = "p";
            F2[temp + 1] = "p"; 
            F2[temp + 2] = "p"; 
    
            AllShips2[2] -= 1;
    
            Embeds.error(ChannelFP2, `/ 1 2 3 4 5 6 7 8 9 10\na ${A2[0]} ${A2[1]} ${A2[2]} ${A2[3]} ${A2[4]} ${A2[5]} ${A2[6]} ${A2[7]} ${A2[8]} ${A2[9]}\nb ${B2[0]} ${B2[1]} ${B2[2]} ${B2[3]} ${B2[4]} ${B2[5]} ${B2[6]} ${B2[7]} ${B2[8]} ${B2[9]}\nc ${C2[0]} ${C2[1]} ${C2[2]} ${C2[3]} ${C2[4]} ${C2[5]} ${C2[6]} ${C2[7]} ${C2[8]} ${C2[9]}\nd ${D2[0]} ${D2[1]} ${D2[2]} ${D2[3]} ${D2[4]} ${D2[5]} ${D2[6]} ${D2[7]} ${D2[8]} ${D2[9]}\ne ${E2[0]} ${E2[1]} ${E2[2]} ${E2[3]} ${E2[4]} ${E2[5]} ${E2[6]} ${E2[7]} ${E2[8]} ${E2[9]}\nf ${F2[0]} ${F2[1]} ${F2[2]} ${F2[3]} ${F2[4]} ${F2[5]} ${F2[6]} ${F2[7]} ${F2[8]} ${F2[9]}\ng ${G2[0]} ${G2[1]} ${G2[2]} ${G2[3]} ${G2[4]} ${G2[5]} ${G2[6]} ${G2[7]} ${G2[8]} ${G2[9]}\n`)
    
          } else {
    
            msg.channel.send("You cant place that ship there!")
    
          }
    
        }
    
        }
    
      } else if(args[2].toString() == "M" && AllShips2[3] != 0) {
    
        if(args[3].toString() == "V") {
    
          if (temp > 0 && temp < 9) {
    
            if(D2[temp] == "x" && D2[temp + 1] == "x" && E2[temp] == "x" && E2[temp + 1] == "x" && D2[temp - 1] == "x" && E2[temp - 1] == "x" && F2[temp] == "x" && F2[temp + 1] == "x" && F2[temp - 1] == "x" && G2[temp] == "x" && G2[temp - 1] == "x" && G2[temp + 1] == "x") {
    
              E2[temp] = "p";
              F2[temp] = "p"; 
    
              AllShips2[3] -= 1;
    
              Embeds.error(ChannelFP2, `/ 1 2 3 4 5 6 7 8 9 10\na ${A2[0]} ${A2[1]} ${A2[2]} ${A2[3]} ${A2[4]} ${A2[5]} ${A2[6]} ${A2[7]} ${A2[8]} ${A2[9]}\nb ${B2[0]} ${B2[1]} ${B2[2]} ${B2[3]} ${B2[4]} ${B2[5]} ${B2[6]} ${B2[7]} ${B2[8]} ${B2[9]}\nc ${C2[0]} ${C2[1]} ${C2[2]} ${C2[3]} ${C2[4]} ${C2[5]} ${C2[6]} ${C2[7]} ${C2[8]} ${C2[9]}\nd ${D2[0]} ${D2[1]} ${D2[2]} ${D2[3]} ${D2[4]} ${D2[5]} ${D2[6]} ${D2[7]} ${D2[8]} ${D2[9]}\ne ${E2[0]} ${E2[1]} ${E2[2]} ${E2[3]} ${E2[4]} ${E2[5]} ${E2[6]} ${E2[7]} ${E2[8]} ${E2[9]}\nf ${F2[0]} ${F2[1]} ${F2[2]} ${F2[3]} ${F2[4]} ${F2[5]} ${F2[6]} ${F2[7]} ${F2[8]} ${F2[9]}\ng ${G2[0]} ${G2[1]} ${G2[2]} ${G2[3]} ${G2[4]} ${G2[5]} ${G2[6]} ${G2[7]} ${G2[8]} ${G2[9]}\n`)
    
            }
    
          } else if (temp == 9) {
    
            if(D2[temp] == "x" && D2[temp - 1] == "x" && E2[temp] == "x" && E2[temp - 1] == "x" && F2[temp] == "x" && F2[temp - 1] == "x" && G2[temp] == "x" && G2[temp - 1] == "x") {
    
              E2[temp] = "p";
              F2[temp] = "p"; 
    
              AllShips2[3] -= 1;
    
              Embeds.error(ChannelFP2, `/ 1 2 3 4 5 6 7 8 9 10\na ${A2[0]} ${A2[1]} ${A2[2]} ${A2[3]} ${A2[4]} ${A2[5]} ${A2[6]} ${A2[7]} ${A2[8]} ${A2[9]}\nb ${B2[0]} ${B2[1]} ${B2[2]} ${B2[3]} ${B2[4]} ${B2[5]} ${B2[6]} ${B2[7]} ${B2[8]} ${B2[9]}\nc ${C2[0]} ${C2[1]} ${C2[2]} ${C2[3]} ${C2[4]} ${C2[5]} ${C2[6]} ${C2[7]} ${C2[8]} ${C2[9]}\nd ${D2[0]} ${D2[1]} ${D2[2]} ${D2[3]} ${D2[4]} ${D2[5]} ${D2[6]} ${D2[7]} ${D2[8]} ${D2[9]}\ne ${E2[0]} ${E2[1]} ${E2[2]} ${E2[3]} ${E2[4]} ${E2[5]} ${E2[6]} ${E2[7]} ${E2[8]} ${E2[9]}\nf ${F2[0]} ${F2[1]} ${F2[2]} ${F2[3]} ${F2[4]} ${F2[5]} ${F2[6]} ${F2[7]} ${F2[8]} ${F2[9]}\ng ${G2[0]} ${G2[1]} ${G2[2]} ${G2[3]} ${G2[4]} ${G2[5]} ${G2[6]} ${G2[7]} ${G2[8]} ${G2[9]}\n`)
    
            }
    
          } else {
    
            msg.channel.send("You cant place that ship there!")
    
          }
    
        } else if (args[3].toString() == "H") {
    
          if(temp + 2 == 10) {
    
            if(E2[temp] == "x" && E2[temp + 1] == "x" && E2[temp - 1] == "x" && F2[temp] == "x" && F2[temp + 1] == "x" && F2[temp - 1] == "x" && G2[temp] == "x" && G2[temp + 1] == "x" && G2[temp - 1] == "x") {
    
              F2[temp] = "p";
              F2[temp + 1] = "p"; 
    
              AllShips2[3] -= 1;
    
              Embeds.error(ChannelFP2, `/ 1 2 3 4 5 6 7 8 9 10\na ${A2[0]} ${A2[1]} ${A2[2]} ${A2[3]} ${A2[4]} ${A2[5]} ${A2[6]} ${A2[7]} ${A2[8]} ${A2[9]}\nb ${B2[0]} ${B2[1]} ${B2[2]} ${B2[3]} ${B2[4]} ${B2[5]} ${B2[6]} ${B2[7]} ${B2[8]} ${B2[9]}\nc ${C2[0]} ${C2[1]} ${C2[2]} ${C2[3]} ${C2[4]} ${C2[5]} ${C2[6]} ${C2[7]} ${C2[8]} ${C2[9]}\nd ${D2[0]} ${D2[1]} ${D2[2]} ${D2[3]} ${D2[4]} ${D2[5]} ${D2[6]} ${D2[7]} ${D2[8]} ${D2[9]}\ne ${E2[0]} ${E2[1]} ${E2[2]} ${E2[3]} ${E2[4]} ${E2[5]} ${E2[6]} ${E2[7]} ${E2[8]} ${E2[9]}\nf ${F2[0]} ${F2[1]} ${F2[2]} ${F2[3]} ${F2[4]} ${F2[5]} ${F2[6]} ${F2[7]} ${F2[8]} ${F2[9]}\ng ${G2[0]} ${G2[1]} ${G2[2]} ${G2[3]} ${G2[4]} ${G2[5]} ${G2[6]} ${G2[7]} ${G2[8]} ${G2[9]}\n`)
    
            } else {
    
              msg.channel.send("You cant place that ship there!")
    
            }
    
          } else if (temp + 2 < 10) {
    
          if(E2[temp] == "x" && E2[temp + 1] == "x" && E2[temp + 2] == "x" && E2[temp - 1] == "x" && F2[temp] == "x" && F2[temp + 1] == "x" && F2[temp + 2] == "x" && F2[temp - 1] == "x" && G2[temp] == "x" && G2[temp + 1] == "x" && G2[temp + 2] == "x" && G2[temp - 1] == "x") {
    
            F2[temp] = "p";
            F2[temp + 1] = "p"; 
    
            AllShips2[3] -= 1;
    
            Embeds.error(ChannelFP2, `/ 1 2 3 4 5 6 7 8 9 10\na ${A2[0]} ${A2[1]} ${A2[2]} ${A2[3]} ${A2[4]} ${A2[5]} ${A2[6]} ${A2[7]} ${A2[8]} ${A2[9]}\nb ${B2[0]} ${B2[1]} ${B2[2]} ${B2[3]} ${B2[4]} ${B2[5]} ${B2[6]} ${B2[7]} ${B2[8]} ${B2[9]}\nc ${C2[0]} ${C2[1]} ${C2[2]} ${C2[3]} ${C2[4]} ${C2[5]} ${C2[6]} ${C2[7]} ${C2[8]} ${C2[9]}\nd ${D2[0]} ${D2[1]} ${D2[2]} ${D2[3]} ${D2[4]} ${D2[5]} ${D2[6]} ${D2[7]} ${D2[8]} ${D2[9]}\ne ${E2[0]} ${E2[1]} ${E2[2]} ${E2[3]} ${E2[4]} ${E2[5]} ${E2[6]} ${E2[7]} ${E2[8]} ${E2[9]}\nf ${F2[0]} ${F2[1]} ${F2[2]} ${F2[3]} ${F2[4]} ${F2[5]} ${F2[6]} ${F2[7]} ${F2[8]} ${F2[9]}\ng ${G2[0]} ${G2[1]} ${G2[2]} ${G2[3]} ${G2[4]} ${G2[5]} ${G2[6]} ${G2[7]} ${G2[8]} ${G2[9]}\n`)
    
          } else {
    
            msg.channel.send("You cant place that ship there!")
    
          }
    
        }
    
        }
    
      } else {
    
        msg.channel.send("You used all ships of this kind")
    
      }
    
    } else if (temp == 0) {
    
      if(args[2].toString() == "B" && AllShips2[0] != 0) {
    
        if(args[3].toString() == "V") {
    
          if(A2[temp] == "x" && B2[temp] == "x" && B2[temp + 1] == "x" && C2[temp] == "x" && A2[temp + 1] == "x" && B2[temp + 1] == "x" && C2[temp + 1] == "x" && D2[temp] == "x" && D2[temp + 1] == "x" && E2[temp] == "x" && E2[temp + 1] == "x" && F2[temp] == "x" && F2[temp + 1] == "x" && G2[temp] == "x" && G2[temp + 1] == "x") {
    
            B2[temp] = "p";
            C2[temp] = "p"; 
            D2[temp] = "p";
            E2[temp] = "p";
            F2[temp] = "p";
    
            AllShips2[0] -= 1;
    
            Embeds.error(ChannelFP2, `/ 1 2 3 4 5 6 7 8 9 10\na ${A2[0]} ${A2[1]} ${A2[2]} ${A2[3]} ${A2[4]} ${A2[5]} ${A2[6]} ${A2[7]} ${A2[8]} ${A2[9]}\nb ${B2[0]} ${B2[1]} ${B2[2]} ${B2[3]} ${B2[4]} ${B2[5]} ${B2[6]} ${B2[7]} ${B2[8]} ${B2[9]}\nc ${C2[0]} ${C2[1]} ${C2[2]} ${C2[3]} ${C2[4]} ${C2[5]} ${C2[6]} ${C2[7]} ${C2[8]} ${C2[9]}\nd ${D2[0]} ${D2[1]} ${D2[2]} ${D2[3]} ${D2[4]} ${D2[5]} ${D2[6]} ${D2[7]} ${D2[8]} ${D2[9]}\ne ${E2[0]} ${E2[1]} ${E2[2]} ${E2[3]} ${E2[4]} ${E2[5]} ${E2[6]} ${E2[7]} ${E2[8]} ${E2[9]}\nf ${F2[0]} ${F2[1]} ${F2[2]} ${F2[3]} ${F2[4]} ${F2[5]} ${F2[6]} ${F2[7]} ${F2[8]} ${F2[9]}\ng ${G2[0]} ${G2[1]} ${G2[2]} ${G2[3]} ${G2[4]} ${G2[5]} ${G2[6]} ${G2[7]} ${G2[8]} ${G2[9]}\n`)
    
          } else {
    
          msg.channel.send("You cant place that ship there!")
    
        }
    
        } else if (args[3].toString() == "H") {
    
          if(E2[temp] == "x" && E2[temp + 1] == "x" && E2[temp + 2] == "x" && E2[temp + 3] == "x" && E2[temp + 4] == "x" && E2[temp + 5] == "x" && F2[temp] == "x" && F2[temp + 1] == "x" && F2[temp + 2] == "x" && F2[temp + 3] == "x" && F2[temp + 4] == "x" && F2[temp +5] == "x" && G2[temp] == "x" && G2[temp + 1] == "x" && G2[temp + 2] == "x" && G2[temp + 3] == "x" && G2[temp + 4] == "x" && G2[temp + 5] == "x") {
    
            F2[temp] = "p";
            F2[temp + 1] = "p"; 
            F2[temp + 2] = "p"; 
            F2[temp + 3] = "p";
            F2[temp + 4] = "p";
    
            AllShips2[0] -= 1;
    
            Embeds.error(ChannelFP2, `/ 1 2 3 4 5 6 7 8 9 10\na ${A2[0]} ${A2[1]} ${A2[2]} ${A2[3]} ${A2[4]} ${A2[5]} ${A2[6]} ${A2[7]} ${A2[8]} ${A2[9]}\nb ${B2[0]} ${B2[1]} ${B2[2]} ${B2[3]} ${B2[4]} ${B2[5]} ${B2[6]} ${B2[7]} ${B2[8]} ${B2[9]}\nc ${C2[0]} ${C2[1]} ${C2[2]} ${C2[3]} ${C2[4]} ${C2[5]} ${C2[6]} ${C2[7]} ${C2[8]} ${C2[9]}\nd ${D2[0]} ${D2[1]} ${D2[2]} ${D2[3]} ${D2[4]} ${D2[5]} ${D2[6]} ${D2[7]} ${D2[8]} ${D2[9]}\ne ${E2[0]} ${E2[1]} ${E2[2]} ${E2[3]} ${E2[4]} ${E2[5]} ${E2[6]} ${E2[7]} ${E2[8]} ${E2[9]}\nf ${F2[0]} ${F2[1]} ${F2[2]} ${F2[3]} ${F2[4]} ${F2[5]} ${F2[6]} ${F2[7]} ${F2[8]} ${F2[9]}\ng ${G2[0]} ${G2[1]} ${G2[2]} ${G2[3]} ${G2[4]} ${G2[5]} ${G2[6]} ${G2[7]} ${G2[8]} ${G2[9]}\n`)
    
          } else {
    
            msg.channel.send("You cant place that ship there!")
    
          }
    
        }
    
      } else if(args[2].toString() == "C" && AllShips2[1] != 0) {
    
        if(args[3].toString() == "V") {
    
          if(B2[temp] == "x" && C2[temp] == "x" && C2[temp + 1] == "x" && D2[temp] == "x" && B2[temp + 1] == "x" && C2[temp + 1] == "x" && D2[temp + 1] == "x" && E2[temp] == "x" && E2[temp + 1] == "x" && F2[temp] == "x" && F2[temp + 1] == "x" && G2[temp] == "x" && G2[temp + 1] == "x") {
    
            C2[temp] = "p";
            D2[temp] = "p";
            E2[temp] = "p";
            F2[temp] = "p"; 
    
            AllShips2[1] -= 1;
    
            Embeds.error(ChannelFP2, `/ 1 2 3 4 5 6 7 8 9 10\na ${A2[0]} ${A2[1]} ${A2[2]} ${A2[3]} ${A2[4]} ${A2[5]} ${A2[6]} ${A2[7]} ${A2[8]} ${A2[9]}\nb ${B2[0]} ${B2[1]} ${B2[2]} ${B2[3]} ${B2[4]} ${B2[5]} ${B2[6]} ${B2[7]} ${B2[8]} ${B2[9]}\nc ${C2[0]} ${C2[1]} ${C2[2]} ${C2[3]} ${C2[4]} ${C2[5]} ${C2[6]} ${C2[7]} ${C2[8]} ${C2[9]}\nd ${D2[0]} ${D2[1]} ${D2[2]} ${D2[3]} ${D2[4]} ${D2[5]} ${D2[6]} ${D2[7]} ${D2[8]} ${D2[9]}\ne ${E2[0]} ${E2[1]} ${E2[2]} ${E2[3]} ${E2[4]} ${E2[5]} ${E2[6]} ${E2[7]} ${E2[8]} ${E2[9]}\nf ${F2[0]} ${F2[1]} ${F2[2]} ${F2[3]} ${F2[4]} ${F2[5]} ${F2[6]} ${F2[7]} ${F2[8]} ${F2[9]}\ng ${G2[0]} ${G2[1]} ${G2[2]} ${G2[3]} ${G2[4]} ${G2[5]} ${G2[6]} ${G2[7]} ${G2[8]} ${G2[9]}\n`)
    
          } else {
    
            msg.channel.send("You cant place that ship there!")
    
          }
    
        } else if (args[3].toString() == "H") {
    
          if(E2[temp] == "x" && E2[temp + 1] == "x" && E2[temp + 2] == "x" && E2[temp + 3] == "x" && E2[temp + 4] == "x" && F2[temp] == "x" && F2[temp + 1] == "x" && F2[temp + 2] == "x" && F2[temp + 3] == "x" && F2[temp + 4] == "x" && G2[temp] == "x" && G2[temp + 1] == "x" && G2[temp + 2] == "x" && G2[temp + 3] == "x" && G2[temp + 4] == "x") {
    
            F2[temp] = "p";
            F2[temp + 1] = "p"; 
            F2[temp + 2] = "p"; 
            F2[temp + 3] = "p";
    
            AllShips2[1] -= 1;
    
            Embeds.error(ChannelFP2, `/ 1 2 3 4 5 6 7 8 9 10\na ${A2[0]} ${A2[1]} ${A2[2]} ${A2[3]} ${A2[4]} ${A2[5]} ${A2[6]} ${A2[7]} ${A2[8]} ${A2[9]}\nb ${B2[0]} ${B2[1]} ${B2[2]} ${B2[3]} ${B2[4]} ${B2[5]} ${B2[6]} ${B2[7]} ${B2[8]} ${B2[9]}\nc ${C2[0]} ${C2[1]} ${C2[2]} ${C2[3]} ${C2[4]} ${C2[5]} ${C2[6]} ${C2[7]} ${C2[8]} ${C2[9]}\nd ${D2[0]} ${D2[1]} ${D2[2]} ${D2[3]} ${D2[4]} ${D2[5]} ${D2[6]} ${D2[7]} ${D2[8]} ${D2[9]}\ne ${E2[0]} ${E2[1]} ${E2[2]} ${E2[3]} ${E2[4]} ${E2[5]} ${E2[6]} ${E2[7]} ${E2[8]} ${E2[9]}\nf ${F2[0]} ${F2[1]} ${F2[2]} ${F2[3]} ${F2[4]} ${F2[5]} ${F2[6]} ${F2[7]} ${F2[8]} ${F2[9]}\ng ${G2[0]} ${G2[1]} ${G2[2]} ${G2[3]} ${G2[4]} ${G2[5]} ${G2[6]} ${G2[7]} ${G2[8]} ${G2[9]}\n`)
    
          } else {
    
            msg.channel.send("You cant place that ship there!")
    
          }
    
        }
    
      } else if(args[2].toString() == "F" && AllShips2[2] != 0) {
    
        if(args[3].toString() == "V") {
    
          if(C2[temp] == "x" && C2[temp + 1] == "x" && D2[temp] == "x" && C2[temp + 1] == "x" && D2[temp + 1] == "x" && E2[temp] == "x" && E2[temp + 1] == "x" && F2[temp] == "x" && F2[temp + 1] == "x" && G2[temp] == "x" && G2[temp + 1] == "x") {
    
            D2[temp] = "p";
            E2[temp] = "p";
            F2[temp] = "p"; 
    
            AllShips2[2] -= 1;
    
            Embeds.error(ChannelFP2, `/ 1 2 3 4 5 6 7 8 9 10\na ${A2[0]} ${A2[1]} ${A2[2]} ${A2[3]} ${A2[4]} ${A2[5]} ${A2[6]} ${A2[7]} ${A2[8]} ${A2[9]}\nb ${B2[0]} ${B2[1]} ${B2[2]} ${B2[3]} ${B2[4]} ${B2[5]} ${B2[6]} ${B2[7]} ${B2[8]} ${B2[9]}\nc ${C2[0]} ${C2[1]} ${C2[2]} ${C2[3]} ${C2[4]} ${C2[5]} ${C2[6]} ${C2[7]} ${C2[8]} ${C2[9]}\nd ${D2[0]} ${D2[1]} ${D2[2]} ${D2[3]} ${D2[4]} ${D2[5]} ${D2[6]} ${D2[7]} ${D2[8]} ${D2[9]}\ne ${E2[0]} ${E2[1]} ${E2[2]} ${E2[3]} ${E2[4]} ${E2[5]} ${E2[6]} ${E2[7]} ${E2[8]} ${E2[9]}\nf ${F2[0]} ${F2[1]} ${F2[2]} ${F2[3]} ${F2[4]} ${F2[5]} ${F2[6]} ${F2[7]} ${F2[8]} ${F2[9]}\ng ${G2[0]} ${G2[1]} ${G2[2]} ${G2[3]} ${G2[4]} ${G2[5]} ${G2[6]} ${G2[7]} ${G2[8]} ${G2[9]}\n`)
    
          } else {
    
            msg.channel.send("You cant place that ship there!")
    
          }
    
        } else if (args[3].toString() == "H") {
    
          if(E2[temp] == "x" && E2[temp + 1] == "x" && E2[temp + 2] == "x" && E2[temp + 3] == "x" && F2[temp] == "x" && F2[temp + 1] == "x" && F2[temp + 2] == "x" && F2[temp + 3] == "x" && G2[temp] == "x" && G2[temp + 1] == "x" && G2[temp + 2] == "x" && G2[temp + 3] == "x") {
    
            F2[temp] = "p";
            F2[temp + 1] = "p"; 
            F2[temp + 2] = "p"; 
    
            AllShips2[2] -= 1;
    
            Embeds.error(ChannelFP2, `/ 1 2 3 4 5 6 7 8 9 10\na ${A2[0]} ${A2[1]} ${A2[2]} ${A2[3]} ${A2[4]} ${A2[5]} ${A2[6]} ${A2[7]} ${A2[8]} ${A2[9]}\nb ${B2[0]} ${B2[1]} ${B2[2]} ${B2[3]} ${B2[4]} ${B2[5]} ${B2[6]} ${B2[7]} ${B2[8]} ${B2[9]}\nc ${C2[0]} ${C2[1]} ${C2[2]} ${C2[3]} ${C2[4]} ${C2[5]} ${C2[6]} ${C2[7]} ${C2[8]} ${C2[9]}\nd ${D2[0]} ${D2[1]} ${D2[2]} ${D2[3]} ${D2[4]} ${D2[5]} ${D2[6]} ${D2[7]} ${D2[8]} ${D2[9]}\ne ${E2[0]} ${E2[1]} ${E2[2]} ${E2[3]} ${E2[4]} ${E2[5]} ${E2[6]} ${E2[7]} ${E2[8]} ${E2[9]}\nf ${F2[0]} ${F2[1]} ${F2[2]} ${F2[3]} ${F2[4]} ${F2[5]} ${F2[6]} ${F2[7]} ${F2[8]} ${F2[9]}\ng ${G2[0]} ${G2[1]} ${G2[2]} ${G2[3]} ${G2[4]} ${G2[5]} ${G2[6]} ${G2[7]} ${G2[8]} ${G2[9]}\n`)
    
          } else {
    
            msg.channel.send("You cant place that ship there!")
    
          }
    
        }
    
      } else if(args[2].toString() == "M" && AllShips2[3] != 0) {
    
        if(args[3].toString() == "V") {
    
          if(temp == 0) {
    
            if(D2[temp] == "x" && D2[temp + 1] == "x" && E2[temp] == "x" && E2[temp + 1] == "x" && F2[temp] == "x" && F2[temp + 1] == "x" && G2[temp] == "x" && G2[temp + 1] == "x") {
    
              E2[temp] = "p";
              F2[temp] = "p"; 
    
              AllShips2[3] -= 1;
    
              Embeds.error(ChannelFP2, `/ 1 2 3 4 5 6 7 8 9 10\na ${A2[0]} ${A2[1]} ${A2[2]} ${A2[3]} ${A2[4]} ${A2[5]} ${A2[6]} ${A2[7]} ${A2[8]} ${A2[9]}\nb ${B2[0]} ${B2[1]} ${B2[2]} ${B2[3]} ${B2[4]} ${B2[5]} ${B2[6]} ${B2[7]} ${B2[8]} ${B2[9]}\nc ${C2[0]} ${C2[1]} ${C2[2]} ${C2[3]} ${C2[4]} ${C2[5]} ${C2[6]} ${C2[7]} ${C2[8]} ${C2[9]}\nd ${D2[0]} ${D2[1]} ${D2[2]} ${D2[3]} ${D2[4]} ${D2[5]} ${D2[6]} ${D2[7]} ${D2[8]} ${D2[9]}\ne ${E2[0]} ${E2[1]} ${E2[2]} ${E2[3]} ${E2[4]} ${E2[5]} ${E2[6]} ${E2[7]} ${E2[8]} ${E2[9]}\nf ${F2[0]} ${F2[1]} ${F2[2]} ${F2[3]} ${F2[4]} ${F2[5]} ${F2[6]} ${F2[7]} ${F2[8]} ${F2[9]}\ng ${G2[0]} ${G2[1]} ${G2[2]} ${G2[3]} ${G2[4]} ${G2[5]} ${G2[6]} ${G2[7]} ${G2[8]} ${G2[9]}\n`)
    
            } else {
    
              msg.channel.send("You cant place that ship there!")
    
            }
    
          }
    
        } else if (args[3].toString() == "H") {
    
          if(E2[temp] == "x" && E2[temp + 1] == "x" && E2[temp + 2] == "x" && F2[temp] == "x" && F2[temp + 1] == "x" && F2[temp + 2] == "x" && G2[temp] == "x" && G2[temp + 1] == "x" && G2[temp + 2] == "x") {
    
            F2[temp] = "p";
            F2[temp + 1] = "p"; 
    
            AllShips2[3] -= 1;
    
            Embeds.error(ChannelFP2, `/ 1 2 3 4 5 6 7 8 9 10\na ${A2[0]} ${A2[1]} ${A2[2]} ${A2[3]} ${A2[4]} ${A2[5]} ${A2[6]} ${A2[7]} ${A2[8]} ${A2[9]}\nb ${B2[0]} ${B2[1]} ${B2[2]} ${B2[3]} ${B2[4]} ${B2[5]} ${B2[6]} ${B2[7]} ${B2[8]} ${B2[9]}\nc ${C2[0]} ${C2[1]} ${C2[2]} ${C2[3]} ${C2[4]} ${C2[5]} ${C2[6]} ${C2[7]} ${C2[8]} ${C2[9]}\nd ${D2[0]} ${D2[1]} ${D2[2]} ${D2[3]} ${D2[4]} ${D2[5]} ${D2[6]} ${D2[7]} ${D2[8]} ${D2[9]}\ne ${E2[0]} ${E2[1]} ${E2[2]} ${E2[3]} ${E2[4]} ${E2[5]} ${E2[6]} ${E2[7]} ${E2[8]} ${E2[9]}\nf ${F2[0]} ${F2[1]} ${F2[2]} ${F2[3]} ${F2[4]} ${F2[5]} ${F2[6]} ${F2[7]} ${F2[8]} ${F2[9]}\ng ${G2[0]} ${G2[1]} ${G2[2]} ${G2[3]} ${G2[4]} ${G2[5]} ${G2[6]} ${G2[7]} ${G2[8]} ${G2[9]}\n`)
    
          } else {
    
            msg.channel.send("You cant place that ship there!")
    
          }
    
        }
    
      } else {
    
        msg.channel.send("You used all ships of this kind")
    
      }
    
    }
    
      } else if(args[0].toString() == "G") {
    
    var temp = parseInt(args[1] - 1)
    
    if(temp > 0) {
    
      if(args[2].toString() == "B" && AllShips2[0] != 0) {
    
        if(args[3].toString() == "V") {
    
          if (temp > 0 && temp < 9) {
    
            if(B2[temp] == "x" && C2[temp] == "x" && B2[temp + 1] == "x" && C2[temp + 1] == "x" && D2[temp] == "x" && D2[temp + 1] == "x" && B2[temp - 1] == "x" && C2[temp - 1] == "x" && D2[temp - 1] == "x" && E2[temp] == "x" && E2[temp + 1] == "x" && E2[temp - 1] == "x" && F2[temp] == "x" && F2[temp - 1] == "x" && F2[temp + 1] == "x" && G2[temp] == "x" && G2[temp - 1] == "x" && G2[temp + 1] == "x") {
    
              C2[temp] = "p";
              D2[temp] = "p";
              E2[temp] = "p"; 
              F2[temp] = "p";
              G2[temp] = "p";
    
              AllShips2[0] -= 1;
    
              Embeds.error(ChannelFP2, `/ 1 2 3 4 5 6 7 8 9 10\na ${A2[0]} ${A2[1]} ${A2[2]} ${A2[3]} ${A2[4]} ${A2[5]} ${A2[6]} ${A2[7]} ${A2[8]} ${A2[9]}\nb ${B2[0]} ${B2[1]} ${B2[2]} ${B2[3]} ${B2[4]} ${B2[5]} ${B2[6]} ${B2[7]} ${B2[8]} ${B2[9]}\nc ${C2[0]} ${C2[1]} ${C2[2]} ${C2[3]} ${C2[4]} ${C2[5]} ${C2[6]} ${C2[7]} ${C2[8]} ${C2[9]}\nd ${D2[0]} ${D2[1]} ${D2[2]} ${D2[3]} ${D2[4]} ${D2[5]} ${D2[6]} ${D2[7]} ${D2[8]} ${D2[9]}\ne ${E2[0]} ${E2[1]} ${E2[2]} ${E2[3]} ${E2[4]} ${E2[5]} ${E2[6]} ${E2[7]} ${E2[8]} ${E2[9]}\nf ${F2[0]} ${F2[1]} ${F2[2]} ${F2[3]} ${F2[4]} ${F2[5]} ${F2[6]} ${F2[7]} ${F2[8]} ${F2[9]}\ng ${G2[0]} ${G2[1]} ${G2[2]} ${G2[3]} ${G2[4]} ${G2[5]} ${G2[6]} ${G2[7]} ${G2[8]} ${G2[9]}\n`)
    
            }
    
          } else if (temp == 9) {
    
            if(B2[temp] == "x" && C2[temp] == "x" && D2[temp] == "x" && B2[temp - 1] == "x" && C2[temp - 1] == "x" && D2[temp - 1] == "x" && E2[temp] == "x" && E2[temp - 1] == "x" && F2[temp] == "x" && F2[temp - 1] == "x" && G2[temp] == "x" && G2[temp - 1] == "x") {
    
              C2[temp] = "p";
              D2[temp] = "p"; 
              E2[temp] = "p";
              F2[temp] = "p";
              G2[temp] = "p";
    
              AllShips2[0] -= 1;
    
              Embeds.error(ChannelFP2, `/ 1 2 3 4 5 6 7 8 9 10\na ${A2[0]} ${A2[1]} ${A2[2]} ${A2[3]} ${A2[4]} ${A2[5]} ${A2[6]} ${A2[7]} ${A2[8]} ${A2[9]}\nb ${B2[0]} ${B2[1]} ${B2[2]} ${B2[3]} ${B2[4]} ${B2[5]} ${B2[6]} ${B2[7]} ${B2[8]} ${B2[9]}\nc ${C2[0]} ${C2[1]} ${C2[2]} ${C2[3]} ${C2[4]} ${C2[5]} ${C2[6]} ${C2[7]} ${C2[8]} ${C2[9]}\nd ${D2[0]} ${D2[1]} ${D2[2]} ${D2[3]} ${D2[4]} ${D2[5]} ${D2[6]} ${D2[7]} ${D2[8]} ${D2[9]}\ne ${E2[0]} ${E2[1]} ${E2[2]} ${E2[3]} ${E2[4]} ${E2[5]} ${E2[6]} ${E2[7]} ${E2[8]} ${E2[9]}\nf ${F2[0]} ${F2[1]} ${F2[2]} ${F2[3]} ${F2[4]} ${F2[5]} ${F2[6]} ${F2[7]} ${F2[8]} ${F2[9]}\ng ${G2[0]} ${G2[1]} ${G2[2]} ${G2[3]} ${G2[4]} ${G2[5]} ${G2[6]} ${G2[7]} ${G2[8]} ${G2[9]}\n`)
    
            }
    
          } else {
    
            msg.channel.send("You cant place that ship there!")
    
          }
    
        } else if (args[3].toString() == "H") {
    
          if(temp + 5 == 10) {
    
            if(F2[temp] == "x" && F2[temp + 1] == "x" && F2[temp + 2] == "x" && F2[temp + 3] == "x" && F2[temp + 4] == "x" && F2[temp - 1] == "x" && G2[temp] == "x" && G2[temp + 1] == "x" && G2[temp + 2] == "x" && G2[temp + 3] == "x" && G2[temp + 4] == "x" && G2[temp - 1] == "x") {
    
              G2[temp] = "p";
              G2[temp + 1] = "p"; 
              G2[temp + 2] = "p"; 
              G2[temp + 3] = "p";
              G2[temp + 4] = "p";
    
              AllShips2[0] -= 1;
    
              Embeds.error(ChannelFP2, `/ 1 2 3 4 5 6 7 8 9 10\na ${A2[0]} ${A2[1]} ${A2[2]} ${A2[3]} ${A2[4]} ${A2[5]} ${A2[6]} ${A2[7]} ${A2[8]} ${A2[9]}\nb ${B2[0]} ${B2[1]} ${B2[2]} ${B2[3]} ${B2[4]} ${B2[5]} ${B2[6]} ${B2[7]} ${B2[8]} ${B2[9]}\nc ${C2[0]} ${C2[1]} ${C2[2]} ${C2[3]} ${C2[4]} ${C2[5]} ${C2[6]} ${C2[7]} ${C2[8]} ${C2[9]}\nd ${D2[0]} ${D2[1]} ${D2[2]} ${D2[3]} ${D2[4]} ${D2[5]} ${D2[6]} ${D2[7]} ${D2[8]} ${D2[9]}\ne ${E2[0]} ${E2[1]} ${E2[2]} ${E2[3]} ${E2[4]} ${E2[5]} ${E2[6]} ${E2[7]} ${E2[8]} ${E2[9]}\nf ${F2[0]} ${F2[1]} ${F2[2]} ${F2[3]} ${F2[4]} ${F2[5]} ${F2[6]} ${F2[7]} ${F2[8]} ${F2[9]}\ng ${G2[0]} ${G2[1]} ${G2[2]} ${G2[3]} ${G2[4]} ${G2[5]} ${G2[6]} ${G2[7]} ${G2[8]} ${G2[9]}\n`)
    
            } else {
    
              msg.channel.send("You cant place that ship there!")
    
            }
            
          } else if (temp + 5 < 10) {
    
          if(F2[temp] == "x" && F2[temp + 1] == "x" && F2[temp + 2] == "x" && F2[temp + 3] == "x" && F2[temp + 4] == "x" && F2[temp - 1] == "x" && G2[temp] == "x" && G2[temp + 1] == "x" && G2[temp + 2] == "x" && G2[temp + 3] == "x" && G2[temp + 4] == "x" && G2[temp - 1] == "x" && F2[temp + 5] == "x" && G2[temp + 5] == "x") {
    
            G2[temp] = "p";
            G2[temp + 1] = "p"; 
            G2[temp + 2] = "p"; 
            G2[temp + 3] = "p";
            G2[temp + 4] = "p";
    
            AllShips2[0] -= 1;
    
            Embeds.error(ChannelFP2, `/ 1 2 3 4 5 6 7 8 9 10\na ${A2[0]} ${A2[1]} ${A2[2]} ${A2[3]} ${A2[4]} ${A2[5]} ${A2[6]} ${A2[7]} ${A2[8]} ${A2[9]}\nb ${B2[0]} ${B2[1]} ${B2[2]} ${B2[3]} ${B2[4]} ${B2[5]} ${B2[6]} ${B2[7]} ${B2[8]} ${B2[9]}\nc ${C2[0]} ${C2[1]} ${C2[2]} ${C2[3]} ${C2[4]} ${C2[5]} ${C2[6]} ${C2[7]} ${C2[8]} ${C2[9]}\nd ${D2[0]} ${D2[1]} ${D2[2]} ${D2[3]} ${D2[4]} ${D2[5]} ${D2[6]} ${D2[7]} ${D2[8]} ${D2[9]}\ne ${E2[0]} ${E2[1]} ${E2[2]} ${E2[3]} ${E2[4]} ${E2[5]} ${E2[6]} ${E2[7]} ${E2[8]} ${E2[9]}\nf ${F2[0]} ${F2[1]} ${F2[2]} ${F2[3]} ${F2[4]} ${F2[5]} ${F2[6]} ${F2[7]} ${F2[8]} ${F2[9]}\ng ${G2[0]} ${G2[1]} ${G2[2]} ${G2[3]} ${G2[4]} ${G2[5]} ${G2[6]} ${G2[7]} ${G2[8]} ${G2[9]}\n`)
    
          } else {
    
            msg.channel.send("You cant place that ship there!")
    
          }
    
        }
    
        }
    
      } else if(args[2].toString() == "C" && AllShips2[1] != 0) {
    
        if(args[3].toString() == "V") {
    
          if (temp > 0 && temp < 9) {
    
            if(C2[temp] == "x" && D2[temp] == "x" && C2[temp + 1] == "x" && D2[temp + 1] == "x" && E2[temp] == "x" && E2[temp + 1] == "x" && C2[temp - 1] == "x" && D2[temp - 1] == "x" && E2[temp - 1] == "x" && F2[temp] == "x" && F2[temp + 1] == "x" && F2[temp - 1] == "x" && G2[temp] == "x" && G2[temp - 1] == "x" && G2[temp + 1] == "x") {
    
              D2[temp] = "p";
              E2[temp] = "p";
              F2[temp] = "p"; 
              G2[temp] = "p";
    
              AllShips2[1] -= 1;
    
              Embeds.error(ChannelFP2, `/ 1 2 3 4 5 6 7 8 9 10\na ${A2[0]} ${A2[1]} ${A2[2]} ${A2[3]} ${A2[4]} ${A2[5]} ${A2[6]} ${A2[7]} ${A2[8]} ${A2[9]}\nb ${B2[0]} ${B2[1]} ${B2[2]} ${B2[3]} ${B2[4]} ${B2[5]} ${B2[6]} ${B2[7]} ${B2[8]} ${B2[9]}\nc ${C2[0]} ${C2[1]} ${C2[2]} ${C2[3]} ${C2[4]} ${C2[5]} ${C2[6]} ${C2[7]} ${C2[8]} ${C2[9]}\nd ${D2[0]} ${D2[1]} ${D2[2]} ${D2[3]} ${D2[4]} ${D2[5]} ${D2[6]} ${D2[7]} ${D2[8]} ${D2[9]}\ne ${E2[0]} ${E2[1]} ${E2[2]} ${E2[3]} ${E2[4]} ${E2[5]} ${E2[6]} ${E2[7]} ${E2[8]} ${E2[9]}\nf ${F2[0]} ${F2[1]} ${F2[2]} ${F2[3]} ${F2[4]} ${F2[5]} ${F2[6]} ${F2[7]} ${F2[8]} ${F2[9]}\ng ${G2[0]} ${G2[1]} ${G2[2]} ${G2[3]} ${G2[4]} ${G2[5]} ${G2[6]} ${G2[7]} ${G2[8]} ${G2[9]}\n`)
    
            }
    
          } else if (temp == 9) {
    
            if(C2[temp] == "x" && D2[temp] == "x" && E2[temp] == "x" && C2[temp - 1] == "x" && D2[temp - 1] == "x" && E2[temp - 1] == "x" && F2[temp] == "x" && F2[temp - 1] == "x" && G2[temp] == "x" && G2[temp - 1] == "x") {
    
              D2[temp] = "p";
              E2[temp] = "p"; 
              F2[temp] = "p";
              G2[temp] = "p";
    
              AllShips2[1] -= 1;
    
              Embeds.error(ChannelFP2, `/ 1 2 3 4 5 6 7 8 9 10\na ${A2[0]} ${A2[1]} ${A2[2]} ${A2[3]} ${A2[4]} ${A2[5]} ${A2[6]} ${A2[7]} ${A2[8]} ${A2[9]}\nb ${B2[0]} ${B2[1]} ${B2[2]} ${B2[3]} ${B2[4]} ${B2[5]} ${B2[6]} ${B2[7]} ${B2[8]} ${B2[9]}\nc ${C2[0]} ${C2[1]} ${C2[2]} ${C2[3]} ${C2[4]} ${C2[5]} ${C2[6]} ${C2[7]} ${C2[8]} ${C2[9]}\nd ${D2[0]} ${D2[1]} ${D2[2]} ${D2[3]} ${D2[4]} ${D2[5]} ${D2[6]} ${D2[7]} ${D2[8]} ${D2[9]}\ne ${E2[0]} ${E2[1]} ${E2[2]} ${E2[3]} ${E2[4]} ${E2[5]} ${E2[6]} ${E2[7]} ${E2[8]} ${E2[9]}\nf ${F2[0]} ${F2[1]} ${F2[2]} ${F2[3]} ${F2[4]} ${F2[5]} ${F2[6]} ${F2[7]} ${F2[8]} ${F2[9]}\ng ${G2[0]} ${G2[1]} ${G2[2]} ${G2[3]} ${G2[4]} ${G2[5]} ${G2[6]} ${G2[7]} ${G2[8]} ${G2[9]}\n`)
    
            }
    
          } else {
    
            msg.channel.send("You cant place that ship there!")
    
          }
    
        } else if (args[3].toString() == "H") {
    
          if(temp + 4 == 10) {
    
            if(F2[temp] == "x" && F2[temp + 1] == "x" && F2[temp + 2] == "x" && F2[temp + 3] == "x" && F2[temp - 1] == "x" && G2[temp] == "x" && G2[temp + 1] == "x" && G2[temp + 2] == "x" && G2[temp + 3] == "x" && G2[temp - 1] == "x") {
    
              G2[temp] = "p";
              G2[temp + 1] = "p"; 
              G2[temp + 2] = "p"; 
              G2[temp + 3] = "p";
    
              AllShips2[1] -= 1;
    
              Embeds.error(ChannelFP2, `/ 1 2 3 4 5 6 7 8 9 10\na ${A2[0]} ${A2[1]} ${A2[2]} ${A2[3]} ${A2[4]} ${A2[5]} ${A2[6]} ${A2[7]} ${A2[8]} ${A2[9]}\nb ${B2[0]} ${B2[1]} ${B2[2]} ${B2[3]} ${B2[4]} ${B2[5]} ${B2[6]} ${B2[7]} ${B2[8]} ${B2[9]}\nc ${C2[0]} ${C2[1]} ${C2[2]} ${C2[3]} ${C2[4]} ${C2[5]} ${C2[6]} ${C2[7]} ${C2[8]} ${C2[9]}\nd ${D2[0]} ${D2[1]} ${D2[2]} ${D2[3]} ${D2[4]} ${D2[5]} ${D2[6]} ${D2[7]} ${D2[8]} ${D2[9]}\ne ${E2[0]} ${E2[1]} ${E2[2]} ${E2[3]} ${E2[4]} ${E2[5]} ${E2[6]} ${E2[7]} ${E2[8]} ${E2[9]}\nf ${F2[0]} ${F2[1]} ${F2[2]} ${F2[3]} ${F2[4]} ${F2[5]} ${F2[6]} ${F2[7]} ${F2[8]} ${F2[9]}\ng ${G2[0]} ${G2[1]} ${G2[2]} ${G2[3]} ${G2[4]} ${G2[5]} ${G2[6]} ${G2[7]} ${G2[8]} ${G2[9]}\n`)
    
            } else {
    
              msg.channel.send("You cant place that ship there!")
    
            }
    
          } else if (temp + 4 < 10) {
    
            if(F2[temp] == "x" && F2[temp + 1] == "x" && F2[temp + 2] == "x" && F2[temp + 3] == "x" && F2[temp - 1] == "x" && G2[temp] == "x" && G2[temp + 1] == "x" && G2[temp + 2] == "x" && G2[temp + 3] == "x" && G2[temp - 1] == "x" && F2[temp + 4] == "x" && G2[temp + 4] == "x") {
    
              G2[temp] = "p";
              G2[temp + 1] = "p"; 
              G2[temp + 2] = "p"; 
              G2[temp + 3] = "p";
    
            AllShips2[1] -= 1;
    
            Embeds.error(ChannelFP2, `/ 1 2 3 4 5 6 7 8 9 10\na ${A2[0]} ${A2[1]} ${A2[2]} ${A2[3]} ${A2[4]} ${A2[5]} ${A2[6]} ${A2[7]} ${A2[8]} ${A2[9]}\nb ${B2[0]} ${B2[1]} ${B2[2]} ${B2[3]} ${B2[4]} ${B2[5]} ${B2[6]} ${B2[7]} ${B2[8]} ${B2[9]}\nc ${C2[0]} ${C2[1]} ${C2[2]} ${C2[3]} ${C2[4]} ${C2[5]} ${C2[6]} ${C2[7]} ${C2[8]} ${C2[9]}\nd ${D2[0]} ${D2[1]} ${D2[2]} ${D2[3]} ${D2[4]} ${D2[5]} ${D2[6]} ${D2[7]} ${D2[8]} ${D2[9]}\ne ${E2[0]} ${E2[1]} ${E2[2]} ${E2[3]} ${E2[4]} ${E2[5]} ${E2[6]} ${E2[7]} ${E2[8]} ${E2[9]}\nf ${F2[0]} ${F2[1]} ${F2[2]} ${F2[3]} ${F2[4]} ${F2[5]} ${F2[6]} ${F2[7]} ${F2[8]} ${F2[9]}\ng ${G2[0]} ${G2[1]} ${G2[2]} ${G2[3]} ${G2[4]} ${G2[5]} ${G2[6]} ${G2[7]} ${G2[8]} ${G2[9]}\n`)
    
          } else {
    
            msg.channel.send("You cant place that ship there!")
    
          }
    
        }
    
        }
    
      } else if(args[2].toString() == "F" && AllShips2[2] != 0) {
    
        if(args[3].toString() == "V") {
    
          if (temp > 0 && temp < 9) {
    
            if(D2[temp] == "x" && E2[temp] == "x" && D2[temp + 1] == "x" && E2[temp + 1] == "x" && F2[temp] == "x" && F2[temp + 1] == "x" && D2[temp - 1] == "x" && E2[temp - 1] == "x" && F2[temp - 1] == "x" && G2[temp] == "x" && G2[temp + 1] == "x" && G2[temp - 1] == "x") {
    
              E2[temp] = "p";
              F2[temp] = "p";
              G2[temp] = "p"; 
    
              AllShips2[2] -= 1;
    
              Embeds.error(ChannelFP2, `/ 1 2 3 4 5 6 7 8 9 10\na ${A2[0]} ${A2[1]} ${A2[2]} ${A2[3]} ${A2[4]} ${A2[5]} ${A2[6]} ${A2[7]} ${A2[8]} ${A2[9]}\nb ${B2[0]} ${B2[1]} ${B2[2]} ${B2[3]} ${B2[4]} ${B2[5]} ${B2[6]} ${B2[7]} ${B2[8]} ${B2[9]}\nc ${C2[0]} ${C2[1]} ${C2[2]} ${C2[3]} ${C2[4]} ${C2[5]} ${C2[6]} ${C2[7]} ${C2[8]} ${C2[9]}\nd ${D2[0]} ${D2[1]} ${D2[2]} ${D2[3]} ${D2[4]} ${D2[5]} ${D2[6]} ${D2[7]} ${D2[8]} ${D2[9]}\ne ${E2[0]} ${E2[1]} ${E2[2]} ${E2[3]} ${E2[4]} ${E2[5]} ${E2[6]} ${E2[7]} ${E2[8]} ${E2[9]}\nf ${F2[0]} ${F2[1]} ${F2[2]} ${F2[3]} ${F2[4]} ${F2[5]} ${F2[6]} ${F2[7]} ${F2[8]} ${F2[9]}\ng ${G2[0]} ${G2[1]} ${G2[2]} ${G2[3]} ${G2[4]} ${G2[5]} ${G2[6]} ${G2[7]} ${G2[8]} ${G2[9]}\n`)
    
            }
    
          } else if (temp == 9) {
    
            if(D2[temp] == "x" && E2[temp] == "x" && F2[temp] == "x" && D2[temp - 1] == "x" && E2[temp - 1] == "x" && F2[temp - 1] == "x" && G2[temp] == "x" && G2[temp - 1] == "x") {
    
              E2[temp] = "p";
              F2[temp] = "p"; 
              G2[temp] = "p";
    
              AllShips2[2] -= 1;
    
              Embeds.error(ChannelFP2, `/ 1 2 3 4 5 6 7 8 9 10\na ${A2[0]} ${A2[1]} ${A2[2]} ${A2[3]} ${A2[4]} ${A2[5]} ${A2[6]} ${A2[7]} ${A2[8]} ${A2[9]}\nb ${B2[0]} ${B2[1]} ${B2[2]} ${B2[3]} ${B2[4]} ${B2[5]} ${B2[6]} ${B2[7]} ${B2[8]} ${B2[9]}\nc ${C2[0]} ${C2[1]} ${C2[2]} ${C2[3]} ${C2[4]} ${C2[5]} ${C2[6]} ${C2[7]} ${C2[8]} ${C2[9]}\nd ${D2[0]} ${D2[1]} ${D2[2]} ${D2[3]} ${D2[4]} ${D2[5]} ${D2[6]} ${D2[7]} ${D2[8]} ${D2[9]}\ne ${E2[0]} ${E2[1]} ${E2[2]} ${E2[3]} ${E2[4]} ${E2[5]} ${E2[6]} ${E2[7]} ${E2[8]} ${E2[9]}\nf ${F2[0]} ${F2[1]} ${F2[2]} ${F2[3]} ${F2[4]} ${F2[5]} ${F2[6]} ${F2[7]} ${F2[8]} ${F2[9]}\ng ${G2[0]} ${G2[1]} ${G2[2]} ${G2[3]} ${G2[4]} ${G2[5]} ${G2[6]} ${G2[7]} ${G2[8]} ${G2[9]}\n`)
    
            }
    
          } else {
    
            msg.channel.send("You cant place that ship there!")
    
          }
    
        } else if (args[3].toString() == "H") {
    
          if(temp + 3 == 10) {
    
            if(F2[temp] == "x" && F2[temp + 1] == "x" && F2[temp + 2] == "x" && F2[temp - 1] == "x" && G2[temp] == "x" && G2[temp + 1] == "x" && G2[temp + 2] == "x" && G2[temp - 1] == "x") {
    
              G2[temp] = "p";
              G2[temp + 1] = "p"; 
              G2[temp + 2] = "p"; 
    
              AllShips2[2] -= 1;
    
              Embeds.error(ChannelFP2, `/ 1 2 3 4 5 6 7 8 9 10\na ${A2[0]} ${A2[1]} ${A2[2]} ${A2[3]} ${A2[4]} ${A2[5]} ${A2[6]} ${A2[7]} ${A2[8]} ${A2[9]}\nb ${B2[0]} ${B2[1]} ${B2[2]} ${B2[3]} ${B2[4]} ${B2[5]} ${B2[6]} ${B2[7]} ${B2[8]} ${B2[9]}\nc ${C2[0]} ${C2[1]} ${C2[2]} ${C2[3]} ${C2[4]} ${C2[5]} ${C2[6]} ${C2[7]} ${C2[8]} ${C2[9]}\nd ${D2[0]} ${D2[1]} ${D2[2]} ${D2[3]} ${D2[4]} ${D2[5]} ${D2[6]} ${D2[7]} ${D2[8]} ${D2[9]}\ne ${E2[0]} ${E2[1]} ${E2[2]} ${E2[3]} ${E2[4]} ${E2[5]} ${E2[6]} ${E2[7]} ${E2[8]} ${E2[9]}\nf ${F2[0]} ${F2[1]} ${F2[2]} ${F2[3]} ${F2[4]} ${F2[5]} ${F2[6]} ${F2[7]} ${F2[8]} ${F2[9]}\ng ${G2[0]} ${G2[1]} ${G2[2]} ${G2[3]} ${G2[4]} ${G2[5]} ${G2[6]} ${G2[7]} ${G2[8]} ${G2[9]}\n`)
    
            } else {
    
              msg.channel.send("You cant place that ship there!")
    
            }
    
          } else if (temp + 3 < 10) {
    
            if(F2[temp] == "x" && F2[temp + 1] == "x" && F2[temp + 2] == "x" && F2[temp - 1] == "x" && G2[temp] == "x" && G2[temp + 1] == "x" && G2[temp + 2] == "x" && G2[temp - 1] == "x" && G2[temp + 3] == "x" && F2[temp + 3] == "x") {
    
            G2[temp] = "p";
            G2[temp + 1] = "p"; 
            G2[temp + 2] = "p"; 
    
            AllShips2[2] -= 1;
    
            Embeds.error(ChannelFP2, `/ 1 2 3 4 5 6 7 8 9 10\na ${A2[0]} ${A2[1]} ${A2[2]} ${A2[3]} ${A2[4]} ${A2[5]} ${A2[6]} ${A2[7]} ${A2[8]} ${A2[9]}\nb ${B2[0]} ${B2[1]} ${B2[2]} ${B2[3]} ${B2[4]} ${B2[5]} ${B2[6]} ${B2[7]} ${B2[8]} ${B2[9]}\nc ${C2[0]} ${C2[1]} ${C2[2]} ${C2[3]} ${C2[4]} ${C2[5]} ${C2[6]} ${C2[7]} ${C2[8]} ${C2[9]}\nd ${D2[0]} ${D2[1]} ${D2[2]} ${D2[3]} ${D2[4]} ${D2[5]} ${D2[6]} ${D2[7]} ${D2[8]} ${D2[9]}\ne ${E2[0]} ${E2[1]} ${E2[2]} ${E2[3]} ${E2[4]} ${E2[5]} ${E2[6]} ${E2[7]} ${E2[8]} ${E2[9]}\nf ${F2[0]} ${F2[1]} ${F2[2]} ${F2[3]} ${F2[4]} ${F2[5]} ${F2[6]} ${F2[7]} ${F2[8]} ${F2[9]}\ng ${G2[0]} ${G2[1]} ${G2[2]} ${G2[3]} ${G2[4]} ${G2[5]} ${G2[6]} ${G2[7]} ${G2[8]} ${G2[9]}\n`)
    
          } else {
    
            msg.channel.send("You cant place that ship there!")
    
          }
    
        }
    
        }
    
      } else if(args[2].toString() == "M" && AllShips2[3] != 0) {
    
        if(args[3].toString() == "V") {
    
          if (temp > 0 && temp < 9) {
    
            if(E2[temp] == "x" && E2[temp + 1] == "x" && F2[temp] == "x" && F2[temp + 1] == "x" && E2[temp - 1] == "x" && F2[temp - 1] == "x" && G2[temp] == "x" && G2[temp + 1] == "x" && G2[temp - 1] == "x") {
    
              F2[temp] = "p";
              G2[temp] = "p"; 
    
              AllShips2[3] -= 1;
    
              Embeds.error(ChannelFP2, `/ 1 2 3 4 5 6 7 8 9 10\na ${A2[0]} ${A2[1]} ${A2[2]} ${A2[3]} ${A2[4]} ${A2[5]} ${A2[6]} ${A2[7]} ${A2[8]} ${A2[9]}\nb ${B2[0]} ${B2[1]} ${B2[2]} ${B2[3]} ${B2[4]} ${B2[5]} ${B2[6]} ${B2[7]} ${B2[8]} ${B2[9]}\nc ${C2[0]} ${C2[1]} ${C2[2]} ${C2[3]} ${C2[4]} ${C2[5]} ${C2[6]} ${C2[7]} ${C2[8]} ${C2[9]}\nd ${D2[0]} ${D2[1]} ${D2[2]} ${D2[3]} ${D2[4]} ${D2[5]} ${D2[6]} ${D2[7]} ${D2[8]} ${D2[9]}\ne ${E2[0]} ${E2[1]} ${E2[2]} ${E2[3]} ${E2[4]} ${E2[5]} ${E2[6]} ${E2[7]} ${E2[8]} ${E2[9]}\nf ${F2[0]} ${F2[1]} ${F2[2]} ${F2[3]} ${F2[4]} ${F2[5]} ${F2[6]} ${F2[7]} ${F2[8]} ${F2[9]}\ng ${G2[0]} ${G2[1]} ${G2[2]} ${G2[3]} ${G2[4]} ${G2[5]} ${G2[6]} ${G2[7]} ${G2[8]} ${G2[9]}\n`)
    
            }
    
          } else if (temp == 9) {
    
            if(E2[temp] == "x" && F2[temp] == "x" && E2[temp - 1] == "x" && F2[temp - 1] == "x" && G2[temp] == "x" && G2[temp - 1] == "x") {
    
              F2[temp] = "p";
              G2[temp] = "p"; 
    
              AllShips2[3] -= 1;
    
              Embeds.error(ChannelFP2, `/ 1 2 3 4 5 6 7 8 9 10\na ${A2[0]} ${A2[1]} ${A2[2]} ${A2[3]} ${A2[4]} ${A2[5]} ${A2[6]} ${A2[7]} ${A2[8]} ${A2[9]}\nb ${B2[0]} ${B2[1]} ${B2[2]} ${B2[3]} ${B2[4]} ${B2[5]} ${B2[6]} ${B2[7]} ${B2[8]} ${B2[9]}\nc ${C2[0]} ${C2[1]} ${C2[2]} ${C2[3]} ${C2[4]} ${C2[5]} ${C2[6]} ${C2[7]} ${C2[8]} ${C2[9]}\nd ${D2[0]} ${D2[1]} ${D2[2]} ${D2[3]} ${D2[4]} ${D2[5]} ${D2[6]} ${D2[7]} ${D2[8]} ${D2[9]}\ne ${E2[0]} ${E2[1]} ${E2[2]} ${E2[3]} ${E2[4]} ${E2[5]} ${E2[6]} ${E2[7]} ${E2[8]} ${E2[9]}\nf ${F2[0]} ${F2[1]} ${F2[2]} ${F2[3]} ${F2[4]} ${F2[5]} ${F2[6]} ${F2[7]} ${F2[8]} ${F2[9]}\ng ${G2[0]} ${G2[1]} ${G2[2]} ${G2[3]} ${G2[4]} ${G2[5]} ${G2[6]} ${G2[7]} ${G2[8]} ${G2[9]}\n`)
    
            }
    
          } else {
    
            msg.channel.send("You cant place that ship there!")
    
          }
    
        } else if (args[3].toString() == "H") {
    
          if(temp + 2 == 10) {
    
            if(F2[temp] == "x" && F2[temp + 1] == "x" && F2[temp - 1] == "x" && G2[temp] == "x" && G2[temp + 1] == "x" && G2[temp - 1] == "x") {
    
              G2[temp] = "p";
              G2[temp + 1] = "p"; 
    
              AllShips2[3] -= 1;
    
              Embeds.error(ChannelFP2, `/ 1 2 3 4 5 6 7 8 9 10\na ${A2[0]} ${A2[1]} ${A2[2]} ${A2[3]} ${A2[4]} ${A2[5]} ${A2[6]} ${A2[7]} ${A2[8]} ${A2[9]}\nb ${B2[0]} ${B2[1]} ${B2[2]} ${B2[3]} ${B2[4]} ${B2[5]} ${B2[6]} ${B2[7]} ${B2[8]} ${B2[9]}\nc ${C2[0]} ${C2[1]} ${C2[2]} ${C2[3]} ${C2[4]} ${C2[5]} ${C2[6]} ${C2[7]} ${C2[8]} ${C2[9]}\nd ${D2[0]} ${D2[1]} ${D2[2]} ${D2[3]} ${D2[4]} ${D2[5]} ${D2[6]} ${D2[7]} ${D2[8]} ${D2[9]}\ne ${E2[0]} ${E2[1]} ${E2[2]} ${E2[3]} ${E2[4]} ${E2[5]} ${E2[6]} ${E2[7]} ${E2[8]} ${E2[9]}\nf ${F2[0]} ${F2[1]} ${F2[2]} ${F2[3]} ${F2[4]} ${F2[5]} ${F2[6]} ${F2[7]} ${F2[8]} ${F2[9]}\ng ${G2[0]} ${G2[1]} ${G2[2]} ${G2[3]} ${G2[4]} ${G2[5]} ${G2[6]} ${G2[7]} ${G2[8]} ${G2[9]}\n`)
    
            } else {
    
              msg.channel.send("You cant place that ship there!")
    
            }
    
          } else if (temp + 2 < 10) {
    
          if(F2[temp] == "x" && F2[temp + 1] == "x" && F2[temp - 1] == "x" && G2[temp] == "x" && G2[temp + 1] == "x" && G2[temp - 1] == "x" && F2[temp + 2] == "x" && G2[temp + 2] == "x") {
    
            G2[temp] = "p";
            G2[temp + 1] = "p"; 
    
            AllShips2[3] -= 1;
    
            Embeds.error(ChannelFP2, `/ 1 2 3 4 5 6 7 8 9 10\na ${A2[0]} ${A2[1]} ${A2[2]} ${A2[3]} ${A2[4]} ${A2[5]} ${A2[6]} ${A2[7]} ${A2[8]} ${A2[9]}\nb ${B2[0]} ${B2[1]} ${B2[2]} ${B2[3]} ${B2[4]} ${B2[5]} ${B2[6]} ${B2[7]} ${B2[8]} ${B2[9]}\nc ${C2[0]} ${C2[1]} ${C2[2]} ${C2[3]} ${C2[4]} ${C2[5]} ${C2[6]} ${C2[7]} ${C2[8]} ${C2[9]}\nd ${D2[0]} ${D2[1]} ${D2[2]} ${D2[3]} ${D2[4]} ${D2[5]} ${D2[6]} ${D2[7]} ${D2[8]} ${D2[9]}\ne ${E2[0]} ${E2[1]} ${E2[2]} ${E2[3]} ${E2[4]} ${E2[5]} ${E2[6]} ${E2[7]} ${E2[8]} ${E2[9]}\nf ${F2[0]} ${F2[1]} ${F2[2]} ${F2[3]} ${F2[4]} ${F2[5]} ${F2[6]} ${F2[7]} ${F2[8]} ${F2[9]}\ng ${G2[0]} ${G2[1]} ${G2[2]} ${G2[3]} ${G2[4]} ${G2[5]} ${G2[6]} ${G2[7]} ${G2[8]} ${G2[9]}\n`)
    
          } else {
    
            msg.channel.send("You cant place that ship there!")
    
          }
    
        }
    
        }
    
      } else {
    
        msg.channel.send("You used all ships of this kind")
    
      }
    
    } else if (temp == 0) {
    
      if(args[2].toString() == "B" && AllShips2[0] != 0) {
    
        if(args[3].toString() == "V") {
    
          if(B2[temp] == "x" && C2[temp] == "x" && C2[temp + 1] == "x" && D2[temp] == "x" && B2[temp + 1] == "x" && C2[temp + 1] == "x" && D2[temp + 1] == "x" && E2[temp] == "x" && E2[temp + 1] == "x" && F2[temp] == "x" && F2[temp + 1] == "x" && G2[temp] == "x" && G2[temp + 1] == "x") {
    
            C2[temp] = "p";
            D2[temp] = "p"; 
            E2[temp] = "p";
            F2[temp] = "p";
            G2[temp] = "p";
    
            AllShips2[0] -= 1;
    
            Embeds.error(ChannelFP2, `/ 1 2 3 4 5 6 7 8 9 10\na ${A2[0]} ${A2[1]} ${A2[2]} ${A2[3]} ${A2[4]} ${A2[5]} ${A2[6]} ${A2[7]} ${A2[8]} ${A2[9]}\nb ${B2[0]} ${B2[1]} ${B2[2]} ${B2[3]} ${B2[4]} ${B2[5]} ${B2[6]} ${B2[7]} ${B2[8]} ${B2[9]}\nc ${C2[0]} ${C2[1]} ${C2[2]} ${C2[3]} ${C2[4]} ${C2[5]} ${C2[6]} ${C2[7]} ${C2[8]} ${C2[9]}\nd ${D2[0]} ${D2[1]} ${D2[2]} ${D2[3]} ${D2[4]} ${D2[5]} ${D2[6]} ${D2[7]} ${D2[8]} ${D2[9]}\ne ${E2[0]} ${E2[1]} ${E2[2]} ${E2[3]} ${E2[4]} ${E2[5]} ${E2[6]} ${E2[7]} ${E2[8]} ${E2[9]}\nf ${F2[0]} ${F2[1]} ${F2[2]} ${F2[3]} ${F2[4]} ${F2[5]} ${F2[6]} ${F2[7]} ${F2[8]} ${F2[9]}\ng ${G2[0]} ${G2[1]} ${G2[2]} ${G2[3]} ${G2[4]} ${G2[5]} ${G2[6]} ${G2[7]} ${G2[8]} ${G2[9]}\n`)
    
          } else {
    
          msg.channel.send("You cant place that ship there!")
    
        }
    
        } else if (args[3].toString() == "H") {
    
          if(F2[temp] == "x" && F2[temp + 1] == "x" && F2[temp + 2] == "x" && F2[temp + 3] == "x" && F2[temp + 4] == "x" && F2[temp + 5] == "x" && G2[temp] == "x" && G2[temp + 1] == "x" && G2[temp + 2] == "x" && G2[temp + 3] == "x" && G2[temp + 4] == "x" && G2[temp +5] == "x") {
    
            G2[temp] = "p";
            G2[temp + 1] = "p"; 
            G2[temp + 2] = "p"; 
            G2[temp + 3] = "p";
            G2[temp + 4] = "p";
    
            AllShips2[0] -= 1;
    
            Embeds.error(ChannelFP2, `/ 1 2 3 4 5 6 7 8 9 10\na ${A2[0]} ${A2[1]} ${A2[2]} ${A2[3]} ${A2[4]} ${A2[5]} ${A2[6]} ${A2[7]} ${A2[8]} ${A2[9]}\nb ${B2[0]} ${B2[1]} ${B2[2]} ${B2[3]} ${B2[4]} ${B2[5]} ${B2[6]} ${B2[7]} ${B2[8]} ${B2[9]}\nc ${C2[0]} ${C2[1]} ${C2[2]} ${C2[3]} ${C2[4]} ${C2[5]} ${C2[6]} ${C2[7]} ${C2[8]} ${C2[9]}\nd ${D2[0]} ${D2[1]} ${D2[2]} ${D2[3]} ${D2[4]} ${D2[5]} ${D2[6]} ${D2[7]} ${D2[8]} ${D2[9]}\ne ${E2[0]} ${E2[1]} ${E2[2]} ${E2[3]} ${E2[4]} ${E2[5]} ${E2[6]} ${E2[7]} ${E2[8]} ${E2[9]}\nf ${F2[0]} ${F2[1]} ${F2[2]} ${F2[3]} ${F2[4]} ${F2[5]} ${F2[6]} ${F2[7]} ${F2[8]} ${F2[9]}\ng ${G2[0]} ${G2[1]} ${G2[2]} ${G2[3]} ${G2[4]} ${G2[5]} ${G2[6]} ${G2[7]} ${G2[8]} ${G2[9]}\n`)
    
          } else {
    
            msg.channel.send("You cant place that ship there!")
    
          }
    
        }
    
      } else if(args[2].toString() == "C" && AllShips2[1] != 0) {
    
        if(args[3].toString() == "V") {
    
          if(C2[temp] == "x" && D2[temp] == "x" && D2[temp + 1] == "x" && E2[temp] == "x" && C2[temp + 1] == "x" && D2[temp + 1] == "x" && E2[temp + 1] == "x" && F2[temp] == "x" && F2[temp + 1] == "x" && G2[temp] == "x" && G2[temp + 1] == "x") {
    
            D2[temp] = "p";
            E2[temp] = "p";
            F2[temp] = "p";
            G2[temp] = "p"; 
    
            AllShips2[1] -= 1;
    
            Embeds.error(ChannelFP2, `/ 1 2 3 4 5 6 7 8 9 10\na ${A2[0]} ${A2[1]} ${A2[2]} ${A2[3]} ${A2[4]} ${A2[5]} ${A2[6]} ${A2[7]} ${A2[8]} ${A2[9]}\nb ${B2[0]} ${B2[1]} ${B2[2]} ${B2[3]} ${B2[4]} ${B2[5]} ${B2[6]} ${B2[7]} ${B2[8]} ${B2[9]}\nc ${C2[0]} ${C2[1]} ${C2[2]} ${C2[3]} ${C2[4]} ${C2[5]} ${C2[6]} ${C2[7]} ${C2[8]} ${C2[9]}\nd ${D2[0]} ${D2[1]} ${D2[2]} ${D2[3]} ${D2[4]} ${D2[5]} ${D2[6]} ${D2[7]} ${D2[8]} ${D2[9]}\ne ${E2[0]} ${E2[1]} ${E2[2]} ${E2[3]} ${E2[4]} ${E2[5]} ${E2[6]} ${E2[7]} ${E2[8]} ${E2[9]}\nf ${F2[0]} ${F2[1]} ${F2[2]} ${F2[3]} ${F2[4]} ${F2[5]} ${F2[6]} ${F2[7]} ${F2[8]} ${F2[9]}\ng ${G2[0]} ${G2[1]} ${G2[2]} ${G2[3]} ${G2[4]} ${G2[5]} ${G2[6]} ${G2[7]} ${G2[8]} ${G2[9]}\n`)
    
          } else {
    
            msg.channel.send("You cant place that ship there!")
    
          }
    
        } else if (args[3].toString() == "H") {
    
          if(F2[temp] == "x" && F2[temp + 1] == "x" && F2[temp + 2] == "x" && F2[temp + 3] == "x" && F2[temp + 4] == "x" && G2[temp] == "x" && G2[temp + 1] == "x" && G2[temp + 2] == "x" && G2[temp + 3] == "x" && G2[temp + 4] == "x") {
    
            G2[temp] = "p";
            G2[temp + 1] = "p"; 
            G2[temp + 2] = "p"; 
            G2[temp + 3] = "p";
    
            AllShips2[1] -= 1;
    
            Embeds.error(ChannelFP2, `/ 1 2 3 4 5 6 7 8 9 10\na ${A2[0]} ${A2[1]} ${A2[2]} ${A2[3]} ${A2[4]} ${A2[5]} ${A2[6]} ${A2[7]} ${A2[8]} ${A2[9]}\nb ${B2[0]} ${B2[1]} ${B2[2]} ${B2[3]} ${B2[4]} ${B2[5]} ${B2[6]} ${B2[7]} ${B2[8]} ${B2[9]}\nc ${C2[0]} ${C2[1]} ${C2[2]} ${C2[3]} ${C2[4]} ${C2[5]} ${C2[6]} ${C2[7]} ${C2[8]} ${C2[9]}\nd ${D2[0]} ${D2[1]} ${D2[2]} ${D2[3]} ${D2[4]} ${D2[5]} ${D2[6]} ${D2[7]} ${D2[8]} ${D2[9]}\ne ${E2[0]} ${E2[1]} ${E2[2]} ${E2[3]} ${E2[4]} ${E2[5]} ${E2[6]} ${E2[7]} ${E2[8]} ${E2[9]}\nf ${F2[0]} ${F2[1]} ${F2[2]} ${F2[3]} ${F2[4]} ${F2[5]} ${F2[6]} ${F2[7]} ${F2[8]} ${F2[9]}\ng ${G2[0]} ${G2[1]} ${G2[2]} ${G2[3]} ${G2[4]} ${G2[5]} ${G2[6]} ${G2[7]} ${G2[8]} ${G2[9]}\n`)
    
          } else {
    
            msg.channel.send("You cant place that ship there!")
    
          }
    
        }
    
      } else if(args[2].toString() == "F" && AllShips2[2] != 0) {
    
        if(args[3].toString() == "V") {
    
          if(D2[temp] == "x" && D2[temp + 1] == "x" && E2[temp] == "x" && D2[temp + 1] == "x" && E2[temp + 1] == "x" && F2[temp] == "x" && F2[temp + 1] == "x" && G2[temp] == "x" && G2[temp + 1] == "x") {
    
            E2[temp] = "p";
            F2[temp] = "p";
            G2[temp] = "p"; 
    
            AllShips2[2] -= 1;
    
            Embeds.error(ChannelFP2, `/ 1 2 3 4 5 6 7 8 9 10\na ${A2[0]} ${A2[1]} ${A2[2]} ${A2[3]} ${A2[4]} ${A2[5]} ${A2[6]} ${A2[7]} ${A2[8]} ${A2[9]}\nb ${B2[0]} ${B2[1]} ${B2[2]} ${B2[3]} ${B2[4]} ${B2[5]} ${B2[6]} ${B2[7]} ${B2[8]} ${B2[9]}\nc ${C2[0]} ${C2[1]} ${C2[2]} ${C2[3]} ${C2[4]} ${C2[5]} ${C2[6]} ${C2[7]} ${C2[8]} ${C2[9]}\nd ${D2[0]} ${D2[1]} ${D2[2]} ${D2[3]} ${D2[4]} ${D2[5]} ${D2[6]} ${D2[7]} ${D2[8]} ${D2[9]}\ne ${E2[0]} ${E2[1]} ${E2[2]} ${E2[3]} ${E2[4]} ${E2[5]} ${E2[6]} ${E2[7]} ${E2[8]} ${E2[9]}\nf ${F2[0]} ${F2[1]} ${F2[2]} ${F2[3]} ${F2[4]} ${F2[5]} ${F2[6]} ${F2[7]} ${F2[8]} ${F2[9]}\ng ${G2[0]} ${G2[1]} ${G2[2]} ${G2[3]} ${G2[4]} ${G2[5]} ${G2[6]} ${G2[7]} ${G2[8]} ${G2[9]}\n`)
    
          } else {
    
            msg.channel.send("You cant place that ship there!")
    
          }
    
        } else if (args[3].toString() == "H") {
    
          if(F2[temp] == "x" && F2[temp + 1] == "x" && F2[temp + 2] == "x" && F2[temp + 3] == "x" && G2[temp] == "x" && G2[temp + 1] == "x" && G2[temp + 2] == "x" && G2[temp + 3] == "x") {
    
            G2[temp] = "p";
            G2[temp + 1] = "p"; 
            G2[temp + 2] = "p"; 
    
            AllShips2[2] -= 1;
    
            Embeds.error(ChannelFP2, `/ 1 2 3 4 5 6 7 8 9 10\na ${A2[0]} ${A2[1]} ${A2[2]} ${A2[3]} ${A2[4]} ${A2[5]} ${A2[6]} ${A2[7]} ${A2[8]} ${A2[9]}\nb ${B2[0]} ${B2[1]} ${B2[2]} ${B2[3]} ${B2[4]} ${B2[5]} ${B2[6]} ${B2[7]} ${B2[8]} ${B2[9]}\nc ${C2[0]} ${C2[1]} ${C2[2]} ${C2[3]} ${C2[4]} ${C2[5]} ${C2[6]} ${C2[7]} ${C2[8]} ${C2[9]}\nd ${D2[0]} ${D2[1]} ${D2[2]} ${D2[3]} ${D2[4]} ${D2[5]} ${D2[6]} ${D2[7]} ${D2[8]} ${D2[9]}\ne ${E2[0]} ${E2[1]} ${E2[2]} ${E2[3]} ${E2[4]} ${E2[5]} ${E2[6]} ${E2[7]} ${E2[8]} ${E2[9]}\nf ${F2[0]} ${F2[1]} ${F2[2]} ${F2[3]} ${F2[4]} ${F2[5]} ${F2[6]} ${F2[7]} ${F2[8]} ${F2[9]}\ng ${G2[0]} ${G2[1]} ${G2[2]} ${G2[3]} ${G2[4]} ${G2[5]} ${G2[6]} ${G2[7]} ${G2[8]} ${G2[9]}\n`)
    
          } else {
    
            msg.channel.send("You cant place that ship there!")
    
          }
    
        }
    
      } else if(args[2].toString() == "M" && AllShips2[3] != 0) {
    
        if(args[3].toString() == "V") {
    
          if(temp == 0) {
    
            if(E2[temp] == "x" && E2[temp + 1] == "x" && F2[temp] == "x" && F2[temp + 1] == "x" && G2[temp] == "x" && G2[temp + 1] == "x") {
    
              F2[temp] = "p";
              G2[temp] = "p"; 
    
              AllShips2[3] -= 1;
    
              Embeds.error(ChannelFP2, `/ 1 2 3 4 5 6 7 8 9 10\na ${A2[0]} ${A2[1]} ${A2[2]} ${A2[3]} ${A2[4]} ${A2[5]} ${A2[6]} ${A2[7]} ${A2[8]} ${A2[9]}\nb ${B2[0]} ${B2[1]} ${B2[2]} ${B2[3]} ${B2[4]} ${B2[5]} ${B2[6]} ${B2[7]} ${B2[8]} ${B2[9]}\nc ${C2[0]} ${C2[1]} ${C2[2]} ${C2[3]} ${C2[4]} ${C2[5]} ${C2[6]} ${C2[7]} ${C2[8]} ${C2[9]}\nd ${D2[0]} ${D2[1]} ${D2[2]} ${D2[3]} ${D2[4]} ${D2[5]} ${D2[6]} ${D2[7]} ${D2[8]} ${D2[9]}\ne ${E2[0]} ${E2[1]} ${E2[2]} ${E2[3]} ${E2[4]} ${E2[5]} ${E2[6]} ${E2[7]} ${E2[8]} ${E2[9]}\nf ${F2[0]} ${F2[1]} ${F2[2]} ${F2[3]} ${F2[4]} ${F2[5]} ${F2[6]} ${F2[7]} ${F2[8]} ${F2[9]}\ng ${G2[0]} ${G2[1]} ${G2[2]} ${G2[3]} ${G2[4]} ${G2[5]} ${G2[6]} ${G2[7]} ${G2[8]} ${G2[9]}\n`)
    
            } else {
    
              msg.channel.send("You cant place that ship there!")
    
            }
    
          }
    
        } else if (args[3].toString() == "H") {
    
          if(F2[temp] == "x" && F2[temp + 1] == "x" && F2[temp + 2] == "x" && G2[temp] == "x" && G2[temp + 1] == "x" && G2[temp + 2] == "x") {
    
            G2[temp] = "p";
            G2[temp + 1] = "p"; 
    
            AllShips2[3] -= 1;
    
            Embeds.error(ChannelFP2, `/ 1 2 3 4 5 6 7 8 9 10\na ${A2[0]} ${A2[1]} ${A2[2]} ${A2[3]} ${A2[4]} ${A2[5]} ${A2[6]} ${A2[7]} ${A2[8]} ${A2[9]}\nb ${B2[0]} ${B2[1]} ${B2[2]} ${B2[3]} ${B2[4]} ${B2[5]} ${B2[6]} ${B2[7]} ${B2[8]} ${B2[9]}\nc ${C2[0]} ${C2[1]} ${C2[2]} ${C2[3]} ${C2[4]} ${C2[5]} ${C2[6]} ${C2[7]} ${C2[8]} ${C2[9]}\nd ${D2[0]} ${D2[1]} ${D2[2]} ${D2[3]} ${D2[4]} ${D2[5]} ${D2[6]} ${D2[7]} ${D2[8]} ${D2[9]}\ne ${E2[0]} ${E2[1]} ${E2[2]} ${E2[3]} ${E2[4]} ${E2[5]} ${E2[6]} ${E2[7]} ${E2[8]} ${E2[9]}\nf ${F2[0]} ${F2[1]} ${F2[2]} ${F2[3]} ${F2[4]} ${F2[5]} ${F2[6]} ${F2[7]} ${F2[8]} ${F2[9]}\ng ${G2[0]} ${G2[1]} ${G2[2]} ${G2[3]} ${G2[4]} ${G2[5]} ${G2[6]} ${G2[7]} ${G2[8]} ${G2[9]}\n`)
    
          } else {
    
            msg.channel.send("You cant place that ship there!")
    
          }
    
        }
    
      } else {
    
        msg.channel.send("You used all ships of this kind")
    
      }
    
    }
    
      }


    } else if (args[0] == null) {

      msg.channel.send("You need to choose a letter from A - J!")

    } else if (args[0].length > 2) {

      msg.channel.send("One letter, not two!")

    } else if (args[1] == null) {

      msg.channel.send("You need to choose a number from 1 - 10!")

    } else if (parseInt(args[1]) > 10) {

      msg.channel.send("A number between 0 - 11 please")

    } else if (parseInt(args[1]) < 1) {

      msg.channel.send("A number between 0 - 11 please")

    } else if (msg.channel != ChannelFP2) {

      msg.channel.send("You cant use this command here!")

    } else if (args[2] == null) {

      msg.channel.send("Type in what ship you want to place! (b (Battleship x1 (5 places)), c (Cruiser x2 (4 places)), f (Frigates x2 (3 places)), m (Minesweepers x3 (2 places)))")

    } else if (args[3] == null) {

      msg.channel.send("Type in in what direction it should be placed! (v = vertical, h = horizontal)")

    }

  }

}

function cmd_sb1r(msg, args) {

  if(msg.member == BPlayer1) {

    for(var i = 0; i < 10; i++) {

      A[i] = "x";
      B[i] = "x";
      C[i] = "x";
      D[i] = "x";
      E[i] = "x";
      F[i] = "x";
      G[i] = "x";

    }

    AllShips1[0] = 1;
    AllShips1[1] = 1;
    AllShips1[2] = 2;
    AllShips1[3] = 2;

    msg.channel.send("Reset your field!")

  }

}

function cmd_sb2r(msg, args) {

  if(msg.member == BPlayer2) {

    for(var i = 0; i < 10; i++) {

      A2[i] = "x";
      B2[i] = "x";
      C2[i] = "x";
      D2[i] = "x";
      E2[i] = "x";
      F2[i] = "x";
      G2[i] = "x";

    }

    AllShips2[0] = 1;
    AllShips2[1] = 1;
    AllShips2[2] = 2;
    AllShips2[3] = 2;

    msg.channel.send("Reset your field!")

  }

}

function cmd_s1bs(msg, args) {

  if(msg.member == BPlayer1) {

    if(AllShips1[0] == 0 && AllShips1[1] == 0 && AllShips1[2] == 0 && AllShips1[3] == 0) {

      PlayerOneReady = true;

      msg.channel.send("You are ready!")

    } else if (PlayerOneReady == true) {

      PlayerOneReady = false;

      msg.channel.send("You arent ready anymore!")


    }

  }

}

function cmd_s2bs(msg, args) {

  if(msg.member == BPlayer2) {

    if(AllShips2[0] == 0 && AllShips2[1] == 0 && AllShips2[2] == 0 && AllShips2[3] == 0) {

      PlayerTwoReady = true;

      msg.channel.send("You are ready!")

    } else if (PlayerTwoReady == true) {

      PlayerTwoReady = false;

      msg.channel.send("You arent ready anymore!")

    }

  }

}

function cmd_br(msg, args) {

  if(PlayerOneReady == true && PlayerTwoReady == true && playable == false) {

    playable = true;

    for(var i = 0; i < 10; i++) {

      Ao[i] = "x";
      Bo[i] = "x";
      Co[i] = "x";
      Do[i] = "x";
      Eo[i] = "x";
      Fo[i] = "x";
      Go[i] = "x";

      At[i] = "x";
      Bt[i] = "x";
      Ct[i] = "x";
      Dt[i] = "x";
      Et[i] = "x";
      Ft[i] = "x";
      Gt[i] = "x";

    }

    msg.channel.send("Great, now you can play!")

  } else {

    msg.channel.send("Not all Players are ready! Just wait")

  }

}

function cmd_bt1(msg, args) {

  var Role1 = "498570745048465418";
  var Role2 = "498570808394907648";

  var ChannelB = client.channels.find("id", "498556497593237523");

  var cont = msg.content;
  var args = cont.toUpperCase().split(' ').slice(1)

  var hit = "h";
  var nothing = "n";

  if(TPlayerOne == true && playable == true && args[0] != null && args[1] != null && msg.channel == ChannelB && msg.member == BPlayer1) {

    var Snumber = parseInt(args[1] - 1);

    if(args[0].toString() == "A") {

      if(Ao[Snumber] != hit && Ao[Snumber] != nothing) {

        if(A2[Snumber] == "p") {

          Ao[Snumber] = "h";

          BCounter2 -= 1;

          msg.channel.send(`You hit a ship!\n You have another Try ${BPlayer1}`);

          Embeds.error(ChannelB, `/ 1 2 3 4 5 6 7 8 9 10\na ${Ao[0]} ${Ao[1]} ${Ao[2]} ${Ao[3]} ${Ao[4]} ${Ao[5]} ${Ao[6]} ${Ao[7]} ${Ao[8]} ${Ao[9]}\nb ${Bo[0]} ${Bo[1]} ${Bo[2]} ${Bo[3]} ${Bo[4]} ${Bo[5]} ${Bo[6]} ${Bo[7]} ${Bo[8]} ${Bo[9]}\nc ${Co[0]} ${Co[1]} ${Co[2]} ${Co[3]} ${Co[4]} ${Co[5]} ${Co[6]} ${Co[7]} ${Co[8]} ${Co[9]}\nd ${Do[0]} ${Do[1]} ${Do[2]} ${Do[3]} ${Do[4]} ${Do[5]} ${Do[6]} ${Do[7]} ${Do[8]} ${Do[9]}\ne ${Eo[0]} ${Eo[1]} ${Eo[2]} ${Eo[3]} ${Eo[4]} ${Eo[5]} ${Eo[6]} ${Eo[7]} ${Eo[8]} ${Eo[9]}\nf ${Fo[0]} ${Fo[1]} ${Fo[2]} ${Fo[3]} ${Fo[4]} ${Fo[5]} ${Fo[6]} ${Fo[7]} ${Fo[8]} ${Fo[9]}\ng ${Go[0]} ${Go[1]} ${Go[2]} ${Go[3]} ${Go[4]} ${Go[5]} ${Go[6]} ${Go[7]} ${Go[8]} ${Go[9]}\n Player 1: ${BPlayer1} Player 2: ${BPlayer2}` , "Battleship")

        } else if (A2[Snumber] == "x") {

          Ao[Snumber] = "n";

          msg.channel.send(`You didnt hit a ship!\nIts your turn ${BPlayer2}`);

          Embeds.error(ChannelB, `/ 1 2 3 4 5 6 7 8 9 10\na ${Ao[0]} ${Ao[1]} ${Ao[2]} ${Ao[3]} ${Ao[4]} ${Ao[5]} ${Ao[6]} ${Ao[7]} ${Ao[8]} ${Ao[9]}\nb ${Bo[0]} ${Bo[1]} ${Bo[2]} ${Bo[3]} ${Bo[4]} ${Bo[5]} ${Bo[6]} ${Bo[7]} ${Bo[8]} ${Bo[9]}\nc ${Co[0]} ${Co[1]} ${Co[2]} ${Co[3]} ${Co[4]} ${Co[5]} ${Co[6]} ${Co[7]} ${Co[8]} ${Co[9]}\nd ${Do[0]} ${Do[1]} ${Do[2]} ${Do[3]} ${Do[4]} ${Do[5]} ${Do[6]} ${Do[7]} ${Do[8]} ${Do[9]}\ne ${Eo[0]} ${Eo[1]} ${Eo[2]} ${Eo[3]} ${Eo[4]} ${Eo[5]} ${Eo[6]} ${Eo[7]} ${Eo[8]} ${Eo[9]}\nf ${Fo[0]} ${Fo[1]} ${Fo[2]} ${Fo[3]} ${Fo[4]} ${Fo[5]} ${Fo[6]} ${Fo[7]} ${Fo[8]} ${Fo[9]}\ng ${Go[0]} ${Go[1]} ${Go[2]} ${Go[3]} ${Go[4]} ${Go[5]} ${Go[6]} ${Go[7]} ${Go[8]} ${Go[9]}\n Player 1: ${BPlayer1} Player 2: ${BPlayer2}` , "Battleship")

          TPlayerTwo = true;
          TPlayerOne = false;

        }

      }

    } else if(args[0].toString() == "B") {

      if(Bo[Snumber] != hit && Bo[Snumber] != nothing) {

        if(B2[Snumber] == "p") {

          Bo[Snumber] = "h";

          BCounter2 -= 1;

          msg.channel.send(`You hit a ship!\n You have another Try ${BPlayer1}`);

          Embeds.error(ChannelB, `/ 1 2 3 4 5 6 7 8 9 10\na ${Ao[0]} ${Ao[1]} ${Ao[2]} ${Ao[3]} ${Ao[4]} ${Ao[5]} ${Ao[6]} ${Ao[7]} ${Ao[8]} ${Ao[9]}\nb ${Bo[0]} ${Bo[1]} ${Bo[2]} ${Bo[3]} ${Bo[4]} ${Bo[5]} ${Bo[6]} ${Bo[7]} ${Bo[8]} ${Bo[9]}\nc ${Co[0]} ${Co[1]} ${Co[2]} ${Co[3]} ${Co[4]} ${Co[5]} ${Co[6]} ${Co[7]} ${Co[8]} ${Co[9]}\nd ${Do[0]} ${Do[1]} ${Do[2]} ${Do[3]} ${Do[4]} ${Do[5]} ${Do[6]} ${Do[7]} ${Do[8]} ${Do[9]}\ne ${Eo[0]} ${Eo[1]} ${Eo[2]} ${Eo[3]} ${Eo[4]} ${Eo[5]} ${Eo[6]} ${Eo[7]} ${Eo[8]} ${Eo[9]}\nf ${Fo[0]} ${Fo[1]} ${Fo[2]} ${Fo[3]} ${Fo[4]} ${Fo[5]} ${Fo[6]} ${Fo[7]} ${Fo[8]} ${Fo[9]}\ng ${Go[0]} ${Go[1]} ${Go[2]} ${Go[3]} ${Go[4]} ${Go[5]} ${Go[6]} ${Go[7]} ${Go[8]} ${Go[9]}\n Player 1: ${BPlayer1} Player 2: ${BPlayer2}` , "Battleship")

        } else if (B2[Snumber] == "x") {

          Bo[Snumber] = "n";

          msg.channel.send(`You didnt hit a ship!\nIts your turn ${BPlayer2}`);

          Embeds.error(ChannelB, `/ 1 2 3 4 5 6 7 8 9 10\na ${Ao[0]} ${Ao[1]} ${Ao[2]} ${Ao[3]} ${Ao[4]} ${Ao[5]} ${Ao[6]} ${Ao[7]} ${Ao[8]} ${Ao[9]}\nb ${Bo[0]} ${Bo[1]} ${Bo[2]} ${Bo[3]} ${Bo[4]} ${Bo[5]} ${Bo[6]} ${Bo[7]} ${Bo[8]} ${Bo[9]}\nc ${Co[0]} ${Co[1]} ${Co[2]} ${Co[3]} ${Co[4]} ${Co[5]} ${Co[6]} ${Co[7]} ${Co[8]} ${Co[9]}\nd ${Do[0]} ${Do[1]} ${Do[2]} ${Do[3]} ${Do[4]} ${Do[5]} ${Do[6]} ${Do[7]} ${Do[8]} ${Do[9]}\ne ${Eo[0]} ${Eo[1]} ${Eo[2]} ${Eo[3]} ${Eo[4]} ${Eo[5]} ${Eo[6]} ${Eo[7]} ${Eo[8]} ${Eo[9]}\nf ${Fo[0]} ${Fo[1]} ${Fo[2]} ${Fo[3]} ${Fo[4]} ${Fo[5]} ${Fo[6]} ${Fo[7]} ${Fo[8]} ${Fo[9]}\ng ${Go[0]} ${Go[1]} ${Go[2]} ${Go[3]} ${Go[4]} ${Go[5]} ${Go[6]} ${Go[7]} ${Go[8]} ${Go[9]}\n Player 1: ${BPlayer1} Player 2: ${BPlayer2}` , "Battleship")

          TPlayerTwo = true;
          TPlayerOne = false;

        }

      }

    } else if(args[0].toString() == "C") {

      if(Co[Snumber] != hit && Co[Snumber] != nothing) {

        if(C2[Snumber] == "p") {

          Co[Snumber] = "h";

          BCounter2 -= 1;

          msg.channel.send(`You hit a ship!\n You have another Try ${BPlayer1}`);

          Embeds.error(ChannelB, `/ 1 2 3 4 5 6 7 8 9 10\na ${Ao[0]} ${Ao[1]} ${Ao[2]} ${Ao[3]} ${Ao[4]} ${Ao[5]} ${Ao[6]} ${Ao[7]} ${Ao[8]} ${Ao[9]}\nb ${Bo[0]} ${Bo[1]} ${Bo[2]} ${Bo[3]} ${Bo[4]} ${Bo[5]} ${Bo[6]} ${Bo[7]} ${Bo[8]} ${Bo[9]}\nc ${Co[0]} ${Co[1]} ${Co[2]} ${Co[3]} ${Co[4]} ${Co[5]} ${Co[6]} ${Co[7]} ${Co[8]} ${Co[9]}\nd ${Do[0]} ${Do[1]} ${Do[2]} ${Do[3]} ${Do[4]} ${Do[5]} ${Do[6]} ${Do[7]} ${Do[8]} ${Do[9]}\ne ${Eo[0]} ${Eo[1]} ${Eo[2]} ${Eo[3]} ${Eo[4]} ${Eo[5]} ${Eo[6]} ${Eo[7]} ${Eo[8]} ${Eo[9]}\nf ${Fo[0]} ${Fo[1]} ${Fo[2]} ${Fo[3]} ${Fo[4]} ${Fo[5]} ${Fo[6]} ${Fo[7]} ${Fo[8]} ${Fo[9]}\ng ${Go[0]} ${Go[1]} ${Go[2]} ${Go[3]} ${Go[4]} ${Go[5]} ${Go[6]} ${Go[7]} ${Go[8]} ${Go[9]}\n Player 1: ${BPlayer1} Player 2: ${BPlayer2}` , "Battleship")

        } else if (C2[Snumber] == "x") {

          Co[Snumber] = "n";

          msg.channel.send(`You didnt hit a ship!\nIts your turn ${BPlayer2}`);

          Embeds.error(ChannelB, `/ 1 2 3 4 5 6 7 8 9 10\na ${Ao[0]} ${Ao[1]} ${Ao[2]} ${Ao[3]} ${Ao[4]} ${Ao[5]} ${Ao[6]} ${Ao[7]} ${Ao[8]} ${Ao[9]}\nb ${Bo[0]} ${Bo[1]} ${Bo[2]} ${Bo[3]} ${Bo[4]} ${Bo[5]} ${Bo[6]} ${Bo[7]} ${Bo[8]} ${Bo[9]}\nc ${Co[0]} ${Co[1]} ${Co[2]} ${Co[3]} ${Co[4]} ${Co[5]} ${Co[6]} ${Co[7]} ${Co[8]} ${Co[9]}\nd ${Do[0]} ${Do[1]} ${Do[2]} ${Do[3]} ${Do[4]} ${Do[5]} ${Do[6]} ${Do[7]} ${Do[8]} ${Do[9]}\ne ${Eo[0]} ${Eo[1]} ${Eo[2]} ${Eo[3]} ${Eo[4]} ${Eo[5]} ${Eo[6]} ${Eo[7]} ${Eo[8]} ${Eo[9]}\nf ${Fo[0]} ${Fo[1]} ${Fo[2]} ${Fo[3]} ${Fo[4]} ${Fo[5]} ${Fo[6]} ${Fo[7]} ${Fo[8]} ${Fo[9]}\ng ${Go[0]} ${Go[1]} ${Go[2]} ${Go[3]} ${Go[4]} ${Go[5]} ${Go[6]} ${Go[7]} ${Go[8]} ${Go[9]}\n Player 1: ${BPlayer1} Player 2: ${BPlayer2}` , "Battleship")

          TPlayerTwo = true;
          TPlayerOne = false;

        }

      }

    } else if(args[0].toString() == "D") {

      if(Do[Snumber] != hit && Do[Snumber] != nothing) {

        if(D2[Snumber] == "p") {

          Do[Snumber] = "h";

          BCounter2 -= 1;

          msg.channel.send(`You hit a ship!\n You have another Try ${BPlayer1}`);

          Embeds.error(ChannelB, `/ 1 2 3 4 5 6 7 8 9 10\na ${Ao[0]} ${Ao[1]} ${Ao[2]} ${Ao[3]} ${Ao[4]} ${Ao[5]} ${Ao[6]} ${Ao[7]} ${Ao[8]} ${Ao[9]}\nb ${Bo[0]} ${Bo[1]} ${Bo[2]} ${Bo[3]} ${Bo[4]} ${Bo[5]} ${Bo[6]} ${Bo[7]} ${Bo[8]} ${Bo[9]}\nc ${Co[0]} ${Co[1]} ${Co[2]} ${Co[3]} ${Co[4]} ${Co[5]} ${Co[6]} ${Co[7]} ${Co[8]} ${Co[9]}\nd ${Do[0]} ${Do[1]} ${Do[2]} ${Do[3]} ${Do[4]} ${Do[5]} ${Do[6]} ${Do[7]} ${Do[8]} ${Do[9]}\ne ${Eo[0]} ${Eo[1]} ${Eo[2]} ${Eo[3]} ${Eo[4]} ${Eo[5]} ${Eo[6]} ${Eo[7]} ${Eo[8]} ${Eo[9]}\nf ${Fo[0]} ${Fo[1]} ${Fo[2]} ${Fo[3]} ${Fo[4]} ${Fo[5]} ${Fo[6]} ${Fo[7]} ${Fo[8]} ${Fo[9]}\ng ${Go[0]} ${Go[1]} ${Go[2]} ${Go[3]} ${Go[4]} ${Go[5]} ${Go[6]} ${Go[7]} ${Go[8]} ${Go[9]}\n Player 1: ${BPlayer1} Player 2: ${BPlayer2}` , "Battleship")

        } else if (D2[Snumber] == "x") {

          Do[Snumber] = "n";

          msg.channel.send(`You didnt hit a ship!\nIts your turn ${BPlayer2}`);

          Embeds.error(ChannelB, `/ 1 2 3 4 5 6 7 8 9 10\na ${Ao[0]} ${Ao[1]} ${Ao[2]} ${Ao[3]} ${Ao[4]} ${Ao[5]} ${Ao[6]} ${Ao[7]} ${Ao[8]} ${Ao[9]}\nb ${Bo[0]} ${Bo[1]} ${Bo[2]} ${Bo[3]} ${Bo[4]} ${Bo[5]} ${Bo[6]} ${Bo[7]} ${Bo[8]} ${Bo[9]}\nc ${Co[0]} ${Co[1]} ${Co[2]} ${Co[3]} ${Co[4]} ${Co[5]} ${Co[6]} ${Co[7]} ${Co[8]} ${Co[9]}\nd ${Do[0]} ${Do[1]} ${Do[2]} ${Do[3]} ${Do[4]} ${Do[5]} ${Do[6]} ${Do[7]} ${Do[8]} ${Do[9]}\ne ${Eo[0]} ${Eo[1]} ${Eo[2]} ${Eo[3]} ${Eo[4]} ${Eo[5]} ${Eo[6]} ${Eo[7]} ${Eo[8]} ${Eo[9]}\nf ${Fo[0]} ${Fo[1]} ${Fo[2]} ${Fo[3]} ${Fo[4]} ${Fo[5]} ${Fo[6]} ${Fo[7]} ${Fo[8]} ${Fo[9]}\ng ${Go[0]} ${Go[1]} ${Go[2]} ${Go[3]} ${Go[4]} ${Go[5]} ${Go[6]} ${Go[7]} ${Go[8]} ${Go[9]}\n Player 1: ${BPlayer1} Player 2: ${BPlayer2}` , "Battleship")

          TPlayerTwo = true;
          TPlayerOne = false;

        }

      }

    } else if(args[0].toString() == "E") {

      if(Eo[Snumber] != hit && Eo[Snumber] != nothing) {

        if(E2[Snumber] == "p") {

          Eo[Snumber] = "h";

          BCounter2 -= 1;

          msg.channel.send(`You hit a ship!\n You have another Try ${BPlayer1}`);

          Embeds.error(ChannelB, `/ 1 2 3 4 5 6 7 8 9 10\na ${Ao[0]} ${Ao[1]} ${Ao[2]} ${Ao[3]} ${Ao[4]} ${Ao[5]} ${Ao[6]} ${Ao[7]} ${Ao[8]} ${Ao[9]}\nb ${Bo[0]} ${Bo[1]} ${Bo[2]} ${Bo[3]} ${Bo[4]} ${Bo[5]} ${Bo[6]} ${Bo[7]} ${Bo[8]} ${Bo[9]}\nc ${Co[0]} ${Co[1]} ${Co[2]} ${Co[3]} ${Co[4]} ${Co[5]} ${Co[6]} ${Co[7]} ${Co[8]} ${Co[9]}\nd ${Do[0]} ${Do[1]} ${Do[2]} ${Do[3]} ${Do[4]} ${Do[5]} ${Do[6]} ${Do[7]} ${Do[8]} ${Do[9]}\ne ${Eo[0]} ${Eo[1]} ${Eo[2]} ${Eo[3]} ${Eo[4]} ${Eo[5]} ${Eo[6]} ${Eo[7]} ${Eo[8]} ${Eo[9]}\nf ${Fo[0]} ${Fo[1]} ${Fo[2]} ${Fo[3]} ${Fo[4]} ${Fo[5]} ${Fo[6]} ${Fo[7]} ${Fo[8]} ${Fo[9]}\ng ${Go[0]} ${Go[1]} ${Go[2]} ${Go[3]} ${Go[4]} ${Go[5]} ${Go[6]} ${Go[7]} ${Go[8]} ${Go[9]}\n Player 1: ${BPlayer1} Player 2: ${BPlayer2}` , "Battleship")

        } else if (E2[Snumber] == "x") {

          Eo[Snumber] = "n";

          msg.channel.send(`You didnt hit a ship!\nIts your turn ${BPlayer2}`);

          Embeds.error(ChannelB, `/ 1 2 3 4 5 6 7 8 9 10\na ${Ao[0]} ${Ao[1]} ${Ao[2]} ${Ao[3]} ${Ao[4]} ${Ao[5]} ${Ao[6]} ${Ao[7]} ${Ao[8]} ${Ao[9]}\nb ${Bo[0]} ${Bo[1]} ${Bo[2]} ${Bo[3]} ${Bo[4]} ${Bo[5]} ${Bo[6]} ${Bo[7]} ${Bo[8]} ${Bo[9]}\nc ${Co[0]} ${Co[1]} ${Co[2]} ${Co[3]} ${Co[4]} ${Co[5]} ${Co[6]} ${Co[7]} ${Co[8]} ${Co[9]}\nd ${Do[0]} ${Do[1]} ${Do[2]} ${Do[3]} ${Do[4]} ${Do[5]} ${Do[6]} ${Do[7]} ${Do[8]} ${Do[9]}\ne ${Eo[0]} ${Eo[1]} ${Eo[2]} ${Eo[3]} ${Eo[4]} ${Eo[5]} ${Eo[6]} ${Eo[7]} ${Eo[8]} ${Eo[9]}\nf ${Fo[0]} ${Fo[1]} ${Fo[2]} ${Fo[3]} ${Fo[4]} ${Fo[5]} ${Fo[6]} ${Fo[7]} ${Fo[8]} ${Fo[9]}\ng ${Go[0]} ${Go[1]} ${Go[2]} ${Go[3]} ${Go[4]} ${Go[5]} ${Go[6]} ${Go[7]} ${Go[8]} ${Go[9]}\n Player 1: ${BPlayer1} Player 2: ${BPlayer2}` , "Battleship")

          TPlayerTwo = true;
          TPlayerOne = false;

        }

      }

    } else if(args[0].toString() == "F") {

      if(Fo[Snumber] != hit && Fo[Snumber] != nothing) {

        if(F2[Snumber] == "p") {

          Fo[Snumber] = "h";

          BCounter2 -= 1;

          msg.channel.send(`You hit a ship!\n You have another Try ${BPlayer1}`);

          Embeds.error(ChannelB, `/ 1 2 3 4 5 6 7 8 9 10\na ${Ao[0]} ${Ao[1]} ${Ao[2]} ${Ao[3]} ${Ao[4]} ${Ao[5]} ${Ao[6]} ${Ao[7]} ${Ao[8]} ${Ao[9]}\nb ${Bo[0]} ${Bo[1]} ${Bo[2]} ${Bo[3]} ${Bo[4]} ${Bo[5]} ${Bo[6]} ${Bo[7]} ${Bo[8]} ${Bo[9]}\nc ${Co[0]} ${Co[1]} ${Co[2]} ${Co[3]} ${Co[4]} ${Co[5]} ${Co[6]} ${Co[7]} ${Co[8]} ${Co[9]}\nd ${Do[0]} ${Do[1]} ${Do[2]} ${Do[3]} ${Do[4]} ${Do[5]} ${Do[6]} ${Do[7]} ${Do[8]} ${Do[9]}\ne ${Eo[0]} ${Eo[1]} ${Eo[2]} ${Eo[3]} ${Eo[4]} ${Eo[5]} ${Eo[6]} ${Eo[7]} ${Eo[8]} ${Eo[9]}\nf ${Fo[0]} ${Fo[1]} ${Fo[2]} ${Fo[3]} ${Fo[4]} ${Fo[5]} ${Fo[6]} ${Fo[7]} ${Fo[8]} ${Fo[9]}\ng ${Go[0]} ${Go[1]} ${Go[2]} ${Go[3]} ${Go[4]} ${Go[5]} ${Go[6]} ${Go[7]} ${Go[8]} ${Go[9]}\n Player 1: ${BPlayer1} Player 2: ${BPlayer2}` , "Battleship")

        } else if (F2[Snumber] == "x") {

          Fo[Snumber] = "n";

          msg.channel.send(`You didnt hit a ship!\nIts your turn ${BPlayer2}`);

          Embeds.error(ChannelB, `/ 1 2 3 4 5 6 7 8 9 10\na ${Ao[0]} ${Ao[1]} ${Ao[2]} ${Ao[3]} ${Ao[4]} ${Ao[5]} ${Ao[6]} ${Ao[7]} ${Ao[8]} ${Ao[9]}\nb ${Bo[0]} ${Bo[1]} ${Bo[2]} ${Bo[3]} ${Bo[4]} ${Bo[5]} ${Bo[6]} ${Bo[7]} ${Bo[8]} ${Bo[9]}\nc ${Co[0]} ${Co[1]} ${Co[2]} ${Co[3]} ${Co[4]} ${Co[5]} ${Co[6]} ${Co[7]} ${Co[8]} ${Co[9]}\nd ${Do[0]} ${Do[1]} ${Do[2]} ${Do[3]} ${Do[4]} ${Do[5]} ${Do[6]} ${Do[7]} ${Do[8]} ${Do[9]}\ne ${Eo[0]} ${Eo[1]} ${Eo[2]} ${Eo[3]} ${Eo[4]} ${Eo[5]} ${Eo[6]} ${Eo[7]} ${Eo[8]} ${Eo[9]}\nf ${Fo[0]} ${Fo[1]} ${Fo[2]} ${Fo[3]} ${Fo[4]} ${Fo[5]} ${Fo[6]} ${Fo[7]} ${Fo[8]} ${Fo[9]}\ng ${Go[0]} ${Go[1]} ${Go[2]} ${Go[3]} ${Go[4]} ${Go[5]} ${Go[6]} ${Go[7]} ${Go[8]} ${Go[9]}\n Player 1: ${BPlayer1} Player 2: ${BPlayer2}` , "Battleship")

          TPlayerTwo = true;
          TPlayerOne = false;

        }

      }

    } else if(args[0].toString() == "G") {

      if(Go[Snumber] != hit && Go[Snumber] != nothing) {

        if(G2[Snumber] == "p") {

          Go[Snumber] = "h";

          BCounter2 -= 1;

          msg.channel.send(`You hit a ship!\n You have another Try ${BPlayer1}`);

          Embeds.error(ChannelB, `/ 1 2 3 4 5 6 7 8 9 10\na ${Ao[0]} ${Ao[1]} ${Ao[2]} ${Ao[3]} ${Ao[4]} ${Ao[5]} ${Ao[6]} ${Ao[7]} ${Ao[8]} ${Ao[9]}\nb ${Bo[0]} ${Bo[1]} ${Bo[2]} ${Bo[3]} ${Bo[4]} ${Bo[5]} ${Bo[6]} ${Bo[7]} ${Bo[8]} ${Bo[9]}\nc ${Co[0]} ${Co[1]} ${Co[2]} ${Co[3]} ${Co[4]} ${Co[5]} ${Co[6]} ${Co[7]} ${Co[8]} ${Co[9]}\nd ${Do[0]} ${Do[1]} ${Do[2]} ${Do[3]} ${Do[4]} ${Do[5]} ${Do[6]} ${Do[7]} ${Do[8]} ${Do[9]}\ne ${Eo[0]} ${Eo[1]} ${Eo[2]} ${Eo[3]} ${Eo[4]} ${Eo[5]} ${Eo[6]} ${Eo[7]} ${Eo[8]} ${Eo[9]}\nf ${Fo[0]} ${Fo[1]} ${Fo[2]} ${Fo[3]} ${Fo[4]} ${Fo[5]} ${Fo[6]} ${Fo[7]} ${Fo[8]} ${Fo[9]}\ng ${Go[0]} ${Go[1]} ${Go[2]} ${Go[3]} ${Go[4]} ${Go[5]} ${Go[6]} ${Go[7]} ${Go[8]} ${Go[9]}\n Player 1: ${BPlayer1} Player 2: ${BPlayer2}` , "Battleship")

        } else if (G2[Snumber] == "x") {

          Go[Snumber] = "n";

          msg.channel.send(`You didnt hit a ship!\nIts your turn ${BPlayer2}`);

          Embeds.error(ChannelB, `/ 1 2 3 4 5 6 7 8 9 10\na ${Ao[0]} ${Ao[1]} ${Ao[2]} ${Ao[3]} ${Ao[4]} ${Ao[5]} ${Ao[6]} ${Ao[7]} ${Ao[8]} ${Ao[9]}\nb ${Bo[0]} ${Bo[1]} ${Bo[2]} ${Bo[3]} ${Bo[4]} ${Bo[5]} ${Bo[6]} ${Bo[7]} ${Bo[8]} ${Bo[9]}\nc ${Co[0]} ${Co[1]} ${Co[2]} ${Co[3]} ${Co[4]} ${Co[5]} ${Co[6]} ${Co[7]} ${Co[8]} ${Co[9]}\nd ${Do[0]} ${Do[1]} ${Do[2]} ${Do[3]} ${Do[4]} ${Do[5]} ${Do[6]} ${Do[7]} ${Do[8]} ${Do[9]}\ne ${Eo[0]} ${Eo[1]} ${Eo[2]} ${Eo[3]} ${Eo[4]} ${Eo[5]} ${Eo[6]} ${Eo[7]} ${Eo[8]} ${Eo[9]}\nf ${Fo[0]} ${Fo[1]} ${Fo[2]} ${Fo[3]} ${Fo[4]} ${Fo[5]} ${Fo[6]} ${Fo[7]} ${Fo[8]} ${Fo[9]}\ng ${Go[0]} ${Go[1]} ${Go[2]} ${Go[3]} ${Go[4]} ${Go[5]} ${Go[6]} ${Go[7]} ${Go[8]} ${Go[9]}\n Player 1: ${BPlayer1} Player 2: ${BPlayer2}` , "Battleship")

          TPlayerTwo = true;
          TPlayerOne = false;

        }

      }

    }

    if(BCounter2 == 0) {

      msg.channel.send(`You won the game ${BPlayer1}\nRemoved Roles and reset the game`)

      for(var i = 0; i < 10; i++) {

        A[i] = "x";
        B[i] = "x";
        C[i] = "x";
        D[i] = "x";
        E[i] = "x";
        F[i] = "x";
        G[i] = "x";

        A2[i] = "x";
        B2[i] = "x";
        C2[i] = "x";
        D2[i] = "x";
        E2[i] = "x";
        F2[i] = "x";
        G2[i] = "x";

        Ao[i] = "x";
        Bo[i] = "x";
        Co[i] = "x";
        Do[i] = "x";
        Eo[i] = "x";
        Fo[i] = "x";
        Go[i] = "x";
        
        A[i] = "x";
        B[i] = "x";
        C[i] = "x";
        D[i] = "x";
        E[i] = "x";
        F[i] = "x";
        G[i] = "x";
  
      }

      BPlayer1.removeRole(Role1);
      BPlayer2.removeRole(Role2);
  
      AllShips1[0] = 1;
      AllShips1[1] = 1;
      AllShips1[2] = 2;
      AllShips1[3] = 2;

      AllShips2[0] = 1;
      AllShips2[1] = 1;
      AllShips2[2] = 2;
      AllShips2[3] = 2;

      BCounter1 = 19;
      BCounter2 = 19;

      BPlayer1 = null;
      BPlayer2 = null;

      playable = false;

      PlayerOneReady = false;
      PlayerTwoReady = false;

    }

  } else {

    msg.channel.send("You need to type it in the battleship channel + add a letter and a number!")

  }

}

function cmd_bt2(msg, args) {

  var Role1 = "498570745048465418";
  var Role2 = "498570808394907648";

  var ChannelB = client.channels.find("id", "498556497593237523");

  var cont = msg.content;
  var args = cont.toUpperCase().split(' ').slice(1)

  var hit = "h";
  var nothing = "n";

  if(TPlayerTwo == true && playable == true && args[0] != null && args[1] != null && msg.channel == ChannelB && msg.member == BPlayer2) {

    var Snumber = parseInt(args[1] - 1);

    if(args[0].toString() == "A") {

      if(At[Snumber] != hit && At[Snumber] != nothing) {

        if(A[Snumber] == "p") {

          At[Snumber] = "h";

          BCounter1 -= 1;

          msg.channel.send(`You hit a ship!\n You have another Try ${BPlayer2}`);

          Embeds.error(ChannelB, `/ 1 2 3 4 5 6 7 8 9 10\na ${At[0]} ${At[1]} ${At[2]} ${At[3]} ${At[4]} ${At[5]} ${At[6]} ${At[7]} ${At[8]} ${At[9]}\nb ${Bt[0]} ${Bt[1]} ${Bt[2]} ${Bt[3]} ${Bt[4]} ${Bt[5]} ${Bt[6]} ${Bt[7]} ${Bt[8]} ${Bt[9]}\nc ${Ct[0]} ${Ct[1]} ${Ct[2]} ${Ct[3]} ${Ct[4]} ${Ct[5]} ${Ct[6]} ${Ct[7]} ${Ct[8]} ${Ct[9]}\nd ${Dt[0]} ${Dt[1]} ${Dt[2]} ${Dt[3]} ${Dt[4]} ${Dt[5]} ${Dt[6]} ${Dt[7]} ${Dt[8]} ${Dt[9]}\ne ${Et[0]} ${Et[1]} ${Et[2]} ${Et[3]} ${Et[4]} ${Et[5]} ${Et[6]} ${Et[7]} ${Et[8]} ${Et[9]}\nf ${Ft[0]} ${Ft[1]} ${Ft[2]} ${Ft[3]} ${Ft[4]} ${Ft[5]} ${Ft[6]} ${Ft[7]} ${Ft[8]} ${Ft[9]}\ng ${Gt[0]} ${Gt[1]} ${Gt[2]} ${Gt[3]} ${Gt[4]} ${Gt[5]} ${Gt[6]} ${Gt[7]} ${Gt[8]} ${Gt[9]}\n Player 1: ${BPlayer1} Player 2: ${BPlayer2}` , "Battleship")

        } else if (A[Snumber] == "x") {

          At[Snumber] = "n";

          msg.channel.send(`You didnt hit a ship!\nIts your turn ${BPlayer1}`);

          Embeds.error(ChannelB, `/ 1 2 3 4 5 6 7 8 9 10\na ${At[0]} ${At[1]} ${At[2]} ${At[3]} ${At[4]} ${At[5]} ${At[6]} ${At[7]} ${At[8]} ${At[9]}\nb ${Bt[0]} ${Bt[1]} ${Bt[2]} ${Bt[3]} ${Bt[4]} ${Bt[5]} ${Bt[6]} ${Bt[7]} ${Bt[8]} ${Bt[9]}\nc ${Ct[0]} ${Ct[1]} ${Ct[2]} ${Ct[3]} ${Ct[4]} ${Ct[5]} ${Ct[6]} ${Ct[7]} ${Ct[8]} ${Ct[9]}\nd ${Dt[0]} ${Dt[1]} ${Dt[2]} ${Dt[3]} ${Dt[4]} ${Dt[5]} ${Dt[6]} ${Dt[7]} ${Dt[8]} ${Dt[9]}\ne ${Et[0]} ${Et[1]} ${Et[2]} ${Et[3]} ${Et[4]} ${Et[5]} ${Et[6]} ${Et[7]} ${Et[8]} ${Et[9]}\nf ${Ft[0]} ${Ft[1]} ${Ft[2]} ${Ft[3]} ${Ft[4]} ${Ft[5]} ${Ft[6]} ${Ft[7]} ${Ft[8]} ${Ft[9]}\ng ${Gt[0]} ${Gt[1]} ${Gt[2]} ${Gt[3]} ${Gt[4]} ${Gt[5]} ${Gt[6]} ${Gt[7]} ${Gt[8]} ${Gt[9]}\n Player 1: ${BPlayer1} Player 2: ${BPlayer2}` , "Battleship")

          TPlayerOne = true;
          TPlayerTwo = false;

        }

      }

    } else if(args[0].toString() == "B") {

      if(Bt[Snumber] != hit && Bt[Snumber] != nothing) {

        if(B[Snumber] == "p") {

          Bt[Snumber] = "h";

          BCounter1 -= 1;

          msg.channel.send(`You hit a ship!\n You have another Try ${BPlayer2}`);

          Embeds.error(ChannelB, `/ 1 2 3 4 5 6 7 8 9 10\na ${At[0]} ${At[1]} ${At[2]} ${At[3]} ${At[4]} ${At[5]} ${At[6]} ${At[7]} ${At[8]} ${At[9]}\nb ${Bt[0]} ${Bt[1]} ${Bt[2]} ${Bt[3]} ${Bt[4]} ${Bt[5]} ${Bt[6]} ${Bt[7]} ${Bt[8]} ${Bt[9]}\nc ${Ct[0]} ${Ct[1]} ${Ct[2]} ${Ct[3]} ${Ct[4]} ${Ct[5]} ${Ct[6]} ${Ct[7]} ${Ct[8]} ${Ct[9]}\nd ${Dt[0]} ${Dt[1]} ${Dt[2]} ${Dt[3]} ${Dt[4]} ${Dt[5]} ${Dt[6]} ${Dt[7]} ${Dt[8]} ${Dt[9]}\ne ${Et[0]} ${Et[1]} ${Et[2]} ${Et[3]} ${Et[4]} ${Et[5]} ${Et[6]} ${Et[7]} ${Et[8]} ${Et[9]}\nf ${Ft[0]} ${Ft[1]} ${Ft[2]} ${Ft[3]} ${Ft[4]} ${Ft[5]} ${Ft[6]} ${Ft[7]} ${Ft[8]} ${Ft[9]}\ng ${Gt[0]} ${Gt[1]} ${Gt[2]} ${Gt[3]} ${Gt[4]} ${Gt[5]} ${Gt[6]} ${Gt[7]} ${Gt[8]} ${Gt[9]}\n Player 1: ${BPlayer1} Player 2: ${BPlayer2}` , "Battleship")

        } else if (B[Snumber] == "x") {

          Bt[Snumber] = "n";

          msg.channel.send(`You didnt hit a ship!\nIts your turn ${BPlayer1}`);

          Embeds.error(ChannelB, `/ 1 2 3 4 5 6 7 8 9 10\na ${At[0]} ${At[1]} ${At[2]} ${At[3]} ${At[4]} ${At[5]} ${At[6]} ${At[7]} ${At[8]} ${At[9]}\nb ${Bt[0]} ${Bt[1]} ${Bt[2]} ${Bt[3]} ${Bt[4]} ${Bt[5]} ${Bt[6]} ${Bt[7]} ${Bt[8]} ${Bt[9]}\nc ${Ct[0]} ${Ct[1]} ${Ct[2]} ${Ct[3]} ${Ct[4]} ${Ct[5]} ${Ct[6]} ${Ct[7]} ${Ct[8]} ${Ct[9]}\nd ${Dt[0]} ${Dt[1]} ${Dt[2]} ${Dt[3]} ${Dt[4]} ${Dt[5]} ${Dt[6]} ${Dt[7]} ${Dt[8]} ${Dt[9]}\ne ${Et[0]} ${Et[1]} ${Et[2]} ${Et[3]} ${Et[4]} ${Et[5]} ${Et[6]} ${Et[7]} ${Et[8]} ${Et[9]}\nf ${Ft[0]} ${Ft[1]} ${Ft[2]} ${Ft[3]} ${Ft[4]} ${Ft[5]} ${Ft[6]} ${Ft[7]} ${Ft[8]} ${Ft[9]}\ng ${Gt[0]} ${Gt[1]} ${Gt[2]} ${Gt[3]} ${Gt[4]} ${Gt[5]} ${Gt[6]} ${Gt[7]} ${Gt[8]} ${Gt[9]}\n Player 1: ${BPlayer1} Player 2: ${BPlayer2}` , "Battleship")

          TPlayerOne = true;
          TPlayerTwo = false;

        }

      }

    } else if(args[0].toString() == "C") {

      if(Ct[Snumber] != hit && Ct[Snumber] != nothing) {

        if(C[Snumber] == "p") {

          Ct[Snumber] = "h";

          BCounter1 -= 1;

          msg.channel.send(`You hit a ship!\n You have another Try ${BPlayer2}`);

          Embeds.error(ChannelB, `/ 1 2 3 4 5 6 7 8 9 10\na ${At[0]} ${At[1]} ${At[2]} ${At[3]} ${At[4]} ${At[5]} ${At[6]} ${At[7]} ${At[8]} ${At[9]}\nb ${Bt[0]} ${Bt[1]} ${Bt[2]} ${Bt[3]} ${Bt[4]} ${Bt[5]} ${Bt[6]} ${Bt[7]} ${Bt[8]} ${Bt[9]}\nc ${Ct[0]} ${Ct[1]} ${Ct[2]} ${Ct[3]} ${Ct[4]} ${Ct[5]} ${Ct[6]} ${Ct[7]} ${Ct[8]} ${Ct[9]}\nd ${Dt[0]} ${Dt[1]} ${Dt[2]} ${Dt[3]} ${Dt[4]} ${Dt[5]} ${Dt[6]} ${Dt[7]} ${Dt[8]} ${Dt[9]}\ne ${Et[0]} ${Et[1]} ${Et[2]} ${Et[3]} ${Et[4]} ${Et[5]} ${Et[6]} ${Et[7]} ${Et[8]} ${Et[9]}\nf ${Ft[0]} ${Ft[1]} ${Ft[2]} ${Ft[3]} ${Ft[4]} ${Ft[5]} ${Ft[6]} ${Ft[7]} ${Ft[8]} ${Ft[9]}\ng ${Gt[0]} ${Gt[1]} ${Gt[2]} ${Gt[3]} ${Gt[4]} ${Gt[5]} ${Gt[6]} ${Gt[7]} ${Gt[8]} ${Gt[9]}\n Player 1: ${BPlayer1} Player 2: ${BPlayer2}` , "Battleship")

        } else if (C[Snumber] == "x") {

          Ct[Snumber] = "n";

          msg.channel.send(`You didnt hit a ship!\nIts your turn ${BPlayer1}`);

          Embeds.error(ChannelB, `/ 1 2 3 4 5 6 7 8 9 10\na ${At[0]} ${At[1]} ${At[2]} ${At[3]} ${At[4]} ${At[5]} ${At[6]} ${At[7]} ${At[8]} ${At[9]}\nb ${Bt[0]} ${Bt[1]} ${Bt[2]} ${Bt[3]} ${Bt[4]} ${Bt[5]} ${Bt[6]} ${Bt[7]} ${Bt[8]} ${Bt[9]}\nc ${Ct[0]} ${Ct[1]} ${Ct[2]} ${Ct[3]} ${Ct[4]} ${Ct[5]} ${Ct[6]} ${Ct[7]} ${Ct[8]} ${Ct[9]}\nd ${Dt[0]} ${Dt[1]} ${Dt[2]} ${Dt[3]} ${Dt[4]} ${Dt[5]} ${Dt[6]} ${Dt[7]} ${Dt[8]} ${Dt[9]}\ne ${Et[0]} ${Et[1]} ${Et[2]} ${Et[3]} ${Et[4]} ${Et[5]} ${Et[6]} ${Et[7]} ${Et[8]} ${Et[9]}\nf ${Ft[0]} ${Ft[1]} ${Ft[2]} ${Ft[3]} ${Ft[4]} ${Ft[5]} ${Ft[6]} ${Ft[7]} ${Ft[8]} ${Ft[9]}\ng ${Gt[0]} ${Gt[1]} ${Gt[2]} ${Gt[3]} ${Gt[4]} ${Gt[5]} ${Gt[6]} ${Gt[7]} ${Gt[8]} ${Gt[9]}\n Player 1: ${BPlayer1} Player 2: ${BPlayer2}` , "Battleship")

          TPlayerOne = true;
          TPlayerTwo = false;

        }

      }

    } else if(args[0].toString() == "D") {

      if(Dt[Snumber] != hit && Dt[Snumber] != nothing) {

        if(D[Snumber] == "p") {

          Dt[Snumber] = "h";

          BCounter1 -= 1;

          msg.channel.send(`You hit a ship!\n You have another Try ${BPlayer2}`);

          Embeds.error(ChannelB, `/ 1 2 3 4 5 6 7 8 9 10\na ${At[0]} ${At[1]} ${At[2]} ${At[3]} ${At[4]} ${At[5]} ${At[6]} ${At[7]} ${At[8]} ${At[9]}\nb ${Bt[0]} ${Bt[1]} ${Bt[2]} ${Bt[3]} ${Bt[4]} ${Bt[5]} ${Bt[6]} ${Bt[7]} ${Bt[8]} ${Bt[9]}\nc ${Ct[0]} ${Ct[1]} ${Ct[2]} ${Ct[3]} ${Ct[4]} ${Ct[5]} ${Ct[6]} ${Ct[7]} ${Ct[8]} ${Ct[9]}\nd ${Dt[0]} ${Dt[1]} ${Dt[2]} ${Dt[3]} ${Dt[4]} ${Dt[5]} ${Dt[6]} ${Dt[7]} ${Dt[8]} ${Dt[9]}\ne ${Et[0]} ${Et[1]} ${Et[2]} ${Et[3]} ${Et[4]} ${Et[5]} ${Et[6]} ${Et[7]} ${Et[8]} ${Et[9]}\nf ${Ft[0]} ${Ft[1]} ${Ft[2]} ${Ft[3]} ${Ft[4]} ${Ft[5]} ${Ft[6]} ${Ft[7]} ${Ft[8]} ${Ft[9]}\ng ${Gt[0]} ${Gt[1]} ${Gt[2]} ${Gt[3]} ${Gt[4]} ${Gt[5]} ${Gt[6]} ${Gt[7]} ${Gt[8]} ${Gt[9]}\n Player 1: ${BPlayer1} Player 2: ${BPlayer2}` , "Battleship")

        } else if (D[Snumber] == "x") {

          Dt[Snumber] = "n";

          msg.channel.send(`You didnt hit a ship!\nIts your turn ${BPlayer1}`);

          Embeds.error(ChannelB, `/ 1 2 3 4 5 6 7 8 9 10\na ${At[0]} ${At[1]} ${At[2]} ${At[3]} ${At[4]} ${At[5]} ${At[6]} ${At[7]} ${At[8]} ${At[9]}\nb ${Bt[0]} ${Bt[1]} ${Bt[2]} ${Bt[3]} ${Bt[4]} ${Bt[5]} ${Bt[6]} ${Bt[7]} ${Bt[8]} ${Bt[9]}\nc ${Ct[0]} ${Ct[1]} ${Ct[2]} ${Ct[3]} ${Ct[4]} ${Ct[5]} ${Ct[6]} ${Ct[7]} ${Ct[8]} ${Ct[9]}\nd ${Dt[0]} ${Dt[1]} ${Dt[2]} ${Dt[3]} ${Dt[4]} ${Dt[5]} ${Dt[6]} ${Dt[7]} ${Dt[8]} ${Dt[9]}\ne ${Et[0]} ${Et[1]} ${Et[2]} ${Et[3]} ${Et[4]} ${Et[5]} ${Et[6]} ${Et[7]} ${Et[8]} ${Et[9]}\nf ${Ft[0]} ${Ft[1]} ${Ft[2]} ${Ft[3]} ${Ft[4]} ${Ft[5]} ${Ft[6]} ${Ft[7]} ${Ft[8]} ${Ft[9]}\ng ${Gt[0]} ${Gt[1]} ${Gt[2]} ${Gt[3]} ${Gt[4]} ${Gt[5]} ${Gt[6]} ${Gt[7]} ${Gt[8]} ${Gt[9]}\n Player 1: ${BPlayer1} Player 2: ${BPlayer2}` , "Battleship")

          TPlayerOne = true;
          TPlayerTwo = false;

        }

      }

    } else if(args[0].toString() == "E") {

      if(Et[Snumber] != hit && Et[Snumber] != nothing) {

        if(E[Snumber] == "p") {

          Et[Snumber] = "h";

          BCounter1 -= 1;

          msg.channel.send(`You hit a ship!\n You have another Try ${BPlayer2}`);

          Embeds.error(ChannelB, `/ 1 2 3 4 5 6 7 8 9 10\na ${At[0]} ${At[1]} ${At[2]} ${At[3]} ${At[4]} ${At[5]} ${At[6]} ${At[7]} ${At[8]} ${At[9]}\nb ${Bt[0]} ${Bt[1]} ${Bt[2]} ${Bt[3]} ${Bt[4]} ${Bt[5]} ${Bt[6]} ${Bt[7]} ${Bt[8]} ${Bt[9]}\nc ${Ct[0]} ${Ct[1]} ${Ct[2]} ${Ct[3]} ${Ct[4]} ${Ct[5]} ${Ct[6]} ${Ct[7]} ${Ct[8]} ${Ct[9]}\nd ${Dt[0]} ${Dt[1]} ${Dt[2]} ${Dt[3]} ${Dt[4]} ${Dt[5]} ${Dt[6]} ${Dt[7]} ${Dt[8]} ${Dt[9]}\ne ${Et[0]} ${Et[1]} ${Et[2]} ${Et[3]} ${Et[4]} ${Et[5]} ${Et[6]} ${Et[7]} ${Et[8]} ${Et[9]}\nf ${Ft[0]} ${Ft[1]} ${Ft[2]} ${Ft[3]} ${Ft[4]} ${Ft[5]} ${Ft[6]} ${Ft[7]} ${Ft[8]} ${Ft[9]}\ng ${Gt[0]} ${Gt[1]} ${Gt[2]} ${Gt[3]} ${Gt[4]} ${Gt[5]} ${Gt[6]} ${Gt[7]} ${Gt[8]} ${Gt[9]}\n Player 1: ${BPlayer1} Player 2: ${BPlayer2}` , "Battleship")

        } else if (E[Snumber] == "x") {

          Et[Snumber] = "n";

          msg.channel.send(`You didnt hit a ship!\nIts your turn ${BPlayer1}`);

          Embeds.error(ChannelB, `/ 1 2 3 4 5 6 7 8 9 10\na ${At[0]} ${At[1]} ${At[2]} ${At[3]} ${At[4]} ${At[5]} ${At[6]} ${At[7]} ${At[8]} ${At[9]}\nb ${Bt[0]} ${Bt[1]} ${Bt[2]} ${Bt[3]} ${Bt[4]} ${Bt[5]} ${Bt[6]} ${Bt[7]} ${Bt[8]} ${Bt[9]}\nc ${Ct[0]} ${Ct[1]} ${Ct[2]} ${Ct[3]} ${Ct[4]} ${Ct[5]} ${Ct[6]} ${Ct[7]} ${Ct[8]} ${Ct[9]}\nd ${Dt[0]} ${Dt[1]} ${Dt[2]} ${Dt[3]} ${Dt[4]} ${Dt[5]} ${Dt[6]} ${Dt[7]} ${Dt[8]} ${Dt[9]}\ne ${Et[0]} ${Et[1]} ${Et[2]} ${Et[3]} ${Et[4]} ${Et[5]} ${Et[6]} ${Et[7]} ${Et[8]} ${Et[9]}\nf ${Ft[0]} ${Ft[1]} ${Ft[2]} ${Ft[3]} ${Ft[4]} ${Ft[5]} ${Ft[6]} ${Ft[7]} ${Ft[8]} ${Ft[9]}\ng ${Gt[0]} ${Gt[1]} ${Gt[2]} ${Gt[3]} ${Gt[4]} ${Gt[5]} ${Gt[6]} ${Gt[7]} ${Gt[8]} ${Gt[9]}\n Player 1: ${BPlayer1} Player 2: ${BPlayer2}` , "Battleship")

          TPlayerOne = true;
          TPlayerTwo = false;

        }

      }

    } else if(args[0].toString() == "F") {

      if(Ft[Snumber] != hit && Ft[Snumber] != nothing) {

        if(F[Snumber] == "p") {

          Ft[Snumber] = "h";

          BCounter1 -= 1;

          msg.channel.send(`You hit a ship!\n You have another Try ${BPlayer2}`);

          Embeds.error(ChannelB, `/ 1 2 3 4 5 6 7 8 9 10\na ${At[0]} ${At[1]} ${At[2]} ${At[3]} ${At[4]} ${At[5]} ${At[6]} ${At[7]} ${At[8]} ${At[9]}\nb ${Bt[0]} ${Bt[1]} ${Bt[2]} ${Bt[3]} ${Bt[4]} ${Bt[5]} ${Bt[6]} ${Bt[7]} ${Bt[8]} ${Bt[9]}\nc ${Ct[0]} ${Ct[1]} ${Ct[2]} ${Ct[3]} ${Ct[4]} ${Ct[5]} ${Ct[6]} ${Ct[7]} ${Ct[8]} ${Ct[9]}\nd ${Dt[0]} ${Dt[1]} ${Dt[2]} ${Dt[3]} ${Dt[4]} ${Dt[5]} ${Dt[6]} ${Dt[7]} ${Dt[8]} ${Dt[9]}\ne ${Et[0]} ${Et[1]} ${Et[2]} ${Et[3]} ${Et[4]} ${Et[5]} ${Et[6]} ${Et[7]} ${Et[8]} ${Et[9]}\nf ${Ft[0]} ${Ft[1]} ${Ft[2]} ${Ft[3]} ${Ft[4]} ${Ft[5]} ${Ft[6]} ${Ft[7]} ${Ft[8]} ${Ft[9]}\ng ${Gt[0]} ${Gt[1]} ${Gt[2]} ${Gt[3]} ${Gt[4]} ${Gt[5]} ${Gt[6]} ${Gt[7]} ${Gt[8]} ${Gt[9]}\n Player 1: ${BPlayer1} Player 2: ${BPlayer2}` , "Battleship")

        } else if (F[Snumber] == "x") {

          Ft[Snumber] = "n";

          msg.channel.send(`You didnt hit a ship!\nIts your turn ${BPlayer1}`);

          Embeds.error(ChannelB, `/ 1 2 3 4 5 6 7 8 9 10\na ${At[0]} ${At[1]} ${At[2]} ${At[3]} ${At[4]} ${At[5]} ${At[6]} ${At[7]} ${At[8]} ${At[9]}\nb ${Bt[0]} ${Bt[1]} ${Bt[2]} ${Bt[3]} ${Bt[4]} ${Bt[5]} ${Bt[6]} ${Bt[7]} ${Bt[8]} ${Bt[9]}\nc ${Ct[0]} ${Ct[1]} ${Ct[2]} ${Ct[3]} ${Ct[4]} ${Ct[5]} ${Ct[6]} ${Ct[7]} ${Ct[8]} ${Ct[9]}\nd ${Dt[0]} ${Dt[1]} ${Dt[2]} ${Dt[3]} ${Dt[4]} ${Dt[5]} ${Dt[6]} ${Dt[7]} ${Dt[8]} ${Dt[9]}\ne ${Et[0]} ${Et[1]} ${Et[2]} ${Et[3]} ${Et[4]} ${Et[5]} ${Et[6]} ${Et[7]} ${Et[8]} ${Et[9]}\nf ${Ft[0]} ${Ft[1]} ${Ft[2]} ${Ft[3]} ${Ft[4]} ${Ft[5]} ${Ft[6]} ${Ft[7]} ${Ft[8]} ${Ft[9]}\ng ${Gt[0]} ${Gt[1]} ${Gt[2]} ${Gt[3]} ${Gt[4]} ${Gt[5]} ${Gt[6]} ${Gt[7]} ${Gt[8]} ${Gt[9]}\n Player 1: ${BPlayer1} Player 2: ${BPlayer2}` , "Battleship")

          TPlayerOne = true;
          TPlayerTwo = false;

        }

      }

    } else if(args[0].toString() == "G") {

      if(Gt[Snumber] != hit && Gt[Snumber] != nothing) {

        if(G[Snumber] == "p") {

          Gt[Snumber] = "h";

          BCounter1 -= 1;

          msg.channel.send(`You hit a ship!\n You have another Try ${BPlayer2}`);

          Embeds.error(ChannelB, `/ 1 2 3 4 5 6 7 8 9 10\na ${At[0]} ${At[1]} ${At[2]} ${At[3]} ${At[4]} ${At[5]} ${At[6]} ${At[7]} ${At[8]} ${At[9]}\nb ${Bt[0]} ${Bt[1]} ${Bt[2]} ${Bt[3]} ${Bt[4]} ${Bt[5]} ${Bt[6]} ${Bt[7]} ${Bt[8]} ${Bt[9]}\nc ${Ct[0]} ${Ct[1]} ${Ct[2]} ${Ct[3]} ${Ct[4]} ${Ct[5]} ${Ct[6]} ${Ct[7]} ${Ct[8]} ${Ct[9]}\nd ${Dt[0]} ${Dt[1]} ${Dt[2]} ${Dt[3]} ${Dt[4]} ${Dt[5]} ${Dt[6]} ${Dt[7]} ${Dt[8]} ${Dt[9]}\ne ${Et[0]} ${Et[1]} ${Et[2]} ${Et[3]} ${Et[4]} ${Et[5]} ${Et[6]} ${Et[7]} ${Et[8]} ${Et[9]}\nf ${Ft[0]} ${Ft[1]} ${Ft[2]} ${Ft[3]} ${Ft[4]} ${Ft[5]} ${Ft[6]} ${Ft[7]} ${Ft[8]} ${Ft[9]}\ng ${Gt[0]} ${Gt[1]} ${Gt[2]} ${Gt[3]} ${Gt[4]} ${Gt[5]} ${Gt[6]} ${Gt[7]} ${Gt[8]} ${Gt[9]}\n Player 1: ${BPlayer1} Player 2: ${BPlayer2}` , "Battleship")

        } else if (G[Snumber] == "x") {

          Gt[Snumber] = "n";

          msg.channel.send(`You didnt hit a ship!\nIts your turn ${BPlayer1}`);

          Embeds.error(ChannelB, `/ 1 2 3 4 5 6 7 8 9 10\na ${At[0]} ${At[1]} ${At[2]} ${At[3]} ${At[4]} ${At[5]} ${At[6]} ${At[7]} ${At[8]} ${At[9]}\nb ${Bt[0]} ${Bt[1]} ${Bt[2]} ${Bt[3]} ${Bt[4]} ${Bt[5]} ${Bt[6]} ${Bt[7]} ${Bt[8]} ${Bt[9]}\nc ${Ct[0]} ${Ct[1]} ${Ct[2]} ${Ct[3]} ${Ct[4]} ${Ct[5]} ${Ct[6]} ${Ct[7]} ${Ct[8]} ${Ct[9]}\nd ${Dt[0]} ${Dt[1]} ${Dt[2]} ${Dt[3]} ${Dt[4]} ${Dt[5]} ${Dt[6]} ${Dt[7]} ${Dt[8]} ${Dt[9]}\ne ${Et[0]} ${Et[1]} ${Et[2]} ${Et[3]} ${Et[4]} ${Et[5]} ${Et[6]} ${Et[7]} ${Et[8]} ${Et[9]}\nf ${Ft[0]} ${Ft[1]} ${Ft[2]} ${Ft[3]} ${Ft[4]} ${Ft[5]} ${Ft[6]} ${Ft[7]} ${Ft[8]} ${Ft[9]}\ng ${Gt[0]} ${Gt[1]} ${Gt[2]} ${Gt[3]} ${Gt[4]} ${Gt[5]} ${Gt[6]} ${Gt[7]} ${Gt[8]} ${Gt[9]}\n Player 1: ${BPlayer1} Player 2: ${BPlayer2}` , "Battleship")

          TPlayerOne = true;
          TPlayerTwo = false;

        }

      }

    }

    if(BCounter1 == 0) {

      msg.channel.send(`You won the game ${BPlayer2}\nRemoved Roles and reset the game`)

      for(var i = 0; i < 10; i++) {

        A[i] = "x";
        B[i] = "x";
        C[i] = "x";
        D[i] = "x";
        E[i] = "x";
        F[i] = "x";
        G[i] = "x";

        A2[i] = "x";
        B2[i] = "x";
        C2[i] = "x";
        D2[i] = "x";
        E2[i] = "x";
        F2[i] = "x";
        G2[i] = "x";

        At[i] = "x";
        Bt[i] = "x";
        Ct[i] = "x";
        Dt[i] = "x";
        Et[i] = "x";
        Ft[i] = "x";
        Gt[i] = "x";
        
        A[i] = "x";
        B[i] = "x";
        C[i] = "x";
        D[i] = "x";
        E[i] = "x";
        F[i] = "x";
        G[i] = "x";
  
      }

      BPlayer1.removeRole(Role1);
      BPlayer2.removeRole(Role2);
  
      AllShips1[0] = 1;
      AllShips1[1] = 1;
      AllShips1[2] = 2;
      AllShips1[3] = 2;

      AllShips2[0] = 1;
      AllShips2[1] = 1;
      AllShips2[2] = 2;
      AllShips2[3] = 2;

      BCounter1 = 19;
      BCounter2 = 19;

      BPlayer1 = null;
      BPlayer2 = null;

      playable = false;

      PlayerOneReady = false;
      PlayerTwoReady = false;

    }

  } else {

    msg.channel.send("You need to type it in the battleship channel + add a letter and a number!")

  }
  
}

function cmd_bq(msg, args) {

  var ChannelB = client.channels.find("id", "498556497593237523");

  var Role1 = "498570745048465418";
  var Role2 = "498570808394907648";

  if(msg.member == BPlayer1 || msg.member == BPlayer2) {

    ChannelB.send(`Game reset and quit!`)

      for(var i = 0; i < 10; i++) {

        A[i] = "x";
        B[i] = "x";
        C[i] = "x";
        D[i] = "x";
        E[i] = "x";
        F[i] = "x";
        G[i] = "x";

        A2[i] = "x";
        B2[i] = "x";
        C2[i] = "x";
        D2[i] = "x";
        E2[i] = "x";
        F2[i] = "x";
        G2[i] = "x";

        At[i] = "x";
        Bt[i] = "x";
        Ct[i] = "x";
        Dt[i] = "x";
        Et[i] = "x";
        Ft[i] = "x";
        Gt[i] = "x";
        
        A[i] = "x";
        B[i] = "x";
        C[i] = "x";
        D[i] = "x";
        E[i] = "x";
        F[i] = "x";
        G[i] = "x";
  
      }

      BPlayer1.removeRole(Role1);
      BPlayer2.removeRole(Role2);
  
      AllShips1[0] = 1;
      AllShips1[1] = 1;
      AllShips1[2] = 2;
      AllShips1[3] = 2;

      AllShips2[0] = 1;
      AllShips2[1] = 1;
      AllShips2[2] = 2;
      AllShips2[3] = 2;

      BCounter1 = 19;
      BCounter2 = 19;

      BPlayer1 = null;
      BPlayer2 = null;

      playable = false;

      PlayerOneReady = false;
      PlayerTwoReady = false;


  }

}

function cmd_ct(msg, args) {

  var Channel = client.channels.find("id", "499287531519737856")

  var cont = msg.content;

  var invoke = cont.split(' ')[0].substr(config.prefix.length),
            args = cont.split(' ').slice(1)

  MauStack = ["Heart;7", "Heart;8", "Heart;9", "Heart;10", "Heart;Jack", "Heart;Lady", "Heart;King", "Spade;7", "Spade;8", "Spade;9", "Spade;10", "Spade;Jack", "Spade;Lady", "Spade;King", "Diamond;7", "Diamond;8", "Diamond;9", "Diamond;10", "Diamond;Jack", "Diamond;Lady", "Diamond;King", "Cross;7", "Cross;8", "Cross;9", "Cross;10", "Cross;Jack", "Cross;Lady", "Cross;King", "Spade;Ace", "Heart;Ace", "Diamond;Ace", "Cross;Ace"]; 

  if(msg.channel == Channel && msg.member != User1 && msg.member != User2 && msg.member != User3 && msg.member != User4 && User1 == null && parseInt(args[0]) == 1) {

    if(parseInt(args[0]) == 1) {

      User1 = msg.member;

      msg.channel.send(`You are Player 1 ${User1}`)

    }

  } else if(msg.channel == Channel && msg.member != User1 && msg.member != User2 && msg.member != User3 && msg.member != User4 && User2 == null && parseInt(args[0]) == 2) {

    if(parseInt(args[0]) == 2) {

      User2 = msg.member;

      msg.channel.send(`You are Player 2 ${User2}`)

    }

  } else if(msg.channel == Channel && msg.member != User1 && msg.member != User2 && msg.member != User3 && msg.member != User4 && User3 == null && parseInt(args[0]) == 3) {

    if(parseInt(args[0]) == 3) {

      User3 = msg.member;

      msg.channel.send(`You are Player 3 ${User3}`)

    }

  } else if(msg.channel == Channel && msg.member != User1 && msg.member != User2 && msg.member != User3 && msg.member != User4 && User4 == null && parseInt(args[0]) == 4) {

    if(parseInt(args[0]) == 4) {

      User4 = msg.member;

      msg.channel.send(`You are Player 4 ${User4}`)

    }

  } else {

    msg.channel.send("Wrong channel or User is already in use or you signed up already!")

  }

}

function Start_Calc() {

  for(var i = 0; i < 2; i++) {

    var Vstart = Math.floor(Math.random() * MauStack.length)

    if(MauStack[Vstart] != "x") {

      MadeStack[0] = MauStack[Vstart];

      MauStack[Vstart] = "x";

      break;

    } else {

      i -= 1;

    }

  }

}

function Setup_Teams() {

  if(User1 != null && User2 != null) {

    ArrUsers[0] = 1;
    ArrUsers[1] = 1;

    Bonetwo = true;
    Tuser1 = true;

    AbleToStartM = true;

  } else if (User1 != null && User3 != null) {

    ArrUsers[0] = 1;
    ArrUsers[2] = 1;

    Bonethree = true;
    Tuser1 = true;

    AbleToStartM = true;

  } else if (User1 != null && User4 != null) {

    ArrUsers[0] = 1;
    ArrUsers[3] = 1;

    Bonefour = true;
    Tuser1 = true;

    AbleToStartM = true;

  } else if (User2 != null && User3 != null) {

    ArrUsers[1] = 1;
    ArrUsers[2] = 1;

    Btwothree = true;
    Tuser2 = true;

    AbleToStartM = true;

  } else if (User2 != null && User4 != null) {

    ArrUsers[1] = 1;
    ArrUsers[3] = 1;

    Btwofour = true;
    Tuser2 = true;

    AbleToStartM = true;

  } else if (User3 != null && User4 != null) {

    ArrUsers[2] = 1;
    ArrUsers[3] = 1;

    Bthreefour = true;
    Tuser3 = true;

    AbleToStartM = true;

  } else if (User1 != null && User2 != null && User4 != null) {

    ArrUsers[0] = 1;
    ArrUsers[1] = 1;
    ArrUsers[3] = 1; 

    Bonetwofour = true;
    Tuser1 = true;

    AbleToStartM = true;

  } else if (User1 != null && User2 != null && User3 != null) {

    ArrUsers[0] = 1;
    ArrUsers[1] = 1;
    ArrUsers[2] = 1;

    Bonetwothree = true;
    Tuser1 = true;

    AbleToStartM = true;

  } else if (User2 != null && User3 != null && User4 != null) {

    ArrUsers[1] = 1;
    ArrUsers[2] = 1;
    ArrUsers[3] = 1;

    Btwothreefour = true;
    Tuser2 = true;

    AbleToStartM = true;

  } else if (User1 != null && User2 != null && User4 != null && User3 != null) {

    ArrUsers[0] = 1;
    ArrUsers[1] = 1;
    ArrUsers[2] = 1;
    ArrUsers[3] = 1;

    Bonetwothreefour = true;
    Tuser1 = true;

    AbleToStartM = true;
 
  } else {

    AbleToStartM = false;

  }

}

function Switch_Turn() {

  if(Tuser1 == true) {

    if(User2 != null) {

      Tuser2 = true;

      Tuser1 = false;

    } else if (User3 != null) {

      Tuser3 = true;

      Tuser1 = false;

    } else if (User4 != null) {

      Tuser4 = true;

      Tuser1 = false;

    }

  } else if(Tuser2 == true) {

    if(User3 != null) {

      Tuser3 = true;

      Tuser2 = false;

    } else if (User4 != null) {

      Tuser4 = true;

      Tuser2 = false;

    } else if (User1 != null) {

      Tuser1 = true;

      Tuser2 = false;

    }

  } else if(Tuser3 == true) {

    if(User4 != null) {

      Tuser4 = true;

      Tuser3 = false;

    } else if (User1 != null) {

      Tuser1 = true;

      Tuser3 = false;

    } else if (User2 != null) {

      Tuser2 = true;

      Tuser3 = false;

    }

  } else if(Tuser4 == true) {

    if(User1 != null) {

      Tuser1 = true;

      Tuser4 = false;

    } else if (User2 != null) {

      Tuser2 = true;

      Tuser4 = false;

    } else if (User3 != null) {

      Tuser3 = true;

      Tuser4 = false;

    }

  }

}

function Switch_Turn_Ace() {

  if(Bonetwo == true) {

    if(Tuser1 == true) {

      Tuser1 = true;

    } else if (Tuser2 == true) {

      Tuser2 = true;

    }

  } else if(Bonethree == true) {

    if(Tuser1 == true) {

      Tuser1 = true;

    } else if (Tuser3 == true) {

      Tuser3 = true;

    }

  } else if(Bonefour == true) {

    if(Tuser1 == true) {

      Tuser1 = true;

    } else if (Tuser4 == true) {

      Tuser4 = true;

    }

  } else if(Btwothree == true) {

    if(Tuser2 == true) {

      Tuser2 = true;

    } else if (Tuser3 == true) {

      Tuser3 = true;

    }

  } else if(Btwofour == true) {

    if(Tuser2 == true) {

      Tuser2 = true;

    } else if (Tuser4 == true) {

      Tuser4 = true;

    }

  } else if(Bthreefour == true) {

    if(Tuser3 == true) {

      Tuser3 = true;

    } else if (Tuser4 == true) {

      Tuser4 = true;

    }

  } else if(Bonetwofour == true) {

    if(Tuser1 == true) {

      Tuser4 = true;

      Tuser1 = false;

    } else if (Tuser2 == true) {

      Tuser1 = true;

      Tuser2 = false;

    } else if (Tuser4 == true) {

      Tuser2 = true;

      Tuser4 = false;

    }

  } else if(Btwothreefour == true) {

    if(Tuser2 == true) {

      Tuser4 = true;

      Tuser2 = false;

    } else if (Tuser3 == true) {

      Tuser1 = true;

      Tuser3 = false;

    } else if (Tuser4 == true) {

      Tuser2 = true;

      Tuser4 = false;

    }

  } else if(Bonetwothree == true) {

    if(Tuser1 == true) {

      Tuser3 = true;

      Tuser1 = false;

    } else if (Tuser2 == true) {

      Tuser1 = true;

      Tuser2 = false;

    } else if (Tuser3 == true) {

      Tuser2 = true;

      Tuser3 = false;

    }

  } else if(Bonetwothreefour == true) {

    if(Tuser1 == true) {

      Tuser3 = true;

      Tuser1 = false;

    } else if (Tuser2 == true) {

      Tuser4 = true;

      Tuser2 = false;

    } else if (Tuser3 == true) {

      Tuser1 = true;

      Tuser3 = false;

    } else if (Tuser4 == true) {

      Tuser2 = true;

      Tuser4 = false;

    }

  }

}

function cmd_cs(msg, args) {

  for(var i = 0; i < User1Stack.length; i++) {

    User1Stack[i] = "x";
    User2Stack[i] = "x";
    User3Stack[i] = "x";
    User4Stack[i] = "x";

  }

  Setup_Teams();

  var Channel = client.channels.find("id", "499287531519737856")

  if (Cstarted == false && AbleToStartM == true && msg.channel == Channel) {

  Start_Calc();

  if(User1 != null) {

    for(var i = 0; i < CardsMax; i++) {

      var k = Math.floor(Math.random() * MauStack.length)

      if(MauStack[k] != "x") {

        User1Stack[i] = MauStack[k];

        MauStack[k] = "x";

      } else {

        i -= 1;

      }

    }

    Embeds.error(User1, `${User1Stack[0]}\n${User1Stack[1]}\n${User1Stack[2]}\n${User1Stack[3]}\n${User1Stack[4]}\n${User1Stack[5]}\n${User1Stack[6]}\n${User1Stack[7]}\n${User1Stack[8]}\n${User1Stack[9]}\n${User1Stack[10]}\n${User1Stack[11]}\n${User1Stack[12]}\n${User1Stack[13]}\n${User1Stack[14]}\n${User1Stack[15]}`, "Your cards")

  } if(User2 != null) {

    for(var b = 0; b < CardsMax; b++) {

      var k = Math.floor(Math.random() * MauStack.length)

      if(MauStack[k] != "x") {

        User2Stack[b] = MauStack[k];

        MauStack[k] = "x";

      } else {

        b -= 1;

      }

    }

    Embeds.error(User2, `${User2Stack[0]}\n${User2Stack[1]}\n${User2Stack[2]}\n${User2Stack[3]}\n${User2Stack[4]}\n${User2Stack[5]}\n${User2Stack[6]}\n${User2Stack[7]}\n${User2Stack[8]}\n${User2Stack[9]}\n${User2Stack[10]}\n${User2Stack[11]}\n${User2Stack[12]}\n${User2Stack[13]}\n${User2Stack[14]}\n${User2Stack[15]}`, "Your cards")

  } if (User3 != null) {

    for(var c = 0; c < CardsMax; c++) {

      var k = Math.floor(Math.random() * MauStack.length)

      if(MauStack[k] != "x") {

        User3Stack[c] = MauStack[k];

        MauStack[k] = "x";

      } else {

        c -= 1;

      }

    }

    Embeds.error(User3, `${User3Stack[0]}\n${User3Stack[1]}\n${User3Stack[2]}\n${User3Stack[3]}\n${User3Stack[4]}\n${User3Stack[5]}\n${User3Stack[6]}\n${User3Stack[7]}\n${User3Stack[8]}\n${User3Stack[9]}\n${User3Stack[10]}\n${User3Stack[11]}\n${User3Stack[12]}\n${User3Stack[13]}\n${User3Stack[14]}\n${User3Stack[15]}`, "Your cards")

  } if(User4 != null) {

    for(var d = 0; d < CardsMax; d++) {

      var k = Math.floor(Math.random() * MauStack.length)

      if(MauStack[k] != "x") {

        User4Stack[d] = MauStack[k];

        MauStack[k] = "x";

      } else {

        d -= 1;

      }

    }

    Embeds.error(User4, `${User4Stack[0]}\n${User4Stack[1]}\n${User4Stack[2]}\n${User4Stack[3]}\n${User4Stack[4]}\n${User4Stack[5]}\n${User4Stack[6]}\n${User4Stack[7]}\n${User4Stack[8]}\n${User4Stack[9]}\n${User4Stack[10]}\n${User4Stack[11]}\n${User4Stack[12]}\n${User4Stack[13]}\n${User4Stack[14]}\n${User4Stack[15]}`, "Your cards")

  }

  Embeds.error(Channel, `Current card:\n${MadeStack[0]}\nPlayer 1: ${User1} Player 2: ${User2} Player 3: ${User3} Player 4: ${User4}`)

}

}

function Reset_Skat() {

  User1 = null;
  User2 = null;
  User3 = null;
  User4 = null;

  Tuser1 = false;
  Tuser2 = false;
  Tuser3 = false;
  Tuser4 = false;

  Cstarted = false;

  AbleToStartM = false;

  for (var k = 0; k < 16; k++) {

    User1Stack[k] = "x";
    User2Stack[k] = "x";
    User3Stack[k] = "x";
    User4Stack[k] = "x";

  }

  MadeStack[0] = "x";

  WinCounterUser1 = 0;
  WinCounterUser2 = 0;
  WinCounterUser3 = 0;
  WinCounterUser4 = 0;

  Bonetwo = false,
    Bonethree = false,
    Bonefour = false,
    Btwothree = false,
    Btwofour = false,
    Bthreefour = false,
    Bonetwofour = false,
    Btwothreefour = false,
    Bonetwothree = false,
    Bonetwothreefour = false;

}

function cmd_c1(msg, args) {

  var Channel = client.channels.find("id", "499287531519737856")

  var cont = msg.content;

  var args = cont.toUpperCase().split(' ').slice(1);

  if(Tuser1 == true && msg.member == User1) {

    if(args[0] != "D") {

    if(parseInt(args[0]) < 17 && parseInt(args[0]) > 0 && User1Stack[parseInt(args[0]) - 1] != "x") {

      var temp = parseInt(args[0]) - 1;

      EnteredNum = parseInt(args[0]) - 1;

      var Atemp = User1Stack[temp].split(';');

      var AtempComp = MadeStack[0].split(';');

      if(Atemp[1] == "8" || Atemp[1] == "Jack") {

        for(var i = 0; i < MauStack.length; i++) {

          if(MauStack[i] == "x") {

            MauStack[i] = MadeStack[0];

            MadeStack[0] = User1Stack[temp];

            User1Stack[temp] = "x";

            msg.channel.send("Next one!")

            Switch_Turn();

            break;

          }

        }
      
      } else if(Atemp[0] == AtempComp[0] || Atemp[1] == AtempComp[1] && Atemp[1] != "8" && Atemp[1] != "Jack") {

        for(var i = 0; i < MauStack.length; i++) {

          if(Atemp[1] == "Ace") {

            if(MauStack[i] == "x") {

              MauStack[i] = MadeStack[0];

              MadeStack[0] = User1Stack[temp];

              User1Stack[temp] = "x";

              msg.channel.send("Skipped one Player!")

              Switch_Turn_Ace();
  
              break;
  
            }
      
          }

          else if(Atemp[1] != "Ace") {

            if(MauStack[i] == "x") {

              MauStack[i] = MadeStack[0];

              MadeStack[0] = User1Stack[temp];

              User1Stack[temp] = "x";

              msg.channel.send("Next one!")

              Switch_Turn();
  
              break;
  
            }

          }

        } 

      }

      for(var k = 0; k < User1Stack.length - 1; k++) {

        if(User1Stack[i] == "x") {

          WinCounterUser1 += 1;

        }

      }

      if(WinCounterUser1 == 16) {

        msg.channel.send(`${User1} won the game!`)

        Reset_Skat();

      } else {

        Embeds.error(Channel, `Current card:\n${MadeStack[0]}\nPlayer 1: ${User1} Player 2: ${User2} Player 3: ${User3} Player 4: ${User4}`)

        Embeds.error(User1, `${User1Stack[0]}\n${User1Stack[1]}\n${User1Stack[2]}\n${User1Stack[3]}\n${User1Stack[4]}\n${User1Stack[5]}\n${User1Stack[6]}\n${User1Stack[7]}\n${User1Stack[8]}\n${User1Stack[9]}\n${User1Stack[10]}\n${User1Stack[11]}\n${User1Stack[12]}\n${User1Stack[13]}\n${User1Stack[14]}\n${User1Stack[15]}`, "Your cards")

      }

    }

  } else if (args[0] == "D") {

    for(var i = 0; i < 1; i++) {

      var t = Math.floor(Math.random() * MauStack.length)

      if(MauStack[t] != "x") {
  
        for(var h = 0; h < User1Stack.length; h++) {

          console.log("Til here it went")

          if(User1Stack[h] == "x") {

            console.log("Even til here")

            User1Stack[h] = MauStack[t];

            MauStack[t] = "x";

            msg.channel.send("Switched!")

            Switch_Turn();

            break;

          }

        }
  
      } else {
  
        i -= 1;
  
      }

    }

    Embeds.error(Channel, `Current card:\n${MadeStack[0]}\nPlayer 1: ${User1} Player 2: ${User2} Player 3: ${User3} Player 4: ${User4}`)

    Embeds.error(User1, `${User1Stack[0]}\n${User1Stack[1]}\n${User1Stack[2]}\n${User1Stack[3]}\n${User1Stack[4]}\n${User1Stack[5]}\n${User1Stack[6]}\n${User1Stack[7]}\n${User1Stack[8]}\n${User1Stack[9]}\n${User1Stack[10]}\n${User1Stack[11]}\n${User1Stack[12]}\n${User1Stack[13]}\n${User1Stack[14]}\n${User1Stack[15]}`, "Your cards")

  }

}

}

function cmd_c2(msg, args) {

  var Channel = client.channels.find("id", "499287531519737856")

  var cont = msg.content;

  var args = cont.toUpperCase().split(' ').slice(1);

  if(Tuser2 == true && msg.member == User2) {

    if(args[0] != "D") {

    if(parseInt(args[0]) < 17 && parseInt(args[0]) > 0 && User2Stack[parseInt(args[0]) - 1] != "x") {

      var temp = parseInt(args[0]) - 1;

      var Atemp = User2Stack[temp].split(';');

      var AtempComp = MadeStack[0].split(';');

      if(Atemp[1] == "8" || Atemp[1] == "Jack") {

        for(var i = 0; i < MauStack.length; i++) {

          if(MauStack[i] == "x") {

            MauStack[i] = MadeStack[0];

            MadeStack[0] = User2Stack[temp];

            User2Stack[temp] = "x";

            msg.channel.send("Next one!")

            Switch_Turn();

            break;

          }

        }
      
      } else if(Atemp[0] == AtempComp[0] || Atemp[1] == AtempComp[1] && Atemp[1] != "8" && Atemp[1] != "Jack") {

        for(var i = 0; i < MauStack.length; i++) {

          if(Atemp[1] == "Ace") {

            if(MauStack[i] == "x") {

              MauStack[i] = MadeStack[0];

              MadeStack[0] = User2Stack[temp];

              User2Stack[temp] = "x";

              msg.channel.send("Skipped one Player!")

              Switch_Turn_Ace();
  
              break;
  
            }
      
          }

          else if(Atemp[1] != "Ace") {

            if(MauStack[i] == "x") {

              MauStack[i] = MadeStack[0];

              MadeStack[0] = User2Stack[temp];

              User2Stack[temp] = "x";

              msg.channel.send("Next one!")

              Switch_Turn();
  
              break;
  
            }

          }

        } 

      }

      for(var k = 0; k < User2Stack.length - 1; k++) {

        if(User2Stack[i] == "x") {

          WinCounterUser2 += 1;

        }

      }

      if(WinCounterUser2 == 16) {

        msg.channel.send(`${User2} won the game!`)

        Reset_Skat();

      } else {

        Embeds.error(Channel, `Current card:\n${MadeStack[0]}\nPlayer 1: ${User1} Player 2: ${User2} Player 3: ${User3} Player 4: ${User4}`)

        Embeds.error(User2, `${User2Stack[0]}\n${User2Stack[1]}\n${User2Stack[2]}\n${User2Stack[3]}\n${User2Stack[4]}\n${User2Stack[5]}\n${User2Stack[6]}\n${User2Stack[7]}\n${User2Stack[8]}\n${User2Stack[9]}\n${User2Stack[10]}\n${User2Stack[11]}\n${User2Stack[12]}\n${User2Stack[13]}\n${User2Stack[14]}\n${User2Stack[15]}`, "Your cards")

      }

    }

  } else if (args[0] == "D") {

    for(var i = 0; i < 1; i++) {

      var t = Math.floor(Math.random() * MauStack.length)

      if(MauStack[t] != "x") {
  
        for(var h = 0; h < User2Stack.length; h++) {

          console.log("Til here it went")

          if(User2Stack[h] == "x") {

            console.log("Even til here")

            User2Stack[h] = MauStack[t];

            MauStack[t] = "x";

            msg.channel.send("Switched!")

            Switch_Turn();

            break;

          }

        }
  
      } else {
  
        i -= 1;
  
      }

    }

    Embeds.error(Channel, `Current card:\n${MadeStack[0]}\nPlayer 1: ${User1} Player 2: ${User2} Player 3: ${User3} Player 4: ${User4}`)

    Embeds.error(User2, `${User2Stack[0]}\n${User2Stack[1]}\n${User2Stack[2]}\n${User2Stack[3]}\n${User2Stack[4]}\n${User2Stack[5]}\n${User2Stack[6]}\n${User2Stack[7]}\n${User2Stack[8]}\n${User2Stack[9]}\n${User2Stack[10]}\n${User2Stack[11]}\n${User2Stack[12]}\n${User2Stack[13]}\n${User2Stack[14]}\n${User2Stack[15]}`, "Your cards")

  }

}

}

function cmd_c3(msg, args) {

  var Channel = client.channels.find("id", "499287531519737856")

  var cont = msg.content;

  var args = cont.toUpperCase().split(' ').slice(1);

  if(Tuser3 == true && msg.member == User3) {

    if(args[0] != "D") {

    if(parseInt(args[0]) < 17 && parseInt(args[0]) > 0 && User3Stack[parseInt(args[0]) - 1] != "x") {

      var temp = parseInt(args[0]) - 1;

      var Atemp = User3Stack[temp].split(';');

      var AtempComp = MadeStack[0].split(';');

      if(Atemp[1] == "8" || Atemp[1] == "Jack") {

        for(var i = 0; i < MauStack.length; i++) {

          if(MauStack[i] == "x") {

            MauStack[i] = MadeStack[0];

            MadeStack[0] = User3Stack[temp];

            User3Stack[temp] = "x";

            msg.channel.send("Next one!")

            Switch_Turn();

            break;

          }

        }
      
      } else if(Atemp[0] == AtempComp[0] || Atemp[1] == AtempComp[1] && Atemp[1] != "8" && Atemp[1] != "Jack") {

        for(var i = 0; i < MauStack.length; i++) {

          if(Atemp[1] == "Ace") {

            if(MauStack[i] == "x") {

              MauStack[i] = MadeStack[0];

              MadeStack[0] = User3Stack[temp];

              User3Stack[temp] = "x";

              msg.channel.send("Skipped one Player!")

              Switch_Turn_Ace();
  
              break;
  
            }
      
          }

          else if(Atemp[1] != "Ace") {

            if(MauStack[i] == "x") {

              MauStack[i] = MadeStack[0];

              MadeStack[0] = User3Stack[temp];

              User3Stack[temp] = "x";

              msg.channel.send("Next one!")

              Switch_Turn();
  
              break;
  
            }

          }

        } 

      }

      for(var k = 0; k < User3Stack.length - 1; k++) {

        if(User3Stack[i] == "x") {

          WinCounterUser3 += 1;

        }

      }

      if(WinCounterUser3 == 16) {

        msg.channel.send(`${User3} won the game!`)

        Reset_Skat();

      } else {

        Embeds.error(Channel, `Current card:\n${MadeStack[0]}\nPlayer 1: ${User1} Player 2: ${User2} Player 3: ${User3} Player 4: ${User4}`)

        Embeds.error(User3, `${User3Stack[0]}\n${User3Stack[1]}\n${User3Stack[2]}\n${User3Stack[3]}\n${User3Stack[4]}\n${User3Stack[5]}\n${User3Stack[6]}\n${User3Stack[7]}\n${User3Stack[8]}\n${User3Stack[9]}\n${User3Stack[10]}\n${User3Stack[11]}\n${User3Stack[12]}\n${User3Stack[13]}\n${User3Stack[14]}\n${User3Stack[15]}`, "Your cards")

      }

    }

  } else if (args[0] == "D") {

    for(var i = 0; i < 1; i++) {

      var t = Math.floor(Math.random() * MauStack.length)

      if(MauStack[t] != "x") {
  
        for(var h = 0; h < User2Stack.length; h++) {

          console.log("Til here it went")

          if(User3Stack[h] == "x") {

            console.log("Even til here")

            User3Stack[h] = MauStack[t];

            MauStack[t] = "x";

            msg.channel.send("Switched!")

            Switch_Turn();

            break;

          }

        }
  
      } else {
  
        i -= 1;
  
      }

    }

    Embeds.error(Channel, `Current card:\n${MadeStack[0]}\nPlayer 1: ${User1} Player 2: ${User2} Player 3: ${User3} Player 4: ${User4}`)

    Embeds.error(User3, `${User3Stack[0]}\n${User3Stack[1]}\n${User3Stack[2]}\n${User3Stack[3]}\n${User3Stack[4]}\n${User3Stack[5]}\n${User3Stack[6]}\n${User3Stack[7]}\n${User3Stack[8]}\n${User3Stack[9]}\n${User3Stack[10]}\n${User3Stack[11]}\n${User3Stack[12]}\n${User3Stack[13]}\n${User3Stack[14]}\n${User3Stack[15]}`, "Your cards")

  }

}

}

function cmd_c4(msg, args) {

  var Channel = client.channels.find("id", "499287531519737856")

  var cont = msg.content;

  var args = cont.toUpperCase().split(' ').slice(1);

  if(Tuser4 == true && msg.member == User4) {

    if(args[0] != "D") {

    if(parseInt(args[0]) < 17 && parseInt(args[0]) > 0 && User4Stack[parseInt(args[0]) - 1] != "x") {

      var temp = parseInt(args[0]) - 1;

      var Atemp = User4Stack[temp].split(';');

      var AtempComp = MadeStack[0].split(';');

      if(Atemp[1] == "8" || Atemp[1] == "Jack") {

        for(var i = 0; i < MauStack.length; i++) {

          if(MauStack[i] == "x") {

            MauStack[i] = MadeStack[0];

            MadeStack[0] = User4Stack[temp];

            User4Stack[temp] = "x";

            msg.channel.send("Next one!")

            Switch_Turn();

            break;

          }

        }
      
      } else if(Atemp[0] == AtempComp[0] || Atemp[1] == AtempComp[1] && Atemp[1] != "8" && Atemp[1] != "Jack") {

        for(var i = 0; i < MauStack.length; i++) {

          if(Atemp[1] == "Ace") {

            if(MauStack[i] == "x") {

              MauStack[i] = MadeStack[0];

              MadeStack[0] = User4Stack[temp];

              User4Stack[temp] = "x";

              msg.channel.send("Skipped one Player!")

              Switch_Turn_Ace();
  
              break;
  
            }
      
          }

          else if(Atemp[1] != "Ace") {

            if(MauStack[i] == "x") {

              MauStack[i] = MadeStack[0];

              MadeStack[0] = User4Stack[temp];

              User4Stack[temp] = "x";

              msg.channel.send("Next one!")

              Switch_Turn();
  
              break;
  
            }

          }

        } 

      }

      for(var k = 0; k < User4Stack.length - 1; k++) {

        if(User4Stack[i] == "x") {

          WinCounterUser4 += 1;

        }

      }

      if(WinCounterUser4 == 16) {

        msg.channel.send(`${User4} won the game!`)

        Reset_Skat();

      } else {

        Embeds.error(Channel, `Current card:\n${MadeStack[0]}\nPlayer 1: ${User1} Player 2: ${User2} Player 3: ${User3} Player 4: ${User4}`)

        Embeds.error(User4, `${User4Stack[0]}\n${User4Stack[1]}\n${User4Stack[2]}\n${User4Stack[3]}\n${User4Stack[4]}\n${User4Stack[5]}\n${User4Stack[6]}\n${User4Stack[7]}\n${User4Stack[8]}\n${User4Stack[9]}\n${User4Stack[10]}\n${User4Stack[11]}\n${User4Stack[12]}\n${User4Stack[13]}\n${User4Stack[14]}\n${User4Stack[15]}`, "Your cards")

      }

    }

  } else if (args[0] == "D") {

    for(var i = 0; i < 1; i++) {

      var t = Math.floor(Math.random() * MauStack.length)

      if(MauStack[t] != "x") {
  
        for(var h = 0; h < User2Stack.length; h++) {

          console.log("Til here it went")

          if(User4Stack[h] == "x") {

            console.log("Even til here")

            User4Stack[h] = MauStack[t];

            MauStack[t] = "x";

            msg.channel.send("Switched!")

            Switch_Turn();

            break;

          }

        }
  
      } else {
  
        i -= 1;
  
      }

    }

    Embeds.error(Channel, `Current card:\n${MadeStack[0]}\nPlayer 1: ${User1} Player 2: ${User2} Player 3: ${User3} Player 4: ${User4}`)

    Embeds.error(User4, `${User4Stack[0]}\n${User4Stack[1]}\n${User4Stack[2]}\n${User4Stack[3]}\n${User4Stack[4]}\n${User4Stack[5]}\n${User4Stack[6]}\n${User4Stack[7]}\n${User4Stack[8]}\n${User4Stack[9]}\n${User4Stack[10]}\n${User4Stack[11]}\n${User4Stack[12]}\n${User4Stack[13]}\n${User4Stack[14]}\n${User4Stack[15]}`, "Your cards")

  }

}

}

client.on('ready', () => {

  console.log(`Logged in as ${client.user.username}`)

})

client.on('message', (msg) => {

    var cont = msg.content,
    author = msg.author,
    chan = msg.channel,
    guild = msg.guild

    if(author.id != client.user.id && cont.startsWith(config.prefix)) {

        var invoke = cont.split(' ')[0].substr(config.prefix.length),
            args = cont.split(' ').slice(1)

        console.log(args)

        if(invoke in cmdmap) {

            cmdmap[invoke](msg, args)

        }

    }

})

client.login(config.token)
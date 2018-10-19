

var AllShips2 = [1, 1, 2, 2]

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
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
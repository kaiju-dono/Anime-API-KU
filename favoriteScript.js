


const favDIV = document.getElementById("h1Tag");
let bleachCount = 0;
let bleachFavorite = "";
let cowboyCount = 0;
let cowboyFavorite = "";
let dbzCount = 0;
let dbzFavorite = "";
let kimetsuCount = 0;
let kimetsuFavorite = "";
let saoCount = 0;
let saoFavorite = "";
let overallFav = "";

function bleachFav()  {
  if ((ichigoClicks > inoueClicks)&&(ichigoClicks > rukiaClicks3)) {
    bleachCount = ichigoClicks;
    bleachFavorite = "Kurosaki Ichigo";
  } else if ((inoueClicks > rukiaClicks)&&(inoueClicks > ichigoClicks)) {
    bleachCount = inoueClicks;
    bleachFavorite = "Orihime Inoue";
  } else if ((rukiaClicks > ichigoClicks)&&(rukiaClicks > inoueClicks)) {
    bleachCount = rukiaClicks;
    bleachFavorite = "Kuchiki Rukia";
  } else {
    bleachCount = 0;
    bleachFavorite = "Tie or Not Enough Votes";
  }
}
function cowboyFav()  {
  if ((fayeClicks > spikeClicks)&&(fayeClicks > jetClicks)) {
    cowboyCount = fayeClicks;
    cowboyFavorite = "Faye Valentine";
  } else if ((spikeClicks > jetClicks)&&(spikeClicks > fayeClicks)) {
    cowboyCount = spikeClicks;
    cowboyFavorite = "Spike Spiegel";
  } else if ((jetClicks > fayeClicks)&&(jetClicks > spikeClicks)) {
    cowboyCount = jetClicks;
    cowboyFavorite = "Jet Black";
  } else {
    cowboyCount = 0;
    cowboyFavorite = "Tie or Not Enough Votes";
  }
}
function dbzFav()  {
  if ((gokuClicks > gohanClicks)&&(gokuClicks > vegetaClicks)&&(gokuClicks > trunksClicks)) {
    dbzCount = gokuClicks;
    dbzFavorite = "Goku"
  } else if ((gohanClicks > gokuClicks)&&(gohanClicks > vegetaClicks)&&(gohanClicks > trunksClicks)) {
    dbzCount = gohanClicks;
    dbzFavorite = "Gohan";
  } else if ((vegetaClicks > gokuClicks)&&(vegetaClicks > gohanClicks)&&(vegetaClicks > trunksClicks)) {
    dbzCount = vegetaClicks;
    dbzFavorite = "Vegeta";
  } else if ((trunksClicks > gokuClicks)&&(trunksClicks > gohanClicks)&&(trunksClicks > vegetaClicks)) {
    dbzCount = trunksClicks;
    dbzFavorite = "Trunks";
  } else {
    dbzCount = 0;
    dbzFavorite = "Tie or Not Enough Votes";
}
}
function kimetsuFav()  {
if ((tanjiroClicks > nezukoClicks)&&(tanjiroClicks > inosukeClicks)&&(tanjiroClicks > zenitsuClicks)) {
    kimetsuCount = tanjiroClicks;
    kimetsuFavorite = "Kamado Tanjiro";
  } else if ((nezukoClicks > tanjiroClicks)&&(nezukoClicks > inosukeClicks)&&(nezukoClicks > zenitsuClicks)) {
    kimetsuCount = nezukoClicks;
    kimetsuFavorite = "Kamado Nezuko";
  } else if ((inosukeClicks > tanjiroClicks)&&(inosukeClicks > nezukoClicks)&&(inosukeClicks > zenitsuClicks)) {
    kimetsuCount = inosukeClicks;
    kimetsuFavorite = "Hashibara Inosuke"
  } else if ((zenitsuClicks > tanjiroClicks)&&(zenitsuClicks > nezukoClicks)&&(zenitsuClicks > inosukeClicks)) {
    kimetsuCount = zenitsuClicks;
    kimetsuFavorite = "Agatsuma Zenitsu"
  } else {
    kimetsuCount = "Tie or Not Enough Votes"
}
}
function saoFav()  {
if ((asunaClicks > kiritoClicks)&&(asunaClicks > eugeoClicks)) {
  saoCount = asunaClicks;
  saoFavorite = "Asuna Yuuki"
} else if ((kiritoClicks > asunaClicks)&&(kiritoClicks > eugeoClicks)) {
  saoCount = kiritoClicks;
  saoFavorite = "Kazuto Kirigaya"
} else if ((eugeoClicks > asunaClicks)&&(eugeoClicks > kiritoClicks)) {
  saoCount = eugeoClicks;
  saoFavorite = "Eugeo"
} else {
  saoCount = 0;
  saoFavorite = "Tie or Not Enough Votes";
}
}
function totalFav() {
  if ((bleachCount>cowboyCount)&&(bleachCount>dbzCount)&&(bleachCount>kimetsuCount)&&(bleachCount>saoCount)) {
    overallFav = `${bleachFavorite}`;
  } else if ((cowboyCount>bleachCount)&&(cowboyCount>dbzCount)&&(cowboyCount>kimetsuCount)&&(cowboyCount>saoCount)) {
    overallFav = `${cowboyFavorite}`;
  } else if ((dbzCount>bleachCount)&&(dbzCount>cowboyCount)&&(dbzCount>kimetsuCount)&&(dbzCount>saoCount)) {
    overallFav = `${dbzFavorite}`;
  } else if ((kimetsuCount>bleachCount)&&(kimetsuCount>cowboyCount)&&(kimetsuCount>dbzCount)&&(kimetsuCount>saoCount)) {
    overallFav = `${kimetsuFavorite}`;
  } else if ((saoCount>bleachCount)&&(saoCount>cowboyCount)&&(saoCount>dbzCount)&&(saoCount>kimetsuCount)) {
    overallFav = `${saoFavorite}`;
  } else {
    overallFav = "Tie, need more votes!"
  }
}
saoFavorite = "Kirito Kirigaya";
overallFav = saoFavorite;
favDIV.innerHTML = `Favorite Character: ${overallFav}`;


export {favDIV, bleachCount, bleachFavorite, cowboyCount, cowboyFavorite, dbzCount, dbzFavorite, kimetsuCount, kimetsuFavorite, saoCount, saoFavorite, overallFav, bleachFav, cowboyFav, dbzFav, kimetsuFav, saoFav, totalFav}
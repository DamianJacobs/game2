var jukes = 0;
var tried = false;

document.getElementById("begin").onclick = start;


function start(){
    document.getElementById("text").innerHTML = "Na een leuke avond met wat vriend ga je in je eentje terug naar huis opeens kom je een man tegen met een bebloed scherp mes in zijn hand terwijl hij recht op je afloopt";
    document.getElementById("Hoofd").innerHTML = "De eenzame wandeling naar huis";
    document.getElementById('body').style.backgroundImage = "url('img/noir-city.jpg')";
    document.getElementById("left").onclick = Geschokt;
    document.getElementById("door").onclick = rennen;
    document.getElementById("door").style.visibility = "visible";
    document.getElementById("left").style.visibility = "visible";
    document.getElementById("rechts").style.visibility = "hidden";
    document.getElementById("begin").style.visibility = "hidden";

}

function Geschokt() {
    document.getElementById("text").innerHTML = "Je loopt door hopende dat de man je niet zag maar de man was daadwerkelijk van plan je te doden en stak uit et niets de mes in je rug";
    document.getElementById("Hoofd").innerHTML = "De eenzame dood in een steeg";
    document.getElementById('body').style.backgroundImage = "url('img/dood1.jpg')";
    document.getElementById("door").style.visibility = "hidden";
    document.getElementById("left").style.visibility = "hidden";
    document.getElementById("rechts").style.visibility = "hidden";

}


function rennen() {
    if (jukes >= 5) {
    document.getElementById('body').style.backgroundImage = "url('img/lege.jpg')";
    document.getElementById("text").innerHTML = "rennend voor je leven kom je in een straat met meerdere wegen terecht";
    document.getElementById("door").style.visibility = "visible";
    document.getElementById("Hoofd").innerHTML = "Moeilijke keuzes";
    document.getElementById("left").style.visibility = "visible";
    document.getElementById("rechts").style.visibility = "visible";
    document.getElementById("door").innerHTML = "Ren recht door";
    document.getElementById("left").innerHTML = "Ren naar links";
    document.getElementById("rechts").innerHTML = "Ren naar rechts";
    document.getElementById("left").onclick = links1;
    document.getElementById("door").onclick = vooruit1;
    document.getElementById("rechts").onclick = rechts1;
        jukes -= 1;
        if (jukes === 6){
            alert('de moordenaar raakt vermoeit');
        }

} else {
        document.getElementById('body').style.backgroundImage = "url('img/lege.jpg')";
        document.getElementById("text").innerHTML = "rennend voor je leven kom je in een straat met meerdere wegen terecht";
        document.getElementById("door").style.visibility = "visible";
        document.getElementById("Hoofd").innerHTML = "Moeilijke keuzes";
        document.getElementById("left").style.visibility = "visible";
        document.getElementById("rechts").style.visibility = "visible";
        document.getElementById("door").innerHTML = "Ren recht door";
        document.getElementById("left").innerHTML = "Ren naar links";
        document.getElementById("rechts").innerHTML = "Ren naar rechts";
        document.getElementById("left").onclick = links1;
        document.getElementById("door").onclick = dood5;
        document.getElementById("rechts").onclick = rechts1;
        jukes += 1;
    }}

function vooruit1() {
    document.getElementById("Hoofd").innerHTML = "Tunnelvisie";
    document.getElementById("text").innerHTML = "Je blijft rennen in een rechte lijn gelukkig raakt de moordenaar uitgeput";
    document.getElementById('body').style.backgroundImage = "url('img/naamloos.png')";
    document.getElementById("left").style.visibility = "hidden";
    document.getElementById("rechts").style.visibility = "visible";
    document.getElementById("rechts").innerHTML = "sla rechtsaf";
    document.getElementById("rechts").onclick = rotonde2;
    document.getElementById("door").onclick = bocht1;
    document.getElementById("door").innerHTML = "blijf door  rennen";
    jukes += 1;

}
function vooruit2() {
    document.getElementById("Hoofd").innerHTML = "Tunnelvisie";
    document.getElementById("text").innerHTML = "je komt bij een splitsing";
    document.getElementById('body').style.backgroundImage = "url('img/naamloos.png')";
    document.getElementById("left").style.visibility = "hidden";
    document.getElementById("rechts").style.visibility = "hidden";
    document.getElementById("left").style.visibility = "visible";
    document.getElementById("left").innerHTML = "sla linksaf";
    document.getElementById("left").onclick = rennen;
    document.getElementById("door").onclick = bocht1;
    document.getElementById("door").innerHTML = "blijf door  rennen";
    jukes += 1;


}
function vooruit3() {
    document.getElementById("Hoofd").innerHTML = "Tunnelvisie";
    document.getElementById("text").innerHTML = "je komt terug bij de splitsing";
    document.getElementById('body').style.backgroundImage = "url('img/naamloos.png')";
    document.getElementById("rechts").style.visibility = "hidden";
    document.getElementById("left").style.visibility = "visible";
    document.getElementById("left").innerHTML = "sla linksaf";
    document.getElementById("left").onclick = rennen;
    document.getElementById("door").onclick = bocht1;
    document.getElementById("door").innerHTML = "blijf door  rennen";
    jukes += 1;
    tried = true;

}
function vooruit4() {
    document.getElementById("Hoofd").innerHTML = "Tunnelvisie";
    document.getElementById("text").innerHTML = "je komt terug bij de splitsing";
    document.getElementById('body').style.backgroundImage = "url('img/naamloos.png')";
    document.getElementById("rechts").style.visibility = "hidden";
    document.getElementById("left").style.visibility = "visible";
    document.getElementById("left").innerHTML = "sla linksaf";
    document.getElementById("left").onclick = rennen;
    document.getElementById("door").onclick = bocht1;
    document.getElementById("door").innerHTML = "blijf door  rennen";
    jukes += 1;
}

function bocht1() {
    document.getElementById("text").innerHTML = "Je snijdt de bocht beter af dan de moordenaar en krijgt een kleine voorsprong";
    document.getElementById("Hoofd").innerHTML = "Kort door de bocht";
    document.getElementById("door").onclick = rotonde1;
    document.getElementById('body').style.backgroundImage = "url('img/763.jpg')";
    document.getElementById("left").style.visibility = "hidden";
    document.getElementById("rechts").style.visibility = "hidden";
    document.getElementById("door").innerHTML = "Er is een rotonde verderop";
    jukes += 1;


}
function bocht2() {
    document.getElementById("text").innerHTML = "Je snijdt de bocht beter af dan de moordenaar en krijgt een kleine voorsprong";
    document.getElementById("Hoofd").innerHTML = "Kort door de bocht";
    document.getElementById("door").onclick = vooruit4;
    document.getElementById('body').style.backgroundImage = "url('img/763.jpg')";
    document.getElementById("left").style.visibility = "hidden";
    document.getElementById("rechts").style.visibility = "hidden";
    document.getElementById("door").innerHTML = "dit lijdt naar een splitsing";
    jukes += 1;


}
function links1() {
    if (jukes >= 10) {
        document.getElementById("Hoofd").innerHTML = "Een slimme ontsnapping";
        document.getElementById("text").innerHTML = "'O NEE!!' de straat loopt dood en met geen weg terug je probeerde je te verstoppen in een afvalbak";
        document.getElementById('body').style.backgroundImage = "url('img/oh nee.jpg')";
        document.getElementById("left").style.visibility = "hidden";
           document.getElementById("rechts").style.visibility = "hidden";
        document.getElementById("door").onclick = win;
        document.getElementById("door").innerHTML = "verstop in afvalbak"
        jukes += 1;

    } else {

            document.getElementById("Hoofd").innerHTML = "een doodlopende steeg";
            document.getElementById("text").innerHTML = "'O NEE!!' de straat loopt dood en met geen weg terug je probeerde je te verstoppen in een afvalbak";
            document.getElementById('body').style.backgroundImage = "url('img/oh nee.jpg')";
            document.getElementById("left").style.visibility = "hidden";
            document.getElementById("rechts").style.visibility = "hidden";
            document.getElementById("door").innerHTML = "verstop in afvalbak"
            document.getElementById("door").onclick = dood;
        }
}

function win() {
    document.getElementById("text").innerHTML = "de moordernaar had moeite je bij te houden paar seconden na het verstoppen hoor je iemand de hoek omkomen heel even hoor je niks en dan hoor je de voetstappen langzaam van je weg gaan";
    document.getElementById("Hoofd").innerHTML = "Een slimme ontsnapping";
    document.getElementById('body').style.backgroundImage = "win('img/oh nee.jpg')";
    document.getElementById("door").style.visibility = "hidden";
    document.getElementById("left").style.visibility = "hidden";
    document.getElementById("rechts").style.visibility = "hidden";
    document.getElementById("jaaa").style.visibility = "visible";
    document.getElementById("jaa").style.visibility = "visible";

}
function rechts1() {
    document.getElementById('body').style.backgroundImage = "url('img/the.jpg')";
    document.getElementById("Hoofd").innerHTML = "Een obstakel";
    document.getElementById("door").innerHTML = "Spring over de zwerver heen";
    document.getElementById("left").innerHTML = "Ren om de zwerver heen";
    document.getElementById("text").innerHTML = "Renned voor je leven ligt er een zwerver in de weg";
    document.getElementById("rechts").style.visibility = "hidden";
    document.getElementById("left").onclick = dood2;
    document.getElementById("door").onclick = rotonde1;
    jukes += 1;

}

function rotonde1() {
    if(tried === true) {

        document.getElementById("text").innerHTML = "je komt bij een rotonde wat doe je";
        document.getElementById('body').style.backgroundImage = "url('img/rotonde.jpg')";
        document.getElementById("rechts").onclick = dood4;
        document.getElementById("door").onclick = bocht2;
        document.getElementById("left").onclick = vooruit2;
        document.getElementById("left").style.visibility = "visible";
        document.getElementById("rechts").style.visibility = "visible";
        document.getElementById("left").innerHTML = "sla linksaf";
        document.getElementById("door").innerHTML = "ga rechtdoor";
        document.getElementById("rechts").innerHTML = "ga in een rondje terug";
        jukes += 1;
    }
     else {
        document.getElementById("text").innerHTML = "je komt bij een rotonde wat doe je";
        document.getElementById("Hoofd").innerHTML = "Rondje om de wereld";

        document.getElementById('body').style.backgroundImage = "url('img/rotonde.jpg')";
        document.getElementById("rechts").onclick = rechts2;
        document.getElementById("left").onclick = vooruit2;
        document.getElementById("door").onclick = bocht2;
        document.getElementById("rechts").style.visibility = "visible";
        document.getElementById("left").style.visibility = "visible";
        document.getElementById("left").innerHTML = "sla linksaf";
        document.getElementById("door").innerHTML = "ga rechtdoor";
        document.getElementById("rechts").innerHTML = "ga in een rondje terug";
        jukes += 1;


    }

}
function rotonde2() {
    if (tried === true){
        document.getElementById("text").innerHTML = "je komt bij een rotonde wat doe je";
        document.getElementById("Hoofd").innerHTML = "Rondje om de wereld";
        document.getElementById('body').style.backgroundImage = "url('img/rotonde.jpg')";
        document.getElementById("rechts").onclick = rechts3;
        document.getElementById("door").onclick = bocht2;
        document.getElementById("left").onclick = dood4;
        document.getElementById("rechts").style.visibility = "visible";
        document.getElementById("left").style.visibility = "visible";
        document.getElementById("left").innerHTML = "ga in een rondje terug";
        document.getElementById("door").innerHTML = "ga rechtdoor";
        document.getElementById("rechts").innerHTML = "sla rechtsaf";
        jukes += 1;
    } else{
        document.getElementById("text").innerHTML = "je komt bij een rotonde wat doe je";
        document.getElementById("Hoofd").innerHTML = "Rondje om de wereld";

        document.getElementById('body').style.backgroundImage = "url('img/rotonde.jpg')";
        document.getElementById("left").onclick = vooruit3;
        document.getElementById("rechts").onclick = rechts3;
        document.getElementById("door").onclick = boch2;
        document.getElementById("left").style.visibility = "visible";
        document.getElementById("rechts").style.visibility = "visible";
        document.getElementById("left").innerHTML = "ga in een rondje terug";
        document.getElementById("door").innerHTML = "ga rechtdoor";
        document.getElementById("rechts").innerHTML = "sla rechtsaf";
        jukes += 1;
    }
}

function rechts2() {
    document.getElementById('body').style.backgroundImage = "url('img/the.jpg')";
    document.getElementById("Hoofd").innerHTML = "Een herkenbaar obstakel";
    document.getElementById("door").innerHTML = "Spring over de zwerver heen";
    document.getElementById("rechts").innerHTML = "Ren om de zwerver heen";
    document.getElementById("text").innerHTML = "Renned voor je leven ligt de zwerver nog steeds in de weg";
    document.getElementById("left").style.visibility = "hidden";
    document.getElementById("rechts").onclick = dood2;
    document.getElementById("door").onclick = rennen;
    jukes += 1;
    tried = true;
}
function rechts3() {
    document.getElementById('body').style.backgroundImage = "url('img/the.jpg')";
    document.getElementById("Hoofd").innerHTML = "Een herkenbaar obstakel";
    document.getElementById("door").innerHTML = "Spring over de zwerver heen";
    document.getElementById("rechts").innerHTML = "Ren om de zwerver heen";
    document.getElementById("text").innerHTML = "Renned voor je leven ligt de zwerver nog steeds in de weg";
    document.getElementById("left").style.visibility = "hidden";
    document.getElementById("rechts").onclick = dood2;
    document.getElementById("door").onclick = rennen;
    jukes += 1;
}
function dood() {
    document.getElementById("text").innerHTML = "nog geen seconde dat je je zelf erin heb gekregen wordt de container ge-opend met een mes erachteraan de moordenaar heeft je poging om te verstoppen gezien";
    document.getElementById("Hoofd").innerHTML = "Als afval";
    document.getElementById('body').style.backgroundImage = "url('img/dood1.jpg')";
    document.getElementById("door").style.visibility = "hidden";
    document.getElementById("left").style.visibility = "hidden";
    document.getElementById("rechts").style.visibility = "hidden";
}

function dood2() {
    document.getElementById("text").innerHTML = "je besloot om omde zwerver heen te rennen de moordernaar deed dit echter niet en sprong over de zwerver heen en haalde je hiermee in en vermoorde je";
    document.getElementById("Hoofd").innerHTML = "Een kleine omweg";
    document.getElementById('body').style.backgroundImage = "url('img/dood1.jpg')";
    document.getElementById("door").style.visibility = "hidden";
    document.getElementById("left").style.visibility = "hidden";
    document.getElementById("rechts").style.visibility = "hidden";
}


function dood4() {
    document.getElementById("text").innerHTML = "de moodernaar herkende je truc en sneed je de weg af";
    document.getElementById("Hoofd").innerHTML = "Een goede poging";
    document.getElementById('body').style.backgroundImage = "url('img/dood1.jpg')";
    document.getElementById("door").style.visibility = "hidden";
    document.getElementById("left").style.visibility = "hidden";
    document.getElementById("rechts").style.visibility = "hidden";
}

function dood5() {
    document.getElementById("text").innerHTML = "hijgend en met moeite probeer je te ontsnappen maar helaas is de moordenaar iets sneller dan jouw en haalde je eindelijk in";
    document.getElementById("Hoofd").innerHTML = "2de plaats";
    document.getElementById('body').style.backgroundImage = "url('img/dood1.jpg')";
    document.getElementById("door").style.visibility = "hidden";
    document.getElementById("left").style.visibility = "hidden";
    document.getElementById("rechts").style.visibility = "hidden";
}
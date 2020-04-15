let array = [];

let perks = ["sprint burst", "head on", "addrenaline", "dead hard", "ace in the hole", "aftercare", "alert", "any means necessary", "autodidact", "babysitter", "balanced landing", "better together", "boil over", "bound", "borrowed time", "botany knowledge", "breakdown", "breakout", "buckle up", "calm spirit", "camaraderie", "dance with me", "dark sense", "decisive strike", "deja vu", "Deliverance", "Detective's hunch", "Distortion", "Diversion", "Empathy", "Fixated", "Flip Flop", "For the people", "Hope", "Inner Strength", "Iron Will", "Kindred", "Leader", "Left Behind", "Lightweight", "Lithe", "Lucky Break", "Mettle of Man", "No Mither", "No One Left Behind", "Object of Obsession", " Off the record", "Open Handed", "Pharmacy", "Plunderer's Instinct", "Poised", "Premonition", "Prove Thyself", "Quick and Quiet", "Red Herring", "resilience", "Saboteur", "Second Wind", "Self Care", "Slippery Meat", "Small Game", "Sole Survivor", "Solidarity", "Spine Chill", "Sprint Burst", "Stakeout", "Streetwise", "This is not happening", "Technician", "Tenacity", "Up The Ante", "Unbreakable", "Urban Evasion", "Vigil", "Wake Up!", "We'll Make It", "We're Gonna Live Forever", "Windows of opportunity"]

function first (){
    let num = Math.floor(Math.random() * perks.length)
    array.push(perks[num]);
    perks.splice(num);
    document.querySelector("#first").innerHTML = array[array.length - 1];
    setTimeout(second(), 3000);
}

function second (){
    let numtwo = Math.floor(Math.random() * perks.length)
    array.push(perks[numtwo]);
    perks.splice(numtwo);
    document.querySelector("#second").innerHTML = array[array.length - 1];
    third();
}

function third (){
    let numthree = Math.floor(Math.random() * perks.length)
    array.push(perks[numthree]);
    perks.splice(numthree);
    document.querySelector("#third").innerHTML = array[array.length - 1];
    fourth();
}

function fourth (){
    let numfour = Math.floor(Math.random() * perks.length)
    array.push(perks[numfour]);
    perks.splice(numfour);
    document.querySelector("#fourth").innerHTML = array[array.length - 1];
}
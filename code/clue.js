// STEP 1 - CREATE OBJECTS FOR ALL THE SUSPECTS, SOMETHING LIKE THIS:

const mrGreen = {
  firstName: 'Jacob',
  lastName: 'Green',
  color: 'green',
  description: 'He has a lot of connections',
  age: 45,
  image: 'assets/green.png',
  occupation: 'Gentleman'
}

const professorPlum = {
  firstName: 'Victor',
  lastName: 'Plum',
  color: 'purple',
  description: 'A tweedish don, fond of newts',
  age: 36,
  image: 'assets/plum.png',
  occupation: 'University Don'
}

const missScarlet = {
  firstName: 'Cassandra',
  lastName: 'Scarlet',
  color: 'red',
  description: 'A student of Cleopatra',
  age: 29,
  image: 'assets/scarlet.png',
  occupation: 'Spy'
}

const colonelMustard = {
  firstName: 'Jack',
  lastName: 'Mustard',
  color: 'yellow',
  description: 'A bellicose veteran of the Boer War',
  age: 72,
  image: 'assets/mustard.png',
  occupation: 'Retired'

}

const mrsPeacock = {
  firstName: 'Eleanor',
  lastName: 'Peacock',
  color: 'blue',
  description: 'A penniless widower with her eye on Colonel Mustard',
  age: 52,
  image: 'assets/peacock.png',
  occupation: 'Political Hostess'
}

const mrsWhite = {
  firstName: 'Mrs',
  lastName: 'White',
  color: 'white',
  description: 'A housekeeper with a knack for always knowing what her master wants',
  age: 63,
  image: 'assets/white.png',
  occupation: 'Housekeeper'
}

// CREATE OBJECTS FOR ALL THE WEAPONS, ADD MORE CHARACTERISTICS TO THE WEAPONS IF YOU LIKE.

const rope = {
  name: 'rope',
  weight: 10,
  image: 'assets/rope.png'
}

const candleStick = {
  name: 'candlestick',
  weight: 5,
  image: 'assets/candlestick.png'

}

const pistol = {
  name: 'pistol',
  weight: 5,
  image: 'assets/pistol.png'
}

const axe = {
  name: 'axe',
  weight: 20,
  image: 'assets/axe.png'
}

const poison = {
  name: 'poison',
  weight: 1,
  image: 'assets/poison.png'
}

const bat = {
  name: 'bat',
  weight: 15,
  image: 'assets/bat.png'
}

const dumbbell = {
  name: 'dumbbell',
  weight: 30,
  image: 'assets/dumbell.png'
}

const trophy = {
  name: 'trophy',
  weight: 10,
  image: 'assets/trophy.png'
}

const knife = {
  name: 'knife',
  weight: 5,
  image: 'assets/knife.png'
}


// THE ROOMS ONLY HAS A NAME SO NO NEED FOR OBJECTS THERE.

const diningRoom = 'Dining Room';
const conservatory = 'Conservatory';
const billiardRoom = 'Billiard Room';
const kitchen = 'Kitchen';
const study = 'Study';
const library = 'Library';
const lounge = 'Lounge';
const ballroom = 'Ballroom';
const hall = 'Hall';
const spa = 'Spa';
const livingRoom = 'Living Room';
const observatory = 'Observatory';
const theatre = 'Theatre';
const guestHouse = 'Guest House';
const patio = 'Patio';

// NOW GROUP ALL SUSPECTS, WEAPONS AND ROOMS IN ARRAYS LIKE THIS:

const suspects = [
  mrGreen,
  mrsWhite,
  missScarlet,
  professorPlum,
  mrsPeacock,
  colonelMustard,


]

const weapons = [
  rope,
  candleStick,
  knife,
  axe,
  poison,
  trophy,
  pistol,
  dumbbell,
  bat
]

const rooms = [
  diningRoom,
  conservatory,
  billiardRoom,
  kitchen,
  study,
  spa,
  patio,
  library,
  kitchen,
  lounge,
  ballroom,
  theatre,
  guestHouse,
  hall,
  livingRoom,
]





// THIS FUNCTION WILL RANDOMLY SELECT ONE ITEM FROM THE ARRAY THAT YOU PASS IN TO THE FUNCTION.
// YOU DON'T NEED TO CHANGE THIS, JUST TRY TO UNDERSTAND IT. AND HOW TO USE IT.
const randomSelector = array => {
  return array[Math.floor(Math.random() * array.length)]
}

// CREATE AN OBJECT THAT KEEPS THE MYSTERY.
// With a killer, a weapon and a room.
// The values will be set later.

const mystery = {
  killer: '',
  weapon: '',
  room: ''
}

let guess = ''

// This function will be invoked when you click on the killer card.
const pickKiller = () => {
  // This will randomly select a killer from the suspects. And add that to the mystery object.
  mystery.killer = randomSelector(suspects)

  // This will change the background color of the card to the one connected to the chosen killer and show the full name of the killer. Feel free to add more things to show about the killer.
  document.getElementById('killerCard').style.background = mystery.killer.color
  document.getElementById(
    'killerName'
  ).innerHTML = `${mystery.killer.firstName} ${mystery.killer.lastName}`
  document.getElementById('killerOccupation').innerHTML = `${mystery.killer.occupation}`
  document.getElementById('killerDescription').innerHTML = `${mystery.killer.description}`
  document.getElementById('killerImage').src = mystery.killer.image
}



const pickWeapon = () => {
  mystery.weapon = randomSelector(weapons)
  document.getElementById('weaponName').innerHTML = `${mystery.weapon.name}`;
  document.getElementById('weaponWeight').innerHTML = `${mystery.weapon.weight}`
  document.getElementById('weaponImage').src = mystery.weapon.image


}

const pickRoom = () => {
  mystery.room = randomSelector(rooms)
  document.getElementById('roomName').innerHTML = `${mystery.room}`
}

document.getElementById('killerCard').onclick = pickKiller
document.getElementById('weaponCard').onclick = pickWeapon
document.getElementById('roomCard').onclick = pickRoom

// const guess1 = (name) => {
//   guess = name
//   document.getElementById('suspectImage').src = guess.image

// }


const reveal = () => {

  if (mystery.killer === '' || mystery.weapon === '' || mystery.room === '') {
    document.getElementById('mystery').innerHTML = 'Please select the mystery answer!'
  } else if (guess === '') {
    document.getElementById('mystery').innerHTML = 'Please make a guess!'
  } else if (guess === mystery.killer) {
    document.getElementById('mystery').innerHTML = `Correct! It was ${mystery.killer.firstName} ${mystery.killer.lastName} in the
${mystery.room} with the ${mystery.weapon.name}.`
  } else if (guess !== mystery.killer) {
    document.getElementById('mystery').innerHTML = `Wrong! It was ${mystery.killer.firstName} ${mystery.killer.lastName} in the
${mystery.room} with the ${mystery.weapon.name}.`
  }
}

// CREATE FUNCTIONS pickWeapon and pickRoom in a similar way.
document.getElementById('reveal').onclick = reveal
// STEP 4 - CREATE A FUNCTION revealMystery that will be invoked when you click that button. It should show something like:
// 'The murder was committed by Jacob Green, in the living room with a rope.'

let pickedSuspect

const picked = (name, name2) => {
  if (guess === '') {
    document.getElementById(name).style.opacity = "0";
    document.getElementById(name).style.position = "absolute";

    pickedSuspect = name;
    guess = name2

    document.getElementById('suspectImage').src = guess.image
    document.getElementById('suspectImage').style.opacity = 1;
  } else {
    // document.getElementById(pickedSuspect).style.opacity = "1";
    // document.getElementById(pickedSuspect).style.position = "static";
    // document.getElementById(name).style.zIndex = "0"

    // pickedSuspect = name;
    // guess = name2;
    // document.getElementById('suspectImage').src = guess.image
    // document.getElementById(name).style.opacity = "0"
    // document.getElementById(name).style.position = "absolute";
    // document.getElementById(name).style.zIndex = "-1"

  }
}

const released = () => {
  if (guess.firstName !== undefined) {
    document.getElementById('suspectImage').style.opacity = 0;
    guess = ''


  }
  if (pickedSuspect === 'mrsWhite') {
    document.getElementById('mrsWhite').style.opacity = "1"
    document.getElementById('mrsWhite').style.position = "static"
  } else if (pickedSuspect === 'mrGreen') {
    document.getElementById('mrGreen').style.opacity = "1"
    document.getElementById('mrGreen').style.position = "static"
  } else if (pickedSuspect === 'profPlum') {
    document.getElementById('profPlum').style.opacity = "1"
    document.getElementById('profPlum').style.position = "static"
  } else if (pickedSuspect === 'colMustard') {
    document.getElementById('colMustard').style.opacity = "1"
    document.getElementById('colMustard').style.position = "static"
  } else if (pickedSuspect === 'missScarlet') {
    document.getElementById('missScarlet').style.opacity = "1"
    document.getElementById('missScarlet').style.position = "static"
  } else if (pickedSuspect === 'mrsPeacock') {
    document.getElementById('mrsPeacock').style.opacity = "1"
    document.getElementById('mrsPeacock').style.position = "static"
  }

}
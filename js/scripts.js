const customName = document.getElementById('customname');
const customOther = document.getElementById('customother');
const customTime = document.getElementById('customtime');
const customFood = document.getElementById('customfood');
const customPlace = document.getElementById('customplace');
const randomize = document.querySelector('.randomize');
const story = document.querySelector('.story');

function randomValueFromArray(array){
  const random = Math.floor(Math.random()*array.length);
  return array[random];
}

let storyText =  'It was bright out at 2:00pm and Mandoo was hungry, :insertx:. Right then the phone rang. It was Smalls. Perfect timing, they decided to meet up in 10 mins at :insertf:. Surprisingly, they actually met up on time since there was no traffic in this post-COVID world. Then out of nowhere :inserty: showed up and said, “:insertz:” They thought, "Is this even real life?!", but figured why not. So the whole gang went to grab some Howlin Rays via a contactless to-go order pick up. There was a nice breeze carrying the smell of Jasmine flowers in the air. 74 degrees F, the perfect temperature. They ended up in Union Station, where they found a sanitized picnic table more than 6 ft apart from anybody else. They followed COVID protocol and sanitized their hands thoroughly before devouring their delicious meals. The End.';


let insertX = ['like HANGRY, hungry-not-gonna-regret-or-take-responsiblity-of-what-happens-next-hangry',
'not like super hungry, just like, bored, wanna-a-sneaky-snack-hungry',
'actually not really hungry at all, more like a cabin-fever-gonna-go-crazy-need-a-walk hungry'];

let insertY = ['Post Malone',
'Dave Chappelle',
'LeBron James',
'Tina Fey',
'Crush & Zico',
'BTS'];

let insertZ = ['You guys look like fun. Wanna hang out?',
'Where the hell am I? Am I lost?',
'It is your birthday.',
'Time to party!!!!',
'Saw the DM you sent me, so here I am.',
'You guys are the best, my favorite fans.'];

let insertF = ['Disneyland',
'the Line Hotel in K-Town',
'Galleria Market',
'Santa Monica Pier',
'a boba shop in the SGV',
'the Hollywood Sign'];

randomize.addEventListener('click', result);

function result() {
  let newStory = storyText;
  let xItem = randomValueFromArray(insertX);
  let yItem = randomValueFromArray(insertY);
  let zItem = randomValueFromArray(insertZ);
  let fItem = randomValueFromArray(insertF);

  newStory = newStory.replace(':insertx:',xItem);
  newStory = newStory.replace(':insertx:',xItem);
  newStory = newStory.replace(':inserty:',yItem);
  newStory = newStory.replace(':insertz:',zItem);
  newStory = newStory.replace(':insertf:',fItem);

  if(customName.value !== '') {
    let name = customName.value;
    newStory = newStory.replace('Mandoo',name);
  }

  if(customOther.value !== '') {
    let name = customOther.value;
    newStory = newStory.replace('Smalls',name);
  }

  if(customTime.value !== '') {
    let name = customTime.value;
    newStory = newStory.replace('2:00pm',name);
  }

  if(customFood.value !== '') {
    let name = customFood.value;
    newStory = newStory.replace('Howlin Rays',name);
  }

  if(customPlace.value !== '') {
    let name = customPlace.value;
    newStory = newStory.replace('Union Station',name);
  }

  if(document.getElementById("uk").checked) {
    let length = Math.round(6*0.3048)+' m';
    let temperature = ((Math.round((94-32)*(5/9))))+' degrees C';
    newStory = newStory.replace('6 ft',length);
    newStory = newStory.replace('74 degrees F',temperature);

  }

  story.textContent = newStory;
  story.style.visibility = 'visible';
}

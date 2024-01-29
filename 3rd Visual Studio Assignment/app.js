// local reviews data
const reviews = [
  {
    id: 1,
    name: 'Kyle Mabini',
    job: 'Powerlifter',
    img: 'Image (1).jfif',
    text: "With his massive biceps, Kyle Mabini shows a significant increase in strength since the use of PEDS. Fortunately, he rivals Batman and Superman with his inhuman amount of pure lean muscle",
  },
  {
    id: 2,
    name: 'Isaac Eitzen',
    job: 'Bodybuilder',
    img: 'Image (2).jfif',
    text: 'Focusing on beauty, Isaac is flexing his enitre nervous system on stage. With his veins popping out like no other, he is on stage frequently with a lean 8% bodyfat percentage.',
  },
  {
    id: 3,
    name: 'Lorenzo Rodriguez',
    job: 'Moral Support/Coach',
    img: 'Image.jfif',
    text: 'Lorenzo has helped both, Kyle and Isaac, with their goals. While not working out himself, he shows great insight about how to train and manage yourself.',
  },
  {
    id: 4,
    name: 'bill anderson',
    job: 'Bill',
    img: 'https://www.course-api.com/images/people/person-3.jpeg',
    text: 'Bill is cool too',
  },
];
// select items
const img = document.getElementById('person-img');
const author = document.getElementById('author');
const job = document.getElementById('job');
const info = document.getElementById('info');

const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');
const randomBtn = document.querySelector('.random-btn');
const FirstBtn = document.querySelector('.First-btn');
const LastBtn = document.querySelector('.Last-btn');

// set starting item
let currentItem = 0;

// load initial item
window.addEventListener('DOMContentLoaded', function () {
  const item = reviews[currentItem];
  img.src = item.img;
  author.textContent = item.name;
  job.textContent = item.job;
  info.textContent = item.text;
});

// show person based on item
function showPerson(person) {
  const item = reviews[person];
  img.src = item.img;
  author.textContent = item.name;
  job.textContent = item.job;
  info.textContent = item.text;
}
// show next person
nextBtn.addEventListener('click', function () {
  currentItem++;
  if (currentItem > reviews.length - 1) {
    currentItem = 0;
  }
  showPerson(currentItem);
});
// show prev person
prevBtn.addEventListener('click', function () {
  currentItem--;
  if (currentItem < 0) {
    currentItem = reviews.length - 1;
  }
  showPerson(currentItem);
});
// Random, First, and Last buttons
randomBtn.addEventListener('click', function () {
  console.log('hello');

  currentItem = Math.floor(Math.random() * reviews.length);
  showPerson(currentItem);
});
FirstBtn.addEventListener('click', function(){
  
    currentItem = 0;
  showPerson(currentItem);
})
LastBtn.addEventListener('click', function(){
  
  currentItem = 3;
showPerson(currentItem);
})



'use strict';

const items = ['bag','banana','bathroom','boots','breakfast','bubblegum'
  ,'chair','cthulhu','dog-duck','dragon','pen','boots','pet-sweep','scissors',
  'shark','sweep','tauntaun','unicorn','usb', 'water-can', 'wine-glass'];



const imageSection=document.getElementById('imagesSection');
const leftImage=document.getElementById('leftImage');
const midImage=document.getElementById('midImage');
const rightImage=document.getElementById('rightImage');
let list = document.getElementById('list');
let button = document.getElementById('button');
let totalClicks = 0;


function Item(name){
  this.name = name;
  if (name === 'usb'){///////////////////3 diffrent path//////////////////////
    this.Path = `img/${name}.gif`;
  }else if (name === 'sweep'){
    this.Path = `img/${name}.png`;
  }else{
    this.Path = `img/${name}.jpg`;
  }
  this.clicks = 0;
  this.views = 0;
  Item.all.push(this);
}
Item.all = [];

for (let i = 0; i < items.length; i++) {
  new Item(items[i]);
}
console.table(Item.all);


//////////////////////////////////////////render////////////////////////////////////////////
let No_repetition =[];
let left, mid, right;
function render() {
  left = Item.all[random(0,Item.all.length-1)];
  leftImage.src = left.Path;
  leftImage.title=left.name;
  leftImage.alt=left.name;
  left.views++;

  mid= Item.all[random(0,Item.all.length-1)];
  midImage.src = mid.Path;
  midImage.title=left.name;
  midImage.alt=left.name;
  mid.views++;


  right = Item.all[random(0,Item.all.length-1)];
  rightImage.src = right.Path;
  rightImage.title=right.name;
  rightImage.alt=right.name;
  right.views++;

  while((left.name === right.name)|| (left.name ===mid.name)|| (mid.name === right.name)|| (No_repetition.includes(left.name))||
  (No_repetition.includes(right.name))|| (No_repetition.includes(mid.name)))
  {

    left = Item.all[random(0,Item.all.length-1)];
    leftImage.setAttribute('src' , left.Path);
    leftImage.setAttribute('alt' , left.name);

    mid= Item.all[random(0,Item.all.length-1)];
    midImage.setAttribute('src' , mid.path);
    midImage.setAttribute('alt' ,mid.name);
    right = Item.all[random(0,Item.all.length-1)];
    rightImage.setAttribute('src' , right.path);
    rightImage.setAttribute('alt' ,right.name);

  }
}
No_repetition= [];
imageSection.addEventListener('click',clickHandler);
function clickHandler(event){
  if(totalClicks < 25) {
    if(event.target.id === 'leftImage') {
      left.clicks++;
      if(event.target.id === 'midImage') {
        mid.clicks++;
      }else if(event.target.id === 'rightImage') {
        right.clicks++; }
    }
    if(event.target.id !== 'imagesSection') {
      totalClicks++;
    }
    render();
    if (totalClicks ===25){
      imageSection.removeEventListener('click',clickHandler);
      button.addEventListener('click', viewResults);
      totalClicks++;
      chart();
    }

  }

}

imageSection.addEventListener('click',clickHandler);
render();

function viewResults() {
  let Element = document.createElement('ul');
  list.appendChild(Element);
  let liElement;
  for (let i = 0; i < Item.all.length; i++) {
    liElement = document.createElement('li');
    liElement.textContent = `${Item.all[i].name} had ${Item.all[i].clicks} votes, and was seen ${Item.all[i].views} times.`;
    Element.appendChild(liElement);
  }
}



function random(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}



///////////////////chart/////////////////////////////////
function chart() {

  var clicks = [];
  var views = [];
  var labels = [];

  for (let i = 0; i < Item.all.length; i++) {


    labels.push(Item.all[i].name);
    clicks.push(Item.all[i].clicks);
    views.push(Item.all[i].views);
  }

  let ctx = document.getElementById('mychart').getContext('2d');
  let Chart1 = new Chart(ctx, {
    type: 'bar',
    data: {
      labels: labels,
      datasets: [{
        label: 'number of cliks',
        data: clicks,
        backgroundColor: 'rgb(98, 102, 99)',
        borderColor: 'white',
        borderWidth: 3
      }, {

        label: 'number of Views',
        data: views,
        backgroundColor:'rgb(242, 224, 63)',
        borderColor: 'white',
        borderWidth: 3


      }]
    },
  });
}




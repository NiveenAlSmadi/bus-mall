// not finished yet' need resulte'/

'use strict';

const items = ['bag','banana','bathroom','boots','breakfast','bubblegum'
  ,'chair','cthulhu','dog-duck','dragon','pen','boots','pet-sweep','scissors',
  'shark','sweep','tauntaun','unicorn','usb', 'water-can', 'wine-glass'];



const imageSection=document.getElementById('imagesSection');
const leftImage=document.getElementById('leftImage');
const midImage=document.getElementById('midImage');
const rightImage=document.getElementById('rightImage');
let totalClicks = 0;


function Item(name){
  this.name = name;
  if (name === 'usb'){///////////////////3 diffrent path/////////////////
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
//////////////////////////////////////////render//////////////////////////////

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
      //viewResults();
      totalClicks++;
    }

  }

}

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

}




render();

function random(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}


// resulte/////

//let button = document.getElementById('button')

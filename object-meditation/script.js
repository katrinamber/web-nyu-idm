// found this online to create the slideshow
const items = document.querySelectorAll('img');
const itemCount = items.length;
const nextItem = document.querySelector('.next');
const previousItem = document.querySelector('.previous');
let count = 0;

function showNextItem() {
  items[count].classList.remove('active');

  if(count < itemCount - 1) {
    count++;
  } else {
    count = 0;
  }

  items[count].classList.add('active');
  console.log(count);
}

function showPreviousItem() {
  items[count].classList.remove('active');

  if(count > 0) {
    count--;
  } else {
    count = itemCount - 1;
  }

  items[count].classList.add('active');
  console.log(count);
}

nextItem.addEventListener('click', showNextItem);
previousItem.addEventListener('click', showPreviousItem);


$("#morning").click(function(){
  $("body").css({"background-color": "#fed8b1"});
});

$("#night").click(function(){
  $("body").css({"background-color": "#003366"});
  });

  $("#dark").click(function(){
    $("body").css({"background-color": "black"});
    });

$("#reset").click(function(){
    $("body").css({"background-color": "#fCDCDF"});
  });

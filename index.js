

function getFirstSelector(selector) {
  return document.querySelector(selector);
}

function nestedTarget() {
  return document.querySelector('.target');
}

function deepestChild(n){
 return document.querySelector('#grand-node div div div div')
}

function increaseRankBy(n){
const rankedLists = document.querySelectorAll('ul.ranked-list')
  for (let i = 0; i < rankedLists.length; i++) {
    rankedLists[i].innerHTML = parseInt(i + 1 + n, 10)  
  }
}

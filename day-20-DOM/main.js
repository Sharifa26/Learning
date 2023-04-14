// 21 day DOM

/** Getting elements by tag name */ //getElementsByTagName()
const allTitles = document.getElementsByTagName('h1')

console.log(allTitles) 
console.log(allTitles.length)

for(let i=0;i<allTitles.length;i++){
    console.log(allTitles[i]);
}

/** Getting elements by class name */ //getElementsByClassName()

const allClass = document.getElementsByClassName('title')

console.log(allClass) 
console.log(allClass.length)

for(let i=0;i<allClass.length;i++){
    console.log(allClass[i]);
}

/** Getting an element by id */ //getElementById()

const id1 = document.getElementById('first-title');
console.log(id1);

const id3 = document.getElementById('third-title');
console.log(id3);

/** Getting elements by using querySelector methods */ //querySelector()
//The _document.querySelector_ method can select an HTML or HTML elements by tag name, by id or by class name.
let firstTitle = document.querySelector('h1') // select the first available h1 element
let firstId = document.querySelector('#first-title') // select id with first-title
let firstClass = document.querySelector('.title') // select the first available element with class title

/** _querySelectorAll_: can be used to select html elements by its tag name or class. It returns a nodeList which is an array like object which supports array methods. We can use **_for loop_** or **_forEach_** to loop through each nodeList elements. */

const all = document.querySelectorAll('h1') 

console.log(all.length) // 4
for (let i = 0; i < all.length; i++) {
  console.log(all[i])
}

all.forEach(title => console.log(title))


/** Adding attribute */
const titles = document.querySelectorAll('h1')
titles[3].className = 'title'
titles[3].id = 'fourth-title'

/** Adding attribute using setAttribute */ //setAttribute()
const title = document.querySelectorAll('h1')
title[3].setAttribute('class', 'title')
title[3].setAttribute('id', 'fourth-title')

//Adding class using classList
title[3].classList.add('title', 'header-title')

// Removing class using remove
title[3].classList.remove('title', 'header-title')
console.log(title);

//Adding Text to HTML element
// Adding Text content using textContent
titles[3].textContent = 'Fourth Title'
titles.forEach(title => console.log(title))

// Adding Text Content using innerHTML
titles[3].innerHTML = 'Title'
titles.forEach(title => console.log(title))
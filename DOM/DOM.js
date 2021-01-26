
xxxx FOR ALL EXERCISES BELOW REFER TO DOM.html & VIEW IN BROWSER

//1
const el = document.getElementById('home')
console.log(el) //logs out the event target
ans:<a href="/" id="home">Home</a>
//2
	const links = document.querySelectorAll('a');
console.log(links);
ans:	NodeList(3) [a#home, a, a]
//3
	const links = document.querySelectorAll('a');
links.forEach(link => {
  console.log(link);  
})
ans:<a href="/" id="home">Home</a>
<a href="/login">login</a>
<a href="/signup">signup</a>
  
//4
const links = document.querySelectorAll('a');

links.forEach(link => { //from all the links, take a link.
  link.matches('a[href="/login"]') //returns true 
          console.log(link);  
//or
  if (link.matches('a[href="/login"]')) {//if the link matches a[href="/login
    const loginLink = link; //store the link in a const loginLink
    console.log(loginLink);   //log it out.
  }
})
//	5 no more in use
const divs = document.getElementsByTagName('div')
 console.log(divs);


xxxx
const newPost = document.createElement('div');
newPost.className = 'top-post';
newPost.innerHTML = "<strong>This is a new post</strong>"

document.body.append(newPost);
document.body.prepend(newPost);
    
// to set the newPost above the 1st post
const post = document.querySelector('.post');
post.prepend(newPost);


xxx apply to all class post
const post = document.querySelector(".post");
post.style.backgroundColor = 'orange';
xxx
const post = document.querySelector(".post");
 post.style.margin = '30px';
post.classList.toggle('post');
or post.classList.add('post');

     
 XXX   
xxx only apply to the first class post
const post = document.querySelector(".post");
post.addEventListener('click', event => {
//   console.log(event.target);
//    or
  console.log('Do you want to edit this post?')
});
   
    
xxx to apply to all post you cant use querySelectorAll only but + forEach
const posts = document.querySelectorAll(".post");
posts.forEach(post => {  
  post.addEventListener('click', event => {
  //   console.log(event.target);  
    console.log('Do you want to edit this post?')
  });
})
xxx clicking any where on a post // but not ok becos it aplly to all the body not post,you then add if statement.
document.body.addEventListener('click', event => { 
    if (!event.target.closest('.post')) return;
  
  console.log('Do you want to edit this post?')  
})
//or
xxx clicking any where on the textcontent of a body not just the post
document.body.addEventListener('click', event => {
 console.log('event.target.textcontent')
})

xxxxxusing mouseover 
document.body.addEventListener('mouseover', event => {
  if (!event.target.closest('.post')) return;
  
  console.log('Do you want to edit this post?')  
})



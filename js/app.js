const header = document.querySelector('header');
const topNavList = document.getElementById('top-nav-list');
const navLinks = [];
const sections = document.querySelectorAll('.content');
const topButton = document.getElementById('top-button');


window.addEventListener('scroll', ()=> {
   
    if(window.pageYOffset < 300){
      topButton.classList.add('hide');
    }else{
      topButton.classList.remove('hide');
    }

 });


const buildTopNavMenu = (sections) => {    

  for(let s of sections){
     let link = `<li><a href="#${s.id}" id="nav-link-${s.id}" class="navlink">${s.dataset['title']}</a></li>`; 
     navLinks.push(link);
  }

  topNavList.innerHTML = navLinks;
 }     

buildTopNavMenu(sections);


const addLinkEvents = () => {
 
let topLinks = document.querySelectorAll(".navlink");

  for(let t of topLinks){
    let link = document.getElementById(t.id);
    link.addEventListener('click', (event) => {
      
      event.preventDefault();

      let sectionId = link.id.replace('nav-link-', '');

      let s = document.getElementById(sectionId);    

      s.classList.add('active-section');

      s.scrollIntoView({behavior : "smooth"});     

    });
  }
}

addLinkEvents(navLinks);


topButton.addEventListener('click', (event) => {
  event.preventDefault();  
  header.scrollIntoView({behavior : "smooth"});  

  for(let s of sections){
    s.classList.remove('active-section');
  }

});


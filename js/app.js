// global variables
const header = document.getElementById('topNav'); 
const topNavList = document.getElementById('top-nav-list');
const navLinks = [];
const sections = document.querySelectorAll('.content');
const topButton = document.getElementById('top-button');

// build top nav menu dynamically
const buildTopNavMenu = (sections) => {     

  for(let s of sections){
     let link = `<li><a href="#${s.id}" id="nav-link-${s.id}" class="navlink">${s.dataset['title']}</a></li>`; 
     navLinks.push(link);
  }

  topNavList.innerHTML = navLinks;
 }     

buildTopNavMenu(sections);

// add click events to each link in top nav
// highlight currently active section in nav menu
// scroll active section into view
const addLinkEvents = () => {
 
let topLinks = document.querySelectorAll(".navlink");

  for(let t of topLinks){

    let link = document.getElementById(t.id);    

    link.addEventListener('click', (event) => {
      
      event.preventDefault();

      let sectionId = link.id.replace('nav-link-', '');

      let s = document.getElementById(sectionId);    

      cleanActiveLinks();

      toggleMenu();

      cleanActiveSections();

      link.classList.add('active-link');

      s.classList.add('active-section');

      s.scrollIntoView({behavior : "smooth", block: "start"});     

    });
  }
}

addLinkEvents(navLinks);


// reset css classes for menu links
function cleanActiveLinks(){
  let activeLinks = document.querySelectorAll("a.active-link");
  
  for(let a of activeLinks){
    a.classList.remove('active-link');
  }
  
}

// reset active section styling
function cleanActiveSections(){
  let activeSections = document.querySelectorAll("section.active-section");

  for(let s of activeSections){
      s.classList.remove('active-section');
  }

}


// show/hide Top button depending on scrollbar position
window.addEventListener('scroll', ()=> {
   
  if(window.pageYOffset < 300){
    topButton.classList.add('hide');
  }else{
    topButton.classList.remove('hide');
  }

});

// when top button is clicked css on top nav is reset and scroll bar returns to top of page
topButton.addEventListener('click', (event) => {
  event.preventDefault();  

  cleanActiveLinks();

  toggleMenu(true);  

  header.scrollIntoView({behavior : "smooth", block: "end"});    

  for(let s of sections){
    s.classList.remove('active-section');
  }

});

// responsive hamburger menu code to toggle visibility of menu items
function toggleMenu(topButton = false){
 
    let navList = document.getElementById("top-nav-list").getElementsByTagName('li');

    if(topButton){

        for(let n of navList){
          n.classList.remove('responsive');
        }

        return;
    }

    for(let n of navList){
      n.classList.toggle('responsive');
    }
 
}




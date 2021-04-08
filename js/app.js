const topNavList = document.getElementById('top-nav-list');
const sections = document.querySelectorAll('.content');
const navLinks = [];

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
      console.log(`clicked link for  ${link.id}`);

      let sectionId = link.id.replace('nav-link-', '');

      let s = document.getElementById(sectionId);  

      s.scrollIntoView({behavior : "smooth"});
    });
  }
}

addLinkEvents(navLinks);



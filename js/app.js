const topNavList = document.getElementById('top-nav-list');
const sections = document.querySelectorAll('.content');
const navLinks = [];

const buildTopNavMenu = (sections) => {    

  for(let s of sections){
     let link = `<li><a href="#${s.id}">${s.dataset['title']}</a></li>`;     
     console.log(link);
     navLinks.push(link);
  }

  topNavList.innerHTML = navLinks;

 }  
   

buildTopNavMenu(sections);
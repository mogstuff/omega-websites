const sections = document.querySelectorAll('.content');
const navLinks = [];

const buildTopNavMenu = (sections) => {    

  for(let s of sections){
     console.log(s.dataset['title']);     
  }

 }  
   

buildTopNavMenu(sections);
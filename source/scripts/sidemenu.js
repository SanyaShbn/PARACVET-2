


export function sideMenu() {


    const burgerBtn = document.getElementById('menu-btn');
const menu = document.getElementById('menu');


burgerBtn.addEventListener('click', () => {
  menu.classList.toggle('open');
  console.log()
    if (menu.classList.contains('open')) {

      console.log("open")
      animate(".open", { opacity: 1 }, { duration: 0.5 })
   
    } else {

      console.log("close")
      animate("#menu", { opacity: 0 }, { duration: 0.5 })
  };

});
    
}

export default sideMenu;
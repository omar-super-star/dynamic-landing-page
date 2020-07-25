/**
 *
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 *
 * Dependencies: None
 *
 * JS Version: ES2015/ES6
 *
 * JS Standard: ESlint
 *
*/

/**
 * Define Global Variables
 *
*/
var class_name="your-active-class"
var nav_ele=document.getElementsByTagName("section")
var active_section=nav_ele[0]
let nav_ele_id=[]
let nav_ele_pos={}
var nav_list=document.getElementById('navbar__list')

/**
 * End Global Variables
 * Start Helper Functions
 *
*/
function add_nav(elem_id,ele){
  let nav_list_li=document.createElement("LI");
  let text=document.createTextNode(`${elem_id}`);
  nav_list_li.className="menu__link"
  nav_list_li.appendChild(text);
  nav_list.appendChild(nav_list_li);
  add_event(nav_list_li,ele,elem_id,nav_ele_pos[`${elem_id}`])
};
function add_event(nav_elem,elem,elem_id,elem_pos){
  console.log("event")
  nav_elem.addEventListener("click",()=>{
    console.log(elem_pos.posy)
    let yl=elem_pos.posy+20
    console.log(elem_pos.posy)
    window.scrollTo(elem_pos.posx,yl);
    console.log("click ok")
    active_section.className="";
    elem.className=class_name;
    active_section=elem;
  });
  };


/**
 * End Helper Functions
 * Begin Main Functions
 *
*/
function build_nav(){
  window.moveTo(0,0);
  for (var ele of nav_ele) {
    let idofele=ele.id
    nav_ele_id.push(idofele)
    let pos= ele.getBoundingClientRect()
    let pos_xy={posx:pos.x,posy:pos.y}
    nav_ele_pos[`${idofele}`]=pos_xy
    add_nav(idofele,ele)
};
};
// build the nav


// Add class 'active' to section when near top of viewport


// Scroll to anchor ID using scrollTO event


/**
 * End Main Functions
 * Begin Events
 *
*/
build_nav()
// Build menu
window.onscroll=()=>{
  let y=document.body.scrollTop;
  let len=nav_ele_id.length;
  console.log(nav_ele_id)
  for (var i in nav_ele_id) {
    y=document.documentElement.scrollTop;
    console.log(i)
    if (i<len-1) {
      let first=nav_ele_id[i];
      let second=nav_ele_id[Number(i)+1];
      let eley=nav_ele_pos[`${first}`].posy;
      let eleys=nav_ele_pos[`${second}`].posy;
      console.log("one");
      if (y>=eley && y<eleys){
        let elem=document.getElementById(`${first}`);
        elem.className=class_name;
        if (active_section !== elem){
           active_section.className="";
           active_section=elem;
        };
    };
  }
  else {
    let first=nav_ele_id[i]
    console.log("two")
    if (y>=nav_ele_pos[`${first}`].posy-200){
      let elem=document.getElementById(`${first}`);
      elem.className=class_name;
      if (active_section !== elem){
         active_section.className="";
         active_section=elem;
      };
  };
  };
};
};
// Scroll to section on link click

// Set sections as active

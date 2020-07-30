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
//End Global Variables

function add_nav(elem_id,ele){
  /*
  this functio take the id of section and the section elemnet
  and add the li to the nav bar
  */
  let nav_list_li=document.createElement("LI");
  let text=document.createTextNode(`${elem_id}`);
  //active the style for li
  nav_list_li.className="menu__link";

  nav_list_li.appendChild(text);
  nav_list.appendChild(nav_list_li);

  add_event(nav_list_li,ele,elem_id,nav_ele_pos[`${elem_id}`])
};
function add_event(nav_elem,elem,elem_id,elem_pos){
  /*
  start the click event
  */
  nav_elem.addEventListener("click",()=>{

    let yl=elem_pos.posy+20;
    window.scrollTo(elem_pos.posx,yl);
    //active the section
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
    // define the place of the every sections
    let idofele=ele.id
    nav_ele_id.push(idofele)

    let pos= ele.getBoundingClientRect() //get the place of the elements
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
  // know the place of the scroll and active the section at the same place
  for (var i in nav_ele_id) {
    y=document.documentElement.scrollTop;

    if (i<len-1) {
      // store the y of the elements
      let first=nav_ele_id[i];
      let second=nav_ele_id[Number(i)+1];
      let eley=nav_ele_pos[`${first}`].posy;
      let eleys=nav_ele_pos[`${second}`].posy;

      if (y>=eley && y<eleys){
        let elem=document.getElementById(`${first}`);
        elem.className=class_name;
        //active the section
        if (active_section !== elem){
           active_section.className="";
           active_section=elem;
        };
    };
  }
  else {
    let first=nav_ele_id[i]

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


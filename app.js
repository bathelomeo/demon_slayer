let sections = document.querySelectorAll('section')
let navlink = document.querySelectorAll('header ul a')

window.onscroll =() =>{
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop -150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');
        if (top>offset && top <offset + height){
            navlink.forEach(links =>{
                links.classList.remove('active')
                document.querySelector('header ul a[href*='+ id +']').classList.add('active')
            })
        }
    })
}
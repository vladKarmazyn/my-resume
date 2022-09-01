// // SIDEBAR ACORDION
// const arrow = document.querySelectorAll('.arrow');


// const techSkills = document.querySelector('#tech_skill');
// const techSkillList = document.querySelector('.tech-skill-list');

// techSkills.addEventListener('click', function () {
//     techSkillList.classList.toggle('active_acordion');
//     arrow[1].classList.toggle('active_arrow');
// });

// const contacts = document.querySelector('#contact_title');
// const contactList = document.querySelector('#contact-list')

// contacts.addEventListener('click', function () {
//     contactList.classList.toggle('active_acordion');
//     arrow[0].classList.toggle('active_arrow');
// });

// const softSkills = document.querySelector('#soft-skill-list');
// const softSkillList = document.querySelector('.soft-skill-list')

// softSkills.addEventListener('click', function () {
//     softSkillList.classList.toggle('active_acordion');
//     arrow[2].classList.toggle('active_arrow');
// });

// // MAIN CONTENT ACORDION

// const arrowBlack = document.querySelectorAll('.arrow_black');
// const title = document.querySelectorAll('.title');


// const projectList = document.querySelector('.project-list');

// title[0].addEventListener('click', function () {
//     projectList.classList.toggle('active_acordion');
//     arrowBlack[0].classList.toggle('active_arrow');
// } );

// const work = document.querySelector('.work');

// title[1].addEventListener('click', function() {
//     work.classList.toggle('active_acordion');
//     arrowBlack[1].classList.toggle('active_arrow');
// })

// const education = document.querySelector('.education_acordion');

// title[2].addEventListener('click', function() {
//     education.classList.toggle('active_acordion');
//     arrowBlack[2].classList.toggle('active_arrow');
// })

// // WORK CONTENT ACORDION

// const position = document.querySelectorAll('.position');
// const workList = document.querySelectorAll('.work-list');
// const arrowOrange = document.querySelectorAll('.arrow_orange')

// position[0].addEventListener('click', function() {
//     workList[0].classList.toggle('active_acordion')
//     arrowOrange[0].classList.toggle('active_arrow')
// })

// position[1].addEventListener('click', function() {
//     workList[1].classList.toggle('active_acordion')
//     arrowOrange[1].classList.toggle('active_arrow')
// })
// position[2].addEventListener('click', function() {
//     workList[2].classList.toggle('active_acordion')
//     arrowOrange[2].classList.toggle('active_arrow')
// })

const acordionHeader = document.querySelectorAll('.acordion_header');
const acordionItem = document.querySelectorAll('.acordion_item');
const arrows = document.querySelectorAll('.arrows') 


function acordion (acordionH, acordionI, arrow) {
    for (let i = 0; i < acordionH.length; i++) {
        acordionH[i].addEventListener('click', function() {
            acordionI[i].classList.toggle('active_acordion');
            arrow[i].classList.toggle('active_arrow');
             })
        
    }
    
}

acordion(acordionHeader, acordionItem, arrows );
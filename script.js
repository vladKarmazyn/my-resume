const techSkills = document.querySelector('#tech_skill');
const techSkillList = document.querySelector('.tech-skill-list');

console.log(techSkillList);
techSkills.addEventListener('click', function () {
    techSkillList.classList.toggle('active_acordion')
})

const contacts = document.querySelector('#contact_title');
const contactList = document.querySelector('#contact-list')
contacts.addEventListener('click', function () {
    contactList.classList.toggle('active_acordion')
})

const softSkills = document.querySelector('#soft-skill-list');
const softSkillList = document.querySelector('.soft-skill-list')
softSkills.addEventListener('click', function () {
    softSkillList.classList.toggle('active_acordion')
})
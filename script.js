const sidebar = document.querySelector('.sidebar-title');
const techSkillList = document.querySelector('.tech-skill-list');
console.log(sidebar);
console.log(techSkillList);
sidebar.addEventListener('click', function () {
    techSkillList.classList.toggle('tech-skill-active')
})


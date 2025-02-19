function toggleSkills(skillType) {
    var skills = document.querySelector('.' + skillType);
    var toggleBtn = skills.previousElementSibling;

    // Toggle the hidden class to show/hide the skills section
    skills.classList.toggle('hidden');

    // Update the button icon based on the visibility of the skills section
    if (skills.classList.contains('hidden')) {
        toggleBtn.innerHTML = '<i class="fas fa-angle-down"></i>';
    } else {
        toggleBtn.innerHTML = '<i class="fas fa-angle-up"></i>';
    }
}

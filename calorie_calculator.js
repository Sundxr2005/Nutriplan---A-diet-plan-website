document.getElementById('calculator-form').addEventListener('submit', function(e) {
    e.preventDefault();  // Prevent form submission

    const age = document.getElementById('age').value;
    const weight = document.getElementById('weight').value;
    const height = document.getElementById('height').value;
    const activityLevel = document.getElementById('activity-level').value;
    const gender = document.getElementById('gender').value;

    // Harris-Benedict Formula for BMR calculation
    let bmr;
    if (gender === 'male') {
        bmr = 88.362 + (13.397 * weight) + (4.799 * height) - (5.677 * age);
    } else {
        bmr = 447.593 + (9.247 * weight) + (3.098 * height) - (4.330 * age);
    }

    // Calculate Total Daily Energy Expenditure (TDEE)
    const tdee = bmr * activityLevel;

    // Display the result
    document.getElementById('calories').innerText = `Your estimated daily calorie needs: ${Math.round(tdee)} calories.`;
});
function openLoginModal() {
    document.getElementById('loginModal').style.display = 'flex';
}
function openRegisterModal() {
    closeAllModals(); 
    document.getElementById('registerModal').style.display = 'flex';
}
function closeAllModals() {
    document.querySelectorAll('.modal').forEach(modal => {
        modal.style.display = 'none';
    });
}
window.onclick = function(event) {
    const modals = document.querySelectorAll('.modal');
    modals.forEach(modal => {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });
};

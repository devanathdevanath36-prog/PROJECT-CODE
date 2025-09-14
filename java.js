// Function to switch sections
function showSection(id) {
  // Hide all sections
  document.querySelectorAll('section').forEach(s => s.classList.remove('active'));

  // Show the selected section
  document.getElementById(id).classList.add('active');

  // Update active link in navbar
  document.querySelectorAll('.navbar nav a').forEach(a => a.classList.remove('active'));
  const activeLink = document.querySelector(`.navbar nav a[onclick="showSection('${id}')"]`);
  if (activeLink) activeLink.classList.add('active');
}

// Handle Apply form submission
const form = document.getElementById('applyForm');

form.addEventListener('submit', e => {
  e.preventDefault();

  // Get form values
  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const role = document.getElementById('role').value;

  if (!name || !email || !role) {
    alert("Please fill all fields.");
    return;
  }

  // Update dashboard profile
  document.getElementById('profileName').textContent = name;
  document.getElementById('profileEmail').textContent = email;

  // Update dashboard applications list
  const list = document.getElementById('applicationsList');
  list.innerHTML += `<li>${role} - Submitted</li>`;

  // Alert success and reset form
  alert('Application submitted successfully!');
  form.reset();

  // Switch to dashboard section
  showSection('dashboard');
});

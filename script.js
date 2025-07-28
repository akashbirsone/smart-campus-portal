// Toggle sidebar collapse
function toggleSidebar() {
    const sidebar = document.querySelector('.sidebar');
    const mainContent = document.querySelector('.main-content');
    sidebar.classList.toggle('collapsed');

    if (sidebar.classList.contains('collapsed')) {
        mainContent.style.marginLeft = '70px';
    } else {
        mainContent.style.marginLeft = '0';
    }
}

// Toggle mobile sidebar
function toggleMobileSidebar() {
    const sidebar = document.querySelector('.sidebar');
    const overlay = document.getElementById('mobileSidebarOverlay');

    sidebar.classList.toggle('translate-x-0');
    sidebar.classList.toggle('-translate-x-full');
    overlay.classList.toggle('hidden');

    if (sidebar.classList.contains('translate-x-0')) {
        sidebar.classList.add('fixed', 'inset-y-0', 'left-0', 'z-50', 'w-64');
    } else {
        setTimeout(() => {
            sidebar.classList.remove('fixed', 'inset-y-0', 'left-0', 'z-50', 'w-64');
        }, 300);
    }
}

// Toggle profile dropdown
function toggleProfileDropdown() {
    const dropdown = document.getElementById('profileDropdown');
    dropdown.classList.toggle('hidden');
}

// Close dropdown when clicking outside
document.addEventListener('click', function (event) {
    const dropdown = document.getElementById('profileDropdown');
    const profileButton = document.querySelector('[onclick="toggleProfileDropdown()"]');

    if (!profileButton.contains(event.target) && !dropdown.contains(event.target)) {
        dropdown.classList.add('hidden');
    }
});

// AI Tool functions
function openAITool(tool) {
    const modal = document.getElementById('aiToolModal');
    const modalTitle = document.getElementById('modalTitle');
    const modalContent = document.getElementById('modalContent');

    modal.classList.remove('hidden');

    switch (tool) {
        case 'summarizer':
            modalTitle.textContent = 'PDF Summarizer';
            modalContent.innerHTML = `
                        <div class="space-y-4">
                            <p class="text-gray-600">Upload your PDF notes and get a concise summary with key points.</p>
                            <div class="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
                                <i class="fas fa-file-pdf text-4xl text-red-500 mb-2"></i>
                                <p class="text-gray-500 mb-3">Drag & drop your PDF here or click to browse</p>
                                <button class="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600">
                                    Select File
                                </button>
                            </div>
                            <div class="flex items-center justify-between">
                                <div>
                                    <p class="font-medium">Summary Length</p>
                                    <div class="flex items-center space-x-2 mt-1">
                                        <button class="px-3 py-1 bg-gray-100 rounded-full text-sm">Short</button>
                                        <button class="px-3 py-1 bg-blue-500 text-white rounded-full text-sm">Medium</button>
                                        <button class="px-3 py-1 bg-gray-100 rounded-full text-sm">Detailed</button>
                                    </div>
                                </div>
                                <button class="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600">
                                    Generate Summary
                                </button>
                            </div>
                        </div>
                    `;
            break;

        case 'doubt':
            modalTitle.textContent = 'AI Doubt Assistant';
            modalContent.innerHTML = `
                        <div class="space-y-4">
                            <p class="text-gray-600">Ask any academic doubt and get detailed explanations.</p>
                            <div class="border border-gray-200 rounded-lg p-3 bg-gray-50">
                                <p class="text-sm text-gray-500">Example: "Explain the difference between TCP and UDP protocols"</p>
                            </div>
                            <textarea class="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-blue-500 focus:border-blue-500" rows="4" placeholder="Type your doubt here..."></textarea>
                            <div class="flex justify-between">
                                <div class="flex items-center space-x-2">
                                    <button class="p-2 text-gray-500 hover:text-blue-500">
                                        <i class="fas fa-paperclip"></i>
                                    </button>
                                    <button class="p-2 text-gray-500 hover:text-blue-500">
                                        <i class="fas fa-microphone"></i>
                                    </button>
                                </div>
                                <button class="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600">
                                    Ask Doubt
                                </button>
                            </div>
                        </div>
                    `;
            break;

        case 'video':
            modalTitle.textContent = 'YouTube Video Summarizer';
            modalContent.innerHTML = `
                        <div class="space-y-4">
                            <p class="text-gray-600">Paste a YouTube link to get key points and timestamps.</p>
                            <div class="flex">
                                <input type="text" class="flex-1 border border-gray-300 rounded-l-lg p-3 focus:ring-2 focus:ring-blue-500 focus:border-blue-500" placeholder="https://www.youtube.com/watch?v=...">
                                <button class="bg-blue-500 text-white px-4 py-2 rounded-r-lg hover:bg-blue-600">
                                    Summarize
                                </button>
                            </div>
                            <div class="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
                                <i class="fab fa-youtube text-4xl text-red-500 mb-2"></i>
                                <p class="text-gray-500">No video selected</p>
                            </div>
                        </div>
                    `;
            break;

        case 'plagiarism':
            modalTitle.textContent = 'Plagiarism Checker';
            modalContent.innerHTML = `
                        <div class="space-y-4">
                            <p class="text-gray-600">Upload your assignment to check for similarity with other sources.</p>
                            <div class="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
                                <i class="fas fa-file-word text-4xl text-blue-500 mb-2"></i>
                                <p class="text-gray-500 mb-3">Drag & drop your document here or click to browse</p>
                                <button class="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600">
                                    Select File
                                </button>
                            </div>
                            <div class="flex items-center justify-between">
                                <div>
                                    <p class="font-medium">Check against:</p>
                                    <div class="flex items-center space-x-2 mt-1">
                                        <input type="checkbox" id="web" checked>
                                        <label for="web" class="text-sm">Web Sources</label>
                                        <input type="checkbox" id="database" checked>
                                        <label for="database" class="text-sm">Student Submissions</label>
                                    </div>
                                </div>
                                <button class="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600">
                                    Check Plagiarism
                                </button>
                            </div>
                        </div>
                    `;
            break;
    }
}

function closeAITool() {
    document.getElementById('aiToolModal').classList.add('hidden');
}

// Initialize mobile sidebar to be hidden
document.addEventListener('DOMContentLoaded', function () {
    const sidebar = document.querySelector('.sidebar');
    sidebar.classList.add('-translate-x-full');
});


// // this is a Login && Sign Up Form 
window.onload = function () {
    
    const isLoggedIn = localStorage.getItem("isLoggedIn");

    // Redirect logic
    if (window.location.pathname.includes("index.html") && isLoggedIn !== "true") {
        window.location.href = "login.html";
    }

    if (window.location.pathname.includes("login.html") && isLoggedIn === "true") {
        window.location.href = "index.html";
    }
};

// Show signup
function showSignup() {
    document.getElementById("loginForm").classList.add("hidden");
    document.getElementById("signupForm").classList.remove("hidden");
    document.getElementById("formTitle").innerText = "Register";
}

// Show login
function showLogin() {
    document.getElementById("signupForm").classList.add("hidden");
    document.getElementById("loginForm").classList.remove("hidden");
    document.getElementById("formTitle").innerText = "Login";
}

// Register
function register() {
    const username = document.getElementById("signupUsername").value.trim();
    const password = document.getElementById("signupPassword").value.trim();

    if (username === "" || password === "") {
        alert("Please fill both fields.");
        return;
    }

    localStorage.setItem("registeredUsername", username);
    localStorage.setItem("registeredPassword", password);
    alert("Registration successful!");
    showLogin();
}

// Login
function login() {
    const username = document.getElementById("loginUsername").value.trim();
    const password = document.getElementById("loginPassword").value.trim();

    const storedUsername = localStorage.getItem("registeredUsername");
    const storedPassword = localStorage.getItem("registeredPassword");

    if (username === storedUsername && password === storedPassword) {
        localStorage.setItem("isLoggedIn", "true");
        localStorage.setItem("username", username);
        window.location.href = "index.html";
    } else {
        alert("Invalid username or password.");
    }
}

// Logout
function logout() {
    localStorage.removeItem("isLoggedIn");
    localStorage.removeItem("username");
    window.location.href = "login.html";
}


window.onload = function () {
    localStorage.setItem("username", username);
};



// login kr ne baad Username show karega yahi block
if (window.location.pathname.includes("index.html")) {
    const username = localStorage.getItem("username") || "User";
    const nameSpan = document.getElementById("displayUsername");
    if (nameSpan) {
        nameSpan.textContent = username;

    }
}

// this is timetable in college subject
function showTimetable() {
    document.getElementById('timetable').classList.remove('hidden');
}

function showSection(id) {
    document.getElementById('results').classList.add('hidden');
    document.getElementById(id).classList.remove('hidden');
}


// this is result calculateGPA
function showSection(id) {
    document.querySelectorAll('section').forEach(sec => sec.classList.add('hidden'));
    document.getElementById(id).classList.remove('hidden');
}

function handleFileUpload() {
    const input = document.getElementById('marksheetInput');
    const fileListDiv = document.getElementById('fileList');
    const files = Array.from(input.files);

    if (files.length > 6) {
        alert("⚠️ Only 6 files are allowed.");
        input.value = '';  // Reset
        fileListDiv.innerHTML = '';
        return;
    }

    if (files.length === 0) {
        fileListDiv.innerHTML = '<p>No files selected.</p>';
        return;
    }

    let fileListHTML = `<p>📄 Uploaded ${files.length} file(s):</p><ul class="list-disc pl-6">`;
    files.forEach(file => {
        fileListHTML += `<li>${file.name}</li>`;
    });
    fileListHTML += '</ul>';
    fileListDiv.innerHTML = fileListHTML;
}

function calculateGPA() {
    const inputs = document.querySelectorAll('.sem-input');
    let total = 0;
    let count = 0;
    let list = "";

    inputs.forEach((input, idx) => {
        const val = parseFloat(input.value);
        if (!isNaN(val) && val >= 40) { // 40+ means pass
            total += val;
            count++;
            list += `<li>Semester ${idx + 1}: ${val} marks ✅</li>`;
        } else if (!isNaN(val)) {
            list += `<li>Semester ${idx + 1}: ${val} marks ❌ (ATKT)</li>`;
        }
    });

    const gpaDiv = document.getElementById("gpaResult");

    if (count === 0) {
        gpaDiv.innerHTML = "⚠️ No passing marks entered!";
        gpaDiv.classList.remove("hidden");
        return;
    }

    const gpa = (total / count / 10).toFixed(2);
    gpaDiv.innerHTML = `
        <h3 class="text-black mb-2">📊 GPA Calculation:</h3>
        <ul class="list-disc pl-6 mb-2">${list}</ul>
        <p class="text-blue-700">🎯 Final GPA (Passed Only): <strong>${gpa}</strong></p>
      `;
    gpaDiv.classList.remove("hidden");
}

// this is college evetn part in javascript 
const events = [
    { name: "Tech Fest 2025", date: "2025-08-01T18:00:00" },
    { name: "Cultural Night", date: "2025-07-20T19:00:00" },
    { name: "Placement Drive", date: "2025-08-10T10:00:00" },
    { name: "Fresher Party", date: "2025-08-15" },
];

const eventList = document.getElementById('eventList');

function updateCountdown() {
    eventList.innerHTML = '';

    events.forEach(event => {
        const now = new Date();
        const eventDate = new Date(event.date);
        const diff = eventDate - now;
        let isExpired = diff <= 0;

        let countdownText = '';
        if (isExpired) {
            countdownText = '❌ Event Expired';
        } else {
            const days = Math.floor(diff / (1000 * 60 * 60 * 24));
            const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
            const minutes = Math.floor((diff / (1000 * 60)) % 60);
            const seconds = Math.floor((diff / 1000) % 60);
            countdownText = `⏳ ${days}d ${hours}h ${minutes}m ${seconds}s left`;
        }

        const card = document.createElement('div');
        card.className = `
          p-6 rounded-2xl shadow-lg transform transition hover:scale-105
          ${isExpired ? 'bg-gray-100 border border-gray-300 opacity-60' : 'bg-white/70 backdrop-blur border-l-4 border-blue-500'}
        `;

        card.innerHTML = `
          <h2 class="text-2xl font-semibold text-gray-900 mb-2">${event.name}</h2>
          <p class="text-sm text-gray-600 mb-3">📅 ${new Date(event.date).toLocaleString()}</p>
          <p class="text-base font-medium ${isExpired ? 'text-red-500' : 'text-green-600'}">${countdownText}</p>
        `;

        eventList.appendChild(card);
    });
}

updateCountdown();
setInterval(updateCountdown, 1000);



form.addEventListener("submit", function (e) {
  e.preventDefault();

  const feedbackData = {
    name: document.getElementById("name").value,
    html: document.getElementById("htmlFeedback").value,
    tailwind: document.getElementById("tailwindFeedback").value,
    js: document.getElementById("jsFeedback").value,
    aiTools: document.getElementById("aiToolsFeedback")?.value, // optional
    comments: document.getElementById("comments").value,
  };

  console.log("Feedback Submitted:", feedbackData);
  localStorage.setItem("projectFeedback", JSON.stringify(feedbackData));

  form.reset();
  thankYouMessage.classList.remove("hidden");
  thankYouMessage.scrollIntoView({ behavior: "smooth" });
});

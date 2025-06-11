const projects = [
    {
        name: "โปรเจกต์เว็บไซต์",
        description: "หน้าเว็บ HTML/CSS",
        image: "img/01profile.png",
        category: "web",
    },

    {
        name: "แอปมือถือ",
        description: "แอป ",
        image: "img/02band.png",
        category: "app",
    },

    {
        name: "เว็ปอาหาร",
        description: "หน้าเว็บอาหาร",
        image: "img/03food.png",
        category: "web",
    },

    {
        name: "โปสเตอร์",
        description: "ออกแบบ design โปสเตอร์",
        image: "img/04.png",
        category: "design",
    },

];

// สร้างการ์ดแสดงโปรเจกต์ 
const container = document.getElementById("project-container");

projects.forEach(project => {
    const card = document.createElement("div");
    card.className = "card";
    card.innerHTML = `
        <img src="${project.image}" alt="${project.name}">
        <div class="card-content">
            <h3>${project.name}</h3>
            <p>${project.description}</p>
            <button class="view-btn"
                data-name="${project.name}"
                data-image="${project.image}"
                data-description="${project.description}">
                ดูโปรเจกต์
            </button>
        </div>
    `;
    container.appendChild(card);

});

// 🔹 Modal
const modal = document.getElementById("modal");
const modalImg = document.getElementById("modal-img");
const modalTitle = document.getElementById("modal-title");
const modalDescription = document.getElementById("modal-description");
const modalClose = document.getElementById("modal-close");

// เปิด modal จากปุ่มในแต่ละการ์ด
container.addEventListener("click", (e) => {
    if (e.target.classList.contains("view-btn")) {
        const btn = e.target;
        modalTitle.textContent = btn.dataset.name;
        modalImg.src = btn.dataset.image;
        modalDescription.textContent = btn.dataset.description;
        modal.classList.remove("hidden");
    };
});
// ปิด modal เมื่อกด ❌
modalClose.addEventListener("click", () => {
    modal.classList.add("hidden");
});

const toggleBtn = document.getElementById("toggle-mode");

toggleBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");

    // เปลี่ยนข้อความบนปุ่มตามโหมด
    if (document.body.classList.contains("dark-mode")) {
        toggleBtn.textContent = "☀️ กลับโหมดสว่าง";
    } else {
        toggleBtn.textContent = "🌙 โหมดกลางคืน";
    };
});
fetch('xml/testest.xml')
  .then(response => response.text())
  .then(data => {
    const parser = new DOMParser();
    const xmlDoc = parser.parseFromString(data, "text/xml");
    const projects = xmlDoc.querySelectorAll('project');
    const cardSlider = document.getElementById('cardSlider');

    projects.forEach(project => {
        const title = project.querySelector('title').textContent;
        const desc = project.querySelector('description').textContent;
        const img = project.querySelector('image').textContent;

        const card = document.createElement('div');
        card.className = 'card';
        card.innerHTML = `
            <img src="images/${img}" alt="${title} Project">
            <div class="card-content">
                <h3>${title}</h3>
                <p>${desc}</p>
            </div>
        `;
        cardSlider.appendChild(card);
    });
})


// Image Slider
let slideIndex = 0;
const slides = document.querySelectorAll('.slider .slides img');

function moveSlide(n) {
    slideIndex = (slideIndex + n + slides.length) % slides.length;
    document.querySelector('.slider .slides').style.transform = 
        `translateX(-${slideIndex * 100}%)`;
}

// Auto slideshow 
let slideInterval = setInterval(() => moveSlide(1), 5000);

window.addEventListener('beforeunload', () => {
    clearInterval(slideInterval);
});

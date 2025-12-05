import { techIcons, projectsList } from "./data.js"

document.getElementById("menu-icon").addEventListener ("click", () => {
    if(document.getElementById("navbar-links").style.display === "block") {
        document.getElementById("navbar-links").style.display = "none"
    } else {
        document.getElementById("navbar-links").style.display = "block"
    }
    console.log("click")
})

const projects = document.getElementById("projects")

function render() {
    let projectFeed = ""
    projectsList.forEach(function(project) {
        projectFeed +=
            `<div class="project" data-project="${project.id}">
                <img class="screenshot" src="${project.screenshot}" alt="${project.name}"/>
                <div class="project-content">
                    <h3 class="project-title">${project.name}</h3>
                    <div class="tech-icons">${(project.tech).map(icon => techIcons[icon]).join(" ")}</div>
                    <div class="tags">${(project.tags).map(tag => `<span class="tag">${tag}</span>`).join(" ")}</div>                   
                </div>
            </div>`
    })
    projects.innerHTML = projectFeed + `
        <div class="modal-background"></div>
        <div class="modal" id="modal">
            <div class="modal-drag-handle" aria-label="Close modal"></div>
            <div class="close-modal-btn-container">
                <button class="modal-close-btn"><i class="fa-solid fa-xmark fa-sm modal-close-btn"></i></button>
            </div>
            <div class="project-modal">
                <a class="project-url" href="" target="_blank" rel="noopener noreferrer"><img class="screenshot" src="" alt=""/></a>
                <h3><a class="project-url project-title" href="" target="_blank" rel="noopener noreferrer"></a></h3>
                <p class="description"></p> 
                <div class="links">
                    <a class="project-repo" href="" target="_blank" rel="noopener noreferrer">${techIcons.github}GitHub</a>
                    <a class="project-url" href="" target="_blank" rel="noopener noreferrer"><img class="netlify" src="images/Netlify_logo.svg"/>Live Demo</a>
                </div>
                <div class="tech-icons"></div>
                <div class="tags"></div>                   
            </div>
        </div>`
}

render()

const modal = document.getElementById("modal")

projects.addEventListener("click", function(e) {
    const projectCard = e.target.closest(".project")
    if (projectCard) {
        const projectId = projectCard.dataset.project
        fillModal(projectId)
        document.querySelector(".modal-background").classList.add("active")
        document.querySelector(".modal").classList.add("active")
        document.body.style.overflow = "hidden"
    }
})

function fillModal(id) {
    const project = projectsList.find(project => project.id === id)
    modal.querySelectorAll(".project-url").forEach (link => link.href = project.url)
    modal.querySelector(".screenshot").src = project.screenshot
    modal.querySelector(".project-title").textContent = project.name
    modal.querySelector(".description").textContent = project.blurb
    modal.querySelector(".project-repo").href = project.repo
    modal.querySelector(".tech-icons").innerHTML = (project.tech).map(icon => techIcons[icon]).join(" ")
    modal.querySelector(".tags").innerHTML = (project.tags).map(tag => `<span class="tag">${tag}</span>`).join(" ")
}

document.querySelector(".modal-drag-handle").addEventListener("click", closeModal);
document.querySelector(".modal-close-btn").addEventListener("click", closeModal);
document.querySelector(".modal-background").addEventListener("click", closeModal);

function closeModal() {
    document.querySelector(".modal-background").classList.remove("active")
    document.querySelector(".modal").classList.remove("active")
    document.body.style.overflow = "auto"
}
import { techIcons, projectsList } from "./data.js"

const projects = document.getElementById("projects")

function render() {

    let projectFeed = ""
    projectsList.forEach(function(project) {
        
        let iconList = ""
        project.tech.forEach(function(icon) {
            iconList += techIcons[icon]
        })

        let tagList = ""
        project.tags.forEach(function(tag) {
            tagList += `<span class="tag">${tag}</span>`
        })

        projectFeed += 
            `<div class="project" id="${project.id}">
                <img class="screenshot" src="${project.screenshot}" alt="${project.name}"/>
                <div class="project-content">
                    <h3 class="project-title">${project.name}</h3>
                    <div class="tech-icons">${iconList}</div>
                    <div class="tags">${tagList}</div>                   
                </div>
            </div>

            <div class="modal-background" id="modal-${project.id}">
                <div class="modal-container">
                    <div class="close-modal-btn-container">
                        <button class="modal-close-btn"><i class="fa-regular fa-circle-xmark modal-close-btn"></i></button>
                    </div>
                    <div class="project-modal">
                        <a href="${project.url}" target="_blank" rel="noopener noreferrer"><img class="screenshot" src="${project.screenshot}" alt="${project.name}"/></a>
                        <h3 class="project-title"><a href="${project.url}" target="_blank" rel="noopener noreferrer">${project.name}</a></h3>
                        <p>${project.blurb}</p> 
                        <div class="links">
                            <a href="${project.repo}" target="_blank" rel="noopener noreferrer">${techIcons.github}GitHub</a>
                            <a href="${project.url}" target="_blank" rel="noopener noreferrer"><img class="netlify" src="images/Netlify_logo.svg"/>Live Demo</a>
                        </div>
                        <div class="tech-icons">${iconList}</div>
                        <div class="tags">${tagList}</div>                   
                    </div>
                </div>
            </div>`
    })
    projects.innerHTML = projectFeed
}

render()

projects.addEventListener("click", function(e) {
    const projectCard = e.target.closest(".project")
    if (projectCard) {
        const modal = document.getElementById(`modal-${projectCard.id}`)
        modal.style.display = "block"
    }
})

document.addEventListener("click", function(e) {
    if (e.target.classList.contains("modal-close-btn")) {
        const modal = e.target.closest(".modal-background")
        modal.style.display = "none"
    }
})
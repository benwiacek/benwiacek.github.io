import { techIcons, projectsList } from "./data.js"

function render() {
    const projects = document.getElementById("projects")

    let projectFeed = ""
    projectsList.forEach(function(project) {
        
        let iconList = ""
        project.tech.forEach(function(icon) {
            iconList += techIcons[icon]
        })

        projectFeed += 
            `<div class="project">
                <a href="${project.url}" target="_blank" rel="noopener noreferrer"><img class="screenshot" src="${project.screenshot}" alt="${project.name}"/></a>
                <div class="project-content">
                    <h3>${project.name}</h3>
                    <p>${project.blurb}</p> 
                    <div class="links">
                        <a href="${project.repo}" target="_blank" rel="noopener noreferrer">${techIcons.github}GitHub</a>
                        <a href="${project.url}" target="_blank" rel="noopener noreferrer"><img class="netlify" src="images/Netlify_logo.svg"/>Live Demo</a>
                    </div>
                    <p class="tech">Built with: ${iconList}</p>                     
                </div>
            </div>`
    })
    projects.innerHTML = projectFeed
}

render()
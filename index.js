import { techIcons, projectsList } from "./data.js"

function render() {
    const projects = document.getElementById("projects")

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
            `<div class="project">
                <a href="${project.url}" target="_blank" rel="noopener noreferrer"><img class="screenshot" src="${project.screenshot}" alt="${project.name}"/></a>
                <div class="project-content">
                    <h3>${project.name}</h3>
                    <p>${project.blurb}</p> 
                    <div class="links">
                        <a href="${project.repo}" target="_blank" rel="noopener noreferrer">${techIcons.github}GitHub</a>
                        <a href="${project.url}" target="_blank" rel="noopener noreferrer"><img class="netlify" src="images/Netlify_logo.svg"/>Live Demo</a>
                    </div>
                    <div class="tech">${iconList}</div>
                    <div class="tags">${tagList}</div>                   
                </div>
            </div>`
    })
    projects.innerHTML = projectFeed
}

render()
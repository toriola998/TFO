import portfolioData from "./data/portfolio.js";

export default function portfolio() {
    const portfolioWrap = document.querySelector('.grid-container')
    let html = '';
    portfolioData.forEach( (item) => {
        
        html += 
        `<div>
            <div class="${item.backgroundClass} colored-bg">
                <img src="./assets/projects/${item.coverImage}" alt="${item.name}" role="presentation" class="cover-img"/>
            </div>
            <h3 class="project-name">${item.name}</h3>
            <p class="project-info">${item.description}</p>
            <div class="flex-links">
            <a class="project-link" 
                href="${item.projectLink}" 
                target="_blank"
                aria-label="${item.linkLabel}">
                Live Site Url
            </a>
           
            <a href="${item.linkToCode}" 
                target="_blank" 
                aria-label="Github link to ${item.name}"
                >
                <img src="./assets/github-mark-white.png" alt="" role="presentation" height="25" width="25"/>
            </a>
            </div>
            <p class="stack">
                ${item.projectStack.map((technology) => `<span>${technology}</span>`).join("")}
            </p>
            </p>
        </div>`

        portfolioWrap.innerHTML = html
    })
}

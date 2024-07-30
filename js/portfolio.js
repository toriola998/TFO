import portfolioData from './data/portfolio.js';

document.addEventListener('DOMContentLoaded', () => {
    const demoBtns = document.querySelectorAll('.myButton');
    const demoNotes = document.querySelectorAll('.demo-note');

    demoBtns.forEach((demoBtn, index) => {
        const demoNote = demoNotes[index];

        demoBtn.addEventListener('click', () => {
            console.log('cliked');
            demoNote.classList.toggle('show-wrap');
        });

        // Add hover event listeners
        demoBtn.addEventListener('mouseover', () => {
            console.log('cliked');
            demoNote.classList.add('show-wrap');
        });
        demoBtn.addEventListener('mouseout', () => {
            demoNote.classList.remove('show-wrap');
        });
    });

    // const demoBtn = document.querySelector('.myButton');

    // // Initialize tippy.js on the button
    // tippy(demoBtn, {
    //     content: 'You can watch the demo to explore the features of the entire application without the need to authenticate.',
    //     placement: 'bottom', // You can change this to 'top', 'bottom', 'left', etc.
    // });
});

export default function portfolio() {
    const portfolioWrap = document.querySelector('.grid-container');
    let html = '';
    portfolioData.forEach((item) => {
        html += `<div>
            <div class="${item.backgroundClass} colored-bg">
                <img src="./assets/projects/${item.coverImage}" alt="${item.name}" role="presentation" class="cover-img"/>
            </div>
            <h3 class="project-name">${item.name}</h3>
            <p class="project-info">${item.description}</p>
            <div class="flex-links">
            ${
                item.projectLink
                    ? `<a class="project-link" 
                href="${item.projectLink}" 
                target="_blank"
                aria-label="${item.linkLabel}">
                Live Site Url
            </a>`
                    : ''
            }
               
            ${
                item.linkToCode // Check if linkToCode is available <img src="./assets/github-mark-white.png" alt="" role="presentation" height="25" width="25"/>
                    ? `<a href="${item.linkToCode}" 
                    target="_blank" 
                    aria-label="Github link to ${item.name}"
                    class="project-link">
                    Code
                </a>`
                    : '' // Empty string if linkToCode is not available
            }
                 ${
                     item.demoLink
                         ? `<div class="flex demo-wrap">
                              <a 
                                 class="project-link" 
                                 href="${item.demoLink}"
                                 target="_blank"
                              > Demo
                              </a> 
                              <button class="myButton"> 
                                 <img src="./assets/icons/info.png" width="20" alt="" /> 
                             
                              <div class="demo-note">
                              ${item.demoDescription ? item.demoDescription : ''}
                              </div>
                               </button> 
                              
                           </div>`
                         : ''
                 }
            </div>
            <p class="stack">
                ${item.projectStack.map((technology) => `<span>${technology}</span>`).join('')}
            </p>
            
        </div>`;

        portfolioWrap.innerHTML = html;
    });
}

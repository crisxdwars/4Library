const screen = document.querySelector('.root');   
const title = "";
let icon = 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1d/Google_Gemini_icon_2025.svg/500px-Google_Gemini_icon_2025.svg.png' 


let home = [`
    <div class="center-left">
        <button>Dashboard</button>
        <button>Community</button>
        <button></button>
        <button>About</button>
        <button></button>
    </div>
    <div class="center-right">

    </div>
`];

let footer = [
    
    `<div class="footer">
        <button class="footer-button">YEAHEYAH</button>
    </div>`

];


function render() {
    screen.innerHTML = 
    `
    <div class="header">
        <div class="header-left">
            <img src="${icon}">
            <p class="">${title}</p>
        </div>
        <div class="header-right">
        
        </div>
    </div>
    <div class="center">${home}</div>    
    `;
}




render();
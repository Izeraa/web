/* ---------------------------     Body  ------------------------------ */
document.body.insertAdjacentHTML('beforeend', `
    <nav>
        <div class="mobile-menu">
            <div class="line1"></div>
            <div class="line2"></div>
            <div class="line3"></div>
        </div>
        <a class="logo" href="/"> 🐼 TASK </a>
        <ul class="nav-list">
            <li> <a href="#">Início</a></li>
            <li> <a href="#">Sobre</a></li>
            <li> <a href="#">Projetos</a></li>
            <li> <a href="#">Contato</a></li>
        </ul>
    </nav>
`);

/* ---------------------------     CSS ------------------------------ */
var style = document.createElement('style');
style.textContent = `
/* - - - - - - - - < 🐶 > : ALL   - - - -- - - -   */
* { margin: 0;  padding: 0; }  
a { color: #fff; text-decoration: none; transition: 0.3s;}  
a:hover { opacity: 0.7;}
/* - - - - - - - - < /🐶 > : ALL   - - - -- - - -   */


/* - - - - - - - - <🐶> : NOTBOOK BAR   - - - -- - - - */

    @media ( min-width: 901px ) {
        
        /* - - - <🐶> : Basicos   - - - */ 
            .logo { font-size: 24px; text-transform: uppercase; letter-spacing: 4px;}
            nav { display: flex;  justify-content: space-around; align-items: center; font-family: system-ui, -apple-system, Helvetica, Arial, sans-serif; background: #23232e; height: 8vh; }
        /* - - - <🐶> : Basicos   - - - */
        
        .nav-list { list-style: none; display: flex; }
        .nav-list li { letter-spacing: 3px; margin-left: 32px; }

        /* - - - <🐶> : Other Items   - - - */ 
            section {
                /* flex-flow: column wrap; */
                /* flex-direction: column ; */
                /* align-items: flex-start; */
                gap: 10px;
                BACKGROUND-COLOR: BLUEVIOLET;
                width: 30%;
                max-height: 400px;
                /* max-height: 60%;*/
                border-radius: 20px;
                display: inline-block;
                text-align: center; /* alinha o texto*/
                overflow: hidden; 
                overflow-y: scroll;
            }
        /* - - - </🐶> : Other Items   - - - */

    }

/* - - - - - - - - </🐶> : NOTBOOK BAR  - - - -- - - - */
  

/* - - - - - - - - < 🐶 > : Celular   - - - -- - - -   */
    
    @media ( min-width: 901px ) {
        /* menu bolinha  */
        .mobile-menu { display: none;  }  /* Desativa o Mobile Menu  */

    }

    @media (max-width: 900px) {
        .mobile-menu { display: none;  }  /* Desativa o Mobile Menu  */
        /* - - - <🐶> : Basicos   - - - */ 
            .logo { font-size: 24px; text-transform: uppercase; letter-spacing: 4px;}
            nav { 
                display: flex;  justify-content: space-around; align-items: center; 
                font-family: system-ui, -apple-system, Helvetica, Arial, sans-serif; 
                background: #23232e; height: 8vh; 
            }
        /* - - - <🐶> : Basicos   - - - */

        /* <🐼> MENU BOLINHA  */
            .nav-list.active { transform: translateX(0); }
            /* chegada do menu 0 e 50  da direita  para esquerda */
            @keyframes navLinkFade { from { opacity: 0; transform: translateX(0px); } to { opacity: 1; transform: translateX(0); } }
             
            .mobile-menu div { 
                width: 32px; 
                height: 2px; 
                background: #fff; 
                margin: 8px; 
                transition: 0.3s; 
            }
            .nav-list { list-style: none; display: flex; }
            .nav-list li { letter-spacing: 3px; margin-right: 32px; }
            /* Transforma num X */
                .mobile-menu.active .line1 { transform: rotate(-45deg) translate(-8px, 8px); }
                .mobile-menu.active .line2 { opacity: 0;}
                .mobile-menu.active .line3 { transform: rotate(45deg) translate(-5px, -7px);}
            /* Transforma Num X */    
            .mobile-menu { cursor: pointer; }  
            
            
        /* </🐼> MENU BOLINHA  */
        
        
        body { overflow-x: hidden; }
        .nav-list { 
            position: absolute; 
            top: 8vh; 
            left: 0; /* Posição na Barra */
            width: 50vw; 
            height: 92vh; 
            background: #23232e; 
            flex-direction: column; 
            align-items: center; 
            justify-content: space-around;  /* espaço entre space-around   */
            transform: translateX(-300%); 
            transition: transform 0.3s ease-in; 
        }
        .nav-list li { margin-left: 0; opacity: 0; } 
        .mobile-menu { display: block; }


        /* - - - < 🐶> : Other Items   - - - */ 
            section {
                flex-direction: row ;
                /* align-items: flex-start; */
                BACKGROUND-COLOR: BLUEVIOLET;
                gap: 10px;
                width: 100%;
                max-height: 400px;
                /* max-height: 60%;*/
                border-radius: 20px;
                flex-direction: column;
                text-align: center; /* alinha o texto*/
                overflow: hidden; 
                overflow-y: scroll;

            }
        /* - - - </🐶> : Other Items   - - - */

    }
/* - - - - - - - - < 🐶 > : Celular   - - - -- - - -   */

/* - - - - - - - - <🐶> : Style PAG   - - - -- - - -   */
    main {
    
        background-color: rgb(0, 0, 0);
        /* background: url(""); */
        /* background-repeat:repeat url("") ; */
        background-size: cover ; 
        height: 100%;

    }
/* - - - - - - - - </🐶> : Style PAG  - - - -- - - -   */ 

`;

document.head.appendChild(style);

/* ---------------------------     JavaScript ------------------------------ */
class MobileNavbar {
    constructor(mobileMenu, navList, navLinks) {
        this.mobileMenu = document.querySelector(mobileMenu);
        this.navList = document.querySelector(navList);
        this.navLinks = document.querySelectorAll(navLinks);
        this.activeClass = "active";
        this.handleClick = this.handleClick.bind(this);
    }

    animateLinks() {
        this.navLinks.forEach((link, index) => {
            link.style.animation ? (link.style.animation = "") : (link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`);
        });
    }

    handleClick() {
        this.navList.classList.toggle(this.activeClass);
        this.mobileMenu.classList.toggle(this.activeClass);
        this.animateLinks();
    }

    addClickEvent() {
        this.mobileMenu.addEventListener("click", this.handleClick);
    }

    init() {
        if (this.mobileMenu) {
            this.addClickEvent();
        }
        return this;
    }
}

const mobileNavbar = new MobileNavbar(
    ".mobile-menu",
    ".nav-list",
    ".nav-list li"
);
mobileNavbar.init();
/*







document.createElement("");

let nav1 = document.createElement(`<nav>`);
let nav2 = document.createElement("nav");

document.createElement("");

function adcElemento() {
    // cria um novo elemento div
    // e dá à ele conteúdo
    var divNova = document.createElement("div");
    var conteudoNovo = document.createTextNode("Olá, cumprimentos!");
    divNova.appendChild(conteudoNovo); //adiciona o nó de texto à nova div criada
  
    // adiciona o novo elemento criado e seu conteúdo ao DOM
    var divAtual = document.getElementById("div1");
    document.body.insertBefore(divNova, divAtual);
}
*/  
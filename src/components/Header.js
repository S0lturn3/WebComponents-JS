class Header extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = `
            <style>
                .nav-header {
                    width: 100%;
                    max-height: 64px;

                    display: flex;
                    align-items: center;
                    justify-content: space-evenly;

                    background-color: rgba(255, 255, 255, .1);
                }
                .nav-header > div.buttons-container > ul.buttons-list {
                    display: flex;
                    flex-direction: row;
                    align-items: center;
                    list-style-type: none;
                }
                div.buttons-container > ul.buttons-list > li.button-item {
                    margin: 0px .5rem;
                    font-size: .75rem;
                    transition: all .5s ease-in-out;
                }
                div.buttons-container > ul.buttons-list > li.button-item:first-child {
                    margin-left: 0;
                }
                div.buttons-container > ul.buttons-list > li.button-item:last-child {
                    margin-right: 0;
                }
                div.buttons-container > ul.buttons-list > li.button-item:hover {
                    transform: translate(-1px, -1px);
                    text-shadow: 1px 1px 15px #fff;
                }
            </style>

            <nav class="nav-header">
                <div class="logo-container">
                    <img src="https://images.ctfassets.net/4cd45et68cgf/7LrExJ6PAj6MSIPkDyCO86/542b1dfabbf3959908f69be546879952/Netflix-Brand-Logo.png?w=684&h=456" alt="logo-site" height="64px">
                </div>
                <div class="buttons-container">
                    <ul class="buttons-list">
                        <li class="button-item glow"><a href="../../index.html"> INÍCIO </a></li>
                        <li class="button-item glow"><a href="#"> PROJETOS </a></li>
                        <li class="button-item glow"><a href="#"> CONTATO </a></li>
                    </ul>
                </div>
            </nav>
        `;
    }
}

customElements.define('header-component', Header)
class CardNews extends HTMLElement {
    constructor() {
        super();

        const shadow = this.attachShadow({mode: "open" });
        shadow.innerHTML = "<h1>Hello World</h1>";
    }

    build() {}

    styles() {}
}

customElements.define("card-news", CardNews);
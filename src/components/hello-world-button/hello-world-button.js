import "./hello-world-button.css";

export class HelloWorldButton {

    buttonCssClass = "hello-world-button";

    render() {
        const button = document.createElement("button");
        const body = document.querySelector("body");
        button.innerHTML = "Hello world";
        // const body = document.body;
        button.onclick = function () {
            const paragraph = document.createElement("p");
            paragraph.innerHTML = "Hello world";
            paragraph.classList.add("hello-world-paragraph");
            body.appendChild(paragraph);
        }
        button.classList.add(this.buttonCssClass);
        body.appendChild(button);
    }

}

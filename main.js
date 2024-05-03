const button = document.querySelector("button");
const container = document.querySelector(".container");
const input = document.querySelector("input");
const form = document.querySelector("form");


form.addEventListener("submit", (eo) => {
    eo.preventDefault();

    const task = `
        <div class="task">
            <span class="icon-star"> </span>
            <p lang="ar" class="task-text"> ${input.value} </p>
            <div>
                <span class="icon-trash"> </span>
    
                <span class="icon-angry2"> </span>
            </div>
        </div>
        `;


    container.innerHTML += task;
    input.value = ""
});

container.addEventListener("click", (eo) => {

    switch (eo.target.className) {
        case "icon-trash":
            eo.target.parentElement.parentElement.remove()
            break;
        case  "icon-angry2":
            eo.target.classList.add("dn")
            const heart = `<span class="icon-heart"> </span>`

            eo.target.parentElement.parentElement
                .getElementsByClassName("task-text")[0]

                .classList.add("finsh")

            eo.target.parentElement.innerHTML += heart
            break;
        case "icon-heart":
            eo.target.parentElement.parentElement
                .getElementsByClassName("task-text")[0]
                .classList.remove("finsh")
            eo.target.classList.add("dn")
            const angry = `<span class="icon-angry2"> </span>`
            eo.target.parentElement.innerHTML += angry
            break;
        case "icon-star":
            eo.target.classList.add("orange")
            container.prepend(eo.target.parentElement)
            break;
        case "icon-star orange":
            eo.target.classList.remove("orange")
            container.append(eo.target.parentElement)
            break;
    }

});

const ul = document.querySelector(".list")
const liEl = document.querySelectorAll(".item");
liEl.forEach(item => {
    item.addEventListener('click' , () => {
        liEl.forEach(e => {
            e.classList.remove("second-style")
        });
        item.classList.add("second-style")
    })
});
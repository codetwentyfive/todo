export function activeSwitcher() {

    const activeSwitch = document.querySelectorAll(".activeSwitch");

    activeSwitch.forEach(item => {
        item.addEventListener("click", () => {
            //Remove active class from items
            activeSwitch.forEach(item => {
                item.classList.remove("active");
            });

            //Add "acitve class to clicked item"
            item.classList.add("active");
        })

    })
}
async function fetchData() {
    return fetch("https://api.github.com/search/users?q=octocat", {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            Accept: "application/vnd.github.v3+json"
        }
    })
        .then(res => res.json())
}
function filterData(login) {
    fetchData().then((data) => {
        // console.log(data);
        data.items.map(item => {
            if (item.login === login) {
                return item;
            }
        })

    })
}
// filterData("marimeireles");
// filterData("morehwachege");

document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("github-form");
    const search = document.getElementById("search");
    let searchValue = search.value;
    const user = document.getElementById("user-list");

    form.addEventListener("submit", (event) => {
        event.preventDefault();
        let li = document.createElement("li");
        li.innerHTML = `Name ${filterData(searchValue)}`;
        user.appendChild(li);



        form.reset();
    })
})
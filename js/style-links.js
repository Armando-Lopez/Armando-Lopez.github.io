window.addEventListener('load', () => {
    styleLinks(window.location.hash.split('#'))
})

window.addEventListener('hashchange', (ev) => {
    styleLinks(ev.target.document.location.hash.split('#'))
})

function styleLinks(hashes) {
    var link;

    const nav_links = document.querySelectorAll('.nav-link')

    nav_links.forEach(link => {
        link.classList.remove("active-link")
    });

    for (const hash of hashes) {

        link = document.getElementById(`${hash}-link`);

        if (link) {
            link.classList.add("active-link");
            break;
        }

    }
}
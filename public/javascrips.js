document.addEventListener('DOMContentLoaded', function() {
    const url = this.documentURI;
    const links = document.querySelectorAll('.onClickActive');

    links.forEach(function(link) {
        if (link.href === url) {
            link.classList.add('active')
        }
    })
})
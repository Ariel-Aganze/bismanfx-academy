document.addEventListener("DOMContentLoaded", () => {
    const loadComponent = (id, url) => {
        const element = document.getElementById(id);
        if (element) {
            fetch(url)
                .then(response => {
                    if (!response.ok) throw new Error(`Network response was not ok: ${url}`);
                    return response.text();
                })
                .then(data => {
                    element.innerHTML = data;
                    if(id === 'header' && window.initMobileMenu) {
                        window.initMobileMenu();
                    }
                })
                .catch(error => console.error('Error loading component:', error));
        }
    };

    loadComponent('header', 'components/header.html');
    loadComponent('footer', 'components/footer.html');
});
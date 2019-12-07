window.onscroll = function() {
    const scroll = window.pageYOffset;
    const searchInput = document.getElementsByClassName('search-input-wrapper')[0];
    if(document.documentElement.clientWidth <= 320 && scroll > 16) {
        searchInput.style.paddingLeft = '74px';
    }
    else {
        searchInput.style.paddingLeft = '20px';
    }

    if(document.documentElement.clientWidth <= 768 && scroll > 20) {
        searchInput.style.paddingLeft = '68px';
    } 
    else {
        searchInput.style.paddingLeft = '26px';
    }

    if (document.documentElement.clientWidth > 768) {
        searchInput.style.paddingLeft = '60px';
    }
};
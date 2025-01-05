window.onscroll = () => {
    let header =document.querySelector('head')
    
    header.classList.toggle('sticky', window.scrollY > 100);

}
const btns = document.querySelectorAll('.tab-btn'); // we grabbed all the 3 buttons
const about = document.querySelector('.about'); //this variable allows us to click on a lot of elements
const articles = document.querySelectorAll('.content'); //this allows us to change each of the contents divs that is currently active if we click on a different one

about.addEventListener('click', function(e) { //the parent container click event allows you to click on a lot of elements
    //console.log(e.target.dataset.id); 
    const id = e.target.dataset.id; //we do this right here to just target the three 3 buttons
    if(id) { // if id exists we do the following
        //remove active from other buttons
        btns.forEach(function(btn) {
            btn.classList.remove("active");
            e.target.classList.add('active');
        })
        //hide other articles
        articles.forEach(function(article) {
            article.classList.remove('active');
        })
        const element = document.getElementById(id);
        element.classList.add('active');
    }
})
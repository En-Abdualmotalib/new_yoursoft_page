
/*----  to toggle the button of navbar  -----*/
function toggleLinks() {
    const links = document.getElementById('links');
    if (links.style.display === 'block') {
        links.style.display = 'none';
    } else {
        links.style.display = 'block';
    }
}

/*----  end toggle the button of navbar  -----*/


/*----  Add opacity to navbar  -----*/

const navbar=document.getElementById('navbar');
        window.addEventListener('scroll', () => {
           const scrollY=window.scrollY;
           if(scrollY>0){
           navbar.style.backgroundColor='rgba(31, 38, 228,0.5)';
           navbar.style.height='80px'; 
        }
           else{
            navbar.style.backgroundColor='rgba(31, 38, 228,0.9)';
           }
        });
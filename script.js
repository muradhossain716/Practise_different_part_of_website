 var typed = new Typed(".typing", {
            strings: ["Developer", "Software Engineer", "Quick Learner"],
            typeSpeed: 100,
            backSpeed: 60,
            loop: true
        });
 const section1=document.querySelector('.section1');
 console.log(section1);
 const cookie=document.createElement('div');
 console.log(section1,cookie)
 cookie.innerHTML='This is a cookie message <button class="btn">Got It!</button>';
 cookie.classList.add('cookie-message');
section1.append(cookie);
// section1.insertAdjacentHTML('beforebegin',cookie); not work
document.querySelector('.btn').addEventListener('click',function(){
    cookie.remove();
});
//  section1.remove()


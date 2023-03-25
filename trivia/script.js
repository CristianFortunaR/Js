var elements = document.querySelectorAll('[type="radio"]');

for(var i = 0; i < elements.length; i++){
    elements[i].addEventListener('change', (e)=>{
        let selected = e.target.value;
        if(selected == "correct"){
            let parentNode = e.target.parentNode;
            parentNode.style.backgroundColor = "green";

            let els = parentNode.parentNode.querySelectorAll('[type=radio]');

            for(var n = 0; n < els.length; n++){
                els[n].disabled = true;
            }
        }else if(selected == "incorrect"){
            let parentNode = e.target.parentNode;
            parentNode.style.backgroundColor = "red";

            let els = parentNode.parentNode.querySelectorAll('[type=radio]');

            for(var n = 0; n < els.length; n++){
                els[n].disabled = true;
            }

            let correct = parentNode.parentNode.querySelector('[value=correct]')
            correct.parentNode.style.backgroundColor = 'green'
        }
    });
}
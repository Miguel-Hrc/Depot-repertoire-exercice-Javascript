let btn = document.querySelector('button');
btn.addEventListener('click', function (e) {
    var Input_1 = document.getElementById('first-name');
    var Input_2 = document.getElementById('last-name');
    var Input_3 = document.getElementById('message');

    if (Input_1.value == "" ) {
        let Error = document.getElementById('error-message');
        e.preventDefault();
         Error.style.display = "";
    }
    if (Input_2.value == "" ){
        let Error = document.getElementById('error-message');
        e.preventDefault();
         Error.style.display = "";
    }

    if (Input_3.value == "" ){
        let Error = document.getElementById('error-message');
        e.preventDefault();
         Error.style.display = "";
    }

  });

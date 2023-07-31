let btn = document.querySelector('button');
btn.addEventListener('click', function (e) {
    var Input_1 = document.getElementById('first-name');

    if (Input_1.value == "" ) {
        let Error = document.getElementById('error-message');
        e.preventDefault();
         Error.style.display = "";
    }
  });

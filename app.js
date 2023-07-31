5let btn = document.querySelector('button');
btn.addEventListener('click', function (e) {
    var Input_1 = document.getElementById('first-name');
    var Input_2 = document.getElementById('last-name');
    var Input_3 = document.getElementById('message');

    if (Input_1.value == "" ) {
        let Error = document.getElementById('error-message');
        e.preventDefault();
         Error.style.display = "";
    }

    if (Input_2.value == "" ) {
        let Error = document.getElementById('error-message');
        e.preventDefault();
         Error.style.display = "";
    }

    if (Input_3.value == "" ) {
        let Error = document.getElementById('error-message');
        e.preventDefault();
         Error.style.display = "";
    }

    else if (Input_1.value && Input_2.value && Input_3.value != "" ) {
        let Error = document.getElementById('error-message');
        e.preventDefault();
        Error.style.display = "none"; 

        let comment_list = document.getElementById("comment-list");
        
        var div1 = document.getElementById("block_commentaire");
        var div1Clone = div1.cloneNode(false);
        
        
        var div2 = document.getElementById("block_Titre");
        var div2Clone = div2.cloneNode(false);

        var titre = document.getElementById("Nom_Prenom");
        var Clone = titre.cloneNode(false);
        
        var div3 = document.getElementById("commentaire");
        var div3Clone = div3.cloneNode(false);
          
        let titreTexte = document.createTextNode(Input_1.value + " ");
        let titreTexte2 = document.createTextNode(Input_2.value);          
        let commentaireTexte = document.createTextNode(Input_3.value);                   

    Clone.appendChild(titreTexte);
    Clone.appendChild(titreTexte2);
    div2Clone.appendChild(Clone);
    div1Clone.appendChild(div2Clone);
    comment_list.appendChild(div1Clone);
    div2Clone.appendChild(div3Clone);
    div3Clone.appendChild(commentaireTexte);

    div1Clone.style.display = "";  
}
});
btn.addEventListener('click',function resetFields(){
  document.getElementById('first-name').value="";
  document.getElementById('last-name').value="";
  document.getElementById('message').value="";
});

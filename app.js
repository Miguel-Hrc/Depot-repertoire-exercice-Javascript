let btn = document.querySelector('button');
btn.addEventListener('click', function (e) {
    e.preventDefault();
    var Input_prenom = document.getElementById('first-name');
    var Input_nom = document.getElementById('last-name');
    var Input_commentaire = document.getElementById('message');

    if (Input_prenom.value == "" || Input_nom.value == "" || Input_commentaire.value == "" ) {
        let Error = document.getElementById('error-message');
         Error.style.display = "";
    }

    else if (Input_prenom.value && Input_nom.value && Input_commentaire.value !="" ) {
        let Error = document.getElementById('error-message');
        Error.style.display = "none"; 

        let comment_list = document.getElementById("comment-list");
        
        var block_commentaire = document.getElementById("block_commentaire");
        var block_commentaireClone = block_commentaire.cloneNode(false);
        
        
        var block_titre = document.getElementById("block_titre");
        var block_titreClone = block_titre.cloneNode(false);

        var nom_prenom = document.getElementById("nom_prenom");
        var nom_prenomClone = nom_prenom.cloneNode(false);
        
        var commentaire = document.getElementById("commentaire");
        var commentaireClone = commentaire.cloneNode(false);
          
        let nom = document.createTextNode(Input_prenom.value + " ");
        let prenom = document.createTextNode(Input_nom.value);          
        let commentaireTexte = document.createTextNode(Input_commentaire.value);                   

    nom_prenomClone.appendChild(nom);

    nom_prenomClone.appendChild(prenom);

    block_titreClone.appendChild(nom_prenomClone);

    block_commentaireClone.appendChild(block_titreClone);

    comment_list.appendChild(block_commentaireClone);

    block_titreClone.appendChild(commentaireClone);

    commentaireClone.appendChild(commentaireTexte);

    block_commentaireClone.style.display = "";  

}
});

btn.addEventListener('click',function resetFields(e){
    var Input_prenom = document.getElementById('first-name');
    var Input_nom = document.getElementById('last-name');
    var Input_commentaire = document.getElementById('message');
    if (Input_prenom.value && Input_nom.value && Input_commentaire.value !="" ){
  document.getElementById('first-name').value="";
  document.getElementById('last-name').value="";
  document.getElementById('message').value="";
}
});

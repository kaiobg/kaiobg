var v = document.getElementsByClassName('myVideo');
        function classToggle(id) {
            v[id].classList.toggle('hide');
            v[id].classList.toggle('active');
        }

        function closeOtherVideo(id) {
            var c = document.getElementsByClassName('myVideo');
            for(var i=0; i<c.length; i++){
                if(i != id) {
                    v[i].pause();
                    c[i].classList.remove('active')
                    c[i].classList.add('hide')
                }
            }
        }

    document.getElementById('toVideo1').addEventListener('click', function() { classToggle(0),closeOtherVideo(0)});
    document.getElementById('toVideo2').addEventListener('click', function() { classToggle(1),closeOtherVideo(1)});
    document.getElementById('toVideo3').addEventListener('click', function() { classToggle(2),closeOtherVideo(2)});
    document.getElementById('toVideo4').addEventListener('click', function() { classToggle(3),closeOtherVideo(3)});
    document.getElementById('toVideo5').addEventListener('click', function() { classToggle(4),closeOtherVideo(4)});
    document.getElementById('toVideo6').addEventListener('click', function() { classToggle(5),closeOtherVideo(5)});
    document.getElementById('toVideo7').addEventListener('click', function() { classToggle(6),closeOtherVideo(6)});
    document.getElementById('toVideo8').addEventListener('click', function() { classToggle(7),closeOtherVideo(7)});
    document.getElementById('toVideo9').addEventListener('click', function() { classToggle(8),closeOtherVideo(8)});
    document.getElementById('toVideo10').addEventListener('click', function() { classToggle(9),closeOtherVideo(9)});


    // exercicio 1//
    var treino1 = document.getElementById('selecao1');
    var ntreino1 = document.getElementById('nselecao1');

    treino1.addEventListener("click", function(event){
        treino1.style.backgroundColor="#ADFF2F";
        ntreino1.style.backgroundColor='transparent';
    })

    ntreino1.addEventListener("click", function(event){
        ntreino1.style.backgroundColor="red";
        treino1.style.backgroundColor='transparent';
    })
// exercicio 2//
    var treino2 = document.getElementById('selecao2');
    var ntreino2 = document.getElementById('nselecao2');

    treino2.addEventListener("click", function(event){
        treino2.style.backgroundColor="#ADFF2F";
        ntreino2.style.backgroundColor='transparent';
    })

    ntreino2.addEventListener("click", function(event){
        ntreino2.style.backgroundColor="red";
        treino2.style.backgroundColor='transparent';
    })
   // exercicio 3//
   var treino3 = document.getElementById('selecao3');
   var ntreino3 = document.getElementById('nselecao3');

   treino3.addEventListener("click", function(event){
       treino3.style.backgroundColor="#ADFF2F";
       ntreino3.style.backgroundColor='transparent';
   })

   ntreino3.addEventListener("click", function(event){
       ntreino3.style.backgroundColor="red";
       treino3.style.backgroundColor='transparent';
   })
   // exercicio 4//
   var treino4 = document.getElementById('selecao4');
   var ntreino4 = document.getElementById('nselecao4');

   treino4.addEventListener("click", function(event){
       treino4.style.backgroundColor="#ADFF2F";
       ntreino4.style.backgroundColor='transparent';
   })

   ntreino4.addEventListener("click", function(event){
       ntreino4.style.backgroundColor="red";
       treino4.style.backgroundColor='transparent';
   })
   // exercicio 5//
   var treino5 = document.getElementById('selecao5');
   var ntreino5 = document.getElementById('nselecao5');

   treino5.addEventListener("click", function(event){
       treino5.style.backgroundColor="#ADFF2F";
       ntreino5.style.backgroundColor='transparent';
   })

   ntreino5.addEventListener("click", function(event){
       ntreino5.style.backgroundColor="red";
       treino5.style.backgroundColor='transparent';
   })
   // exercicio 6//
   var treino6 = document.getElementById('selecao6');
   var ntreino6 = document.getElementById('nselecao6');

   treino6.addEventListener("click", function(event){
       treino6.style.backgroundColor="#ADFF2F";
       ntreino6.style.backgroundColor='transparent';
   })

   ntreino6.addEventListener("click", function(event){
       ntreino6.style.backgroundColor="red";
       treino6.style.backgroundColor='transparent';
   })
   // exercicio 7//
   var treino7 = document.getElementById('selecao7');
   var ntreino7 = document.getElementById('nselecao7');

   treino7.addEventListener("click", function(event){
       treino7.style.backgroundColor="#ADFF2F";
       ntreino7.style.backgroundColor='transparent';
   })

   ntreino7.addEventListener("click", function(event){
       ntreino7.style.backgroundColor="red";
       treino7.style.backgroundColor='transparent';
   })
   // exercicio 8//
   var treino8 = document.getElementById('selecao8');
   var ntreino8 = document.getElementById('nselecao8');

   treino8.addEventListener("click", function(event){
       treino8.style.backgroundColor="#ADFF2F";
       ntreino8.style.backgroundColor='transparent';
   })

   ntreino8.addEventListener("click", function(event){
       ntreino8.style.backgroundColor="red";
       treino8.style.backgroundColor='transparent';
   })
   // exercicio 9//
   var treino9 = document.getElementById('selecao9');
   var ntreino9 = document.getElementById('nselecao9');

   treino9.addEventListener("click", function(event){
       treino9.style.backgroundColor="#ADFF2F";
       ntreino9.style.backgroundColor='transparent';
   })

   ntreino9.addEventListener("click", function(event){
       ntreino9.style.backgroundColor="red";
       treino9.style.backgroundColor='transparent';
   })
   // exercicio 10//
   var treino10 = document.getElementById('selecao10');
   var ntreino10 = document.getElementById('nselecao10');

   treino10.addEventListener("click", function(event){
       treino10.style.backgroundColor="#ADFF2F";
       ntreino10.style.backgroundColor='transparent';
   })

   ntreino10.addEventListener("click", function(event){
       ntreino10.style.backgroundColor="red";
       treino10.style.backgroundColor='transparent';
   })
   



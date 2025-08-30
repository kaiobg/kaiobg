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

function addEventsClickTreino(i) {
  var treino = document.getElementById('selecao' + i);
  var ntreino = document.getElementById('nselecao' + i);

  treino && treino.addEventListener('click', function(event) {
    treino.style.backgroundColor = '#ADFF2F';
    ntreino.style.backgroundColor = 'transparent';

    treino.querySelector('input[type="radio"').checked = true;
  });

  ntreino && ntreino.addEventListener('click', function(event) {
    ntreino.style.backgroundColor = 'red';
    treino.style.backgroundColor = 'transparent';

    ntreino.querySelector('input[type="radio"').checked = true;
  });
}

function tratarNomeExercicio(nomeDoExercicio) {
  return nomeDoExercicio.toUpperCase().replaceAll(' ', '_');
}

function listarExercicios() {
  if(typeof treino == 'undefined') {
    return;
  }

  var container = document.querySelector('.container');
  var boxBottom = document.querySelector('.boxBottom');

  treino.reverse().forEach(function(exercicio, i) {
    var indexEl = i + 1;
    var table = document.createElement('table');
    table.classList.add('tabela');
    
    table.innerHTML = `
      <thead class="exercicio">
        <tr>
          <th colspan="5">
            <a href="#vd" id="toVideo${indexEl}" class="showVideo">${exercicio.nome}</a>
          </th>
        </tr>
      </thead>

      <thead class="repeticoes">
        <tr>
          <th>Repetições</th>
          <th>Séries</th>
          <th>Peso</th>
          <th>Descanso</th>
          <th id="nselecao${indexEl}" class="">
            <label>
              <input form="formularioCheckin" type="radio" name="${tratarNomeExercicio(exercicio.nome)}" value="Não treinei"> Não treinei
            </label>
          </th>
        </tr>
      </thead>

      <tbody>
        <tr>
          <td>&nbsp;${exercicio.repeticoes} </td>
          <td>&nbsp;${exercicio.series}</td>
          <td>&nbsp;${exercicio.peso}</td>
          <td>&nbsp;${exercicio.descanso}</td>
          <td id="selecao${indexEl}" class="">
            <label>
              <input form="formularioCheckin" type="radio" name="${tratarNomeExercicio(exercicio.nome)}" value="Treinei"> Treinei
            </label>
          </td>
        </tr>
      </tbody>
    `;

    container.prepend(table);

    // Add video
    var video = document.createElement('video');
    video.id = 'video' + indexEl;
    video.classList.add('myVideo', 'hide');
    video.controls = true;
    video.src = exercicio.video;

    boxBottom.append(video);
  });
}

listarExercicios();

document.querySelectorAll('.tabela').forEach(function(table, i) {
  var indexEl = i + 1;
  var videoEl = document.getElementById('toVideo' + indexEl);

  videoEl && videoEl.addEventListener('click', function() { 
    classToggle(i);
    closeOtherVideo(i);
  });

  // exercicio //
  addEventsClickTreino(indexEl);
});

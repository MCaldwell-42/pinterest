import boardData from '../../helpers/data/boardsData';
import pins from '../pins/pins';
import util from '../../helpers/util';
import pinsData from '../../helpers/data/pinsData';

const seePinDiv = (e) => {
  const boardId = e.target.closest('.card').id;
  console.error('buttonswork', boardId);
  document.getElementById('boards-page').classList.add('hide');
  document.getElementById('pins-page').classList.remove('hide');
  pins.initPins(boardId);
};

const bindEvents = () => {
  const allButtons = document.getElementsByClassName('see-pins');
  for (let i = 0; i < allButtons.length; i += 1) {
    allButtons[i].addEventListener('click', seePinDiv);
  }
};

const domStringBuilder = (boards) => {
  let domString = '';
  domString += '<div class="container row">';
  boards.forEach((board) => {
    domString += '<div class="col-3">';
    domString += `<div class="card p-2" id='${board.id}'>`;
    domString += '<div class="card-body">';
    domString += `<h5 class="card-title"> ${board.name} </h5>`;
    domString += `<button class="btn btn-warning see-pins">${board.pins.length}Pins</button>`;
    domString += '</div>';
    domString += '</div>';
    domString += '</div>';
  });
  domString += '</div>';
  util.printToDom('user-boards', domString);
  bindEvents();
};

const initBoards = () => {
  boardData.loadBoards()
    .then(resp => pinsData.getPinsForEachBoard(resp.data.boards))
    .then((boardsWithPins) => {
      domStringBuilder(boardsWithPins);
    })
    .catch(err => console.error('error from initBoards requests', err));
};


export default { initBoards };

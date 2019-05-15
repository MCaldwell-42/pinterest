import boardData from '../../helpers/data/boardsData';
import util from '../../helpers/util';


const domStringBuilder = (boards) => {
  let domString = '';
  domString += '<div class="container row">';
  boards.forEach((board) => {
    domString += `<div class="card col-3" id=${board.id}>`;
    domString += `<h3> ${board.name} </h3>`;
    domString += '</div>';
  });
  domString += '</div>';
  util.printToDom('user-boards', domString);
};

const initBoards = () => {
  boardData.loadBoards()
    .then((resp) => {
      const boardsArray = resp.data.boards;
      domStringBuilder(boardsArray);
    })
    .catch(err => console.error('error from hell', err));
};


export default { initBoards };

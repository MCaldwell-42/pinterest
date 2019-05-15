import pinsData from '../../helpers/data/pinsData';

const initPins = (boardId) => {
  pinsData.loadPinsForBoard(boardId)
    .then((pins) => {
      console.error(pins);
    })
    .catch(err => console.error(err));
};

export default { initPins };
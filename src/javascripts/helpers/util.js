const printToDom = (divId, textToPrint) => {
  const selectedDiv = document.getElementById(divId);
  console.error('test');
  selectedDiv.innerHTML = textToPrint;
};

export default { printToDom };

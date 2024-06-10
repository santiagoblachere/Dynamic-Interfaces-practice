export default function createDropDown() {
  const body = document.getElementsByTagName('body');
  const container = document.createElement('div');
  const optionsContainer = document.createElement('div');
  optionsContainer.classList.add('options');
  const dropdownButton = document.createElement('button');
  dropdownButton.textContent = '- - -';
  dropdownButton.addEventListener('mouseover', dropDownButtonClickHandler);

  function dropDownButtonClickHandler(e) {
    e.preventDefault();
    optionsContainer.innerHTML = '';
    const optionOne = document.createElement('button');
    optionOne.textContent = 'OPTION 1';
    const optionTwo = document.createElement('button');
    optionTwo.textContent = 'OPTION 2';
    const optionThree = document.createElement('button');
    optionThree.textContent = 'OPTION 3';
    optionsContainer.appendChild(optionOne);
    optionsContainer.appendChild(optionTwo);
    optionsContainer.appendChild(optionThree);
    optionsContainer.addEventListener('mouseleave', removeDropdownOptions);
  }
  function removeDropdownOptions() {
    optionsContainer.innerHTML = '';
  }
  container.appendChild(dropdownButton);
  container.appendChild(optionsContainer);
  body.appendChild(container);
}

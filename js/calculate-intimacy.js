const form = document.querySelector('form');
const RangeResult = document.querySelector('#range-result');
const AverageResult = document.querySelector('#average-result');

const formSubmitHandler = (evt) => {
  evt.preventDefault();
  const inputs = evt.target.elements;

  let fix = 0;
  let min = 0;
  let max = 0;

  min += Number(inputs['intimacy-bag-3'].value);
  max += Number(inputs['intimacy-bag-3'].value) * 4;
  min += Number(inputs['intimacy-bag-2'].value) * 5;
  max += Number(inputs['intimacy-bag-2'].value) * 8;
  min += Number(inputs['intimacy-bag-1'].value) * 4;
  max += Number(inputs['intimacy-bag-1'].value) * 50;

  fix += Number(inputs['intimacy-present-3'].value);
  fix += Number(inputs['intimacy-present-2'].value) * 2;
  fix += Number(inputs['intimacy-present-1'].value) * 5;

  fix += Number(inputs['intimacy-coin-4'].value);
  fix += Number(inputs['intimacy-coin-3'].value) * 2;
  fix += Number(inputs['intimacy-coin-2'].value) * 5;
  fix += Number(inputs['intimacy-coin-1'].value) * 25;

  displayResult(min + fix, max + fix);
  evt.target.reset();
};

const displayResult = (min, max) => {
  if (RangeResult && AverageResult) {
    RangeResult.textContent = `Диапазон близости: ${min} - ${max}`;
    AverageResult.textContent = `Среднее значение: ${(min + max) / 2}`;
  }
};

form.onsubmit = formSubmitHandler;

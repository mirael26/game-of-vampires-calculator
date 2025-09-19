const attractionForm = document.querySelector('#attraction-form');
const attractionRangeResult = document.querySelector(
  '#attraction-range-result'
);
const attractionAverageResult = document.querySelector(
  '#attraction-average-result'
);

const attractionFormSubmitHandler = (evt) => {
  evt.preventDefault();
  const inputs = evt.target.elements;

  let fix = 0;
  let min = 0;
  let max = 0;

  min += Number(inputs['attraction-bottle-3'].value);
  max += Number(inputs['attraction-bottle-3'].value) * 4;
  min += Number(inputs['attraction-bottle-2'].value) * 5;
  max += Number(inputs['attraction-bottle-2'].value) * 8;
  min += Number(inputs['attraction-bottle-1'].value) * 4;
  max += Number(inputs['attraction-bottle-1'].value) * 50;

  fix += Number(inputs['attraction-bouquet-3'].value);
  fix += Number(inputs['attraction-bouquet-2'].value) * 2;
  fix += Number(inputs['attraction-bouquet-1'].value) * 5;

  fix += Number(inputs['attraction-book-4'].value);
  fix += Number(inputs['attraction-book-3'].value) * 2;
  fix += Number(inputs['attraction-book-2'].value) * 5;
  fix += Number(inputs['attraction-book-1'].value) * 25;

  displayAttractionResult(min + fix, max + fix);
  evt.target.reset();
};

const displayAttractionResult = (min, max) => {
  if (attractionRangeResult && attractionAverageResult) {
    attractionRangeResult.textContent = `Диапазон влечения: ${min} - ${max}`;
    attractionAverageResult.textContent = `Среднее значение: ${
      (min + max) / 2
    }`;
  }
};

attractionForm.onsubmit = attractionFormSubmitHandler;

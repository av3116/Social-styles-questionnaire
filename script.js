const startButton = document.getElementById('startButton');
const startPage = document.getElementById('startPage');
const surveyTitle = document.getElementById('surveyTitle');
const surveyForm = document.getElementById('surveyForm');
const resultSection = document.getElementById('result');
const categoryName = document.getElementById('categoryName');
const categoryImage = document.getElementById('categoryImage');

let currentQuestionIndex = 0;
const questions = document.querySelectorAll('.question');
const nextButton = document.getElementById('nextButton');
const totalQuestions = questions.length;

startButton.addEventListener("click", function() {
  startPage.style.display = 'none';
  surveyForm.style.display = 'block';
  questions[currentQuestionIndex].style.display = 'block';
});

nextButton.addEventListener("click", function(event) {
  if (currentQuestionIndex < totalQuestions - 1) {
    questions[currentQuestionIndex].style.display = 'none';
    currentQuestionIndex++;
    questions[currentQuestionIndex].style.display = 'block';
    
    if (currentQuestionIndex === totalQuestions - 1) {
      nextButton.textContent = "Submit";
    }
  } else {
    event.preventDefault();
    showResult();
  }
});

function showResult() {
  const categoryScores = { YellowSunshine: 0, FieryRed: 0, CoolBlue: 0, EarthyGreen: 0 };

  const questionsMapping = [
    { questionId: "qc1", options: [
      { value: "1", categoryScores: { YellowSunshine: 0.499 } },
      { value: "2", categoryScores: { FieryRed: 0.499 } },
      { value: "3", categoryScores: { CoolBlue: 0.499 } },
      { value: "4", categoryScores: { EarthyGreen: 0.499 } }
    ]},
    { questionId: "qc2", options: [
        { value: "3", categoryScores: { YellowSunshine: 0.599 } },
        { value: "1", categoryScores: { FieryRed: 0.599 } },
        { value: "2", categoryScores: { CoolBlue: 0.599 } },
        { value: "4", categoryScores: { EarthyGreen: 0.599 } }
      ]},
    { questionId: "qc3", options: [
        { value: "3", categoryScores: { YellowSunshine: 0.49 } },
        { value: "4", categoryScores: { FieryRed: 0.49 } },
        { value: "1", categoryScores: { CoolBlue: 0.49 } },
        { value: "2", categoryScores: { EarthyGreen: 0.49 } }
      ]},
    { questionId: "qc4", options: [
        { value: "1", categoryScores: { YellowSunshine: 0.51 } },
        { value: "4", categoryScores: { FieryRed: 0.51 } },
        { value: "2", categoryScores: { CoolBlue: 0.51 } },
        { value: "3", categoryScores: { EarthyGreen: 0.51 } }
      ]},
      { questionId: "qc5", options: [
        { value: "2", categoryScores: { YellowSunshine: 0.59 } },
        { value: "4", categoryScores: { FieryRed: 0.59 } },
        { value: "1", categoryScores: { CoolBlue: 0.59 } },
        { value: "3", categoryScores: { EarthyGreen: 0.59 } }
      ]},
    { questionId: "qa1", options: [
        { value: "1", categoryScores: { YellowSunshine: 1, FieryRed: 1 } },
        { value: "2", categoryScores: { CoolBlue: 1, EarthyGreen: 1 } }
      ]},
    { questionId: "qa2", options: [
      { value: "2", categoryScores: { YellowSunshine: 1, FieryRed: 1 } },
      { value: "1", categoryScores: { CoolBlue: 1, EarthyGreen: 1 } }
    ]},
    { questionId: "qa3", options: [
      { value: "1", categoryScores: { YellowSunshine: 1, FieryRed: 1 } },
      { value: "2", categoryScores: { CoolBlue: 1, EarthyGreen: 1 } }
    ]},
    { questionId: "qa4", options: [
      { value: "2", categoryScores: { YellowSunshine: 1, FieryRed: 1 } },
      { value: "1", categoryScores: { CoolBlue: 1, EarthyGreen: 1 } }
    ]},
    { questionId: "qa5", options: [
        { value: "1", categoryScores: { YellowSunshine: 1, FieryRed: 1 } },
        { value: "2", categoryScores: { CoolBlue: 1, EarthyGreen: 1 } }
      ]},
    { questionId: "qa6", options: [
        { value: "2", categoryScores: { YellowSunshine: 1, FieryRed: 1 } },
        { value: "1", categoryScores: { CoolBlue: 1, EarthyGreen: 1 } }
      ]},
    { questionId: "qa7", options: [
        { value: "1", categoryScores: { YellowSunshine: 1, FieryRed: 1 } },
        { value: "2", categoryScores: { CoolBlue: 1, EarthyGreen: 1 } }
      ]},
    { questionId: "qr1", options: [
        { value: "1", categoryScores: { FieryRed: 1, CoolBlue: 1 } },
        { value: "2", categoryScores: { YellowSunshine: 1, EarthyGreen: 1 } }
      ]},
      { questionId: "qr2", options: [
        { value: "2", categoryScores: { FieryRed: 1, CoolBlue: 1 } },
        { value: "1", categoryScores: { YellowSunshine: 1, EarthyGreen: 1 } }
      ]},
      { questionId: "qr3", options: [
        { value: "1", categoryScores: { FieryRed: 1, CoolBlue: 1 } },
        { value: "2", categoryScores: { YellowSunshine: 1, EarthyGreen: 1 } }
      ]},
      { questionId: "qr4", options: [
        { value: "2", categoryScores: { FieryRed: 1, CoolBlue: 1 } },
        { value: "1", categoryScores: { YellowSunshine: 1, EarthyGreen: 1 } }
      ]},
      { questionId: "qr5", options: [
        { value: "1", categoryScores: { FieryRed: 1, CoolBlue: 1 } },
        { value: "2", categoryScores: { YellowSunshine: 1, EarthyGreen: 1 } }
      ]},
      { questionId: "qr6", options: [
        { value: "2", categoryScores: { FieryRed: 1, CoolBlue: 1 } },
        { value: "1", categoryScores: { YellowSunshine: 1, EarthyGreen: 1 } }
      ]},
      { questionId: "qr7", options: [
        { value: "1", categoryScores: { FieryRed: 1, CoolBlue: 1 } },
        { value: "2", categoryScores: { YellowSunshine: 1, EarthyGreen: 1 } }
      ]}
  ];

  questionsMapping.forEach((mapping) => {
    const answer = document.getElementById(mapping.questionId).value;
    const selectedOption = mapping.options.find(option => option.value === answer);
    if (selectedOption) {
      for (const category in selectedOption.categoryScores) {
        categoryScores[category] += selectedOption.categoryScores[category];
      }
    }
  });

  let highestCategory = Object.keys(categoryScores).reduce((a, b) => categoryScores[a] > categoryScores[b] ? a : b);

  surveyTitle.style.display = 'none';
  surveyForm.style.display = 'none';
  resultSection.style.display = 'block';

  categoryName.innerText = highestCategory.charAt(0).toUpperCase() + highestCategory.slice(1);

  // Display category-specific image
  if (highestCategory === 'YellowSunshine') {
    categoryImage.src = 'yellow.png'; // Replace with actual image URL
  } else if (highestCategory === 'FieryRed') {
    categoryImage.src = 'red.png'; // Replace with actual image URL
  } else if (highestCategory === 'CoolBlue') {
    categoryImage.src = 'blue.png'; // Replace with actual image URL
  } else if (highestCategory === 'EarthyGreen') {
    categoryImage.src = 'green.png'; // Replace with actual image URL
  }
}
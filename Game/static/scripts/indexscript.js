// Initialise variabless
let AnsOfButtonClicked = '';
let Score = 0;
let Fails = 0;
var questions = [
  {
    question: 'What is an economic recession?',
    answers: [
      'Decreased spending and investment',
      'GDP drop for 2 quarters',
      'Unemployment and falling income',
      'Business closures and market decline',
    ],
  },
  {
    question: 'Main goal of monetary policy?',
    answers: [
      'Maintain price stability, full employment',
      'Support growth, minimize unemployment',
      'Stable currency, control inflation',
      'Manage money supply, interest rates',
    ],
  },
  {
    question: 'Cause of demand-pull inflation?',
    answers: [
      'Economy overheating, too much money',
      'Excessive demand over supply',
      'More demand than output',
      'High consumer and investment spending',
    ],
  },
  {
    question: 'Effect of high interest rates?',
    answers: [
      'Currency appreciation, fewer exports',
      'Less investment, higher costs',
      'Lower consumption, economic slowdown',
      'Decreased investment and consumption',
    ],
  },
  {
    question: 'Advantage of floating exchange rates?',
    answers: [
      'Flexible market-driven rates',
      'Adapts to economic changes',
      'Independence from currency speculation',
      'Auto balance of payments',
    ],
  },
  {
    question: 'Whats a progressive tax?',
    answers: [
      'Fair taxation for social equity',
      'Higher rate for more income',
      'Redistributes wealth, less inequality',
      'Tax increases with earnings',
    ],
  },
  {
    question: 'Effect of high unemployment?',
    answers: [
      'Govt. spends on benefits',
      'Lower output, income',
      'Business closures and social problems',
      'Economic issues, reduced spending',
    ],
  },
  {
    question: 'World Bank function?',
    answers: [
      'Economic development via projects',
      'Supports developing projects',
      'Loans for development',
      'Reduces global poverty',
    ],
  },
  {
    question: 'Role of International Monetary Fund?',
    answers: [
      'Monetary cooperation among nations',
      'Stabilizes exchange rates',
      'Provides financial aid, stability',
      'Aids balance-of-payments crises',
    ],
  },
  {
    question: 'Whats Gini coefficient measure?',
    answers: [
      'Economic disparity, wealth inequality',
      'Income inequality within a country',
      'Income distribution, wealth disparity',
      'Equality or inequality in distribution',
    ],
  },
  {
    question: 'Characteristic of public goods?',
    answers: [
      'Collective consumption, free riders',
      'Non-excludable, non-rivalrous',
      'Govt. provides, no profits',
      'Shared access, no depletion',
    ],
  },
  {
    question: 'Outcome of negative externality?',
    answers: [
      'Undesirable effects, suboptimal allocation',
      'Social costs exceed private costs',
      'Overproduction of externality',
      'Market allocation fails',
    ],
  },
  {
    question: 'Antitrust laws purpose?',
    answers: [
      'Prohibit market dominance, abuses',
      'Maintain fair competition',
      'Prevent monopolies, encourage competition',
      'Promote consumer wellfare',
    ],
  },
  {
    question: 'Whas opportunity cost?',
    answers: [
      'Price of forgone option',
      'Trade-off value, alternative choice',
      'Sacrificed value of option',
      'Cost of next best',
    ],
  },
  {
    question: 'Key feature of command economy?',
    answers: [
      'Central planning, state ownership',
      'Economic decisions by state authority',
      'Govt. makes all decisions',
      'Limited economic individual freedom',
    ],
  },
  {
    question: 'What does fiscal policy entail?',
    answers: [
      'Balancing budget, influence economy',
      'Stimulating or cooling the economy',
      'Government spending and taxation',
      'Public expenditure, revenue collection',
    ],
  },
  {
    question: 'What characterizes a bear market?',
    answers: [
      'Negative returns in stock market',
      'Decreased investor confidence',
      'Falling stock prices, pessimism',
      'Market decline over time',
    ],
  },
  {
    question: 'What is the significance of GDP per capita?',
    answers: [
      'Indicator of living standards',
      'Average economic output per person',
      'Economic well-being measure',
      'Wealth distribution among population',
    ],
  },
  {
    question: 'How does inflation affect the economy?',
    answers: [
      'Distorts price signals, uncertainty',
      'Reduces purchasing power, prices rise',
      'Erodes real income, savings value',
      'Can lead to hyperinflation if unchecked',
    ],
  },
  {
    question: 'What is a trade deficit?',
    answers: [
      'More money leaving than entering',
      'Economic imbalance with trading partners',
      'Imports exceed exports',
      'Negative balance of trade',
    ],
  },
  {
    question: 'Purpose of consumer price index?',
    answers: [
      'Tracks inflation rate in economy',
      'Assess inflation impact on consumers',
      'Measures price changes, cost of living',
      'Price level indicator over time',
    ],
  },
  {
    question: 'Impact of technological advancement on economy?',
    answers: [
      'Boosts productivity, innovation',
      'Creates new industries, job opportunities',
      'Enhances economic growth, efficiency',
      'May lead to workforce displacement',
    ],
  },
  {
    question: 'Characteristics of a monopoly?',
    answers: [
      'Potential for consumer exploitation',
      'No close substitutes, high barriers',
      'Price maker, lacks competition',
      'Single seller, market control',
    ],
  },
  {
    question: 'Role of central bank in an economy?',
    answers: [
      'Manages national currency, money supply',
      'Lender of last resort, financial stability',
      'Controls monetary policy, regulates banks',
      'Oversees financial system, interest rates',
    ],
  },
  {
    question: 'What is a trade surplus?',
    answers: [
      'Positive balance of trade',
      'Economic advantage with trading partners',
      'More money entering than leaving',
      'Exports exceed imports',
    ],
  },
  {
    question: 'What is a liquidity trap?',
    answers: [
      'Cash hoarding by consumers, firms',
      'Low interest rates, no increase in spending',
      'Monetary policy becomes ineffective',
      'Stagnant economic growth despite policies',
    ],
  },
  {
    question: 'Purpose of supply and demand laws?',
    answers: [
      'Interaction affects economic equilibrium',
      'Fundamental to market economy',
      'Determine market prices, quantity',
      'Influence resource allocation, production',
    ],
  },
  {
    question: 'How do tariffs impact trade?',
    answers: [
      'Can lead to trade wars, retaliation',
      'Increase cost of imports, reduce trade',
      'Impact consumers, global relations',
      'Protect domestic industries',
    ],
  },
  {
    question: 'What is a bull market?',
    answers: [
      'Positive returns in stock market',
      'Increased investor confidence',
      'Rising stock prices, optimism',
      'Market growth over time',
    ],
  },
  {
    question: 'Characteristics of a mixed economy?',
    answers: [
      'Combines private and public ownership',
      'Balances economic freedom and regulation',
      'Government and market drive economy',
      'Mix of market and command economy',
    ],
  },
];






localStorage.setItem('questions', JSON.stringify(questions));
var completeQuestions = JSON.parse(localStorage.getItem('questions'));

$(document).ready(function () {
  $('#container2').hide();
});
// More functions like this

$(document).ready(function () {
  $('#container3').hide();
});

$(document).ready(function () {
  $('#CreatorUi').hide();
});

$(document).ready(function () {
  $('#rules').hide();
});

$(document).ready(function () {
  $('#CreaQuesUI').hide();
});

function showCreatorQues() {
  $('#container3').hide();
  $('#container2').hide();
  $('#CreatorUi').hide();
  $('#rules').hide();
  $('#IntrO').hide();
  $('#CreaQuesUI').show();
}

// More functions for the other containers

function showIntro() {
  $('#container3').hide();
  $('#container2').hide();
  $('#CreatorUi').hide();
  $('#rules').hide();
  $("#CreaQuesUI").hide();
  $('#IntrO').show();
}

function showRules() {
  $('#container3').hide();
  $('#container2').hide();
  $('#IntrO').hide();
  $('#rules').show();
  $('#CreatorUi').hide();
}

// ... (more functions)

function showCreator() {
  $('#container3').hide();
  $('#container2').hide();
  $('#IntrO').hide();
  $('#rules').hide();
  $('#CreatorUi').show();
}
function showCont2() {
  $('#container3').hide();
  $('#IntrO').hide();
  $('#rules').hide();
  $('#container2').show();
  $('#CreatorUi').hide();
}

function showCont3() {
  $('#container2').hide();
  $('#IntrO').hide();
  $('#rules').hide();
  $('#container3').show();
  $('#CreatorUi').hide();
}

function showCont1() {
  $('#container2').hide();
  $('#container3').hide();
  $('#IntrO').hide();
  $('#rules').hide();
  $('#container1').show();
  $('#CreatorUi').hide();
}

$(document).ready(function () {
  $("#CreaQuesUI").hide();
});

function showCreatorQues() {
  $("#container3").hide();
  $("#container2").hide();  
  $("#CreatorUi").hide();
  $("#rules").hide();
  $("#IntrO").hide();
  $("#CreaQuesUI").show();
}


let totalTime = 63; // Total time in seconds
let timePassed = 0;
let timerBarWidth = 100; // The timer bar width percentage

const timerBar = document.getElementById('timer-bar');
let timerInterval; // Hold the interval ID globally


function startTimer() {
  // Reset the timer first if it's already running
  resetTimer();

  timerInterval = setInterval(() => {
    timePassed += 1;
    timerBarWidth = (timePassed / totalTime) * 100;

    if (timerBarWidth >= 100) {
      timerBarWidth = 100;
      clearInterval(timerInterval); // Stop the interval when time is up
      showCont3(); // Call the function when the timer is up
      ShowScore();
      ShowFails();
      musicPause();
    }

    timerBar.style.width = (100 - timerBarWidth) + '%';
  }, 1000);
}


// Start the timer


function resetTimer() {
  clearInterval(timerInterval); // Clear the existing interval
  timePassed = 0; // Reset time passed
  timerBarWidth = 100; // Reset timer bar width
  timerBar.style.width = '100%'; // Reset the visual width of the timer bar
}

document.getElementById('RetBTN').addEventListener('click', function () {
  resetTimer();
  startTimer(); // Remove this line if you don't want to restart the timer automatically
});

window.onload = function() {
  var audio = document.getElementById('music');
  audio.volume = 0.2; 
};


// document.getElementById("endMSG").textContent += username;

document.getElementById('CreateQuiz').addEventListener('click', function () {
  showCreator();
});

document.getElementById('StartBTN').addEventListener('click', function () {
  console.log('Button clicked!');
  showCont2();
  startTimer();
  var audio = document.getElementById('music');
  audio.play();
});


// ... (more event listeners)

function resetBTNS() {
  const answerElements = document.querySelectorAll('.answer');

  answerElements.forEach(answerElement => {
    answerElement.style.background = '#08001b';
    answerElement.style.border = '2px solid white';
    answerElement.style.color = 'white';
  });
}

function resetVariables() {
  completeQuestions = usedQuestions;
  
}

function musicPause(){
  var audio = document.getElementById('music');
  audio.pause();
  audio.currentTime = 0;
}

function ShowScore() {
  var spanElement = document.getElementById('score');
  var newScore = 'Your Score: ' + Score;
  spanElement.textContent = newScore;
}
function ShowFails() {
  var spanElement = document.getElementById('fails');
  var newFails = 'Failed attempts: ' + Fails;
  spanElement.textContent = newFails;
}

const myButton = document.getElementById('RetBTN');
myButton.addEventListener('click', function () {
  showIntro();
  resetVariables();
});

const mybutton = document.getElementById('PlayGame');
mybutton.addEventListener('click', function () {
  showRules();
});

var questionElement = document.getElementById('question');
var answer1Element = document.getElementById('answer1');
var answer2Element = document.getElementById('answer2');
var answer3Element = document.getElementById('answer3');
var answer4Element = document.getElementById('answer4');

var usedQuestions = [];

function loadQuestion() {
  if (completeQuestions.length === 0) {
    return 'No more questions available.';
  }
  var randomIndex = Math.floor(Math.random() * completeQuestions.length);
  var question = completeQuestions[randomIndex];
  completeQuestions.splice(randomIndex, 1);
  usedQuestions.push(question);
  questionElement.innerHTML = question.question;
  answer1Element.innerHTML = question.answers[0];
  answer2Element.innerHTML = question.answers[1];
  answer3Element.innerHTML = question.answers[2];
  answer4Element.innerHTML = question.answers[3];
}
loadQuestion();

// Modify your JavaScript code
document.getElementById('RetBTN').addEventListener('click', function (event) {
  event.preventDefault();
  document.getElementById('Scores').value = Score;
  document.getElementById('saveScore').submit();
});

const answerElements = document.querySelectorAll('.answer');
answerElements.forEach(answerElement => {
  answerElement.addEventListener('click', function () {
    AnsOfButtonClicked = this.textContent;
    console.log('Button text:', AnsOfButtonClicked);

    if (
      AnsOfButtonClicked === 'GDP drop for 2 quarters' ||
      AnsOfButtonClicked === 'Stable currency, control inflation' ||
      AnsOfButtonClicked === 'Excessive demand over supply' ||
      AnsOfButtonClicked === 'Less investment, higher costs' ||
      AnsOfButtonClicked === 'Auto balance of payments' ||
      AnsOfButtonClicked === 'Higher rate for more income' ||
      AnsOfButtonClicked === 'Lower output, income' ||
      AnsOfButtonClicked === 'Loans for development' ||
      AnsOfButtonClicked === 'Stabilizes exchange rates' ||
      AnsOfButtonClicked === 'Income inequality within a country' ||
      AnsOfButtonClicked === 'Non-excludable, non-rivalrous' ||
      AnsOfButtonClicked === 'Market allocation fails' ||
      AnsOfButtonClicked === 'Prevent monopolies, encourage competition' ||
      AnsOfButtonClicked === 'Cost of next best' ||
      AnsOfButtonClicked === 'Government spending and taxation' ||
      AnsOfButtonClicked === 'Falling stock prices, pessimism' ||
      AnsOfButtonClicked === 'Average economic output per person' ||
      AnsOfButtonClicked === 'Reduces purchasing power, prices rise' ||
      AnsOfButtonClicked === 'Imports exceed exports' ||
      AnsOfButtonClicked === 'Measures price changes, cost of living' ||
      AnsOfButtonClicked === 'Boosts productivity, innovation' ||
      AnsOfButtonClicked === 'Single seller, market control' ||
      AnsOfButtonClicked === 'Controls monetary policy, regulates banks' ||
      AnsOfButtonClicked === 'Exports exceed imports' ||
      AnsOfButtonClicked === 'Low interest rates, no increase in spending' ||
      AnsOfButtonClicked === 'Determine market prices, quantity' ||
      AnsOfButtonClicked === 'Increase cost of imports, reduce trade' ||
      AnsOfButtonClicked === 'Rising stock prices, optimism' ||
      AnsOfButtonClicked === 'Combines private and public ownership'  ||
      AnsOfButtonClicked === 'Govt. makes all decisions'
    ) {
      Score = Score + 1;
      loadQuestion();
      resetBTNS();
      document.getElementById('ProgBTN').textContent = 'Score: ' + Score;
    } else {
      Score = Score - 1;
      Fails = Fails + 1;
      document.getElementById('ProgBTN').textContent = 'Score: ' + Score;
      answerElement.style.background = '#08001b';
      answerElement.style.border = '#08001b';
      answerElement.style.borderImageSlice = '1';
      answerElement.style.color = '#08001b';
    }

  });
});


 
// document.getElementById('confirmUsername').addEventListener('click', function() {
//   var username = document.getElementById('username').value;
//   if(username) {
//       // Optionally, you can add additional validation for the username here
//       document.getElementById('StartBTN').disabled = false; // Enable the Start button
//   } else {
//       alert("Please enter a username."); // Alert if the username is empty
//   }
// });

// // Initially, disable the Start button until the username is confirmed
// document.getElementById('StartBTN').disabled = true;

  
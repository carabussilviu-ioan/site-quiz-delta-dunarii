function checkAnswers() {
    var correctAnswers = ['A', 'A', 'C', 'B', 'A', 'A', 'D', 'C', 'B', 'C'];
    var userAnswers = [];

    for (var i = 1; i <= 10; i++) {
        var radios = document.getElementsByName('q' + i);
        for (var j = 0; j < radios.length; j++) {
            if (radios[j].checked) {
                userAnswers.push(radios[j].value);
                break;
            }
        }
    }

  
    var score = 0;
    for (var i = 0; i < correctAnswers.length; i++) {
        if (userAnswers[i] === correctAnswers[i]) {
            score++;
        }
    }

 
    var resultMessage = 'Felicitari! Ai răspuns corect la ' + score + ' din 10 întrebări.';
    alert(resultMessage);
}

function resetQuiz() {
    var forms = document.querySelectorAll('.quiz-form');
    for (var i = 0; i < forms.length; i++) {
        forms[i].reset();
    }
}

document.querySelector('button').addEventListener('click', checkAnswers);

function optionSelected() {
    var submitButton = document.getElementById('submit-button');
    if (checkAllQuestions()) {
        submitButton.style.display = 'block'; 
        submitButton.style.backgroundColor = '#4CAF50'; 
    } else {
        submitButton.style.display = 'none';
    }
}

class CareerQuiz {
    constructor() {
        this.currentQuestion = 0;
        this.answers = [];
        this.categoryScores = {};
        
        // Initialize UI elements
        this.welcomeScreen = document.getElementById('welcome-screen');
        this.questionScreen = document.getElementById('question-screen');
        this.resultsScreen = document.getElementById('results-screen');
        this.progressBar = document.querySelector('.progress');
        
        // Initialize buttons
        this.startButton = document.getElementById('start-quiz');
        this.prevButton = document.getElementById('prev-btn');
        this.nextButton = document.getElementById('next-btn');
        this.viewDetailsButton = document.getElementById('view-details');
        
        this.initializeEventListeners();
    }

    initializeEventListeners() {
        this.startButton.addEventListener('click', () => this.startQuiz());
        this.prevButton.addEventListener('click', () => this.previousQuestion());
        this.nextButton.addEventListener('click', () => this.nextQuestion());
        this.viewDetailsButton.addEventListener('click', () => this.viewCareerDetails());
    }

    startQuiz() {
        this.welcomeScreen.classList.remove('active');
        this.questionScreen.classList.add('active');
        this.showQuestion();
    }

    showQuestion() {
        const question = quizQuestions[this.currentQuestion];
        const questionText = document.getElementById('question-text');
        const optionsContainer = document.getElementById('options-container');
        
        // Update progress bar
        const progress = ((this.currentQuestion + 1) / quizQuestions.length) * 100;
        this.progressBar.style.width = `${progress}%`;

        // Update question text
        questionText.textContent = question.question;

        // Clear and update options
        optionsContainer.innerHTML = '';
        question.options.forEach((option, index) => {
            const optionCard = document.createElement('div');
            optionCard.className = 'option-card';
            if (this.answers[this.currentQuestion] === index) {
                optionCard.classList.add('selected');
            }
            optionCard.textContent = option.text;
            optionCard.addEventListener('click', () => this.selectOption(index));
            optionsContainer.appendChild(optionCard);
        });

        // Update navigation buttons
        this.prevButton.style.visibility = this.currentQuestion === 0 ? 'hidden' : 'visible';
        this.nextButton.textContent = this.currentQuestion === quizQuestions.length - 1 ? 'See Results' : 'Next';
    }

    selectOption(index) {
        const options = document.querySelectorAll('.option-card');
        options.forEach(option => option.classList.remove('selected'));
        options[index].classList.add('selected');
        this.answers[this.currentQuestion] = index;
    }

    previousQuestion() {
        if (this.currentQuestion > 0) {
            this.currentQuestion--;
            this.showQuestion();
        }
    }

    nextQuestion() {
        if (this.answers[this.currentQuestion] === undefined) {
            alert('Please select an option before continuing.');
            return;
        }

        if (this.currentQuestion === quizQuestions.length - 1) {
            this.calculateResults();
        } else {
            this.currentQuestion++;
            this.showQuestion();
        }
    }

    calculateResults() {
        // Reset category scores
        this.categoryScores = {};

        // Calculate scores for each category
        this.answers.forEach((answerIndex, questionIndex) => {
            const selectedOption = quizQuestions[questionIndex].options[answerIndex];
            selectedOption.categories.forEach(category => {
                this.categoryScores[category] = (this.categoryScores[category] || 0) + 1;
            });
        });

        this.showResults();
    }

    showResults() {
        this.questionScreen.classList.remove('active');
        this.resultsScreen.classList.add('active');

        const resultsContainer = document.getElementById('results-container');
        resultsContainer.innerHTML = '';

        // Convert scores to array and sort by score
        const sortedScores = Object.entries(this.categoryScores)
            .map(([category, score]) => ({
                category,
                score: (score / (quizQuestions.length * 3)) * 100 // Normalize to percentage
            }))
            .sort((a, b) => b.score - a.score)
            .slice(0, 3); // Top 3 matches

        // Display results
        sortedScores.forEach(({category, score}) => {
            if (careerPaths[category]) {
                const careerMatch = document.createElement('div');
                careerMatch.className = 'career-match';
                careerMatch.innerHTML = `
                    <h3>${careerPaths[category].title}
                        <span class="match-percentage">${Math.round(score)}% Match</span>
                    </h3>
                    <p class="career-description">${careerPaths[category].description}</p>
                    <p><strong>Key Roles:</strong> ${careerPaths[category].roles.join(', ')}</p>
                    <p><strong>Core Skills:</strong> ${careerPaths[category].skills.join(', ')}</p>
                `;
                resultsContainer.appendChild(careerMatch);
            }
        });
    }

    viewCareerDetails() {
        // Store results in localStorage for the career pathway page
        localStorage.setItem('quizResults', JSON.stringify(this.categoryScores));
        window.location.href = 'careers.html';
    }
}

// Initialize quiz when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    new CareerQuiz();
});

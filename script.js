document.addEventListener('DOMContentLoaded', () => {
    // update prompts and answers later
    // update for nested prompts and answers later  
    const witnesses = [
        {name: 'Witness 1', question: "Some question", answer: "Witness 1 answer" },
        {name: 'Witness 2', question: "Some question2", answer: "Witness 2 answer" },
        {name: 'Witness 3', question: "Some question3", answer: "Witness 3 answer" },
        {name: 'Witness 4', question: "Some question4", answer: "Witness 4 answer"}
    ];


    const witnessesContainer = document.getElementById('witnesses');
    const questionArea = document.getElementById('questionArea');
    const questionElement = document.getElementById('question');
    const answerElement = document.getElementById('answer');
    const answerButton = document.getElementById('answerButton');

    witnesses.forEach((witness, index) => {
        const button = document.createElement('button');
        button.textContent = witness.name;
        button.addEventListener('click', () => {
            questionArea.style.display = 'block';
            questionElement.textContent = witness.question;
            answerElement.style.display = 'none';
            answerButton.onclick = () => {
                answerElement.textContent = witness.answer;
                answerElement.style.display = 'block';
            };
        });
        witnessesContainer.appendChild(button); 
    });
});

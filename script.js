const witnesses = [
    {
        name: 'Witness 1',
        narrative: [
            {
                prompt: "Witness 1 prompt",
                options: [
                    {
                        choice: "Living Room",
                        followUp: {
                            prompt: "You found a clue in the Living Room :D",
                            options: [
                                {
                                    choice: "Kitchen",
                                    followUp: { prompt: "You found a clue in the kitchen~" }
                                },
                                {
                                    choice: "Bathroom",
                                    followUp: { prompt: "You found a clue in the bathroom" }
                                },
                            ]
                        }
                    },
                    {
                        choice: "Bed room",
                        followUp: { prompt: "The clue is in the bed room" }
                    },
                ]
            }
        ]
    },
    {
        name: 'Witness 2',
        narrative: [
            {
                prompt: "Witness 2 prompt",
                options: [
                    {
                        choice: "Attic",
                        followUp: { prompt: "The clue is in the attic" }
                    },
                    {
                        choice: "Basement",
                        followUp: { prompt: "There is something in the basement" }
                    },
                ]
            }
        ]
    },
    {
        name: 'Witness 3',
        narrative: [
            {
                prompt: "Witness 3 prompt",
                options: [
                    {
                        choice: "Garage",
                        followUp: { prompt: "Evidence in the garage" }
                    },
                    {
                        choice: "Yard",
                        followUp: { prompt: "Evidence in the Yard" }
                    },
                ]
            }
        ]
    },
    {
        name: 'Witness 4',
        narrative: [
            {
                prompt: "Witness 4 prompt",
                options: [
                    {
                        choice: "School",
                        followUp: { prompt: "The clue is in a book" }
                    },
                    {
                        choice: "Library",
                        followUp: { prompt: "The clue is in the libary" }
                    },
                ]
            }
        ]
    }
];


    const witnessesContainer = document.getElementById('witnesses');
    const questionArea = document.getElementById('questionArea');
    const questionElement = document.getElementById('question');
    const answerElement = document.getElementById('answer');
    const answerButton = document.getElementById('answerButton');

    // hides questions not used
    questionArea.style.display = 'none';
    answerButton.style.display = 'none';

    function handleOption(option) {
        questionElement.textContent = option.followUp.prompt;
        answerElement.style.display = 'none'; 
        while (answerButton.nextSibling) {
            answerButton.parentNode.removeChild(answerButton.nextSibling);
        }
    
        if (option.followUp.options) {
            option.followUp.options.forEach(subOption => {
                const optionButton = document.createElement('button');
                optionButton.textContent = subOption.choice;
                optionButton.onclick = () => handleOption(subOption);
                questionArea.appendChild(optionButton);
            });
        } else {
            // when there are no more options
            answerElement.textContent = "Done";
            answerElement.style.display = 'block';
        }
    }
    
    function getQuestions(narrative) {
        clearAndDisplayQuestionArea();
        narrative.forEach((item) => {
            const narrativePrompt = document.createElement('p');
            narrativePrompt.textContent = item.prompt;
            questionArea.appendChild(narrativePrompt);
    
            item.options.forEach(option => {
                const optionButton = document.createElement('button');
                optionButton.textContent = option.choice;
                optionButton.onclick = () => handleOption(option);
                questionArea.appendChild(optionButton);
            });
        });
    }

    function clearAndDisplayQuestionArea() {
        questionArea.style.display = 'block';
        witnessesContainer.style.display = 'none';
        answerElement.style.display = 'none';
        answerButton.style.display = 'none';


        while (questionArea.firstChild && questionArea.firstChild !== questionElement) {
            questionArea.removeChild(questionArea.firstChild);
        }
    }
    

    witnesses.forEach((witness) => {
        const button = document.createElement('button');
        button.textContent = witness.name;
        button.addEventListener('click', () => {
            getQuestions(witness.narrative);
        });
        witnessesContainer.appendChild(button);
    });
    
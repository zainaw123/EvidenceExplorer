
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
                            prompt: "You found a clue in the Living Room :D Now where would you like to find the second clue",
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

    let narrativeStack = []; 

    function handleOption(option) {
        narrativeStack.push(option); 
        renderNarrative(option.followUp || option);
    }
    
    function displayNarrative(narrative) {
        clearAndDisplayQuestionArea();
        questionElement.textContent = narrative.prompt;
        answerElement.style.display = 'none';
    
         // clears previous content
        questionArea.innerHTML = '';
        // re-adds the question
        questionArea.appendChild(questionElement); 
    
        if (narrative.options) {
            narrative.options.forEach(subOption => {
                const optionButton = document.createElement('button');
                optionButton.textContent = subOption.choice;
                optionButton.onclick = () => handleOption(subOption);
                questionArea.appendChild(optionButton);
            });
        } else {
            // when there are no more options
            answerElement.textContent = "End of this path.";
            answerElement.style.display = 'block';
        }
    
        // decides whether to go back or to main menu
        if (narrativeStack.length > 1) {
            const backButton = document.createElement('button');
            backButton.textContent = "Back";
            backButton.onclick = goBack;
            questionArea.appendChild(backButton);
        } else if (narrativeStack.length === 1) { 
            const mainMenuButton = document.createElement('button');
            mainMenuButton.textContent = "Main Menu";
            mainMenuButton.onclick = showWitnesses; 
            questionArea.appendChild(mainMenuButton);
        }
    }
    

    function goBack() {
        // current narrative gets popped to go back
        narrativeStack.pop(); 
        if (narrativeStack.length > 0) {
            const previousOption = narrativeStack[narrativeStack.length - 1];
            narrativeStack.pop(); 
            handleOption(previousOption);
        } else {
            //returns to the main menu (witness list)
            showWitnesses(); 
        }
    }
     //shows the witnesses on the main screen
    function showWitnesses() {
        narrativeStack = []; 
        questionArea.style.display = 'none';
        witnessesContainer.innerHTML = ''; 
        witnessesContainer.style.display = 'block';

        witnesses.forEach(witness => {
            const button = document.createElement('button');
            button.textContent = witness.name;
            button.onclick = () => handleOption({ followUp: witness.narrative[0] });
            witnessesContainer.appendChild(button);
        });
    }

    function clearAndDisplayQuestionArea() {
        questionArea.style.display = 'block';
        witnessesContainer.style.display = 'none';
        answerElement.style.display = 'none';
        answerButton.style.display = 'none';
    }
    // displays the list of witnesses intially 
    showWitnesses(); 

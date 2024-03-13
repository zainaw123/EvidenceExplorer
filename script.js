const witnesses = [
    {
        name: 'Kevin',
        narrative: [
            {
                prompt: "I’m terribly sorry about the loss of your house, Kevin Bacon, since you were a victim of that wolf's reckless cruelty. My job is to determine the facts of this case and make a verdict. I have a few questions for you. Firstly...",  
                options: [
                    {
                        choice: "Ask about his girlfriend: Word around the forest is that you just got engaged. Is this true?",
                        followUp: {
                            prompt: "Kevin: The rumors are true. Me and my fiancé are actually planning a trip to the creek in 3 moons.",
                            options: [
                                {
                                    choice: "That’s very nice to hear. How did you meet?",
                                    followUp: { 
                                        prompt: "Kevin: We actually met through my brother, Peter. He had a crush on her but the heart wants what the heart wants, I suppose.",
                                        options: [
                                            {
                                                choice: "*You see Peter sneer and roll his eyes. Kevin seems oblivious to this* Did this cause any tension between you and your brother?",
                                                followUp: { 
                                                    prompt: "Kevin: No. Well, at first I thought Pete was mad at me but he assured me he wasn’t mad. That’s my bro, after all. ",
                                                    options: [
                                                        {
                                                            choice: "Thank you, that's all on that subject. *You sense some tension about this girlfriend situation that Kevin seems to be oblivious to.*"
                                                        
                                                        },
                                                    ]
                                                }
                                            },
                                        ]
                                    },
                                },
                            ]
                        }
                    
                    },
                    {
                        choice: "Ask about his father: I’m sorry to hear about the passing of your father. Were you close?",
                        followUp: { 
                            prompt: "Kevin: I was close with my father as a child. But as I got older he became more angry and cruel. I wasn’t there when he...",
                            options: [
                                {
                                    choice: "Ah yes, father-son relationships can be tough. You were still in the inheritance though, so you two must’ve had a somewhat good relationship",
                                    followUp: { 
                                        prompt: "Kevin: I guess so. Some people might say I didn’t deserve it but family is forever, you know?",
                                        options: [
                                            {
                                                choice: "Are there people who have said this",
                                                followUp: { 
                                                    prompt: "Kevin: Listen, people talk all the time. The guy died and left me some cash and land, and other people are jealous cuz they think they should’ve gotten more, but it’s none of their business. *You notice he repeatedly looked at Peter and Pigsley during this speech* Anyway, this isn’t about me, this is about that lunatic who blew our houses down. Can we talk about him?",
                                                    options: [
                                                        {
                                                            choice: "Sure, I’ve heard enough about this anyway"
                                                    
                                                        },
                                                    ]
                                                }
                                            },
                                        ]
                                    }
                                },
                            ]  
                        }
                    },
                    {
                        choice: "Ask about the footprints: You reported to police that you saw footprints the day after your house was destroyed. Has any new information been released?",
                        followUp: { 
                            prompt: "Kevin: The police say they looked like fox footprints, but I know it was the wolf!",
                            options: [
                                {
                                    choice: "But how do you know they were fox footprints?",
                                    followUp: { 
                                        prompt: "Kevin: What do you mean how do I know? He was the only person at the scene!",
                                        options: [
                                            {
                                                choice: "Are you saying you’ve never seen a fox in your neighborhood?",
                                                followUp: { 
                                                    prompt: "Well, maybe a couple, but I’m pretty sure they were wolf prints anyway!",
                                                    options: [
                                                        {
                                                            choice: " *You sense Kevin’s anger for the wolf is behind this anger. Does this footprint evidence have any credibility?* Thank you Kevin, I’ll take that into consideration."
                                                    
                                                        },
                                                    ]
                                                }
                                                
                                        
                                            },
                                        ]
                                    }
                                },
                            ]
                        }
                    },
                    {
                        choice: "Ask about the security footage: I hear you run a corner store nearby with security cameras. Did they pick up anything?",
                        followUp: { 
                            prompt: "Kevin: The wolf did it! I’m sure of it! He broke in right before he blew our homes down! He’s crazy.",
                            options: [
                                {
                                    choice: "That’s a bold accusation Mr. Bacon. Do you have any proof that Mr. Wolf tampered with the security footage?",
                                    followUp: { 
                                        prompt: "Kevin: Right after my brother left from the store, the wolf came in to “use the bathroom.” I’m sure he did it then!",
                                        options: [
                                            {
                                                choice: "Are the wires to the camera in the bathroom?", 
                                                followUp: { 
                                                    prompt: "Well… no. But, just look at him! He’s so sneaky and mean, he probably found away!",
                                                    options: [
                                                        {
                                                            choice: "*The wolf snarls at Kevin and Kevin yelps back. You bang your gavel* Order! Order! That’s enough. Let’s move on. ",
            
                                                        },
                                                    ]
                                            }
                                        }
                                        ]


                                    }
                                },

                            ]
                        }
                    },
                ]
            }
        ]
    },

    {
        name: 'Peter',
        narrative: [
            {
                prompt: "Peter Porker is expecting a fat check from someone to replace his property. If this court rules it to be so, you can expect monetary compensation for all damages. However, let’s start with some questions...",
                options: [
                    {
                        choice: "Ask about last names: I notice you and your siblings all have different last names. Why is that?",
                        followUp: {
                            prompt: "Peter: Well, I’m my father’s only biological son. Kevin and Pigsley were adopted after both of their parents died in a tornado.",
                            options: [
                                {
                                    choice: "I see. Well, you must’ve been excited to have siblings.",
                                    followUp: {
                                        prompt: "Peter: Yeah, I went from having a bedroom to myself to sleeping beneath farting Kevin. It’s the dream.",
                                        options: [
                                            {
                                                choice: "So you liked it better when you were an only child?",
                                                followUp: {
                                                    prompt: "Peter: Well, I had more stuff. But you can’t put a price on... family.",
                                                    options: [
                                                        {
                                                            choice: "You sense something behind the word “family.” Does he even like his brother and sister?* That’s certainly true. Let’smove on."
                                                        }
                                                    ]
                                                }
                                            }
                                        ]
                                    }
                                }
                            ]
                        }
                    },
                    {
                        choice: "Ask about the fire: When you called the police, you originally claimed to have seen a fire. But then you immediately changed your story to say a wolf was blowing down your homes. Why is that?",
                        followUp: { 
                            prompt: "Peter: First of all, I didn’t “change my story.” I simply thought I saw a fire but it was actually the wolf. That man right there.",
                            options: [
                                {
                                    choice: "How did you confuse a fire with a wolf?",
                                    followUp: {
                                        prompt: "Peter: Are you victim blaming me right now? A wolf destroyed my home; I don’t know why I thought it was a fire! ",
                                        options: [
                                            {
                                                choice: "Well, there’s a lot of fire being brought up in this case, why’s that?",
                                                followUp: {
                                                    prompt: "Peter: I don’t know, you’re the judge! You figure it out.",
                                                    options: [
                                                        {
                                                            choice: "Very well Mr. Porker. I intent to.  *You move on but one thing is clear. There was a fire. But where did it come from? What or Who started it?* ",
                                                        
                                                
                                                        }
                                                    ]
                                                }
                                            }
                                        ]
                                    }
                                },
                            ]  
                        }
                    },
                    {
                        choice: "Ask about the insurance: Mr. Porker, tell me more about your property insurance.",
                        followUp: { 
                            prompt: "Peter: What about it? ",
                            options: [
                                {
                                    choice: "*You see Peter fidget and take his time to think of an answer. Pigsley and Kevin look at him in anticipation* I’ll remind you: you’re under oath. Lying can result in a severe punishment.",
                                    followUp: {
                                        prompt: "Peter:  Well... No. The insurance is under my name only. ",
                                        options: [
                                            {
                                                choice: "*Kevin and Pigsley gasp.* And what is that?",
                                                followUp:{
                                                    prompt: "Peter: Well, I handle the business stuff. This is how my dad would’ve wanted it anyway.",
                                                    options: [
                                                        {
                                                            choice: "Does your insurance policy cover... fire?",
                                                            followUp:{
                                                                prompt: "Yes..",
                                                                options: [
                                                                    {
                                                                        choice: "Thank you, Peter. This information will be useful."
                                                                    }
                                                                ]

                                                            }
                                                        }
                                                    ]
                                                }

                                            }
                                        ]
                                    
                                    }
                                }
                            ]
                        }
                    },
                    {
                        choice: "Ask about his father: I’m sorry to hear about the passing of your father. I assume you two were close?",
                        followUp: { 
                            prompt: "Peter: Yes, extremely. As his only child, I considered it my duty to make sure he was happy, even in his late life.",
                            options: [
                                {
                                    choice: "That’s very noble of you. Do you think this extra responsibility should’ve earned you more in the inheritance?",
                                    followUp:{
                                        prompt: "Peter: Well... it didn’t turn out that way, so it doesn’t matter, does it? ",
                                        options: [
                                            {
                                                choice: " I think it matters quite a bit, actually.",
                                                followUp:{
                                                    prompt: "Peter: Well, I’m fine. Do I think I deserved more? Yes. But I’m more than happy to... share with my... siblings.",
                                                    options: [
                                                        {
                                                            choice: "*You sense that may not be true. Better to find out more. *"
                                                        
                                                        },
                                                    ]
                                                
                                                }
                                            }
                                        ]
                                    
                                    }
                                }
                            ]
                        }
                    },
                  
                ]
            }
        ]
    },
    {
        name: 'Pigsley',
        narrative: [
            {
                prompt: "Pigsley Hamilton wants his house back. Well while I can’t give you your house back I can promise there will be justice today. Let’s start with a few questions...",
                options: [
                    {
                        choice: "Ask about her relationship with her brothers: Do you and your brothers get along well?",
                        followUp: {
                            prompt: "Pigsley: All siblings fight but I’d say we get along pretty well. Peter is the smart one, I’m the pretty one, and Kevin is... Kevin. ",
                            options: [
                                {
                                    choice: "*You see Kevin smile before realizing this might’ve been a joke at his expense* Have you ever fought family recently?",
                                    followUp: {
                                        prompt: "Pigsley: Recently... no. Well, I remember Peter and Kevin were arguing about Kevin’s fiancé, but I think they’ve made up.",
                                        options: [
                                            {
                                                choice: "*Perhaps I should ask Peter or Kevin about this fiance* Thank you Pigsley, let’s talk about something else...",
                                            }
                                        ]
                                        
                                    
                                    }
                                }
                            ]
                        }
                    },
                    {
                        choice: "Ask about her father: I’m sorry to hear about the passing of your father. Were you close?",
                        followUp: {
                            prompt: "Pigsley: I’d say so. I didn’t do as much in his later years. Peter usually took care of that stuff, but I made sure to call at least once a week.",
                            options: [
                                {
                                    choice: "Do you agree with how your father split the inheritance? Equally 3 ways?",
                                    followUp: {
                                        prompt: "Pigsley: Yes I do. I think any other way would’ve been unfair, no matter anyone says. ",
                                        options: [
                                            {
                                                choice: "Are there people who have said this?",
                                                followUp: {
                                                    prompt: "Pigsley: Family Drama. It doesn’t matter. I think we should honor our father’s dying wish no matter what. He was a good man.  ",
                                                    options: [
                                                        {
                                                            choice: "I agree, let's move on.",
                                                            followUp: {
                                                                prompt: "*You move on but this inheritance may be a clue later on.*"
                                                            }
                                                        }
                                                    ]
                                                }
                                            }
                                        ]
                                    }
                                }
                            ]
                        }
                    },
                    {
                        choice: "Ask about her relationship with the wolf: You and the defendant have been spotted multiple times together since this incident. Why is that?",
                        followUp: {
                            prompt: "Pigsley: *Everyone in the courtroom seems shocked including her siblings. You realize this might’ve been a secret.* What-- I-- What are you talking about?",
                            options: [
                                {
                                    choice: "Oh I’m sorry. I didn’t realize it was a secret. But I must ask as it is very relevant to this case. What is your relationship with the wolf?",
                                    followUp: {
                                        prompt: "Pigsley: Well... yes. We’ve been seeing each other sometimes. At first, the idea was repulsive to me but he seems like a good guy. Mysterious... just my type.",
                                        options: [
                                            {
                                                choice: "It doesn’t bother you that you’re part of a lawsuit against your lover??",
                                                followUp: {
                                                    prompt: "Pigsley: Don’t judge me! You don’t know what you’re talking about! He’s not a bad guy...",
                                                    options: [
                                                        {
                                                            choice: "*You sense her shutting down. Better change the subject to get more information. Still, why would she sue her boyfriend? Something’s not adding up...* I’m sorry Ms.Hamilton. Let’s move on,"
                                                        }
                                                    ]
                                                }
                                            }
                                        ]
                                    }
                                }
                            ]
                        }
                    },
                    {
                        choice: "Ask about the smell of fire: You said to the police that you awoke to the smell of fire. Care to elaborate?",
                        followUp: {
                            prompt: "*You see her look at Peter in a nervous way before responding* Pigsley: Right... yes, I thought I smelled smoke but I might’ve been mistaken. ",
                            options: [
                                {
                                    choice: "My house had just been destroyed! I was clearly confused.",
                                    followUp: {
                                        prompt: "*You sense she’s not telling the full truth here. You sense you won’t get any more info by continuing on this path. However, this fire is something to keep in mind.*  ",
                                        options: [
                                            {
                                                choice: "I see. Thank you, Pigsley. *You sense something is off about this fire. It’s time to investigate.* Okay, thank you Ms. Hamilton. We’ll move on."
                                            }
                                        ]
                                    }
                                }
                            ]
                        }
                    }
                ]
            }
        ]
    },
    
    {
        name: 'Big Bad Wolf:',
        narrative: [
            {
                prompt: "Okay Mister... 'The Wolf' from what I am seeing on your papers... you’re being accused of a violent blowing that involved the destruction of two of these pigs’ homes. How do you plead?",
                options: [
                    {
                        choice: "Big Bad Wolf: Well, I did blow down their houses. But I’m not guilty.",
                        followUp: {
                            prompt: "Big Bad Wolf: How can both be true?",
                            options:[ 
                                {
                                    choice:"I don’t know. Maybe something with a fire, maybe something with insurance, maybe something with me trying to protect my home?",
                                    followUp: {
                                        prompt: "Big Bad Wolf: Do you plan on answering any questions or providing any more detail?",
                                        options: [
                                            {
                                                choice: "Big Bad Wolf: Nope. I don’t believe in any of this court nonsense. I’m a sovereign animal. You want the truth? Figure it out. You want to throw the 'bad guy' behind bars, do it. I don’t care.*You sense the Wolf isn’t going to answer any questions, but you don’t think he’s 100% guilty. You’ll have to use the evidence you have to make a decision now.*"
                                            }
                                        ]

                        }
                    }
                        ]
                        }
                    }
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
        displayNarrative(option.followUp || option);
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
        witnessesContainer.style.display = 'flex';
        witnessesContainer.flexDirection = 'column';
    
        const imageMap = {
            'Kevin': 'kevin.jpg',
            'Peter': 'peter.png',
            'Pigsley': 'piglsley.png',
            'Big Bad Wolf': 'wolf.jpg' 
        };
    
        witnesses.forEach(witness => {
            const witnessDiv = document.createElement('div');
            witnessDiv.classList.add('witness');
    
            const button = document.createElement('button');
            button.textContent = witness.name;
            button.onclick = () => handleOption({ followUp: witness.narrative[0] });
            witnessDiv.appendChild(button);
    
            const img = document.createElement('img');
          
            img.src = `images/${imageMap[witness.name]}`;
            img.alt = `Photo of ${witness.name}`;
            img.style.width = '100px';
            img.style.height = '100px';
            img.style.marginTop = '5px';
            witnessDiv.appendChild(img);
    
            witnessesContainer.appendChild(witnessDiv);
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

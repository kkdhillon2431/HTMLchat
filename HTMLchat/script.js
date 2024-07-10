// questions database
const questionsDB = [
    {
        question: "hi",
        answer:"hi"
    },
    {
      question: "What is the institute's mission statement?",
      answer: "Our mission is to provide quality education to our students."
    },
    {
      question: "How do I register for a course?",
      answer: "You can register for a course through our online portal or by visiting the registrar's office."
    },
    {
      question: "What are the institute's office hours?",
      answer: "Our office hours are Monday to Friday, 9am to 5pm."
    },
    {
      question: "How do I contact the institute's administration?",
      answer: "You can contact us through our website or by calling (123) 456-7890."
    },
   {
    question:"can you tell me about courses running in institute?",
    answer:"yes (These are the courses running in the institute = web develoapment ,cyber security, app develoapment, graphic designing",
   },
  ];
  
  // function to search for a question in the database
  function searchQuestion(question) {
    for (let i = 0; i < questionsDB.length; i++) {
      if (questionsDB[i].question.toLowerCase() === question.toLowerCase()) {
        return questionsDB[i].answer;
      }
    }
    return "I don't know.";
  }
  
  // chatbot code
  const chatContainer = document.querySelector('.chat-container');
  const chatMessages = document.querySelector('.chat-messages');
  const userInput = document.querySelector('#user-input');
  const sendButton = document.querySelector('#send-button');
  
  let botResponse = '';
  
  sendButton.addEventListener('click', () => {
    const userInputValue = userInput.value.trim();
    if (userInputValue !== '') {
      const userMessage = document.createElement('div');
      userMessage.className = 'message';
      userMessage.innerHTML = `<p>You: ${userInputValue}</p>`;
      chatMessages.appendChild(userMessage);
  
      botResponse = searchQuestion(userInputValue);
      const botMessage = document.createElement('div');
      botMessage.className = 'message';
      botMessage.innerHTML = `<p>Bot: ${botResponse}</p>`;
      chatMessages.appendChild(botMessage);
  
      userInput.value = '';
      chatContainer.scrollTop = chatContainer.scrollHeight;
    }
  });
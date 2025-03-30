document.addEventListener('DOMContentLoaded', function() {
    // Existing DOM elements and event listeners remain the same
    // ... (all previous code remains unchanged until the restartSimulation function)

    // New DOM elements for chat
    const chatScreen = document.getElementById('chatScreen');
    const backToSimulatorBtn = document.getElementById('backToSimulatorBtn');
    const userInput = document.getElementById('userInput');
    const sendBtn = document.getElementById('sendBtn');
    const chatMessages = document.getElementById('chatMessages');

    // Modified restartSimulation function
    function restartSimulation() {
        resultsScreen.style.display = 'none';
        chatScreen.style.display = 'block'; // Changed from welcomeScreen to chatScreen
    }

    // New event listeners for chat
    backToSimulatorBtn.addEventListener('click', function() {
        chatScreen.style.display = 'none';
        welcomeScreen.style.display = 'block';
    });

    sendBtn.addEventListener('click', sendMessage);
    userInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            sendMessage();
        }
    });

    // New chat functions
    function sendMessage() {
        const message = userInput.value.trim();
        if (message) {
            addUserMessage(message);
            userInput.value = '';
            simulateAIResponse(message);
        }
    }

    function addUserMessage(text) {
        const messageDiv = document.createElement('div');
        messageDiv.className = 'message user-message';
        messageDiv.innerHTML = `<p>${text}</p>`;
        chatMessages.appendChild(messageDiv);
        chatMessages.scrollTop = chatMessages.scrollHeight;
    }

    function addAIMessage(text) {
        const messageDiv = document.createElement('div');
        messageDiv.className = 'message ai-message';
        messageDiv.innerHTML = `<p>${text}</p>`;
        chatMessages.appendChild(messageDiv);
        chatMessages.scrollTop = chatMessages.scrollHeight;
    }

    function simulateAIResponse(userMessage) {
        // Simple response logic - in a real app you'd connect to an AI API
        setTimeout(() => {
            let response;
            const lowerMessage = userMessage.toLowerCase();
            
            if (lowerMessage.includes('funding') || lowerMessage.includes('money') || lowerMessage.includes('investment')) {
                response = "Funding strategy depends on your business model and growth goals. Bootstrapping maintains control but limits speed, while external funding accelerates growth but adds pressure. Based on your simulation, I'd recommend...";
            } else if (lowerMessage.includes('market') || lowerMessage.includes('customer'))) {
                response = "Your market size selection impacts your marketing strategy. Smaller markets benefit from targeted approaches, while larger markets require broader campaigns. From your simulation...";
            } else if (lowerMessage.includes('team') || lowerMessage.includes('employee'))) {
                response = "Team size affects your operational capacity and culture. Small teams are agile, while larger teams enable specialization. Your simulation suggests...";
            } else if (lowerMessage.includes('pricing') || lowerMessage.includes('price'))) {
                response = "Pricing strategy is crucial for profitability and positioning. Your chosen approach affects customer perception and margins. Based on your selection...";
            } else if (lowerMessage.includes('risk') || lowerMessage.includes('challenge'))) {
                response = "Every business faces risks. Your difficulty setting and black swan configuration indicate potential challenges like...";
            } else {
                response = "That's an interesting question about entrepreneurship. Based on your simulation configuration, I'd recommend focusing on...";
            }
            
            addAIMessage(response);
        }, 1000);
    }

    // All other existing functions remain exactly the same
    // ...
});

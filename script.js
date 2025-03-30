document.addEventListener('DOMContentLoaded', function() {
    // 原有所有变量声明保持不变
    const chatContainer = document.getElementById('chatContainer');
    const closeChatBtn = document.getElementById('closeChatBtn');
    const chatMessages = document.getElementById('chatMessages');
    const userMessageInput = document.getElementById('userMessage');
    const sendMessageBtn = document.getElementById('sendMessageBtn');
    const openChatBtn = document.getElementById('openChatBtn');

    // 原有所有事件监听器保持不变
    closeChatBtn.addEventListener('click', closeChat);
    openChatBtn.addEventListener('click', openChat);
    sendMessageBtn.addEventListener('click', sendMessage);
    userMessageInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            sendMessage();
        }
    });

    // 原有所有函数保持不变，只添加以下新函数
    function openChat() {
        chatContainer.style.display = 'block';
    }

    function closeChat() {
        chatContainer.style.display = 'none';
    }

    function sendMessage() {
        const message = userMessageInput.value.trim();
        if (message) {
            addMessage(message, 'user');
            userMessageInput.value = '';
            
            setTimeout(() => {
                const aiResponse = generateAIResponse(message);
                addMessage(aiResponse, 'ai');
            }, 1000);
        }
    }

    function addMessage(text, sender) {
        const messageDiv = document.createElement('div');
        messageDiv.classList.add('message', sender + '-message');
        messageDiv.innerHTML = `<p>${text}</p>`;
        chatMessages.appendChild(messageDiv);
        chatMessages.scrollTop = chatMessages.scrollHeight;
    }

    function generateAIResponse(message) {
        const lowerMessage = message.toLowerCase();
        
        if (lowerMessage.includes('funding') || lowerMessage.includes('investment')) {
            return "Funding strategy depends on your business model and growth goals. Bootstrapping maintains control, while external funding can accelerate growth. What specific aspect of funding are you considering?";
        } else if (lowerMessage.includes('market') || lowerMessage.includes('customer')) {
            return "Market selection is crucial. Consider factors like size, growth potential, and competition. Have you conducted market research?";
        } else if (lowerMessage.includes('team') || lowerMessage.includes('hire')) {
            return "Building the right team is key. Start with core competencies and expand as needed. What roles are you looking to fill first?";
        } else if (lowerMessage.includes('price') || lowerMessage.includes('cost')) {
            return "Pricing should reflect value, costs, and competition. Have you analyzed your competitors' pricing strategies?";
        } else if (lowerMessage.includes('risk') || lowerMessage.includes('challenge')) {
            return "Every business faces risks. Identifying them early helps with mitigation. What specific risks concern you most?";
        } else {
            return "That's an interesting question about entrepreneurship. Could you provide more details so I can give you a more specific answer?";
        }
    }
});

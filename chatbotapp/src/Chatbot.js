import React from 'react';
import { Chatbot } from 'react-chatbot-kit';
import useChatMessages from './hooks/useChatMessages';
import './Chatbot.css'; // Importing CSS for styling
import config from './config'; // Import the configuration for the chatbot
import actionProvider from './ChatbotActionProvider'; // Import the action provider
import messageParser from './MessageParser'; // Import the message parser

const ChatbotComponent = () => {
    const { messages, addMessage } = useChatMessages();

    const handleUserMessage = (message) => {
        addMessage({ text: message, isUser: true });
    };

    return (
        <div>
            <Chatbot
                config={config}
                actionProvider={actionProvider}
                messageParser={messageParser}
                handleUserMessage={handleUserMessage}
            />
            <div>
                {messages.map((message, index) => (
                    <div key={index} className={message.isUser ? 'user-message' : 'bot-message'}>
                        {message.text}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ChatbotComponent;




import React, { useState } from 'react';
import './MessagesPage.css';

const MessagingPage = () => {
  const [conversations,] = useState([
    { id: 1, name: 'John Doe', avatar: 'https://via.placeholder.com/40' },
    { id: 2, name: 'Jane Smith', avatar: 'https://via.placeholder.com/40' },
    { id: 3, name: 'Alice Johnson', avatar: 'https://via.placeholder.com/40' }
  ]);

  const [messages, setMessages] = useState({
    1: [
      { id: 1, text: 'Hi John, how are you?', sender: 'other' },
      { id: 2, text: 'I\'m good, thanks! How about you?', sender: 'user' }
    ],
    2: [
      { id: 1, text: 'Hey Jane, what\'s up?', sender: 'user' },
      { id: 2, text: 'Not much, just chilling.', sender: 'other' }
    ],
    3: []
  });

  const [selectedConversation, setSelectedConversation] = useState(null);
  const [newMessage, setNewMessage] = useState('');

  const handleSelectConversation = (conversationId) => {
    setSelectedConversation(conversationId);
  };

  const handleSendMessage = () => {
    if (!newMessage.trim() || !selectedConversation) return;
    const messageId = messages[selectedConversation].length + 1;
    const message = { id: messageId, text: newMessage, sender: 'user' };
    setMessages({
      ...messages,
      [selectedConversation]: [...messages[selectedConversation], message]
    });
    setNewMessage('');

    // Simulate server reply after sending message
    setTimeout(() => {
      const replyMessage = {
        id: messageId + 1,
        text: `This is a server reply to your message: "${newMessage}"`,
        sender: 'other'
      };
      setMessages({
        ...messages,
        [selectedConversation]: [...messages[selectedConversation], replyMessage]
      });
    }, 1000); // Simulate delay of 1 second
  };

  return (
    <div className="messaging-page">
      <div className="conversation-list">
        <h2>Conversations</h2>
        <ul>
          {conversations.map(conversation => (
            <li
              key={conversation.id}
              onClick={() => handleSelectConversation(conversation.id)}
              className={selectedConversation === conversation.id ? 'active' : ''}
            >
              <img src={conversation.avatar} alt="Avatar" className="avatar" />
              {conversation.name}
            </li>
          ))}
        </ul>
      </div>
      <div className="message-container">
        <div className="message-header">
          {selectedConversation && (
            <>
              <img src={conversations.find(c => c.id === selectedConversation).avatar} alt="Avatar" className="avatar" />
              <div className="name">{conversations.find(c => c.id === selectedConversation).name}</div>
            </>
          )}
        </div>
        <div className="message-history">
          {selectedConversation ? (
            <ul>
              {messages[selectedConversation].map(message => (
                <li key={message.id} className={message.sender === 'user' ? 'sent-message' : 'received-message'}>
                  {message.text}
                </li>
              ))}
            </ul>
          ) : (
            <p>Select a conversation to start chatting</p>
          )}
        </div>
        {selectedConversation && (
          <div className="new-message">
            <input
              type="text"
              placeholder="Type your message..."
              value={newMessage}
              onChange={(e) => setNewMessage(e.target.value)}
            />
            <button onClick={handleSendMessage}>Send</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default MessagingPage;

"use client";


import React, { useState } from 'react';
import { useSelector } from 'react-redux';

const ChatsPage = () => {
    const accessToken = useSelector((state) => state.auth.accessToken);
    const [response, setResponse] = useState(null);
    const [error, setError] = useState(null);
    const [chatId, setChatId] = useState('');
    const [sender, setSender] = useState('');
    const [message, setMessage] = useState('');
    const [messages, setMessages] = useState([]);

    const createChat = async () => {
        try {
            const res = await fetch('http://localhost:5000/api/v1/chat/create', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${accessToken}`,
                },
                body: JSON.stringify({}),
            });

            const data = await res.json();

            if (res.ok) {
                setResponse(data);
            } else {
                throw new Error(data.message || 'Something went wrong');
            }
        } catch (err) {
            setError(err.message);
        }
    };

    const getUserChats = async () => {
        try {
            const res = await fetch('http://localhost:5000/api/v1/chat/user', {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${accessToken}`,
                },
            });

            const data = await res.json();

            if (res.ok) {
                setResponse(data);
            } else {
                throw new Error(data.message || 'Something went wrong');
            }
        } catch (err) {
            setError(err.message);
        }
    };

    const sendMessage = async () => {
        try {
            const res = await fetch(`http://localhost:5000/api/v1/chat/send`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${accessToken}`,
                },
                body: JSON.stringify({ sender, content: message, chatId: chatId }),
            });

            const data = await res.json();

            if (res.ok) {
                setResponse(data);
            } else {
                throw new Error(data.message || 'Something went wrong');
            }
        } catch (err) {
            setError(err.message);
        }
    };

    

      const getChatMessages = async () => {
        try {
          const res = await fetch(`http://localhost:5000/api/v1/chat/${chatId}/messages`, {
            method: 'GET',
            headers: {
              'Content-Type': 'application/json',
              Authorization: `Bearer ${accessToken}`,
            },
          });
    
          const data = await res.json();
    
          if (res.ok) {
            setMessages(data.data);
          } else {
            throw new Error(data.message || 'Something went wrong');
          }
        } catch (err) {
          setError(err.message);
        }
      };

    return (
        <div style={{ padding: '20px', backgroundColor: '#FFFFFF' }}>

            <h1>Chats</h1>
            <button onClick={createChat} style={{ padding: '10px', marginRight: '10px' }}>Create Chat</button>
            <button onClick={getUserChats} style={{ padding: '10px', marginRight: '10px' }}>Get User Chats</button>
            <div style={{ marginBottom: '10px' }}>
                <label>Chat ID:</label>
                <input type="text" value={chatId} onChange={(e) => setChatId(e.target.value)} />
            </div>
            <div style={{ marginBottom: '10px' }}>
                <label>Sender:</label>
                <input type="text" value={sender} onChange={(e) => setSender(e.target.value)} />
            </div>
            <div style={{ marginBottom: '10px' }}>
                <label>Message:</label>
                <input type="text" value={message} onChange={(e) => setMessage(e.target.value)} />
            </div>
            <button onClick={sendMessage} style={{ padding: '10px' }}>Send Message</button>
            <button onClick={getChatMessages} style={{ padding: '10px', marginTop: '20px' }}>Get Messages</button>
      {response && (
        <div style={{ marginTop: '20px' }}>
          <h2>Response:</h2>
          <pre>{JSON.stringify(response, null, 2)}</pre>
        </div>
      )}
      <div style={{ marginTop: '20px' }}>
        {messages.map((message, index) => (
          <div key={index}>
            <p><strong>Sender:</strong> {message.sender}</p>
            <p><strong>Content:</strong> {message.content}</p>
          </div>
        ))}
      </div>
            {response && (
                <div style={{ marginTop: '20px' }}>
                    <h2>Response:</h2>
                    <pre>{JSON.stringify(response, null, 2)}</pre>
                </div>
            )}
            {error && (
                <div style={{ marginTop: '20px', color: 'red' }}>
                    <h2>Error:</h2>
                    <p>{error}</p>
                </div>
            )}
        </div>
    );
};

export default ChatsPage;

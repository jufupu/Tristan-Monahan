   // ChatComponent.js
   import React, { useState } from 'react';

   const ChatComponent = () => {
       const [message, setMessage] = useState('');
       const [chatHistory, setChatHistory] = useState([]);

       const sendMessage = async () => {
           try {
               const response = await fetch('http://localhost:5000/api/chat', {
                   method: 'POST',
                   headers: { 'Content-Type': 'application/json' },
                   body: JSON.stringify({ message }),
               });

               if (!response.ok) {
                   // Handle non-JSON error response
                   const errorText = await response.text();
                   throw new Error(errorText);
               }

               const data = await response.json();
               setChatHistory([...chatHistory, { user: message, assistant: data.reply }]);
           } catch (error) {
               console.error('Error:', error.message);
               setChatHistory([...chatHistory, { user: message, assistant: 'Error communicating with the server.' }]);
           } finally {
               setMessage('');
           }
       };

       return (
           <div>
               <div>
                   {chatHistory.map((chat, index) => (
                       <div key={index}>
                           <strong>You:</strong> {chat.user}
                           <br />
                           <strong>Assistant:</strong> {chat.assistant}
                       </div>
                   ))}
               </div>
               <input
                   type="text"
                   value={message}
                   onChange={(e) => setMessage(e.target.value)}
                   placeholder="Type your message..."
               />
               <button onClick={sendMessage}>Send</button>
           </div>
       );
   };

   export default ChatComponent;
import React, { useState, useRef, useEffect } from 'react';

export default function ChatWidget({ onSend }) {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([
    { sender: 'zayna', text: 'Hi! I am Zayna, your AI assistant. How can I help you find your dream home in Dubai?' }
  ]);
  const messagesEndRef = useRef(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const handleSend = async (e) => {
    e.preventDefault();
    if (!input.trim()) return;
    const userMsg = { sender: 'user', text: input };
    setMessages((msgs) => [...msgs, userMsg]);
    setInput('');
    if (onSend) {
      const aiMsg = await onSend(input);
      setMessages((msgs) => [...msgs, { sender: 'zayna', text: aiMsg }]);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 w-full max-w-xs z-50">
      <div className="bg-white rounded-xl shadow-lg flex flex-col h-96">
        <div className="flex-1 overflow-y-auto p-4 space-y-2">
          {messages.map((msg, idx) => (
            <div key={idx} className={`text-sm px-3 py-2 rounded-lg max-w-[80%] ${msg.sender === 'user' ? 'bg-blue-100 self-end text-right' : 'bg-blue-600 text-white self-start'}`}>
              {msg.text}
            </div>
          ))}
          <div ref={messagesEndRef} />
        </div>
        <form onSubmit={handleSend} className="flex border-t p-2 bg-gray-50">
          <input
            className="flex-1 px-3 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring focus:border-blue-400 text-sm"
            type="text"
            placeholder="Ask Noura..."
            value={input}
            onChange={e => setInput(e.target.value)}
          />
          <button type="submit" className="ml-2 px-4 py-2 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition text-sm">Send</button>
        </form>
      </div>
    </div>
  );
}

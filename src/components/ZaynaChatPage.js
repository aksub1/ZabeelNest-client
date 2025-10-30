import React, { useState, useRef, useEffect } from 'react';

import { Link } from 'react-router-dom';

export default function ZaynaChatPage({ onSend }) {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([
    { sender: 'zayna', text: 'Hi! I am Zayna, your AI assistant. How can I help you find your dream home in Dubai?' }
  ]);
  const messagesEndRef = useRef(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const handleSend = async (e) => {
    e.preventDefault();
    if (!input.trim()) return;
    const userMsg = { sender: 'user', text: input };
    setMessages((msgs) => [...msgs, userMsg]);
    setInput('');
    setLoading(true);
    if (onSend) {
      const aiMsg = await onSend(input);
      setMessages((msgs) => [...msgs, { sender: 'zayna', text: aiMsg }]);
    }
    setLoading(false);
  };

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-blue-50 to-blue-200">
      {/* Top Navigation Bar */}
      <nav className="w-full flex items-center justify-between px-8 py-4 bg-white/80 shadow-sm backdrop-blur sticky top-0 z-10">
        <Link to="/" className="text-2xl font-extrabold text-blue-900 tracking-tight hover:text-blue-600 transition">ZabeelNest<span className="text-blue-500">.com</span></Link>
        <ul className="flex gap-8 text-blue-900 font-medium text-lg">
          <li><Link to="/zayna" className="hover:text-blue-600 transition">Ask Zayna AI</Link></li>
          <li><Link to="/" className="hover:text-blue-600 transition">Listings</Link></li>
          <li><a href="#about" className="hover:text-blue-600 transition">About</a></li>
          <li><a href="#contact" className="hover:text-blue-600 transition">Contact</a></li>
        </ul>
      </nav>
      {/* Add space after nav bar */}
      <div className="h-8" />
      <div className="w-full flex flex-col items-center flex-1">
        <div className="w-full max-w-2xl bg-white rounded-xl shadow-lg flex flex-col flex-1 min-h-[70vh]" style={{height: 'calc(100vh - 120px)'}}>
          {/* Heading and description */}
          <div className="px-8 pt-8 pb-2 text-center">
            <h1 className="text-3xl font-bold text-blue-900 mb-2">Ask Zayna AI</h1>
            <p className="text-gray-600 text-base mb-2">Zayna is your AI-powered Dubai real estate assistant. Ask about properties, neighborhoods, prices, investment tips, or anything else to help you find your dream home in Dubai!</p>
          </div>
          <div className="flex-1 overflow-y-auto p-6 space-y-4">
            {messages.map((msg, idx) => (
              <div key={idx} className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`px-4 py-2 rounded-2xl max-w-[75%] text-base ${msg.sender === 'user' ? 'bg-blue-100 text-blue-900' : 'bg-blue-600 text-white'}`}>
                  {msg.text}
                </div>
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>
          <form onSubmit={handleSend} className="flex border-t p-4 bg-gray-50">
            <input
              className="flex-1 px-4 py-3 rounded-2xl border border-gray-300 focus:outline-none focus:ring focus:border-blue-400 text-base"
              type="text"
              placeholder="Ask Zayna anything about Dubai real estate..."
              value={input}
              onChange={e => setInput(e.target.value)}
              disabled={loading}
            />
            <button type="submit" className="ml-3 px-6 py-3 bg-blue-600 text-white rounded-2xl font-semibold hover:bg-blue-700 transition text-base" disabled={loading}>
              {loading ? '...' : 'Send'}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

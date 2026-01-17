
import React, { useState, useRef, useEffect } from 'react';
import { MessageSquare, X, Send, Bot, User } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChatMessage } from '../types';
import { sendMessageToGemini } from '../services/geminiService';

// Use any to bypass motion component type errors in this environment
const MotionDiv = motion.div as any;
const MotionButton = motion.button as any;

const ChatWidget: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    { role: 'model', text: "Hi! I'm Isbah's AI Assistant. Ask me anything about his skills or projects." }
  ]);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMessage: ChatMessage = { role: 'user', text: input };
    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);

    const responseText = await sendMessageToGemini(messages, input);
    
    setMessages(prev => [...prev, { role: 'model', text: responseText }]);
    setIsLoading(false);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') handleSend();
  };

  return (
    <>
      {/* FAB */}
      <MotionButton
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        whileHover={{ scale: 1.1 }}
        className="fixed bottom-6 right-6 w-14 h-14 bg-accent hover:bg-accentHover text-white rounded-full shadow-2xl flex items-center justify-center z-50 focus:outline-none"
        onClick={() => setIsOpen(true)}
      >
        <MessageSquare size={24} />
      </MotionButton>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <MotionDiv
            initial={{ opacity: 0, y: 100, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 100, scale: 0.9 }}
            className="fixed bottom-24 right-6 w-[90vw] md:w-[400px] h-[500px] bg-secondary border border-slate-700 rounded-2xl shadow-2xl flex flex-col overflow-hidden z-50"
          >
            {/* Header */}
            <div className="bg-primary p-4 border-b border-slate-700 flex justify-between items-center">
              <div className="flex items-center gap-2">
                <div className="p-1.5 bg-accent/20 rounded-lg">
                  <Bot size={20} className="text-accent" />
                </div>
                <div>
                    <h3 className="font-bold text-slate-100">AI Assistant</h3>
                    <p className="text-xs text-slate-400">Powered by Gemini 3</p>
                </div>
              </div>
              <button 
                onClick={() => setIsOpen(false)}
                className="text-slate-400 hover:text-white transition-colors"
              >
                <X size={20} />
              </button>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4">
              {messages.map((msg, idx) => (
                <div 
                  key={idx} 
                  className={`flex gap-3 ${msg.role === 'user' ? 'flex-row-reverse' : 'flex-row'}`}
                >
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${msg.role === 'user' ? 'bg-slate-700' : 'bg-accent/20'}`}>
                    {msg.role === 'user' ? <User size={16} /> : <Bot size={16} className="text-accent" />}
                  </div>
                  <div className={`p-3 rounded-2xl max-w-[80%] text-sm ${msg.role === 'user' ? 'bg-accent text-white rounded-tr-none' : 'bg-primary border border-slate-700 text-slate-200 rounded-tl-none'}`}>
                    {msg.text}
                  </div>
                </div>
              ))}
              {isLoading && (
                <div className="flex gap-3">
                   <div className="w-8 h-8 rounded-full bg-accent/20 flex items-center justify-center">
                     <Bot size={16} className="text-accent" />
                   </div>
                   <div className="bg-primary border border-slate-700 p-3 rounded-2xl rounded-tl-none flex items-center gap-1">
                     <span className="w-2 h-2 bg-slate-400 rounded-full animate-bounce"></span>
                     <span className="w-2 h-2 bg-slate-400 rounded-full animate-bounce delay-100"></span>
                     <span className="w-2 h-2 bg-slate-400 rounded-full animate-bounce delay-200"></span>
                   </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Input */}
            <div className="p-4 bg-primary border-t border-slate-700">
              <div className="flex gap-2">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="Ask about Isbah..."
                  className="flex-1 bg-secondary border border-slate-700 rounded-lg px-4 py-2 text-slate-200 focus:outline-none focus:border-accent"
                />
                <button 
                  onClick={handleSend}
                  disabled={isLoading}
                  className="p-2 bg-accent hover:bg-accentHover text-white rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <Send size={20} />
                </button>
              </div>
            </div>
          </MotionDiv>
        )}
      </AnimatePresence>
    </>
  );
};

export default ChatWidget;

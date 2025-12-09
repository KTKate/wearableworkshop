import { useState } from 'react';
import hrQAData from '../data/hrQA.json';

const Chatbot = () => {
  const [messages, setMessages] = useState([
    {
      text: "Hello! I'm the HR Assistant. How can I help you today? I can answer questions about time off, remote work, benefits, DEI, IT support, and general HR policies.",
      sender: 'bot'
    }
  ]);
  const [inputValue, setInputValue] = useState('');

  // Extract quick questions from various categories
  const quickQuestions = [
    "How do I request time off?",
    "What are the remote work policies?",
    "How do I enroll in benefits?",
    "Who do I contact for IT support?",
    "How much PTO do I get?",
    "Can I work from another state/country?",
    "What is the company's commitment to DEI?",
    "What should I expect on my first day?"
  ];

  // Function to calculate similarity between two strings
  const calculateSimilarity = (str1, str2) => {
    const s1 = str1.toLowerCase().trim();
    const s2 = str2.toLowerCase().trim();

    // Exact match
    if (s1 === s2) return 1.0;

    // Contains match
    if (s1.includes(s2) || s2.includes(s1)) return 0.8;

    // Word overlap
    const words1 = s1.split(/\s+/);
    const words2 = s2.split(/\s+/);

    let matchCount = 0;
    words1.forEach(word1 => {
      if (word1.length > 3) { // Only count words longer than 3 characters
        words2.forEach(word2 => {
          if (word1 === word2 || word1.includes(word2) || word2.includes(word1)) {
            matchCount++;
          }
        });
      }
    });

    const maxWords = Math.max(words1.length, words2.length);
    return matchCount / maxWords;
  };

  const getResponse = (question) => {
    let bestMatch = null;
    let bestScore = 0;

    // Search through all Q&A pairs
    hrQAData.hrChatbotQA.forEach(category => {
      category.questions.forEach(qa => {
        const score = calculateSimilarity(question, qa.question);
        if (score > bestScore) {
          bestScore = score;
          bestMatch = qa;
        }
      });
    });

    // Return the best match if confidence is high enough
    if (bestMatch && bestScore > 0.3) {
      return bestMatch.answer;
    }

    return "I'm not sure about that specific question. Please contact HR directly at hr@hormoniq.com or call ext. 5000 for personalized assistance. You can also browse our policies page for more information.";
  };

  const handleSend = () => {
    if (!inputValue.trim()) return;

    const userMessage = {
      text: inputValue,
      sender: 'user'
    };

    setMessages([...messages, userMessage]);

    setTimeout(() => {
      const botResponse = {
        text: getResponse(inputValue),
        sender: 'bot'
      };
      setMessages(prev => [...prev, botResponse]);
    }, 500);

    setInputValue('');
  };

  const handleQuickQuestion = (question) => {
    setInputValue(question);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSend();
    }
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-gray-800 mb-4">
        HR Chatbot
      </h1>
      <p className="text-xl text-gray-600 mb-8">
        Get instant answers to common HR questions
      </p>

      <div className="bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="bg-blue-600 text-white px-6 py-4">
          <h2 className="text-xl font-semibold">Chat with HR Assistant</h2>
        </div>

        <div className="h-96 overflow-y-auto p-6 bg-gray-50">
          {messages.map((message, index) => (
            <div
              key={index}
              className={`mb-4 flex ${
                message.sender === 'user' ? 'justify-end' : 'justify-start'
              }`}
            >
              <div
                className={`max-w-xs lg:max-w-md px-4 py-2 rounded-lg ${
                  message.sender === 'user'
                    ? 'bg-blue-600 text-white'
                    : 'bg-white text-gray-800 border border-gray-200'
                }`}
              >
                {message.text}
              </div>
            </div>
          ))}
        </div>

        <div className="p-4 bg-white border-t border-gray-200">
          <div className="mb-3">
            <p className="text-sm text-gray-600 mb-2">Quick questions:</p>
            <div className="flex flex-wrap gap-2">
              {quickQuestions.map((question, index) => (
                <button
                  key={index}
                  onClick={() => handleQuickQuestion(question)}
                  className="text-sm px-3 py-1 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-full transition-colors"
                >
                  {question}
                </button>
              ))}
            </div>
          </div>
          <div className="flex gap-2">
            <input
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="Type your question..."
              className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button
              onClick={handleSend}
              className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-semibold"
            >
              Send
            </button>
          </div>
        </div>
      </div>

      <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 mt-8">
        <p className="text-yellow-700">
          This chatbot provides general information. For specific questions about
          your account or sensitive matters, please contact HR directly.
        </p>
      </div>
    </div>
  );
};

export default Chatbot;

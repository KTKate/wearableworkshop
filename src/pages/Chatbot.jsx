import { useState } from 'react';

const Chatbot = () => {
  const [messages, setMessages] = useState([
    {
      text: "Hello! I'm the HR Assistant. How can I help you today?",
      sender: 'bot'
    }
  ]);
  const [inputValue, setInputValue] = useState('');

  const quickQuestions = [
    "How do I request time off?",
    "What are the remote work policies?",
    "How do I enroll in benefits?",
    "Who do I contact for IT support?"
  ];

  const getResponse = (question) => {
    const responses = {
      "how do i request time off": "To request time off, log into the HR portal, navigate to 'Time Off' section, select the dates you need, and submit your request. Your manager will receive a notification for approval.",
      "what are the remote work policies": "Employees can work remotely up to 3 days per week with manager approval. You must maintain availability during core business hours (10 AM - 3 PM) and meet all performance expectations.",
      "how do i enroll in benefits": "Benefits enrollment opens during your first week and annually during open enrollment (typically in November). Access the benefits portal through the HR system to review options and make selections.",
      "who do i contact for it support": "For IT support, email support@company.com or call ext. 4357. For urgent issues, you can also use the IT help desk chat available 24/7 on the company intranet."
    };

    const normalizedQuestion = question.toLowerCase().trim();
    const response = responses[normalizedQuestion];

    if (response) {
      return response;
    }

    return "I'm not sure about that specific question. Please contact HR directly at hr@company.com or call ext. 5000 for personalized assistance.";
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

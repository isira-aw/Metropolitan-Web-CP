import { useState, useRef, useEffect } from "react";
import { MessageCircle, X, Send, Bot, User, Maximize2, Minimize2 } from "lucide-react";

interface Message {
  id: string;
  text: string;
  sender: "user" | "bot";
  timestamp: Date;
}

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || "";

async function sendChatMessage(message: string): Promise<string> {
  const response = await fetch(`${API_BASE_URL}/api/chatbot/chat`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ message }),
  });
  if (!response.ok) {
    throw new Error("Failed to get response");
  }
  const data = await response.json();
  return data.message;
}

const WELCOME_MESSAGE: Message = {
  id: "welcome",
  text: "Hello! I'm Metropolitan's virtual assistant. How can I help you today?",
  sender: "bot",
  timestamp: new Date(),
};

export function ChatbotWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([WELCOME_MESSAGE]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const [showAskMe, setShowAskMe] = useState(false);

  useEffect(() => {
    if (isOpen) {
      messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
      inputRef.current?.focus();
    }
  }, [isOpen, messages]);

  useEffect(() => {
    const interval = setInterval(() => {
      setShowAskMe(true);

      setTimeout(() => {
        setShowAskMe(false);
      }, 2000); // show for 2 seconds
    }, 7000); // trigger every 5 seconds

    return () => clearInterval(interval);
  }, []);

  // Reset fullscreen when chat is closed
  useEffect(() => {
    if (!isOpen) setIsFullscreen(false);
  }, [isOpen]);

  const handleClose = () => {
    setIsOpen(false);
    setIsFullscreen(false);
  };

  const handleSend = async () => {
    const text = input.trim();
    if (!text || isLoading) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text,
      sender: "user",
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setIsLoading(true);

    try {
      const botText = await sendChatMessage(text);
      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: botText,
        sender: "bot",
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, botMessage]);
    } catch {
      const errorMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: "Sorry, I'm having trouble connecting right now. Please try again later.",
        sender: "bot",
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
      {/* Chat window */}
      {isOpen && (
        <div
          className={
            isFullscreen
              ? "fixed inset-0 z-50 bg-white flex flex-col overflow-hidden"
              : "w-80 sm:w-96 bg-white rounded-2xl shadow-2xl border border-gray-200 flex flex-col overflow-hidden"
          }
          style={isFullscreen ? undefined : { height: "66.66vh" }}
        >
          {/* Header */}
          <div className=" px-4 py-3 flex items-center justify-between border-b border-blue-800 ">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">
                <Bot className="w-5 h-5 text-blue-800" />
              </div>
              <div>
                <p className="text-blue-800 font-semibold text-sm">Metropolitan Assistant</p>
              </div>
            </div>
            <div className="flex items-center gap-1">
              {/* Fullscreen toggle — mobile only */}
              <button
                onClick={() => setIsFullscreen((v) => !v)}
                className="sm:hidden text-blue-800 hover:text-red-500 transition-colors p-1 rounded-full hover:bg-white/10"
                aria-label={isFullscreen ? "Exit fullscreen" : "Enter fullscreen"}
              >
                {isFullscreen ? (
                  <Minimize2 className="w-5 h-5" />
                ) : (
                  <Maximize2 className="w-5 h-5" />
                )}
              </button>
              <button
                onClick={handleClose}
                className="text-blue-800  hover:text-red-500 transition-colors p-1 rounded-full hover:bg-white/10"
                aria-label="Close chat"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto px-4 py-3 space-y-3 bg-gray-50">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`flex items-end gap-2 ${msg.sender === "user" ? "flex-row-reverse" : "flex-row"
                  }`}
              >
                {/* Avatar */}
                <div
                  className={`flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center ${msg.sender === "bot"
                    ? "bg-blue-700"
                    : "bg-gray-400"
                    }`}
                >
                  {msg.sender === "bot" ? (
                    <Bot className="w-3.5 h-3.5 text-white" />
                  ) : (
                    <User className="w-3.5 h-3.5 text-white" />
                  )}
                </div>
                {/* Bubble */}
                <div
                  className={`max-w-[75%] px-3 py-2 rounded-2xl text-sm leading-relaxed ${msg.sender === "user"
                    ? "bg-blue-700 text-white rounded-br-sm"
                    : "bg-white text-gray-800 shadow-sm border border-gray-100 rounded-bl-sm"
                    }`}
                >
                  {msg.text}
                </div>
              </div>
            ))}

            {/* Typing indicator */}
            {isLoading && (
              <div className="flex items-end gap-2">
                <div className="w-6 h-6 rounded-full bg-blue-700 flex items-center justify-center">
                  <Bot className="w-3.5 h-3.5 text-white" />
                </div>
                <div className="bg-white border border-gray-100 shadow-sm px-4 py-2.5 rounded-2xl rounded-bl-sm">
                  <div className="flex gap-1 items-center h-4">
                    <span className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: "0ms" }} />
                    <span className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: "150ms" }} />
                    <span className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: "300ms" }} />
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input area */}
          <div className="px-3 py-3 bg-white border-t border-gray-100 flex gap-2 items-center">
            <input
              ref={inputRef}
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="Type a message..."
              disabled={isLoading}
              className="flex-1 text-sm px-3 py-2 rounded-full border border-gray-200 focus:outline-none focus:border-blue-400 focus:ring-1 focus:ring-blue-400 disabled:opacity-50 bg-gray-50"
            />
            <button
              onClick={handleSend}
              disabled={!input.trim() || isLoading}
              className="w-9 h-9 flex-shrink-0 rounded-full bg-blue-700 hover:bg-blue-800 disabled:bg-gray-300 disabled:cursor-not-allowed transition-colors flex items-center justify-center"
              aria-label="Send message"
            >
              <Send className="w-4 h-4 text-white" />
            </button>
          </div>
        </div>
      )}

      {/* Toggle button — hidden when chat is fullscreen */}
      {!isFullscreen && (
        <button
          onClick={() => setIsOpen((v) => !v)}
          className={`
      flex items-center
      h-14
      rounded-full
      bg-blue-700 hover:bg-blue-800
      shadow-lg hover:shadow-xl
      text-white
      ring-4 ring-white
      overflow-hidden
      transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)]
      ${showAskMe ? "max-w-[180px] px-4" : "max-w-[56px] px-0"}
    `}
          aria-label={isOpen ? "Close chat" : "Open chat"}
        >
          {/* ICON */}
          <div className="flex items-center justify-center w-14 h-14 shrink-0">
            {isOpen ? (
              <X className="w-6 h-6 transition-all duration-300" />
            ) : (
              <Bot className="w-6 h-6 transition-all duration-300" />
            )}
          </div>

          {/* TEXT */}
          <div>
            {isOpen ? (
              null
            ) : (
              <span
                className={`
        whitespace-nowrap text-sm font-semibold
        transition-all duration-500
        ${showAskMe
                    ? "opacity-100 translate-x-0"
                    : "opacity-0 -translate-x-2"}
      `}
              >
                Ask Me "
              </span>
            )}
          </div>
        </button>
      )}
    </div>
  );
}

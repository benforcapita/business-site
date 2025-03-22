import React, { useState, useRef, useEffect } from "react";
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Avatar } from "@/components/ui/avatar";
import { MessageCircle, Send, Bot, User, Clock } from "lucide-react";
import { useTranslation } from "react-i18next";
import { useLanguage } from "@/context/LanguageContext";

// Sample conversation data
const initialMessages = [
  { id: 1, role: "bot", content: "Hello! I'm your customer service assistant. How can I help you today?", timestamp: "10:30 AM" },
];

// Sample automated responses
const botResponses: Record<string, string> = {
  order: "I can help you with your order status. Could you please provide your order number?",
  shipping: "For shipping inquiries, we typically ship within 2-3 business days. International deliveries may take 7-10 business days.",
  return: "Our return policy allows returns within 30 days of receiving your order. Would you like me to help you start a return?",
  payment: "We accept all major credit cards, PayPal, and Apple Pay. Your payment information is securely processed.",
  default: "I'm sorry, I didn't quite understand. Could you rephrase your question or choose from our common topics: orders, shipping, returns, or payment methods?"
};

const CustomerServiceBot = () => {
  const { t } = useTranslation();
  const { isRTL } = useLanguage();
  const [messages, setMessages] = useState(initialMessages);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Auto-scroll to bottom when messages change
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  // Get current time for message timestamp
  const getCurrentTime = () => {
    const now = new Date();
    return now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  };

  // Generate bot response based on user input
  const getBotResponse = (userInput: string) => {
    const lowerInput = userInput.toLowerCase();
    
    if (lowerInput.includes("order") || lowerInput.includes("purchase")) {
      return botResponses.order;
    } else if (lowerInput.includes("ship") || lowerInput.includes("delivery") || lowerInput.includes("arrive")) {
      return botResponses.shipping;
    } else if (lowerInput.includes("return") || lowerInput.includes("refund")) {
      return botResponses.return;
    } else if (lowerInput.includes("pay") || lowerInput.includes("card") || lowerInput.includes("billing")) {
      return botResponses.payment;
    } else {
      return botResponses.default;
    }
  };

  // Send a new message
  const sendMessage = () => {
    if (input.trim() === "") return;
    
    // Add user message
    const userMessage = {
      id: messages.length + 1,
      role: "user",
      content: input,
      timestamp: getCurrentTime()
    };
    
    setMessages(prev => [...prev, userMessage]);
    setInput("");
    
    // Show bot typing indicator
    setIsTyping(true);
    
    // Simulate bot thinking and typing
    setTimeout(() => {
      const botMessage = {
        id: messages.length + 2,
        role: "bot",
        content: getBotResponse(input),
        timestamp: getCurrentTime()
      };
      
      setMessages(prev => [...prev, botMessage]);
      setIsTyping(false);
    }, 1500);
  };

  return (
    <div className="bg-black bg-opacity-90 rounded-lg overflow-hidden border border-mint/10 p-4">
      <Card className="bg-forest border-mint/10 h-[500px] flex flex-col">
        <CardHeader className={`flex ${isRTL ? 'flex-row-reverse' : 'flex-row'} justify-between items-center pb-3`}>
          <CardTitle className="text-xl flex items-center">
            <MessageCircle className="w-5 h-5 text-mint mr-2" /> 
            {t('previews.chatbot.title')}
          </CardTitle>
          <div className="text-xs px-2 py-1 bg-mint/10 rounded-full flex items-center">
            <div className="w-2 h-2 rounded-full bg-green-500 mr-1.5"></div>
            {t('previews.chatbot.online')}
          </div>
        </CardHeader>
        
        <CardContent className="flex-grow overflow-y-auto pb-0">
          <div className="space-y-4">
            {messages.map((message) => (
              <div 
                key={message.id} 
                className={`flex ${isRTL ? 'flex-row-reverse' : 'flex-row'} ${message.role === "user" ? "justify-end" : "justify-start"}`}
              >
                <div 
                  className={`flex ${isRTL ? 'flex-row-reverse' : 'flex-row'} max-w-[80%] ${
                    message.role === "user" 
                      ? "bg-mint/20 text-white" 
                      : "bg-forest-light border border-mint/10"
                  } rounded-lg p-3`}
                >
                  <div className={`flex-shrink-0 ${isRTL ? 'ml-3' : 'mr-3'}`}>
                    <Avatar className="h-8 w-8 border-2 border-mint/30 p-1">
                      {message.role === "bot" 
                        ? <Bot className="h-4 w-4 text-mint" />
                        : <User className="h-4 w-4 text-white" />
                      }
                    </Avatar>
                  </div>
                  <div>
                    <div className="text-sm">{message.content}</div>
                    <div className={`text-xs text-white/50 mt-1 flex items-center ${isRTL ? 'justify-start' : 'justify-end'}`}>
                      <Clock className="h-3 w-3 mr-1 inline-block" /> {message.timestamp}
                    </div>
                  </div>
                </div>
              </div>
            ))}
            
            {isTyping && (
              <div className="flex">
                <div className="bg-forest-light border border-mint/10 rounded-lg p-3">
                  <div className="flex items-center space-x-1">
                    <div className="w-2 h-2 rounded-full bg-mint/50 animate-bounce" style={{ animationDelay: "0ms" }}></div>
                    <div className="w-2 h-2 rounded-full bg-mint/50 animate-bounce" style={{ animationDelay: "300ms" }}></div>
                    <div className="w-2 h-2 rounded-full bg-mint/50 animate-bounce" style={{ animationDelay: "600ms" }}></div>
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>
        </CardContent>
        
        <CardFooter className="pt-3">
          <div className={`relative flex items-center w-full ${isRTL ? 'flex-row-reverse' : 'flex-row'}`}>
            <Input
              placeholder={t('previews.chatbot.inputPlaceholder')}
              className="pr-10 bg-forest-light border-mint/10 flex-grow"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && sendMessage()}
            />
            <Button 
              size="icon" 
              className={`absolute ${isRTL ? 'left-1' : 'right-1'} bg-mint hover:bg-mint/80 rounded-full h-8 w-8`}
              onClick={sendMessage}
            >
              <Send className="h-4 w-4 text-forest" />
            </Button>
          </div>
        </CardFooter>
      </Card>
    </div>
  );
};

export default CustomerServiceBot;
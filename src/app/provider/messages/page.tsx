"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSearch,
  faPaperPlane,
  faImage,
  faVideo,
  faPaperclip,
  faEllipsisVertical,
  faCheck,
  faCheckDouble,
  faSmile,
  faTimes,
  faPlus,
} from "@fortawesome/free-solid-svg-icons";
import { useState, useRef, useEffect } from "react";

interface Message {
  id: string;
  senderId: string;
  content: string;
  timestamp: Date;
  type: "text" | "image" | "video" | "file";
  mediaUrl?: string;
  fileName?: string;
  status: "sent" | "delivered" | "read";
}

interface Conversation {
  id: string;
  name: string;
  initials: string;
  type: "client" | "inquiry";
  avatar?: string;
  lastMessage: string;
  lastMessageTime: string;
  unreadCount: number;
  isOnline: boolean;
  color: string;
}

export default function MessagesPage() {
  const [conversations, setConversations] = useState<Conversation[]>([
    {
      id: "1",
      name: "Sarah Johnson",
      initials: "SJ",
      type: "client",
      lastMessage: "Thanks for the update on the project!",
      lastMessageTime: "2m ago",
      unreadCount: 2,
      isOnline: true,
      color: "bg-primary-600",
    },
    {
      id: "2",
      name: "Michael Rodriguez",
      initials: "MR",
      type: "inquiry",
      lastMessage: "I'll send you the revised plans tomorrow",
      lastMessageTime: "15m ago",
      unreadCount: 0,
      isOnline: true,
      color: "bg-secondary-600",
    },
    {
      id: "3",
      name: "David Martinez",
      initials: "DM",
      type: "client",
      lastMessage: "When can we schedule the next meeting?",
      lastMessageTime: "1h ago",
      unreadCount: 1,
      isOnline: false,
      color: "bg-purple-600",
    },
    {
      id: "4",
      name: "Jennifer White",
      initials: "JW",
      type: "client",
      lastMessage: "Perfect! See you then.",
      lastMessageTime: "2h ago",
      unreadCount: 0,
      isOnline: false,
      color: "bg-yellow-600",
    },
    {
      id: "5",
      name: "John Doe",
      initials: "JD",
      type: "inquiry",
      lastMessage: "Hi, I'm interested in your services",
      lastMessageTime: "3h ago",
      unreadCount: 1,
      isOnline: false,
      color: "bg-neutral-400",
    },
    {
      id: "6",
      name: "Lisa Chen",
      initials: "LC",
      type: "client",
      lastMessage: "The kitchen looks fantastic!",
      lastMessageTime: "5h ago",
      unreadCount: 0,
      isOnline: true,
      color: "bg-blue-600",
    },
  ]);

  const [selectedConversation, setSelectedConversation] = useState<
    string | null
  >("1");
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      senderId: "other",
      content: "Hi! How's the project coming along?",
      timestamp: new Date(Date.now() - 3600000),
      type: "text",
      status: "read",
    },
    {
      id: "2",
      senderId: "me",
      content: "Great! We've made significant progress this week.",
      timestamp: new Date(Date.now() - 3500000),
      type: "text",
      status: "read",
    },
    {
      id: "3",
      senderId: "me",
      content: "Here's a photo of the work completed",
      timestamp: new Date(Date.now() - 3400000),
      type: "image",
      mediaUrl: "/placeholder-image.jpg",
      status: "read",
    },
    {
      id: "4",
      senderId: "other",
      content: "Looks amazing! Thanks for the update.",
      timestamp: new Date(Date.now() - 3300000),
      type: "text",
      status: "read",
    },
    {
      id: "5",
      senderId: "other",
      content: "Thanks for the update on the project!",
      timestamp: new Date(Date.now() - 120000),
      type: "text",
      status: "delivered",
    },
  ]);

  const [messageInput, setMessageInput] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const [showMediaPreview, setShowMediaPreview] = useState(false);
  const [previewFile, setPreviewFile] = useState<{
    type: string;
    url: string;
    name: string;
  } | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const handleSendMessage = () => {
    if (!messageInput.trim() && !previewFile) return;

    const newMessage: Message = {
      id: Date.now().toString(),
      senderId: "me",
      content: messageInput.trim(),
      timestamp: new Date(),
      type: previewFile
        ? previewFile.type.startsWith("image")
          ? "image"
          : "video"
        : "text",
      mediaUrl: previewFile?.url,
      fileName: previewFile?.name,
      status: "sent",
    };

    setMessages([...messages, newMessage]);
    setMessageInput("");
    setPreviewFile(null);
    setShowMediaPreview(false);

    // Update last message in conversation
    setConversations(
      conversations.map((conv) =>
        conv.id === selectedConversation
          ? {
              ...conv,
              lastMessage: previewFile ? "Sent a file" : messageInput.trim(),
              lastMessageTime: "Just now",
            }
          : conv
      )
    );
  };

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const fileUrl = URL.createObjectURL(file);
    setPreviewFile({
      type: file.type,
      url: fileUrl,
      name: file.name,
    });
    setShowMediaPreview(true);
  };

  const cancelPreview = () => {
    if (previewFile) {
      URL.revokeObjectURL(previewFile.url);
    }
    setPreviewFile(null);
    setShowMediaPreview(false);
  };

  const formatTime = (date: Date) => {
    const now = new Date();
    const diff = now.getTime() - date.getTime();
    const minutes = Math.floor(diff / 60000);
    const hours = Math.floor(diff / 3600000);

    if (minutes < 1) return "Just now";
    if (minutes < 60) return `${minutes}m ago`;
    if (hours < 24) return `${hours}h ago`;
    return date.toLocaleDateString();
  };

  const getMessageStatus = (status: Message["status"]) => {
    if (status === "sent")
      return <FontAwesomeIcon icon={faCheck} className="text-neutral-400" />;
    if (status === "delivered")
      return (
        <FontAwesomeIcon icon={faCheckDouble} className="text-neutral-400" />
      );
    return (
      <FontAwesomeIcon icon={faCheckDouble} className="text-primary-600" />
    );
  };

  const getTypeBadge = (type: Conversation["type"]) => {
    if (type === "client") return "Client";
    return "Inquiry";
  };

  const getTypeBadgeColor = (type: Conversation["type"]) => {
    if (type === "client")
      return "bg-primary-50 text-primary-700 border-primary-200";
    return "bg-orange-50 text-orange-700 border-orange-200";
  };

  const filteredConversations = conversations.filter((conv) =>
    conv.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const currentConversation = conversations.find(
    (c) => c.id === selectedConversation
  );

  return (
    <div className="h-screen bg-neutral-50 flex flex-col">
      {/* Header - Only visible on mobile */}
      <div className="lg:hidden bg-neutral-0 border-b border-neutral-200 px-6 py-4">
        <h1 className="heading-3 text-neutral-900">Messages</h1>
      </div>

      <div className="flex-1 flex overflow-hidden">
        {/* Main Chat Area - CENTER/LEFT */}
        {selectedConversation ? (
          <div className="flex-1 flex flex-col bg-neutral-0">
            {/* Chat Header */}
            <div className="px-6 py-4 border-b border-neutral-200 bg-neutral-0">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="relative">
                    <div
                      className={`w-12 h-12 rounded-full ${currentConversation?.color} text-neutral-0 flex items-center justify-center font-semibold text-sm`}
                    >
                      {currentConversation?.initials}
                    </div>
                    {currentConversation?.isOnline && (
                      <div className="absolute bottom-0 right-0 w-3.5 h-3.5 bg-green-500 border-2 border-neutral-0 rounded-full"></div>
                    )}
                  </div>
                  <div>
                    <h2 className="font-semibold text-neutral-900">
                      {currentConversation?.name}
                    </h2>
                    <p className="text-sm text-neutral-500">
                      {currentConversation?.isOnline ? "Online" : "Offline"}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <button className="p-2.5 hover:bg-neutral-50 rounded-lg transition-colors">
                    <FontAwesomeIcon
                      icon={faEllipsisVertical}
                      className="text-neutral-600"
                    />
                  </button>
                </div>
              </div>
            </div>

            {/* Messages Area */}
            <div className="flex-1 overflow-y-auto px-6 py-6 bg-neutral-50">
              <div className="space-y-4 max-w-4xl mx-auto">
                {messages.map((message) => (
                  <div
                    key={message.id}
                    className={`flex ${
                      message.senderId === "me"
                        ? "justify-end"
                        : "justify-start"
                    }`}
                  >
                    <div
                      className={`max-w-md lg:max-w-lg ${
                        message.senderId === "me" ? "items-end" : "items-start"
                      }`}
                    >
                      {/* Message Bubble */}
                      <div
                        className={`rounded-2xl px-4 py-3 ${
                          message.senderId === "me"
                            ? "bg-primary-600 text-neutral-0"
                            : "bg-neutral-0 text-neutral-900 border border-neutral-200"
                        }`}
                      >
                        {message.type === "text" && (
                          <p className="body-regular">{message.content}</p>
                        )}

                        {message.type === "image" && (
                          <div>
                            {message.content && (
                              <p className="body-regular mb-2">
                                {message.content}
                              </p>
                            )}
                            <div className="rounded-lg overflow-hidden">
                              <div className="w-64 h-48 bg-neutral-100 flex items-center justify-center">
                                <FontAwesomeIcon
                                  icon={faImage}
                                  className="text-4xl text-neutral-400"
                                />
                              </div>
                            </div>
                          </div>
                        )}

                        {message.type === "video" && (
                          <div>
                            {message.content && (
                              <p className="body-regular mb-2">
                                {message.content}
                              </p>
                            )}
                            <div className="rounded-lg overflow-hidden relative">
                              <div className="w-64 h-48 bg-neutral-900 flex items-center justify-center">
                                <FontAwesomeIcon
                                  icon={faVideo}
                                  className="text-4xl text-neutral-0"
                                />
                              </div>
                            </div>
                          </div>
                        )}
                      </div>

                      {/* Timestamp and Status */}
                      <div
                        className={`flex items-center gap-2 mt-1 px-2 ${
                          message.senderId === "me"
                            ? "justify-end"
                            : "justify-start"
                        }`}
                      >
                        <span className="text-xs text-neutral-500">
                          {formatTime(message.timestamp)}
                        </span>
                        {message.senderId === "me" && (
                          <span className="text-xs">
                            {getMessageStatus(message.status)}
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
                <div ref={messagesEndRef} />
              </div>
            </div>

            {/* Media Preview */}
            {showMediaPreview && previewFile && (
              <div className="px-6 py-3 bg-neutral-0 border-t border-neutral-200">
                <div className="flex items-center gap-3 p-3 bg-neutral-50 rounded-lg">
                  <div className="w-16 h-16 bg-neutral-100 rounded-lg flex items-center justify-center flex-shrink-0 overflow-hidden">
                    {previewFile.type.startsWith("image") ? (
                      <img
                        src={previewFile.url}
                        alt="Preview"
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <FontAwesomeIcon
                        icon={faVideo}
                        className="text-neutral-400 text-xl"
                      />
                    )}
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="font-medium text-neutral-900 truncate text-sm">
                      {previewFile.name}
                    </p>
                    <p className="text-xs text-neutral-500">
                      {previewFile.type.startsWith("image") ? "Image" : "Video"}
                    </p>
                  </div>
                  <button
                    onClick={cancelPreview}
                    className="p-2 hover:bg-neutral-200 rounded-lg transition-colors"
                  >
                    <FontAwesomeIcon
                      icon={faTimes}
                      className="text-neutral-600"
                    />
                  </button>
                </div>
              </div>
            )}

            {/* Message Input */}
            <div className="px-6 py-4 bg-neutral-0 border-t border-neutral-200">
              <div className="flex items-center gap-3">
                {/* Attachment Button */}
                <input
                  ref={fileInputRef}
                  type="file"
                  accept="image/*,video/*"
                  onChange={handleFileSelect}
                  className="hidden"
                />
                <button
                  onClick={() => fileInputRef.current?.click()}
                  className="p-2.5 hover:bg-neutral-50 rounded-lg transition-colors text-neutral-600 flex-shrink-0"
                  title="Add image or video"
                >
                  <FontAwesomeIcon icon={faPlus} className="text-lg" />
                </button>

                {/* Text Input */}
                <div className="flex-1 relative">
                  <input
                    type="text"
                    value={messageInput}
                    onChange={(e) => setMessageInput(e.target.value)}
                    onKeyPress={(e) => {
                      if (e.key === "Enter") {
                        e.preventDefault();
                        handleSendMessage();
                      }
                    }}
                    placeholder="Type a message..."
                    className="w-full px-4 py-3 bg-neutral-50 border border-neutral-200 rounded-xl focus:outline-none focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 transition-all body-regular"
                  />
                </div>

                {/* Send Button */}
                <button
                  onClick={handleSendMessage}
                  disabled={!messageInput.trim() && !previewFile}
                  className="px-6 py-3 bg-primary-600 text-neutral-0 rounded-xl hover:bg-primary-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed font-medium flex-shrink-0"
                >
                  Send
                </button>
              </div>
            </div>
          </div>
        ) : (
          /* Empty State - No conversation selected */
          <div className="hidden lg:flex flex-1 items-center justify-center bg-neutral-50">
            <div className="text-center">
              <div className="w-24 h-24 bg-neutral-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <FontAwesomeIcon
                  icon={faPaperPlane}
                  className="text-neutral-400 text-4xl"
                />
              </div>
              <h3 className="heading-3 text-neutral-900 mb-2">
                Select a conversation
              </h3>
              <p className="text-neutral-600 body-regular">
                Choose a conversation from the list to start messaging
              </p>
            </div>
          </div>
        )}

        {/* Sidebar - Conversations List (RIGHT SIDE) - Always visible on desktop */}
        <div className="hidden lg:flex lg:w-96 bg-neutral-0 border-l border-neutral-200 flex-col">
          {/* Sidebar Header */}
          <div className="px-6 py-6 border-b border-neutral-200">
            <h2 className="heading-3 text-neutral-900 mb-4">Conversations</h2>

            {/* Search */}
            <div className="relative">
              <FontAwesomeIcon
                icon={faSearch}
                className="absolute left-3 top-1/2 -translate-y-1/2 text-neutral-400 text-sm"
              />
              <input
                type="text"
                placeholder="Search conversations..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 bg-neutral-50 border border-neutral-200 rounded-lg focus:outline-none focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 transition-all body-small"
              />
            </div>
          </div>

          {/* Conversations List */}
          <div className="flex-1 overflow-y-auto">
            {filteredConversations.map((conversation) => (
              <div
                key={conversation.id}
                onClick={() => setSelectedConversation(conversation.id)}
                className={`px-6 py-4 border-b border-neutral-100 cursor-pointer transition-colors hover:bg-neutral-50 ${
                  selectedConversation === conversation.id
                    ? "bg-primary-50 border-r-4 border-r-primary-600"
                    : ""
                }`}
              >
                <div className="flex items-start gap-3">
                  {/* Avatar */}
                  <div className="relative flex-shrink-0">
                    <div
                      className={`w-12 h-12 rounded-full ${conversation.color} text-neutral-0 flex items-center justify-center font-semibold text-sm`}
                    >
                      {conversation.initials}
                    </div>
                    {conversation.isOnline && (
                      <div className="absolute bottom-0 right-0 w-3.5 h-3.5 bg-green-500 border-2 border-neutral-0 rounded-full"></div>
                    )}
                  </div>

                  {/* Content */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between mb-1">
                      <h3 className="font-semibold text-neutral-900 truncate">
                        {conversation.name}
                      </h3>
                      <span className="text-xs text-neutral-500 flex-shrink-0 ml-2">
                        {conversation.lastMessageTime}
                      </span>
                    </div>
                    <div className="flex items-center justify-between">
                      <p className="text-sm text-neutral-600 truncate flex-1">
                        {conversation.lastMessage}
                      </p>
                      {conversation.unreadCount > 0 && (
                        <span className="ml-2 px-2 py-0.5 bg-primary-600 text-neutral-0 rounded-full text-xs font-semibold flex-shrink-0">
                          {conversation.unreadCount}
                        </span>
                      )}
                    </div>
                    <span
                      className={`inline-block mt-2 px-2 py-0.5 rounded text-xs font-medium border ${getTypeBadgeColor(
                        conversation.type
                      )}`}
                    >
                      {getTypeBadge(conversation.type)}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

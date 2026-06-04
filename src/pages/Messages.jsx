import { useState } from 'react'
import { FiSend, FiPaperclip, FiSmile, FiSearch, FiPhone, FiVideo, FiInfo, FiMoreVertical } from 'react-icons/fi'

const initialChats = [
  { id: 1, name: 'Sarah Jenkins', avatar: 'SJ', status: 'Online', lastMsg: 'I uploaded the brand assets and color tokens!', time: '10m ago', unread: 2, color: 'bg-blue-500', messages: [
    { sender: 'them', text: 'Hey Avery, how is the dashboard layout looking?', time: '9:40 AM' },
    { sender: 'you', text: 'Hey Sarah! We just imported the Sidebar and Navbar inside App.jsx and it looks awesome.', time: '9:42 AM' },
    { sender: 'them', text: 'Perfect! I uploaded the brand assets and color tokens!', time: '9:43 AM' },
  ]},
  { id: 2, name: 'Alex Rivera', avatar: 'AR', status: 'Online', lastMsg: 'The GraphQL setup is deployed to the dev cluster.', time: '1h ago', unread: 0, color: 'bg-violet-500', messages: [
    { sender: 'them', text: 'The GraphQL setup is deployed to the dev cluster.', time: '8:15 AM' },
    { sender: 'you', text: 'Awesome work Alex, let me test it out today.', time: '8:20 AM' },
  ]},
  { id: 3, name: 'Marcus Vance', avatar: 'MV', status: 'Away', lastMsg: 'Can we sync on the marketing targets for Q3?', time: 'Yesterday', unread: 0, color: 'bg-amber-500', messages: [
    { sender: 'them', text: 'Can we sync on the marketing targets for Q3?', time: 'Yesterday' },
  ]},
  { id: 4, name: 'Dianne Russell', avatar: 'DR', status: 'Offline', lastMsg: 'The CI pipeline completed successfully.', time: '2 days ago', unread: 0, color: 'bg-emerald-500', messages: [
    { sender: 'them', text: 'The CI pipeline completed successfully.', time: '2 days ago' },
  ]}
]

function Messages() {
  const [chats, setChats] = useState(initialChats)
  const [activeChatId, setActiveChatId] = useState(1)
  const [inputVal, setInputVal] = useState('')

  const activeChat = chats.find(c => c.id === activeChatId) || chats[0]

  const handleSendMessage = (e) => {
    e.preventDefault()
    if (!inputVal.trim()) return

    const newMsg = {
      sender: 'you',
      text: inputVal,
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    }

    setChats(prevChats => prevChats.map(c => {
      if (c.id === activeChat.id) {
        return {
          ...c,
          lastMsg: inputVal,
          time: 'Just now',
          messages: [...c.messages, newMsg]
        }
      }
      return c
    }))

    setInputVal('')
  }

  return (
    <div className="flex h-[calc(100vh-10rem)] overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm animate-in fade-in slide-in-from-bottom-4 duration-500">
      {/* Sidebar List */}
      <div className="w-80 flex flex-col border-r border-slate-200 bg-slate-50/50">
        {/* Search */}
        <div className="p-4 border-b border-slate-200 bg-white">
          <div className="relative">
            <FiSearch className="absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
            <input
              type="text"
              placeholder="Search conversations..."
              className="w-full rounded-2xl border border-slate-200 bg-slate-50 py-2 pl-10 pr-4 text-xs outline-none focus:border-slate-300 focus:bg-white"
            />
          </div>
        </div>

        {/* List */}
        <div className="flex-1 overflow-y-auto divide-y divide-slate-100 p-2 space-y-1">
          {chats.map((chat) => (
            <button
              key={chat.id}
              onClick={() => setActiveChatId(chat.id)}
              className={`w-full flex items-start gap-3 rounded-2xl p-3 text-left transition ${
                activeChat.id === chat.id 
                  ? 'bg-white shadow-sm ring-1 ring-slate-200/50' 
                  : 'hover:bg-white/60'
              }`}
            >
              <div className="relative">
                <div className={`flex h-10 w-10 items-center justify-center rounded-full text-white text-xs font-bold ${chat.color}`}>
                  {chat.avatar}
                </div>
                {chat.status === 'Online' && (
                  <span className="absolute bottom-0 right-0 h-2.5 w-2.5 rounded-full bg-emerald-500 ring-2 ring-white" />
                )}
                {chat.status === 'Away' && (
                  <span className="absolute bottom-0 right-0 h-2.5 w-2.5 rounded-full bg-amber-500 ring-2 ring-white" />
                )}
              </div>

              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between">
                  <h4 className="text-xs font-bold text-slate-900 truncate">{chat.name}</h4>
                  <span className="text-[10px] text-slate-400 font-medium">{chat.time}</span>
                </div>
                <p className="mt-1 text-xs text-slate-500 truncate leading-relaxed">{chat.lastMsg}</p>
              </div>

              {chat.unread > 0 && (
                <span className="flex h-5 min-w-5 items-center justify-center rounded-full bg-brand px-1.5 text-[10px] font-bold text-white shadow-sm shadow-brand/20">
                  {chat.unread}
                </span>
              )}
            </button>
          ))}
        </div>
      </div>

      {/* Main Conversation Pane */}
      <div className="flex-1 flex flex-col justify-between bg-white">
        {/* Chat Header */}
        <div className="flex items-center justify-between border-b border-slate-200 px-6 py-4">
          <div className="flex items-center gap-3">
            <div className={`flex h-10 w-10 items-center justify-center rounded-full text-white text-xs font-bold ${activeChat.color}`}>
              {activeChat.avatar}
            </div>
            <div>
              <h3 className="text-sm font-bold text-slate-900">{activeChat.name}</h3>
              <p className="text-[11px] font-semibold text-slate-400">{activeChat.status}</p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button className="flex h-9 w-9 items-center justify-center rounded-xl hover:bg-slate-100 text-slate-500">
              <FiPhone className="h-4 w-4" />
            </button>
            <button className="flex h-9 w-9 items-center justify-center rounded-xl hover:bg-slate-100 text-slate-500">
              <FiVideo className="h-4 w-4" />
            </button>
            <button className="flex h-9 w-9 items-center justify-center rounded-xl hover:bg-slate-100 text-slate-500">
              <FiInfo className="h-4 w-4" />
            </button>
          </div>
        </div>

        {/* Message Feed */}
        <div className="flex-1 overflow-y-auto p-6 space-y-4 bg-slate-50/30">
          {activeChat.messages.map((m, idx) => {
            const isMe = m.sender === 'you'
            return (
              <div key={idx} className={`flex ${isMe ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[70%] rounded-3xl px-4 py-3 text-xs leading-relaxed shadow-sm ${
                  isMe 
                    ? 'bg-slate-900 text-white rounded-tr-none' 
                    : 'bg-white border border-slate-100 text-slate-800 rounded-tl-none'
                }`}>
                  <p>{m.text}</p>
                  <span className={`block mt-1 text-[9px] text-right font-medium ${isMe ? 'text-slate-400' : 'text-slate-400'}`}>
                    {m.time}
                  </span>
                </div>
              </div>
            )
          })}
        </div>

        {/* Input Bar */}
        <form onSubmit={handleSendMessage} className="p-4 border-t border-slate-200 flex items-center gap-3">
          <button type="button" className="flex h-10 w-10 items-center justify-center rounded-xl hover:bg-slate-100 text-slate-500">
            <FiPaperclip className="h-5 w-5" />
          </button>
          
          <input
            type="text"
            value={inputVal}
            onChange={(e) => setInputVal(e.target.value)}
            placeholder={`Message ${activeChat.name}...`}
            className="flex-1 rounded-2xl border border-slate-200 bg-slate-50 px-4 py-2.5 text-xs outline-none focus:border-slate-300 focus:bg-white"
          />

          <button type="button" className="flex h-10 w-10 items-center justify-center rounded-xl hover:bg-slate-100 text-slate-500">
            <FiSmile className="h-5 w-5" />
          </button>
          
          <button 
            type="submit" 
            className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand text-white shadow-sm shadow-brand/20 hover:bg-brand-dark active:scale-95 transition"
          >
            <FiSend className="h-4.5 w-4.5" />
          </button>
        </form>
      </div>
    </div>
  )
}

export default Messages

import { useChatStore } from "../store/useChatStore";

function ActiveTabSwitch() {
  const { activeTab, setActiveTab } = useChatStore();

  return (
    <div className="flex bg-slate-900/40 p-1 rounded-xl m-4 border border-white/5">
      <button
        onClick={() => setActiveTab("chats")}
        className={`flex-1 py-2 rounded-lg text-sm font-medium transition-all ${activeTab === "chats" ? "bg-white/10 text-white shadow-lg backdrop-blur-sm" : "text-slate-400 hover:text-slate-200"
          }`}
      >
        Chats
      </button>

      <button
        onClick={() => setActiveTab("contacts")}
        className={`flex-1 py-2 rounded-lg text-sm font-medium transition-all ${activeTab === "contacts" ? "bg-white/10 text-white shadow-lg backdrop-blur-sm" : "text-slate-400 hover:text-slate-200"
          }`}
      >
        Contacts
      </button>
    </div>
  );
}
export default ActiveTabSwitch;

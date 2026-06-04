import { useState } from 'react'
import { FiHelpCircle, FiSearch, FiMessageSquare, FiBookOpen, FiChevronDown, FiChevronUp } from 'react-icons/fi'

const faqs = [
  {
    question: 'How do I toggle the sidebar navigation layout?',
    answer: 'You can toggle the sidebar between fully expanded and collapsed mode by clicking the chevron toggle button at the top-right corner of the sidebar next to the Sable logo.'
  },
  {
    question: 'Can I invite other team members to my workspace?',
    answer: 'Yes! Navigate to the Users page and click the "Invite Member" button at the top right. Enter their details, select their role (e.g. Design, Engineering, Marketing), and send their invite link.'
  },
  {
    question: 'How do I configure my notification preferences?',
    answer: 'Go to the Settings page and select the "Notifications" tab on the left sidebar. There, you can easily toggle Email Alerts, Desktop Push Alerts, Weekly Digests, and Team Updates.'
  },
  {
    question: 'Where can I find my subscription billing information?',
    answer: 'Subscription details can be found under Settings > Billing tab. You can view your current plan details, renewal date, and download billing invoices.'
  }
]

function Help() {
  const [openFaq, setOpenFaq] = useState(null)
  const [searchVal, setSearchVal] = useState('')

  const handleToggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index)
  }

  const filteredFaqs = faqs.filter(faq => 
    faq.question.toLowerCase().includes(searchVal.toLowerCase()) || 
    faq.answer.toLowerCase().includes(searchVal.toLowerCase())
  )

  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
      {/* Header Banner */}
      <div className="rounded-3xl bg-slate-900 px-6 py-12 text-center text-white shadow-xl shadow-slate-950/10">
        <div className="max-w-xl mx-auto space-y-4">
          <h1 className="text-3xl font-extrabold tracking-tight">How can we help?</h1>
          <p className="text-xs text-slate-300">Search our FAQ guides or view documentation details to resolve your queries.</p>
          
          <div className="relative max-w-md mx-auto">
            <FiSearch className="absolute left-4 top-1/2 h-4.5 w-4.5 -translate-y-1/2 text-slate-400" />
            <input
              type="text"
              value={searchVal}
              onChange={(e) => setSearchVal(e.target.value)}
              placeholder="Search help articles, topics, keywords..."
              className="w-full rounded-2xl border border-white/10 bg-white/10 px-5 py-3 pl-11 text-xs text-white placeholder:text-slate-400 outline-none backdrop-blur-md focus:bg-white/15 focus:ring-1 focus:ring-brand/40"
            />
          </div>
        </div>
      </div>

      {/* Support Cards */}
      <div className="grid gap-6 md:grid-cols-2">
        <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm flex items-start gap-4">
          <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-indigo-50 text-indigo-600">
            <FiBookOpen className="h-5 w-5" />
          </div>
          <div>
            <h3 className="text-sm font-bold text-slate-900">Read Documentation</h3>
            <p className="mt-1 text-xs text-slate-500 leading-relaxed">Explore full setup tutorials, router details, components, layout adjustments, and customized styles configuration guides.</p>
            <button className="mt-3 text-xs font-bold text-brand hover:underline">Explore Docs &rarr;</button>
          </div>
        </div>

        <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm flex items-start gap-4">
          <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-purple-50 text-purple-600">
            <FiMessageSquare className="h-5 w-5" />
          </div>
          <div>
            <h3 className="text-sm font-bold text-slate-900">Contact Support Team</h3>
            <p className="mt-1 text-xs text-slate-500 leading-relaxed">Need direct help? Contact our active developer support desk to resolve technical issues or package installation problems.</p>
            <button className="mt-3 text-xs font-bold text-brand hover:underline">Open Support Chat &rarr;</button>
          </div>
        </div>
      </div>

      {/* FAQs Section */}
      <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
        <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-5">Frequently Asked Questions</h2>
        
        <div className="mt-4 divide-y divide-slate-100">
          {filteredFaqs.map((faq, index) => (
            <div key={index} className="py-4 first:pt-0 last:pb-0">
              <button
                onClick={() => handleToggleFaq(index)}
                className="w-full flex items-center justify-between text-left font-bold text-xs text-slate-800 hover:text-slate-950 focus:outline-none"
              >
                <span>{faq.question}</span>
                {openFaq === index ? <FiChevronUp className="h-4 w-4 text-slate-500" /> : <FiChevronDown className="h-4 w-4 text-slate-500" />}
              </button>

              {openFaq === index && (
                <div className="mt-2 text-xs leading-relaxed text-slate-500 animate-in fade-in duration-300">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}

          {filteredFaqs.length === 0 && (
            <div className="flex flex-col items-center justify-center py-8 text-center">
              <FiHelpCircle className="h-10 w-10 text-slate-300" />
              <h3 className="mt-4 text-xs font-bold text-slate-900">No questions found</h3>
              <p className="mt-1 text-xs text-slate-400">Try modifying your query in the search bar.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default Help

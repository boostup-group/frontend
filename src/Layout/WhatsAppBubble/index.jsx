import { useState, useEffect } from 'react'
import { FaWhatsapp } from "react-icons/fa";


export default function WhatsAppBubble({ phoneNumber = '+21624221388', message = 'Hello! I have a question.' }) {
  const [text, setText] = useState('')
  const fullText = 'Profitez maintenant!'
  const [isAnimating, setIsAnimating] = useState(true)

  useEffect(() => {
    let timeoutId;

    const animateText = () => {
      setText('')
      let index = 0
      const intervalId = setInterval(() => {
        setText((prevText) => {
          if (index < fullText.length) {
            index++
            return fullText.slice(0, index)
          }
          clearInterval(intervalId)
          timeoutId = setTimeout(() => setIsAnimating(true), 3000) // Restart animation after 3 seconds
          return prevText
        })
      }, 100) // Adjust speed here (lower number = faster)
    }

    if (isAnimating) {
      setIsAnimating(false)
      animateText()
    }

    return () => {
      clearTimeout(timeoutId)
    }
  }, [isAnimating, fullText])

  const handleClick = () => {
    const encodedMessage = encodeURIComponent(message)
    window.open(`https://wa.me/${phoneNumber}?text=${encodedMessage}`, '_blank')
  }

  return (
    <div className="fixed bottom-4 right-4 z-50 flex items-center">
      <div className="relative mr-4">
        <div className="bg-[#E50914] text-white px-4 py-2 rounded-lg shadow-md text-sm whitespace-nowrap">
          {text}
          <div className="absolute top-1/2 right-0 transform translate-x-1/2 -translate-y-1/2 rotate-45 w-2 h-2 bg-[#E50914]"></div>
        </div>
      </div>
      
      <div className="relative">
        {/* Live status indicator */}
        <div className="absolute -top-1 -right-1 flex items-center justify-center">
          <span className="animate-ping absolute inline-flex h-3 w-3 rounded-full bg-red-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500"></span>
        </div>

        {/* WhatsApp button */}
        <button
          onClick={handleClick}
          className="bg-[#25D366] text-white p-2 rounded-full shadow-lg transition-all duration-300 ease-in-out transform hover:scale-110 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#25D366]"
          aria-label="Chat on WhatsApp"
        >
          <FaWhatsapp className="font-bold text-4xl text-white" />
        </button>
      </div>
    </div>
  )
}
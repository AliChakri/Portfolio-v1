import { Rocket } from 'lucide-react'
import React from 'react'

const RocketHeader = () => {
  return (
    <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full mb-6 relative">
        <Rocket className="w-8 h-8 text-white" />
        <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full blur opacity-75 animate-pulse"></div>
    </div>
  )
}

export default RocketHeader
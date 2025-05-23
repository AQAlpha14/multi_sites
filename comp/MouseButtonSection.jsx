"use client"

import React, { useState, useEffect } from "react"

const MouseButtonSection = () => {
  const [mouseLeft, setMouseLeft] = useState(false)
  const [mouseMiddle, setMouseMiddle] = useState(false)
  const [mouseRight, setMouseRight] = useState(false)

  useEffect(() => {
    const handleMouseDown = (event) => {
      if (event.button === 0) {
        setMouseLeft(true)
      }
      if (event.button === 1) {
        setMouseMiddle(true)
      }
      if (event.button === 2) {
        setMouseRight(true)
      }
    }

    const handleMouseUp = () => {
      // Reset states on mouse up to allow for repeated clicks
      setMouseLeft(false)
      setMouseMiddle(false)
      setMouseRight(false)
    }

    document.addEventListener("mousedown", handleMouseDown)
    document.addEventListener("mouseup", handleMouseUp)

    // Cleanup event listeners on component unmount
    return () => {
      document.removeEventListener("mousedown", handleMouseDown)
      document.removeEventListener("mouseup", handleMouseUp)
    }
  }, [])

  return (
    <section className="w-full bg-gradient-to-b from-white to-red-600 py-6 flex justify-center items-center min-h-screen">
      <div className="text-center">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Mouse Button Detector</h2>
        <div className="space-y-2">
          <p className={`text-lg ${mouseLeft ? "text-green-500" : "text-gray-600"}`}>
            Left Mouse Button: {mouseLeft ? "Clicked" : "Not Clicked"}
          </p>
          <p className={`text-lg ${mouseMiddle ? "text-green-500" : "text-gray-600"}`}>
            Middle Mouse Button: {mouseMiddle ? "Clicked" : "Not Clicked"}
          </p>
          <p className={`text-lg ${mouseRight ? "text-green-500" : "text-gray-600"}`}>
            Right Mouse Button: {mouseRight ? "Clicked" : "Not Clicked"}
          </p>
        </div>
      </div>
    </section>
  )
}

export default MouseButtonSection;
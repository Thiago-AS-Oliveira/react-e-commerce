import { useEffect, useState } from "react"

const useScreenWidth = () => {
  const [screenWidth, setScreenWidth] = useState(innerWidth)

  useEffect(() => {
    const handleResize = () => setScreenWidth(innerWidth)

    window.addEventListener("resize", handleResize)

    return () => window.removeEventListener("resize", handleResize)
  }, [])

  return screenWidth
}

export default useScreenWidth

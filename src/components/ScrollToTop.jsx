// components/ScrollToTop.js
import { useEffect } from "react"
import { useLocation } from "react-router-dom"

export default function ScrollToTop() {
  const { pathname } = useLocation()

  useEffect(() => {
    // 每次 pathname 变的时候，就 run 这个
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth" // 平滑滚动效果
    })
  }, [pathname])

  return null // 这个 component 不需要 render 任何东西
}
interface FooterProps {
  text?: string
}

export function Footer({ text = "© DumbUI 2025 - Eye damage since today" }: FooterProps) {
  return (
    <footer
      className="text-center p-4 md:p-6 border-t-4 border-lime-400 font-bold flicker bg-black"
      style={{ color: "#ff00ff", fontFamily: "Comic Sans MS" }}
    >
      {text}
    </footer>
  )
}


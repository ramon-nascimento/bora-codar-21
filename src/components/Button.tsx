'use client'

interface ButtonProps {
  title: string | JSX.Element
  onClick?: () => void
}

export function Button({ title, onClick }: ButtonProps) {
  return (
    <button onClick={onClick} className="bg-purple-300 rounded-lg h-16 mt-8 text-lg hover:bg-purple-200 transition-colors">
      <div className="flex items-center justify-center">
        {title}
      </div>
    </button>
  )
}
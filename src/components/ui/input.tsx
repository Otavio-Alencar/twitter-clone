'use client'
import { Eye, EyeOff, Search } from 'lucide-react'
import { useState } from 'react'
import { tv } from 'tailwind-variants'

const inputStyles = tv({
  base: 'flex items-center px-5 rounded-3xl h-14 has-[:focus]:border-white ',
  variants: {
    styleDiv: {
      default: 'border border-gray-500 ',
      search: ' bg-gray-700 flex gap-4 border border-transparent ',
    },
  },
  defaultVariants: {
    styleDiv: 'default',
  },
})

type props = {
  placeholder: string
  password?: boolean
  value?: string
  search?: boolean
  onChange?: (newValue: string) => void
  onEnter?: () => void
}
export const Input = ({
  placeholder,
  password,
  value,
  onChange,
  search,
  onEnter,
}: props) => {
  const [showPassword, setShowPassword] = useState(false)
  const handleKeyUp = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.code.toLowerCase() === 'enter' && onEnter) {
      onEnter()
    }
  }
  return (
    <div
      className={
        !search
          ? inputStyles({ styleDiv: 'default' })
          : inputStyles({ styleDiv: 'search' })
      }
    >
      {search && <Search className="cursor-pointer" />}
      <input
        className="h-full w-full bg-transparent text-lg outline-none"
        type={password && !showPassword ? 'password' : 'text'}
        value={value}
        placeholder={placeholder}
        onChange={(e) => onChange && onChange(e.target.value)}
        onKeyUp={handleKeyUp}
      />
      {password && (
        <div
          className="cursor-pointer"
          onClick={() => {
            setShowPassword(!showPassword)
          }}
        >
          {showPassword ? <Eye /> : <EyeOff />}
        </div>
      )}
    </div>
  )
}

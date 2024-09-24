'use client'
import { Eye, EyeOff } from 'lucide-react'
import { useState } from 'react'
import { tv } from 'tailwind-variants'

const inputStyles = tv({
  base: 'flex items-center px-5',
  variants: {
    styleDiv: {
      default:
        'h-14 rounded-3xl border border-gray-500 has-[:focus]:border-white',
      primary: 'h-12',
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
}
export const Input = ({
  placeholder,
  password,
  value,
  onChange,
  search,
}: props) => {
  const [showPassword, setShowPassword] = useState(false)
  return (
    <div className={!search ? inputStyles({ styleDiv: 'default' }) : 'h-24'}>
      <input
        className="h-full w-full bg-transparent text-lg outline-none"
        type={password && !showPassword ? 'password' : 'text'}
        value={value}
        placeholder={placeholder}
        onChange={(e) => onChange && onChange(e.target.value)}
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

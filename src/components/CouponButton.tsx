import { Tag } from 'lucide-react'

interface CouponButtonProps {
  title: string
}

export function CouponButton({ title }: CouponButtonProps) {
  return (
    <label htmlFor="coupon" className="mt-4 flex self-end max-w-[158px] gap-2 hover:text-purple-100 transition-colors">
      <Tag className='text-purple-200' />
      <input 
        type="text" 
        placeholder={title} 
        id='coupon' 
        className='text-neutral-200 w-full bg-transparent placeholder-purple-200 hover:placeholder-purple-100 transition-colors outline-none border-b-2 border-transparent focus:border-purple-400' />
    </label>
  )
}
import Image, { StaticImageData } from "next/image";
import { Stepper } from "./Stepper";

interface ProductCardProps {
  item: {
    id: number
    description: string
    price: string
    imageUrl: StaticImageData
  }
}

export function ProductCard({ item }: ProductCardProps) {
  return (
    <div className="flex gap-6">
      <Image 
        src={item.imageUrl} 
        alt="cadeira" 
        className="max-w-[104px] rounded-lg" 
      />

      <div className="flex flex-col flex-1 justify-between">
        <p className="text-base max-h-12 overflow-hidden">{item.description}</p>
        <div className="flex justify-between items-center">
          <p className="text-center">{item.price}</p>
          <Stepper />
        </div>
      </div>
    </div>
  )
}
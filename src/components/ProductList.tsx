import cadeira from '../../public/assets/product-image-cadeira.jpg'
import headset from '../../public/assets/product-image-headset.jpg'
import monitor from '../../public/assets/product-image-monitor.jpg'
import patinho from '../../public/assets/product-image-patinho.jpg'
import teclado from '../../public/assets/product-image-teclado.jpg'
import { ProductCard } from './ProductCard'

const PRODUCTS = [
  { 
    id: 1, 
    description: 'Cadeira Gamer  RGB - Preta com Iluminação (Led)', 
    price: 'R$ 959,90', 
    imageUrl: cadeira 
  },
  { 
    id: 2, 
    description: 'Headset Gamer RGB Preto', 
    price: 'R$ 99,90', 
    imageUrl: headset 
  },
  { 
    id: 3, 
    description: 'Monitor Gamer Curvo 49 DQHD, 240Hz, 1ms, HDMI e DisplayPort, HDR 1000, FreeSync Premium, Ajuste de Altura - LC49G95TSSLXZD', 
    price: 'R$ 8.599,90', 
    imageUrl: monitor 
  },
  { 
    id: 4, 
    description: 'Patinho De Borracha Para Banho', 
    price: 'R$ 19,90', 
    imageUrl: patinho 
  },
  { 
    id: 5, 
    description: 'Teclado Gamer Mecânico Low Profile RGB AW510K 580', 
    price: 'R$ 1.002,00', 
    imageUrl: teclado 
  },
]

export function ProductList() {
  return (
    <ul className="flex flex-col gap-12 overflow-y-scroll scrollbar scrollbar-w-2 scrollbar-thumb-rounded-lg scrollbar-thumb-neutral-400 scrollbar-track-neutral-600 py-6 px-8">
      {PRODUCTS.map(product => (
        <ProductCard key={product.id} item={product} />
      ))}
    </ul>
  )
}
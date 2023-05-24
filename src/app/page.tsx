'use client'

import { Button } from "@/components/Button";
import { CouponButton } from "@/components/CouponButton";
import { ProductList } from "@/components/ProductList";
import { useState } from "react";

import { Loader2, X } from 'lucide-react'

export default function Home() {
  const [loading, setLoading] = useState(false)

  function handleClick() {
    setLoading(true)

    setTimeout(() => {
      setLoading(false)
    }, 2000);
  }

  return (
    <div className="bg-neutral-500 h-full flex flex-col">
      <div className="flex items-center justify-between py-6 px-8 border-b border-neutral-400">
        <h1 className="text-xl">Seu carrinho tem <strong>5 itens</strong></h1>
        <X className="cursor-pointer" />
      </div>

      <ProductList />

      <div className="flex flex-col py-6 px-8 border-t border-neutral-400">
        <div className="flex justify-between items-center text-xl">
          <p className="text-neutral-200">Total:</p>
          <p><strong>R$ 10.681,60</strong></p>
        </div>

        <CouponButton title="Adicionar cupom" />

        <Button title={!loading ? "Finalizar compra" : <Loader2 className="animate-spin" />} onClick={handleClick} />
      </div>
    </div>
  )
}

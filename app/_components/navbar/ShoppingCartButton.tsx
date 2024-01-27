

import { Button } from "@/components/ui/button"
import { formatPrice } from "@/libs/format"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

import { Badge } from "@/components/ui/badge"

import { useStore } from "@/store/store"

export function ShoppingCartButton() {
  
  const handleCart=()=>{
    window.location.href = "store/cart"
  }
  const orderQuantity = useStore((state)=>state.store.totalOrder)
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button className="relative  ">
       
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-8 w-8 stroke-mainColor"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
            />
          </svg>
          <Badge className="absolute top-0 text-mainColor right-0 p-[2px]">
          {
            
            0 || orderQuantity}
          </Badge>
      
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-64 bg-white rounded-xl mr-4">
        <DropdownMenuLabel>My Cart</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuItem>
          <div className="flex flex-col justify-center gap-2 ">
          <span className="text-lg font-bold">
          
          {0 || orderQuantity} Items</span>
          <span className="text-sm">
            Subtotal: {formatPrice(
              // cart?.subtotal 
              1000
              || 0)}
          </span>
        
            <Button
              
              className=" rounded-xl bg-mainColor text-white text-xl  "
              variant={"outline"}
              onClick={handleCart}
            >
              View cart
            </Button>
          
        </div>
            
          </DropdownMenuItem>
        
        </DropdownMenuGroup>
      
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

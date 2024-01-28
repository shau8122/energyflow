
import profilePicPlaceholder from "@/public/profile-pic-placeholder.png"
import { Button } from "@/components/ui/button"
import { useCurrentUser } from "@/hooks/useCurrentUser"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,

  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import Image from "next/image"
import Link from "next/link"
import toast from "react-hot-toast"
import { logout } from "@/action/logout"

export function UserMenuButton() {
  const handleClick = () => {
    logout()
    .then(()=>{
      toast.success("Logged out successfully")
    })
  };
  const user = useCurrentUser();
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button>
        {user ? (
          <Image
            src={
              user?.image || 
              profilePicPlaceholder}
            alt="Profile picture"
            width={40}
            height={40}
            className="w-10 rounded-full"
          />
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            className="inline-block h-5 w-5 stroke-mainColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"
            />
          </svg>
        )}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-64 bg-white rounded-xl mr-4">
        <DropdownMenuLabel>My Account</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuItem>
            
            {user ? (
             <Button
             className="rounded-xl bg-mainColor text-white text-xl"
             variant="outline"
             onClick={handleClick}
           >
             Sign Out
           </Button>
          ) : (
            <Link
            
                
                  href="/auth/login"
                  className="ml-4"
            >Sign In</Link>
          )}
         
           
          </DropdownMenuItem>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

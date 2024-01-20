"use client"

import { ColumnDef } from "@tanstack/react-table"
import { ArrowUpDown, FileIcon } from "lucide-react"

import { OrderWithLabel } from "./TableWrapper"
import { Button } from "@/components/ui/button"
import { formatPrice } from "@/libs/format"
import { cn } from "@/libs/utils"
import { Badge } from "@/components/ui/badge"

export const columns: ColumnDef<OrderWithLabel>[] = [
  {
    accessorKey:"name",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Title
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      )
    },
  },
  {
    accessorKey: "quantity",
    header: "Quantity",
  },
  {
    accessorKey: "price",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Price
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      )
    },
    cell: ({ row }) => {
      const price = parseFloat(row.getValue("price") || "0");

      return <div>{formatPrice(price)}</div>
    }
  },
  {
    accessorKey:"progress",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Progress
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      )
    },
    cell: ({ row }) => {
      const progress = row.getValue("progress");
      return (
        <Badge className={cn(
          "text-white",
          progress=='COMPLETED' && "bg-blue-500",
          progress=='PENDING' && "bg-yellow-500",
          progress=="REJECTED" && "bg-red-500",
          progress=="APPROVE" && "bg-green-500",
        )}>
          {progress=='COMPLETED' &&"Completed"}
          {progress=='PENDING' && "Pending"}
          {progress=="REJECTED" && "Rejected"}
          {progress=="APPROVE" && "Approve"}
        </Badge>
      )
    }
  },
]

"use client"

import { FileType } from "./TableWrapper"
import { ColumnDef } from "@tanstack/react-table"



export const columns: ColumnDef<FileType>[] = [
  {
    accessorKey:"img",
    header:"Picture",
  },
  {
    accessorKey:"name",
    header: "Title"},
  {
    accessorKey:"quantity",
    header:"Quantity"
  },
  {
    accessorKey:"price",
    header:"Price"
  }
]

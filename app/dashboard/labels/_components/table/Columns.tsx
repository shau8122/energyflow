"use client"

import { FileType } from "./TableWrapper"
import { ColumnDef } from "@tanstack/react-table"
import { FileIcon } from "lucide-react"
import Link from "next/link"
// import prettyBytes from "pretty-bytes"
// import {FileIcon, defaultStyles} from "react-file-icon"

export const columns: ColumnDef<FileType>[] = [
  {
    accessorKey:"name",
    header:"Name",
  },
  {
    accessorKey: "cdrUrl",
    header: "Cdr File",
    cell:({renderValue, ...props})=>(
      <Link
        href={renderValue() as string}
        target="_blank"
        className="underline text-blue-500 hover:text-blue-600"
      >
        Download
      </Link>
    )
  },
  {
    accessorKey: "imgUrl",
    header: "Img File",
    cell:({renderValue, ...props})=>(
      <Link
        href={renderValue() as string}
        target="_blank"
        className="underline text-blue-500 hover:text-blue-600"
      >
        Download
      </Link>
    )
  },
  {
    accessorKey:"createdAt",
    header:"Created At",
  },
]

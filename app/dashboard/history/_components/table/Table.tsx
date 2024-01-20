"use client";

import {
  ColumnDef,
  ColumnFiltersState,
  SortingState,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
// import { FileType } from "@/typing";
import { Delete, PencilIcon, PlusCircle, TrashIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Order } from "@prisma/client";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import { useEffect, useState } from "react";
import { DeleteModal } from "../DeleteModal";
// import { useAppStore } from "@/store";
// import { DeleteModal } from "../Deletemodal";
// import { RenameModal } from "../RenameModal";

interface DataTableProps<TData, TValue> {
  columns: ColumnDef<TData, TValue>[];
  data: TData[];
}

export function DataTable<TData, TValue>({
  columns,
  data,
}: DataTableProps<TData, TValue>) {
  const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([])
  const [sorting, setSorting] = useState<SortingState>([]);
  const [isDeletedModalOpen,setIsDeleteModalOpen]= useState(false)
  const [fileId, setFileId] = useState("");
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    onSortingChange: setSorting,
    getSortedRowModel: getSortedRowModel(),
    onColumnFiltersChange: setColumnFilters,
    getFilteredRowModel: getFilteredRowModel(),
    state: {
      sorting,
      columnFilters,
    },
  });
  const openDeleteModal = (fileId: string) => {
    setFileId(fileId)
  };
  
  useEffect(() => {

    if(fileId!==""){
      setIsDeleteModalOpen(true)
    }
    
  }, [fileId])

  return (
    <div>
      <DeleteModal isDeleteModalOpen={isDeletedModalOpen} setIsDeleteModalOpen={setIsDeleteModalOpen} fileId={fileId} />
       <div className="flex items-center py-4 justify-between">
        <Input
          placeholder="Filter order..."
          value={(table.getColumn("name")?.getFilterValue() as string) ?? ""}
          onChange={(event) =>
            table.getColumn("name")?.setFilterValue(event.target.value)
          }
          className="max-w-sm rounded-xl ml-4"
        />
        <Link href="/dashboard/place">
          <Button>
            <PlusCircle className="h-4 w-4 mr-2" />
            New order
          </Button>
        </Link>
      </div>
    <div className="rounded-md border">
      
      <Table>
        <TableHeader>
          {table.getHeaderGroups().map((headerGroup) => (
            <TableRow key={headerGroup.id}>
              {headerGroup.headers.map((header) => {
                return (
                  <TableHead key={header.id}>
                    {header.isPlaceholder
                      ? null
                      : flexRender(
                          header.column.columnDef.header,
                          header.getContext()
                        )}
                  </TableHead>
                );
              })}
            </TableRow>
          ))}
        </TableHeader>
        <TableBody>
          {table.getRowModel().rows?.length ? (
            table.getRowModel().rows.map((row) => (
              <TableRow
                key={row.id}
                data-state={row.getIsSelected() && "selected"}
              >
                {row.getVisibleCells().map((cell) => (
                  <TableCell key={cell.id}>
                    {cell.column.id==="name" ? (
                      <div className="flex flex-col">
                      {cell.getValue() as string ===undefined ? <p className="text-red-500 font-semibold">Label Deleted</p>:cell.getValue() as string}
                    </div>
                    ):(flexRender(cell.column.columnDef.cell, cell.getContext()))}
                  </TableCell>
                ))}
                <TableCell key={(row.original as Order).id}>
                  <Button
                    variant={"outline"}
                    onClick={() => {
                      openDeleteModal((row.original as Order).id)
                    }}
                  >
                    <TrashIcon size={20} />
                  </Button>
                </TableCell>
              </TableRow>
            ))
          ) : (
            <TableRow>
              <TableCell colSpan={columns.length} className="h-24 text-center">
                You have No Order history
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </div>
    <div className="flex items-center  justify-end space-x-2 py-4 mx-2">
        <Button
          variant="outline"
          size="sm"
          className="rounded-xl"
          onClick={() => table.previousPage()}
          disabled={!table.getCanPreviousPage()}
        >
          Previous
        </Button>
        <Button
          variant="outline"
          size="sm"
          className="rounded-xl px-4"
          onClick={() => table.nextPage()}
          disabled={!table.getCanNextPage()}
        >
          Next
        </Button>
      </div>
    </div>
  );
}

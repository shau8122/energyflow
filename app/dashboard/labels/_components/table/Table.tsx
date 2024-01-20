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
import { FileType } from "./TableWrapper";
import { Delete, PencilIcon, PlusCircle, TrashIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import { useEffect, useState } from "react";
import { RenameModal } from "../RenameModal";
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
  const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([]);
  const [sorting, setSorting] = useState<SortingState>([]);
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
  const [isRenameModalOpen,setIsRenameModalOpen]= useState(false)
  const [isDeletedModalOpen,setIsDeleteModalOpen]= useState(false)
  const [fileId, setFileId] = useState("");
  const [filename,setFilename]= useState("")
  const openDeleteModal = (fileId: string) => {
    setFileId(fileId)
    setFilename("")
  };
  const openRenameModal = (fileId: string, filename: string) => {
    setFileId(fileId)
    setFilename(filename)
  };
  useEffect(() => {

    if(fileId!=="" && filename!==""){
      setIsRenameModalOpen(true)
    }
    if(fileId!=="" && filename===""){
      setIsDeleteModalOpen(true)
    }
    
  }, [fileId,filename])

  
  return (
    <div>
      <RenameModal isRenameModalOpen={isRenameModalOpen} setIsRenameModalOpen={setIsRenameModalOpen} fileId={fileId} filename={filename}  />
      <DeleteModal isDeleteModalOpen={isDeletedModalOpen} setIsDeleteModalOpen={setIsDeleteModalOpen} fileId={fileId} />
      <div className="flex items-center py-4 justify-between">
        <Input
          placeholder="Filter name..."
          value={(table.getColumn("name")?.getFilterValue() as string) ?? ""}
          onChange={(event) =>
            table.getColumn("name")?.setFilterValue(event.target.value)
          }
          className="max-w-sm ml-4 rounded-xl"
        />
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
                  {/* <DeleteModal /> */}
                 {row.getVisibleCells().map((cell) => (
                    <TableCell key={cell.id}>
                      {cell.column.id === "createdAt" ? (
                        <div className="flex flex-col">
                          <div className="text-sm">
                            {(cell.getValue() as Date).toLocaleDateString()}
                          </div>
                          <div className="text-xs text-gray-500">
                            {(cell.getValue() as Date).toLocaleTimeString()}
                          </div>
                        </div>
                      ) : cell.column.id === "name" ? (
                        <p
                          onClick={() => {
                            openRenameModal((row.original as FileType).id,(row.original as FileType).name)
                          }}
                          className="underline flex items-center to-blue-500 hover:cursor-pointer"
                        >
                          {cell.getValue() as string}{" "}
                          <PencilIcon size={15} className="ml-2 inline-block" />
                        </p>
                      ) : (
                        flexRender(
                          cell.column.columnDef.cell,
                          cell.getContext()
                        )
                      )}
                      {/* )} */}
                    </TableCell>
                  ))}
                  <TableCell key={(row.original as FileType).id}>
                    <Button
                      variant={"outline"}
                      onClick={() => {
                        openDeleteModal((row.original as FileType).id);
                      }}
                    >
                      <TrashIcon size={20} />
                    </Button>
                  </TableCell>
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell
                  colSpan={columns.length}
                  className="h-24 text-center"
                >
                  You dont have label
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
          className="rounded-xl px-4 "
          onClick={() => table.nextPage()}
          disabled={!table.getCanNextPage()}
        >
          Next
        </Button>
      </div>
    </div>
  );
}

'use client'

import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select02"

import { CgMenuLeftAlt } from "react-icons/cg";

import { cn } from "@/lib/utils"

function ComboBoxCate() {
  return (
    <div>
       <Select>
        <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="Select a Category" />
        </SelectTrigger>
        <SelectContent>
        <SelectGroup>
            <SelectLabel>All Category</SelectLabel>
            <SelectItem value="car">Car</SelectItem>
            <SelectItem value="clothes">Clothes</SelectItem>
            <SelectItem value="electronics">Laptop</SelectItem>
            <SelectItem value="destop">Destop</SelectItem>
            <SelectItem value="camera">Camera</SelectItem>
            <SelectItem value="toys">Toys</SelectItem>
        </SelectGroup>
        </SelectContent>
    </Select>
    </div>
  )
}

export default ComboBoxCate

'use client'
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select"

import { CgMenuLeftAlt } from "react-icons/cg";

const SelectCategory = () => {
    return (
        <div className="hidden md:flex">
            <Select>
              <SelectTrigger className="w-[300px]">
                <CgMenuLeftAlt className="text-3xl font-bold" />
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

export default SelectCategory;



"use client"
import React from 'react'


type Props = {
  value: string;
  onchange: (value: string) => void;
};


const SearchBar = ({value,onchange}:Props) => {
  return (
    <input type="text" placeholder='Clothes....' onChange={(e) => onchange(e.target.value)}
    className="w-full border rounded-md px-4 py-2"
    />
  )
}

export default SearchBar
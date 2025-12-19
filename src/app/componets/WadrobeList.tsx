"use client"
import React from 'react'
import { WardrobeItem } from '../types/wadrobe';
import WadrobeCard from "../componets/WadrobeCard";
type Props = {
  items: WardrobeItem[];
};

const WadrobeList = ({items}:Props) => {
    // if (items.length === 0) {
    //     return <div>No Items Available</div>
    // }
  return (
    <div>
        {items.length === 0 ? (<div>No Product Available</div>) : (items.map((item) => {
            return <WadrobeCard key={item.id} item={item}/>
        }))}
    </div>
  )
}

export default WadrobeList
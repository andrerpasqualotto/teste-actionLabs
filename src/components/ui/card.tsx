//for components
import React from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { dateFormat } from "@/utils";

type Props = {
  open:number;
  high:number;
  low:number;
  close:number;
  date:string;
  index:number;
  percentage:number;
};

const Card = ({open, high, low, close, date,percentage}: Props) => (
  <div className="card__wrapper w-[330px]">
    <div className="card__grid bg-background grid grid-cols-2 grid-rows-4 gap-x-2 gap-y-4 p-4">
      <div className="text-primary text-sm">{dateFormat(date, false)}</div>
      <div className="row-start-2 flex justify-between items-center">
        <span className="text-[11px] font-medium">OPEN:</span>
        <span className="text-base font-semibold">{open.toString()}</span>
      </div>
      <div className="row-start-2 flex justify-between items-center">
        <span className="text-[11px] font-medium">HIGH:</span>
        <span className="text-base font-semibold">{high.toString()}</span>
      </div>
      <div className="row-start-3 flex justify-between items-center">
        <span className="text-[11px] font-medium">CLOSE:</span>
        <span className="text-base font-semibold">{close.toString()}</span>
      </div>
      <div className="row-start-3 flex justify-between items-center">
        <span className="text-[10px] font-medium">LOW:</span>
        <span className="text-base font-semibold">{low.toString()}</span>
      </div>
      <div className="row-start-4 flex justify-between items-center">
        <span className="text-[11px] font-medium">CLOSE DIFF (%)</span>
        <span className={(percentage==0? "text-base" : (percentage>0? "text-diff-up" : "text-diff-down"))+ " font-semibold"}>{percentage.toString() + "%"}</span>
      </div>
      <div className="row-start-4 flex justify-between items-center">
        {percentage<0 &&<ChevronDown className="text-diff-down h-6 w-6"></ChevronDown>}
        {percentage>0 &&<ChevronUp className="text-diff-up h-6 w-6"></ChevronUp>}
        
      </div>
    </div>
  </div>
);

export default Card;

import React from "react";
import { dateFormat } from "@/utils";
type Props = {
  currency: string;
  date: string;
  className?:string;
};

const ExchangeData = ({ currency, date, className }: Props) => (
  <div className={className}>
    <div className="grid grid-cols-5 grid-rows-1 m-[15px]">
      <div className="col-span-3">
        <p className="text-lg font-semibold">Exchange rate now</p>
        <p className="text-sm">{dateFormat(date, true)}</p>
      </div>
      <div className="col-start-4 text-primary flex items-center font-semibold">
        <p className="text-2xl">{currency}/BRL</p>
      </div>
    </div>
  </div>
);

export default ExchangeData;

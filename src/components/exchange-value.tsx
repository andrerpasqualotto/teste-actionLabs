import React from "react";

type Props = {
  currencyValue: string;
  date: string;
  className?:string;
};

const ExchangeValue = ({currencyValue,className }: Props) => (
  <div className={className}>
    <div className="text-center">
      <p className="text-[32px] font-bold text-primary py-4 ">R$ {currencyValue}</p>
    </div>
  </div>
);

export default ExchangeValue;

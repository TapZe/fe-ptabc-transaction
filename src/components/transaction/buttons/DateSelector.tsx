import React from "react";
import { TransactionTypeBoughtState } from "../../../types/transactionTypes";

const DateSelector: React.FC<TransactionTypeBoughtState> = ({
  setTypeBoughtParams,
  typeBoughtParams,
}) => {
  const handleFromDateChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTypeBoughtParams({
      ...typeBoughtParams,
      from: event.target.value,
    });
  };

  const handleToDateChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTypeBoughtParams({
      ...typeBoughtParams,
      to: event.target.value,
    });
  };

  return (
    <div className="flex flex-row gap-4 p-4">
      <div className="flex items-center">
        <label htmlFor="from" className="mr-2">
          From:
        </label>
        <input
          type="date"
          id="from"
          className="input input-bordered w-full max-w-xs"
          onChange={handleFromDateChange}
        />
      </div>
      <div className="flex items-center">
        <label htmlFor="to" className="mr-2">
          To:
        </label>
        <input
          type="date"
          id="to"
          className="input input-bordered w-full max-w-xs"
          onChange={handleToDateChange}
        />
      </div>
    </div>
  );
};

export default DateSelector;

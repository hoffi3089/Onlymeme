import React from "react";

import { formatBigNumber, offsetDate } from "../utils";

interface LiquidityCardPropsType {
	data: LiquidityDataType;
}

const LiquidityCard: React.FC<LiquidityCardPropsType> = (
	{ data }
) => {
	return (
		<div className="card p-5 cursor-pointer border-[1px] border-transparent hover:bg-lightBackground hover:border-black flex flex-col justify-between h-[100%]">
			<div>
				<img src={data.image} alt={data.image} className="w-[80px]" />
			</div>
			<div className="mt-5">
				<div className="flex flex-wrap items-center" style={{ columnGap: '0.4rem' }}>
					<div className="font-semibold">Created by</div>
					<img src={data.createdByLogo} alt={data.createdByLogo} className="w-[20px]" />
					<div className="font-semibold">{data.createdBy}</div>
					<div className="text-customGray">{offsetDate(data.created)}</div>
				</div>
				<div className="text-primary text-xl font-bold mt-1 underline-text">{data.title}</div>
				<div className="mt-1">{data.description.length > 150 ? `${data.description.slice(0, 147)}...` : data.description}</div>
				<div className="flex items-center flex-wrap mt-3" style={{ columnGap: '15px' }}>
					<div className="text-secondary text-md font-semibold">apr: {data.apr}%</div>
					<div className="text-md font-semibold">fees (24h): ${formatBigNumber(data.fees)}</div>
					<div className="text-md font-semibold">tvl: ${formatBigNumber(data.tvl)}</div>
				</div>
			</div>
		</div>
	)
}

export default LiquidityCard;
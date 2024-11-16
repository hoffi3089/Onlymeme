import React from "react";
import Icon from "./icons";
import { formatBigNumber, offsetDate } from "../utils";

interface VoteCardPropsType {
	data: VoteDataType;
}

const VoteCard: React.FC<VoteCardPropsType> = (
	{ data }
) => {

	const [checked, setChecked] = React.useState(false);
	
	const onVoteClick = () => {
		setChecked(!checked);
	}

	return (
		<div
			className="card p-5 cursor-pointer border-[1px] border-transparent hover:bg-lightBackground hover:border-black flex flex-col justify-between h-[100%]"
			onClick={onVoteClick}
		>
			<div className="flex items-start justify-between gap-2">
				<img src={data.image} alt={data.image} className="w-[80px]" />
				<div>
					<div className="flex items-center justify-end gap-[0.35rem]">
						<label className="custom-checkbox shrink-0">
							<input type="checkbox" checked={checked} defaultChecked onChange={() => {}} />
							<div className="checkmark"></div>
						</label>
						<div className="text-customGray text-md text-right">vote</div>
					</div>
					<div className="font-semibold text-md underline-text mt-2 text-right">reward estimate: ${data.rewardEstimate}</div>
				</div>
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
				<div className="flex items-center flex-wrap justify-between mt-3 text-md" style={{ columnGap: '10px' }}>
					<div className="flex items-center flex-wrap" style={{ columnGap: '10px' }}>
						<div className="text-secondary font-semibold">bribes: ${formatBigNumber(data.bribes)}</div>
						<div className="font-semibold" style={{textShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)'}}>tvl: ${formatBigNumber(data.tvl)}</div>
					</div>
					<div className="font-semibold">total votes: {data.totalVotes}%</div>
				</div>
			</div>
		</div>
	)
}

export default VoteCard;
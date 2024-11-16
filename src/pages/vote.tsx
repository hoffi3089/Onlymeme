import React from "react";

import { tempVotes } from "../temp";
import VoteCard from "../components/vote-card";

const VotePage: React.FC = () => {

	const [votes, setVotes] = React.useState<VoteDataType[]>([]);

	const getVotes = () => {
		try {
			setVotes(tempVotes);
		} catch (error) {
			console.log("getting votes error: ", error);
		}
	}

	React.useEffect(() => {
		getVotes();
	}, [])

	return (
		<div>
			<div className="border-[1px] border-darkPrimary">
				<div className="bg-darkBackground py-2 px-2 text-white flex items-center justify-between gap-2 text-lg font-semibold">
					<div>Incentivize your favourite meme</div>
					<div className="text-right">Epoch #83 Ends in:</div>
				</div>
				<div className="bg-lightBackground py-5 px-2 flex items-center justify-between gap-2">
					<div>Use your $OM to vote on directing emissions to your favorite memes. Share voting incentives to encourage others to do the same.</div>
					<div className="text-darkBackground font-semibold text-right">4 days, 10 hours, 53 minutes, 23 seconds</div>
				</div>
			</div>
			<div className="grid lg:grid-cols-3 md:grid-cols-2 gap-5 mt-5">
				{votes.map((i, k) => (
					<div key={k} className="h-[100%]">
						<VoteCard data={i} />
					</div>
				))}
			</div>
		</div>
	)
}

export default VotePage;
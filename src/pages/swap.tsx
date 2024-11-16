import React from "react";

import SwapCard from "../components/swap-card";


const SwapPage: React.FC = () => {

	return (
		<div className="w-[100%] flex justify-center">
			<div className="xl:w-[500px] lg:w-[500px] md:w-[500px] w-[100%] mt-5">
				<SwapCard />
			</div>
		</div>
	)
}

export default SwapPage;
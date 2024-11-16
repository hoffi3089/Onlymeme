import React from "react";
import { Link } from "react-router-dom";

import { tempLiquidities } from "../temp";
import LiquidityCard from "../components/liquidity-card";

const LiquidityPage: React.FC = () => {

	const [liquidities, setLiquidities] = React.useState<LiquidityDataType[]>([]);

	const getLiquidities = () => {
		try {
			setLiquidities(tempLiquidities);
		} catch (error) {
			console.log("getting liquidities error: ", error);
		}
	}

	React.useEffect(() => {
		getLiquidities();
	}, [])

	return (
		<div>
			<div className="border-[1px] border-darkPrimary">
				<div className="bg-darkBackground py-2 px-2 text-white text-lg font-semibold">
					<div>Provide Liquidity</div>
				</div>
				<div className="bg-lightBackground py-5 px-2">
					<div>Create a new pair or add liquidity to existing positions.</div>
				</div>
			</div>
			<div className="grid lg:grid-cols-3 md:grid-cols-2 gap-5 mt-5">
				{liquidities.map((i, k) => (
					<Link to='/liquidity/2024' key={k} className="h-[100%]">
						<LiquidityCard data={i} />
					</Link>
				))}
			</div>
		</div>
	)
}

export default LiquidityPage;
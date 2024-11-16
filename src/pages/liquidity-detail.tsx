import React from "react";
import { Link } from "react-router-dom";
import { AdvancedRealTimeChart } from "react-ts-tradingview-widgets";

import SwapCard from "../components/swap-card";
import DepositWithdrawCard from "../components/deposit-withdraw-card";
import { tempLiquidityDetail } from "../temp";
import { copyToClipboard, formatBigNumber, numberWithCommas, offsetDate } from "../utils";

const LiquidityDetailPage: React.FC = () => {

	const [data, setData] = React.useState<LiquidityDetailDataType | null>(null);

	const getLiquidityDetailData = () => {
		try {
			setData(tempLiquidityDetail);
		} catch (error) {
			console.log("Getting liquidity detail data error: ", error);
		}
	}

	React.useEffect(() => {
		getLiquidityDetailData();
	}, [])

	return (
		<div className="w-full">
			<div>
				<Link to='/liquidity' className="text-black">[go back]</Link>
			</div>
			<div className="grid lg:grid-cols-7 gap-5 lg:mt-7 mt-5">
				<div className="xl:col-span-5 lg:col-span-4">
					{!!data && (
						<div>
							<div>
								<img src={data.logo} alt={data.logo} className="w-[60px]" />
								<div className="mt-3 flex items-center justify-between flex-wrap" style={{ columnGap: '0.75rem', rowGap: '0.2rem' }}>
									<div className="text-xl text-primary font-semibold">{data.title}</div>
									<div className="flex items-center gap-2 font-semibold">
										<div>Created by</div>
										<img src={data.createdByLogo} alt={data.createdByLogo} className="w-[20px]" />
										<div>{data.createdBy}</div>
										<div className="text-primary">{offsetDate(data.created)}</div>
									</div>
								</div>
								<div className="mt-2 flex items-center justify-between flex-wrap" style={{ columnGap: '0.75rem', rowGap: '0.2rem' }}>
									<div className="flex items-center gap-2">
										<div className="text-tertiary font-semibold">marketcap: ${formatBigNumber(data.marketcap)}</div>
										<div>fees (24h): ${formatBigNumber(data.fees)}</div>
									</div>
									<div className="flex items-center gap-2 flex-wrap">
										<div className="text-wrap">{data.address}</div>
										<button className="bg-transparent underline" onClick={() => copyToClipboard(data.address)}>copy</button>
									</div>
								</div>
							</div>
							<div className="mt-7 trading-view">
								<div id="tradingview_f42fd"></div>
								<AdvancedRealTimeChart
									theme="dark"
									container_id="tradingview_f42fd"
									autosize
								// symbol="SANIK"
								></AdvancedRealTimeChart>
							</div>
							<div className="mt-7 flex justify-between gap-3 lg:flex-nowrap flex-wrap">
								<div className="lg:max-w-[700px]">
									<div className="text-primary font-semibold">About</div>
									<div className="mt-2">{data.about}</div>
								</div>
								<div>
									<div className="text-primary font-semibold flex lg:justify-end justify-start">Links</div>
									<div className="flex items-center justify-end gap-2 mt-2">
										<a href={data.links.twitter} className="text-primary underline">twitter</a>
										<a href={data.links.discord} className="text-primary underline">discord</a>
										<a href={data.links.website} className="text-primary underline">website</a>
										<a href={data.links.medium} className="text-primary underline">medium</a>
									</div>
								</div>
							</div>
							<div className="mt-7 flex items-center gap-5 flex-wrap">
								<div>
									<div className="text-primary font-semibold">Max Total Supply</div>
									<div className="mt-2">{numberWithCommas(data.maxTotalSupply)} {data.symbol}</div>
								</div>
								<div>
									<div className="text-primary font-semibold">Circulating Supply</div>
									<div className="mt-2">{numberWithCommas(data.circulatingSupply)} {data.symbol}</div>
								</div>
								<div>
									<div className="text-primary font-semibold">Volume</div>
									<div className="mt-2">${numberWithCommas(data.volume)}</div>
								</div>
								<div>
									<div className="text-primary font-semibold">Holders</div>
									<div className="mt-2">{data.holders}</div>
								</div>
								<div>
									<div className="text-primary font-semibold">Liquidity</div>
									<div className="mt-2">${formatBigNumber(data.liquidity)}</div>
								</div>
							</div>
						</div>
					)}
				</div>
				<div className="xl:col-span-2 lg:col-span-3 flex flex-col items-center">
					<div className="lg:w-full md:w-[500px] w-full">
						<DepositWithdrawCard />
						<div className="mt-3">
							<SwapCard />
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default LiquidityDetailPage;
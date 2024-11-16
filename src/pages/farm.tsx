import React from "react";
import { tempFarms } from "../temp";
import { cn, formatBigNumber } from "../utils";

const FarmPage: React.FC = () => {

  const [farmData, setFarmData] = React.useState<FarmDataType[]>([]);

  const getFarmData = () => {
    try {
      setFarmData(tempFarms);
    } catch (error) {
      console.log("Getting farm data error: ", error);
    }
  }

  React.useEffect(() => {
    getFarmData();
  }, [])

  return (
    <div className="max-w-[1200px] mx-auto">
      <div className="border-[1px] border-darkPrimary">
        <div className="bg-lightTertiary py-2 px-2 text-white flex items-center justify-between gap-2">
          <div className="text-lg font-semibold text-darkTertiary">Farm your favourite meme</div>
          <button className="text-black text-md">[claim all]</button>
        </div>
        <div className="bg-brightTertiary py-5 px-2">
          <div className="text-md">Farm your favorite meme and make it go viral! Earn rewards in $OM by simply adding liquidity to your favourite pairs!</div>
        </div>
      </div>
      <div className="mt-5 overflow-auto max-h-[700px]">
        <table className="w-[100%] border-[1px] border-darkPrimary min-w-[700px]" cellPadding='10px'>
          <thead>
            <tr className="bg-lightTertiary">
              <th className="text-darkTertiary py-3 pl-3 text-left">Pairs</th>
              <th className="text-darkTertiary py-3 text-left">APR</th>
              <th className="text-darkTertiary py-3 text-left">TVL</th>
              <th className="text-darkTertiary py-3 text-left">Deposited</th>
              <th className="text-darkTertiary py-3 pr-3 text-right">Reward</th>
            </tr>
          </thead>
          <tbody className="bg-brightTertiary font-semibold w-full">
            {farmData.map((i, k) => (
              <tr key={k} className={cn(k === (farmData.length - 1) ? '' : 'border-b-[1px]')}>
                <td>
                  <div className="flex items-center gap-2">
                    <div className="flex items-center">
                      <img src={i.pairLogos[0]} alt={i.pairLogos[0]} className="w-[45px]" />
                      <img src={i.pairLogos[1]} alt={i.pairLogos[1]} className="w-[45px] ml-[-15px]" />
                    </div>
                    <div className="text-md text-darkTertiary">{i.pairs[0]}-{i.pairs[1]}</div>
                  </div>
                </td>
                <td>{i.apr}%</td>
                <td>${formatBigNumber(i.tvl)}</td>
                <td>${i.deposited}</td>
                <td>
                  <div className="flex items-center justify-end text-primary gap-[7px]">
                    <div>{i.reward}</div>
                    <img src="/images/coin.png" alt="coin" className="w-[32px]" />
                    <div>/day</div>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default FarmPage;
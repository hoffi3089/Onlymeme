import React from "react";
import { useWeb3Modal } from "@web3modal/wagmi/react";

import Icon from "./icons";
import { cn, validNumberChar } from "../utils";
import SelectTokenDialog from "./select-token";
import { useAccount } from "wagmi";
import { DEFAULT_CHAIN_ID } from "../constant";

interface SwapCardStatusType {
	slippage: string;
	inputValue: string;
	outputValue: string;
	balance: number;
}

const SwapCard: React.FC = () => {

	const [status, setStatus] = React.useState<SwapCardStatusType>({
		slippage: '',
		inputValue: '',
		outputValue: '',
		balance: 0.000342
	});
	const [modalStatus, setModalStatus] = React.useState(false);

	const { open } = useWeb3Modal();
	const { address, chainId } = useAccount();
	const correctNetwork = (chainId == DEFAULT_CHAIN_ID);

	const onSubmit = () => {
		if (!address || !correctNetwork) {
			open();
		} else {
			
		}
	}

	const onSlippageChange = (value: string) => {
		let _value = Number(value);
		if (_value < 0) _value = 0;
		else if (_value > 100) _value = 100;
		setStatus({...status, slippage: _value.toString()});
	}

	const onInputMax = () => {

	}

	const onOutputMax = () => {

	}

	return (
		<div>
			<div className="border-[1px] border-darkPrimary">
				<div className="bg-darkBackground py-2 px-3 h-[45px]">
					<div className="text-lg text-white font-semibold">Swap</div>
				</div> 
				<div className="bg-lightBackground py-4 px-3">
					<div>
						<div>
							<button className="flex items-center gap-2 border-[1px] border-darkPrimary py-2 px-3" onClick={() => setModalStatus(true)}>
								<img src="/images/token1.png" alt="token1" className="w-[30px]" />
								<div className="text-lg">FTM</div>
								<div className="shrink-0 flex items-center">
									<Icon icon="DownFillArrow" size={12} />
								</div>
							</button>
						</div>
						<div className="mt-3">
							<input
								type="text"
								className="text-[2rem] outline-none bg-transparent"
								onChange={e => setStatus({...status, inputValue: e.target.value})}
								onKeyDown={e=>!validNumberChar(e.key) && e.preventDefault()}
							/>
						</div>
						<div className="flex items-center justify-between gap-2">
							<div className="text-customGray">~$0,00</div>
							<div className="flex items-center gap-2">
								<div>balance: {status.balance}</div>
								<button onClick={onInputMax} className="px-[7px] py-[6px] bg-darkBackground text-white hover:bg-primary">MAX</button>
							</div>
						</div>
					</div>
					<div className="mt-3 mb-3 flex items-center justify-center">
						<button className="text-customGray">
							<Icon icon="DownArrow" size={22} />
						</button>
					</div>
					<div>
						<div>
							<button className="flex items-center gap-2 border-[1px] border-darkPrimary py-2 px-3" onClick={() => setModalStatus(true)}>
								<img src="/images/token2.png" alt="token2" className="w-[30px]" />
								<div className="text-lg">SANIK</div>
								<div className="shrink-0 flex items-center">
									<Icon icon="DownFillArrow" size={12} />
								</div>
							</button>
						</div>
						<div className="mt-3">
							<input
								type="text"
								className="text-[2rem] outline-none bg-transparent"
								onChange={e => setStatus({...status, inputValue: e.target.value})}
								onKeyDown={e=>!validNumberChar(e.key) && e.preventDefault()}
							/>
						</div>
						<div className="flex items-center justify-between gap-2">
							<div className="text-customGray">~$0,00</div>
							<div className="flex items-center gap-2">
								<div>balance: {status.balance}</div>
								<button onClick={onOutputMax} className="px-[7px] py-[6px] bg-darkBackground text-white hover:bg-primary">MAX</button>
							</div>
						</div>
					</div>
					<button
						className="bg-lightPrimary py-4 px-5 w-full font-semibold mt-5 hover:bg-hoverPrimary hover:text-white border-[1px] border-darkPrimary"
						onClick={onSubmit}
					>
						{!!address ? (!correctNetwork ? 'Switch Network' : 'Swap') : 'Connect Wallet'}
					</button>
					<div className="flex items-center justify-between gap-2 mt-5">
						<div>Slippage</div>
						<div className="border-[1px] border-darkPrimary  py-1 px-2 flex items-center gap-2">
							<div>%</div>
							<input
								type="text"
								value={status.slippage}
								className="w-[30px] outline-none bg-transparent text-right"
								onChange={e => onSlippageChange(e.target.value)}
								onKeyDown={e=>!validNumberChar(e.key) && e.preventDefault()}
							/>
						</div>
					</div>
				</div>
			</div>
			<SelectTokenDialog open={modalStatus} setOpen={(open: boolean) => setModalStatus(open)} />
		</div>
	)
}

export default SwapCard;
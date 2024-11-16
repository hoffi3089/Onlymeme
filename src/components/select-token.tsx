import React from "react";
import { Dialog, DialogBackdrop, DialogPanel, DialogTitle } from '@headlessui/react'

import Icon from "./icons";
import { tempAllCoins, tempHotCoinsList } from "../temp";
import { cn, numberWithCommas } from "../utils";

interface SelecteTokenDialogProps {
	open: boolean;
	setOpen: (open: boolean) => void;
}

const SelectTokenDialog: React.FC<SelecteTokenDialogProps> = ({
	open,
	setOpen
}) => {

	const [allCoins, setAllCoins] = React.useState<CoinDataType[]>([]);
	const [hotCoins, setHotCoins] = React.useState<HotCoinListDataType[]>([]);
	const [modalStatus, setModalStatus] = React.useState(open);

	const getCoinData = () => {
		try {
			setAllCoins(tempAllCoins);
			setHotCoins(tempHotCoinsList);
		} catch (error) {
			console.log("Getting coin data error: ", error);
		}
	}

	const onCoinClick = () => {
		setModal(false);
	}

	const setModal = (status: boolean) => {
		setModalStatus(status);
		setOpen(status);
	}

	React.useEffect(() => {
		getCoinData();
	}, [])

	React.useEffect(() => {
		if (open !== modalStatus) {
			setModalStatus(open);
		}
	}, [open])

	return (
		<Dialog open={open} onClose={setModal} className="relative z-[999]">
			<DialogBackdrop
				transition
				className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in"
			/>

			<div className="fixed inset-0 z-10 w-screen overflow-y-auto">
				<div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
					<DialogPanel
						transition
						className="relative transform overflow-hidden rounded-none text-left shadow-xl transition-all data-[closed]:translate-y-4 data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in sm:my-8 max-w-[800px] w-full mx-2 data-[closed]:sm:translate-y-0 data-[closed]:sm:scale-95"
					>
						<div className="bg-darkBackground py-3 px-3 flex items-center justify-between gap-2">
							<div className="text-white text-xl font-semibold">Select Token</div>
							<button className="border-[1px] border-darkPrimary p-[1px]" onClick={() => setModal(false)}>
								<Icon icon="Close" size={18} />
							</button>
						</div>
						<div className="bg-lightBackground py-5 px-3">
							<div className="relative">
								<input
									type="text"
									placeholder="search by name, symbol or address"
									className="border-black border-[1px] py-2 px-3 rounded-[4px] outline-none max-w-[100%] pr-7 w-full bg-transparent"
								/>
								<button className="absolute top-[9.5px] right-[10px]">
									<Icon icon="Search" size={20} />
								</button>
							</div>
							<div className="mt-5">
								<div className="underline text-secondary">hot coins</div>
								<div className="grid lg:grid-cols-6 md:grid-cols-4 sm:grid-cols-3 grid-cols-2 gap-2 mt-3">
									{hotCoins.map((i, k) => (
										<div
											key={k}
											className="border-[1px] border-darkPrimary px-3 py-1 rounded-md flex items-center gap-2 w-full cursor-pointer hover:bg-background"
											onClick={() => onCoinClick()}
										>
											<img src={i.logo} alt={i.logo} className="w-[32px]" />
											<div className="font-semibold">{i.symbol}</div>
										</div>
									))}
								</div>
							</div>
							<div className="mt-5">
								<div>All coins</div>
								<div className="mt-3 border-[1px] border-darkPrimary rounded-md overflow-x-hidden overflow-y-auto md:max-h-[400px] max-h-[300px]">
									{allCoins.map((i, k) => (
										<div
											key={k}
											className={cn(
												"flex items-center justify-between gap-3 py-3 px-4 cursor-pointer hover:bg-background",
												k === (allCoins.length - 1) ? '' : 'border-b-[1px] border-darkPrimary'
											)}
											onClick={() => onCoinClick()}
										>
											<div className="flex items-center gap-2">
												<img src={i.logo} alt={i.logo} className="w-[40px]" />
												<div>
													<div className="text-md font-semibold">{i.symbol}</div>
													<div className="text-customGray">{i.name}</div>
												</div>
											</div>
											<div className="text-right">
												<div className="text-md font-semibold">{numberWithCommas(12205)}</div>
												<div className="text-customGray">~$2305.00</div>
											</div>
										</div>
									))}
								</div>
							</div>
						</div>
					</DialogPanel>
				</div>
			</div>
		</Dialog>
	)
}

export default SelectTokenDialog;
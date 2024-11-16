import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

import Icon from "../components/icons";
import { links, tempHotCoins } from "../temp";
import { cn } from "../utils";

const Header: React.FC = () => {

	const location = useLocation();
	const navigator = useNavigate();

	const containerRef = React.useRef<HTMLDivElement>(null);
	const scrollerRef = React.useRef<HTMLUListElement>(null);
	const [start, setStart] = React.useState(false);
	const [hotCoins, setHotCoins] = React.useState<HotCoinDataType[]>([]);

	function addAnimation() {
		if (containerRef.current && scrollerRef.current) {
			const scrollerContent = Array.from(scrollerRef.current.children);

			scrollerContent.forEach((item) => {
				const duplicatedItem = item.cloneNode(true);
				if (scrollerRef.current) {
					scrollerRef.current.appendChild(duplicatedItem);
				}
			});

			getDirection();
			getSpeed();
			setStart(true);
		}
	}
	const getDirection = () => {
		if (containerRef.current) {
			containerRef.current.style.setProperty("--animation-direction", "forwards");
		}
	};
	const getSpeed = () => {
		if (containerRef.current) {
			containerRef.current.style.setProperty("--animation-duration", "40s");
		}
	};

	const getHotCoinsData = () => {
		try {
			setHotCoins(tempHotCoins);
		} catch (error) {
			console.log("Getting hot coins data error: ", error);
		}
	}

	React.useEffect(() => {
		getHotCoinsData();
		addAnimation();
	}, []);

	return (
		<div>
			<div className="flex items-center justify-between gap-2 pt-5 pb-1 px-6 container">
				<Link to='/'>
					<img src="logo1.png" alt="logo" className="w-[120px]" />
				</Link>
				<div className="flex items-center gap-2">
					<a href={links.twitter} className="text-primary underline hover:text-primaryText">twitter</a>
					<a href={links.discord} className="text-primary underline hover:text-primaryText">discord</a>
					<a href={links.medium} className="text-primary underline hover:text-primaryText">medium</a>
				</div>
			</div>
			<div className="flex items-center justify-center gap-[7px] container">
				<button
					className="border-black border-t-[1px] border-b-0 border-l-[1px] border-r-[1px] rounded-t-lg bg-white w-[80px] h-[26px]"
					style={{ color: `${location.pathname.startsWith('/swap') ? 'var(--secondary)' : 'var(--text)'}` }}
					onClick={() => navigator("/swap")}
				>
					swap
				</button>
				<button
					className="border-black border-t-[1px] border-b-0 border-l-[1px] border-r-[1px] rounded-t-lg bg-white w-[80px] h-[26px]"
					style={{ color: `${location.pathname.startsWith('/liquidity') || location.pathname === '/' ? 'var(--secondary)' : 'var(--text)'}` }}
					onClick={() => navigator("/liquidity")}
				>
					liquidity
				</button>
				<button
					className="border-black border-t-[1px] border-b-0 border-l-[1px] border-r-[1px] rounded-t-lg bg-white w-[80px] h-[26px]"
					style={{ color: `${location.pathname.startsWith('/vote') ? 'var(--secondary)' : 'var(--text)'}` }}
					onClick={() => navigator("/vote")}
				>
					vote
				</button>
				<button
					className="border-black border-t-[1px] border-b-0 border-l-[1px] border-r-[1px] rounded-t-lg bg-white w-[80px] h-[26px]"
					style={{ color: `${location.pathname.startsWith('/farm') ? 'var(--secondary)' : 'var(--text)'}` }}
					onClick={() => navigator("/farm")}
				>
					farm
				</button>
			</div>
			<div className="bg-white border-black border-l-0 border-t-[1px] border-r-0 border-b-[1px] min-h-[50px] flex flex-col justify-center">
				<div className="container py-2 px-6">
					{(location.pathname === '/' || location.pathname === '/liquidity' || location.pathname === '/vote' || location.pathname === '/farm') ? (
						<div className="flex items-center justify-between gap-2">
							<div className="flex items-center gap-1">
								<div className="text-nowrap">type of meme:</div>
								<div>
									<select name="meme-type" id="meme-type" className="outline-none underline cursor-pointer">
										<option value="dogs">dogs</option>
									</select>
								</div>
							</div>
							<div className="flex-1 flex justify-end">
								<div className="relative">
									<input
										type="text"
										placeholder="search coin"
										className="border-black border-[1px] py-1 px-3 rounded-[4px] outline-none max-w-[100%] pr-7"
									/>
									<button className="absolute top-[8px] right-[10px]">
										<Icon icon="Search" size={18} />
									</button>
								</div>
							</div>
						</div>
					) : (
						<div ref={containerRef} className="scroller relative z-20 overflow-hidden max-w-[100vw] flex items-center font-semibold">
							<div className="relative">
								<div className="text-secondary underline text-nowrap bg-white z-[999] pr-5 h-[50px] flex items-center absolute top-[-26px] left-0">hot coins</div>
							</div>
							<ul
								ref={scrollerRef}
								className="flex min-w-full shrink-0 lg:gap-[50px] md:gap-[30px] sm:gap-[20px] gap-[20px] w-max flex-nowrap hover:[animation-play-state:paused] animate-scroll"
							>
								{hotCoins.map((i, k) => (
									<li
										key={k}
										className="flex items-center cursor-pointer"
										style={{ columnGap: '10px' }}
									>
										<img src={i.logo} alt={i.logo} className="w-[24px] shrink-0" />
										<div>{i.name}</div>
										<div className={cn("flex items-center gap-[5px] ", i.percentage >= 0 ? 'text-tertiary' : 'text-secondary')}>
											<div>{i.percentage}%</div>
											<Icon icon="UpFillArrow" size={12} />
										</div>
									</li>
								))}
							</ul>
						</div>
					)}
				</div>
			</div>
		</div>
	)
}

export default Header;
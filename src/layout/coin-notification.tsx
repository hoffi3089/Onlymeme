import React from "react";

import { cn } from "../utils";
import { tempCoinNotifications } from "../temp";

const CoinNotification: React.FC = () => {

	const containerRef = React.useRef<HTMLDivElement>(null);
  const scrollerRef = React.useRef<HTMLUListElement>(null);
  const [start, setStart] = React.useState(false);
	const [notificationData, setNotificationData] = React.useState<CoinNotificationDataType[]>([]);

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
			containerRef.current.style.setProperty("--animation-direction","forwards");
    }
  };
  const getSpeed = () => {
    if (containerRef.current) {
        containerRef.current.style.setProperty("--animation-duration", "25s");
    }
  };

	const getNotificationData = () => {
		try {
			setNotificationData(tempCoinNotifications);
		} catch (error) {
			console.log("Getting notification data error: ", error);
		}
	}

	React.useEffect(() => {
		getNotificationData();
    addAnimation();
  }, []);

	return (
		<div>
			<div ref={containerRef} className="scroller relative z-20 overflow-hidden max-w-[100vw] font-semibold">
				<ul
					ref={scrollerRef}
					className={cn(
						" flex min-w-full shrink-0 gap-4 md:py-4 py-2 w-max flex-nowrap hover:[animation-play-state:paused]",
						start && "animate-scroll"
					)}
				>
					{notificationData.map((i, k) => (
						<li
							className={cn(
								"max-w-full relative flex-shrink-0 px-5 py-[10px] flex items-center gap-2 ",
								(Math.random() * 2) <= 1 ? "bg-secondary text-black" : " bg-primary text-white"
							)}
							key={k}
						>
							<img src={i.image1} alt={i.image1} className="w-[22px]" />
							<div>{i.description}</div>
							<img src={i.image2} alt={i.image2} className="w-[22px]" />
						</li>
					))}
				</ul>
			</div>
		</div>
	)
}

export default CoinNotification;
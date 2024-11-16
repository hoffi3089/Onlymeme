import React from "react";

import { links } from "../temp";

const Footer: React.FC = () => {
	return (
		<div>
			<div className="flex flex-wrap items-center justify-between gap-5 py-5 px-6 container">
				<div className="flex flex-wrap items-center gap-5">
					<img src="logo2.svg" alt="logo" className="w-[80px]" />
					<div>Copyright 2024 OnlyMemes. All rights reserved.</div>
				</div>
				<div className="flex items-center gap-2">
					<a href={links.twitter} className="text-primary underline hover:text-primaryText">twitter</a>
					<a href={links.discord} className="text-primary underline hover:text-primaryText">discord</a>
					<a href={links.medium} className="text-primary underline hover:text-primaryText">medium</a>
				</div>
			</div>
		</div>
	)
}

export default Footer;
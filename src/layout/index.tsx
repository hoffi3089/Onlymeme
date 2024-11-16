import React from "react";
import { Outlet } from "react-router-dom";

import Header from "./header";
import Footer from "./footer";
import CoinNotification from "./coin-notification";

const Layout: React.FC = () => {
	return (
		<div style={{background: 'linear-gradient(#C8E3FF, 20vh, #fff)'}}>
			<Header />
			<CoinNotification />
			<div className="flex justify-center px-5 py-2 container">
				<div className="m-w-[1400px] w-full" style={{minHeight: 'calc(100vh - 300px)'}}>
					<Outlet />
				</div>
			</div>
			<Footer />
		</div>
	)
}

export default Layout;
import { Outlet } from "react-router-dom"
import { MobileNav, SideBar } from "./Navigation"

export const Layout: React.FC<{}> = () => {
	return (
		<div className="md:flex md:divide-x h-dvh md:overflow-hidden">
			<div className="hidden md:block">
				<SideBar />
			</div>
			<div className="flex-1 p-1 md:p-8 md:overflow-auto pb-20">
				<Outlet />
			</div>
			<div className="md:hidden fixed bottom-0 left-0 w-full">
				<MobileNav />
			</div>
		</div>
	)
}

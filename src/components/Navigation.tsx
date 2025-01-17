import { Link, useLocation } from "react-router-dom"
import { ImageIcon } from "./ImageIcon"

const navigation = [
	{ name: "About", path: "/about", icon: "information.png" },
	{ name: "Tasks", path: "/tasks", icon: "checklist.png" },
]

export const SideBar: React.FC<{}> = () => {
	const location = useLocation()

	return (
		<aside className="w-80 divide-y">
			<div className="h-20"></div>
			<nav>
				<ul className="space-y-2 p-2">
					{navigation.map(({ name, path, icon }) => {
						const isActive = path === location.pathname
						return (
							<li key={path}>
								<Link
									to={path}
									className={`flex hover:bg-gray-100 p-3 items-center gap-x-4 pl-5 ${
										isActive ? "bg-gray-100" : ""
									} rounded-md`}
								>
									<ImageIcon path={icon} className="w-6 h-6" /> <span>{name}</span>
								</Link>
							</li>
						)
					})}
				</ul>
			</nav>
		</aside>
	)
}

export const MobileNav: React.FC<{}> = () => {
	const location = useLocation()
	return (
		<nav className="bg-white">
			<ul className="flex gap-x-2 p-1">
				{navigation.map(({ name, path, icon }) => {
					const isActive = path === location.pathname
					return (
						<li key={path} className="flex-1 flex-shrink-0">
							<Link
								to={path}
								className={`${
									isActive ? "bg-gray-100" : ""
								}  flex p-1 rounded-lg flex-col items-center justify-center gap-y-1`}
							>
								<ImageIcon path={icon} className="w-8 h-8" />
								<span className="text-xs">{name}</span>
							</Link>
						</li>
					)
				})}
			</ul>
		</nav>
	)
}

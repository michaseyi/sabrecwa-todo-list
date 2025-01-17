import { TagAccent } from "./Task"

const tagAccentMap = {
	pink: {
		bg: "pink-100",
		fg: "pink-900",
	},

	blue: {
		bg: "blue-100",
		fg: "blue-900",
	},

	green: {
		bg: "green-100",
		fg: "green-900",
	},

	yellow: {
		bg: "yellow-100",
		fg: "yellow-900",
	},

	red: {
		bg: "red-100",
		fg: "red-900",
	},
}

type TagProps = {
	name: string
	accent?: TagAccent
}
export const Tag: React.FC<TagProps> = ({ name, accent = "red" }) => {
	const { bg, fg } = tagAccentMap[accent]
	return (
		<div
			className={`bg-${bg} rounded-full px-2 py-1 w-fit flex gap-x-1.5 items-center text-${fg} text-sm font-bold`}
		>
			<div className={`w-2.5 h-2.5 rounded-full bg-${fg}`}></div>
			{name}
		</div>
	)
}

type ImageIconProp = {
	path: string
	className?: string
}

const ImageIcon: React.FC<ImageIconProp> = ({ path, className }) => {
	return <img className={`w-4 h-4 ${className ?? ""}`} src={path} alt="icon" />
}

export { ImageIcon }

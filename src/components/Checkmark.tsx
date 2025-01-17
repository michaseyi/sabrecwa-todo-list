type CheckmarkProps = {
	className?: string
	onChange?: (checked: boolean) => void | Promise<void>
	checked?: boolean
}

export const Checkmark: React.FC<CheckmarkProps> = ({ className, onChange, checked = false }) => {
	return (
		<input
			checked={checked}
			type="checkbox"
			className={`custom-checkbox  ${className ?? ""}`}
			onClick={(e) => {
				e.stopPropagation()
			}}
			onChange={(e) => {
				onChange && onChange(e.target.checked)
			}}
		/>
	)
}

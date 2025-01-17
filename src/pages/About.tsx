export default function About() {
	return (
		<main className="p-1 md:p-3 space-y-5 md:space-y-7">
			<h1 className="font-medium text-3xl md:text-4xl leading-none">About</h1>
			<hr />
			<section className="space-y-3 text-lg md:text-xl">
				<p>
					Welcome to the Todo List application! This app is designed to help you manage your tasks
					efficiently and effectively.
				</p>
				<p>With this app, you can:</p>
				<ul className="list-disc list-inside space-y-2">
					<li>Create and manage tasks</li>
					<li>Set deadlines for your tasks</li>
					<li>Add comments and attachments to tasks</li>
					<li>Tag tasks for better organization</li>
					<li>Mark tasks as completed</li>
				</ul>
				<p>
					Our goal is to provide a simple and intuitive interface that helps you stay organized and
					productive. We hope you find this app useful and enjoy using it as much as we enjoyed
					building it.
				</p>
				<p className="leading-relaxed bg-yellow-100 p-4 rounded-md">
					<strong>Note:</strong> This is a centralized Todo List application, and everyone shares
					the same list. To keep things organized, make use of tags to identify your todos. Also,
					please be respectful and do not mess with anyone else's todos.
				</p>
				<p>
					If you have any questions or feedback, feel free to reach out to us. Thank you for using
					our Todo List application!
				</p>
			</section>
		</main>
	)
}

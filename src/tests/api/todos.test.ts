import { todos } from "../../api/todos"

describe("Todos API", () => {
	it("should create a new todo", async () => {
		// Test implementation
		await todos.empty()
		const newTodo = {
			attachments: [],
			comments: [],
			deadline: new Date(),
			name: "Untitled Task",
			tags: [],
			completed: false,
		}
		await todos.create(newTodo)
		const tasks = await todos.get()
		expect(tasks).toHaveLength(1)
	})
	it("should return all todos", async () => {
		const tasks = await todos.get()
		expect(tasks).toHaveLength(1)
		expect(tasks[0].name).toBe("Untitled Task")
	})

	it("should update a todo", async () => {
		const tasks = await todos.get()
		const task = tasks[0]
		await todos.update({ id: task.id, data: { name: "Updated Task" } })
		const updatedTasks = await todos.get()
		const updatedTask = updatedTasks[0]
		expect(updatedTask.name).toBe("Updated Task")
	})

	it("should delete a todo", async () => {
		const tasks = await todos.get()
		const task = tasks[0]
		await todos.remove(task.id)
		const updatedTasks = await todos.get()
		expect(updatedTasks).toHaveLength(0)
	})
})

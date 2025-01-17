import { render, screen } from "@testing-library/react"
import { Task } from "../../components/Task"
import { TaskContextProvider } from "../../provider/TaskContextProvider"

const mockTask = {
	name: "Test Task",
	comments: [],
	attachments: [],
	deadline: new Date(),
	completed: false,
	tick: jest.fn(),
	remove: jest.fn(),
	tags: [],
	id: Math.random().toString(36).slice(2, 9),
}

describe("Task Component", () => {
	it("renders task name", () => {
		render(
			<TaskContextProvider task={mockTask}>
				<Task />
			</TaskContextProvider>
		)
		expect(screen.getByText("Test Task")).toBeinTheDocument()
	})
})

/** @type {import("jest").Config} */
export default {
	testEnvironment: "jsdom",
	setupFilesAfterEnv: ["<rootDir>/jest.setup.js"],
	testMatch: ["<rootDir>/src/tests/**/*.(test|spec).(js|jsx|ts|tsx)"],
	moduleNameMapper: {
		"\\.(css|less|scss|sass)$": "identity-obj-proxy",
	},
}

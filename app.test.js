const request = require("supertest");
const app = require("./app");

describe("GET /", () => {
    test("should return the welcome message", async () => {
        const response = await request(app).get("/");

        expect(response.statusCode).toBe(200);
        expect(response.text).toBe(
            "Hello from my CI/CD Node.js application!"
        );
    });
});

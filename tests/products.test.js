const request = require("supertest");
const app = require("../server/server");

// Test the GET /foods endpoint.
describe("GET /foods", () => {
    test("should return five food items", async () => {
        const response = await request(app).get("/foods");

        expect(response.statusCode).toBe(200);
        expect(response.body).toHaveLength(5);
    });
});
// Test that an unknown route returns a 404 error.
test("should return 404 for an unknown route", async () => {
    const response = await request(app).get("/does-not-exist");

    expect(response.statusCode).toBe(404);
    expect(response.body).toEqual({
        error: "Route not found"
    });
});
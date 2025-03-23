import {describe, expect, it,vi} from 'vitest';
import request from "supertest";
import { app } from "../index"
import { prismaClient } from '../__mocks__/db'

vi.mock('../db');


describe("sum", () => {
  it("should return the sum of two numbers", async () => {
    await prismaClient.req.create.mockResolvedValue({
        id:1,
        a:1,
        b:2,
        result:3
      })

      vi.spyOn(prismaClient.req, "create");

      const res = await request(app).post("/sum").send({
        a: 1,
        b: 2
      });

    expect(prismaClient.req.create).toHaveBeenCalledWith({
      data: {
        a: 1,
        b: 2,
        result: 3
        }
    })

      expect(res.statusCode).toBe(200);
      expect(res.body.answer).toBe(3);
    });

    it("should return 411 if no inputs are provided", async () => {
      const res = await request(app).post("/sum").send({});
      expect(res.statusCode).toBe(411);
      expect(res.body.message).toBe("Incorrect inputs");
    });

});

describe("mul", () => {
    it("should return the sum of two numbers", async () => {
        const res = await request(app).post("/mul").send({
          a: 3,
          b: 2
        });
        expect(res.statusCode).toBe(200);
        expect(res.body.answer).toBe(6);
      });

      it("should return 411 if no inputs are provided", async () => {
        const res = await request(app).post("/mul").send({});
        expect(res.statusCode).toBe(411);
        expect(res.body.message).toBe("Incorrect inputs");
      });

});

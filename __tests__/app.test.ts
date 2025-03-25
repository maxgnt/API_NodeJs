import Request from "supertest";

import { app } from "../src/app";

import {test, describe, expect} from "@jest/globals";

describe ("Test du point d'entrée!" , () => {
    test('Catch all route', async () => {
        const res = await Request(app).get("/");
        expect(res.body).toEqual({message:"Hello From my REST API"});
        expect(res.status).toBe(200);
    });
});


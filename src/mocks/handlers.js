import { rest } from "msw";

export const handlers = [
  rest.get("https://jsonplaceholder.typicode.com/users", (req, res, ctx) => {
    return res(
      ctx.json([
        {
          name: "harry",
        },
        {
          name: "niall",
        },
        {
          name: "louis",
        },
      ])
    );
  }),
];

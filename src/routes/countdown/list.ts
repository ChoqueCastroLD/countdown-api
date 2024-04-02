import { Elysia, t } from "elysia";
import { getCountdowns } from "../../controllers/countdown/list";

export const router = () =>
	new Elysia().get(
		"/api/countdowns",
		async () => {
			const data = await getCountdowns();
			return { status: true, data };
		},
		{
			response: t.Object({
				status: t.Boolean(),
				data: t.Array(t.Any()),
			}),
		},
	);

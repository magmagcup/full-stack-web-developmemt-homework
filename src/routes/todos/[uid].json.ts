import type { RequestHandler, RequestEvent } from "@sveltejs/kit"
import { api } from "./_api";

export const del: RequestHandler = (request) => {
    return api(request)
}

export const patch:  RequestHandler =  async ( request: RequestEvent ) => {
    const formData = await request.request.formData();
    return api(request, {
            text: formData.get("text"),
            done: formData.has("done") ? !!formData.get("done") : undefined
        }
        )
}
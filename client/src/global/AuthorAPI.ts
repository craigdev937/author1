import { IAuthor } from "../models/Authors";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const URL = "http://localhost:9000/api/";
export const AuthorAPI = createApi({
    reducerPath: "AuthorAPI",
    baseQuery: fetchBaseQuery({ baseUrl: URL }),
    tagTypes: ["Authors"],
    endpoints: (builder) => ({
        fetchAll: builder.query<IAuthor, void>({
            query: () => `fetch`,
            providesTags: [{ type: "Authors", id: "LIST"  }]
        })
    }),
});






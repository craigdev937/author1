import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState, AppDispatch } from "../global/RootReducer";
import { fetchAuthorsAsync } from "../global/FetchAPI";

export const Main = (): JSX.Element => {
    const dispatch = useDispatch<AppDispatch>();
    const authors = useSelector(
        (state: RootState) => state.authors
    );

    React.useEffect(() => {
        dispatch(fetchAuthorsAsync());
    }, [dispatch]);

    console.log(authors);

    return (
        <React.Fragment>
            {authors.map((author) => (
                <main key={author.wid}>
                    {console.log(author)}
                    {author.title} {author.author}
                </main>
            ))}            
        </React.Fragment>
    );
};





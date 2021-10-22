import React from "react";
import { IAuthor } from "../models/Authors";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../global/RootReducer";
import {  } from "../global/FetchAPI";

export const Main = 
({ title, author, age, info }: IAuthor): JSX.Element => {
    const dispatch = useDispatch<AppDispatch>();

    return (
        <React.Fragment>
            <h1>Main</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni omnis odio sit ex officiis, quas laboriosam mollitia fugit magnam ducimus commodi iusto incidunt, hic praesentium voluptatibus neque quidem obcaecati repellendus?</p>
        </React.Fragment>
    );
};





import { useState } from 'react';
import { fetchCatFacts, fetchJokes, fetchActivity } from 'services';
import { retry } from 'common/retry';
import { ERROR } from 'common/consts';
import {Loader} from "common/loader";

export const OneByOne = () => {




    return (
        <>
            <button onClick={onClickButton}>one by one</button>

        </>
    )
}

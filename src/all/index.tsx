import { useState } from 'react';
import { retry } from 'common/retry';
import { Loader } from 'common/loader';
import { ERROR } from 'common/consts';
import { fetchActivity, fetchCatFacts, fetchJokes } from 'services';


export const All = () => {




    return (
        <>
            <div>
                Task: I need to do 3 request in the same time.
                If one request is failure i have to retry it 3 times with slightly delay.
                I have to recieve result at the same time.
            </div>
            <button onClick={onClickButton}>All</button>


        </>
    )
}

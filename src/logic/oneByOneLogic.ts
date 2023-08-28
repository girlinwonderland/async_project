import { useCallback, useState } from 'react';
import { retry } from 'common/retry';
import { ERROR } from 'common/consts';
import { fetchActivity, fetchCatFacts, fetchJokes } from 'services';

export const useOneByOneLogic = () => {
    const [catsData, setCatsData] = useState({ data: '', loading: false });
    const [jokesData, setJokesData] = useState({ data: '', loading: false });
    const [activityData, setActivityData] = useState({ data: '', loading: false });

    const onClickOneByOne = useCallback(async () => {
        setCatsData(prev => ({ ...prev, loading: true }));
        setJokesData(prev => ({ ...prev, loading: true }));
        setActivityData(prev => ({ ...prev, loading: true }));
        const catFacts = await retry(fetchCatFacts);
        setCatsData(prev => ({
            ...prev,
            data: catFacts?.data ? catFacts?.data?.fact : ERROR,
            loading: false
        }));
        const jokes = await retry(fetchJokes);
        setJokesData(prev => ({
            ...prev,
            data: jokes?.data ? `${jokes.data.setup} ${jokes.data.punchline}` : ERROR,
            loading: false
        }));
        const activities = await retry(fetchActivity);
        setActivityData(prev => ({
            ...prev,
            data: activities?.data ? activities?.data?.activity : ERROR,
            loading: false
        }));
    }, []);

    return {
        onClickOneByOne,
        catsData,
        jokesData,
        activityData,
    }
}

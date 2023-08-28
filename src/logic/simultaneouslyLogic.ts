import { useCallback, useState } from 'react';
import { ERROR } from 'common/consts';
import { retry } from 'common/retry';
import { fetchActivity, fetchCatFacts, fetchJokes } from 'services';

export const useSimultaneouslyLogic = () => {
    const [loading, setLoading] = useState(false);
    const [data, setData] = useState({ cats: '', joke: '', activity: '' });

    const onClickSimultaneously = useCallback(async () => {
        setLoading(true);
        const [catFacts, jokes, activities ] = await Promise.all([retry(fetchCatFacts), retry(fetchJokes), retry(fetchActivity)]);
        setLoading(false);
        setData(prev => ({
            ...prev,
            cats: catFacts?.data ? catFacts?.data?.fact : ERROR,
            joke: jokes?.data ? `${jokes.data.setup} ${jokes.data.punchline}` : ERROR,
            activity: activities?.data ? activities?.data?.activity : ERROR,
        }))
    }, []);

    return {
        onClickSimultaneously,
        simultaneouslyLoading: loading,
        simultaneouslyData: data,
    }
}

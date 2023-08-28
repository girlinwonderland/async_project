import { Loader } from 'common/loader';
import { useSimultaneouslyLogic, useOneByOneLogic } from 'logic';
import './styles/reset.css';
import './styles/index.css';

const TITLE = 'I want to play with fetch requests.\n' +
    'If one request fails, I have to retry it 3 times with slightly delay.\n' +
    'I have 2 cases. First, fetch requests one by one and second fetch all requests in the same time.'

const App = () => {

    const {
        simultaneouslyData: data,
        simultaneouslyLoading,
        onClickSimultaneously,
    } = useSimultaneouslyLogic();

    const {
        onClickOneByOne,
        catsData,
        jokesData,
        activityData,
    } = useOneByOneLogic();


    return (
        <div className="app">
            <div className="title">{TITLE}</div>
            <table>
                <thead>
                    <tr>
                        <th className="header">case 1: one by one</th>
                        <th className="header">case 2: all in the same time</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className="button-cell">click: <button onClick={onClickOneByOne}>one by one</button></td>
                        <td className="button-cell">click: <button onClick={onClickSimultaneously}>All</button></td>
                    </tr>
                    <tr>
                        <td className="info">
                            {<div>{catsData.loading ? <>cat fact: <Loader /></>  : `cat fact: ${catsData.data}`}</div>}
                            {<div>{jokesData.loading ? <>joke: <Loader /></>  : `joke: ${jokesData.data}`}</div>}
                            {<div>{activityData.loading ? <>activity: <Loader /></>  : `activity: ${activityData.data}`}</div>}
                        </td>
                        <td className="info">
                            {
                                simultaneouslyLoading ? <Loader /> : (
                                    <>
                                        <div>{`cat fact: ${data.cats}`}</div>
                                        <div>{`joke: ${data.joke}`}</div>
                                        <div>{`activity: ${data.activity}`}</div>
                                    </>
                                )
                            }
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default App;

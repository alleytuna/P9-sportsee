import { Navigate, useParams } from "react-router";
import { useEffect, useState } from "react";

import { getUserActivityById, getUserAverageSessions, getUserMainInfoById, getUserPerformance } from "../services/service";

import DailyActivity from "../components/charts/DailyActivity";
import SessionsAverageDuration from "../components/charts/SessionsAverageDuration";
import Performance from "../components/charts/RadarSkills";
import Score from "../components/charts/Score";
import KeyDataBillboard from "../components/layout/KeyDataBillboard";
import Loading from "./Loading";

import "../styles/home.css";

/**
 * @function Home - home dashboard displaying user's info and sport performances
 * @returns {JSX}
 */
export default function Home() {
    const [userInfo, setUserInfo] = useState(undefined);
    const [userActivity, setUserActivity] = useState(undefined);
    const [userAverageSessions, setUserAverageSessions] = useState(undefined);
    const [userPerformance, setUserPerformance] = useState(undefined);
    const [loadingStatus, setLoadingStatus] = useState(true);
    const [errorStatus, setErrorStatus] = useState(false);

    let userId = useParams().id;

    useEffect(() => {
    const fetchDatas = async () => {
        const fetchUserMainInfo = await getUserMainInfoById(userId);
        if (fetchUserMainInfo.length === 0 ) {
            setErrorStatus(true);
        } else {
            setUserInfo(fetchUserMainInfo);
            const fetchUserActivity = await getUserActivityById(userId);
            setUserActivity(fetchUserActivity);
            const fetchUserAverageSessions = await getUserAverageSessions(userId);
            setUserAverageSessions(fetchUserAverageSessions);
            const fetchUserPerformance = await getUserPerformance(userId);
            setUserPerformance(fetchUserPerformance);
            if (userActivity && userAverageSessions && userPerformance) {
                setLoadingStatus(false);
            }
        }
    }
    fetchDatas();
    }, [userId, loadingStatus, userInfo, userActivity, userAverageSessions, userPerformance]);

    if (errorStatus === true) {
        return <Navigate to="*" />
    }
    if (loadingStatus === true) {
        return <Loading />;
    } else {
        return (
            <main className="homeMain">
                <article className="welcomeMessage"> 
                    <h1 className="welcomeTitle">Bonjour&nbsp;<p className="name">{userInfo.firstname}</p></h1><h2 className="welcomeSubtitle"> Félicitations ! Vous avez explosé vos objectifs d'hier 👏</h2>
                
                </article>
                 <div className="allCharts">
                    <div className="leftSideCharts">
                        <DailyActivity userActivity={userActivity} />
                        <article className="groupOfSquareCharts">
                            <SessionsAverageDuration userAverageSessions={userAverageSessions} />
                            <Performance userPerformance={userPerformance} />
                            <Score userScore={userInfo.score} />
                        </article>
                    </div>
                    <article className="keyDataBillboard">
                        <KeyDataBillboard number={userInfo.calorie} name={"Calories"} />
                        <KeyDataBillboard number={userInfo.protein} name={"Proteines"} />
                        <KeyDataBillboard number={userInfo.carbohydrate} name={"Glucides"} />
                        <KeyDataBillboard number={userInfo.lipid} name={"Lipides"} />
                    </article>
                </div>
            </main>
        )
    }
}

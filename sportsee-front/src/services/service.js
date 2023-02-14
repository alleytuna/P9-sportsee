import { USER_ACTIVITY, USER_MAIN_DATA, USER_PERFORMANCE, USER_AVERAGE_SESSIONS } from "./data.js";

let env = 'prod'; // for now, line to change to switch between dev and prod mode to try out the API
let apiUrl = 'http://localhost:3000/user'

export class User {
    constructor(data) {
        this.firstname = data.userInfos.firstName;
        this.calorie = data.keyData.calorieCount;
        this.protein = data.keyData.proteinCount;
        this.carbohydrate = data.keyData.carbohydrateCount;
        this.lipid = data.keyData.lipidCount;
        this.score = (data.score || data.todayScore) * 100;
    }
}

export async function getUserMainInfoById(userId) {
    if (env === 'dev') {
        const user = await USER_MAIN_DATA.filter(user => user.id === Number(userId));
        if (user.length === 0) {
            return user;
        }
        return new User(user[0]);
    } else {
        const response = await fetch(`${apiUrl}/${userId}`);
        const user = await response.json();
        return new User(user.data);
    }
}

export async function getUserActivityById(userId) {
    let userActivity;

    if (env === 'dev') {
        userActivity = USER_ACTIVITY.filter(userActivity => userActivity.userId === Number(userId));
        return userActivity[0];
    } else {
        const response = await fetch(`${apiUrl}/${userId}/activity`);
        const userActivity = await response.json();
        return userActivity.data;
    }
}

export async function getUserAverageSessions(userId) {
    let userAverageSessions;

    if (env === 'dev') {
        userAverageSessions = USER_AVERAGE_SESSIONS.filter(userAverageSessions => userAverageSessions.userId === Number(userId));
        return userAverageSessions[0];
    } else {
        const response = await fetch(`${apiUrl}/${userId}/average-sessions`);
        const userAverageSessions = await response.json();
        return userAverageSessions.data;
    }
}

export async function getUserPerformance(userId) {
    let userPerformance;

    if (env === 'dev') {
        userPerformance = USER_PERFORMANCE.filter(userPerformance => userPerformance.userId === Number(userId));
        return userPerformance[0];
    } else {
        const response = await fetch(`${apiUrl}/${userId}/performance`);
        const userPerformance = await response.json();
        return userPerformance.data;
    }
}

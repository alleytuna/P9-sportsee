// import { USER_ACTIVITY, USER_MAIN_DATA, USER_PERFORMANCE, USER_AVERAGE_SESSIONS } from "./datas";

// export function getUserMainInfo(urlId) {
//     let firstname;
//     USER_MAIN_DATA.map(mainInfo => {
//         if(mainInfo.id = urlId) {
//             firstname = mainInfo.userInfos.firstName;
//         }
//     })
// }

fetch('datas.json').then((response) => {
    console.log(response)
})
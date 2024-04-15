import {atom,selector} from 'recoil';
import axios from 'axios';

export const homeCount = atom({
    key:"homeCount",
    default:111
})
export const mynetworkCount = atom(
    {
        key:"mynetworkCount",
        default:10
    }
)
export const jobsCount = atom(
    {
        key:"jobsCount",
        default:10
    }
)

export const messagesCount = atom(
    {
        key:"messagesCount",
        default:5
    }
)

export const notificationsCount = atom(
    {
        key:"notificationsCount",
        default:115
    }
)


export const totalCounts = selector({
    key:"totalCounts",
    get : ({get})=>{
        const homeCountatom = get(homeCount);
        const mynetworkCountatom = get(mynetworkCount);
        const jobsCountatom = get(jobsCount);
        const messagesCountatom = get(messagesCount);
        const notificationsCountatom = get(notificationsCount);
        return homeCountatom+mynetworkCountatom+jobsCountatom+messagesCountatom+notificationsCountatom
    }
})

export const backendData = atom({
    key:"backendData",
    default:selector({
        key:"backendDataAtom",
        get:async()=>{
            const res = await axios.get('https://sum-server.100xdevs.com/notifications')
            console.log(res.data);
            return res.data;
        }
    })
})
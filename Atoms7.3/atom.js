import {atom} from 'recoil';

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

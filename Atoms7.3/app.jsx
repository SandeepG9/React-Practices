import { homeCount,mynetworkCount,jobsCount,messagesCount,notificationsCount } from './atoms'
import {RecoilRoot,useRecoilValue,useRecoilState,useSetRecoilState} from 'recoil';
import './App.css'

function App() {
 
  return (
   <RecoilRoot>
    <LinkedInbuttons></LinkedInbuttons>
   </RecoilRoot>
  )
}

function LinkedInbuttons()
{
     const homeCounts  =  useRecoilValue(homeCount);
     const mynetworkCounts  =  useRecoilValue(mynetworkCount);
     const jobsCounts  =  useRecoilValue(jobsCount);
     const messagesCounts = useRecoilValue(messagesCount);
     const notificationsCounts  =  useRecoilValue(notificationsCount); 
    return(
      <>
        <button>Home ({homeCounts>100?'99+':homeCounts})</button>
        <button>My Network ({mynetworkCounts>100?'99+':mynetworkCounts})</button>
        <button>Jobs ({jobsCounts>100?'99+':jobsCounts})</button>
        <button>Messages ({messagesCounts>100?'99+':messagesCounts})</button>
        <button>Notifications ({notificationsCounts>100?'99+':notificationsCounts})</button>
        <ButtonUpdater></ButtonUpdater>
      </>
    )
} 

function ButtonUpdater()
{

  const setMessagesCount = useSetRecoilState(messagesCount);
  return(
    <>
      <button onClick={()=>{
        setMessagesCount(c=> c+1);
      }}>Me</button>
    </>
  )
}

export default App

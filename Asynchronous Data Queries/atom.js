import {backendData,totalCounts } from './atoms'
import {RecoilRoot,useRecoilValue} from 'recoil';
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
  const networkData = useRecoilValue(backendData);

    return(
      <>
        <button>Home</button>
        <button>My Network ({networkData.network>100?'99+':networkData.network})</button>
        <button>Jobs ({networkData.jobs>100?'99+':networkData.jobs})</button>
        <button>Messages ({networkData.messaging>100?'99+':networkData.messaging})</button>
        <button>Notifications ({networkData.notifications>100?'99+':networkData.notifications})</button>
        <button>Me</button>
      </>
    )
} 

export default App

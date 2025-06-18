import { Outlet } from 'react-router-dom';
import './App.css';
import Header from "./components/Header"
import SideBar from "./components/SideBar"
import Navbar from "./components/Navbar"
import StudentRight from "./components/StudentComponents/StudentRight"
import { StudentProvider } from './customhooks/StudentContext';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 3,
      staleTime: 5 * 60 * 1000,
      gcTime: 10 * 60 * 1000,
    },
  },
});


function App() {
  
  return (
    <StudentProvider>
      <QueryClientProvider client={queryClient}>
           <div id="App" className='container-fluid px-0'>
      <header style={{height:'8vh'}} className='bg-light'>
        <Header/>
      </header>
      <div id='App-Body' style={{width:"100%", height:"92vh"}} className='container-fluid d-flex px-0 gap-3'>
         <aside style={{width:"5%", height:"100%"}} className='bg-light'>
          <SideBar/>
         </aside>
         <main style={{width:"95%", height:"100%"}}  className='d-flex gap-3'>
            <div className='d-flex flex-column' style={{width:"80%"}}>
                <Navbar/>
                 <Outlet/>
            </div>
            <div style={{width:"20%"}}>
                <StudentRight/>
            </div>
         </main>
      </div>
    </div>
      </QueryClientProvider>
    </StudentProvider>
  );
}

export default App;

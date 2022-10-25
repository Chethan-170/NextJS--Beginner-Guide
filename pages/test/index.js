import StudentList from "./compo1";
import AbsenteesList from "./compo2";
import TestContextProvider from "./context";

const Index = ()=>{
    return <div>
       <TestContextProvider>
            <h1>Context API Test1</h1>
            <StudentList />
            <AbsenteesList />
       </TestContextProvider>
    </div>
}
export default Index;
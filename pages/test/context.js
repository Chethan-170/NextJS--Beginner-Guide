import { createContext, useState } from "react";
const initialVal = [
    {
        id: 1,
        name: 'Chethan',
        age: 27,
        gender:'Male',
        attendanceStatus: true
    },
    {
        id: 2,
        name: 'Mithun',
        age: 20,
        gender:'Male',
        attendanceStatus: false
    },
    {
        id: 3,
        name: 'Rishi',
        age: 7,
        gender:'Female',
        attendanceStatus: false
    }
]
export const TestContext = createContext();

export default function TestContextProvider({children}){
    const [students, setStudents] = useState([...initialVal])
    return (
        <TestContext.Provider value={{students, setStudents}}>{children}</TestContext.Provider>
    )
}
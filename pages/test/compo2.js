import React, { useContext, useEffect } from 'react'
import { TestContext } from './context'

export default function AbsenteesList() {
    const {students} = useContext(TestContext);
    useEffect(()=>{
        console.log('AbsenteesList Rendered');
    },[students]);
    return (
        <div>
            <h1>Today's AbsenteesList</h1>
            {
                students.map((std, key)=>{
                    if(!std.attendanceStatus){
                        return(
                            <h3 key={key}>{std.name}</h3>
                        )
                    }
                })
            }
        </div>
    )
}

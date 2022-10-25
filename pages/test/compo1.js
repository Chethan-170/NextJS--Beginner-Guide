import React, { useContext, useEffect } from 'react'
import { Fragment } from 'react';
import { TestContext } from './context'
const styles = {
    container: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    },
    stdContainer: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    span:{
        width: '100px',
        textAlign: 'center',
        padding: '20px',
        border: '1px solid grey'
    }
}
export default function StudentList() {
    const {students, setStudents} = useContext(TestContext);
    useEffect(()=>{
        console.log('StudentList Rendered');
    },[]);
    const makeAbsent = id =>{
        students.forEach(std=>{
            if(std.id == id) std.attendanceStatus = false;
        });
        setStudents([...students]);
    }
    const makePresent = id =>{
        students.forEach(std=>{
            if(std.id == id) std.attendanceStatus = true;
        });
        setStudents([...students]);
    }
    return (
        <div style={styles.container}>
            {
                students.map((std, key)=>(
                    <div style={styles.stdContainer} key={key}>
                        <span style={styles.span}>{std.name}</span>
                        <span style={styles.span}>{std.gender}</span>
                        <span style={styles.span}>{std.age}</span>
                        <span style={styles.span}>
                            {
                                (std.attendanceStatus)
                                ? <button onClick={()=>makeAbsent(std.id)}> Absent </button>
                                : <button onClick={()=>makePresent(std.id)}> Present </button>
                            }
                            
                        </span>
                    </div>
                ))
            }
        </div>
    )
}

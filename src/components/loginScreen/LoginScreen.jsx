import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import LoginNavbar from "./LoginNavbar";
import LoginForm from "./LoginForm";
import axios from "axios";
         
function LoginScreen() {
  let navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const student = (JSON.parse(localStorage.getItem('student')))
    if(student) {navigate("/dashboard", {
      state: {student: {...student}}
    })}
  })

  const student = {
    info: null,
    schedule: null,
    gpa: null,
    classes: null
  }
  
  const navigateToDashboard = (student) => {
    localStorage.setItem('student', JSON.stringify({...student, schedule: student.schedule}));

    return navigate("/dashboard", {
      state: {student: {...student, schedule: student.schedule}}
    })
  }

  const loginFormSubmitted = async (username, password) => {
    
    setIsLoading(true);

    try {
      await Promise.all([getStudentInfo(username, password), getStudentSchedule(username, password), getStudentClasses(username, password)])
    } catch {
      return alert("Login Error");
    } 

    try {
      await getStudentGPAs(username, password)
    } catch {
      console.log("GPA Fetch Error");
    } finally {
      setIsLoading(false);
    }

    return navigateToDashboard(student)
 };

  const getStudentInfo = async(username, password) => {
    var { data } = await axios.get(`https://gradual-deploy.vercel.app/students/info?username=${username}&password=${password}`)

    console.log(data);

    updateStudentData(data, "info");
  }

  const getStudentSchedule = async(username, password) => {
    var { data } = await axios.get(`https://gradual-deploy.vercel.app/students/schedule?username=${username}&password=${password}`)

    console.log(data);

    updateStudentData(data.schedule, "schedule");
  }

  const getStudentGPAs = async(username, password) => {
    var { data } = await axios.get(`https://gradual-deploy.vercel.app/students/gpa?username=${username}&password=${password}`)

    console.log(data);

    updateStudentData(data, "gpa");
  }

  const getStudentClasses = async(username, password) => {
    var { data } = await axios.get(`https://gradual-deploy.vercel.app/students/currentclasses?username=${username}&password=${password}`)

    updateStudentData(data.currentClasses, "classes");
  }

  const updateStudentData = (newData, prop) => {
    if(!newData) { return alert("Login Error")};

    student[prop] = newData;

    return student[prop];
  };

  return (
    <main class="container d-flex flex-column justify-content-center">
      <LoginNavbar />
      <LoginForm loginFormSubmitted={loginFormSubmitted} isLoading={isLoading}/>

    </main>
  );
}

export default LoginScreen;
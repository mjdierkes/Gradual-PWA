import { useState } from "react";
import { useNavigate } from "react-router-dom";

import LoginNavbar from "./LoginNavbar";
import LoginForm from "./LoginForm";
import axios from "axios";
         
function LoginScreen() {

  const student = {
    info: null,
    schedule: null,
    gpa: null,
    classes: null
  }

  const [isLoading, setIsLoading] = useState(false);
  
  let navigate = useNavigate();

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

    return navigate("/dashboard", {
      state: {student: {...student, schedule: student.schedule}}
    });
 };

  const getStudentInfo = async(username, password) => {
    var { data } = await axios.get(`https://gradualgrades.herokuapp.com/students/info?username=${username}&password=${password}`)

    updateStudentData(data, "info");
  }

  const getStudentSchedule = async(username, password) => {
    var { data } = await axios.get(`https://gradualgrades.herokuapp.com/students/schedule?username=${username}&password=${password}`)

    updateStudentData(data.schedule, "schedule");
  }

  const getStudentGPAs = async(username, password) => {
    var { data } = await axios.get(`https://gradualgrades.herokuapp.com/students/gpa?username=${username}&password=${password}`)

    updateStudentData(data, "gpa");
  }

  const getStudentClasses = async(username, password) => {
    var { data } = await axios.get(`https://gradualgrades.herokuapp.com/students/currentclasses?username=${username}&password=${password}`)

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
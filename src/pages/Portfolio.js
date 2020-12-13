import React from "react";
import { Link } from "react-router-dom";

function Portfolio(){
    return(
        <div className="container">
<div className="container">
        {/* <!-- <div className="indexstyle"
            style="background-repeat: repeat; background-size: auto; background-image: url('./Assets/Images/watercolor.png'); ">
            <div className="row"> --> */}
                <div className="col-md-8 col-sm-12 offset-md-2">
                    <div className="card">
                        <div className="card-body">

                            <h1>Here are some of My Projects</h1>
                            <img className="img-review"  src="Assets/Images/Welders Workshop.png" alt="Homework " width="350" height="350"></img>
                <p>Welder's Workshop</p>
                <a href="https://github.com/kevinserrano/Project1Week7" className="card-link">App Link</a>
                    <a href="https://kevinserrano.github.io/Project1Week7/" className="card-link">Repository</a>
            <br></br>
                    <img className="img-review"  src="Assets/Images/Burger.png" alt="Homework " width="350" height="350"></img>
                <p>Burger App</p>
                <a href="https://github.com/lrendon12/Burger.git" className="card-link">App Link</a>
                    <a href="https://lrendon12.github.io/Burger/" className="card-link">Repository</a>
        <br></br>
        <img className="img-review"  src="Assets/Images/Calendar.png" alt="Homework " width="350" height="350"></img>
                <p>Calendar</p>
                <a href="https://github.com/lrendon12/HW5-Calendar.git" className="card-link">App Link</a>
                    <a href="https://lrendon12.github.io/HW5-Calendar/" className="card-link">Repository</a>
                    <br></br>
                    <img className="img-review"  src="Assets/Images/project2.png" alt="Homework " width="350" height="350"></img>
                <p>Group Project</p>
                <a href="https://github.com/aguerra1508/Project2.git" className="card-link">App Link</a>
                    <a href="https://aguerra1508.github.io/Project2/" className="card-link">Repository</a>
                    <br></br>
        <img className="img-review"  src="Assets/Images/budgettracker.png" alt="Homework " width="350" height="350"></img>
                <p>Budget Tracker</p>
                <a href="https://github.com/lrendon12/Budget-Tracker.git" className="card-link">App Link</a>
                    <a href=" https://lrendon12.github.io/Budget-Tracker/" className="card-link">Repository</a>
                    <br></br>


                 </div>
                 </div>
                </div>
             </div>
        </div>
        

    )
     }

export default Portfolio;

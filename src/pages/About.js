import React from "react";



function About(){
    return(
       
        <div className="container">
        {/* <!-- <div className="indexstyle"
            style="background-repeat: repeat; background-size: auto; background-image: url('./Assets/Images/watercolor.png'); ">
            <div className="row"> --> */}
                <div className="col-md-8 col-sm-12 offset-md-2">
                    <div className="card">
                        <div className="card-body">

                            <h1>About Me</h1>
                            {/* <!-- pic of me --> */}
                            <img className="img-responsive" src="/Assets/Images/me.JPG" alt="This Is Me"></img>
                            {/* <!-- Short Bio on Me - I wish I had a great deal to say but I'm not sure how much we need to put  --> */}
                            <p className="text-center"> Hello All. My name is Laura Rendon. I am currently a student
                                at UTSA living in This
                                pandemic.
                                <br />
                                I am in the insurance field, looking to break into the wonderful world of coding. I hope
                                by
                                the end
                                of this, I will be able to create something that looks 100x better than this.
                                <br />
                                In my spare time, I like to do wood work. I taught myself how to do this based of of
                                drive
                                and determination.
                                So because of that, I know I can eventually code.



                            </p>
                        </div>
                    </div>
                </div>
            </div>
    )
}
export default About;
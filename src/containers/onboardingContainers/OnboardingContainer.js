import { useState } from "react";
import NavBar from "../../components/NavBar";
import AppInformation from "../../components/onboardingComponents/AppInformation";
import OnboardingController from "../../components/onboardingComponents/MultiStep/OnboardingController";

const OnboardingContainer = ({handleUserPost}) => {



    return(
        <>
        <hr/>
        <p>I am OnboardingContainer containing:</p>
        <OnboardingController handleUserPost={handleUserPost} />
        <AppInformation />

        </>
    )
}

export default OnboardingContainer;
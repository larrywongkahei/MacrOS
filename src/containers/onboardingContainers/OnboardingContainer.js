import { useState } from "react";
import NavBar from "../../components/NavBar";
import AppInformation from "../../components/onboardingComponents/AppInformation";
import OnBoardingUserInputForm from "../../components/onboardingComponents/OnBoardingUserInputForm";

const OnboardingContainer = ({handleUserPost}) => {



    return(
        <>
        <hr/>
        <p>I am OnboardingContainer containing:</p>
        <NavBar />
        <OnBoardingUserInputForm handleUserPost={handleUserPost} />
        <AppInformation />

        </>
    )
}

export default OnboardingContainer;
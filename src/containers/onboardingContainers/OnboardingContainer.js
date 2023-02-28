import NavBar from "../../components/NavBar";
import AppInformation from "../../components/onboardingComponents/AppInformation";
import OnBoardingUserInputForm from "../../components/onboardingComponents/OnBoardingUserInputForm";

const OnboardingContainer = () => {
    return(
        <>
        <hr/>
        <p>I am OnboardingContainer containing:</p>
        <NavBar />
        <OnBoardingUserInputForm />
        <AppInformation />

        </>
    )
}

export default OnboardingContainer;
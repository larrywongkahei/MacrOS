import OnboardingController from "../../components/onboardingComponents/MultiStep/OnboardingController";

const OnboardingContainer = ({handleUserPost, setOnboardingComplete}) => {



    return(
        <>
        <OnboardingController handleUserPost={handleUserPost} setOnboardingComplete={setOnboardingComplete}/>
        </>
    )
}

export default OnboardingContainer;
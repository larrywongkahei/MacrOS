import OnboardingController from "../../components/onboardingComponents/MultiStep/OnboardingController";

const OnboardingContainer = ({handleUserPost}) => {



    return(
        <>
        <OnboardingController handleUserPost={handleUserPost}/>
        </>
    )
}

export default OnboardingContainer;
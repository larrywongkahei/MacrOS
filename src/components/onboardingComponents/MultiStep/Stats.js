import { motion } from "framer-motion";

const Stats = ({ page, setPage, newUser, setNewUser, handleUserPost, setOnboardingComplete, x, setX }) => {

    const handleSubmit = () => {
        // setOnboardingComplete(true);
        console.log(newUser);
    }

    



    return (
        <motion.div
            initial={{ x: x }}
            transition={{ duration: 1 }}
            animate={{ x: 0 }}
        >
            <div className="card">
                <div className="step-title">Here are your Stats!</div>
                <br />
             
                <button
                    onClick={handleSubmit}>
                    ALL DONE, YaY!, Happy macrOS'ing!
                </button>
                <br />
                <button
                    onClick={() => {
                        setPage(page - 1);
                        setX(-1000);
                    }}>
                    Previous
                </button>
            </div>
        </motion.div>
    );
}

export default Stats;
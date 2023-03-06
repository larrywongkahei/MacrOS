import { motion } from "framer-motion";
import Button from 'react-bootstrap/Button';

const ActivityLevel = ({ page, setPage, newUser, setNewUser, x, setX }) => {

    return (
        <motion.div
            initial={{ x: x }}
            transition={{ duration: 1 }}
            animate={{ x: 0 }}
        >
            
                <div>How Would You Best Describe Your Acitivity Level?</div>
                <div onChange={(e) => setNewUser({ ...newUser, activityLevel: e.target.value })}>
                <div className="form-check">
                    <input type="radio" value="SEDENTARY" name="activityLevel" id="activity1" className="form-check-input"/>
                    <label className="form-check-label" htmlFor="activity1">Sedentary</label>
                </div>
                <div className="form-check">
                    <input type="radio" value="LIGHT" name="activityLevel" id="activity2" className="form-check-input"/>
                    <label className="form-check-label" htmlFor="activity2">Light</label>
                </div>
                <div className="form-check">
                    <input type="radio" value="MODERATE" name="activityLevel" id="activity3" className="form-check-input"/>
                    <label className="form-check-label" htmlFor="activity3">Moderate</label>
                </div>
                <div className="form-check">
                    <input type="radio" value="ACTIVE" name="activityLevel" id="activity4" className="form-check-input"/>
                    <label className="form-check-label" htmlFor="activity4">Active</label>
                </div>
                <div className="form-check">
                    <input type="radio" value="VERY_ACTIVE" name="activityLevel" id="activity5" className="form-check-input"/>
                    <label className="form-check-label" htmlFor="activity5">Very Active</label>
                </div>
                <div className="form-check">
                    <input type="radio" value="EXTRA_ACTIVE" name="activityLevel" id="activity6" className="form-check-input"/>
                    <label className="form-check-label" htmlFor="activity6">Extra Active</label>
                </div>
                </div>
                <Button
                    onClick={() => {
                        if (newUser.activityLevel !== "") {
                            setPage(page + 1);
                            setX(1000);
                        } else {
                            alert('Activity level not selected. please try again')
                        }
                    }}
                    variant="outline-success"
                    >
                    Next
                </Button>
                <br />
                <Button
                    onClick={() => {
                        setPage(page - 1);
                        setX(-1000);
                    }}
                    variant="outline-secondary"
                    >
                    Previous
                </Button>
         
        </motion.div>
    );
}

export default ActivityLevel;
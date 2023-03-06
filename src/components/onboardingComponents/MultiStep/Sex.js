import { motion } from "framer-motion";
import Button from 'react-bootstrap/Button';

const Sex = ({ page, setPage, newUser, setNewUser, x, setX }) => {


    return (
        <motion.div
            initial={{ x: x }}
            transition={{ duration: 1 }}
            animate={{ x: 0 }}
        >
    
                <div>What's your gender?</div>
                <div onChange={(e) => setNewUser({ ...newUser, sex: e.target.value })}>
                    <div className="form-check">
                        <input type="radio" value="Male" name="sex" id="sex1" className="form-check-input" /> 
                        <label className="form-check-label" htmlFor="sex1">Male</label>
                    </div>
                    <div className="form-check">
                        <input type="radio" value="Female" name="sex" id="sex2" className="form-check-input" />
                        <label className="form-check-label" htmlFor="sex2">Female</label>
                    </div>
                </div>
                <Button
                    onClick={() => {
                        if (newUser.sex !== "") {
                            setPage(page + 1)
                            setX(1000)
                        } else {
                            alert('Sex not selected, please try again')
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

export default Sex;
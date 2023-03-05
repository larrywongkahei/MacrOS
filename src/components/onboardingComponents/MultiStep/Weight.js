const Weight = ({ page, setPage, newUser, setNewUser }) => {
    return (
        <div className="card">
            <div className="step-title">... Aaaand Your Current Weight?</div>
            <input
                type="number"
                placeholder="Weight"
                value={newUser.startingWeight}
                onChange={(e) => setNewUser({...newUser, startingWeight: e.target.value})}
            />
            <button
                onClick={ () => {
                    setPage(page + 1);
                }}>
                Next
            </button>
            <br />
            <button
                onClick={() => {
                    setPage(page - 1);
                }}>
                Previous
            </button>
        </div>
    );
}

export default Weight;
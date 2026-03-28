const Input = ({ value, onChange }) => {
    return (
        <div className="container">
            <div className="input-box">
                <input type='text' value={value} onChange={onChange} placeholder='Enter text' />
            </div>
        </div>
    );
};

export default Input;
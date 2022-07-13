export const Hello = ({ name, handleChangeName, initialName}) => {
    return (
        <div className="App">
            <p>
                Hello,  <b>{name}  !!</b>
                <br />
                name の初期値：<b>{initialName}</b>
            </p>
            <input type="text" onChange={handleChangeName} />
        </div>
    );
};
import { useRef } from "react";
import { useDispatch } from "react-redux";

const Controls=()=>{
    const dispatch = useDispatch();
    const inputElement=useRef();

    const handleIncrement=()=>{
        dispatch({type: "INCREMENT"});
    };

    const handleDercrement=()=>{
        dispatch({type: "DECREMENT"});
    };

    const handlePrivacyToggle=()=>{
        dispatch({type: "PRIVACY_TOGGLE"});
    };

    const handleAdd=()=>{
        dispatch({type: "ADD", payload:{
            num: inputElement.current.value,
        },
    });
    inputElement.current.value="";
    };

    const handleSubtsract=()=>{
        dispatch({type: "SUBSTRACT", payload:{
            num: inputElement.current.value,
        },
    });
    inputElement.current.value="";
    };


    return(
        <>
            <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
                <button type="button" className="btn btn-primary"  onClick={handleIncrement}>+1</button>
                <button type="button" className="btn btn-success"  onClick={handleDercrement}>-1</button>
                <button type="button" className="btn btn-warning"  onClick={handlePrivacyToggle}>Privacy Toggle</button>
            </div>

            <div className="d-grid gap-2 d-sm-flex justify-content-sm-center control-row">
                <input type="text" placeholder="Enter a number" className="number-input"  ref={inputElement}/>
                <button type="button" className="btn btn-info"  onClick={handleAdd}>Add</button>
                <button type="button" className="btn btn-danger"  onClick={handleSubtsract}>Substract</button>
            </div>
        </>
    );
};

export default Controls;

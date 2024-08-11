import{ produce } from 'immer';
//import { useState } from "react";
import { useReducer } from "react";
import MyButton from "../components/MyButton";
import Panel from "../components/Panel";

const INCREMENT_COUNT = 'increment-count';
const DECREMENT_COUNT = 'decrement-count';
const SET_VALUE_TO_ADD = 'set-value-to-add';
const ADD_VALUE_TO_COUNT = 'add-value-to-count';

const reducer = (state, action) => {
    switch(action.type) {
        case INCREMENT_COUNT:
            state.count = state.count + 1 
            return;
        case DECREMENT_COUNT:
            state.count = state.count - 1
            return;
        case SET_VALUE_TO_ADD:
            state.valueToAdd = action.payload
            return;
        case ADD_VALUE_TO_COUNT:
            state.count = state.count + state.valueToAdd;
            state.valueToAdd = 0
            return;
        default:
            throw new Error('unexpected action type ' + action.type);
    }

}

function CounterPage ( { initialCount }) {
    // const [count, setCount] = useState(initialCount);
    // const [valueToAdd, setValueToAdd] = useState(0);
    const [state, dispatch] = useReducer(produce(reducer), {
        count: initialCount,
        valueToAdd: 0
    });

    const incrementCount = () => {
       // setCount(count + 1);
       dispatch({
        type: INCREMENT_COUNT
       });
    };

    const decrementCount = () => {
        //setCount(count - 1);
        dispatch({
            type: DECREMENT_COUNT
        });
    };

    const handleChange = (event) => {
        const value = parseInt(event.target.value) || 0;
        //setValueToAdd(value); 
        dispatch({
            type: SET_VALUE_TO_ADD,
            payload: value
        });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        dispatch({
            type: ADD_VALUE_TO_COUNT
        });
        //setCount(count + valueToAdd);
        //setValueToAdd(0);
    };

    return (
        <Panel className="m-3">
            <h1 className="text-lg">Count is {state.count}</h1>
            <div className="flex flex-row">
                <MyButton onClick={incrementCount}>+1 </MyButton>
                <MyButton onClick={decrementCount}>-1 </MyButton>
            </div>

            <form onSubmit={handleSubmit}>
                <label>Add a lot</label>
                <input 
                value={state.valueToAdd || ""}
                onChange={handleChange}
                type="number" 
                className="p-1 m-3 bg-gray-50 border border-gray-300"></input>
                <MyButton>Add it!</MyButton>
            </form>

        </Panel>
    )
}

export default CounterPage;
import React, {useState} from "react";
import './CreateListForm.scss';


export const CreateListForm: React.FC = () => {

    const [showForm, setShowForm] = useState(true);
    const [depthValue, setDepthValue] = useState('1');
    const [itemCount, setItemCount] = useState('1');


    if (showForm) {
        return (
            <form
                className="CreateListForm"
                onSubmit={
                    () => {
                        setShowForm(false);
                    }
                }>
                <h3>Please enter the count of items in List, and depth levels of list</h3>
                <div className="inputsWrapper">
                    <div>
                        <label htmlFor="inputDepthNumber">Input depth number:</label>
                        <input
                            className="inputDepthNumber button"
                            type="number"
                            id="#inputDepthNumber"
                            value={depthValue}
                            onChange={event => setDepthValue(event.target.name)}
                        />
                    </div>
                    <div>
                        <label htmlFor="inputItemsCount">Input items count:</label>
                        <input
                            className="inputItemsCount button"
                            type="number"
                            id="#inputItemsCount"
                            value={itemCount}
                            onChange={event => setItemCount(event.target.name)}
                        />

                    </div>
                </div>
                <button className="submitForm" type="submit">
                    Create
                </button>
            </form>
        )
    }

    return <></>

}

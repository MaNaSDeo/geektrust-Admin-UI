import { useState, useEffect } from "react";


export default function PopUpForm({ rowDetails, handleTableData, handleFormVisibility, tableData, selectedId }) {

    let indexOfRow;
    tableData.forEach((element, index) => {
        if (parseInt(element.id) === parseInt(selectedId))
            indexOfRow = index;
    });
    const rowData = tableData[indexOfRow]
    const [rowName, setRowName] = useState(rowData ? rowData.name : "");
    const [rowEmail, setRowEmail] = useState(rowData ? rowData.email : "");
    const [rowRole, setRowRole] = useState(rowData ? rowData.role : "");

    useEffect(() => {
        if (rowData) {
            setRowName(rowData.name);
            setRowEmail(rowData.email);
            setRowRole(rowData.role);
        }
    }, [rowData]);

    return (
        <div className='form-popup' id='myForm'>
            <form className='form-container'>
                <h1>Edit Details</h1>

                {/* To Edit Name */}
                <label htmlFor='name'><h4>Name:</h4></label>
                <input type='text' placeholder='Enter name' name='name' value={rowName} onChange={(event) => { setRowName(event.target.value) }}></input>

                {/* To Edit Email */}
                <label htmlFor='email'><h4>Email:</h4></label>
                <input type='email' placeholder='Enter email' name='email' value={rowEmail} onChange={(event) => { setRowEmail(event.target.value) }}></input>

                {/* To Edit Role */}
                <label htmlFor='role'><h4>Role:</h4></label>
                <input type='text' placeholder='Enter role' name='role' value={rowRole} onChange={(event) => { setRowRole(event.target.value) }}></input>

                <button className='btn' onClick={(event) => {
                    event.preventDefault();
                    const rowTableData = { id: rowData.id, name: rowName, email: rowEmail, role: rowRole };
                    const updatedTableData = [...tableData];
                    updatedTableData[indexOfRow] = rowTableData;
                    handleTableData(updatedTableData);
                    handleFormVisibility(false);

                }}>Submit</button>

                <button type='button' className='btn close'
                    onClick={() => { handleFormVisibility(false) }}

                >Close</button>
            </form>
        </div>
    );
}
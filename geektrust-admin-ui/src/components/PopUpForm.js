import { useState, useEffect } from "react"; // Import necessary React components
import "./component.css"; // Import component-specific CSS styles

export default function PopUpForm({ rowDetails, handleTableData, handleFormVisibility, tableData, currentRow }) {
    // Initialize the indexOfRow variable
    let indexOfRow;

    // Find the index of the selected row in the tableData array
    tableData.forEach((element, index) => {
        if (parseInt(element.id) === parseInt(currentRow))
            indexOfRow = index;
    });

    // Get the rowData based on the index
    const rowData = tableData[indexOfRow];

    // Define state variables for editing row details
    const [rowName, setRowName] = useState(rowData ? rowData.name : "");
    const [rowEmail, setRowEmail] = useState(rowData ? rowData.email : "");
    const [rowRole, setRowRole] = useState(rowData ? rowData.role : "");

    // Use useEffect to update the state variables when rowData changes
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

                {/* Input fields for editing the row's name */}
                <label htmlFor='name'><h4>Name:</h4></label>
                <input type='text' placeholder='Enter name' name='name' value={rowName} onChange={(event) => { setRowName(event.target.value) }}></input>

                {/* Input fields for editing the row's email */}
                <label htmlFor='email'><h4>Email:</h4></label>
                <input type='email' placeholder='Enter email' name='email' value={rowEmail} onChange={(event) => { setRowEmail(event.target.value) }}></input>

                {/* Input fields for editing the row's role */}
                <input type='text' placeholder='Enter role' name='role' value={rowRole} onChange={(event) => { setRowRole(event.target.value) }}></input>

                {/* Button to submit the edited details */}
                <button className='btn' onClick={(event) => {
                    event.preventDefault();
                    // Create a new row data object
                    const rowTableData = { id: rowData.id, name: rowName, email: rowEmail, role: rowRole };
                    // Create a copy of the tableData array and update the edited row
                    const updatedTableData = [...tableData];
                    updatedTableData[indexOfRow] = rowTableData;
                    // Update the table data using the provided function
                    handleTableData(updatedTableData);
                    // Hide the form
                    handleFormVisibility(false);
                }}>Submit</button>

                {/* Button to close the form */}
                <button type='button' className='btn close' onClick={() => { handleFormVisibility(false) }}>Close</button>
            </form>
        </div>
    );
}

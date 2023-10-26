// import { useState } from "react"
import handleDelete from "./DeleteRow"; // Import the handleDelete function
import "./component.css"; // Import component-specific CSS styles

export default function TableRow({ tableData, handleTableData, handleFormVisibility, setCurrentRow, selectedId, setSelectedId }) {
    // const [selectedId, setSelectedId] = useState([]);

    const handleCheckboxChange = (dataId) => {
        // Check if the dataId is already in selectedId
        if (selectedId.includes(dataId)) {
            // If it's already selected, remove it
            setSelectedId(prevSelected => prevSelected.filter(id => id !== dataId));
        } else {
            // If it's not selected, add it
            setSelectedId(prevSelected => [...prevSelected, dataId]);
        }
    };
    console.log(selectedId);


    return (
        <div>
            <tbody>
                {/* Map through tableData to render table rows */}
                {tableData.map((data) =>
                    <tr key={data.id} className='tableRow'>
                        <input type="checkbox" id={data.id} name={data.id} className='rowInput' onChange={(event) => {
                            // handleCheckboxChange(data.id)
                            // console.log(data.id);
                            // setSelectedId((prevSelected) => [...prevSelected], data.setCurrentRow);
                            handleCheckboxChange(data.id)
                        }} checked={selectedId.includes(data.id)} // Set checked state based on selectedId 
                        />
                        <td className='rowName'>{data.name}</td>
                        <td className='rowEmail'>{data.email}</td>
                        <td className='rowRole'>{data.role}</td>
                        <td className='rowBtn'>
                            <button onClick={() => {
                                // Call the handleDelete function with appropriate parameters
                                handleDelete(data.id, tableData, handleTableData);
                            }}>
                                Delete
                            </button>
                            <button onClick={() => {
                                // Update form visibility and selectedId
                                handleFormVisibility(true);
                                setCurrentRow(data.id);
                            }}>
                                Edit
                            </button>
                        </td>
                    </tr>
                )}
            </tbody>
        </div>
    );
}
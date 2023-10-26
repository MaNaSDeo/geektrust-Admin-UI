import handleDelete from "./DeleteRow";

import "./component.css";

export default function TableRow({ tableData, handleTableData, handleFormVisibility, setSelectedId }) {
    return (
        <div>
            <tbody>
                {tableData.map((data) =>
                    <tr key={data.id} className='tableRow'>
                        <input type="checkbox" id={data.id} name={data.id} className='rowInput' onChange={(event) => {
                            // handleCheckboxChange(data.id)
                            console.log("hello");
                        }} />
                        <td className='rowName'>{data.name}</td>
                        <td className='rowEmail'>{data.email}</td>
                        <td className='rowRole'>{data.role}</td>
                        <td className='rowBtn'>
                            <button onClick={() => {
                                handleDelete(data.id, tableData, handleTableData)
                            }}>
                                Delete
                            </button>
                            <button onClick={() => {
                                handleFormVisibility(true);
                                setSelectedId(data.id);
                            }}>
                                Edit
                            </button>
                        </td>
                    </tr>
                )}
            </tbody>
        </div>
    )
}
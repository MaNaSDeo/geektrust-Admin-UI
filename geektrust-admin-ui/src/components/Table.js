import TableRow from "./TableRow";
import "./component.css";

export default function Table({ tableData, handleTableData, handleFormVisibility, setSelectedId }) {
    return (
        <div>
            <table>
                <thead className='tableRow'>
                    <input type="checkbox" />
                    <th>Name</th>
                    <th>Email</th>
                    <th>Role</th>
                    <th>Actions</th>
                </thead>
                <TableRow tableData={tableData} handleTableData={handleTableData} handleFormVisibility={handleFormVisibility} setSelectedId={setSelectedId} />
            </table>
        </div>
    );
}

import TableRow from "./TableRow"; // Import the TableRow component
import "./component.css"; // Import component-specific CSS styles

export default function Table({ tableData, handleTableData, handleFormVisibility, setCurrentRow, selectedId, setSelectedId }) {
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
                <TableRow tableData={tableData} handleTableData={handleTableData} handleFormVisibility={handleFormVisibility} setCurrentRow={setCurrentRow} selectedId={selectedId} setSelectedId={setSelectedId} />
            </table>
        </div>
    );
}
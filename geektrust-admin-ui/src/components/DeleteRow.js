// Export a function to handle row deletion
export default function handleDelete(selectedIds, tableData, handleTableData) {
    // Filter the table data to remove the rows with the specified selectedIds
    const updatedTableData = tableData.filter((object) => !selectedIds.includes(object.id));
    // Update the table data using the provided function
    handleTableData(updatedTableData);
}


// export default function handleDelete(id, tableData, handleTableData) {
//     // Filter the table data to remove the specified row
//     const updatedTableData = tableData.filter((object) => object.id !== id);
//     // Update the table data using the provided function
//     handleTableData(updatedTableData);
// }
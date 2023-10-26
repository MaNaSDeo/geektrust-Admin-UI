export default function handleDelete(id, tableData, handleTableData) {
    const updatedTableData = tableData.filter((object) => object.id !== id);
    handleTableData(updatedTableData);
}
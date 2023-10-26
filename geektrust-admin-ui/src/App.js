import { useEffect, useState } from 'react'; // Import necessary React components
import './App.css'; // Import component-specific CSS styles
import axios from 'axios'; // Import Axios for API requests
import Table from "./components/Table"; // Import the Table component
import PopUpForm from './components/PopUpForm'; // Import the PopUpForm component
import handleDelete from './components/DeleteRow'

function App() {
  // Define the API URL for data fetching
  const api_URL = 'https://geektrust.s3-ap-southeast-1.amazonaws.com/adminui-problem/members.json';

  // Define state variables for managing data and form visibility
  const [originalTableData, setOriginalTableData] = useState([]); // Original array
  const [tableData, setTableData] = useState([]); // Array that can change
  const [formVisibility, setFormVisibility] = useState(false);
  const [currentRow, setCurrentRow] = useState(null);
  const [selectedId, setSelectedId] = useState([]);

  // Use useEffect to fetch data when the component mounts
  useEffect(() => {
    fetchUserDetails();
  }, []);

  // Function to fetch user details from the API
  const fetchUserDetails = async () => {
    try {
      const response = await axios.get(api_URL);
      if (response.status === 200) {
        const datas = await response.data;
        // Store the original data
        setOriginalTableData(datas);
        // Initialize tableData with the original data
        setTableData(datas);
      }
    } catch (error) {
      // Handle API request error here
      console.error('Error fetching data:', error);
    }
  }

  return (
    <div className="App">
      <h1>Hello India! New One</h1>
      <button onClick={() => { handleDelete(selectedId, tableData, setTableData) }}>Delete selected</button>
      <input type='text' placeholder='Search by name, email, or role' />
      {/* Render the PopUpForm if formVisibility is true, else render an empty fragment */}
      {formVisibility ? <PopUpForm handleFormVisibility={setFormVisibility} tableData={tableData} currentRow={currentRow} handleTableData={setTableData} /> : <></>}
      <Table tableData={tableData} handleTableData={setTableData} handleFormVisibility={setFormVisibility} setCurrentRow={setCurrentRow} selectedId={selectedId} setSelectedId={setSelectedId} />
    </div>
  );
}

export default App;
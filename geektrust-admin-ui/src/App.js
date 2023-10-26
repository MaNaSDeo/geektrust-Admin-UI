import { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios';
import Table from "./components/Table";
import PopUpForm from './components/PopUpForm';

function App() {

  const api_URL = 'https://geektrust.s3-ap-southeast-1.amazonaws.com/adminui-problem/members.json';

  const [originalTableData, setOriginalTableData] = useState([]); // Original array
  const [tableData, setTableData] = useState([]); // Array that can change
  const [formVisibility, setFormVisibility] = useState(false);
  const [selectedId, setSelectedId] = useState(null);

  useEffect(() => {
    fetchUserDetails();
  }, []);

  const fetchUserDetails = async () => {
    const response = await axios.get(api_URL)
    if (response.status === 200) {
      const datas = await response.data;
      setOriginalTableData(datas); // Store the original data
      setTableData(datas); // Initialize tableData with the original data
    }
  }





  return (
    <div className="App">
      <h1>Hello India! New One</h1>
      <input type='text' placeholder='Search by name, email or role' />
      {formVisibility ? <PopUpForm handleFormVisibility={setFormVisibility} tableData={tableData} handleTableData={setTableData} selectedId={selectedId} /> : <></>}
      <Table tableData={tableData} handleTableData={setTableData} handleFormVisibility={setFormVisibility} setSelectedId={setSelectedId} />
    </div>
  );
}

export default App;

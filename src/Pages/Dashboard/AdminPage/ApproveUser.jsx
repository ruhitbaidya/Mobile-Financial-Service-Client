import axios from "axios";
import { useEffect, useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import Users from "./Users";

const ApproveUser = () => {
    const [apUser, setApUser] = useState([])
    const token = localStorage.getItem("token")
  useEffect(() => {
    axios
      .post("http://localhost:5000/alluserPending",{token})
      .then((res) => setApUser(res.data))
      .catch((err) => console.log(err));
  }, []);
  return (
    <div>
      <div>
        <div>
          <Tabs>
            <TabList>
              <Tab>Pending Request</Tab>
              <Tab>Approve User</Tab>
            </TabList>

            <TabPanel>
              <Users data={apUser}></Users>
            </TabPanel>
            <TabPanel>
              <Users data={apUser}></Users>
            </TabPanel>
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default ApproveUser;

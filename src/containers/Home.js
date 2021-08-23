import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
// import { useHistory } from "react-router-dom";
import Navbar from "../components/Navbar";
import { fetchCompany } from "../reducers/apiReducer";

const Home = () => {
  // getting user search
  const [search, setSearch] = useState("")

  // const history = useHistory()
  
  // const { user } = useSelector((state) => ({ ...state }));
  // useEffect(() => {
  //   if (user) history.push("/");
  // }, [user]);

  const dispatch = useDispatch();
  const { company } = useSelector((state) => state.company);

  console.log(company);

  const submitHandler = (e) => {
    e.preventDefault()
    dispatch(fetchCompany(search));
    console.log(search)
  }
  
  return (
    <div className="main_wrapper">
      <Navbar logout="Logout" homeNav={true} />
      <div className="root">
        <h2 className="subtitle">Accurate, Fast and Reliable Data</h2>
        <div className="card_wrap">
          <div className="card">
            <form className="domain-form" onSubmit={submitHandler}>
              <input
                className="main-form"
                type="text"
                placeholder="Enter domain name"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
              <input type="submit" className="check-btn" value="Check" />
            </form>
          </div>
          <div className="info-card">
            <div className="display-card">
              <h3>Industry: <span>{company?.industry}</span> </h3>
              <h3>Name: <span>{company?.name}</span></h3>
              <h3>Country: <span>{company?.country}</span></h3>
              <h3>Year Founded:<span>{company?.year_founded}</span> </h3>
              <h3>Employee Count:<span>{company?.employees_count}</span> </h3>
              <h3>Linkedin Url:<span><a href={`https://www.${company?.linkedin_url}`} rel="noreferrer" target = "_blank">{company?.linkedin_url}</a></span> </h3>
              <h3>Domain:<span>{company?.domain}</span> </h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;

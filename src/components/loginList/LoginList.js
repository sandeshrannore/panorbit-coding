import React, { useEffect } from "react";
import "./LoginList.css";
import { useGetUserDataQuery } from "../../api/ApiSlice"; // Adjust the path accordingly
import { useNavigate  } from "react-router-dom";

const LoginList = () => { 
  const { data, isLoading, isError } = useGetUserDataQuery();
  const navigate = useNavigate()

  const Click = (userData) => {
    navigate(`/homepage/${userData.id}`, { state: userData })
  }

  return (
    <div className="card">
      <h1 className='card_top'>Select an account</h1>
      <div className="card_bottom">
        {/* --------- Data mapping ------ */}
        {isLoading ? (
          <div>Loading</div>
        ) : isError ? (
          <div>Error</div>
        ) : (
          <div>
            {data.users.map((el) => (
              <div onClick={() => {Click(el)}} key={el.id}>
                  <div className="maping_div">
                    <img src={el.profilepicture} alt="profile image" />
                    <p>{el.name}</p>
                  </div>
                <hr />
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default LoginList;

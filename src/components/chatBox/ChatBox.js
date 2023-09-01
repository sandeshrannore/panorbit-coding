import React, { useState } from 'react'
import { BsChatRight } from "react-icons/bs";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";
import './ChatBox.css'
import { useGetUserDataQuery } from '../../api/ApiSlice';

const ChatBox = () => {
    const [hide, setHide] = useState(false);
    const { data, isLoading, isError } = useGetUserDataQuery();
  
    return (
      <div
        className='chatBox'
      >
        <div onClick={() => setHide(!hide)} className='chat'>
          <div>
            <BsChatRight />
            <p>Chat</p>
          </div>
          {hide ? <FiChevronDown /> : <FiChevronUp />}
        </div>
        {hide ? (
          <div className='profiles'>
            {/* --------- Data maping ------ */}
            {isLoading ? (
          <div>Loading</div>
        ) : isError ? (
          <div>Error</div>
        ) : (
          <div>
            {data.users.map((e) => (
              <div key={e.id}>
                  <div className="maping_div">
                    <img src={e.profilepicture} alt="profile image" />
                    <p>{e.name}</p>
                  </div>
                <hr />
              </div>
            ))}
          </div>
        )}
          </div>
        ) : (
          ""
        )}
      </div>
    );
}

export default ChatBox
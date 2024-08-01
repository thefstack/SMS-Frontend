import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useUserContext } from '../../Context/userContext';
import { Link, } from 'react-router-dom';
import AddUser from "../Add/AddUser"

const ListView = (props) => {
  const { setIsAdding, removeUser, isError,isAdding} = useUserContext();

  const [showConfirm, setShowConfirm] = useState(false);
  const [userIdToRemove, setUserIdToRemove] = useState(null);
  const [isRes,setIsRes]=useState(false);
  

  const confirmRemoveUser = (id) => {
    setUserIdToRemove(id);
    setShowConfirm(true);
  };
  
  const handleConfirm = (res) => {
    if (res && userIdToRemove !== null) {
      removeUser(userIdToRemove);
    }
    setShowConfirm(false);
    setUserIdToRemove(null);
  };
  useEffect(()=>{
    if(isError){
      setIsRes(true)
      setTimeout(() => {
        setIsRes(false)
      }, 6000);
    }
  },[isError])

  return (
    <Wrapper>
      <div className="header">
        <input type="text" placeholder="Search" />
        <button onClick={() => setIsAdding(true)} className="add-btn">Add</button>
      </div>
      {isAdding && <AddUser/>}
      <div className="data-display">
        <table>
          <thead>
            <tr>
              <th>username</th>
              <th>Role</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {props.data.map((user) => (
              <tr key={user.username}>
              <td>{user.username}</td>
                <td>{user.role}</td>
                <td className="view-x-btn">
                  <Link to={`/admin/user/${user.username}`} className="view-btn">View</Link>
                  <button
                    style={{ backgroundColor: "red" }}
                    className="view-btn"
                    onClick={() => confirmRemoveUser(user.id)}
                  >
                    X
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {showConfirm && (
        <div className="confirm-remove">
          <div className="in">
            <p>Are you sure you want to remove this user?</p>
            <div className="btn-cont">
              <button className="btn" onClick={() => handleConfirm(true)}>Yes</button>
              <button className="btn" onClick={() => handleConfirm(false)}>No</button>
            </div>
          </div>
        </div>
      )}
      {isRes && <div className='response'>Error</div>}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  position: relative;

  .response {
    position: absolute;
    background: #ffd4b1;
    box-shadow: 5px 5px 0 #EE7C20;
    padding: 10px 50px;
    left: 50%;
    top: 10px;
    transform: translateX(-50%);
  }

  .confirm-remove {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: absolute;
    left: 0;
    top: 0;
    gap: 15px;
    padding: 30px 50px;
    text-align: center;
    background: rgba(0, 0, 0, 0.5);

    .in {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      gap: 15px;
      padding: 30px 50px;
      background: #ffd4b1;
      border-radius: 15px;
      box-shadow: 5px 5px 0 #EE7C20;
    }

    .btn-cont {
      display: flex;
      flex-direction: row;
      gap: 10px;

      .btn {
        padding: 5px 15px;
        outline: none;
        border: none;
        background-color: #EE7C20;
        border-radius: 10px;
        display: flex;
        align-items: center;
        height: 30px;
        color: #fff;
        justify-content: center;
        transition: 0.5s;
        cursor: pointer;
        font-weight: 700;
      }

      .btn:nth-child(1) {
        &:hover {
          background: #FF5733;
        }
      }

      .btn:nth-child(2) {
        &:hover {
          background: #DFFF00;
          color: #000;
        }
      }
    }
  }

  .header {
    width: 100%;
    display: flex;
    gap: 30px;

    input {
      padding: 5px 10px;
      border: 1px solid #EE7C20;
      border-radius: 5px;
    }

    .add-btn {
      padding: 5px 15px;
      outline: none;
      border: none;
      background-color: #EE7C20;
      border-radius: 10px;
      display: flex;
      align-items: center;
      height: 30px;
      color: #fff;
      justify-content: center;
      transition: 0.5s;
      cursor: pointer;
    }

    .add-btn:hover {
      background: #ffd4b1;
      color: #000;
    }
  }

  .data-display {
    width: 100%;
    overflow-x: auto;
    min-height: 60vh;
    border: 1px solid;

    table {
      width: 100%;
      border-collapse: collapse;

      th, td {
        padding: 10px;
        text-align: center;
        border-bottom: 1px solid #ddd;
      }

      .view-x-btn {
        display: flex;
        gap: 8px;
        justify-content:center;
      }

      .view-btn {
        padding: 5px 15px;
        outline: none;
        border: none;
        background-color: #EE7C20;
        border-radius: 10px;
        color: #fff;
        text-decoration: none;
        display: flex;
        align-items: center;
        justify-content: center;
        height: 30px;
        cursor: pointer;
      }

      .view-btn:hover {
        background: #ffd4b1;
        color: #000;
      }
    }
  }
`;

export default ListView;

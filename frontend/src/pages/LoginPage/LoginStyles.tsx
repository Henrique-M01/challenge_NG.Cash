import styled from 'styled-components';

export const LoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 380px;
  margin: 0 auto;
  margin-top: 90px;
  padding: 30px;
  border: 1px solid #ccc;
  border-radius: 5px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  background-color: #fff;

  h1 {
    margin: 0 0 30px;
    margin-top: 30px;
    font-size: 35px;
    text-align: center;
    font-weight: 300;
  }

  form {
    display: flex;
    flex-direction: column;
    width: 100%;
    align-items: center;
    justify-content: center;
    height: 250px;

    label {
      display: flex;
      flex-direction: column;
      width: 100%;
      margin-bottom: 20px;
      align-items: center;

      input {
        margin-top: 5px;
        padding: 10px;
        border: 1px solid #ccc;
        border-radius: 5px;
        font-size: 16px;
      }
    }

    button {
      width: 100%;
      padding: 10px;
      border: 1px solid #ccc;
      border-radius: 5px;
      font-size: 16px;
      background-color: #F5F5DC;
      cursor: pointer;
      transition: all 0.2s ease-in-out;
      
      &:hover {
        background-color: #ccc;
      }
    }
  }

  button {
    width: 100%;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
    font-size: 16px;
    background-color: #fff;
    cursor: pointer;
    transition: all 0.2s ease-in-out;

    &:hover {
      background-color: #ccc;
    }
  }
  `;
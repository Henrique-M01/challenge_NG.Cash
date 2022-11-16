import styled from 'styled-components';

export const FormContainer = styled.div`
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
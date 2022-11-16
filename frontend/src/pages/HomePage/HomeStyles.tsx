import styled from 'styled-components';

export const HomeContainer = styled.main`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  margin-top: 80px;
  padding: 70px 20px;

  div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 300px;
    height: 300px;
    border: 1px solid #000;
    border-radius: 5px;
    margin: 20px;
    margin-top: 50px;
    padding: 20px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
    transition: all 0.2s ease-in-out;
    color: #36454F;

    h1 {
      font-size: 34px;
      font-weight: 500;
      margin-bottom: 10px;
    }

    p {
      font-size: 20px;
      font-weight: 400;
      text-align: center;
    }

    button {
      width: 100%;
      height: 40px;
      margin-top: 20px;
      border: none;
      border-radius: 5px;
      background-color: #36454F;
      color: #fff;
      font-size: 18px;
      font-weight: 500;
      cursor: pointer;
      transition: all 0.2s ease-in-out;
      
      &:hover {
      transform: scale(1.05);
    }
    }
  }
`;

export const CloseBtn = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  background: transparent;
  border: none;
  font-size: 20px;
  font-weight: 500;
  color: #36454F;
  cursor: pointer;
`;

export const NewTransferModalContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  
  h1 {
    font-size: 34px;
    font-weight: 500;
    margin-bottom: 10px;
  }

  p {
    font-size: 20px;
    font-weight: 400;
    text-align: center;
  }

  form {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    margin-top: 20px;

    input {
      width: 100%;
      height: 40px;
      margin-top: 20px;
      border: none;
      border-radius: 5px;
  
      font-size: 18px;
      font-weight: 500;
      padding: 0 10px;
      transition: all 0.2s ease-in-out;
    }

    button {
      width: 100%;
      height: 40px;
      margin-top: 20px;
      border: none;
      border-radius: 5px;
      background-color: #36454F;
      color: #fff;
      font-size: 18px;
      font-weight: 500;
      cursor: pointer;
      transition: all 0.2s ease-in-out;
    }
  }
  `;

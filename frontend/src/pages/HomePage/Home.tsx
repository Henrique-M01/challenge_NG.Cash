import React from 'react';
import ReactModal from 'react-modal';
import Footer from '../../components/FooterComponent/Footer';
import Header from '../../components/HeaderComponent/Header';
import { CloseBtn, HomeContainer, NewTransferModalContainer } from './HomeStyles';

ReactModal.setAppElement('#root');

function Home() {
  const [newTransactionsModal, setnewTransactionsModal] = React.useState(false);
  const [transactionsModal, setTransactionsModal] = React.useState(false)

  function openModalNewTransf() {
    setnewTransactionsModal(true);
  }

  function closeModalNewTransf() {
    setnewTransactionsModal(false);
  }

  function openModalTransf() {
    setTransactionsModal(true);
  }

  function closeModalTransf() {
    setTransactionsModal(false);
  }

  const stylesModal = {
    overlay: {
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    content: {
      width: '400px',
      height: '400px',
      margin: 'auto',
      backgroundColor: '#fff',
      border: 'none',
      borderRadius: '5px',
      padding: '20px',
      boxShadow: '0 0 10px rgba(0, 0, 0, 0.5)',
    },
  }

  return (
    <div>
      <Header />
      <HomeContainer>
        <div>
          <h1>New transaction!</h1>
          <p>Perform transactions in real time with Ng.Cash</p>
          <button onClick={openModalNewTransf}>Send or receive money</button>
          <ReactModal
            isOpen={newTransactionsModal}
            onRequestClose={closeModalNewTransf}
            style={stylesModal}
            shouldCloseOnOverlayClick={true}
          >
            <div>
              <NewTransferModalContainer>
                <h1>NG.Cash</h1>
                <p>Perform transactions in real time with Ng.Cash</p>
                <form>
                  <input type="number" placeholder="R$ What amount do you want to transfer?" />
                  <input type="text" placeholder="Who do you want to transfer?" />
                  <button>Transfer!</button>
                </form>
                <CloseBtn
                  onClick={closeModalNewTransf}
                >
                  X
                </CloseBtn>
              </NewTransferModalContainer>
            </div>
          </ReactModal>
        </div>
        <div>
          <h1>Transactions</h1>
          <p>See all your transactions, or filter as you prefer</p>
          <button onClick={openModalTransf}>See all your transactions</button>
          <ReactModal
            isOpen={transactionsModal}
            onRequestClose={closeModalTransf}
            style={stylesModal}
            shouldCloseOnOverlayClick={true}
          >
            <div>
              <h1>Transactions</h1>
              <p>Tabela com as transferencias vindas da api</p>
              <CloseBtn
                onClick={closeModalTransf}
              >
                X
              </CloseBtn>
            </div>
          </ReactModal>
        </div>
      </HomeContainer>
      <Footer />
    </div>
  )
}

export default Home;

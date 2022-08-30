import { ethers } from 'ethers'
import Web3Modal from 'web3modal'
import React, { useEffect, useState } from 'react';
import Modal from 'react-modal';
import { useRouter } from 'next/router'
import { Button } from "@mui/material";
import Image from "next/image";
import Typography from "@mui/material/Typography";


export const AuthMetaMask = (BaseComponent: React.FC) =>
  function Component(props: any) {
    const [validMetaMask, setValidMetaMask] = useState(false)
    const [validAccount, setValidAccount] = useState(false)
    const validAddress = "0x8Fa35DCf283116870A27720933689A2e920A6fa4"

    useEffect(() => {
      async function connectMetaMask(){
        if (window.ethereum) {
          setValidMetaMask(true)
          console.log("window.ethereum detected");
  
          const web3Modal = new Web3Modal()
          const connection = await web3Modal.connect()
          const provider = new ethers.providers.Web3Provider(connection)    
          const signer = provider.getSigner()
          const currentAddress = await signer.getAddress()
          console.log("current account address:", currentAddress);
        
          if (currentAddress == validAddress) {
            setValidAccount(true)
            console.log("the MetaMask account is valid")
            return true
          } else {
            console.log("the MetaMask account is invalid")
            return false
          }
          
        } else {
          console.log("window.ethereum not detected");
        }
      }

      connectMetaMask()
    }, [])

    return (
      <div>
        <BaseComponent {...props} />
        {!validAccount && <ValidateAccount />}
        {!validMetaMask && <ValidateMetaMask />}
      </div>
    )

  };


const ValidateMetaMask = () => {
  const router = useRouter()

  const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
    },
  };

  return (
    <Modal
      isOpen={true}
      onAfterOpen={() => {}}
      onRequestClose={() => {}}
      contentLabel='Example Modal'
      style={customStyles}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <Image src="/MetaMarket.ico" alt="MetaMarket logo" width={250} height={270} />
        <Typography variant="h4" component="div" gutterBottom>
          Plase add MetaMask to your browser first!
        </Typography>
        <form method="get" action="https://www.youtube.com/watch?v=OJqaZRpRqXM">
          <button type="submit">Add MetaMask</button>
        </form>
        <button type="button" onClick={() => router.reload()}>Refresh Page</button>
      </div>
    </Modal>
  );
};


const ValidateAccount = () => {
  const router = useRouter()

  const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
    },
  };

  return (
    <Modal
      isOpen={true}
      onAfterOpen={() => {}}
      onRequestClose={() => {}}
      contentLabel='Example Modal'
      style={customStyles}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <Image src="/MetaMarket.ico" alt="MetaMarket logo" width={250} height={270} />
        <Typography variant="h4" component="div" gutterBottom>
          Plase connect to the valid MetaMask account!
        </Typography>
        <button type="button" onClick={() => router.reload()}>Refresh Page</button>
      </div>
    </Modal>
  );
};

import { NextPage } from "next";
import { useEffect, useState } from 'react'
import { ethers } from 'ethers'
import { create as ipfsHttpClient, Options } from 'ipfs-http-client'
import { useRouter } from 'next/router'
import Web3Modal from 'web3modal'
import { WithLogin } from "../../components/AuthLogin";
import {AuthMetaMask} from "../../components/AuthMetaMask";
const client = ipfsHttpClient('https://ipfs.infura.io:5001/api/v0' as Options)

import {nftmarketaddress, nftaddress} from '../../config'
import Market from '../../artifacts/contracts/NFT_market.sol/MetaMarket.json'
import NFT from '../../artifacts/contracts/NFT.sol/NFT.json'

const Create: NextPage = () => {
  const [fileUrl, setFileUrl] = useState(null)
  const [formInput, updateFormInput] = useState({ price: '', name: '', creator:'', description: '' })
  const router = useRouter()

  async function onChange(e) {
    const file = e.target.files[0]
    const { name, creator } = formInput
    // creator = 
    if (!name || !file) return
      const createData = JSON.stringify({name, creator, file})

    /* upload the image to IPFS */
    try {
      const added = await client.add(createData,
        {
          progress: (prog) => console.log(`received: ${prog}`)
        }
      )
      const url = `https://ipfs.infura.io/ipfs/${added.path}`
      createNFT(url)
    } catch (error) {
      console.log('Error uploading file: ', error)
    }
  }


  async function createNFT(url: any) {
    const web3Modal = new Web3Modal()
    const connection = await web3Modal.connect()
    const provider = new ethers.providers.Web3Provider(connection)    
    const signer = provider.getSigner()

    let contract = new ethers.Contract(nftaddress, NFT.abi, signer)
    let transaction = await contract.createToken(url)
    let tx = await transaction.wait()
    let event = tx.events[0]
    let value = event.args[2]
    let tokenId = value.toNumber()
    const price = ethers.utils.parseUnits(formInput.price, 'ether')

    // /* then list the NFT in dashboard inventory */
    // contract = new ethers.Contract(nftmarketaddress, Market.abi, signer)
    // let listingPrice = await contract.getListingPrice()
    // listingPrice = listingPrice.toString()
    // transaction = await contract.createMarketItem(nftaddress, tokenId, price, { value: listingPrice })
    // await transaction.wait()
    // router.push('/')
  }

  
  return (
    <div className="flex justify-center">
      <div className="w-1/2 flex flex-col pb-12">
        <input 
          placeholder="NFT Name"
          className="mt-8 border rounded p-4"
          onChange={e => updateFormInput({ ...formInput, name: e.target.value })}
        />
        <textarea
          placeholder="NFT Creator"
          className="mt-2 border rounded p-4"
          onChange={e => updateFormInput({ ...formInput, description: e.target.value })}
        />
        <input
          type="file"
          name="New NFT"
          className="my-4"
          onChange={onChange}
        />
        {
          fileUrl && (
            <img className="rounded mt-4" width="350" src={fileUrl} />
          )
        }
        <button onClick={onChange} className="font-bold mt-4 bg-sky-400 text-white rounded p-4 shadow-lg">
          Create New NFT
        </button>
      </div>
    </div>
  )
};

export default WithLogin(AuthMetaMask(Create));
// export default AuthMetaMask(Create);

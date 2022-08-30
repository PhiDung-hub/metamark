import { ethers } from 'ethers'
import Web3Modal from "web3modal"

import {nftmarketaddress, nftaddress} from '../config'
import Market from '../artifacts/contracts/NFT_market.sol/MetaMarket.json'

interface NFTProps {
    tokenId: string;
    nftName: string;
    creator: string;
    seller: string;
    price: string;
    image: string;
    description: string;
}

export default async function BuyNFT(props: NFTProps) {
    /* needs the user to sign the transaction, so will use Web3Provider and sign it */
    const web3Modal = new Web3Modal()
    const connection = await web3Modal.connect()
    const provider = new ethers.providers.Web3Provider(connection)
    const signer = provider.getSigner()
    const contract = new ethers.Contract(nftmarketaddress, Market.abi, signer)

    /* user will be prompted to pay the asking proces to complete the transaction */
    const price = ethers.utils.parseUnits(props.price.toString(), 'ether')   
    const transaction = await contract.createMarketSale(nftaddress, props.tokenId, {
      value: price
    })
    await transaction.wait()
    window.location.href = "/dashboard";
  }
  
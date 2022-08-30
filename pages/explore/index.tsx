import { NextPage } from "next";
import { experimentalStyled as styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import { ethers } from 'ethers'
import Web3Modal from "web3modal"
import { useEffect, useState } from 'react'
import axios from 'axios'

import {nftmarketaddress, nftaddress} from '../../config'
import Market from '../../artifacts/contracts/NFT_market.sol/MetaMarket.json'
import NFT from '../../artifacts/contracts/NFT.sol/NFT.json'

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

export async function BuyNFT(nft: any) {
  /* needs the user to sign the transaction, so will use Web3Provider and sign it */
  const web3Modal = new Web3Modal()
  const connection = await web3Modal.connect()
  const provider = new ethers.providers.Web3Provider(connection)
  const signer = provider.getSigner()
  const contract = new ethers.Contract(nftmarketaddress, Market.abi, signer)

  /* user will be prompted to pay the asking proces to complete the transaction */
  const price = ethers.utils.parseUnits(nft.price.toString(), 'ether')   
  const transaction = await contract.createMarketSale(nftaddress, nft.tokenId, { value: price })
  await transaction.wait()
  window.location.href = "/dashboard";
}


const Explore: NextPage = () => {
  const [nfts, setNfts] = useState([] as any)
  const [loadingState, setLoadingState] = useState('not-loaded')
  useEffect(() => {loadNFTs()}, [])

  async function loadNFTs() {
    /* create a generic provider and query for unsold market items */
    const provider = new ethers.providers.JsonRpcProvider("https://rpc-mumbai.maticvigil.com")
    const nftContract = new ethers.Contract(nftaddress, NFT.abi, provider)
    const marketContract = new ethers.Contract(nftmarketaddress, Market.abi, provider)
    const data = await marketContract.fetchMarketItems()

    /*
    *  map over items returned from smart contract and format 
    *  them as well as fetch their token metadata
    */
    const items = await Promise.all(data.map(async (i: any) => {
      const tokenUri = await nftContract.tokenURI(i.tokenId)

      const item_test = await marketContract.fetchItemById(2)
      console.log(item_test)

      const meta = await axios.get(tokenUri)
      let price = ethers.utils.formatUnits(i.price.toString(), 'ether')
      let item = {
        price,
        tokenId: i.tokenId.toNumber(),
        seller: i.seller,
        owner: i.owner,
        creator: meta.data.creator,
        image: meta.data.image,
        nftName: meta.data.name,
        description: meta.data.description,
      }
      return item
    }))

    setNfts(items)
    setLoadingState('loaded')
    console.log("page: " + loadingState)
  }

  if (loadingState === 'loaded' && !nfts.length) return (<h1 className="px-20 py-10 text-3xl">No items in marketplace</h1>)

  return (
    <div
      style={{
        margin: "100px",
        marginTop: "60px",
      }}
    >

      <div className="flex justify-center">
        <div className="px-4" style={{ maxWidth: '1600px' }}>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-4">
            {
              nfts.map((nft: any, i: any) => (
                <div key={i} className="border shadow rounded-xl overflow-hidden">
                  <a href={"/explore/NFTdetails" + "#" + nft.tokenId}>
                    <img src={nft.image} />
                  </a>
                  <div className="p-4">
                    <p style={{ height: '64px' }} className="text-2xl font-semibold">{nft.nftName}</p>
                    <div style={{ height: '70px', overflow: 'hidden' }}>
                      <p className="text-gray-400">{nft.description}</p>
                    </div>
                  </div>
                  <div className="p-4 bg-black">
                    <p className="text-2xl mb-4 font-bold text-white">{nft.price} &nbsp;MetaMark</p>
                    <button className="w-full bg-sky-400 text-white font-bold py-2 px-12 rounded" onClick={() => BuyNFT(nft)}>Buy</button>
                  </div>
                </div>
              ))
            }
          </div>
        </div>
      </div>
    </div>
    
  );
};

export default Explore;

import type { NextPage } from "next";
import Image from "next/image";
import { ethers } from 'ethers'
import axios from 'axios'
import { useEffect, useState } from 'react'
import BuyNFT from "./index";

import {nftmarketaddress, nftaddress} from '../../config'
import Market from '../../artifacts/contracts/NFT_market.sol/MetaMarket.json'
import NFT from '../../artifacts/contracts/NFT.sol/NFT.json'

const NFTdetails: NextPage = () => {
  if (typeof window === "undefined") {
    console.log("Oops, `window` is not defined")
  }
  try { window } catch (err) {
    console.log("Oops, `window` is not defined")
  }
  console.log("here")
  var tokenId = "2"
  // var tokenId = window.location.hash.substring(0)
  console.log(tokenId)
  const [nft, setNft] = useState([] as any)
  const [loadingState, setLoadingState] = useState('not-loaded')
  useEffect(() => {loadNFT()}, [])

  async function loadNFT() {
    /* create a generic provider and query for unsold market items */
    const provider = new ethers.providers.JsonRpcProvider("https://rpc-mumbai.maticvigil.com")
    const nftContract = new ethers.Contract(nftaddress, NFT.abi, provider)
    const marketContract = new ethers.Contract(nftmarketaddress, Market.abi, provider)

    const item = await marketContract.fetchItemById(2)
    console.log(item)
    const tokenUri = await nftContract.tokenURI(2)
    console.log(tokenUri)
    const meta = await axios.get(tokenUri)
    console.log(meta)
    let price = ethers.utils.formatUnits(item.price.toString(), 'ether')
    let nft = {
      price,
      tokenId: item.tokenId.toNumber(),
      seller: item.seller,
      owner: item.owner,
      creator: meta.data.creator,
      image: meta.data.image,
      nftName: meta.data.name,
      description: meta.data.description,
    }

    setNft(nft)
    setLoadingState('loaded')
    console.log("page: " + loadingState)
  }



  return (
    <div className="max-w-screen-xl mx-auto px-4 py-8">
      <div className=" flex flex-row">
        <div className="w-2/3 justify-center flex relative h-96 mr-8">
          <Image
            src={nft.image}
            alt=""
            layout="fill"
          />
        </div>
        <div className="w-1/3">
          <div className="shadow">
            <div className="bg-blue-400 text-white p-4">
              <h1 className="text-xl font-bold">{nft.nftName}</h1>
              <p className="text-lg">{nft.creator}</p>
            </div>
            <div className="bg-white p-4">
              <h2 className="text-lg font-bold mb-4">Asset details</h2>
              <p className="font-semibold">
                Asset Name:{" "}
                <span className="font-normal italic">{nft.nftName}</span>
              </p>
              <p className="font-semibold">
                Asset ID:{" "}
                <span className="font-normal italic">{nft.tokenId}</span>{" "}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NFTdetails;
import React, { useEffect, useState } from 'react';
import './App.css';
import Header from './components/Header';
import axios from 'axios'
import CardList from './components/CardList';
import spinner from './assets/loading.svg'
import CurrentNft from './components/CurrentNft';
import Divider from './components/Divider';
function App() {
  const [nfts, setNfts] = useState([])
  const [loading, setLoading] = useState(true)
  const [currentNft, setCurrentNft] = useState({})

  useEffect(() => {
    async function main() {
      // const contractAddress = '0x7C9F8Bd44257dE4A06cc5316AcD61a2543b37306'
      const collectionAddress = '0x7DC2bce2eE2d4BC1a65c00C56516691B913D0d1D'
      const res = await axios.get(`https://testnets-api.opensea.io/assets?order_direction=asc&asset_contract_address=${collectionAddress}`)
      setNfts(res.data.assets)
      setLoading(false)
      if (res.data.assets[0]) {
        setCurrentNft(res.data.assets[0])
      }
    }
    return main()
  }, [])

  return (
    <div className="h-screen w-screen bg-black font-sans">

      {loading && <div className="absolute w-full h-full flex justify-center items-center"><img src={spinner} alt="loading" /></div>}
      <Header />
      <CurrentNft data={currentNft} />
      <Divider />
      <CardList nfts={nfts} />
      {/* <p className="text-white">{JSON.stringify(currentNft)}</p> */}
    </div>
  );
}

export default App;

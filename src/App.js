import React, { useEffect, useState } from 'react';
import './App.css';
import Card from './components/Card';
import Header from './components/Header';
import axios from 'axios'

function App() {
  const [nfts, setNfts] = useState([])

  useEffect(() => {
    async function main() {
      // const contractAddress = '0x7C9F8Bd44257dE4A06cc5316AcD61a2543b37306'
      const collectionAddress = '0x7DC2bce2eE2d4BC1a65c00C56516691B913D0d1D'
      const res = await axios.get(`https://testnets-api.opensea.io/assets?order_direction=asc&asset_contract_address=${collectionAddress}`)
      console.log(res.data.assets)
      setNfts(res.data.assets)
    }
    return main()
  }, [])

  return (
    <div className="h-screen w-screen bg-black font-sans">
      <Header />
      {nfts.map(nft => <Card key={nft.token_id} img={nft.image_original_url} title={nft.name} traits={nft.traits} id={nft.token_id} />)}
    </div>
  );
}

export default App;

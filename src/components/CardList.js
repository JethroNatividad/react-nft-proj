import React from 'react'
import Card from './Card';

const CardList = ({ nfts }) => {
    return (
        <div className="flex overflow-x-scroll overflow-y-hidden scroll">
            {nfts.map(nft => <Card key={nft.token_id} img={nft.image_original_url} title={nft.name} traits={nft.traits} id={nft.token_id} />)}
        </div>
    )
}

export default CardList

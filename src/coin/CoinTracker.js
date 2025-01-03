import React, { useEffect, useState } from 'react';

export default function CoinTracker() {
	const [loading, setLoading] = useState(true);
	const [coins, setCoins] = useState([])
	useEffect(() => {
		fetch("https://api.coinpaprika.com/v1/tickers")
			.then((response) => response.json())
			.then((json) => {
				setCoins(json);
				setLoading(false);
			})
	}, [])

	return (
		<div>
			<h1>The Coins! ({coins.length})</h1>
			{loading ? <strong>Loading...</strong> : null}
			<ul>
				{coins.map((coin, index) =>
					<li>{coin.name} ({coin.symbol}): ${coin.quotes.USD.price} USD</li>
				)}
			</ul>
		</div>
	)
}

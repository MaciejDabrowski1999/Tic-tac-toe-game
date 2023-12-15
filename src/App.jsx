import { useState } from 'react'
import Player from './components/player'
import GameBoard from './components/GameBoard'

function App() {
	const [activePlayer, setActivePlayer] = useState('X')

	function handleSelectSquare() {
		setActivePlayer(curActivePlayer => (curActivePlayer === 'X' ? 'O' : 'X'))
	}
	return (
		<main>
			<div id="game-container" className="highlight-player">
				<ol id="players">
					<Player initialName="Player 1" symbol="X" />
					<Player initialName="Player 2" symbol="O" />
				</ol>
				<GameBoard onSelectSquare={handleSelectSquare} />
			</div>
		</main>
	)
}

export default App

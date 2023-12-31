import { useState } from 'react'

export default function Player({ initialName, symbol, isActive, onChangeName }) {
	const [playerName, setPlayerName] = useState(initialName)
	const [isEditing, setIsEditing] = useState(false)

	const handleClickEdit = () => {
		setIsEditing(editing => !editing)

		if (isEditing) {
			onChangeName(symbol, playerName)
		}
	}

	function changeName(event) {
		setPlayerName(event.target.value)
	}

	let editingPlayerName = <span className="player-name">{playerName}</span>

	if (isEditing) {
		editingPlayerName = <input required type="text" defaultValue={playerName} onChange={changeName}></input>
	}
	return (
		<li className={isActive ? 'active' : undefined}>
			<span className="player">
				{editingPlayerName}
				<span className="player-symbol">{symbol}</span>
			</span>
			<button onClick={handleClickEdit}>{isEditing ? 'save' : 'edit'}</button>
		</li>
	)
}

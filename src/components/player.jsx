import { useState } from 'react'

export default function Player({ initialName, symbol }) {
	const [playerName, setPlayerName] = useState(initialName)
	const [isEditing, setIsEditing] = useState(false)

	const handleClickEdit = () => {
		setIsEditing(editing => !editing)
	}

	function changeName(event) {
		setPlayerName(event.target.value)
	}

	let editingPlayerName = <span className="player-name">{playerName}</span>

	if (isEditing) {
		editingPlayerName = <input required type="text" defaultValue={playerName} onChange={changeName}></input>
	}
	return (
		<li>
			<span className="player">
				{editingPlayerName}
				<span className="player-symbol">{symbol}</span>
			</span>
			<button onClick={handleClickEdit}>{isEditing ? 'save' : 'edit'}</button>
		</li>
	)
}

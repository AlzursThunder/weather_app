import React from 'react'

const ListItem: React.FC<ListItemProps> = ({text}) => {
	return (
		<li>
			{text}
		</li>
	)
}

export default ListItem
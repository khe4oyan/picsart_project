import React from 'react'
import './CustomInput.css'

export default function CustomInput({ value, setValue, inputType, placeholder }) {
	return (
		<div>
			<p>{placeholder}</p>
			<input 
				type={inputType} 
				value={value}
				onChange={(e) => {setValue(e.target.value)}}
			/>
		</div>
	)
}

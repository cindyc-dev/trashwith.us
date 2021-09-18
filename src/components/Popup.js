import React from 'react'
import { FaTimes } from 'react-icons/fa'
import { useState } from 'react/cjs/react.development'
import Action from './Action'
import AddAction from './AddAction'
import { FaPlusCircle } from 'react-icons/fa';

export default function Popup({isOpen, onClose, actionlist, name}) {
    const [isAddOpen, setIsAddOpen] = useState(false)

    if (!isOpen) return null

    return (
        <div className="popup">

            <div className="popup-header">
                <h2 className="popup-header">{name}</h2>
                <div className="close" onClick={onClose}>
                    <FaTimes />
                </div>
            </div>
            
            <div className="popup-container">
                <div className="popup-img-container popup-column-1">
                    <div className="popup-img"></div>
                </div>

                <div className="popup-column-2">
                {actionlist.map((action) => (
                    <Action 
                        key = {action.id}
                        name = {action.name}
                        description = {action.description}
                        />
                    ))}
                </div>
            </div>

            <div className="add-btn-in-popup-container" onClick={() => {setIsAddOpen(true)}}>
                <FaPlusCircle className="add-btn-in-popup"/>
            </div>

            <div>
                <AddAction 
                    isOpen={isAddOpen}
                    onClose={() => setIsAddOpen(false)}
                />
            </div>
        </div>
    )
}

import React, { useState,type Dispatch,type SetStateAction } from 'react';

interface ISelectedTechProps{
    selectedTech:TechType[]
    setSelectedTech:Dispatch<SetStateAction<TechType[]>>;
}
const Selected = () => ({selectedTech, setSelectedTech}:ISelectedTechProps)=>{
    
    return (
        <div>
            Selected players
        </div>
    );
};

export default Selected;
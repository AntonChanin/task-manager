import { useEffect, useState } from 'react'

import BaseModel from '../model/BaseModel'

export const useDragAndDrop = (initialState: BaseModel[]) => {

    const [isDragging, setIsDragging] = useState(false);
    const [listItems, setListItems] = useState<BaseModel[]>(initialState);

    useEffect(() => {
        setListItems(initialState);
    }, [initialState])

    const handleUpdateList = (id: string, status: BaseModel) => {

       let card = listItems.find((item) => item.id === id)

       if (card && card.parent !== status) {

           card.setParent(status);

           setListItems( prev => ([
                card!,
                ...prev.filter(item => item.id !== id)
            ]))
       }
   }

    const handleDragging = (dragging: boolean) => setIsDragging(dragging)

    return {
        isDragging,
        listItems,
        handleUpdateList,
        handleDragging,
    }
}

export default useDragAndDrop;

import { KeyboardEvent, useState } from 'react'
import * as C from './styles'

type Props = {
    onEnter: (taskName: string) => void
}
export const AddArea = ({ onEnter }: Props) => {
    const [inputText, setInputText] = useState('');

    const handleKeyUp = (e: KeyboardEvent) => {
        if (e.code === 'Enter' || e.code === 'NumpadEnter' && inputText !== '') {
            onEnter(inputText)
            setInputText('');
        }
    }

    return (
        <C.Container>
            <div className='image'>➕</div>
            <input
                type="text"
                value={inputText}
                placeholder='Adicione uma tarefa'
                onChange={e => setInputText(e.target.value)}
                onKeyUp={handleKeyUp}
            />
        </C.Container>
    )
}
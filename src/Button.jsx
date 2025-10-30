
import { useDispatch } from 'react-redux';
import { addMoney, removeMoney } from './store'

export default function Button() {
    const dispatch = useDispatch();
  return (
    <div>
        <button onClick={()=>dispatch(addMoney(500))}>Credit Money</button>
        <button onClick={()=>dispatch(removeMoney(500))}>Debit Money</button>
    </div>
  )
}

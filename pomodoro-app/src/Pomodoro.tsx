
import {FC} from 'react';

type Props = {
   name: string;
}
const Pomodoro: FC<Props> = ({name}: Props) => {
   return <div><h1>{name="Shannon"}</h1></div>
}

export default Pomodoro;
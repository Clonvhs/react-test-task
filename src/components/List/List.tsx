import React from "react";
import { ListItem } from '../ListItem';
import './List.scss';

type Props = {
    list:ListObj[]
}

export const List:React.FC<Props> = (props) => {
    const { list } = props
    console.log(list);

    return (
        <ul className="List">
            {
                list.map(listItem => (
                    <li className="ListItem" key={listItem.name}>
                        <ListItem listItem={listItem} />
                    </li>
                ))
            }
        </ul>
    )
}

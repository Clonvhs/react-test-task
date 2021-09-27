import React from "react";
import { List } from "../List";
import './ListItem.scss'

type Props = {
    listItem: ListObj;
}

export const ListItem:React.FC<Props> = (props) => {
    const { listItem } = props;
    const { name, content } = listItem

    return (<span className="ListItemContent">
       <span className="ListItemContentName">
           {name}
       </span>
        {content.length ? <List list={content} /> : ''}
    </span>)
}

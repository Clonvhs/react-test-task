function CreateList(itemCount: number, maxDepth: number, currentLength = 0):ListObj | {} {

    if(!itemCount) {
       throw new Error('No items in the list')
    }

    if (itemCount) {
        const list = [];

        for (let i = 1 ; i <= itemCount; i++){
            list.push({
                    name: `This is the #${i} item and current depth lvl is ${currentLength} level`,
                    content: maxDepth  <= 0
                        ? []
                        : CreateList(itemCount, maxDepth - 1, currentLength + 1),
                })
        }

        return  list
    }
    return {}
}

export const CreateJsonList = (itemCount: number, maxDepth: number,) => {
    const list = new (CreateList as any)(itemCount, maxDepth);
    return JSON.stringify(list)
}

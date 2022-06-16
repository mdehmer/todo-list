
export function Stats({listData}) {
    let countCompleted = listData.map((item) => {return item.complete});
    return (
        <div>
        {countCompleted.length} Completed of {listData.length} 
</div>      
  )}
  
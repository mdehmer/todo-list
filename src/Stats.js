export function Stats({ listData }) {
  let countComplete = listData.filter((item) => {
    return item.complete;
  });

  let completionRate = Math.round(
    (countComplete.length / listData.length) * 100
  );
  return (
    <div className="Stats-body">
      {countComplete.length} av {listData.length} avklarade (
      {!completionRate ? "0" : completionRate}%)
    </div>
  );
}

export function Stats({ listData }) {
  let countComplete = listData.filter((item) => {
    return item.complete;
  });

  let completionRate = Math.round(
    (countComplete.length / listData.length) * 100
  );
  return (
    <div>
      {countComplete.length} completed out of {listData.length} (
      {!completionRate ? "0" : completionRate}%)
    </div>
  );
}

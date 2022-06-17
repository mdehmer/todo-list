import Confetti from "react-confetti";

export function Stats({ listData }) {
  let countComplete = listData.filter((item) => {
    return item.complete;
  });

  let completionRate = Math.round(
    (countComplete.length / listData.length) * 100
  );

  if (!completionRate) {
    completionRate = 0;
  }

  return (
    <div className="Stats-body">
      <div className="progress">
        <div
          className={`progress-bar ${
            completionRate === 100 ? "bg-success" : "bg-dark"
          } `}
          role="progressbar"
          style={{ width: completionRate + "%" }}
        >
          {countComplete.length} av {listData.length} avklarade (
          {completionRate}%)
          {completionRate === 100 ? (
            <Confetti className="confettiSize" />
          ) : null}
        </div>
      </div>
    </div>
  );
}

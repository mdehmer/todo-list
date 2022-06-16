import ToDo from "./ToDo.js";
import React from 'react';

// export function List() {
//   return (
//     <form>
//       <ul> </ul>
//       <input type="checkbox"></input>
//     </form>
//   );
// }

export const List = ({content}) => {
  return (
      <div>
          {content.map(todo => {
              return (
                  <ToDo todo={todo} />
              )
          })}
      </div>
  );
};

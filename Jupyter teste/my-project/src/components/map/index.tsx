import React from "react";

// interface Props {
//   json: { [key: string]: { nome: string; idade?: number; sexo: string } };
// }
interface Props {
  json: { campo1: boolean; campo2: boolean; campo3: boolean; campo4: boolean };
}

const addCampo = (campo: any) => {
  if (campo) {
    return;
  } else {
    return "";
  }
};

const MyMap: React.FC<Props> = ({ json }) => {
  const listItems = Object.entries(json).map(([key, value]) => (
    <>{value ? key : <></>}</>
  ));
  return <ul>{listItems}</ul>;
};

// const MyMap: React.FC<Props> = ({ json }) => {
//   const listItems = Object.entries(json).map(([key, value]) => (
//     <li key={key}>
//       {key}{value?.nome} ({value?.idade}, {value?.sexo})
//       {value?.nome} ({(value?.idade ?? value?.idade)  })
//     </li>
//   ));

//   return <ul>{listItems}</ul>;
// };

export default MyMap;

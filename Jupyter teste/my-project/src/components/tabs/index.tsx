import React from "react";
import { Tab } from "./tabs";
import data from "../../dados.json"

const json = {
  campo1: true,
  campo2: false,
  campo3: true,
  campo4: false,
  campo5: true,
  campo6: false,
  campo7: true,
  campo8: false,
  campo9: true,
  "Aa 12 #Ç-": true,
};

export default function MyTabs() {
  const [activeTab, setActiveTab] = React.useState("");

  const CamposParaFinalidadeX = (teste: any) => {
    const listItems = Object.entries(teste).map(([key, value]) => (
      <>
        {value ? (
          <Tab
            active={activeTab === key}
            onClick={() => {
              setActiveTab(key);
            }}
          >
            {key}
          </Tab>
        ) : (
          <></>
        )}
      </>
    ));
    return <>{listItems}</>;
  };

  //VANTAGENS
  //-menor quantidade de linhas de código, visto que não é necessário criar um componente para cada tab
  //-maior segurança e sistema mais leve, visto que o componente que não será mostrado, não será renderizado pelo react
  //-maior facilidade de manutenção, visto que ele se baseia num json para renderizar os componentes
     //(atualmente, teria que mexer no código no caso de novos tipos de usuários ou mudanças de permissão)
  //-maior legibilidade e facilidade de entendimento do código, visto que ele se encontraria mais enxuto.

  return (
    <>
      <div>
        {/* código necessário na proposta atual */}
        {CamposParaFinalidadeX(data.Permissoes.Fornecedores)}  
         {/* código necessário na proposta atual */}
         <div>{CamposParaFinalidadeX(data.Permissoes["Front (SAC Lojas Físicas)"])}</div>
      </div>

      <div style={{ marginTop: 120 }}>
        {/* código necessário na abordagem antiga*/}
        <Tab
          active={activeTab === "campo12"}
          onClick={() => setActiveTab("campo12")}
        >
          campo 1
        </Tab>
        <Tab
          active={activeTab === "campo22"}
          onClick={() => setActiveTab("campo22")}
          style={{ visibility: "hidden" }}
        >
          campo 2
        </Tab>
        <Tab
          active={activeTab === "campo32"}
          onClick={() => setActiveTab("campo32")}
        >
          campo 3
        </Tab>
        <Tab
          active={activeTab === "campo42"}
          onClick={() => setActiveTab("campo42")}
          style={{ visibility: "hidden" }}
        >
          campo 4
        </Tab>
        <Tab
          active={activeTab === "campo52"}
          onClick={() => setActiveTab("campo52")}
        >
          campo 5
        </Tab>
        <Tab
          active={activeTab === "campo62"}
          onClick={() => setActiveTab("campo62")}
          style={{ visibility: "hidden" }}
        >
          campo 6
        </Tab>
        <Tab
          active={activeTab === "campo72"}
          onClick={() => setActiveTab("campo72")}
        >
          campo 7
        </Tab>
        <Tab
          active={activeTab === "campo82"}
          onClick={() => setActiveTab("campo82")}
        >
          campo 8
        </Tab>
        <Tab
          active={activeTab === "campo92"}
          onClick={() => setActiveTab("campo92")}
          style={{ visibility: "hidden" }}
        >
          campo 9
        </Tab>
        <Tab
          active={activeTab === "campo102"}
          onClick={() => setActiveTab("campo102")}
          style={{ visibility: "hidden" }}
        >
          campo 10
        </Tab>
        {/* código necessário na abordagem antiga*/}
      </div>
    </>
  );
}

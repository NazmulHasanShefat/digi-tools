import { use } from "react";
import ToolCard from "./ToolCard";


const ToolsCards = ({ Product_data }) => {
const toolProducts = use(Product_data);

  return (
    <>
    {toolProducts.map((tool,index)=> <ToolCard tool={tool} key={index}/>)}
    </>
  );
};

export default ToolsCards;
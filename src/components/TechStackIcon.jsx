/* eslint-disable react/prop-types */
import { Tooltip } from "@heroui/react"
import { useEffect, useState } from "react"

export function TechStackIcon({techStackName, tootltipName=null}){
    const [IconComponent, setIconComponent] = useState(null);
    if(techStackName==='CSSNew' & !tootltipName){
        tootltipName='CSS'
    }
    useEffect(()=>{
        import("/src/assets/icons/TechStackIconsList.jsx").then((icons)=>{
            if(icons[techStackName+'Icon']){
                setIconComponent(()=>icons[techStackName+'Icon'])
            }else{
                console.error(`Icono "${techStackName}" no econtrado`);
            }
        }).catch((error)=>console.error("Error al importar el icono", error));
        
    },[IconComponent])

    if (!IconComponent) return <span>{techStackName}</span>;

    return (
        <Tooltip 
        content={tootltipName ? tootltipName : techStackName}
        closeDelay={100}
        color="foreground"
        showArrow={true}>
          <button className="hover:cursor-default text-3xl	">
            {IconComponent()}
          </button>
        </Tooltip>
    )
}
import React from "react";
import { ButtonDownloadZip } from "../Buttons/ButtonDownloadZip";
import { ButtonViewFronts } from "../Buttons/ButtonViewFronts";

export const CardProduct = ({ product, number }) => {
  return (
    <div className="flex gap-6 cardNameSerie">
      <div className="w-1/2 overflow-hidden rounded-2xl">
        <img
          src="https://cloupyblob.blob.core.windows.net/cloupy/image-not-found.png"
          alt="imagen"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="w-1/2 flex flex-col justify-between">
        <div>
          <h1 className="font-semibold text-15px">Nombre de la serie</h1>
        </div>
        <div className="xsmall:text-12px medium:text-12px small:text-10px text-primario/gris">
          <span className="">
            {product.color}/
            {product.rectified === "0" ? "No Rectificado" : "Rectificado"}/
            Hasta {product.renders.length} variaciones
          </span>
        </div>
        <div className="flex flex-col gap-2">
          <ButtonViewFronts product={product} number={number}/>
          <ButtonDownloadZip />
        </div>
      </div>
    </div>
  );
};

import { StaticImageData } from "next/image";
import { ReactNode } from "react";

export interface IDog {
  id?: number;
  breedName: string;
  breedType?: string;
  breedDescription?: string;
  furColor?: string;
  origin?: string;
  minHeightInches?: number;
  maxHeightInches?: number;
  minWeightPounds?: number;
  maxWeightPounds?: number;
  minLifeSpan?: number;
  maxLifeSpan?: number;
  imgThumb?: any;
  imgSourceURL?: string;
  imgAttribution?: string;
  imgCreativeCommons?: boolean;
}

export interface Response<T> {
  dogs: T[];
  totalResults: string;
  incomleted_results: boolean
}


export interface IHero {
  children: ReactNode
}



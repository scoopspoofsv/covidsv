export interface DistrictData {
  [key: string]: {
    districtData: {
      [key: string]: DistrictDataItem;
    };
  };
}

export interface DistrictDataItem {
  confirmed: number;
  lastupdatedtime: string;
  delta: Delta;
}

export interface Delta {
  confirmed: number;
}

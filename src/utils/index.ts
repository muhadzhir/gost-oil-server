import { OilStation } from "../types";

export const getOilRusName = (oilStation: OilStation) => {
  const oilStationMap: Record<OilStation, string> = {
    ZARECHNY: 'Заречный',
    SHOSEINAYA: 'Шоссейная',
    GUTYAKULOVA: 'Гутякулова'
  }
  return oilStationMap[oilStation]
}

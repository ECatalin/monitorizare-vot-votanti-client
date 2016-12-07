import { INCIDENTS, INCIDENTS_LODADED, SET_CITIES, SET_ACTIVE_MAP } from './constants';
import { GET_CITIES, GET_INCIDENT_TYPES } from 'containers/App/constants';
import * as _ from 'lodash';

export function getIncidentsAction() {
  return {
    type: INCIDENTS,
  };
}

export function incidentsLoaded(incidents) {
  return {
    type: INCIDENTS_LODADED,
    incidents: incidents.data,
    pagination: incidents.paginator,
  };
}


export function selectedCountyAction(cityId) {
  return {
    type: GET_CITIES,
    cityId,
  };
}

export function getIncidentTypesAction(cityId) {
  return {
    type: GET_INCIDENT_TYPES,
    cityId,
  };
}

export function setActiveMapAction(map) {
  return {
    type: SET_ACTIVE_MAP,
    map,
  };
}

export function getCitiesSuccess(cities) {
  const newCities = [];
  _.each(cities, (city) => {
    const newCounty = {
      id: city.id,
      value: city.id,
      county: {
        id: city.county.id,
        name: city.county.name,
        code: city.county.code,
      },
      name: city.name,
      text: city.name,
      sirutaCode: city.sirutaCode,
      electoralCircleCode: city.electoralCircleCode,
    };
    newCities.push(newCounty);
  });
  return {
    type: SET_CITIES,
    cities: newCities,
  };
}
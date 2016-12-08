import { fromJS } from 'immutable';
import { INCIDENTS_LODADED, SET_COUNTY, SET_CITIES, SET_ACTIVE_MAP, FILTERS_LODADED, SET_TYPE, SET_CITY, RESET_COUNTY } from './constants';
import { GET_CITIES } from 'containers/App/constants';
import * as _ from 'lodash';

const initialState = fromJS({
  incidents: [],
  pagination: {},
  nextPage: 1,
  countyId: '',
  cities: [],
  activeMap: 'country',
  typeId: '',
  cityId: '',
});

function sesizariReducer(state = initialState, action) {
  switch (action.type) {
    case INCIDENTS_LODADED:
      return state
        .set('incidents', _.concat(state.get('incidents'), action.incidents))
        .set('pagination', action.pagination)
        .set('nextPage', action.pagination.currentPage + 1);
    case FILTERS_LODADED:
      return state
        .set('incidents', action.incidents)
        .set('pagination', action.pagination);
    case SET_COUNTY:
      return state
        .set('countyId', action.value);
    case GET_CITIES:
      return state
        .set('countyId', action.cityId);
    case SET_TYPE:
      return state
        .set('typeId', action.value);
    case SET_CITIES:
      return state
        .set('cities', action.cities);
    case SET_CITY:
      return state
        .set('cityId', action.value);
    case SET_ACTIVE_MAP:
      return state
        .set('activeMap', action.map);
    case RESET_COUNTY:
      return state
        .set('countyId', '')
        .set('cities', []);
    default:
      return state;
  }
}

export default sesizariReducer;

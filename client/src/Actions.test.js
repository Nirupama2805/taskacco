import configureStore from 'redux-mock-store'
import nock from 'nock';
import configureMockStore from 'redux-mock-store';
import Reduxthunk from 'redux-thunk';
import { GetOptionsData,SaveDetails,fetchUsers,BASE_URL } from './redux/Actions'
import mockAxios from 'jest-mock-axios'
const middlewares = [Reduxthunk];
const mockstore= configureMockStore(middlewares);

describe('selectOptions',()=>
{
    test('Dsipatches the correct action and return the details given',() => {
        const store = mockstore();
        const obj={
    }
        const expectedActions=
            [{
                      'type':'SAVE_DETAILS',
                      'details':{}
            }]
        const s = store.dispatch(SaveDetails(obj));
        expect(store.getActions()).toEqual(expectedActions);
    });
});
describe('testing get option details',()=>{
    test('Dsipatches the correct action and return the options fetched',async() => {
        // const result = await GetOptionsData()
    const store = mockstore();

    const expectedActions = 
        [{"options": {"address": "", "creditCardType": ["Cashback", "Shopping ", "Secured", "Travel", "Fuel", "Student", "Corporate", "Reward"], "eMail": "", "firstName": "", "gender": ["Male", "Female"], "languages": ["Telugu", "English", "Hindi"], "lastName": "", "state": ["Andhra Pradesh", "Arunachal Pradesh", "Assam", "Bihar", "Chhattisgarh", "Goa", "Gujarat", "Haryana", "Himachal Pradesh", "Jammu and Kashmir", "Jharkhand", "Karnataka", "Kerala", "Madhya Pradesh", "Maharashtra", "Manipur", "Meghalaya", "Mizoram", "Nagaland", "Odisha", "Punjab", "Rajasthan", "Sikkim", "Tamil Nadu", "Telangana", "Tripura", "Uttarakhand", "Uttar Pradesh", "West Bengal", "Andaman and Nicobar Islands", "Chandigarh", "Dadra and Nagar Haveli", "Daman and Diu", "Delhi", "Lakshadweep", "Puducherry"], "zip": ""}, "type": "GET_OPTIONS"}];
    const dispatchedStore = await GetOptionsData();
    store.dispatch(dispatchedStore);
    expect(store.getActions()).toEqual(expectedActions);
});
    });


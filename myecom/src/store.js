import {  legacy_createStore } from "redux";
import rootred from "./Redux/reducers/main";


const store = legacy_createStore(
    rootred
);


export default store;
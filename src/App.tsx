import "./App.css";
import {AppRoutes} from "./routes";
import {BrowserRouter} from "react-router-dom";
import {Provider} from "react-redux";
import Store from "./store";
import {useEffect} from "react";
import { invoke } from "@tauri-apps/api/core";


function App() {
    useEffect(()=>{
      invoke('tauri', {cmd:'create'})
        .then(() =>{console.log("Tauri launched")})
        .catch(() =>{console.log("Tauri not launched")})
      return () =>{
        invoke('tauri', {cmd:'close'})
          .then(() =>{console.log("Tauri launched")})
          .catch(() =>{console.log("Tauri not launched")})
      }
    }, [])

    return (
        <BrowserRouter>
            <Provider store={Store}>
                <AppRoutes/>
            </Provider>
        </BrowserRouter>
    );
}

export default App;
import { useState,useEffect } from "react";
import PointRelayMap from "../components/pointRelayMap";
import { searchPointRelay } from "../services/mondialRelay.service";
import Loading from "react-spinners/SyncLoader";
import { pointRelay, searchData } from "../types/relay";
import {toast, ToastContainer} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

export default function Home() {
  const [codePostal, setCodePostal] = useState<string>("");
  const [pays, setPays] = useState<string>("");
  const [limitResult, setLimitResult] = useState<number>(2);
  const [listeRelayData, setListeRelayData] = useState<[pointRelay]>();
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(()=> {
    console.log(listeRelayData)
  },[listeRelayData])

  async function handlerSubmit(e: React.FormEvent) {
    e.preventDefault();
    setIsLoading(true)
    try {
      const searchData: searchData = {
        codePostal,
        pays,
        limitResult,
      }
      const res = await searchPointRelay(searchData)
        
      if(res) {
          const res = await searchPointRelay({codePostal, pays, limitResult})

          if (res.status === 200) {
              setListeRelayData(res.data)
              setIsLoading(false)
          } else {
              res.data.forEach((message) => {
                  toast.error(message);
              })
              setIsLoading(false)
          }
      }
    } 
    catch (error) {
    }
    finally{
        setIsLoading(false)
    }
  }

  return (
    <div className="container">
        <ToastContainer
            position="top-right"
            autoClose={3500}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="dark"
        />
      <div className="form">

      <form action="">
      <div className="form-group">
        <label htmlFor="code-postal">Code postal</label>
        <input type="text" name="code-postal" onChange={(e)=> setCodePostal(e.target.value)} value={codePostal} id="" />
      </div>
      <div className="form-group">
        <label htmlFor="pays">Pays</label>
        <input type="text" name="pays"  onChange={(e)=> setPays(e.target.value)} value={pays} id="" />
      </div>
      <div className="form-group">
        <label htmlFor="limit-result">Nombre de resultat</label>
        <input
          type="number"
          min={2}
          max={30}
          step={1}
          value={limitResult}
          name="limit-result"
          onChange={(e)=> setLimitResult(parseInt(e.target.value))}
          id=""
        />
      </div>
      <button type="submit" onClick={handlerSubmit}>
        Envoyer
      </button>
    </form>
      </div>
    <div className="liste-relay">
    {
        isLoading ? <div className="loading"><Loading size={8} color="white"/></div> : listeRelayData && <PointRelayMap relay={listeRelayData}/>
    }
    </div>
    </div>

  );
}

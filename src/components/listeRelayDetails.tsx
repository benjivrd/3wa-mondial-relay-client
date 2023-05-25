import { pointsRelayMapProps } from "../types/relay"
import { OrderList } from 'primereact/orderlist';
import { PointRelayCard } from "./PointRelayCard";

export  function ListeRelayDetails({relay}:pointsRelayMapProps){

    return (
           <div className="orderList">
            <OrderList value={relay} itemTemplate={PointRelayCard} header="Points Relais"></OrderList>
        </div>

    )
}


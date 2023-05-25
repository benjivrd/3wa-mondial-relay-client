import {  relaySearch } from "../types/relay";

export function PointRelayCard({ LgAdr1, LgAdr3, URL_Photo }: relaySearch) {
  return (
    <div className="flex flex-wrap p-2 align-items-center gap-3">
      <img
        className="w-4rem shadow-2 flex-shrink-0 border-round"
        src={URL_Photo}
        alt="photo"
      />
      <div className="flex-1 flex flex-column gap-2 xl:mr-8">
        <span className="font-bold">{LgAdr1}</span>
        <div className="flex align-items-center gap-2">
          <i className="pi pi-tag text-sm"></i>
          <span>{LgAdr3}</span>
        </div>
      </div>
    </div>
  );
}

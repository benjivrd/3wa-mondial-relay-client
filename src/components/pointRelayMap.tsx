type pointRelayMapProps = {
    listeRelayData: Array<object>
}

export default function PointRelayMap({listeRelayData}:pointRelayMapProps) {

    return (
      <div className="map">
            {listeRelayData}
      </div>
    )
  
  
  }
  
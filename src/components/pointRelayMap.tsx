import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";

export type pointsRelayMapProps = {
  relay: [pointRelay];
};

export type pointRelay = {
  Latitude: string;
  Longitude: string;
  LgAdr1: string;
  Num: number;
  URL_Photo: string;
  Horaires: relayHoraire;
};

export type relayHoraire = {
  Lundi: {
    Matin: string;
    ApresMidi: string;
  };
  Mardi: {
    Matin: string;
    ApresMidi: string;
  };
  Mercredi: {
    Matin: string;
    ApresMidi: string;
  };
  Jeudi: {
    Matin: string;
    ApresMidi: string;
  };
  Vendredi: {
    Matin: string;
    ApresMidi: string;
  };
  Samedi: {
    Matin: string;
    ApresMidi: string;
  };
  Dimanche: {
    Matin: string;
    ApresMidi: string;
  };
};

export default function PointRelayMap({ relay }: pointsRelayMapProps) {
  const lat = relay?.map((value) =>
    parseFloat(value.Latitude.replace(",", "."))
  );
  const long = relay?.map((value) =>
    parseFloat(value.Longitude.replace(",", "."))
  );

    return (
      <>
        {relay && (
          <MapContainer
            style={{ height: "50vh" }}
            center={[
              lat.reduce((prev, next) => prev + next) / relay.length,
              long.reduce((prev, next) => prev + next) / relay.length,
            ]}
            zoom={12}
          >
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            {relay.map((listeR: pointRelay) => {
              return (
                <Marker
                  key={listeR.Num}
                  position={[
                    parseFloat(listeR.Latitude.replace(",", ".")),
                    parseFloat(listeR.Longitude.replace(",", ".")),
                  ]}
                >
                  <Popup maxWidth={150} maxHeight={150}>
                    <h2>{listeR.LgAdr1.trim()}</h2>
                    <img src={listeR.URL_Photo} width={200} height={150} />
                    <table>
                      <thead>
                        <tr>
                          <th>Jour</th>
                          <th>Matin</th>
                          <th>Après-midi</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>Lundi</td>
                          <td>{listeR.Horaires.Lundi.Matin}</td>
                          <td>{listeR.Horaires.Lundi.ApresMidi}</td>
                        </tr>
                        <tr>
                          <td>Mardi</td>
                          <td>{listeR.Horaires.Mardi.Matin}</td>
                          <td>{listeR.Horaires.Mardi.ApresMidi}</td>
                        </tr>
                        <tr>
                          <td>Mercredi</td>
                          <td>{listeR.Horaires.Mercredi.Matin}</td>
                          <td>{listeR.Horaires.Mercredi.ApresMidi}</td>
                        </tr>
                        <tr>
                          <td>Jeudi</td>
                          <td>{listeR.Horaires.Jeudi.Matin}</td>
                          <td>{listeR.Horaires.Jeudi.ApresMidi}</td>
                        </tr>
                        <tr>
                          <td>Vendredi</td>
                          <td>{listeR.Horaires.Vendredi.Matin}</td>
                          <td>{listeR.Horaires.Vendredi.ApresMidi}</td>
                        </tr>
                        <tr>
                          <td>Samedi</td>
                          <td>{listeR.Horaires.Samedi.Matin}</td>
                          <td>{listeR.Horaires.Samedi.ApresMidi}</td>
                        </tr>
                        <tr>
                          <td>Dimanche</td>
                          <td>{listeR.Horaires.Dimanche.Matin}</td>
                          <td>{listeR.Horaires.Dimanche.ApresMidi}</td>
                        </tr>
                      </tbody>
                      <tfoot></tfoot>
                    </table>
                  </Popup>
                </Marker>
              );
            })}
          </MapContainer>
        )}
      </>
    );
}

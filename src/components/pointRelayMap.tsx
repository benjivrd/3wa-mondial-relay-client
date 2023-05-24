import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import "leaflet/dist/leaflet.css";

type pointRelayMapProps = {
    listeRelayData: Array<object>
}

export default function PointRelayMap({listeRelayData}:pointRelayMapProps) {
    const lat = listeRelayData.map((value) => parseFloat(value.Latitude.replace(',', '.')));
    const long = listeRelayData.map((value) => parseFloat(value.Longitude.replace(',', '.')));

    return (
        <>
        {
            listeRelayData.length > 0 &&
            <MapContainer style={{ height: "50vh" }}
                          center={[
                              lat.reduce((prev, next) => prev + next) / listeRelayData.length,
                              long.reduce((prev, next) => prev + next) / listeRelayData.length
                          ]}
                          zoom={12}>
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                {
                    listeRelayData?.map((listeR: any) => {
                        return (
                            <Marker key={listeR.Num} position={[parseFloat(listeR.Latitude.replace(',', '.')), parseFloat(listeR.Longitude.replace(',', '.'))]}>
                                <Popup>
                                    <h2>{listeR.LgAdr1.trim()}</h2>
                                    <img src={listeR.URL_Photo} width={200} height={150} />
                                    <table>
                                        <tr>
                                            <th>Jour</th>
                                            <th>Matin</th>
                                            <th>Après-midi</th>
                                        </tr>
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
                                    </table>
                                </Popup>
                            </Marker>
                        )
                    })
                }
            </MapContainer>
        }
        </>

    )
}
  
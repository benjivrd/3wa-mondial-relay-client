export type pointsRelayMapProps = {
    relay: [pointRelay];
  };

  export type pointsRelaySearchMapProps = {
    relaySearch: [relaySearch];
  };
  
  export type pointRelay = {
    Latitude: string;
    Longitude: string;
    LgAdr1: string;
    Num: number;
    URL_Photo: string;
    Horaires: relayHoraire;
  };

  export type relaySearch = {
    LgAdr1: string;
    LgAdr3: string;
    URL_Photo: string;
  };
  
  export type searchData = {
    codePostal: string;
    pays: string;
    limitResult: number;
  }
  
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
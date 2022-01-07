import React, { Component }  from 'react';
import './App.css';
import * as viaAds from "@vv-descoberta-ads/via-ads-js-component";

function App()  { 
  var data = { "slotIdVia": "20", "sessionId": "C37ED857-515F-415C-9691-F1DBCB73DC41", "userId": "C37ED857-515F-415C-9691-F1DBCB73DC41", "filter": "category=Homepage", "isProduction": true}
  
  return (
    <div>
      {console.log("OBJETO VIA ADS: " ,viaAds)}
      OK
      <viaAds.default data={data} />
    </div>
  );
}

export default App;

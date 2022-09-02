import React from "react";

export function Sponsors() {
  const [sponsors, setSponsors] = React.useState();
  let cochairs,
    plat,
    gold,
    silver,
    bronze,
    partner = "Loading";

  React.useEffect(function () {
    fetch(
      "https://script.googleusercontent.com/macros/echo?user_content_key=2yCxLSlAOlCKsraeln4sXvhdjfHnIu0JTi9zQX-aIKHAMASsWLZhrpIFM_hueCT3WwFMrWjNNl1ipyvj-WzViGFN7VwWLyhSm5_BxDlH2jW0nuo2oDemN9CCS2h10ox_1xSncGQajx_ryfhECjZEnNKpDTCrS4oUcGRJsueRxYaIb_g7lAMfgAqmSaks9TrD8I3slUktGntSJ_XTYZM2m1BuPu1deY6VNONv-vxvwak6EkNTFWH3sg&lib=MXvJ4nGr42jiIzQczXtkwVlRjwUM6HP_Z"
    )
      .then((res) => res.json())
      .then((data) => setSponsors(data));
  }, []);

  if (sponsors) {
    cochairs = sponsors.data[0].map((spon) => <div>{spon}</div>);
    plat = sponsors.data[1].map((spon) => <div>{spon}</div>);
    gold = sponsors.data[2].map((spon) => <div>{spon}</div>);
    silver = sponsors.data[3].map((spon) => <div>{spon}</div>);
    bronze = sponsors.data[4].map((spon) => <div>{spon}</div>);
    partner = sponsors.data[5].map((spon) => <div>{spon}</div>);
  }

  return (
    <div className="text-center pb-5">
        <h2 className="pb-3">Our Sponsors</h2>
   
      <div className="pb-3">   <h3 className="">Co-chairs</h3> {cochairs}</div>
      
      <div className="pb-3"><h3>Platinum Sponsors</h3> {plat}</div>

      <div className="pb-3" ><h3>Gold Sponsors  </h3>{gold}</div>


     
      <div className="pb-3"><h3>Silver Sponsors</h3>
      {silver}</div>
      <div className="pb-3"><h3>Bronze Sponsors</h3>
      {bronze}</div>
      <div className="pb-2"><h3>Partners</h3>
      {partner}</div>
    </div>
  );
}

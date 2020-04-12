import * as React from 'react'
import DatamapsIndia from 'react-datamaps-india'
 
const Map = ({statesData}) => {
  console.log("states Data : ",statesData)
  let regionDataObject = {};
  if(statesData.length >0) {
  statesData.forEach(el => {
    regionDataObject[el.stateName] = {
      value : el.confirmed
    }
  })
  // regionDataObject.Telangana = regionDataObject.Telengana
  // console.log(regionDataObject)
  // regionDataObject['Jammu & Kashmir'] = {}
  // regionDataObject['Jammu & Kashmir'].value = parseInt(regionDataObject['Union Territory of Jammu and Kashmir'].value) + parseInt(regionDataObject['Union Territory of Ladakh'].value)


}
  return (
    <DatamapsIndia
      // regionData={{
      //   Maharashtra: {
      //     value: 10
      //   }
      // }}
      regionData={regionDataObject}
      mapLayout={{
        title: '',
        legendTitle: '',
        startColor: '#FFFFCC',
        endColor: 'red',
        hoverTitle: 'Count',
        noDataColor: '#f5f5f5',
        borderColor: '#8D8D8D',
        hoverBorderColor: '#8D8D8D',
        hoverColor: '#D3D3D3'
      }}
      hoverComponent={({ value }) => {
        return (
          <>
            <p>{value.name}</p>
            <p>{value.value}</p>
          </>
        )
        }}
    />
  )
}

export default Map;

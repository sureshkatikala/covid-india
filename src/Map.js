import * as React from 'react'
 
import DatamapsIndia from 'react-datamaps-india'
 
const Map = () => {
  return (
    <DatamapsIndia
      regionData={{
        Maharashtra: {
          value: 10
        }
      }}
      mapLayout={{
        title: '',
        legendTitle: '',
        startColor: 'blue',
        endColor: 'red',
        hoverTitle: 'Count',
        noDataColor: '#f5f5f5',
        borderColor: '#8D8D8D',
        hoverBorderColor: '#8D8D8D',
        hoverColor: 'green'
      }}
    />
  )
}

export default Map;

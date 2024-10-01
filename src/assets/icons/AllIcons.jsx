import React from 'react'

const ArrowRightDown = ({width, height}) => {
    return(
        <svg width={width} height={height} xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 850.39 850.39">
        <g>
            <g id="Livello_1">
            <polygon points="859.4 774.36 859.4 -8 774.36 -8 774.36 719.17 51.13 -4.06 -9 56.07 709.28 774.36 -8 774.36 -8 859.4 774.36 859.4 859.4 859.4 859.4 774.36"/>
            </g>
        </g>
        </svg>
    )
  
}

const ArrowRightUp = ({width, height}) => {
    return (
      <svg  width={width} height={height} xmlns="http://www.w3.org/2000/svg" version="1.1"  viewBox="0 0 850.39 850.39">
          <g>
              <g id="Livello_1">
                  <polygon points="773.86 -8.5 -8.5 -8.5 -8.5 76.54 718.67 76.54 -4.56 799.76 55.58 859.9 773.86 141.61 773.86 858.9 858.9 858.9 858.9 76.54 858.9 -8.5 773.86 -8.5"/>
              </g>
          </g>
      </svg>
    )
}

const ArrowLeftUp = ({width, height}) => {
    return (
        <svg width={width} height={height} xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 850.39 850.39">
            <g>
                <g id="Livello_1">
                <polygon points="-9 77.03 -9 859.4 76.04 859.4 76.04 132.22 799.27 855.45 859.4 795.32 141.11 77.03 858.4 77.03 858.4 -8 76.04 -8 -9 -8 -9 77.03"/>
                </g>
            </g>
        </svg>
    )
}

const ArrowLeftDown = ({width, height}) => {
    return (
        <svg width={width} height={height} xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 850.39 850.39">
            <g>
                <g id="Livello_1">
                <polygon points="76.54 859.9 858.9 859.9 858.9 774.86 131.72 774.86 854.95 51.63 794.82 -8.5 76.54 709.78 76.54 -7.51 -8.5 -7.51 -8.5 774.86 -8.5 859.9 76.54 859.9"/>
                </g>
            </g>
        </svg>
    )
}

export {ArrowRightDown, ArrowRightUp, ArrowLeftUp, ArrowLeftDown}
import React from 'react'


const Yhteensa = ({osat}) => {

    return (
 
        <p>
            Yhteensä &nbsp;
            {osat.reduce((sum, osa) => sum+osa.tehtavia,0)} 
            &nbsp; tehtävää
        </p>

   )

}

export default Yhteensa 
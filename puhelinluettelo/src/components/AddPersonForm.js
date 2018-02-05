import React from 'react';

const AddPersonForm = ({onSubmit, valueName, onChangeName, valueNumber, onChangeNumber }) =>  {  
    return (
      <div>      

        <h3>Lisää uusi</h3>
            <form onSubmit={onSubmit}>
            <div>
                Nimi : 
                <input
                value={valueName}
                onChange={onChangeName}
            />
            </div>
            <div>
                Numero : 
                <input
                value={valueNumber}
                onChange={onChangeNumber}
            />
            </div>
            <div>
                <button type="submit">lisää</button>
            </div>
            </form>

      </div>
    )
}


export default AddPersonForm


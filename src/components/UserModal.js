import React from 'react'
import { useOvermind } from '../overmind'

const prettyAddress = (json) => {
return <pre>{`${json.street}
${json.suite}
${json.city}, ${json.zipcode}
Nullwhere, Arstotzka

(${json.geo.lat}, ${json.geo.lng})`}
</pre>
}

const UserModal = () => {
  const { state } = useOvermind()
  
  return (
    <div className="modal">
      {state.isLoadingUserDetails ? (
        <h4>Loading user details...</h4>
      ) : (
        <>
          <h3>{state.modalUser.name}</h3>
          <h4>{state.modalUser.details.email}</h4>
          <nav>
            <a href={"/users/" + state.modalUser.id + "?tab=0"}>bio</a> 
            <a href={"/users/" + state.modalUser.id + "?tab=1"}>address</a>
          </nav>
          {state.currentUserModalTabIndex === 0 ? (
            <div className="tab-content"><p>{state.modalUser.details.bio}</p></div>
          ) : null}
          {state.currentUserModalTabIndex === 1 ? (
            <div className="tab-content">{prettyAddress(state.modalUser.details.address)}</div>
          ) : null}
        </>
      )}
    </div>
  )
}
export default UserModal
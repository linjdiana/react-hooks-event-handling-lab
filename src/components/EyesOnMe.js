// Code EyesOnMe Component Here
    import React from 'react'

    export default function EyesOnMe() {
      return (
        <button onFocus={() => console.log("Good!")} onBlur={() => console.log("Hey! Eyes on me!")}>EyesOnMe</button>
      )
    }

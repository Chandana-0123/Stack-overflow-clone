import React from 'react'

<meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>

const ProfileBio = ({currentProfile}) => {
  return (
    <div>
        <div>
            {
                currentProfile?.tags.length !== 0 ?  (
                    <>
                        <h4>Tags watched</h4>
                        {
                            currentProfile?.tags.map((tag) => (
                                <p key={tag}>{tag}</p>
                            ))
                        }
                    </>
                ) : (
                    <p>0 tags watched</p>
                )
            }
        </div>
        <div>
            {
                currentProfile?.about ? (
                    <>  
                        <h4>About</h4>
                        <p>{currentProfile?.about}</p>
                    </>
                ) : (
                    <p>No Bio found</p>
                )
            }
        </div>
    </div>
  )
}

export default ProfileBio
import { useRouter } from 'next/dist/client/router'
import React from 'react'

export default function Postid({ props }) {
    const router = useRouter()
    const { postid } = router.query
    return (
        <div>
            {postid}
        </div>
    )
}

import { getServerSession } from "next-auth"
import { auth } from "../../lib/auth"


export default async function page() {
     const session = await getServerSession(auth)
  return (
    <div>{JSON.stringify(session)}</div>
  )
}

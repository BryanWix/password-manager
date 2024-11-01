import { getServerSession } from "next-auth";

import { db } from "@/lib/db";

import { redirect } from "next/navigation";

export default async function AnalyticsPage() {
  const session = await getServerSession()

  if(!session || !session.user?.email){
    return redirect("/")
  }

const user = await db.user.findUnique({
    where: {
        email: session.user.email
    },
    include: {
        elements: {
            orderBy: {
                createdAt: "desc"
            }
        }
    }
})
  return (
    <div>
      Analytics page
    </div>
  )
}
// 5:22:45
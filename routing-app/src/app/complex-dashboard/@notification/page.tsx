import Card from "@/components/card";
import Link from "next/link";

export default function Notification(){
    return <Card>
        Notification Component
        <Link href="/complex-dashboard/archived">Archived</Link>
        </Card>
}
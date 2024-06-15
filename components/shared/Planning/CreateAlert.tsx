import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
  } from "@/components/ui/alert-dialog"
import { Button } from "@/components/ui/button"
import { PencilIcon } from "lucide-react"
import Link from "next/link"
  
export default function CreateAlert() {
  return (
    <AlertDialog>
        <AlertDialogTrigger>
            <Button className="flex gap-2">
                <PencilIcon className="w-5 h-5" />
                Create Plan
            </Button>
        </AlertDialogTrigger>
        <AlertDialogContent className="text-white">
            <AlertDialogHeader>
                <AlertDialogTitle>Are you willing to create new retirement planning ?</AlertDialogTitle>
                <AlertDialogDescription>You will create new retirement plan!!</AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
                <AlertDialogCancel>Cancel</AlertDialogCancel>
                <AlertDialogAction>
                    <Link href={'/dashboard/planning/create'}>
                    Create
                    </Link>
                </AlertDialogAction>
            </AlertDialogFooter>
        </AlertDialogContent>
    </AlertDialog>
  )
}

import MessageBox from "@/components/shared/Assistant/MessageBox";
import MessageInputForm from "@/components/shared/Assistant/MessageInputForm";

export default function Page() {
  return (
    <div className="flex-1 text-white flex flex-col">
      <MessageBox />
      <MessageInputForm />
    </div>
  )
}
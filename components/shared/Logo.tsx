import Image from "next/image"

export default function Logo() {
  return (
    <div className="flex gap-2 items-center justify-center">
        <Image width={50} height={50} alt="" src={'/logo.jpg'} className="rounded-full" />
        <h1 className=" text-gray-400 text-lg font-semibold">FinCare</h1>
    </div>
  )
}

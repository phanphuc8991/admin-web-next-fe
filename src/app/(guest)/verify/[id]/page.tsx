import Verify from "@/components/auth/verify"

const VerifyPage = async ({
  params,
}: {
  params: Promise<{ id: string }>
}) => {

const { id } = await params

  return <div>
    <Verify id={id}/>
  </div>
}
export default VerifyPage;
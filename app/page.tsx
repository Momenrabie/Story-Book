import Button from "@/components/ui/BUtton2/button2";
import Input from "@/components/ui/Input/input";
export default function Home() {
  return (
    <div className="flex flex-col  pt-20 gap-6 items-center">
      <div className="flex-row flex gap-6 justify-center">
        <Button size="medium" variant="default" icon={<span>📧</span>}>
          إرسال
        </Button>
        <Button size="small" variant="hover">
          زر صغير
        </Button>
        <Button size="medium" variant="inactive">
          📧معطل
        </Button>
        <Button size="small" variant="default">
          📧
        </Button>
      </div>
      <div className=" flex-col  ">
        <h1 className="text-h1">Stories for Input</h1>
        <Input
          size="medium"
          variant="default"
          placeholder="enter text"
          types="text"
          className="mt-2 mb-2"
        ></Input>
        <Input
          size="medium"
          variant="error"
          placeholder="enter text"
          errorMessage="An error occurred."
          types="email"
          className="mt-2 mb-2"
        />
        <Input
          size="medium"
          variant="default"
          placeholder="enter password"
          types="password"
          className="mt-2 mb-2"
        />
        <Input
          size="medium"
          variant="default"
          placeholder="enter password"
          types="password"
          icon="🔍"
          className="mt-2 mb-2"
        />
      </div>
    </div>
  );
}

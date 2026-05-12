import { Button } from "@/components/ui/button";
import UserButton from "@/modules/auth/components/user-button";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col bg-white items-center justify-center min-h-screen">
     <Button>Click me</Button>
     <UserButton/>
    </div>
     
  );
}

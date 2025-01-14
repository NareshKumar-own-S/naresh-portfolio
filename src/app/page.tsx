import AppPage from "@/components/appPage/AppPage";
import Encryption from "@/components/encryption/Encryption";
import Skills from "@/components/skills/Skills";

export default function Home() {
  return (
    <main className="h-full w-full">
      <div className="flex flex-col gap-20">
        <AppPage />
        <Skills/>
        <Encryption/>
      </div>
    </main>
  );
}

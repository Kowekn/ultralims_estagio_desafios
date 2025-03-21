import { Cliente } from "./cliente";



export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 
    gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">




      <main className="flex flex-col gap-8 row-start-2  ">


        <div className="justify-items-center">
          <h1>Bem vindo</h1>

          <Cliente></Cliente>


        </div>


      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">

      </footer>
    </div>
  );
}

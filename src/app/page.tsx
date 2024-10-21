import { db } from "@/db";
import Link from "next/link";


export default async function Home() {
  const snippets = await db.snippet.findMany();

  const renderSnippets = snippets.map((snipett) => {
    return (<Link key={snipett.id}
      className="flex justify-between items-center p-2 border rounded"
      href={`/snippets/${snipett.id}`}>
      <div>{snipett.title}</div>
      <div>View</div>
    </Link>)
  })
  return (
    <div>
      <div className="flex justify-between m-2 items-center">
        <h1 className="font-bold text-xl">Snippets</h1>
        <Link href={'/snippets/new'} className="border p-2 rounded">new</Link>
      </div>
      <div className="flex gap-2 flex-col">
      {renderSnippets}
      </div>
    </div>
  );
}

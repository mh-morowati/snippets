import {db} from '@/db';

function SnippetCreatePage() {
    async function createSnippet(formData: FormData) {
        //this need tobe a server action!
        'use server'
        //check the users inputs and make they're valid
        const title =  formData.get('title') as string;
        const code = formData.get('code') as string;
        //create a new record in the database
      const snippet =  await db.snippet.create({
            data: {
                title,
                code
            }
        })
        //redirect the user back to the root route
    }
    return ( <form action="">
        <h3 className="font-bold m-3">Create a Snippet</h3>
        <div className="flex flex-col gap-4">
            <div className="flex gap-4">
                <label className="w-12" htmlFor="title">Title</label>
                <input className="border rounded p-2 w-full" type="text" name="title" id="title"/>
            </div>
            <div className="flex gap-4">
                <label className="w-12" htmlFor="code">Code</label>
                <textarea className="border rounded p-2 w-full" name="code" id="code"/>
            </div>
            <button className="bg-blue-200 rounded p-2" type="submit">
                Create
            </button>
        </div>
    </form> );
}

export default SnippetCreatePage;
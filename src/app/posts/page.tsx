import { Button } from '@/components/button';

interface PostProps {
  id: number;
  title: string;
  body: string;
  userId: number;
}

interface ResponseProps {
  posts: PostProps[];
}


export default async function Posts() {
  
  const response = await fetch('https://dummyjson.com/posts');
  const data: ResponseProps = await response.json();

  console.log(data);

  async function handleFetchPosts() {

    'use server';

    /** por ser do lado do servidor, ele aparecerá 
     * no terminal, não no console do navegador */
    console.log('CLICOUUU');

    const response = await fetch('https://dummyjson.com/posts');
    const data: ResponseProps = await response.json();

    console.log(data.posts);

  }

  async function handleSearchUsers(formData: FormData) {
    
    'use server';

    const userId = formData.get('userId');

    const response = await fetch(`https://dummyjson.com/posts/user/${userId}`);
    const data: ResponseProps = await response.json();

    console.log(data);

  }

  return(
  
    <div>

        <h1 className="text-center mt-5 mb-2 font-bold text-3xl">Todos os posts</h1>

        <button onClick={handleFetchPosts}>
          Buscar posts
        </button>

        {/* <Button /> */}

        <form 
          className='flex gap-2 my-4'
          action={handleSearchUsers}
        >

          <input 
            type='text' 
            placeholder='ID do usuário'
            className='border border-gray-200 p-2'
            name='userId'
          />

          <button
            className='bg-blue-500 text-white p-2'
            type='submit'
          >
            Buscar usuário
          </button>

        </form>

        <div className="flex flex-col gap-4 mx-2">
          {data.posts.map(post => (
            <div key={post.id} className='bg-gray-200 p-4 rounded-md'>
              <h2 className="font-bold">{post.title}</h2>
              <p>{post.body}</p>
            </div>
          ))}

        </div>

    </div>

  );

}
import { Header } from "./components/Header"
import { Sidebar } from "./components/Sidebar"
import { Post, PostType } from "./components/Post"
import styles from './App.module.css'
import './global.css'

const posts: PostType[] = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://avatars.githubusercontent.com/u/112272723?v=4',
      name: 'Gabriela Carniel',
      role: 'FrontEnd Developer',
    },
    content: [
      { type: 'paragraph', content: 'Fala galeraa 👋' },
      { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é Spacetime 🚀' },
      { type: 'link', content: 'jane.design/doctorcare' },
    ],
    publishedAt: new Date('2023-05-23 13:33:00')
  },
  {
    id: 2,
    author: {
      avatarUrl: 'https://pbs.twimg.com/profile_images/1648129238766067712/6G7griQW_400x400.jpg',
      name: 'Yasmim Kader',
      role: 'Bestseller Writer',
    },
    content: [
      { type: 'paragraph', content: 'Oiee gente' },
      { type: 'paragraph', content: 'Hoje vai sair capítulo novo, to ansiosa pra poder mostrar mais pra vocês' },
      // { type: 'link', content: 'jane.design/doctorcare' },
    ],
    publishedAt: new Date('2023-05-23 13:33:00')
  },
]

function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map((post) => {
            return (
              <Post
                key={post.id}
                post={post}
              />
            )
          })}

        </main>
      </div>
    </div >
  )
}

export default App

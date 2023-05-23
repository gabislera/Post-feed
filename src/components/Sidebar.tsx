import { Avatar } from './Avatar'
import styles from './Sidebar.module.css'
import { PencilLine } from 'phosphor-react'

export const Sidebar = () => {
  return (
    <aside className={styles.sidebar}>
      <img
        className={styles.cover}
        src="https://images.unsplash.com/photo-1605379399642-870262d3d051?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=40" alt="" />

      <div className={styles.profile}>
        <Avatar src="https://avatars.githubusercontent.com/u/112272723?v=4" />
        <strong>Gabi Carniel</strong>
        <span>FrontEnd Developer</span>
      </div>

      <footer>
        <a href="#"> <PencilLine size={20} /> Editar Seu perfil</a>
      </footer>
    </aside>
  )
}

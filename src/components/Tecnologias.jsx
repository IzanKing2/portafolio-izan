import styles from '../styles/Tecnologias.module.css'

const groups = [
  {
    title: 'Frontend',
    items: ['HTML5', 'CSS3', 'JavaScript', 'Angular'],
  },
  {
    title: 'Backend',
    items: ['PHP', 'Laravel', 'Java', 'Python'],
  },
  {
    title: 'Sistemas y Herramientas',
    items: ['Docker', 'Ubuntu', 'Git', 'GitHub'],
  },
]

function Tecnologias() {
  return (
    <section id="tecnologias" className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.title}>Tecnologías</h2>
        <div className={styles.decorativeLine}></div>
        <div className={styles.groups}>
          {groups.map((group) => (
            <div key={group.title} className={styles.group}>
              <h3 className={styles.groupTitle}>{group.title}</h3>
              <div className={styles.pills}>
                {group.items.map((item) => (
                  <span key={item} className={styles.pill}>{item}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Tecnologias

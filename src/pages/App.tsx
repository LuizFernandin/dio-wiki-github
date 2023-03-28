import React, { useState } from 'react'
import gitLogo from '../assets/logo.png'
import { Button } from '../components/Button'
import { Input } from '../components/Input'
import { ItemRepo } from '../components/itemRepo'
import { RepoType, Repos } from '../services/api'
import { Container } from '../styles/styles'

function App() {
  const [repos, setRepos] = useState<RepoType[]>([])
  const [currentRepo, setCurrentRepo] = useState('')

  const handleSearchRepo = async () => {
    await Repos.getRepo(currentRepo)
    .then(response => {

      const isExist = repos.find(repos => repos.id === response.id)

      if(!isExist) {
        setRepos(prev => [...prev, response])
      }

    })
    .catch((err) => {
      console.log(err)
      alert('Repositório não encontrado')
    });
  }

  const handleRemoveRepo = (id: number) => {
    setRepos(repos.filter((repos: RepoType) => repos.id !== id))
  }

  return (
    <Container>
      <img src={gitLogo} alt="github logo" width={72} height={72} />
      <Input onChange={e => setCurrentRepo(e.target.value)} />
      <Button onClick={handleSearchRepo} />

      {repos.map((repo, index) => <
        ItemRepo
          handleRemoveRepo={() => handleRemoveRepo(repo.id)}
          id={repo.id}
          name={repo.name}
          fullName={repo.full_name}
          urlGit={repo.html_url}
          key={index}
        />
      )}
    </Container>
  )
}

export default App

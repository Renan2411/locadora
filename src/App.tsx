import { Box, Button, TextField } from '@mui/material'
import './App.css'
import { ReactEventHandler, useState } from 'react'
import { DataGrid } from '@mui/x-data-grid'


interface CarroInterface {
  id: number,
  marca: string,
  modelo: string,
  ano: number,
  capacidade: string,
  potencia: number
}

const colunas = [
  {
    field: 'modelo',
    headerName: 'Modelo do Carro',
    width: 350,
  },
  {
    field: 'marca',
    headerName: 'Marca do Carro',
    width: 200,
  },
  {
    field: 'ano',
    headerName: 'Ano do Carro',
    width: 150,
  },
  {
    field: 'capacidade',
    headerName: 'Capacidade do Carro',
    width: 200,
  },
  {
    field: 'potencia',
    headerName: 'Potência do Carro',
    width: 150,
  },
]

function App() {
  const [marca, setMarca] = useState('')
  const [modelo, setModelo] = useState('')
  const [ano, setAno] = useState(0)
  const [capacidade, setCapacidade] = useState('')
  const [potencia, setPotencia] = useState(0)

  const [carros, setCarros] = useState<CarroInterface[]>([])


  function cadastrarCarro(carro: CarroInterface) {
    setCarros(carros => [carro, ...carros])
    limparCampos()
  }

  function montarObjetoCarro() {
    cadastrarCarro({ id: carros.length + 1, marca, modelo, ano, capacidade, potencia })
  }

  function limparCampos(){
    setMarca('')
    setModelo('')
    setAno(0)
    setCapacidade('')
    setPotencia(0)
  }

  return (
    <>
      <div className="container">
        <div className='teste'>

          <form className="formulario">

            <TextField
              variant="standard"
              label="Modelo do Carro"
              value={modelo}
              onChange={(e) => setModelo(e.target.value)}></TextField>

            <TextField
              variant="standard"
              label="Marca do Carro"
              value={marca}
              onChange={(e) => setMarca(e.target.value)}></TextField>

            <TextField
              variant="standard"
              label="Ano"
              value={ano}
              onChange={(e) => setAno(e.target.value)}></TextField>

            <TextField
              variant="standard"
              label="Capacidade"
              value={capacidade}
              onChange={(e) => setCapacidade(e.target.value)}></TextField>

            <TextField
              variant="standard"
              label="Potência em Cavalos"
              value={potencia}
              onChange={(e) => setPotencia(e.target.value)}></TextField>

            <Button variant="contained" onClick={montarObjetoCarro}>Contained</Button>
          </form>

        </div>

        <Box sx={{ height: 400, width: '100%' }}>
          <DataGrid
            className='tabela'
            rows={carros}
            columns={colunas}
            initialState={{
              pagination: {
                paginationModel: {
                  pageSize: 5,
                },
              },
            }}
            pageSizeOptions={[5]}
            disableRowSelectionOnClick
          />
        </Box>

      </div >
    </>
  )
}

export default App
